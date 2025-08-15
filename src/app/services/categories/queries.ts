import { gql } from 'apollo-angular';

import { GraphQueryPayload } from '@ta/server';
import { categoryProps } from './dto/category';

export function GET_ALL_CATEGORIES(): GraphQueryPayload {
  return {
    query: gql`
      query Categories {
        categories {
          ${categoryProps.get('documentId')}
          ${categoryProps.get('name')}
          ${categoryProps.get('parent')} {
            ${categoryProps.get('documentId')}
          }
        }
      }
    `,
    variables: {},
  };
}
export function GET_CATEGORIES(parent_id: string | null): GraphQueryPayload {
  return {
    query: gql`
      query Categories ($filters: CategoryFiltersInput) {
        categories (filters: $filters) {
          ${categoryProps.get('documentId')}
          ${categoryProps.get('name')}
          ${categoryProps.get('description')}
          ${categoryProps.get('updatedAt')}
          ${categoryProps.get('publishedAt')}
        }
      }
    `,
    variables: {
      filters: {
        parent: {
          documentId: {
            eq: parent_id,
          },
        },
      },
    },
  };
}

export function GET_CATEGORY(id: string | null): GraphQueryPayload {
  return {
    query: gql`
      query Category ($documentId: ID!) {
        category (documentId: $documentId) {
          ${categoryProps.get('documentId')}
          ${categoryProps.get('name')}
          ${categoryProps.get('description')}
          ${categoryProps.get('parent')} {
            ${categoryProps.get('documentId')}
          }
        }
      }
    `,
    variables: {
      documentId: id,
    },
  };
}
