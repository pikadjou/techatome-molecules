import { gql } from 'apollo-angular';

import { GraphQueryPayload } from '@ta/server';
import { documentProps } from './dto/document';
import { categoryProps } from '../categories/dto/category';
import { agreementProps } from '../agreements/dto/agreement';

export function GET_DOCUMENT(uid: string): GraphQueryPayload {
  return {
    query: gql`
      query Doc($uid: ID!) {
        doc(documentId: $uid) {
          ${documentProps.get('documentId')}
          ${documentProps.get('title')}
          ${documentProps.get('content')}
          ${documentProps.get('blockContent')}
          ${documentProps.get('updatedAt')}
          ${documentProps.get('publishedAt')}
          ${documentProps.get('category')} {
            ${categoryProps.get('documentId')}
          }
          ${documentProps.get('agreements')} {
            ${agreementProps.get('documentId')}
            ${agreementProps.get('key')}
            ${agreementProps.get('ms')}
            ${agreementProps.get('fs')}
            ${agreementProps.get('mp')}
            ${agreementProps.get('fp')}
          }
        }
      }
    `,
    variables: {
      uid,
    },
  };
}

export function GET_DOCUMENTS(catid: string): GraphQueryPayload {
  return {
    query: gql`
      query Docs($filters: DocFiltersInput) {
        docs(filters: $filters) {
          ${documentProps.get('documentId')}
          ${documentProps.get('title')}
          ${documentProps.get('content')}
          ${documentProps.get('category')} {
            ${categoryProps.get('documentId')}
          }
          ${documentProps.get('updatedAt')}
          ${documentProps.get('publishedAt')}
        }
      }
    `,
    variables: {
      filters: {
        category: {
          documentId: {
            eq: catid,
          },
        },
      },
    },
  };
}
