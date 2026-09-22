import { GraphPayload } from './graphPayload';
/**
 * Une connexion au format Relay, telle que l'API la renvoie : le curseur de fin, la présence d'une
 * page suivante, et les nœuds. Les deux champs sont optionnels parce qu'une réponse partielle ou
 * vide reste une réponse.
 */
export interface TaConnection<T> {
    pageInfo?: {
        hasNextPage: boolean;
        endCursor: string | null;
    } | null;
    nodes?: T[] | null;
}
/** La même page, à plat : ce qu'un écran ou un état de service consomme. */
export interface TaPage<T> {
    nodes: T[];
    hasNextPage: boolean;
    endCursor: string | null;
}
/** Le corps d'une connexion, écrit une seule fois pour toutes les requêtes paginées. */
export declare function connectionFields(props: string): string;
/** Avant toute lecture, et à chaque relecture depuis le début. */
export declare function emptyPage<T>(): TaPage<T>;
/** Aplatit la réponse de l'API ; une connexion absente vaut une page vide. */
export declare function toPage<T>(connection: TaConnection<T> | null | undefined): TaPage<T>;
/** La page suivante s'ajoute à ce qui est déjà lu ; le curseur et la suite sont ceux de la dernière. */
export declare function appendPage<T>(current: TaPage<T>, next: TaPage<T>): TaPage<T>;
/** Un argument de requête : son type GraphQL, et sa valeur. */
export interface TaConnectionArgument {
    type: string;
    value: unknown;
}
export interface TaConnectionQueryInput {
    /** Les arguments propres à la requête, en plus de `first` et `after`. */
    args?: {
        [name: string]: TaConnectionArgument;
    };
    /** La composition des nœuds. */
    props: string;
    first?: number | null;
    after?: string | null;
}
/**
 * Construit une requête paginée au format Relay : `first`/`after` en variables, `pageInfo` et
 * `nodes` déjà écrits. Les arguments propres à la requête sont déclarés avec leur type GraphQL.
 *
 * ```ts
 * createConnectionQuery('mySuggestedEstates', {
 *   args: { includeDismissed: { type: 'Boolean!', value: true } },
 *   props: suggestionComposition,
 *   first: 20,
 *   after: null,
 * });
 * ```
 */
export declare function createConnectionQuery(name: string, input: TaConnectionQueryInput): GraphPayload;
