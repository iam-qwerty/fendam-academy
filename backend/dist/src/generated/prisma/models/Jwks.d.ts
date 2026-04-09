import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JwksModel = runtime.Types.Result.DefaultSelection<Prisma.$JwksPayload>;
export type AggregateJwks = {
    _count: JwksCountAggregateOutputType | null;
    _min: JwksMinAggregateOutputType | null;
    _max: JwksMaxAggregateOutputType | null;
};
export type JwksMinAggregateOutputType = {
    id: string | null;
    publicKey: string | null;
    privateKey: string | null;
    createdAt: Date | null;
};
export type JwksMaxAggregateOutputType = {
    id: string | null;
    publicKey: string | null;
    privateKey: string | null;
    createdAt: Date | null;
};
export type JwksCountAggregateOutputType = {
    id: number;
    publicKey: number;
    privateKey: number;
    createdAt: number;
    _all: number;
};
export type JwksMinAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
};
export type JwksMaxAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
};
export type JwksCountAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
    _all?: true;
};
export type JwksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JwksWhereInput;
    orderBy?: Prisma.JwksOrderByWithRelationInput | Prisma.JwksOrderByWithRelationInput[];
    cursor?: Prisma.JwksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JwksCountAggregateInputType;
    _min?: JwksMinAggregateInputType;
    _max?: JwksMaxAggregateInputType;
};
export type GetJwksAggregateType<T extends JwksAggregateArgs> = {
    [P in keyof T & keyof AggregateJwks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJwks[P]> : Prisma.GetScalarType<T[P], AggregateJwks[P]>;
};
export type JwksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JwksWhereInput;
    orderBy?: Prisma.JwksOrderByWithAggregationInput | Prisma.JwksOrderByWithAggregationInput[];
    by: Prisma.JwksScalarFieldEnum[] | Prisma.JwksScalarFieldEnum;
    having?: Prisma.JwksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JwksCountAggregateInputType | true;
    _min?: JwksMinAggregateInputType;
    _max?: JwksMaxAggregateInputType;
};
export type JwksGroupByOutputType = {
    id: string;
    publicKey: string;
    privateKey: string;
    createdAt: Date;
    _count: JwksCountAggregateOutputType | null;
    _min: JwksMinAggregateOutputType | null;
    _max: JwksMaxAggregateOutputType | null;
};
export type GetJwksGroupByPayload<T extends JwksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JwksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JwksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JwksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JwksGroupByOutputType[P]>;
}>>;
export type JwksWhereInput = {
    AND?: Prisma.JwksWhereInput | Prisma.JwksWhereInput[];
    OR?: Prisma.JwksWhereInput[];
    NOT?: Prisma.JwksWhereInput | Prisma.JwksWhereInput[];
    id?: Prisma.StringFilter<"Jwks"> | string;
    publicKey?: Prisma.StringFilter<"Jwks"> | string;
    privateKey?: Prisma.StringFilter<"Jwks"> | string;
    createdAt?: Prisma.DateTimeFilter<"Jwks"> | Date | string;
};
export type JwksOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JwksWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JwksWhereInput | Prisma.JwksWhereInput[];
    OR?: Prisma.JwksWhereInput[];
    NOT?: Prisma.JwksWhereInput | Prisma.JwksWhereInput[];
    publicKey?: Prisma.StringFilter<"Jwks"> | string;
    privateKey?: Prisma.StringFilter<"Jwks"> | string;
    createdAt?: Prisma.DateTimeFilter<"Jwks"> | Date | string;
}, "id">;
export type JwksOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.JwksCountOrderByAggregateInput;
    _max?: Prisma.JwksMaxOrderByAggregateInput;
    _min?: Prisma.JwksMinOrderByAggregateInput;
};
export type JwksScalarWhereWithAggregatesInput = {
    AND?: Prisma.JwksScalarWhereWithAggregatesInput | Prisma.JwksScalarWhereWithAggregatesInput[];
    OR?: Prisma.JwksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JwksScalarWhereWithAggregatesInput | Prisma.JwksScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Jwks"> | string;
    publicKey?: Prisma.StringWithAggregatesFilter<"Jwks"> | string;
    privateKey?: Prisma.StringWithAggregatesFilter<"Jwks"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Jwks"> | Date | string;
};
export type JwksCreateInput = {
    id?: string;
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
};
export type JwksUncheckedCreateInput = {
    id?: string;
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
};
export type JwksUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JwksUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JwksCreateManyInput = {
    id?: string;
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
};
export type JwksUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JwksUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JwksCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JwksMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JwksMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JwksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["jwks"]>;
export type JwksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["jwks"]>;
export type JwksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["jwks"]>;
export type JwksSelectScalar = {
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
};
export type JwksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "createdAt", ExtArgs["result"]["jwks"]>;
export type $JwksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Jwks";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        publicKey: string;
        privateKey: string;
        createdAt: Date;
    }, ExtArgs["result"]["jwks"]>;
    composites: {};
};
export type JwksGetPayload<S extends boolean | null | undefined | JwksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JwksPayload, S>;
export type JwksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JwksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JwksCountAggregateInputType | true;
};
export interface JwksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Jwks'];
        meta: {
            name: 'Jwks';
        };
    };
    findUnique<T extends JwksFindUniqueArgs>(args: Prisma.SelectSubset<T, JwksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JwksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JwksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JwksFindFirstArgs>(args?: Prisma.SelectSubset<T, JwksFindFirstArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JwksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JwksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JwksFindManyArgs>(args?: Prisma.SelectSubset<T, JwksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JwksCreateArgs>(args: Prisma.SelectSubset<T, JwksCreateArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JwksCreateManyArgs>(args?: Prisma.SelectSubset<T, JwksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JwksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JwksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JwksDeleteArgs>(args: Prisma.SelectSubset<T, JwksDeleteArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JwksUpdateArgs>(args: Prisma.SelectSubset<T, JwksUpdateArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JwksDeleteManyArgs>(args?: Prisma.SelectSubset<T, JwksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JwksUpdateManyArgs>(args: Prisma.SelectSubset<T, JwksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JwksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JwksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JwksUpsertArgs>(args: Prisma.SelectSubset<T, JwksUpsertArgs<ExtArgs>>): Prisma.Prisma__JwksClient<runtime.Types.Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JwksCountArgs>(args?: Prisma.Subset<T, JwksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JwksCountAggregateOutputType> : number>;
    aggregate<T extends JwksAggregateArgs>(args: Prisma.Subset<T, JwksAggregateArgs>): Prisma.PrismaPromise<GetJwksAggregateType<T>>;
    groupBy<T extends JwksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JwksGroupByArgs['orderBy'];
    } : {
        orderBy?: JwksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JwksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JwksFieldRefs;
}
export interface Prisma__JwksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JwksFieldRefs {
    readonly id: Prisma.FieldRef<"Jwks", 'String'>;
    readonly publicKey: Prisma.FieldRef<"Jwks", 'String'>;
    readonly privateKey: Prisma.FieldRef<"Jwks", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Jwks", 'DateTime'>;
}
export type JwksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where: Prisma.JwksWhereUniqueInput;
};
export type JwksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where: Prisma.JwksWhereUniqueInput;
};
export type JwksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where?: Prisma.JwksWhereInput;
    orderBy?: Prisma.JwksOrderByWithRelationInput | Prisma.JwksOrderByWithRelationInput[];
    cursor?: Prisma.JwksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JwksScalarFieldEnum | Prisma.JwksScalarFieldEnum[];
};
export type JwksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where?: Prisma.JwksWhereInput;
    orderBy?: Prisma.JwksOrderByWithRelationInput | Prisma.JwksOrderByWithRelationInput[];
    cursor?: Prisma.JwksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JwksScalarFieldEnum | Prisma.JwksScalarFieldEnum[];
};
export type JwksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where?: Prisma.JwksWhereInput;
    orderBy?: Prisma.JwksOrderByWithRelationInput | Prisma.JwksOrderByWithRelationInput[];
    cursor?: Prisma.JwksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JwksScalarFieldEnum | Prisma.JwksScalarFieldEnum[];
};
export type JwksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JwksCreateInput, Prisma.JwksUncheckedCreateInput>;
};
export type JwksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JwksCreateManyInput | Prisma.JwksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JwksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    data: Prisma.JwksCreateManyInput | Prisma.JwksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JwksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JwksUpdateInput, Prisma.JwksUncheckedUpdateInput>;
    where: Prisma.JwksWhereUniqueInput;
};
export type JwksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JwksUpdateManyMutationInput, Prisma.JwksUncheckedUpdateManyInput>;
    where?: Prisma.JwksWhereInput;
    limit?: number;
};
export type JwksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JwksUpdateManyMutationInput, Prisma.JwksUncheckedUpdateManyInput>;
    where?: Prisma.JwksWhereInput;
    limit?: number;
};
export type JwksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where: Prisma.JwksWhereUniqueInput;
    create: Prisma.XOR<Prisma.JwksCreateInput, Prisma.JwksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JwksUpdateInput, Prisma.JwksUncheckedUpdateInput>;
};
export type JwksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
    where: Prisma.JwksWhereUniqueInput;
};
export type JwksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JwksWhereInput;
    limit?: number;
};
export type JwksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JwksSelect<ExtArgs> | null;
    omit?: Prisma.JwksOmit<ExtArgs> | null;
};
