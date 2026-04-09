import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonCompletionModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonCompletionPayload>;
export type AggregateLessonCompletion = {
    _count: LessonCompletionCountAggregateOutputType | null;
    _min: LessonCompletionMinAggregateOutputType | null;
    _max: LessonCompletionMaxAggregateOutputType | null;
};
export type LessonCompletionMinAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    studentId: string | null;
    completedAt: Date | null;
};
export type LessonCompletionMaxAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    studentId: string | null;
    completedAt: Date | null;
};
export type LessonCompletionCountAggregateOutputType = {
    id: number;
    lessonId: number;
    studentId: number;
    completedAt: number;
    _all: number;
};
export type LessonCompletionMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    completedAt?: true;
};
export type LessonCompletionMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    completedAt?: true;
};
export type LessonCompletionCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    completedAt?: true;
    _all?: true;
};
export type LessonCompletionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithRelationInput | Prisma.LessonCompletionOrderByWithRelationInput[];
    cursor?: Prisma.LessonCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonCompletionCountAggregateInputType;
    _min?: LessonCompletionMinAggregateInputType;
    _max?: LessonCompletionMaxAggregateInputType;
};
export type GetLessonCompletionAggregateType<T extends LessonCompletionAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonCompletion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonCompletion[P]> : Prisma.GetScalarType<T[P], AggregateLessonCompletion[P]>;
};
export type LessonCompletionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithAggregationInput | Prisma.LessonCompletionOrderByWithAggregationInput[];
    by: Prisma.LessonCompletionScalarFieldEnum[] | Prisma.LessonCompletionScalarFieldEnum;
    having?: Prisma.LessonCompletionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCompletionCountAggregateInputType | true;
    _min?: LessonCompletionMinAggregateInputType;
    _max?: LessonCompletionMaxAggregateInputType;
};
export type LessonCompletionGroupByOutputType = {
    id: string;
    lessonId: string;
    studentId: string;
    completedAt: Date;
    _count: LessonCompletionCountAggregateOutputType | null;
    _min: LessonCompletionMinAggregateOutputType | null;
    _max: LessonCompletionMaxAggregateOutputType | null;
};
export type GetLessonCompletionGroupByPayload<T extends LessonCompletionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonCompletionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonCompletionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonCompletionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonCompletionGroupByOutputType[P]>;
}>>;
export type LessonCompletionWhereInput = {
    AND?: Prisma.LessonCompletionWhereInput | Prisma.LessonCompletionWhereInput[];
    OR?: Prisma.LessonCompletionWhereInput[];
    NOT?: Prisma.LessonCompletionWhereInput | Prisma.LessonCompletionWhereInput[];
    id?: Prisma.StringFilter<"LessonCompletion"> | string;
    lessonId?: Prisma.StringFilter<"LessonCompletion"> | string;
    studentId?: Prisma.StringFilter<"LessonCompletion"> | string;
    completedAt?: Prisma.DateTimeFilter<"LessonCompletion"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
};
export type LessonCompletionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    lesson?: Prisma.LessonOrderByWithRelationInput;
};
export type LessonCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    lessonId_studentId?: Prisma.LessonCompletionLessonIdStudentIdCompoundUniqueInput;
    AND?: Prisma.LessonCompletionWhereInput | Prisma.LessonCompletionWhereInput[];
    OR?: Prisma.LessonCompletionWhereInput[];
    NOT?: Prisma.LessonCompletionWhereInput | Prisma.LessonCompletionWhereInput[];
    lessonId?: Prisma.StringFilter<"LessonCompletion"> | string;
    studentId?: Prisma.StringFilter<"LessonCompletion"> | string;
    completedAt?: Prisma.DateTimeFilter<"LessonCompletion"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
}, "id" | "lessonId_studentId">;
export type LessonCompletionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonCompletionCountOrderByAggregateInput;
    _max?: Prisma.LessonCompletionMaxOrderByAggregateInput;
    _min?: Prisma.LessonCompletionMinOrderByAggregateInput;
};
export type LessonCompletionScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonCompletionScalarWhereWithAggregatesInput | Prisma.LessonCompletionScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonCompletionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonCompletionScalarWhereWithAggregatesInput | Prisma.LessonCompletionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonCompletion"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"LessonCompletion"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"LessonCompletion"> | string;
    completedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonCompletion"> | Date | string;
};
export type LessonCompletionCreateInput = {
    id?: string;
    studentId: string;
    completedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutCompletionsInput;
};
export type LessonCompletionUncheckedCreateInput = {
    id?: string;
    lessonId: string;
    studentId: string;
    completedAt?: Date | string;
};
export type LessonCompletionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutCompletionsNestedInput;
};
export type LessonCompletionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionCreateManyInput = {
    id?: string;
    lessonId: string;
    studentId: string;
    completedAt?: Date | string;
};
export type LessonCompletionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionListRelationFilter = {
    every?: Prisma.LessonCompletionWhereInput;
    some?: Prisma.LessonCompletionWhereInput;
    none?: Prisma.LessonCompletionWhereInput;
};
export type LessonCompletionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonCompletionLessonIdStudentIdCompoundUniqueInput = {
    lessonId: string;
    studentId: string;
};
export type LessonCompletionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type LessonCompletionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type LessonCompletionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type LessonCompletionCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput> | Prisma.LessonCompletionCreateWithoutLessonInput[] | Prisma.LessonCompletionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonCompletionCreateOrConnectWithoutLessonInput | Prisma.LessonCompletionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonCompletionCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
};
export type LessonCompletionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput> | Prisma.LessonCompletionCreateWithoutLessonInput[] | Prisma.LessonCompletionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonCompletionCreateOrConnectWithoutLessonInput | Prisma.LessonCompletionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonCompletionCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
};
export type LessonCompletionUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput> | Prisma.LessonCompletionCreateWithoutLessonInput[] | Prisma.LessonCompletionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonCompletionCreateOrConnectWithoutLessonInput | Prisma.LessonCompletionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonCompletionUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonCompletionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonCompletionCreateManyLessonInputEnvelope;
    set?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    disconnect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    delete?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    connect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    update?: Prisma.LessonCompletionUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonCompletionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonCompletionUpdateManyWithWhereWithoutLessonInput | Prisma.LessonCompletionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonCompletionScalarWhereInput | Prisma.LessonCompletionScalarWhereInput[];
};
export type LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput> | Prisma.LessonCompletionCreateWithoutLessonInput[] | Prisma.LessonCompletionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonCompletionCreateOrConnectWithoutLessonInput | Prisma.LessonCompletionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonCompletionUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonCompletionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonCompletionCreateManyLessonInputEnvelope;
    set?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    disconnect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    delete?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    connect?: Prisma.LessonCompletionWhereUniqueInput | Prisma.LessonCompletionWhereUniqueInput[];
    update?: Prisma.LessonCompletionUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonCompletionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonCompletionUpdateManyWithWhereWithoutLessonInput | Prisma.LessonCompletionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonCompletionScalarWhereInput | Prisma.LessonCompletionScalarWhereInput[];
};
export type LessonCompletionCreateWithoutLessonInput = {
    id?: string;
    studentId: string;
    completedAt?: Date | string;
};
export type LessonCompletionUncheckedCreateWithoutLessonInput = {
    id?: string;
    studentId: string;
    completedAt?: Date | string;
};
export type LessonCompletionCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonCompletionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput>;
};
export type LessonCompletionCreateManyLessonInputEnvelope = {
    data: Prisma.LessonCompletionCreateManyLessonInput | Prisma.LessonCompletionCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonCompletionUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonCompletionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonCompletionUpdateWithoutLessonInput, Prisma.LessonCompletionUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonCompletionCreateWithoutLessonInput, Prisma.LessonCompletionUncheckedCreateWithoutLessonInput>;
};
export type LessonCompletionUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonCompletionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonCompletionUpdateWithoutLessonInput, Prisma.LessonCompletionUncheckedUpdateWithoutLessonInput>;
};
export type LessonCompletionUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonCompletionScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonCompletionUpdateManyMutationInput, Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonCompletionScalarWhereInput = {
    AND?: Prisma.LessonCompletionScalarWhereInput | Prisma.LessonCompletionScalarWhereInput[];
    OR?: Prisma.LessonCompletionScalarWhereInput[];
    NOT?: Prisma.LessonCompletionScalarWhereInput | Prisma.LessonCompletionScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonCompletion"> | string;
    lessonId?: Prisma.StringFilter<"LessonCompletion"> | string;
    studentId?: Prisma.StringFilter<"LessonCompletion"> | string;
    completedAt?: Prisma.DateTimeFilter<"LessonCompletion"> | Date | string;
};
export type LessonCompletionCreateManyLessonInput = {
    id?: string;
    studentId: string;
    completedAt?: Date | string;
};
export type LessonCompletionUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCompletionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    completedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonCompletion"]>;
export type LessonCompletionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    completedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonCompletion"]>;
export type LessonCompletionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    completedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonCompletion"]>;
export type LessonCompletionSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    completedAt?: boolean;
};
export type LessonCompletionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "studentId" | "completedAt", ExtArgs["result"]["lessonCompletion"]>;
export type LessonCompletionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonCompletionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonCompletionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $LessonCompletionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonCompletion";
    objects: {
        lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lessonId: string;
        studentId: string;
        completedAt: Date;
    }, ExtArgs["result"]["lessonCompletion"]>;
    composites: {};
};
export type LessonCompletionGetPayload<S extends boolean | null | undefined | LessonCompletionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload, S>;
export type LessonCompletionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCompletionCountAggregateInputType | true;
};
export interface LessonCompletionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonCompletion'];
        meta: {
            name: 'LessonCompletion';
        };
    };
    findUnique<T extends LessonCompletionFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonCompletionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonCompletionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonCompletionFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonCompletionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonCompletionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonCompletionFindManyArgs>(args?: Prisma.SelectSubset<T, LessonCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonCompletionCreateArgs>(args: Prisma.SelectSubset<T, LessonCompletionCreateArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonCompletionCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonCompletionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonCompletionDeleteArgs>(args: Prisma.SelectSubset<T, LessonCompletionDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonCompletionUpdateArgs>(args: Prisma.SelectSubset<T, LessonCompletionUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonCompletionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonCompletionUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonCompletionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonCompletionUpsertArgs>(args: Prisma.SelectSubset<T, LessonCompletionUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonCompletionClient<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonCompletionCountArgs>(args?: Prisma.Subset<T, LessonCompletionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCompletionCountAggregateOutputType> : number>;
    aggregate<T extends LessonCompletionAggregateArgs>(args: Prisma.Subset<T, LessonCompletionAggregateArgs>): Prisma.PrismaPromise<GetLessonCompletionAggregateType<T>>;
    groupBy<T extends LessonCompletionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonCompletionGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonCompletionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonCompletionFieldRefs;
}
export interface Prisma__LessonCompletionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonCompletionFieldRefs {
    readonly id: Prisma.FieldRef<"LessonCompletion", 'String'>;
    readonly lessonId: Prisma.FieldRef<"LessonCompletion", 'String'>;
    readonly studentId: Prisma.FieldRef<"LessonCompletion", 'String'>;
    readonly completedAt: Prisma.FieldRef<"LessonCompletion", 'DateTime'>;
}
export type LessonCompletionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where: Prisma.LessonCompletionWhereUniqueInput;
};
export type LessonCompletionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where: Prisma.LessonCompletionWhereUniqueInput;
};
export type LessonCompletionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithRelationInput | Prisma.LessonCompletionOrderByWithRelationInput[];
    cursor?: Prisma.LessonCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonCompletionScalarFieldEnum | Prisma.LessonCompletionScalarFieldEnum[];
};
export type LessonCompletionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithRelationInput | Prisma.LessonCompletionOrderByWithRelationInput[];
    cursor?: Prisma.LessonCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonCompletionScalarFieldEnum | Prisma.LessonCompletionScalarFieldEnum[];
};
export type LessonCompletionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithRelationInput | Prisma.LessonCompletionOrderByWithRelationInput[];
    cursor?: Prisma.LessonCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonCompletionScalarFieldEnum | Prisma.LessonCompletionScalarFieldEnum[];
};
export type LessonCompletionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCompletionCreateInput, Prisma.LessonCompletionUncheckedCreateInput>;
};
export type LessonCompletionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonCompletionCreateManyInput | Prisma.LessonCompletionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonCompletionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    data: Prisma.LessonCompletionCreateManyInput | Prisma.LessonCompletionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonCompletionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonCompletionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCompletionUpdateInput, Prisma.LessonCompletionUncheckedUpdateInput>;
    where: Prisma.LessonCompletionWhereUniqueInput;
};
export type LessonCompletionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonCompletionUpdateManyMutationInput, Prisma.LessonCompletionUncheckedUpdateManyInput>;
    where?: Prisma.LessonCompletionWhereInput;
    limit?: number;
};
export type LessonCompletionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCompletionUpdateManyMutationInput, Prisma.LessonCompletionUncheckedUpdateManyInput>;
    where?: Prisma.LessonCompletionWhereInput;
    limit?: number;
    include?: Prisma.LessonCompletionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonCompletionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where: Prisma.LessonCompletionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCompletionCreateInput, Prisma.LessonCompletionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonCompletionUpdateInput, Prisma.LessonCompletionUncheckedUpdateInput>;
};
export type LessonCompletionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where: Prisma.LessonCompletionWhereUniqueInput;
};
export type LessonCompletionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonCompletionWhereInput;
    limit?: number;
};
export type LessonCompletionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
};
