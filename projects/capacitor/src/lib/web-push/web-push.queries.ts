import { GraphMutationBuilderPayload, GraphPayload, createMutation, createQuery } from '@ta/server';

import { PushSubscriptionInput } from './web-push-api';

export function webPushPublicKey(): GraphPayload {
  return createQuery('webPushPublicKey');
}

export function registerPushSubscription(input: PushSubscriptionInput): GraphMutationBuilderPayload {
  return createMutation('registerPushSubscription', {
    argument: 'input',
    props: 'id lastSeenAt',
    type: 'RegisterPushSubscriptionInput!',
    value: input,
  });
}

export function unregisterPushSubscription(endpoint: string): GraphMutationBuilderPayload {
  return createMutation('unregisterPushSubscription', {
    argument: 'endpoint',
    props: '',
    type: 'String!',
    value: endpoint,
  });
}
