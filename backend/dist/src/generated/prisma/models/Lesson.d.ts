import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonPayload>;
export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type LessonAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type LessonSumAggregateOutputType = {
    orderIndex: number | null;
};
export type LessonMinAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    vimeoId: string | null;
    orderIndex: number | null;
};
export type LessonMaxAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    vimeoId: string | null;
    orderIndex: number | null;
};
export type LessonCountAggregateOutputType = {
    id: number;
    moduleId: number;
    title: number;
    vimeoId: number;
    resources: number;
    orderIndex: number;
    _all: number;
};
export type LessonAvgAggregateInputType = {
    orderIndex?: true;
};
export type LessonSumAggregateInputType = {
    orderIndex?: true;
};
export type LessonMinAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    vimeoId?: true;
    orderIndex?: true;
};
export type LessonMaxAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    vimeoId?: true;
    orderIndex?: true;
};
export type LessonCountAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    vimeoId?: true;
    resources?: true;
    orderIndex?: true;
    _all?: true;
};
export type LessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonCountAggregateInputType;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson[P]> : Prisma.GetScalarType<T[P], AggregateLesson[P]>;
};
export type LessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithAggregationInput | Prisma.LessonOrderByWithAggregationInput[];
    by: Prisma.LessonScalarFieldEnum[] | Prisma.LessonScalarFieldEnum;
    having?: Prisma.LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type LessonGroupByOutputType = {
    id: string;
    moduleId: string;
    title: string;
    vimeoId: string;
    resources: runtime.JsonValue;
    orderIndex: number;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]>;
}>>;
export type LessonWhereInput = {
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    vimeoId?: Prisma.StringFilter<"Lesson"> | string;
    resources?: Prisma.JsonFilter<"Lesson">;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    completions?: Prisma.LessonCompletionListRelationFilter;
};
export type LessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    vimeoId?: Prisma.SortOrder;
    resources?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    module?: Prisma.ModuleOrderByWithRelationInput;
    completions?: Prisma.LessonCompletionOrderByRelationAggregateInput;
};
export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    vimeoId?: Prisma.StringFilter<"Lesson"> | string;
    resources?: Prisma.JsonFilter<"Lesson">;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    completions?: Prisma.LessonCompletionListRelationFilter;
}, "id">;
export type LessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    vimeoId?: Prisma.SortOrder;
    resources?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    _count?: Prisma.LessonCountOrderByAggregateInput;
    _avg?: Prisma.LessonAvgOrderByAggregateInput;
    _max?: Prisma.LessonMaxOrderByAggregateInput;
    _min?: Prisma.LessonMinOrderByAggregateInput;
    _sum?: Prisma.LessonSumOrderByAggregateInput;
};
export type LessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    vimeoId?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    resources?: Prisma.JsonWithAggregatesFilter<"Lesson">;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
};
export type LessonCreateInput = {
    id?: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    module: Prisma.ModuleCreateNestedOneWithoutLessonsInput;
    completions?: Prisma.LessonCompletionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateInput = {
    id?: string;
    moduleId: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    completions?: Prisma.LessonCompletionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    module?: Prisma.ModuleUpdateOneRequiredWithoutLessonsNestedInput;
    completions?: Prisma.LessonCompletionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyInput = {
    id?: string;
    moduleId: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
};
export type LessonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonListRelationFilter = {
    every?: Prisma.LessonWhereInput;
    some?: Prisma.LessonWhereInput;
    none?: Prisma.LessonWhereInput;
};
export type LessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    vimeoId?: Prisma.SortOrder;
    resources?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type LessonAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type LessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    vimeoId?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type LessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    vimeoId?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type LessonSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type LessonScalarRelationFilter = {
    is?: Prisma.LessonWhereInput;
    isNot?: Prisma.LessonWhereInput;
};
export type LessonCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput | Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput | Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutModuleInput | Prisma.LessonUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput | Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput | Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutModuleInput | Prisma.LessonUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedOneWithoutCompletionsInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCompletionsInput, Prisma.LessonUncheckedCreateWithoutCompletionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCompletionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCompletionsInput, Prisma.LessonUncheckedCreateWithoutCompletionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCompletionsInput;
    upsert?: Prisma.LessonUpsertWithoutCompletionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutCompletionsInput, Prisma.LessonUpdateWithoutCompletionsInput>, Prisma.LessonUncheckedUpdateWithoutCompletionsInput>;
};
export type LessonCreateWithoutModuleInput = {
    id?: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    completions?: Prisma.LessonCompletionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutModuleInput = {
    id?: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    completions?: Prisma.LessonCompletionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput>;
};
export type LessonCreateManyModuleInputEnvelope = {
    data: Prisma.LessonCreateManyModuleInput | Prisma.LessonCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutModuleInput, Prisma.LessonUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput>;
};
export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutModuleInput, Prisma.LessonUncheckedUpdateWithoutModuleInput>;
};
export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutModuleInput>;
};
export type LessonScalarWhereInput = {
    AND?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    OR?: Prisma.LessonScalarWhereInput[];
    NOT?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    vimeoId?: Prisma.StringFilter<"Lesson"> | string;
    resources?: Prisma.JsonFilter<"Lesson">;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
};
export type LessonCreateWithoutCompletionsInput = {
    id?: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    module: Prisma.ModuleCreateNestedOneWithoutLessonsInput;
};
export type LessonUncheckedCreateWithoutCompletionsInput = {
    id?: string;
    moduleId: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
};
export type LessonCreateOrConnectWithoutCompletionsInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutCompletionsInput, Prisma.LessonUncheckedCreateWithoutCompletionsInput>;
};
export type LessonUpsertWithoutCompletionsInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutCompletionsInput, Prisma.LessonUncheckedUpdateWithoutCompletionsInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutCompletionsInput, Prisma.LessonUncheckedCreateWithoutCompletionsInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutCompletionsInput, Prisma.LessonUncheckedUpdateWithoutCompletionsInput>;
};
export type LessonUpdateWithoutCompletionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    module?: Prisma.ModuleUpdateOneRequiredWithoutLessonsNestedInput;
};
export type LessonUncheckedUpdateWithoutCompletionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonCreateManyModuleInput = {
    id?: string;
    title: string;
    vimeoId: string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
};
export type LessonUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.LessonCompletionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    vimeoId?: Prisma.StringFieldUpdateOperationsInput | string;
    resources?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonCountOutputType = {
    completions: number;
};
export type LessonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    completions?: boolean | LessonCountOutputTypeCountCompletionsArgs;
};
export type LessonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCountOutputTypeSelect<ExtArgs> | null;
};
export type LessonCountOutputTypeCountCompletionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonCompletionWhereInput;
};
export type LessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    vimeoId?: boolean;
    resources?: boolean;
    orderIndex?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    completions?: boolean | Prisma.Lesson$completionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    vimeoId?: boolean;
    resources?: boolean;
    orderIndex?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    vimeoId?: boolean;
    resources?: boolean;
    orderIndex?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectScalar = {
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    vimeoId?: boolean;
    resources?: boolean;
    orderIndex?: boolean;
};
export type LessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "moduleId" | "title" | "vimeoId" | "resources" | "orderIndex", ExtArgs["result"]["lesson"]>;
export type LessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    completions?: boolean | Prisma.Lesson$completionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LessonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type LessonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type $LessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lesson";
    objects: {
        module: Prisma.$ModulePayload<ExtArgs>;
        completions: Prisma.$LessonCompletionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        moduleId: string;
        title: string;
        vimeoId: string;
        resources: runtime.JsonValue;
        orderIndex: number;
    }, ExtArgs["result"]["lesson"]>;
    composites: {};
};
export type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonPayload, S>;
export type LessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
};
export interface LessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
        meta: {
            name: 'Lesson';
        };
    };
    findUnique<T extends LessonFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonCreateArgs>(args: Prisma.SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonDeleteArgs>(args: Prisma.SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonUpdateArgs>(args: Prisma.SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonUpsertArgs>(args: Prisma.SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonCountArgs>(args?: Prisma.Subset<T, LessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCountAggregateOutputType> : number>;
    aggregate<T extends LessonAggregateArgs>(args: Prisma.Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>;
    groupBy<T extends LessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonFieldRefs;
}
export interface Prisma__LessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    completions<T extends Prisma.Lesson$completionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonFieldRefs {
    readonly id: Prisma.FieldRef<"Lesson", 'String'>;
    readonly moduleId: Prisma.FieldRef<"Lesson", 'String'>;
    readonly title: Prisma.FieldRef<"Lesson", 'String'>;
    readonly vimeoId: Prisma.FieldRef<"Lesson", 'String'>;
    readonly resources: Prisma.FieldRef<"Lesson", 'Json'>;
    readonly orderIndex: Prisma.FieldRef<"Lesson", 'Int'>;
}
export type LessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
};
export type LessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type LessonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
    include?: Prisma.LessonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
};
export type LessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type Lesson$completionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
};
