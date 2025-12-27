import { TypedDocumentNode } from 'apollo-angular';
export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export type GraphReponsePaged<T> = {
    pageInfo?: PageInfo;
    totalCount: number;
    items?: T[];
};
export type OrderType<T> = {
    [index in keyof T]: 'ASC' | 'DESC';
};
export type WhereType<T> = {
    [index in keyof Partial<T>]: WhereType<T> | WhereType<T>[] | {
        [op: string]: string | string[] | number | boolean | Date | null;
    };
};
export interface GraphQueryInput<T = any> {
    props: string;
    where?: WhereType<T> | null;
    order?: OrderType<T> | null;
    take?: number;
    prefixType?: string;
}
export interface GraphQueryPayload {
    query: any;
    variables: any;
}
export interface GraphPayload extends GraphQueryPayload {
    name: string;
}
export interface GraphMutationPayload {
    mutation: TypedDocumentNode<unknown, unknown>;
    variables: any;
}
export declare function createQuery<T>(name: string, input: GraphQueryInput<T>): GraphPayload;
