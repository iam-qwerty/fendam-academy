import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InstructorModuleModel = runtime.Types.Result.DefaultSelection<Prisma.$InstructorModulePayload>;
export type AggregateInstructorModule = {
    _count: InstructorModuleCountAggregateOutputType | null;
    _min: InstructorModuleMinAggregateOutputType | null;
    _max: InstructorModuleMaxAggregateOutputType | null;
};
export type InstructorModuleMinAggregateOutputType = {
    id: string | null;
    instructorId: string | null;
    moduleId: string | null;
    assignedAt: Date | null;
};
export type InstructorModuleMaxAggregateOutputType = {
    id: string | null;
    instructorId: string | null;
    moduleId: string | null;
    assignedAt: Date | null;
};
export type InstructorModuleCountAggregateOutputType = {
    id: number;
    instructorId: number;
    moduleId: number;
    assignedAt: number;
    _all: number;
};
export type InstructorModuleMinAggregateInputType = {
    id?: true;
    instructorId?: true;
    moduleId?: true;
    assignedAt?: true;
};
export type InstructorModuleMaxAggregateInputType = {
    id?: true;
    instructorId?: true;
    moduleId?: true;
    assignedAt?: true;
};
export type InstructorModuleCountAggregateInputType = {
    id?: true;
    instructorId?: true;
    moduleId?: true;
    assignedAt?: true;
    _all?: true;
};
export type InstructorModuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorModuleWhereInput;
    orderBy?: Prisma.InstructorModuleOrderByWithRelationInput | Prisma.InstructorModuleOrderByWithRelationInput[];
    cursor?: Prisma.InstructorModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InstructorModuleCountAggregateInputType;
    _min?: InstructorModuleMinAggregateInputType;
    _max?: InstructorModuleMaxAggregateInputType;
};
export type GetInstructorModuleAggregateType<T extends InstructorModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateInstructorModule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstructorModule[P]> : Prisma.GetScalarType<T[P], AggregateInstructorModule[P]>;
};
export type InstructorModuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorModuleWhereInput;
    orderBy?: Prisma.InstructorModuleOrderByWithAggregationInput | Prisma.InstructorModuleOrderByWithAggregationInput[];
    by: Prisma.InstructorModuleScalarFieldEnum[] | Prisma.InstructorModuleScalarFieldEnum;
    having?: Prisma.InstructorModuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstructorModuleCountAggregateInputType | true;
    _min?: InstructorModuleMinAggregateInputType;
    _max?: InstructorModuleMaxAggregateInputType;
};
export type InstructorModuleGroupByOutputType = {
    id: string;
    instructorId: string;
    moduleId: string;
    assignedAt: Date;
    _count: InstructorModuleCountAggregateOutputType | null;
    _min: InstructorModuleMinAggregateOutputType | null;
    _max: InstructorModuleMaxAggregateOutputType | null;
};
export type GetInstructorModuleGroupByPayload<T extends InstructorModuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstructorModuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstructorModuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstructorModuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstructorModuleGroupByOutputType[P]>;
}>>;
export type InstructorModuleWhereInput = {
    AND?: Prisma.InstructorModuleWhereInput | Prisma.InstructorModuleWhereInput[];
    OR?: Prisma.InstructorModuleWhereInput[];
    NOT?: Prisma.InstructorModuleWhereInput | Prisma.InstructorModuleWhereInput[];
    id?: Prisma.StringFilter<"InstructorModule"> | string;
    instructorId?: Prisma.StringFilter<"InstructorModule"> | string;
    moduleId?: Prisma.StringFilter<"InstructorModule"> | string;
    assignedAt?: Prisma.DateTimeFilter<"InstructorModule"> | Date | string;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
};
export type InstructorModuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    instructorId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    module?: Prisma.ModuleOrderByWithRelationInput;
};
export type InstructorModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    instructorId_moduleId?: Prisma.InstructorModuleInstructorIdModuleIdCompoundUniqueInput;
    AND?: Prisma.InstructorModuleWhereInput | Prisma.InstructorModuleWhereInput[];
    OR?: Prisma.InstructorModuleWhereInput[];
    NOT?: Prisma.InstructorModuleWhereInput | Prisma.InstructorModuleWhereInput[];
    instructorId?: Prisma.StringFilter<"InstructorModule"> | string;
    moduleId?: Prisma.StringFilter<"InstructorModule"> | string;
    assignedAt?: Prisma.DateTimeFilter<"InstructorModule"> | Date | string;
    module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
}, "id" | "instructorId_moduleId">;
export type InstructorModuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    instructorId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    _count?: Prisma.InstructorModuleCountOrderByAggregateInput;
    _max?: Prisma.InstructorModuleMaxOrderByAggregateInput;
    _min?: Prisma.InstructorModuleMinOrderByAggregateInput;
};
export type InstructorModuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.InstructorModuleScalarWhereWithAggregatesInput | Prisma.InstructorModuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.InstructorModuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InstructorModuleScalarWhereWithAggregatesInput | Prisma.InstructorModuleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InstructorModule"> | string;
    instructorId?: Prisma.StringWithAggregatesFilter<"InstructorModule"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"InstructorModule"> | string;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"InstructorModule"> | Date | string;
};
export type InstructorModuleCreateInput = {
    id?: string;
    instructorId: string;
    assignedAt?: Date | string;
    module: Prisma.ModuleCreateNestedOneWithoutInstructorsInput;
};
export type InstructorModuleUncheckedCreateInput = {
    id?: string;
    instructorId: string;
    moduleId: string;
    assignedAt?: Date | string;
};
export type InstructorModuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    module?: Prisma.ModuleUpdateOneRequiredWithoutInstructorsNestedInput;
};
export type InstructorModuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleCreateManyInput = {
    id?: string;
    instructorId: string;
    moduleId: string;
    assignedAt?: Date | string;
};
export type InstructorModuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleListRelationFilter = {
    every?: Prisma.InstructorModuleWhereInput;
    some?: Prisma.InstructorModuleWhereInput;
    none?: Prisma.InstructorModuleWhereInput;
};
export type InstructorModuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InstructorModuleInstructorIdModuleIdCompoundUniqueInput = {
    instructorId: string;
    moduleId: string;
};
export type InstructorModuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instructorId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type InstructorModuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instructorId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type InstructorModuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instructorId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type InstructorModuleCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput> | Prisma.InstructorModuleCreateWithoutModuleInput[] | Prisma.InstructorModuleUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.InstructorModuleCreateOrConnectWithoutModuleInput | Prisma.InstructorModuleCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.InstructorModuleCreateManyModuleInputEnvelope;
    connect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
};
export type InstructorModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput> | Prisma.InstructorModuleCreateWithoutModuleInput[] | Prisma.InstructorModuleUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.InstructorModuleCreateOrConnectWithoutModuleInput | Prisma.InstructorModuleCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.InstructorModuleCreateManyModuleInputEnvelope;
    connect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
};
export type InstructorModuleUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput> | Prisma.InstructorModuleCreateWithoutModuleInput[] | Prisma.InstructorModuleUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.InstructorModuleCreateOrConnectWithoutModuleInput | Prisma.InstructorModuleCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.InstructorModuleUpsertWithWhereUniqueWithoutModuleInput | Prisma.InstructorModuleUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.InstructorModuleCreateManyModuleInputEnvelope;
    set?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    disconnect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    delete?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    connect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    update?: Prisma.InstructorModuleUpdateWithWhereUniqueWithoutModuleInput | Prisma.InstructorModuleUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.InstructorModuleUpdateManyWithWhereWithoutModuleInput | Prisma.InstructorModuleUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.InstructorModuleScalarWhereInput | Prisma.InstructorModuleScalarWhereInput[];
};
export type InstructorModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput> | Prisma.InstructorModuleCreateWithoutModuleInput[] | Prisma.InstructorModuleUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.InstructorModuleCreateOrConnectWithoutModuleInput | Prisma.InstructorModuleCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.InstructorModuleUpsertWithWhereUniqueWithoutModuleInput | Prisma.InstructorModuleUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.InstructorModuleCreateManyModuleInputEnvelope;
    set?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    disconnect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    delete?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    connect?: Prisma.InstructorModuleWhereUniqueInput | Prisma.InstructorModuleWhereUniqueInput[];
    update?: Prisma.InstructorModuleUpdateWithWhereUniqueWithoutModuleInput | Prisma.InstructorModuleUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.InstructorModuleUpdateManyWithWhereWithoutModuleInput | Prisma.InstructorModuleUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.InstructorModuleScalarWhereInput | Prisma.InstructorModuleScalarWhereInput[];
};
export type InstructorModuleCreateWithoutModuleInput = {
    id?: string;
    instructorId: string;
    assignedAt?: Date | string;
};
export type InstructorModuleUncheckedCreateWithoutModuleInput = {
    id?: string;
    instructorId: string;
    assignedAt?: Date | string;
};
export type InstructorModuleCreateOrConnectWithoutModuleInput = {
    where: Prisma.InstructorModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput>;
};
export type InstructorModuleCreateManyModuleInputEnvelope = {
    data: Prisma.InstructorModuleCreateManyModuleInput | Prisma.InstructorModuleCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type InstructorModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.InstructorModuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstructorModuleUpdateWithoutModuleInput, Prisma.InstructorModuleUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.InstructorModuleCreateWithoutModuleInput, Prisma.InstructorModuleUncheckedCreateWithoutModuleInput>;
};
export type InstructorModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.InstructorModuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstructorModuleUpdateWithoutModuleInput, Prisma.InstructorModuleUncheckedUpdateWithoutModuleInput>;
};
export type InstructorModuleUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.InstructorModuleScalarWhereInput;
    data: Prisma.XOR<Prisma.InstructorModuleUpdateManyMutationInput, Prisma.InstructorModuleUncheckedUpdateManyWithoutModuleInput>;
};
export type InstructorModuleScalarWhereInput = {
    AND?: Prisma.InstructorModuleScalarWhereInput | Prisma.InstructorModuleScalarWhereInput[];
    OR?: Prisma.InstructorModuleScalarWhereInput[];
    NOT?: Prisma.InstructorModuleScalarWhereInput | Prisma.InstructorModuleScalarWhereInput[];
    id?: Prisma.StringFilter<"InstructorModule"> | string;
    instructorId?: Prisma.StringFilter<"InstructorModule"> | string;
    moduleId?: Prisma.StringFilter<"InstructorModule"> | string;
    assignedAt?: Prisma.DateTimeFilter<"InstructorModule"> | Date | string;
};
export type InstructorModuleCreateManyModuleInput = {
    id?: string;
    instructorId: string;
    assignedAt?: Date | string;
};
export type InstructorModuleUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instructorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorModuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instructorId?: boolean;
    moduleId?: boolean;
    assignedAt?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["instructorModule"]>;
export type InstructorModuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instructorId?: boolean;
    moduleId?: boolean;
    assignedAt?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["instructorModule"]>;
export type InstructorModuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instructorId?: boolean;
    moduleId?: boolean;
    assignedAt?: boolean;
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["instructorModule"]>;
export type InstructorModuleSelectScalar = {
    id?: boolean;
    instructorId?: boolean;
    moduleId?: boolean;
    assignedAt?: boolean;
};
export type InstructorModuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "instructorId" | "moduleId" | "assignedAt", ExtArgs["result"]["instructorModule"]>;
export type InstructorModuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type InstructorModuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type InstructorModuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type $InstructorModulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InstructorModule";
    objects: {
        module: Prisma.$ModulePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        instructorId: string;
        moduleId: string;
        assignedAt: Date;
    }, ExtArgs["result"]["instructorModule"]>;
    composites: {};
};
export type InstructorModuleGetPayload<S extends boolean | null | undefined | InstructorModuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload, S>;
export type InstructorModuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InstructorModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstructorModuleCountAggregateInputType | true;
};
export interface InstructorModuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InstructorModule'];
        meta: {
            name: 'InstructorModule';
        };
    };
    findUnique<T extends InstructorModuleFindUniqueArgs>(args: Prisma.SelectSubset<T, InstructorModuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InstructorModuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InstructorModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InstructorModuleFindFirstArgs>(args?: Prisma.SelectSubset<T, InstructorModuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InstructorModuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InstructorModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InstructorModuleFindManyArgs>(args?: Prisma.SelectSubset<T, InstructorModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InstructorModuleCreateArgs>(args: Prisma.SelectSubset<T, InstructorModuleCreateArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InstructorModuleCreateManyArgs>(args?: Prisma.SelectSubset<T, InstructorModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InstructorModuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InstructorModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InstructorModuleDeleteArgs>(args: Prisma.SelectSubset<T, InstructorModuleDeleteArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InstructorModuleUpdateArgs>(args: Prisma.SelectSubset<T, InstructorModuleUpdateArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InstructorModuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, InstructorModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InstructorModuleUpdateManyArgs>(args: Prisma.SelectSubset<T, InstructorModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InstructorModuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InstructorModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InstructorModuleUpsertArgs>(args: Prisma.SelectSubset<T, InstructorModuleUpsertArgs<ExtArgs>>): Prisma.Prisma__InstructorModuleClient<runtime.Types.Result.GetResult<Prisma.$InstructorModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InstructorModuleCountArgs>(args?: Prisma.Subset<T, InstructorModuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstructorModuleCountAggregateOutputType> : number>;
    aggregate<T extends InstructorModuleAggregateArgs>(args: Prisma.Subset<T, InstructorModuleAggregateArgs>): Prisma.PrismaPromise<GetInstructorModuleAggregateType<T>>;
    groupBy<T extends InstructorModuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InstructorModuleGroupByArgs['orderBy'];
    } : {
        orderBy?: InstructorModuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InstructorModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InstructorModuleFieldRefs;
}
export interface Prisma__InstructorModuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InstructorModuleFieldRefs {
    readonly id: Prisma.FieldRef<"InstructorModule", 'String'>;
    readonly instructorId: Prisma.FieldRef<"InstructorModule", 'String'>;
    readonly moduleId: Prisma.FieldRef<"InstructorModule", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"InstructorModule", 'DateTime'>;
}
export type InstructorModuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    where: Prisma.InstructorModuleWhereUniqueInput;
};
export type InstructorModuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    where: Prisma.InstructorModuleWhereUniqueInput;
};
export type InstructorModuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InstructorModuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InstructorModuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InstructorModuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorModuleCreateInput, Prisma.InstructorModuleUncheckedCreateInput>;
};
export type InstructorModuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InstructorModuleCreateManyInput | Prisma.InstructorModuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InstructorModuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    data: Prisma.InstructorModuleCreateManyInput | Prisma.InstructorModuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InstructorModuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InstructorModuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorModuleUpdateInput, Prisma.InstructorModuleUncheckedUpdateInput>;
    where: Prisma.InstructorModuleWhereUniqueInput;
};
export type InstructorModuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InstructorModuleUpdateManyMutationInput, Prisma.InstructorModuleUncheckedUpdateManyInput>;
    where?: Prisma.InstructorModuleWhereInput;
    limit?: number;
};
export type InstructorModuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorModuleUpdateManyMutationInput, Prisma.InstructorModuleUncheckedUpdateManyInput>;
    where?: Prisma.InstructorModuleWhereInput;
    limit?: number;
    include?: Prisma.InstructorModuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InstructorModuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    where: Prisma.InstructorModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorModuleCreateInput, Prisma.InstructorModuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InstructorModuleUpdateInput, Prisma.InstructorModuleUncheckedUpdateInput>;
};
export type InstructorModuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
    where: Prisma.InstructorModuleWhereUniqueInput;
};
export type InstructorModuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorModuleWhereInput;
    limit?: number;
};
export type InstructorModuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorModuleSelect<ExtArgs> | null;
    omit?: Prisma.InstructorModuleOmit<ExtArgs> | null;
    include?: Prisma.InstructorModuleInclude<ExtArgs> | null;
};
