import { Apollo_gql, GraphQueryPayload, KeyValue, graphQlTake } from '@ta/server';

import { Tones } from './dto/tones';

export function GET_CONVERSATION(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query Conversation {
          conversations(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_COMMUNICATION_ERRORS(where: string, props: string) {
  return {
    query: Apollo_gql`
        query CommunicationErrors {
          communicationErrors(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_TEMPLATES(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query Templates {
          templates(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_availableTemplateKeys(): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query AvailableTemplateKeys {
          availableTemplateKeys
        }
      `,
    variables: {},
  };
}

export function GET_previewTemplate(template: string, contextIds: KeyValue[]) {
  return {
    query: Apollo_gql`
        query PreviewTemplate($template: String, $contextIds: [KeyValuePairOfStringAndStringInput!]) {
            previewTemplate(template: $template, contextIds: $contextIds)
        }
      `,
    variables: {
      template,
      contextIds,
    },
  };
}

export function aiConversationSummary(conversationId: string, language: string) {
  return {
    query: Apollo_gql`
      query AiConversationSummary ($conversationId: UUID!, $language: String) {
          aiConversationSummary(conversationId: $conversationId, language: $language)
      }
    `,
    variables: {
      conversationId,
      language,
    },
  };
}

export function aiMessageInConversationResponse(conversationId: string, communicationId: string, language: string) {
  return {
    query: Apollo_gql`
      query AiMessageInConversationResponse ($conversationId: UUID!, $communicationId: UUID!, $language: String) {
          aiMessageInConversationResponse(conversationId: $conversationId, communicationId: $communicationId, language: $language)
      }
    `,
    variables: {
      conversationId,
      communicationId,
      language,
    },
  };
}

export function aiMessageReformulation(originalMessage: string, tone: Tones, language: string) {
  return {
    query: Apollo_gql`
      query AiMessageReformulation ($originalMessage: String!, $tone: Int!, $language: String) {
          aiMessageReformulation(originalMessage: $originalMessage, tone: $tone, language: $language)
      }
    `,
    variables: {
      originalMessage,
      tone,
      language,
    },
  };
}

export function GET_MY_SIGNATURE(props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query MySignature {
          mySignature {
            ${props}
          }
        }
      `,
    variables: {},
  };
}
