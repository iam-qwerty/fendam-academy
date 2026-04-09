import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubmissionPayload>;
export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null;
    _avg: SubmissionAvgAggregateOutputType | null;
    _sum: SubmissionSumAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
};
export type SubmissionAvgAggregateOutputType = {
    score: number | null;
};
export type SubmissionSumAggregateOutputType = {
    score: number | null;
};
export type SubmissionMinAggregateOutputType = {
    id: string | null;
    assignmentId: string | null;
    studentId: string | null;
    fileUrl: string | null;
    score: number | null;
    feedback: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type SubmissionMaxAggregateOutputType = {
    id: string | null;
    assignmentId: string | null;
    studentId: string | null;
    fileUrl: string | null;
    score: number | null;
    feedback: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type SubmissionCountAggregateOutputType = {
    id: number;
    assignmentId: number;
    studentId: number;
    fileUrl: number;
    score: number;
    feedback: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type SubmissionAvgAggregateInputType = {
    score?: true;
};
export type SubmissionSumAggregateInputType = {
    score?: true;
};
export type SubmissionMinAggregateInputType = {
    id?: true;
    assignmentId?: true;
    studentId?: true;
    fileUrl?: true;
    score?: true;
    feedback?: true;
    status?: true;
    createdAt?: true;
};
export type SubmissionMaxAggregateInputType = {
    id?: true;
    assignmentId?: true;
    studentId?: true;
    fileUrl?: true;
    score?: true;
    feedback?: true;
    status?: true;
    createdAt?: true;
};
export type SubmissionCountAggregateInputType = {
    id?: true;
    assignmentId?: true;
    studentId?: true;
    fileUrl?: true;
    score?: true;
    feedback?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type SubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubmissionCountAggregateInputType;
    _avg?: SubmissionAvgAggregateInputType;
    _sum?: SubmissionSumAggregateInputType;
    _min?: SubmissionMinAggregateInputType;
    _max?: SubmissionMaxAggregateInputType;
};
export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubmission[P]> : Prisma.GetScalarType<T[P], AggregateSubmission[P]>;
};
export type SubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithAggregationInput | Prisma.SubmissionOrderByWithAggregationInput[];
    by: Prisma.SubmissionScalarFieldEnum[] | Prisma.SubmissionScalarFieldEnum;
    having?: Prisma.SubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubmissionCountAggregateInputType | true;
    _avg?: SubmissionAvgAggregateInputType;
    _sum?: SubmissionSumAggregateInputType;
    _min?: SubmissionMinAggregateInputType;
    _max?: SubmissionMaxAggregateInputType;
};
export type SubmissionGroupByOutputType = {
    id: string;
    assignmentId: string;
    studentId: string;
    fileUrl: string;
    score: number | null;
    feedback: string | null;
    status: string;
    createdAt: Date;
    _count: SubmissionCountAggregateOutputType | null;
    _avg: SubmissionAvgAggregateOutputType | null;
    _sum: SubmissionSumAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
};
export type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubmissionGroupByOutputType[P]>;
}>>;
export type SubmissionWhereInput = {
    AND?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    OR?: Prisma.SubmissionWhereInput[];
    NOT?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    id?: Prisma.StringFilter<"Submission"> | string;
    assignmentId?: Prisma.StringFilter<"Submission"> | string;
    studentId?: Prisma.StringFilter<"Submission"> | string;
    fileUrl?: Prisma.StringFilter<"Submission"> | string;
    score?: Prisma.IntNullableFilter<"Submission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"Submission"> | string | null;
    status?: Prisma.StringFilter<"Submission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    assignment?: Prisma.XOR<Prisma.AssignmentScalarRelationFilter, Prisma.AssignmentWhereInput>;
};
export type SubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    assignment?: Prisma.AssignmentOrderByWithRelationInput;
};
export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    OR?: Prisma.SubmissionWhereInput[];
    NOT?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    assignmentId?: Prisma.StringFilter<"Submission"> | string;
    studentId?: Prisma.StringFilter<"Submission"> | string;
    fileUrl?: Prisma.StringFilter<"Submission"> | string;
    score?: Prisma.IntNullableFilter<"Submission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"Submission"> | string | null;
    status?: Prisma.StringFilter<"Submission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    assignment?: Prisma.XOR<Prisma.AssignmentScalarRelationFilter, Prisma.AssignmentWhereInput>;
}, "id">;
export type SubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SubmissionCountOrderByAggregateInput;
    _avg?: Prisma.SubmissionAvgOrderByAggregateInput;
    _max?: Prisma.SubmissionMaxOrderByAggregateInput;
    _min?: Prisma.SubmissionMinOrderByAggregateInput;
    _sum?: Prisma.SubmissionSumOrderByAggregateInput;
};
export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubmissionScalarWhereWithAggregatesInput | Prisma.SubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubmissionScalarWhereWithAggregatesInput | Prisma.SubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    assignmentId?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    score?: Prisma.IntNullableWithAggregatesFilter<"Submission"> | number | null;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"Submission"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Submission"> | Date | string;
};
export type SubmissionCreateInput = {
    id?: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
    assignment: Prisma.AssignmentCreateNestedOneWithoutSubmissionsInput;
};
export type SubmissionUncheckedCreateInput = {
    id?: string;
    assignmentId: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type SubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: Prisma.AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput;
};
export type SubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionCreateManyInput = {
    id?: string;
    assignmentId: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type SubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionListRelationFilter = {
    every?: Prisma.SubmissionWhereInput;
    some?: Prisma.SubmissionWhereInput;
    none?: Prisma.SubmissionWhereInput;
};
export type SubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubmissionAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type SubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubmissionSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput> | Prisma.SubmissionCreateWithoutAssignmentInput[] | Prisma.SubmissionUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutAssignmentInput | Prisma.SubmissionCreateOrConnectWithoutAssignmentInput[];
    createMany?: Prisma.SubmissionCreateManyAssignmentInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput> | Prisma.SubmissionCreateWithoutAssignmentInput[] | Prisma.SubmissionUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutAssignmentInput | Prisma.SubmissionCreateOrConnectWithoutAssignmentInput[];
    createMany?: Prisma.SubmissionCreateManyAssignmentInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput> | Prisma.SubmissionCreateWithoutAssignmentInput[] | Prisma.SubmissionUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutAssignmentInput | Prisma.SubmissionCreateOrConnectWithoutAssignmentInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: Prisma.SubmissionCreateManyAssignmentInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutAssignmentInput | Prisma.SubmissionUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput> | Prisma.SubmissionCreateWithoutAssignmentInput[] | Prisma.SubmissionUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutAssignmentInput | Prisma.SubmissionCreateOrConnectWithoutAssignmentInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: Prisma.SubmissionCreateManyAssignmentInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutAssignmentInput | Prisma.SubmissionUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SubmissionCreateWithoutAssignmentInput = {
    id?: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput>;
};
export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: Prisma.SubmissionCreateManyAssignmentInput | Prisma.SubmissionCreateManyAssignmentInput[];
    skipDuplicates?: boolean;
};
export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubmissionUpdateWithoutAssignmentInput, Prisma.SubmissionUncheckedUpdateWithoutAssignmentInput>;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutAssignmentInput, Prisma.SubmissionUncheckedCreateWithoutAssignmentInput>;
};
export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateWithoutAssignmentInput, Prisma.SubmissionUncheckedUpdateWithoutAssignmentInput>;
};
export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: Prisma.SubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyWithoutAssignmentInput>;
};
export type SubmissionScalarWhereInput = {
    AND?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
    OR?: Prisma.SubmissionScalarWhereInput[];
    NOT?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"Submission"> | string;
    assignmentId?: Prisma.StringFilter<"Submission"> | string;
    studentId?: Prisma.StringFilter<"Submission"> | string;
    fileUrl?: Prisma.StringFilter<"Submission"> | string;
    score?: Prisma.IntNullableFilter<"Submission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"Submission"> | string | null;
    status?: Prisma.StringFilter<"Submission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
};
export type SubmissionCreateManyAssignmentInput = {
    id?: string;
    studentId: string;
    fileUrl: string;
    score?: number | null;
    feedback?: string | null;
    status?: string;
    createdAt?: Date | string;
};
export type SubmissionUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    studentId?: boolean;
    fileUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    status?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    studentId?: boolean;
    fileUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    status?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    studentId?: boolean;
    fileUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    status?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectScalar = {
    id?: boolean;
    assignmentId?: boolean;
    studentId?: boolean;
    fileUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type SubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assignmentId" | "studentId" | "fileUrl" | "score" | "feedback" | "status" | "createdAt", ExtArgs["result"]["submission"]>;
export type SubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type $SubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Submission";
    objects: {
        assignment: Prisma.$AssignmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assignmentId: string;
        studentId: string;
        fileUrl: string;
        score: number | null;
        feedback: string | null;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["submission"]>;
    composites: {};
};
export type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubmissionPayload, S>;
export type SubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubmissionCountAggregateInputType | true;
};
export interface SubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Submission'];
        meta: {
            name: 'Submission';
        };
    };
    findUnique<T extends SubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubmissionCreateArgs>(args: Prisma.SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubmissionDeleteArgs>(args: Prisma.SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubmissionUpdateArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubmissionUpsertArgs>(args: Prisma.SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubmissionCountArgs>(args?: Prisma.Subset<T, SubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubmissionCountAggregateOutputType> : number>;
    aggregate<T extends SubmissionAggregateArgs>(args: Prisma.Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>;
    groupBy<T extends SubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: SubmissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubmissionFieldRefs;
}
export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignment<T extends Prisma.AssignmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssignmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"Submission", 'String'>;
    readonly assignmentId: Prisma.FieldRef<"Submission", 'String'>;
    readonly studentId: Prisma.FieldRef<"Submission", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"Submission", 'String'>;
    readonly score: Prisma.FieldRef<"Submission", 'Int'>;
    readonly feedback: Prisma.FieldRef<"Submission", 'String'>;
    readonly status: Prisma.FieldRef<"Submission", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Submission", 'DateTime'>;
}
export type SubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubmissionScalarFieldEnum | Prisma.SubmissionScalarFieldEnum[];
};
export type SubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubmissionScalarFieldEnum | Prisma.SubmissionScalarFieldEnum[];
};
export type SubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubmissionScalarFieldEnum | Prisma.SubmissionScalarFieldEnum[];
};
export type SubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionCreateInput, Prisma.SubmissionUncheckedCreateInput>;
};
export type SubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubmissionCreateManyInput | Prisma.SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    data: Prisma.SubmissionCreateManyInput | Prisma.SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionUpdateInput, Prisma.SubmissionUncheckedUpdateInput>;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyInput>;
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
};
export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyInput>;
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
    include?: Prisma.SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubmissionCreateInput, Prisma.SubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubmissionUpdateInput, Prisma.SubmissionUncheckedUpdateInput>;
};
export type SubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
};
export type SubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
};
