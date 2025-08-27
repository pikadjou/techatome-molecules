import { GraphMutationPayload, GraphQueryPayload } from '@ta/server';
export type NotificationFilter = {
    projectId?: string;
    isNew?: boolean | null;
    take?: number | null;
} | null;
export declare function GET_NOTIFICATIONS(filters: NotificationFilter): GraphQueryPayload;
export declare function GET_NOTIFICATIONS_COUNT(filters: NotificationFilter): GraphQueryPayload;
export declare function READ_NOTIFICATION(id: string): GraphMutationPayload;
