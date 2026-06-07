import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  json,
  unique,
  index,
} from 'drizzle-orm/pg-core'

// ─── Better Auth Tables (match Prisma PascalCase / camelCase) ──────

export const user = pgTable('User', {
  id: text().primaryKey(),
  email: text().notNull().unique(),
  name: text(),
  image: text(),
  role: text().notNull().default('student'),
  emailVerified: boolean('emailVerified').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('Session', {
  id: text().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  token: text().notNull().unique(),
  expiresAt: timestamp('expiresAt').notNull(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const account = pgTable(
  'Account',
  {
    id: text().primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    accessToken: text('accessToken'),
    refreshToken: text('refreshToken'),
    accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
    refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
    scope: text(),
    password: text(),
    idToken: text('idToken'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [
    unique().on(table.providerId, table.accountId),
  ]
)

export const verification = pgTable('Verification', {
  id: text().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const jwks = pgTable('Jwks', {
  id: text().primaryKey(),
  publicKey: text('publicKey').notNull(),
  privateKey: text('privateKey').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// ─── App Tables ────────────────────────────────────────────────────

export const track = pgTable('Track', {
  id: text().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
})

export const studentProfile = pgTable('StudentProfile', {
  id: text().primaryKey(),
  userId: text('userId')
    .notNull()
    .unique()
    .references(() => user.id),
  trackId: text('trackId')
    .notNull()
    .references(() => track.id),
  kycStatus: text('kycStatus').notNull().default('not_started'),
  enrollmentStatus: text('enrollmentStatus').notNull().default('applied'),
})

export const module = pgTable('Module', {
  id: text().primaryKey(),
  trackId: text('trackId')
    .notNull()
    .references(() => track.id),
  title: text().notNull(),
  orderIndex: integer('orderIndex').notNull(),
})

export const instructorModule = pgTable(
  'InstructorModule',
  {
    id: text().primaryKey(),
    instructorId: text('instructorId').notNull(),
    moduleId: text('moduleId')
      .notNull()
      .references(() => module.id),
    assignedAt: timestamp('assignedAt').notNull().defaultNow(),
  },
  (table) => [
    unique().on(table.instructorId, table.moduleId),
    index().on(table.instructorId),
    index().on(table.moduleId),
  ]
)

export const lesson = pgTable('Lesson', {
  id: text().primaryKey(),
  moduleId: text('moduleId')
    .notNull()
    .references(() => module.id),
  title: text().notNull(),
  vimeoId: text('vimeoId').notNull(),
  resources: json().notNull().default([]),
  orderIndex: integer('orderIndex').notNull().default(0),
})

export const lessonCompletion = pgTable(
  'LessonCompletion',
  {
    id: text().primaryKey(),
    lessonId: text('lessonId')
      .notNull()
      .references(() => lesson.id),
    studentId: text('studentId').notNull(),
    completedAt: timestamp('completedAt').notNull().defaultNow(),
  },
  (table) => [
    unique().on(table.lessonId, table.studentId),
    index().on(table.studentId),
    index().on(table.lessonId),
  ]
)

export const assignment = pgTable('Assignment', {
  id: text().primaryKey(),
  moduleId: text('moduleId')
    .notNull()
    .references(() => module.id),
  title: text().notNull(),
  instructions: text().notNull(),
  dueDate: timestamp('dueDate').notNull(),
  maxScore: integer('maxScore').notNull(),
})

export const submission = pgTable(
  'Submission',
  {
    id: text().primaryKey(),
    assignmentId: text('assignmentId')
      .notNull()
      .references(() => assignment.id),
    studentId: text('studentId').notNull(),
    fileUrl: text('fileUrl'),
    fileKey: text('fileKey').notNull(),
    score: integer(),
    feedback: text(),
    status: text().notNull().default('submitted'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
  },
  (table) => [
    unique().on(table.assignmentId, table.studentId),
    index().on(table.studentId),
    index().on(table.assignmentId),
    index().on(table.status),
  ]
)

export const kycRecord = pgTable(
  'KYCRecord',
  {
    id: text().primaryKey(),
    studentId: text('studentId').notNull(),
    idCardUrl: text('idCardUrl'),
    idCardFileKey: text('idCardFileKey').notNull(),
    paymentProofUrl: text('paymentProofUrl'),
    paymentProofFileKey: text('paymentProofFileKey').notNull(),
    status: text().notNull().default('submitted'),
    reviewComment: text('reviewComment'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
  },
  (table) => [
    index().on(table.studentId),
    index().on(table.status),
  ]
)
