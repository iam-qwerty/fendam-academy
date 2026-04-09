import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KYCRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$KYCRecordPayload>;
export type AggregateKYCRecord = {
    _count: KYCRecordCountAggregateOutputType | null;
    _min: KYCRecordMinAggregateOutputType | null;
    _max: KYCRecordMaxAggregateOutputType | null;
};
export type KYCRecordMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    idCardUrl: string | null;
    paymentProofUrl: string | null;
    status: string | null;
    reviewComment: string | null;
    createdAt: Date | null;
};
export type KYCRecordMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    idCardUrl: string | null;
    paymentProofUrl: string | null;
    status: string | null;
    reviewComment: string | null;
    createdAt: Date | null;
};
export type KYCRecordCountAggregateOutputType = {
    id: number;
    studentId: number;
    idCardUrl: number;
    paymentProofUrl: number;
    status: number;
    reviewComment: number;
    createdAt: number;
    _all: number;
};
export type KYCRecordMinAggregateInputType = {
    id?: true;
    studentId?: true;
    idCardUrl?: true;
    paymentProofUrl?: true;
    status?: true;
    reviewComment?: true;
    createdAt?: true;
};
export type KYCRecordMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    idCardUrl?: true;
    paymentProofUrl?: true;
    status?: true;
    reviewComment?: true;
    createdAt?: true;
};
export type KYCRecordCountAggregateInputType = {
    id?: true;
    studentId?: true;
    idCardUrl?: true;
    paymentProofUrl?: true;
    status?: true;
    reviewComment?: true;
    createdAt?: true;
    _all?: true;
};
export type KYCRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KYCRecordWhereInput;
    orderBy?: Prisma.KYCRecordOrderByWithRelationInput | Prisma.KYCRecordOrderByWithRelationInput[];
    cursor?: Prisma.KYCRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KYCRecordCountAggregateInputType;
    _min?: KYCRecordMinAggregateInputType;
    _max?: KYCRecordMaxAggregateInputType;
};
export type GetKYCRecordAggregateType<T extends KYCRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateKYCRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKYCRecord[P]> : Prisma.GetScalarType<T[P], AggregateKYCRecord[P]>;
};
export type KYCRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KYCRecordWhereInput;
    orderBy?: Prisma.KYCRecordOrderByWithAggregationInput | Prisma.KYCRecordOrderByWithAggregationInput[];
    by: Prisma.KYCRecordScalarFieldEnum[] | Prisma.KYCRecordScalarFieldEnum;
    having?: Prisma.KYCRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KYCRecordCountAggregateInputType | true;
    _min?: KYCRecordMinAggregateInputType;
    _max?: KYCRecordMaxAggregateInputType;
};
export type KYCRecordGroupByOutputType = {
    id: string;
    studentId: string;
    idCardUrl: string;
    paymentProofUrl: string;
    status: string;
    reviewComment: string | null;
    createdAt: Date;
    _count: KYCRecordCountAggregateOutputType | null;
    _min: KYCRecordMinAggregateOutputType | null;
    _max: KYCRecordMaxAggregateOutputType | null;
};
export type GetKYCRecordGroupByPayload<T extends KYCRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KYCRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KYCRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KYCRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KYCRecordGroupByOutputType[P]>;
}>>;
export type KYCRecordWhereInput = {
    AND?: Prisma.KYCRecordWhereInput | Prisma.KYCRecordWhereInput[];
    OR?: Prisma.KYCRecordWhereInput[];
    NOT?: Prisma.KYCRecordWhereInput | Prisma.KYCRecordWhereInput[];
    id?: Prisma.StringFilter<"KYCRecord"> | string;
    studentId?: Prisma.StringFilter<"KYCRecord"> | string;
    idCardUrl?: Prisma.StringFilter<"KYCRecord"> | string;
    paymentProofUrl?: Prisma.StringFilter<"KYCRecord"> | string;
    status?: Prisma.StringFilter<"KYCRecord"> | string;
    reviewComment?: Prisma.StringNullableFilter<"KYCRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KYCRecord"> | Date | string;
};
export type KYCRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    idCardUrl?: Prisma.SortOrder;
    paymentProofUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewComment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KYCRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KYCRecordWhereInput | Prisma.KYCRecordWhereInput[];
    OR?: Prisma.KYCRecordWhereInput[];
    NOT?: Prisma.KYCRecordWhereInput | Prisma.KYCRecordWhereInput[];
    studentId?: Prisma.StringFilter<"KYCRecord"> | string;
    idCardUrl?: Prisma.StringFilter<"KYCRecord"> | string;
    paymentProofUrl?: Prisma.StringFilter<"KYCRecord"> | string;
    status?: Prisma.StringFilter<"KYCRecord"> | string;
    reviewComment?: Prisma.StringNullableFilter<"KYCRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KYCRecord"> | Date | string;
}, "id">;
export type KYCRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    idCardUrl?: Prisma.SortOrder;
    paymentProofUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewComment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KYCRecordCountOrderByAggregateInput;
    _max?: Prisma.KYCRecordMaxOrderByAggregateInput;
    _min?: Prisma.KYCRecordMinOrderByAggregateInput;
};
export type KYCRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.KYCRecordScalarWhereWithAggregatesInput | Prisma.KYCRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.KYCRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KYCRecordScalarWhereWithAggregatesInput | Prisma.KYCRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KYCRecord"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"KYCRecord"> | string;
    idCardUrl?: Prisma.StringWithAggregatesFilter<"KYCRecord"> | string;
    paymentProofUrl?: Prisma.StringWithAggregatesFilter<"KYCRecord"> | string;
    status?: Prisma.StringWithAggregatesFilter<"KYCRecord"> | string;
    reviewComment?: Prisma.StringNullableWithAggregatesFilter<"KYCRecord"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KYCRecord"> | Date | string;
};
export type KYCRecordCreateInput = {
    id?: string;
    studentId: string;
    idCardUrl: string;
    paymentProofUrl: string;
    status?: string;
    reviewComment?: string | null;
    createdAt?: Date | string;
};
export type KYCRecordUncheckedCreateInput = {
    id?: string;
    studentId: string;
    idCardUrl: string;
    paymentProofUrl: string;
    status?: string;
    reviewComment?: string | null;
    createdAt?: Date | string;
};
export type KYCRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    idCardUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentProofUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KYCRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    idCardUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentProofUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KYCRecordCreateManyInput = {
    id?: string;
    studentId: string;
    idCardUrl: string;
    paymentProofUrl: string;
    status?: string;
    reviewComment?: string | null;
    createdAt?: Date | string;
};
export type KYCRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    idCardUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentProofUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KYCRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    idCardUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentProofUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KYCRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    idCardUrl?: Prisma.SortOrder;
    paymentProofUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KYCRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    idCardUrl?: Prisma.SortOrder;
    paymentProofUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KYCRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    idCardUrl?: Prisma.SortOrder;
    paymentProofUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KYCRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    idCardUrl?: boolean;
    paymentProofUrl?: boolean;
    status?: boolean;
    reviewComment?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kYCRecord"]>;
export type KYCRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    idCardUrl?: boolean;
    paymentProofUrl?: boolean;
    status?: boolean;
    reviewComment?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kYCRecord"]>;
export type KYCRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    idCardUrl?: boolean;
    paymentProofUrl?: boolean;
    status?: boolean;
    reviewComment?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kYCRecord"]>;
export type KYCRecordSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    idCardUrl?: boolean;
    paymentProofUrl?: boolean;
    status?: boolean;
    reviewComment?: boolean;
    createdAt?: boolean;
};
export type KYCRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "idCardUrl" | "paymentProofUrl" | "status" | "reviewComment" | "createdAt", ExtArgs["result"]["kYCRecord"]>;
export type $KYCRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KYCRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        idCardUrl: string;
        paymentProofUrl: string;
        status: string;
        reviewComment: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["kYCRecord"]>;
    composites: {};
};
export type KYCRecordGetPayload<S extends boolean | null | undefined | KYCRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload, S>;
export type KYCRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KYCRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KYCRecordCountAggregateInputType | true;
};
export interface KYCRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KYCRecord'];
        meta: {
            name: 'KYCRecord';
        };
    };
    findUnique<T extends KYCRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, KYCRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KYCRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KYCRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KYCRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, KYCRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KYCRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KYCRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KYCRecordFindManyArgs>(args?: Prisma.SelectSubset<T, KYCRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KYCRecordCreateArgs>(args: Prisma.SelectSubset<T, KYCRecordCreateArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KYCRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, KYCRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KYCRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KYCRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KYCRecordDeleteArgs>(args: Prisma.SelectSubset<T, KYCRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KYCRecordUpdateArgs>(args: Prisma.SelectSubset<T, KYCRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KYCRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, KYCRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KYCRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, KYCRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KYCRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KYCRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KYCRecordUpsertArgs>(args: Prisma.SelectSubset<T, KYCRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__KYCRecordClient<runtime.Types.Result.GetResult<Prisma.$KYCRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KYCRecordCountArgs>(args?: Prisma.Subset<T, KYCRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KYCRecordCountAggregateOutputType> : number>;
    aggregate<T extends KYCRecordAggregateArgs>(args: Prisma.Subset<T, KYCRecordAggregateArgs>): Prisma.PrismaPromise<GetKYCRecordAggregateType<T>>;
    groupBy<T extends KYCRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KYCRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: KYCRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KYCRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKYCRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KYCRecordFieldRefs;
}
export interface Prisma__KYCRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KYCRecordFieldRefs {
    readonly id: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly studentId: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly idCardUrl: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly paymentProofUrl: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly status: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly reviewComment: Prisma.FieldRef<"KYCRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KYCRecord", 'DateTime'>;
}
export type KYCRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where: Prisma.KYCRecordWhereUniqueInput;
};
export type KYCRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where: Prisma.KYCRecordWhereUniqueInput;
};
export type KYCRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where?: Prisma.KYCRecordWhereInput;
    orderBy?: Prisma.KYCRecordOrderByWithRelationInput | Prisma.KYCRecordOrderByWithRelationInput[];
    cursor?: Prisma.KYCRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KYCRecordScalarFieldEnum | Prisma.KYCRecordScalarFieldEnum[];
};
export type KYCRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where?: Prisma.KYCRecordWhereInput;
    orderBy?: Prisma.KYCRecordOrderByWithRelationInput | Prisma.KYCRecordOrderByWithRelationInput[];
    cursor?: Prisma.KYCRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KYCRecordScalarFieldEnum | Prisma.KYCRecordScalarFieldEnum[];
};
export type KYCRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where?: Prisma.KYCRecordWhereInput;
    orderBy?: Prisma.KYCRecordOrderByWithRelationInput | Prisma.KYCRecordOrderByWithRelationInput[];
    cursor?: Prisma.KYCRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KYCRecordScalarFieldEnum | Prisma.KYCRecordScalarFieldEnum[];
};
export type KYCRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KYCRecordCreateInput, Prisma.KYCRecordUncheckedCreateInput>;
};
export type KYCRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KYCRecordCreateManyInput | Prisma.KYCRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KYCRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    data: Prisma.KYCRecordCreateManyInput | Prisma.KYCRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KYCRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KYCRecordUpdateInput, Prisma.KYCRecordUncheckedUpdateInput>;
    where: Prisma.KYCRecordWhereUniqueInput;
};
export type KYCRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KYCRecordUpdateManyMutationInput, Prisma.KYCRecordUncheckedUpdateManyInput>;
    where?: Prisma.KYCRecordWhereInput;
    limit?: number;
};
export type KYCRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KYCRecordUpdateManyMutationInput, Prisma.KYCRecordUncheckedUpdateManyInput>;
    where?: Prisma.KYCRecordWhereInput;
    limit?: number;
};
export type KYCRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where: Prisma.KYCRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.KYCRecordCreateInput, Prisma.KYCRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KYCRecordUpdateInput, Prisma.KYCRecordUncheckedUpdateInput>;
};
export type KYCRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
    where: Prisma.KYCRecordWhereUniqueInput;
};
export type KYCRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KYCRecordWhereInput;
    limit?: number;
};
export type KYCRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KYCRecordSelect<ExtArgs> | null;
    omit?: Prisma.KYCRecordOmit<ExtArgs> | null;
};
