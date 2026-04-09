import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TrackModel = runtime.Types.Result.DefaultSelection<Prisma.$TrackPayload>;
export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null;
    _min: TrackMinAggregateOutputType | null;
    _max: TrackMaxAggregateOutputType | null;
};
export type TrackMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
};
export type TrackMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
};
export type TrackCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    _all: number;
};
export type TrackMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type TrackMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type TrackCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type TrackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByWithRelationInput | Prisma.TrackOrderByWithRelationInput[];
    cursor?: Prisma.TrackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrackCountAggregateInputType;
    _min?: TrackMinAggregateInputType;
    _max?: TrackMaxAggregateInputType;
};
export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
    [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrack[P]> : Prisma.GetScalarType<T[P], AggregateTrack[P]>;
};
export type TrackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByWithAggregationInput | Prisma.TrackOrderByWithAggregationInput[];
    by: Prisma.TrackScalarFieldEnum[] | Prisma.TrackScalarFieldEnum;
    having?: Prisma.TrackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrackCountAggregateInputType | true;
    _min?: TrackMinAggregateInputType;
    _max?: TrackMaxAggregateInputType;
};
export type TrackGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    _count: TrackCountAggregateOutputType | null;
    _min: TrackMinAggregateOutputType | null;
    _max: TrackMaxAggregateOutputType | null;
};
export type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrackGroupByOutputType[P]>;
}>>;
export type TrackWhereInput = {
    AND?: Prisma.TrackWhereInput | Prisma.TrackWhereInput[];
    OR?: Prisma.TrackWhereInput[];
    NOT?: Prisma.TrackWhereInput | Prisma.TrackWhereInput[];
    id?: Prisma.StringFilter<"Track"> | string;
    name?: Prisma.StringFilter<"Track"> | string;
    description?: Prisma.StringFilter<"Track"> | string;
    modules?: Prisma.ModuleListRelationFilter;
    students?: Prisma.StudentProfileListRelationFilter;
};
export type TrackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    modules?: Prisma.ModuleOrderByRelationAggregateInput;
    students?: Prisma.StudentProfileOrderByRelationAggregateInput;
};
export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TrackWhereInput | Prisma.TrackWhereInput[];
    OR?: Prisma.TrackWhereInput[];
    NOT?: Prisma.TrackWhereInput | Prisma.TrackWhereInput[];
    name?: Prisma.StringFilter<"Track"> | string;
    description?: Prisma.StringFilter<"Track"> | string;
    modules?: Prisma.ModuleListRelationFilter;
    students?: Prisma.StudentProfileListRelationFilter;
}, "id">;
export type TrackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    _count?: Prisma.TrackCountOrderByAggregateInput;
    _max?: Prisma.TrackMaxOrderByAggregateInput;
    _min?: Prisma.TrackMinOrderByAggregateInput;
};
export type TrackScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrackScalarWhereWithAggregatesInput | Prisma.TrackScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrackScalarWhereWithAggregatesInput | Prisma.TrackScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Track"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Track"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Track"> | string;
};
export type TrackCreateInput = {
    id?: string;
    name: string;
    description: string;
    modules?: Prisma.ModuleCreateNestedManyWithoutTrackInput;
    students?: Prisma.StudentProfileCreateNestedManyWithoutTrackInput;
};
export type TrackUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    modules?: Prisma.ModuleUncheckedCreateNestedManyWithoutTrackInput;
    students?: Prisma.StudentProfileUncheckedCreateNestedManyWithoutTrackInput;
};
export type TrackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    modules?: Prisma.ModuleUpdateManyWithoutTrackNestedInput;
    students?: Prisma.StudentProfileUpdateManyWithoutTrackNestedInput;
};
export type TrackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    modules?: Prisma.ModuleUncheckedUpdateManyWithoutTrackNestedInput;
    students?: Prisma.StudentProfileUncheckedUpdateManyWithoutTrackNestedInput;
};
export type TrackCreateManyInput = {
    id?: string;
    name: string;
    description: string;
};
export type TrackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrackScalarRelationFilter = {
    is?: Prisma.TrackWhereInput;
    isNot?: Prisma.TrackWhereInput;
};
export type TrackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type TrackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type TrackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type TrackCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.TrackCreateWithoutStudentsInput, Prisma.TrackUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.TrackCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.TrackWhereUniqueInput;
};
export type TrackUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.TrackCreateWithoutStudentsInput, Prisma.TrackUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.TrackCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.TrackUpsertWithoutStudentsInput;
    connect?: Prisma.TrackWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrackUpdateToOneWithWhereWithoutStudentsInput, Prisma.TrackUpdateWithoutStudentsInput>, Prisma.TrackUncheckedUpdateWithoutStudentsInput>;
};
export type TrackCreateNestedOneWithoutModulesInput = {
    create?: Prisma.XOR<Prisma.TrackCreateWithoutModulesInput, Prisma.TrackUncheckedCreateWithoutModulesInput>;
    connectOrCreate?: Prisma.TrackCreateOrConnectWithoutModulesInput;
    connect?: Prisma.TrackWhereUniqueInput;
};
export type TrackUpdateOneRequiredWithoutModulesNestedInput = {
    create?: Prisma.XOR<Prisma.TrackCreateWithoutModulesInput, Prisma.TrackUncheckedCreateWithoutModulesInput>;
    connectOrCreate?: Prisma.TrackCreateOrConnectWithoutModulesInput;
    upsert?: Prisma.TrackUpsertWithoutModulesInput;
    connect?: Prisma.TrackWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrackUpdateToOneWithWhereWithoutModulesInput, Prisma.TrackUpdateWithoutModulesInput>, Prisma.TrackUncheckedUpdateWithoutModulesInput>;
};
export type TrackCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    description: string;
    modules?: Prisma.ModuleCreateNestedManyWithoutTrackInput;
};
export type TrackUncheckedCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    description: string;
    modules?: Prisma.ModuleUncheckedCreateNestedManyWithoutTrackInput;
};
export type TrackCreateOrConnectWithoutStudentsInput = {
    where: Prisma.TrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackCreateWithoutStudentsInput, Prisma.TrackUncheckedCreateWithoutStudentsInput>;
};
export type TrackUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.TrackUpdateWithoutStudentsInput, Prisma.TrackUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.TrackCreateWithoutStudentsInput, Prisma.TrackUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.TrackWhereInput;
};
export type TrackUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.TrackWhereInput;
    data: Prisma.XOR<Prisma.TrackUpdateWithoutStudentsInput, Prisma.TrackUncheckedUpdateWithoutStudentsInput>;
};
export type TrackUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    modules?: Prisma.ModuleUpdateManyWithoutTrackNestedInput;
};
export type TrackUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    modules?: Prisma.ModuleUncheckedUpdateManyWithoutTrackNestedInput;
};
export type TrackCreateWithoutModulesInput = {
    id?: string;
    name: string;
    description: string;
    students?: Prisma.StudentProfileCreateNestedManyWithoutTrackInput;
};
export type TrackUncheckedCreateWithoutModulesInput = {
    id?: string;
    name: string;
    description: string;
    students?: Prisma.StudentProfileUncheckedCreateNestedManyWithoutTrackInput;
};
export type TrackCreateOrConnectWithoutModulesInput = {
    where: Prisma.TrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackCreateWithoutModulesInput, Prisma.TrackUncheckedCreateWithoutModulesInput>;
};
export type TrackUpsertWithoutModulesInput = {
    update: Prisma.XOR<Prisma.TrackUpdateWithoutModulesInput, Prisma.TrackUncheckedUpdateWithoutModulesInput>;
    create: Prisma.XOR<Prisma.TrackCreateWithoutModulesInput, Prisma.TrackUncheckedCreateWithoutModulesInput>;
    where?: Prisma.TrackWhereInput;
};
export type TrackUpdateToOneWithWhereWithoutModulesInput = {
    where?: Prisma.TrackWhereInput;
    data: Prisma.XOR<Prisma.TrackUpdateWithoutModulesInput, Prisma.TrackUncheckedUpdateWithoutModulesInput>;
};
export type TrackUpdateWithoutModulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentProfileUpdateManyWithoutTrackNestedInput;
};
export type TrackUncheckedUpdateWithoutModulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentProfileUncheckedUpdateManyWithoutTrackNestedInput;
};
export type TrackCountOutputType = {
    modules: number;
    students: number;
};
export type TrackCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modules?: boolean | TrackCountOutputTypeCountModulesArgs;
    students?: boolean | TrackCountOutputTypeCountStudentsArgs;
};
export type TrackCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackCountOutputTypeSelect<ExtArgs> | null;
};
export type TrackCountOutputTypeCountModulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
};
export type TrackCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
};
export type TrackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    modules?: boolean | Prisma.Track$modulesArgs<ExtArgs>;
    students?: boolean | Prisma.Track$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TrackCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["track"]>;
export type TrackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["track"]>;
export type TrackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["track"]>;
export type TrackSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
};
export type TrackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["track"]>;
export type TrackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modules?: boolean | Prisma.Track$modulesArgs<ExtArgs>;
    students?: boolean | Prisma.Track$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TrackCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TrackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TrackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TrackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Track";
    objects: {
        modules: Prisma.$ModulePayload<ExtArgs>[];
        students: Prisma.$StudentProfilePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
    }, ExtArgs["result"]["track"]>;
    composites: {};
};
export type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrackPayload, S>;
export type TrackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrackCountAggregateInputType | true;
};
export interface TrackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Track'];
        meta: {
            name: 'Track';
        };
    };
    findUnique<T extends TrackFindUniqueArgs>(args: Prisma.SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrackFindFirstArgs>(args?: Prisma.SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrackFindManyArgs>(args?: Prisma.SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrackCreateArgs>(args: Prisma.SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrackCreateManyArgs>(args?: Prisma.SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TrackDeleteArgs>(args: Prisma.SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrackUpdateArgs>(args: Prisma.SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrackDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrackUpdateManyArgs>(args: Prisma.SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TrackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TrackUpsertArgs>(args: Prisma.SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma.Prisma__TrackClient<runtime.Types.Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TrackCountArgs>(args?: Prisma.Subset<T, TrackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrackCountAggregateOutputType> : number>;
    aggregate<T extends TrackAggregateArgs>(args: Prisma.Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>;
    groupBy<T extends TrackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrackGroupByArgs['orderBy'];
    } : {
        orderBy?: TrackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrackFieldRefs;
}
export interface Prisma__TrackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    modules<T extends Prisma.Track$modulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Track$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    students<T extends Prisma.Track$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Track$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrackFieldRefs {
    readonly id: Prisma.FieldRef<"Track", 'String'>;
    readonly name: Prisma.FieldRef<"Track", 'String'>;
    readonly description: Prisma.FieldRef<"Track", 'String'>;
}
export type TrackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where: Prisma.TrackWhereUniqueInput;
};
export type TrackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where: Prisma.TrackWhereUniqueInput;
};
export type TrackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByWithRelationInput | Prisma.TrackOrderByWithRelationInput[];
    cursor?: Prisma.TrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrackScalarFieldEnum | Prisma.TrackScalarFieldEnum[];
};
export type TrackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByWithRelationInput | Prisma.TrackOrderByWithRelationInput[];
    cursor?: Prisma.TrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrackScalarFieldEnum | Prisma.TrackScalarFieldEnum[];
};
export type TrackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByWithRelationInput | Prisma.TrackOrderByWithRelationInput[];
    cursor?: Prisma.TrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrackScalarFieldEnum | Prisma.TrackScalarFieldEnum[];
};
export type TrackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackCreateInput, Prisma.TrackUncheckedCreateInput>;
};
export type TrackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrackCreateManyInput | Prisma.TrackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    data: Prisma.TrackCreateManyInput | Prisma.TrackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackUpdateInput, Prisma.TrackUncheckedUpdateInput>;
    where: Prisma.TrackWhereUniqueInput;
};
export type TrackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrackUpdateManyMutationInput, Prisma.TrackUncheckedUpdateManyInput>;
    where?: Prisma.TrackWhereInput;
    limit?: number;
};
export type TrackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackUpdateManyMutationInput, Prisma.TrackUncheckedUpdateManyInput>;
    where?: Prisma.TrackWhereInput;
    limit?: number;
};
export type TrackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where: Prisma.TrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackCreateInput, Prisma.TrackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrackUpdateInput, Prisma.TrackUncheckedUpdateInput>;
};
export type TrackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
    where: Prisma.TrackWhereUniqueInput;
};
export type TrackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackWhereInput;
    limit?: number;
};
export type Track$modulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Track$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
export type TrackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackSelect<ExtArgs> | null;
    omit?: Prisma.TrackOmit<ExtArgs> | null;
    include?: Prisma.TrackInclude<ExtArgs> | null;
};
