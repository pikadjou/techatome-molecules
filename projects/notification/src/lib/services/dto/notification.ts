import { GraphSchema } from '@ta/server';

import { ENotificationLevel } from './level';
import { SwitchCases } from './switch-cases';

export type NotificationDto = {
  id: string;
  date: string;
  level: ENotificationLevel;
  isNew: boolean;
  userId: string;
  /**
   * @deprecated
   */
  projectId: string;
  tenantId: string;
  tenantName: string;

  project?: { id: string; name: string };
} & SwitchCases;

export const notificationProps = new GraphSchema<NotificationDto>([
  'id',
  'date',
  'level',
  'isNew',
  'userId',
  'tenantId',
  'tenantName',
  'type',
  'context',
  'redirectContext',
]);
