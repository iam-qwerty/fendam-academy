import { ValidationPipe } from '@nestjs/common';
import type { ExecutionContext, INestApplication } from '@nestjs/common';
import type { Request } from 'express';
import type { Server } from 'http';
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { StudentsModule } from '../src/modules/students/students.module.js';
import { StudentsService } from '../src/modules/students/students.service.js';
import { JwtAuthGuard } from '../src/modules/auth/jwt-auth.guard.js';
import { RolesGuard } from '../src/modules/auth/roles.guard.js';
import type { AuthUser } from '../src/modules/auth/auth.types.js';

describe('StudentsController KYC (e2e)', () => {
  const studentsService = {
    submitKyc: jest.fn(),
  };

  let app: INestApplication;
  let currentUser: AuthUser;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [StudentsModule],
    })
      .overrideProvider(StudentsService)
      .useValue(studentsService)
      .overrideGuard(JwtAuthGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => {
          const req = context.switchToHttp().getRequest<Request>();
          req.user = currentUser;
          return true;
        },
      })
      .overrideGuard(RolesGuard)
      .useValue({
        canActivate: () => true,
      })
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  beforeEach(() => {
    currentUser = {
      sub: 'student-1',
      email: 'student@example.com',
      role: 'student',
      emailVerified: false,
    };
    studentsService.submitKyc.mockReset();
    studentsService.submitKyc.mockResolvedValue({ id: 'kyc-1' });
  });

  afterAll(async () => {
    await app.close();
  });

  it('blocks unverified students from posting KYC', async () => {
    const server = app.getHttpServer() as Server;

    await request(server)
      .post('/student/kyc')
      .send({
        idCardFileKey: 'uploads/id-card.png',
        paymentProofFileKey: 'uploads/payment-proof.png',
      })
      .expect(403);

    expect(studentsService.submitKyc).not.toHaveBeenCalled();
  });

  it('allows verified students to submit KYC', async () => {
    currentUser = {
      ...currentUser,
      emailVerified: true,
    };
    const server = app.getHttpServer() as Server;

    await request(server)
      .post('/student/kyc')
      .send({
        idCardFileKey: 'uploads/id-card.png',
        paymentProofFileKey: 'uploads/payment-proof.png',
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({ id: 'kyc-1' });
      });

    expect(studentsService.submitKyc).toHaveBeenCalledWith(
      'uploads/id-card.png',
      'uploads/payment-proof.png',
      'student-1',
    );
  });
});
