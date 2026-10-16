import { GraphMutationBuilderPayload, GraphPayload } from '@ta/server';
import { PushSubscriptionInput } from './web-push-api';
export declare function webPushPublicKey(): GraphPayload;
export declare function registerPushSubscription(input: PushSubscriptionInput): GraphMutationBuilderPayload;
export declare function unregisterPushSubscription(endpoint: string): GraphMutationBuilderPayload;
