import { User } from '@ta/services';

export interface VisitEvent {
  id: number;
  startDate: string;
  endDate: string;
  // status: Status;
  // type: Type;
  advisor: User;
}
