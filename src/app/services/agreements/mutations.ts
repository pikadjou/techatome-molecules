import { gql } from 'apollo-angular';
import { GraphMutationPayload } from '@ta/server';
import { Agreement, agreementProps } from './dto/agreement';

export function ADD_AGREEMENT(arg: Agreement): GraphMutationPayload {
  return {
    mutation: gql`
      mutation CreateAgreement($data: AgreementInput!, $status: PublicationStatus) {
        createAgreement(data: $data, status: $status) {
          ${agreementProps.get('documentId')}
        }
      }
    `,
    variables: {
      data: arg,
      status: 'PUBLISHED',
    },
  };
}

export function UPDATE_AGREEMENT(id: string, arg: Agreement): GraphMutationPayload {
  return {
    mutation: gql`
      mutation UpdateAgreement($documentId: ID!, $data: AgreementInput!) {
        updateAgreement(documentId: $documentId, data: $data) {
          ${agreementProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
      data: arg,
    },
  };

}

export function DELETE_AGREEMENT(id: string): GraphMutationPayload {
  return {
    mutation: gql`
      mutation DeleteAgreement($documentId: ID!) {
        deleteAgreement(documentId: $documentId) {
          ${agreementProps.get('documentId')}
        }
      }
    `,
    variables: {
      documentId: id,
    },
  };
}
