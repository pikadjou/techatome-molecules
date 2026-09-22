import { gql } from '@apollo/client/core';

import { capitalizeFirstLetter } from '@ta/utils';

import { GraphPayload } from './graphPayload';

/**
 * Une connexion au format Relay, telle que l'API la renvoie : le curseur de fin, la présence d'une
 * page suivante, et les nœuds. Les deux champs sont optionnels parce qu'une réponse partielle ou
 * vide reste une réponse.
 */
export interface TaConnection<T> {
  pageInfo?: { hasNextPage: boolean; endCursor: string | null } | null;
  nodes?: T[] | null;
}

/** La même page, à plat : ce qu'un écran ou un état de service consomme. */
export interface TaPage<T> {
  nodes: T[];
  hasNextPage: boolean;
  endCursor: string | null;
}

/** Le corps d'une connexion, écrit une seule fois pour toutes les requêtes paginées. */
export function connectionFields(props: string): string {
  return `
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ${props}
    }
  `;
}

/** Avant toute lecture, et à chaque relecture depuis le début. */
export function emptyPage<T>(): TaPage<T> {
  return { endCursor: null, hasNextPage: false, nodes: [] };
}

/** Aplatit la réponse de l'API ; une connexion absente vaut une page vide. */
export function toPage<T>(connection: TaConnection<T> | null | undefined): TaPage<T> {
  return {
    endCursor: connection?.pageInfo?.endCursor ?? null,
    hasNextPage: connection?.pageInfo?.hasNextPage ?? false,
    nodes: connection?.nodes ?? [],
  };
}

/** La page suivante s'ajoute à ce qui est déjà lu ; le curseur et la suite sont ceux de la dernière. */
export function appendPage<T>(current: TaPage<T>, next: TaPage<T>): TaPage<T> {
  return { ...next, nodes: [...current.nodes, ...next.nodes] };
}

/** Un argument de requête : son type GraphQL, et sa valeur. */
export interface TaConnectionArgument {
  type: string;
  value: unknown;
}

export interface TaConnectionQueryInput {
  /** Les arguments propres à la requête, en plus de `first` et `after`. */
  args?: { [name: string]: TaConnectionArgument };
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
export function createConnectionQuery(name: string, input: TaConnectionQueryInput): GraphPayload {
  const entries = Object.entries(input.args ?? {});

  const params = [...entries.map(([key, arg]) => `$${key}: ${arg.type}`), '$first: Int', '$after: String'];
  const args = [...entries.map(([key]) => `${key}: $${key}`), 'first: $first', 'after: $after'];

  const variables: { [index: string]: unknown } = {
    after: input.after ?? null,
    first: input.first ?? null,
  };
  entries.forEach(([key, arg]) => (variables[key] = arg.value));

  return {
    name,
    query: gql`
      query ${capitalizeFirstLetter(name)}(${params.join(', ')}) {
        ${name}(${args.join(', ')}) {
          ${connectionFields(input.props)}
        }
      }
    `,
    variables,
  };
}
