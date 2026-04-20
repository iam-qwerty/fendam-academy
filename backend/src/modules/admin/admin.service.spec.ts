import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { AdminService } from './admin.service.js';
import type { PrismaService } from '../../prisma/prisma.service.js';
import type { UploadsService } from '../uploads/uploads.service.js';

describe('AdminService', () => {
  const prisma = {
    kYCRecord: {
      findMany: jest.fn(),
      count: jest.fn(),
    },
    user: {
      findMany: jest.fn(),
    },
  };

  const uploadsService = {
    getStoredFileKey: jest.fn(),
    getSignedReadUrl: jest.fn(),
  };

  let service: AdminService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AdminService(
      prisma as unknown as PrismaService,
      uploadsService as unknown as UploadsService,
    );
  });

  it('returns signed read urls for KYC documents', async () => {
    prisma.kYCRecord.findMany.mockResolvedValue([
      {
        id: 'kyc-1',
        studentId: 'student-1',
        idCardFileKey: 'kyc/id-card.png',
        idCardUrl: null,
        paymentProofFileKey: 'kyc/payment-proof.png',
        paymentProofUrl: null,
        status: 'submitted',
        reviewComment: null,
        createdAt: new Date('2026-04-18T09:00:00.000Z'),
      },
    ]);
    prisma.kYCRecord.count.mockResolvedValue(1);
    prisma.user.findMany.mockResolvedValue([
      {
        id: 'student-1',
        name: 'Student One',
        email: 'student@example.com',
      },
    ]);
    uploadsService.getStoredFileKey
      .mockReturnValueOnce('kyc/id-card.png')
      .mockReturnValueOnce('kyc/payment-proof.png');
    uploadsService.getSignedReadUrl
      .mockResolvedValueOnce('https://signed.example/kyc/id-card.png')
      .mockResolvedValueOnce('https://signed.example/kyc/payment-proof.png');

    const result = await service.getKycQueue();

    expect(result.data).toHaveLength(1);
    expect(result.data[0]).toMatchObject({
      id: 'kyc-1',
      idCardReadUrl: 'https://signed.example/kyc/id-card.png',
      paymentProofReadUrl: 'https://signed.example/kyc/payment-proof.png',
    });
    expect(result.data[0]).not.toHaveProperty('idCardUrl');
    expect(result.data[0]).not.toHaveProperty('paymentProofUrl');
  });
});
