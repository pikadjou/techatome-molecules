import { gql } from '@apollo/client/core';
import { TypedDocumentNode } from 'apollo-angular';

import { capitalizeFirstLetter } from '@ta/utils';

import { graphQlTake } from '../helpers/queries';

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
  [index in keyof Partial<T>]:
    | WhereType<T[index]>
    | WhereType<T>[]
    | {
        [op: string]: WhereType<T[index]> | string | string[] | number | boolean | Date | null;
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

export function createQuery<T>(name: string, input?: GraphQueryInput<T>): GraphPayload {
  const capName = capitalizeFirstLetter(name);
  const capPrefixType = input?.prefixType ? capitalizeFirstLetter(input.prefixType) : '';

  // Construire dynamiquement les paramètres de la query
  const queryParams: string[] = [];
  const queryArgs: string[] = [];
  const variables: any = {};

  if (input?.where) {
    queryParams.push(`$where: ${capPrefixType}FilterInput`);
    queryArgs.push('where: $where');
    variables.where = input.where;
  }

  if (input?.order) {
    queryParams.push(`$order: [${capPrefixType}SortInput!]`);
    queryArgs.push('order: $order');
    variables.order = input.order;
  }

  if (input?.take) {
    const takeClause = graphQlTake(input.take);
    if (takeClause) {
      queryArgs.push(takeClause);
    }
  }

  const queryParamsStr = queryParams.length > 0 ? `(${queryParams.join(', ')})` : '';
  const queryArgsStr = queryArgs.length > 0 ? `(${queryArgs.join(', ')})` : '';
  const propsStr = input?.props ? ` { ${input?.props} }` : '';

  return {
    name: name,
    query: gql`
          query ${capName}${queryParamsStr} {
            ${name}${queryArgsStr}  ${propsStr}
          }
        `,
    variables,
  };
}
