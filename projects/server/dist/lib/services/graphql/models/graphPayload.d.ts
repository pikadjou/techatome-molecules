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
    [index in keyof Partial<T>]: 'ASC' | 'DESC';
};
export type WhereType<T> = {
    [index in keyof Partial<T>]: WhereType<T[index]> | WhereType<T>[] | {
        [op: string]: WhereType<T[index]> | string | string[] | number | boolean | Date | null;
    };
};
/** Un argument propre à la requête (`estateId`, `includeDismissed`…) : son type GraphQL et sa valeur. */
export interface GraphQueryArgument {
    type: string;
    value: unknown;
}
/**
 * La pagination d'une liste :
 * - `offset` : `skip`/`take`, la réponse porte `totalCount` et `items` ;
 * - `cursor` : `first`/`after` au format Relay, la réponse porte `pageInfo` et `nodes` (voir `toPage`).
 */
export type GraphQueryPaging = {
    mode: 'offset';
    skip?: number | null;
} | {
    mode: 'cursor';
    first?: number | null;
    after?: string | null;
};
export interface GraphQueryInput<T = any> {
    props: string;
    where?: WhereType<T> | null;
    order?: OrderType<T> | OrderType<T>[] | null;
    take?: number;
    prefixType?: string;
    args?: {
        [name: string]: GraphQueryArgument;
    };
    paging?: GraphQueryPaging;
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
/**
 * Construit une requête de lecture : filtres, tri, arguments propres et pagination déclarés en
 * variables. Sans `paging`, la réponse est la liste elle-même ; avec, elle suit le mode choisi.
 *
 * ```ts
 * createQuery('mySuggestedEstates', {
 *   props: suggestionComposition,
 *   args: { includeDismissed: { type: 'Boolean!', value: true } },
 *   paging: { mode: 'cursor', first: 20, after: null },
 * });
 * ```
 */
export declare function createQuery<T>(name: string, input?: GraphQueryInput<T>): GraphPayload;
