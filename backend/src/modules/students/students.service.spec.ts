import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { StudentsService } from './students.service.js';
import type { PrismaService } from '../../prisma/prisma.service.js';
import type { UploadsService } from '../uploads/uploads.service.js';

describe('StudentsService', () => {
  const prisma = {
    studentProfile: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    assignment: {
      findFirst: jest.fn(),
    },
    submission: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    kYCRecord: {
      create: jest.fn(),
    },
  };

  const uploadsService = {
    validateFileKey: jest.fn((fileKey: string) => fileKey.trim()),
  };

  let service: StudentsService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new StudentsService(
      prisma as unknown as PrismaService,
      uploadsService as unknown as UploadsService,
    );
  });

  it('rejects submissions past the due date', async () => {
    prisma.studentProfile.findUnique.mockResolvedValue({
      userId: 'student-1',
      trackId: 'track-1',
    });
    prisma.assignment.findFirst.mockResolvedValue({
      id: 'assignment-1',
      dueDate: new Date('2026-01-01T00:00:00.000Z'),
    });

    await expect(
      service.createSubmission(
        'assignment-1',
        ' submissions/student-1.zip ',
        'student-1',
      ),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.submission.create).not.toHaveBeenCalled();
  });

  it('rejects duplicate submissions for the same assignment and student', async () => {
    prisma.studentProfile.findUnique.mockResolvedValue({
      userId: 'student-1',
      trackId: 'track-1',
    });
    prisma.assignment.findFirst.mockResolvedValue({
      id: 'assignment-1',
      dueDate: new Date('2026-12-01T00:00:00.000Z'),
    });
    prisma.submission.findUnique.mockResolvedValue({ id: 'submission-1' });

    await expect(
      service.createSubmission(
        'assignment-1',
        'submissions/student-1.zip',
        'student-1',
      ),
    ).rejects.toBeInstanceOf(ConflictException);

    expect(prisma.submission.create).not.toHaveBeenCalled();
  });

  it('raises not found when a student without a profile tries to submit KYC', async () => {
    prisma.studentProfile.update.mockRejectedValue(
      new NotFoundException('Student profile not found'),
    );

    await expect(
      service.submitKyc(
        'uploads/id-card.png',
        'uploads/payment-proof.png',
        'student-1',
      ),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});
