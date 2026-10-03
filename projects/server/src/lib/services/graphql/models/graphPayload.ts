import { gql } from "@apollo/client/core";
import { TypedDocumentNode } from "apollo-angular";

import { capitalizeFirstLetter } from "@ta/utils";

import { graphQlTake } from "../helpers/queries";
import { connectionFields } from "./connection";

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
  [index in keyof Partial<T>]: "ASC" | "DESC";
};

export type WhereType<T> = {
  [index in keyof Partial<T>]:
    | WhereType<T[index]>
    | WhereType<T>[]
    | {
        [op: string]:
          | WhereType<T[index]>
          | string
          | string[]
          | number
          | boolean
          | Date
          | null;
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
export type GraphQueryPaging =
  | { mode: "offset"; skip?: number | null }
  | { mode: "cursor"; first?: number | null; after?: string | null };

export interface GraphQueryInput<T = any> {
  props: string;
  where?: WhereType<T> | null;
  order?: OrderType<T> | OrderType<T>[] | null;
  take?: number;
  prefixType?: string;
  args?: { [name: string]: GraphQueryArgument };
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
export function createQuery<T>(
  name: string,
  input?: GraphQueryInput<T>
): GraphPayload {
  const capPrefixType = input?.prefixType
    ? capitalizeFirstLetter(input.prefixType)
    : "";
  const paging = input?.paging;

  const queryParams: string[] = [];
  const queryArgs: string[] = [];
  const variables: any = {};

  const declare = (key: string, type: string, value: unknown) => {
    queryParams.push(`$${key}: ${type}`);
    queryArgs.push(`${key}: $${key}`);
    variables[key] = value;
  };

  Object.entries(input?.args ?? {}).forEach(([key, arg]) =>
    declare(key, arg.type, arg.value)
  );

  if (input?.where) {
    declare("where", `${capPrefixType}FilterInput`, input.where);
  }
  if (input?.order) {
    declare("order", `[${capPrefixType}SortInput!]`, input.order);
  }

  if (paging?.mode === "cursor") {
    declare("first", "Int", paging.first ?? null);
    declare("after", "String", paging.after ?? null);
  } else {
    if (input?.take) {
      queryArgs.push(graphQlTake(input.take));
    }
    if (paging?.mode === "offset" && paging.skip != null) {
      queryArgs.push(`skip: ${paging.skip}`);
    }
  }

  const props = input?.props ?? "";
  let body = props ? `{ ${props} }` : "";
  if (paging?.mode === "cursor") {
    body = `{ ${connectionFields(props)} }`;
  } else if (paging?.mode === "offset") {
    body = `{ totalCount items { ${props} } }`;
  }

  const queryParamsStr =
    queryParams.length > 0 ? `(${queryParams.join(", ")})` : "";
  const queryArgsStr = queryArgs.length > 0 ? `(${queryArgs.join(", ")})` : "";

  return {
    name,
    query: gql`
      query ${capitalizeFirstLetter(name)}${queryParamsStr} {
        ${name}${queryArgsStr} ${body}
      }
    `,
    variables,
  };
}
