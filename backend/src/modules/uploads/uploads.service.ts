import { Injectable, BadRequestException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UploadsService {
  private readonly allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/zip',
  ];

  /**
   * Generate a presigned URL for direct upload to R2.
   * STUBBED for MVP — returns a placeholder signed URL.
   * TODO: Integrate with actual R2 SDK when credentials are ready.
   */
  generatePresignedUrl(filename: string, contentType: string) {
    if (!this.allowedTypes.includes(contentType))
      throw new BadRequestException(
        `File type not allowed. Allowed: ${this.allowedTypes.join(', ')}`,
      );

    const fileKey = `uploads/${randomUUID()}-${filename}`;

    // TODO: Replace with actual R2 presigned URL generation
    // const signedUrl = this.r2.getSignedUrl('PUT', fileKey, { expiresIn: 300, contentType });
    const signedUrl = `https://${process.env.R2_PUBLIC_DOMAIN || 'r2-stub.example.com'}/${fileKey}?stub=true`;

    return { signedUrl, fileKey };
  }

  /** Reconstruct canonical R2 URL from fileKey — called server-side only */
  canonicalUrl(fileKey: string): string {
    return `https://${process.env.R2_PUBLIC_DOMAIN || 'r2-stub.example.com'}/${fileKey}`;
  }
}
