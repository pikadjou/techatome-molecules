import {
  Apollo_gql,
  GraphMutationPayload,
  GraphQueryPayload,
  graphQlPaginationFields,
  graphQlTake,
  keyValueProps,
} from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { notificationProps } from './dto/notification';

export type NotificationFilter = {
  projectId?: string;
  isNew?: boolean | null;
  take?: number | null;
} | null;

export function GET_NOTIFICATIONS(filters: NotificationFilter): GraphQueryPayload {
  const where = computeFilters(filters);
  return {
    query: Apollo_gql`
    query Notifications {
        notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
            items {
              ${notificationProps.get('id')}
              ${notificationProps.get('date')}
              ${notificationProps.get('level')}
              ${notificationProps.get('isNew')}
              ${notificationProps.get('userId')}
              ${notificationProps.get('tenantId')}
              ${notificationProps.get('tenantName')}
              ${notificationProps.get('type')}
              ${notificationProps.get('context')} {
                ${keyValueProps.get('key')}
                ${keyValueProps.get('value')}
              }
              ${notificationProps.get('redirectContext')} {
                ${keyValueProps.get('key')}
                ${keyValueProps.get('value')}
              }
            }
        }
    }
      `,
    variables: {},
  };
}

export function GET_NOTIFICATIONS_COUNT(filters: NotificationFilter): GraphQueryPayload {
  const where = computeFilters(filters);
  return {
    query: Apollo_gql`
      query Notifications {
          notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
              ${graphQlPaginationFields()}
          }
      }
    `,
    variables: {},
  };
}

export function READ_NOTIFICATION(id: string): GraphMutationPayload {
  return {
    mutation: Apollo_gql`
      mutation NotificationRead($id: UUID!) {
        notificationRead(notificationId: $id) {
            ${notificationProps.get('id')}
            ${notificationProps.get('isNew')}
        }
      }
    `,
    variables: {
      id,
    },
  };
}

function computeFilters(filters: NotificationFilter): string {
  const clause: string[] = [];
  if (filters) {
    if (filters.projectId) {
      clause.push(`projectId: { eq: ${filters.projectId} }`);
    }
    if (isNonNullable(filters.isNew)) {
      clause.push(`isNew: { eq: ${filters.isNew} }`);
    }
  }

  return `where: { ${clause.join(',')} }`;
}
