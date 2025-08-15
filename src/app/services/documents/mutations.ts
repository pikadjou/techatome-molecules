import { gql } from 'apollo-angular';
import { GraphMutationPayload } from '@ta/server';
import { Document, documentProps, PostDocument } from './dto/document';
import { categoryProps } from '../categories/dto/category';

export function ADD_DOCUMENT(doc: PostDocument): GraphMutationPayload {
  return {
    mutation: gql`
      mutation CreateDoc($data: DocInput!, $status: PublicationStatus) {
        createDoc(data: $data, , status: $status) {
          ${documentProps.get('documentId')}
          ${documentProps.get('category')} {
            ${categoryProps.get('documentId')}
          }
        }
      }
    `,
    variables: {
      data: doc,
      status: 'PUBLISHED',
    },
  };
}

export function UPDATE_DOCUMENT(id: string, doc: PostDocument): GraphMutationPayload {
  return {
    mutation: gql`
      mutation UpdateDocument($documentId: ID!, $data: DocInput!, $status: PublicationStatus) {
        updateDoc(documentId: $documentId, data: $data, status: $status) {
          ${documentProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
      data: doc,
      status: 'PUBLISHED',
    },
  };
}

export function DELETE_DOCUMENT(id: string): GraphMutationPayload {
  return {
    mutation: gql`
      mutation DeleteDocument($documentId: ID!) {
        deleteDoc(documentId: $documentId) {
          ${documentProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
    },
  };
}
