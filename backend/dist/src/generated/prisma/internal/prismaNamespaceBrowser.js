import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Jwks: 'Jwks',
    StudentProfile: 'StudentProfile',
    Track: 'Track',
    Module: 'Module',
    InstructorModule: 'InstructorModule',
    Lesson: 'Lesson',
    LessonCompletion: 'LessonCompletion',
    Assignment: 'Assignment',
    Submission: 'Submission',
    KYCRecord: 'KYCRecord'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const VerificationScalarFieldEnum = {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const JwksScalarFieldEnum = {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    createdAt: 'createdAt'
};
export const StudentProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    trackId: 'trackId',
    kycStatus: 'kycStatus',
    enrollmentStatus: 'enrollmentStatus',
    progressPercent: 'progressPercent'
};
export const TrackScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
export const ModuleScalarFieldEnum = {
    id: 'id',
    trackId: 'trackId',
    title: 'title',
    orderIndex: 'orderIndex'
};
export const InstructorModuleScalarFieldEnum = {
    id: 'id',
    instructorId: 'instructorId',
    moduleId: 'moduleId',
    assignedAt: 'assignedAt'
};
export const LessonScalarFieldEnum = {
    id: 'id',
    moduleId: 'moduleId',
    title: 'title',
    vimeoId: 'vimeoId',
    resources: 'resources',
    orderIndex: 'orderIndex'
};
export const LessonCompletionScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    studentId: 'studentId',
    completedAt: 'completedAt'
};
export const AssignmentScalarFieldEnum = {
    id: 'id',
    moduleId: 'moduleId',
    title: 'title',
    instructions: 'instructions',
    dueDate: 'dueDate',
    maxScore: 'maxScore'
};
export const SubmissionScalarFieldEnum = {
    id: 'id',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    fileUrl: 'fileUrl',
    score: 'score',
    feedback: 'feedback',
    status: 'status',
    createdAt: 'createdAt'
};
export const KYCRecordScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    idCardUrl: 'idCardUrl',
    paymentProofUrl: 'paymentProofUrl',
    status: 'status',
    reviewComment: 'reviewComment',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map