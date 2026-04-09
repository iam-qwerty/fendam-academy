import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "session" | "account" | "verification" | "jwks" | "studentProfile" | "track" | "module" | "instructorModule" | "lesson" | "lessonCompletion" | "assignment" | "submission" | "kYCRecord";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Account: {
            payload: Prisma.$AccountPayload<ExtArgs>;
            fields: Prisma.AccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findFirst: {
                    args: Prisma.AccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findMany: {
                    args: Prisma.AccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                create: {
                    args: Prisma.AccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                createMany: {
                    args: Prisma.AccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                delete: {
                    args: Prisma.AccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                update: {
                    args: Prisma.AccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                deleteMany: {
                    args: Prisma.AccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                upsert: {
                    args: Prisma.AccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                aggregate: {
                    args: Prisma.AccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
                };
                groupBy: {
                    args: Prisma.AccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        Jwks: {
            payload: Prisma.$JwksPayload<ExtArgs>;
            fields: Prisma.JwksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JwksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JwksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                findFirst: {
                    args: Prisma.JwksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JwksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                findMany: {
                    args: Prisma.JwksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>[];
                };
                create: {
                    args: Prisma.JwksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                createMany: {
                    args: Prisma.JwksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JwksCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>[];
                };
                delete: {
                    args: Prisma.JwksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                update: {
                    args: Prisma.JwksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                deleteMany: {
                    args: Prisma.JwksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JwksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JwksUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>[];
                };
                upsert: {
                    args: Prisma.JwksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JwksPayload>;
                };
                aggregate: {
                    args: Prisma.JwksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJwks>;
                };
                groupBy: {
                    args: Prisma.JwksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JwksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JwksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JwksCountAggregateOutputType> | number;
                };
            };
        };
        StudentProfile: {
            payload: Prisma.$StudentProfilePayload<ExtArgs>;
            fields: Prisma.StudentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.StudentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findMany: {
                    args: Prisma.StudentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                create: {
                    args: Prisma.StudentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                createMany: {
                    args: Prisma.StudentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                delete: {
                    args: Prisma.StudentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                update: {
                    args: Prisma.StudentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.StudentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.StudentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentProfile>;
                };
                groupBy: {
                    args: Prisma.StudentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileCountAggregateOutputType> | number;
                };
            };
        };
        Track: {
            payload: Prisma.$TrackPayload<ExtArgs>;
            fields: Prisma.TrackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                findFirst: {
                    args: Prisma.TrackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                findMany: {
                    args: Prisma.TrackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>[];
                };
                create: {
                    args: Prisma.TrackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                createMany: {
                    args: Prisma.TrackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>[];
                };
                delete: {
                    args: Prisma.TrackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                update: {
                    args: Prisma.TrackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                deleteMany: {
                    args: Prisma.TrackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrackUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>[];
                };
                upsert: {
                    args: Prisma.TrackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrackPayload>;
                };
                aggregate: {
                    args: Prisma.TrackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrack>;
                };
                groupBy: {
                    args: Prisma.TrackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrackCountAggregateOutputType> | number;
                };
            };
        };
        Module: {
            payload: Prisma.$ModulePayload<ExtArgs>;
            fields: Prisma.ModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findFirst: {
                    args: Prisma.ModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findMany: {
                    args: Prisma.ModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                create: {
                    args: Prisma.ModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                createMany: {
                    args: Prisma.ModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                delete: {
                    args: Prisma.ModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                update: {
                    args: Prisma.ModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                deleteMany: {
                    args: Prisma.ModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                upsert: {
                    args: Prisma.ModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                aggregate: {
                    args: Prisma.ModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModule>;
                };
                groupBy: {
                    args: Prisma.ModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleCountAggregateOutputType> | number;
                };
            };
        };
        InstructorModule: {
            payload: Prisma.$InstructorModulePayload<ExtArgs>;
            fields: Prisma.InstructorModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InstructorModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InstructorModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                findFirst: {
                    args: Prisma.InstructorModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InstructorModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                findMany: {
                    args: Prisma.InstructorModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>[];
                };
                create: {
                    args: Prisma.InstructorModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                createMany: {
                    args: Prisma.InstructorModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InstructorModuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>[];
                };
                delete: {
                    args: Prisma.InstructorModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                update: {
                    args: Prisma.InstructorModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                deleteMany: {
                    args: Prisma.InstructorModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InstructorModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InstructorModuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>[];
                };
                upsert: {
                    args: Prisma.InstructorModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorModulePayload>;
                };
                aggregate: {
                    args: Prisma.InstructorModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstructorModule>;
                };
                groupBy: {
                    args: Prisma.InstructorModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstructorModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InstructorModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstructorModuleCountAggregateOutputType> | number;
                };
            };
        };
        Lesson: {
            payload: Prisma.$LessonPayload<ExtArgs>;
            fields: Prisma.LessonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findFirst: {
                    args: Prisma.LessonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findMany: {
                    args: Prisma.LessonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                create: {
                    args: Prisma.LessonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                createMany: {
                    args: Prisma.LessonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                delete: {
                    args: Prisma.LessonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                update: {
                    args: Prisma.LessonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                upsert: {
                    args: Prisma.LessonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                aggregate: {
                    args: Prisma.LessonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson>;
                };
                groupBy: {
                    args: Prisma.LessonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCountAggregateOutputType> | number;
                };
            };
        };
        LessonCompletion: {
            payload: Prisma.$LessonCompletionPayload<ExtArgs>;
            fields: Prisma.LessonCompletionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonCompletionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonCompletionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                findFirst: {
                    args: Prisma.LessonCompletionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonCompletionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                findMany: {
                    args: Prisma.LessonCompletionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[];
                };
                create: {
                    args: Prisma.LessonCompletionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                createMany: {
                    args: Prisma.LessonCompletionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonCompletionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[];
                };
                delete: {
                    args: Prisma.LessonCompletionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                update: {
                    args: Prisma.LessonCompletionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonCompletionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonCompletionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonCompletionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[];
                };
                upsert: {
                    args: Prisma.LessonCompletionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                aggregate: {
                    args: Prisma.LessonCompletionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessonCompletion>;
                };
                groupBy: {
                    args: Prisma.LessonCompletionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCompletionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCompletionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCompletionCountAggregateOutputType> | number;
                };
            };
        };
        Assignment: {
            payload: Prisma.$AssignmentPayload<ExtArgs>;
            fields: Prisma.AssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.AssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                findMany: {
                    args: Prisma.AssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                create: {
                    args: Prisma.AssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                createMany: {
                    args: Prisma.AssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                delete: {
                    args: Prisma.AssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                update: {
                    args: Prisma.AssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.AssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.AssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssignment>;
                };
                groupBy: {
                    args: Prisma.AssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentCountAggregateOutputType> | number;
                };
            };
        };
        Submission: {
            payload: Prisma.$SubmissionPayload<ExtArgs>;
            fields: Prisma.SubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.SubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findMany: {
                    args: Prisma.SubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                create: {
                    args: Prisma.SubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                createMany: {
                    args: Prisma.SubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                delete: {
                    args: Prisma.SubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                update: {
                    args: Prisma.SubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.SubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.SubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubmission>;
                };
                groupBy: {
                    args: Prisma.SubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionCountAggregateOutputType> | number;
                };
            };
        };
        KYCRecord: {
            payload: Prisma.$KYCRecordPayload<ExtArgs>;
            fields: Prisma.KYCRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KYCRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KYCRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                findFirst: {
                    args: Prisma.KYCRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KYCRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                findMany: {
                    args: Prisma.KYCRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>[];
                };
                create: {
                    args: Prisma.KYCRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                createMany: {
                    args: Prisma.KYCRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KYCRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>[];
                };
                delete: {
                    args: Prisma.KYCRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                update: {
                    args: Prisma.KYCRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.KYCRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KYCRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KYCRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>[];
                };
                upsert: {
                    args: Prisma.KYCRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KYCRecordPayload>;
                };
                aggregate: {
                    args: Prisma.KYCRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKYCRecord>;
                };
                groupBy: {
                    args: Prisma.KYCRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KYCRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KYCRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KYCRecordCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    session?: Prisma.SessionOmit;
    account?: Prisma.AccountOmit;
    verification?: Prisma.VerificationOmit;
    jwks?: Prisma.JwksOmit;
    studentProfile?: Prisma.StudentProfileOmit;
    track?: Prisma.TrackOmit;
    module?: Prisma.ModuleOmit;
    instructorModule?: Prisma.InstructorModuleOmit;
    lesson?: Prisma.LessonOmit;
    lessonCompletion?: Prisma.LessonCompletionOmit;
    assignment?: Prisma.AssignmentOmit;
    submission?: Prisma.SubmissionOmit;
    kYCRecord?: Prisma.KYCRecordOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
