import { Injectable, BadRequestException } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

@Injectable()
export class UploadsService {
  private readonly s3: S3Client;
  private readonly bucketName: string;
  private readonly fileKeyPattern = /^uploads\/[A-Za-z0-9._/-]+$/;

  private readonly allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/zip',
  ];

  private readonly maxSizeBytes = 10 * 1024 * 1024; // 10 MB

  constructor() {
    this.bucketName = process.env.R2_BUCKET_NAME || 'fendam-uploads';

    this.s3 = new S3Client({
      region: 'auto',
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
      },
    });
  }

  /**
   * Generate a presigned PUT URL for direct upload to R2.
   * Returns the signed URL and a fileKey for the client to submit back.
   */
  async generatePresignedUrl(filename: string, contentType: string) {
    if (!this.allowedTypes.includes(contentType)) {
      throw new BadRequestException(
        `File type not allowed. Allowed: ${this.allowedTypes.join(', ')}`,
      );
    }

    // Sanitize filename
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const fileKey = `uploads/${randomUUID()}-${safeName}`;

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(this.s3, command, {
      expiresIn: 300, // 5 minutes
    });

    return { signedUrl, fileKey };
  }

  validateFileKey(fileKey: string): string {
    const normalized = fileKey.trim().replace(/^\/+/, '');
    if (
      !this.fileKeyPattern.test(normalized) ||
      normalized.includes('..') ||
      normalized.endsWith('/')
    ) {
      throw new BadRequestException('Invalid file reference');
    }

    return normalized;
  }

  getStoredFileKey(fileKey?: string | null, legacyUrl?: string | null): string {
    if (fileKey) {
      return this.validateFileKey(fileKey);
    }

    if (legacyUrl) {
      try {
        const parsed = new URL(legacyUrl);
        return this.validateFileKey(parsed.pathname.replace(/^\/+/, ''));
      } catch {
        throw new BadRequestException('Invalid file reference');
      }
    }

    throw new BadRequestException('Invalid file reference');
  }

  async getSignedReadUrl(fileKey: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: this.validateFileKey(fileKey),
    });

    return getSignedUrl(this.s3, command, {
      expiresIn: 300,
    });
  }
}
