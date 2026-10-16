import { Apollo_gql, GraphMutationPayload, GraphPayload, createQuery } from '@ta/server';

import { PushSubscriptionInput } from './web-push-api';

export function webPushPublicKey(): GraphPayload {
  return createQuery('webPushPublicKey');
}

export function registerPushSubscription(input: PushSubscriptionInput): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation RegisterPushSubscription($input: RegisterPushSubscriptionInput!) {
        registerPushSubscription(input: $input) {
          id
          lastSeenAt
        }
      }
    `,
    variables: { input },
  };
}

export function unregisterPushSubscription(endpoint: string): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation UnregisterPushSubscription($endpoint: String!) {
        unregisterPushSubscription(endpoint: $endpoint)
      }
    `,
    variables: { endpoint },
  };
}
