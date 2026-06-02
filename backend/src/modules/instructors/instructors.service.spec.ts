import { BadRequestException } from '@nestjs/common';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { InstructorsService } from './instructors.service.js';
import type { PrismaService } from '../../prisma/prisma.service.js';
import type { UploadsService } from '../uploads/uploads.service.js';

describe('InstructorsService', () => {
  const prisma = {
    instructorModule: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
    submission: {
      findMany: jest.fn(),
      count: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    user: {
      findMany: jest.fn(),
    },
  };

  const uploadsService = {
    getStoredFileKey: jest.fn(),
    getSignedReadUrl: jest.fn(),
  };

  const cache = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  };

  let service: InstructorsService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new InstructorsService(
      prisma as unknown as PrismaService,
      uploadsService as unknown as UploadsService,
      cache as unknown as ReturnType<typeof jest.fn>,
    );
  });

  it('returns short-lived signed read urls for instructor submissions', async () => {
    prisma.instructorModule.findMany.mockResolvedValue([
      { moduleId: 'module-1' },
    ]);
    prisma.submission.findMany.mockResolvedValue([
      {
        id: 'submission-1',
        studentId: 'student-1',
        fileKey: 'submissions/student-1.zip',
        fileUrl: null,
        score: null,
        feedback: null,
        status: 'submitted',
        createdAt: new Date('2026-04-18T09:00:00.000Z'),
        assignment: {
          title: 'Capstone',
          maxScore: 100,
          moduleId: 'module-1',
        },
      },
    ]);
    prisma.submission.count.mockResolvedValue(1);
    prisma.user.findMany.mockResolvedValue([
      { id: 'student-1', name: 'Test Student', email: 'student@test.com' },
    ]);
    uploadsService.getStoredFileKey.mockReturnValue(
      'submissions/student-1.zip',
    );
    uploadsService.getSignedReadUrl.mockResolvedValue(
      'https://signed.example/submissions/student-1.zip',
    );

    const result = await service.getSubmissions('instructor-1');

    expect(result.data).toHaveLength(1);
    expect(result.data[0]).toMatchObject({
      id: 'submission-1',
      fileReadUrl: 'https://signed.example/submissions/student-1.zip',
    });
    expect(result.data[0]).not.toHaveProperty('fileUrl');
  });

  it('rejects grading requests with unsupported statuses', async () => {
    await expect(
      service.gradeSubmission(
        'instructor-1',
        'submission-1',
        75,
        'Keep going',
        'pending',
      ),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.submission.findUnique).not.toHaveBeenCalled();
  });
});
