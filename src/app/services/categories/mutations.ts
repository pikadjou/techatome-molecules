import { gql } from 'apollo-angular';
import { Category, categoryProps } from './dto/category';
import { GraphMutationPayload } from '@ta/server';

export function ADD_CATEGORY(cat: Partial<Category>): GraphMutationPayload {
  return {
    mutation: gql`
      mutation CreateCategory($data: CategoryInput!, $status: PublicationStatus) {
        createCategory(data: $data, status: $status) {
          ${categoryProps.get('documentId')}
        }
      }
    `,
    variables: {
      data: cat,
      status: 'PUBLISHED',
    },
  };
}

export function UPDATE_CATEGORY(id: string, cat: Partial<Category>): GraphMutationPayload {
  return {
    mutation: gql`
      mutation UpdateCategory($documentId: ID!, $data: CategoryInput!, $status: PublicationStatus) {
        updateCategory(documentId: $documentId, data: $data, status: $status) {
          ${categoryProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
      data: cat,
      status: 'PUBLISHED',
    },
  };
}

export function DELETE_CATEGORY(id: string): GraphMutationPayload {
  return {
    mutation: gql`
      mutation DeleteCategory($documentId: ID!) {
        deleteCategory(documentId: $documentId) {
          ${categoryProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
    },
  };
}
