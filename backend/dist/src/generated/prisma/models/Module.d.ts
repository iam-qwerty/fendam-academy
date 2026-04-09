import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ModuleModel = runtime.Types.Result.DefaultSelection<Prisma.$ModulePayload>;
export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null;
    _avg: ModuleAvgAggregateOutputType | null;
    _sum: ModuleSumAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
};
export type ModuleAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type ModuleSumAggregateOutputType = {
    orderIndex: number | null;
};
export type ModuleMinAggregateOutputType = {
    id: string | null;
    trackId: string | null;
    title: string | null;
    orderIndex: number | null;
};
export type ModuleMaxAggregateOutputType = {
    id: string | null;
    trackId: string | null;
    title: string | null;
    orderIndex: number | null;
};
export type ModuleCountAggregateOutputType = {
    id: number;
    trackId: number;
    title: number;
    orderIndex: number;
    _all: number;
};
export type ModuleAvgAggregateInputType = {
    orderIndex?: true;
};
export type ModuleSumAggregateInputType = {
    orderIndex?: true;
};
export type ModuleMinAggregateInputType = {
    id?: true;
    trackId?: true;
    title?: true;
    orderIndex?: true;
};
export type ModuleMaxAggregateInputType = {
    id?: true;
    trackId?: true;
    title?: true;
    orderIndex?: true;
};
export type ModuleCountAggregateInputType = {
    id?: true;
    trackId?: true;
    title?: true;
    orderIndex?: true;
    _all?: true;
};
export type ModuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModuleCountAggregateInputType;
    _avg?: ModuleAvgAggregateInputType;
    _sum?: ModuleSumAggregateInputType;
    _min?: ModuleMinAggregateInputType;
    _max?: ModuleMaxAggregateInputType;
};
export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModule[P]> : Prisma.GetScalarType<T[P], AggregateModule[P]>;
};
export type ModuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithAggregationInput | Prisma.ModuleOrderByWithAggregationInput[];
    by: Prisma.ModuleScalarFieldEnum[] | Prisma.ModuleScalarFieldEnum;
    having?: Prisma.ModuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModuleCountAggregateInputType | true;
    _avg?: ModuleAvgAggregateInputType;
    _sum?: ModuleSumAggregateInputType;
    _min?: ModuleMinAggregateInputType;
    _max?: ModuleMaxAggregateInputType;
};
export type ModuleGroupByOutputType = {
    id: string;
    trackId: string;
    title: string;
    orderIndex: number;
    _count: ModuleCountAggregateOutputType | null;
    _avg: ModuleAvgAggregateOutputType | null;
    _sum: ModuleSumAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
};
export type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModuleGroupByOutputType[P]>;
}>>;
export type ModuleWhereInput = {
    AND?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    OR?: Prisma.ModuleWhereInput[];
    NOT?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    id?: Prisma.StringFilter<"Module"> | string;
    trackId?: Prisma.StringFilter<"Module"> | string;
    title?: Prisma.StringFilter<"Module"> | string;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
    track?: Prisma.XOR<Prisma.TrackScalarRelationFilter, Prisma.TrackWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    instructors?: Prisma.InstructorModuleListRelationFilter;
};
export type ModuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    trackId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    track?: Prisma.TrackOrderByWithRelationInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
    assignments?: Prisma.AssignmentOrderByRelationAggregateInput;
    instructors?: Prisma.InstructorModuleOrderByRelationAggregateInput;
};
export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    OR?: Prisma.ModuleWhereInput[];
    NOT?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    trackId?: Prisma.StringFilter<"Module"> | string;
    title?: Prisma.StringFilter<"Module"> | string;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
    track?: Prisma.XOR<Prisma.TrackScalarRelationFilter, Prisma.TrackWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    instructors?: Prisma.InstructorModuleListRelationFilter;
}, "id">;
export type ModuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    trackId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    _count?: Prisma.ModuleCountOrderByAggregateInput;
    _avg?: Prisma.ModuleAvgOrderByAggregateInput;
    _max?: Prisma.ModuleMaxOrderByAggregateInput;
    _min?: Prisma.ModuleMinOrderByAggregateInput;
    _sum?: Prisma.ModuleSumOrderByAggregateInput;
};
export type ModuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModuleScalarWhereWithAggregatesInput | Prisma.ModuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModuleScalarWhereWithAggregatesInput | Prisma.ModuleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    trackId?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Module"> | number;
};
export type ModuleCreateInput = {
    id?: string;
    title: string;
    orderIndex: number;
    track: Prisma.TrackCreateNestedOneWithoutModulesInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateInput = {
    id?: string;
    trackId: string;
    title: string;
    orderIndex: number;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    track?: Prisma.TrackUpdateOneRequiredWithoutModulesNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trackId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateManyInput = {
    id?: string;
    trackId: string;
    title: string;
    orderIndex: number;
};
export type ModuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ModuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trackId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ModuleListRelationFilter = {
    every?: Prisma.ModuleWhereInput;
    some?: Prisma.ModuleWhereInput;
    none?: Prisma.ModuleWhereInput;
};
export type ModuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trackId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type ModuleAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type ModuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trackId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type ModuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trackId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type ModuleSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type ModuleScalarRelationFilter = {
    is?: Prisma.ModuleWhereInput;
    isNot?: Prisma.ModuleWhereInput;
};
export type ModuleCreateNestedManyWithoutTrackInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput> | Prisma.ModuleCreateWithoutTrackInput[] | Prisma.ModuleUncheckedCreateWithoutTrackInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTrackInput | Prisma.ModuleCreateOrConnectWithoutTrackInput[];
    createMany?: Prisma.ModuleCreateManyTrackInputEnvelope;
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
};
export type ModuleUncheckedCreateNestedManyWithoutTrackInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput> | Prisma.ModuleCreateWithoutTrackInput[] | Prisma.ModuleUncheckedCreateWithoutTrackInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTrackInput | Prisma.ModuleCreateOrConnectWithoutTrackInput[];
    createMany?: Prisma.ModuleCreateManyTrackInputEnvelope;
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
};
export type ModuleUpdateManyWithoutTrackNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput> | Prisma.ModuleCreateWithoutTrackInput[] | Prisma.ModuleUncheckedCreateWithoutTrackInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTrackInput | Prisma.ModuleCreateOrConnectWithoutTrackInput[];
    upsert?: Prisma.ModuleUpsertWithWhereUniqueWithoutTrackInput | Prisma.ModuleUpsertWithWhereUniqueWithoutTrackInput[];
    createMany?: Prisma.ModuleCreateManyTrackInputEnvelope;
    set?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    disconnect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    delete?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    update?: Prisma.ModuleUpdateWithWhereUniqueWithoutTrackInput | Prisma.ModuleUpdateWithWhereUniqueWithoutTrackInput[];
    updateMany?: Prisma.ModuleUpdateManyWithWhereWithoutTrackInput | Prisma.ModuleUpdateManyWithWhereWithoutTrackInput[];
    deleteMany?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
};
export type ModuleUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput> | Prisma.ModuleCreateWithoutTrackInput[] | Prisma.ModuleUncheckedCreateWithoutTrackInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTrackInput | Prisma.ModuleCreateOrConnectWithoutTrackInput[];
    upsert?: Prisma.ModuleUpsertWithWhereUniqueWithoutTrackInput | Prisma.ModuleUpsertWithWhereUniqueWithoutTrackInput[];
    createMany?: Prisma.ModuleCreateManyTrackInputEnvelope;
    set?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    disconnect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    delete?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    update?: Prisma.ModuleUpdateWithWhereUniqueWithoutTrackInput | Prisma.ModuleUpdateWithWhereUniqueWithoutTrackInput[];
    updateMany?: Prisma.ModuleUpdateManyWithWhereWithoutTrackInput | Prisma.ModuleUpdateManyWithWhereWithoutTrackInput[];
    deleteMany?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ModuleCreateNestedOneWithoutInstructorsInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutInstructorsInput, Prisma.ModuleUncheckedCreateWithoutInstructorsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutInstructorsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutInstructorsInput, Prisma.ModuleUncheckedCreateWithoutInstructorsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutInstructorsInput;
    upsert?: Prisma.ModuleUpsertWithoutInstructorsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutInstructorsInput, Prisma.ModuleUpdateWithoutInstructorsInput>, Prisma.ModuleUncheckedUpdateWithoutInstructorsInput>;
};
export type ModuleCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutLessonsInput, Prisma.ModuleUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutLessonsInput, Prisma.ModuleUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.ModuleUpsertWithoutLessonsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutLessonsInput, Prisma.ModuleUpdateWithoutLessonsInput>, Prisma.ModuleUncheckedUpdateWithoutLessonsInput>;
};
export type ModuleCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutAssignmentsInput, Prisma.ModuleUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutAssignmentsInput, Prisma.ModuleUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.ModuleUpsertWithoutAssignmentsInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.ModuleUpdateWithoutAssignmentsInput>, Prisma.ModuleUncheckedUpdateWithoutAssignmentsInput>;
};
export type ModuleCreateWithoutTrackInput = {
    id?: string;
    title: string;
    orderIndex: number;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutTrackInput = {
    id?: string;
    title: string;
    orderIndex: number;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutTrackInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput>;
};
export type ModuleCreateManyTrackInputEnvelope = {
    data: Prisma.ModuleCreateManyTrackInput | Prisma.ModuleCreateManyTrackInput[];
    skipDuplicates?: boolean;
};
export type ModuleUpsertWithWhereUniqueWithoutTrackInput = {
    where: Prisma.ModuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutTrackInput, Prisma.ModuleUncheckedUpdateWithoutTrackInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutTrackInput, Prisma.ModuleUncheckedCreateWithoutTrackInput>;
};
export type ModuleUpdateWithWhereUniqueWithoutTrackInput = {
    where: Prisma.ModuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutTrackInput, Prisma.ModuleUncheckedUpdateWithoutTrackInput>;
};
export type ModuleUpdateManyWithWhereWithoutTrackInput = {
    where: Prisma.ModuleScalarWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyWithoutTrackInput>;
};
export type ModuleScalarWhereInput = {
    AND?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
    OR?: Prisma.ModuleScalarWhereInput[];
    NOT?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
    id?: Prisma.StringFilter<"Module"> | string;
    trackId?: Prisma.StringFilter<"Module"> | string;
    title?: Prisma.StringFilter<"Module"> | string;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
};
export type ModuleCreateWithoutInstructorsInput = {
    id?: string;
    title: string;
    orderIndex: number;
    track: Prisma.TrackCreateNestedOneWithoutModulesInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutInstructorsInput = {
    id?: string;
    trackId: string;
    title: string;
    orderIndex: number;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutInstructorsInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutInstructorsInput, Prisma.ModuleUncheckedCreateWithoutInstructorsInput>;
};
export type ModuleUpsertWithoutInstructorsInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutInstructorsInput, Prisma.ModuleUncheckedUpdateWithoutInstructorsInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutInstructorsInput, Prisma.ModuleUncheckedCreateWithoutInstructorsInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutInstructorsInput, Prisma.ModuleUncheckedUpdateWithoutInstructorsInput>;
};
export type ModuleUpdateWithoutInstructorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    track?: Prisma.TrackUpdateOneRequiredWithoutModulesNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutInstructorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trackId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateWithoutLessonsInput = {
    id?: string;
    title: string;
    orderIndex: number;
    track: Prisma.TrackCreateNestedOneWithoutModulesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutLessonsInput = {
    id?: string;
    trackId: string;
    title: string;
    orderIndex: number;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutLessonsInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutLessonsInput, Prisma.ModuleUncheckedCreateWithoutLessonsInput>;
};
export type ModuleUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutLessonsInput, Prisma.ModuleUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutLessonsInput, Prisma.ModuleUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutLessonsInput, Prisma.ModuleUncheckedUpdateWithoutLessonsInput>;
};
export type ModuleUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    track?: Prisma.TrackUpdateOneRequiredWithoutModulesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trackId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateWithoutAssignmentsInput = {
    id?: string;
    title: string;
    orderIndex: number;
    track: Prisma.TrackCreateNestedOneWithoutModulesInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    trackId: string;
    title: string;
    orderIndex: number;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
    instructors?: Prisma.InstructorModuleUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutAssignmentsInput, Prisma.ModuleUncheckedCreateWithoutAssignmentsInput>;
};
export type ModuleUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutAssignmentsInput, Prisma.ModuleUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutAssignmentsInput, Prisma.ModuleUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutAssignmentsInput, Prisma.ModuleUncheckedUpdateWithoutAssignmentsInput>;
};
export type ModuleUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    track?: Prisma.TrackUpdateOneRequiredWithoutModulesNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trackId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateManyTrackInput = {
    id?: string;
    title: string;
    orderIndex: number;
};
export type ModuleUpdateWithoutTrackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutTrackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutModuleNestedInput;
    instructors?: Prisma.InstructorModuleUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateManyWithoutTrackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ModuleCountOutputType = {
    lessons: number;
    assignments: number;
    instructors: number;
};
export type ModuleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | ModuleCountOutputTypeCountLessonsArgs;
    assignments?: boolean | ModuleCountOutputTypeCountAssignmentsArgs;
    instructors?: boolean | ModuleCountOutputTypeCountInstructorsArgs;
};
export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleCountOutputTypeSelect<ExtArgs> | null;
};
export type ModuleCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type ModuleCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type ModuleCountOutputTypeCountInstructorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorModuleWhereInput;
};
export type ModuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trackId?: boolean;
    title?: boolean;
    orderIndex?: boolean;
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Module$lessonsArgs<ExtArgs>;
    assignments?: boolean | Prisma.Module$assignmentsArgs<ExtArgs>;
    instructors?: boolean | Prisma.Module$instructorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trackId?: boolean;
    title?: boolean;
    orderIndex?: boolean;
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trackId?: boolean;
    title?: boolean;
    orderIndex?: boolean;
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectScalar = {
    id?: boolean;
    trackId?: boolean;
    title?: boolean;
    orderIndex?: boolean;
};
export type ModuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "trackId" | "title" | "orderIndex", ExtArgs["result"]["module"]>;
export type ModuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Module$lessonsArgs<ExtArgs>;
    assignments?: boolean | Prisma.Module$assignmentsArgs<ExtArgs>;
    instructors?: boolean | Prisma.Module$instructorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ModuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
};
export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    track?: boolean | Prisma.TrackDefaultArgs<ExtArgs>;
};
export type $ModulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Module";
    objects: {
        track: Prisma.$TrackPayload<ExtArgs>;
        lessons: Prisma.$LessonPayload<ExtArgs>[];
        assignments: Prisma.$AssignmentPayload<ExtArgs>[];
        instructors: Prisma.$InstructorModulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        trackId: string;
        title: string;
        orderIndex: number;
    }, ExtArgs["result"]["module"]>;
    composites: {};
};
export type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModulePayload, S>;
export type ModuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModuleCountAggregateInputType | true;
};
export interface ModuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Module'];
        meta: {
            name: 'Module';
        };
    };
    findUnique<T extends ModuleFindUniqueArgs>(args: Prisma.SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModuleFindFirstArgs>(args?: Prisma.SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModuleFindManyArgs>(args?: Prisma.SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModuleCreateArgs>(args: Prisma.SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModuleCreateManyArgs>(args?: Prisma.SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ModuleDeleteArgs>(args: Prisma.SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModuleUpdateArgs>(args: Prisma.SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModuleUpdateManyArgs>(args: Prisma.SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ModuleUpsertArgs>(args: Prisma.SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModuleCountArgs>(args?: Prisma.Subset<T, ModuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModuleCountAggregateOutputType> : number>;
    aggregate<T extends ModuleAggregateArgs>(args: Prisma.Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>;
    groupBy<T extends ModuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModuleGroupByArgs['orderBy'];
    } : {
        orderBy?: ModuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModuleFieldRefs;
}
export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    track<T extends Prisma.TrackDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TrackDefaultArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.Module$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.Module$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    instructors<T extends Prisma.Module$instructorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModuleFieldRefs {
    readonly id: Prisma.FieldRef<"Module", 'String'>;
    readonly trackId: Prisma.FieldRef<"Module", 'String'>;
    readonly title: Prisma.FieldRef<"Module", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"Module", 'Int'>;
}
export type ModuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleCreateInput, Prisma.ModuleUncheckedCreateInput>;
};
export type ModuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModuleCreateManyInput | Prisma.ModuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    data: Prisma.ModuleCreateManyInput | Prisma.ModuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ModuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ModuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleUpdateInput, Prisma.ModuleUncheckedUpdateInput>;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyInput>;
    where?: Prisma.ModuleWhereInput;
    limit?: number;
};
export type ModuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyInput>;
    where?: Prisma.ModuleWhereInput;
    limit?: number;
    include?: Prisma.ModuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ModuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateInput, Prisma.ModuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModuleUpdateInput, Prisma.ModuleUncheckedUpdateInput>;
};
export type ModuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    limit?: number;
};
export type Module$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type Module$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Module$instructorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    where?: Prisma.InstructorModuleWhereInput;
    orderBy?: Prisma.InstructorModuleOrderByWithRelationInput | Prisma.InstructorModuleOrderByWithRelationInput[];
    cursor?: Prisma.InstructorModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstructorModuleScalarFieldEnum | Prisma.InstructorModuleScalarFieldEnum[];
};
export type ModuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
};
