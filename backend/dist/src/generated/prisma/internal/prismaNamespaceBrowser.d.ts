import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Jwks: "Jwks";
    readonly StudentProfile: "StudentProfile";
    readonly Track: "Track";
    readonly Module: "Module";
    readonly InstructorModule: "InstructorModule";
    readonly Lesson: "Lesson";
    readonly LessonCompletion: "LessonCompletion";
    readonly Assignment: "Assignment";
    readonly Submission: "Submission";
    readonly KYCRecord: "KYCRecord";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly role: "role";
    readonly emailVerified: "emailVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const JwksScalarFieldEnum: {
    readonly id: "id";
    readonly publicKey: "publicKey";
    readonly privateKey: "privateKey";
    readonly createdAt: "createdAt";
};
export type JwksScalarFieldEnum = (typeof JwksScalarFieldEnum)[keyof typeof JwksScalarFieldEnum];
export declare const StudentProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly trackId: "trackId";
    readonly kycStatus: "kycStatus";
    readonly enrollmentStatus: "enrollmentStatus";
    readonly progressPercent: "progressPercent";
};
export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum];
export declare const TrackScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum];
export declare const ModuleScalarFieldEnum: {
    readonly id: "id";
    readonly trackId: "trackId";
    readonly title: "title";
    readonly orderIndex: "orderIndex";
};
export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];
export declare const InstructorModuleScalarFieldEnum: {
    readonly id: "id";
    readonly instructorId: "instructorId";
    readonly moduleId: "moduleId";
    readonly assignedAt: "assignedAt";
};
export type InstructorModuleScalarFieldEnum = (typeof InstructorModuleScalarFieldEnum)[keyof typeof InstructorModuleScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly moduleId: "moduleId";
    readonly title: "title";
    readonly vimeoId: "vimeoId";
    readonly resources: "resources";
    readonly orderIndex: "orderIndex";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const LessonCompletionScalarFieldEnum: {
    readonly id: "id";
    readonly lessonId: "lessonId";
    readonly studentId: "studentId";
    readonly completedAt: "completedAt";
};
export type LessonCompletionScalarFieldEnum = (typeof LessonCompletionScalarFieldEnum)[keyof typeof LessonCompletionScalarFieldEnum];
export declare const AssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly moduleId: "moduleId";
    readonly title: "title";
    readonly instructions: "instructions";
    readonly dueDate: "dueDate";
    readonly maxScore: "maxScore";
};
export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];
export declare const SubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly assignmentId: "assignmentId";
    readonly studentId: "studentId";
    readonly fileUrl: "fileUrl";
    readonly score: "score";
    readonly feedback: "feedback";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum];
export declare const KYCRecordScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly idCardUrl: "idCardUrl";
    readonly paymentProofUrl: "paymentProofUrl";
    readonly status: "status";
    readonly reviewComment: "reviewComment";
    readonly createdAt: "createdAt";
};
export type KYCRecordScalarFieldEnum = (typeof KYCRecordScalarFieldEnum)[keyof typeof KYCRecordScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
