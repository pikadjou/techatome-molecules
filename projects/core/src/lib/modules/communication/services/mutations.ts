import { Apollo_gql, GraphMutationPayload } from '@camelot/server';

import { conversationProps } from './dto/communication';
import { CommunicationPayloadInput } from './dto/post/communication';
import { CreateTemplatePayloadInput, UpdateTemplatePayloadInput } from './dto/post/template';
import { CreateTemplateVariantPayloadInput, UpdateTemplateVariantPayloadInput } from './dto/post/template-variation';
import { CreateUserSignaturePayloadInput, UpdateUserSignaturePayloadInput, signatureProps } from './dto/signature';
import { templateProps } from './dto/template';

export function CREATE_CONVERSATION(com: CommunicationPayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation CreateNewCommunication($com: CommunicationPayloadInput) {
        createNewCommunication(communicationPayload: $com) {
            ${conversationProps.get('id')}
        }
      }
    `,
    variables: {
      com,
    },
  };
}

export function CREATE_TEMPLATE(template: CreateTemplatePayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation CreateTemplate($template: CreateTemplatePayloadInput!) {
        createTemplate(createTemplatePayload: $template) {
          ${templateProps.get('id')}
        }
      }
    `,
    variables: {
      template,
    },
  };
}

export function UPDATE_TEMPLATE(template: UpdateTemplatePayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation UpdateTemplate($template: UpdateTemplatePayloadInput!) {
        updateTemplate(updateTemplatePayload: $template) {
          ${templateProps.get('id')}
        }
      }
    `,
    variables: {
      template,
    },
  };
}

export function CREATE_VARIANT(variant: CreateTemplateVariantPayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation CreateTemplateVariant($variant: CreateTemplateVariantPayloadInput!) {
        createTemplateVariant(createTemplateVariantPayload: $variant) {
          ${templateProps.get('id')}
        }
      }
    `,
    variables: {
      variant: variant,
    },
  };
}

export function UPDATE_VARIANT(variant: UpdateTemplateVariantPayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation UpdateTemplateVariant($variant: UpdateTemplateVariantPayloadInput!) {
        updateTemplateVariant(updateTemplateVariantPayload: $variant) {
          ${templateProps.get('id')}
        }
      }
    `,
    variables: {
      variant: variant,
    },
  };
}

export function CREATE_MY_SIGNATURE(payload: CreateUserSignaturePayloadInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation CreateUserSignature($payload: CreateUserSignaturePayloadInput!) {
        createUserSignature(payload: $payload) {
            ${signatureProps.get('id')}
        }
      }
    `,
    variables: {
      payload,
    },
  };
}

export function UPDATE_MY_SIGNATURE(payload: Partial<UpdateUserSignaturePayloadInput>): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation UpdateUserSignature($payload: UpdateUserSignaturePayloadInput!) {
        updateUserSignature(payload: $payload) {
            ${signatureProps.get('id')}
        }
      }
    `,
    variables: {
      payload,
    },
  };
}
