import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AssignmentPayload>;
export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null;
    _avg: AssignmentAvgAggregateOutputType | null;
    _sum: AssignmentSumAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type AssignmentAvgAggregateOutputType = {
    maxScore: number | null;
};
export type AssignmentSumAggregateOutputType = {
    maxScore: number | null;
};
export type AssignmentMinAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    instructions: string | null;
    dueDate: Date | null;
    maxScore: number | null;
};
export type AssignmentMaxAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    instructions: string | null;
    dueDate: Date | null;
    maxScore: number | null;
};
export type AssignmentCountAggregateOutputType = {
    id: number;
    moduleId: number;
    title: number;
    instructions: number;
    dueDate: number;
    maxScore: number;
    _all: number;
};
export type AssignmentAvgAggregateInputType = {
    maxScore?: true;
};
export type AssignmentSumAggregateInputType = {
    maxScore?: true;
};
export type AssignmentMinAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    instructions?: true;
    dueDate?: true;
    maxScore?: true;
};
export type AssignmentMaxAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    instructions?: true;
    dueDate?: true;
    maxScore?: true;
};
export type AssignmentCountAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    instructions?: true;
    dueDate?: true;
    maxScore?: true;
    _all?: true;
};
export type AssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssignmentCountAggregateInputType;
    _avg?: AssignmentAvgAggregateInputType;
    _sum?: AssignmentSumAggregateInputType;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssignment[P]> : Prisma.GetScalarType<T[P], AggregateAssignment[P]>;
};
export type AssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithAggregationInput | Prisma.AssignmentOrderByWithAggregationInput[];
    by: Prisma.AssignmentScalarFieldEnum[] | Prisma.AssignmentScalarFieldEnum;
    having?: Prisma.AssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssignmentCountAggregateInputType | true;
    _avg?: AssignmentAvgAggregateInputType;
    _sum?: AssignmentSumAggregateInputType;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type AssignmentGroupByOutputType = {
    id: string;
    moduleId: string;
    title: string;
    instructions: string;
    dueDate: Date;
    maxScore: number;
    _count: AssignmentCountAggregateOutputType | null;
    _avg: AssignmentAvgAggregateOutputType | null;
    _sum: AssignmentSumAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]>;
}>>;
export type AssignmentWhereInput = {
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    moduleId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    instructions?: Prisma.StringFilter<"Assignment"> | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    maxScore?: Prisma.IntFilter<"Assignment"> | number;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    submissions?: Prisma.SubmissionListRelationFilter;
};
export type AssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    module?: Prisma.ModuleOrderByWithRelationInput;
    submissions?: Prisma.SubmissionOrderByRelationAggregateInput;
};
export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    moduleId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    instructions?: Prisma.StringFilter<"Assignment"> | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    maxScore?: Prisma.IntFilter<"Assignment"> | number;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    submissions?: Prisma.SubmissionListRelationFilter;
}, "id">;
export type AssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    _count?: Prisma.AssignmentCountOrderByAggregateInput;
    _avg?: Prisma.AssignmentAvgOrderByAggregateInput;
    _max?: Prisma.AssignmentMaxOrderByAggregateInput;
    _min?: Prisma.AssignmentMinOrderByAggregateInput;
    _sum?: Prisma.AssignmentSumOrderByAggregateInput;
};
export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    instructions?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    maxScore?: Prisma.IntWithAggregatesFilter<"Assignment"> | number;
};
export type AssignmentCreateInput = {
    id?: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
    module: Prisma.ModuleCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateInput = {
    id?: string;
    moduleId: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    module?: Prisma.ModuleUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.SubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentCreateManyInput = {
    id?: string;
    moduleId: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
};
export type AssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AssignmentListRelationFilter = {
    every?: Prisma.AssignmentWhereInput;
    some?: Prisma.AssignmentWhereInput;
    none?: Prisma.AssignmentWhereInput;
};
export type AssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
};
export type AssignmentAvgOrderByAggregateInput = {
    maxScore?: Prisma.SortOrder;
};
export type AssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
};
export type AssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
};
export type AssignmentSumOrderByAggregateInput = {
    maxScore?: Prisma.SortOrder;
};
export type AssignmentScalarRelationFilter = {
    is?: Prisma.AssignmentWhereInput;
    isNot?: Prisma.AssignmentWhereInput;
};
export type AssignmentCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput> | Prisma.AssignmentCreateWithoutModuleInput[] | Prisma.AssignmentUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutModuleInput | Prisma.AssignmentCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.AssignmentCreateManyModuleInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput> | Prisma.AssignmentCreateWithoutModuleInput[] | Prisma.AssignmentUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutModuleInput | Prisma.AssignmentCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.AssignmentCreateManyModuleInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput> | Prisma.AssignmentCreateWithoutModuleInput[] | Prisma.AssignmentUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutModuleInput | Prisma.AssignmentCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutModuleInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.AssignmentCreateManyModuleInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutModuleInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutModuleInput | Prisma.AssignmentUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput> | Prisma.AssignmentCreateWithoutModuleInput[] | Prisma.AssignmentUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutModuleInput | Prisma.AssignmentCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutModuleInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.AssignmentCreateManyModuleInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutModuleInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutModuleInput | Prisma.AssignmentUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.AssignmentUpsertWithoutSubmissionsInput;
    connect?: Prisma.AssignmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.AssignmentUpdateWithoutSubmissionsInput>, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
};
export type AssignmentCreateWithoutModuleInput = {
    id?: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateWithoutModuleInput = {
    id?: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentCreateOrConnectWithoutModuleInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput>;
};
export type AssignmentCreateManyModuleInputEnvelope = {
    data: Prisma.AssignmentCreateManyModuleInput | Prisma.AssignmentCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutModuleInput, Prisma.AssignmentUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutModuleInput, Prisma.AssignmentUncheckedCreateWithoutModuleInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutModuleInput, Prisma.AssignmentUncheckedUpdateWithoutModuleInput>;
};
export type AssignmentUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutModuleInput>;
};
export type AssignmentScalarWhereInput = {
    AND?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    OR?: Prisma.AssignmentScalarWhereInput[];
    NOT?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    moduleId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    instructions?: Prisma.StringFilter<"Assignment"> | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    maxScore?: Prisma.IntFilter<"Assignment"> | number;
};
export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
    module: Prisma.ModuleCreateNestedOneWithoutAssignmentsInput;
};
export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    moduleId: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
};
export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
};
export type AssignmentUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubmissionsInput, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.AssignmentWhereInput;
};
export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.AssignmentWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubmissionsInput, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
};
export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    module?: Prisma.ModuleUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AssignmentCreateManyModuleInput = {
    id?: string;
    title: string;
    instructions: string;
    dueDate: Date | string;
    maxScore: number;
};
export type AssignmentUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    submissions?: Prisma.SubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AssignmentCountOutputType = {
    submissions: number;
};
export type AssignmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs;
};
export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentCountOutputTypeSelect<ExtArgs> | null;
};
export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
};
export type AssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    instructions?: boolean;
    dueDate?: boolean;
    maxScore?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.Assignment$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    instructions?: boolean;
    dueDate?: boolean;
    maxScore?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    instructions?: boolean;
    dueDate?: boolean;
    maxScore?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectScalar = {
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    instructions?: boolean;
    dueDate?: boolean;
    maxScore?: boolean;
};
export type AssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "moduleId" | "title" | "instructions" | "dueDate" | "maxScore", ExtArgs["result"]["assignment"]>;
export type AssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.Assignment$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type $AssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Assignment";
    objects: {
        module: Prisma.$ModulePayload<ExtArgs>;
        submissions: Prisma.$SubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        moduleId: string;
        title: string;
        instructions: string;
        dueDate: Date;
        maxScore: number;
    }, ExtArgs["result"]["assignment"]>;
    composites: {};
};
export type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssignmentPayload, S>;
export type AssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssignmentCountAggregateInputType | true;
};
export interface AssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Assignment'];
        meta: {
            name: 'Assignment';
        };
    };
    findUnique<T extends AssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssignmentCreateArgs>(args: Prisma.SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssignmentDeleteArgs>(args: Prisma.SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssignmentUpdateArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssignmentUpsertArgs>(args: Prisma.SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssignmentCountArgs>(args?: Prisma.Subset<T, AssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssignmentCountAggregateOutputType> : number>;
    aggregate<T extends AssignmentAggregateArgs>(args: Prisma.Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>;
    groupBy<T extends AssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssignmentFieldRefs;
}
export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    submissions<T extends Prisma.Assignment$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"Assignment", 'String'>;
    readonly moduleId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly title: Prisma.FieldRef<"Assignment", 'String'>;
    readonly instructions: Prisma.FieldRef<"Assignment", 'String'>;
    readonly dueDate: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly maxScore: Prisma.FieldRef<"Assignment", 'Int'>;
}
export type AssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
};
export type AssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
    include?: Prisma.AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
};
export type AssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type Assignment$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
};
