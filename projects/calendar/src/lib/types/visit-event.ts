import { User } from '@camelot/services';

export interface VisitEvent {
  id: number;
  startDate: string;
  endDate: string;
  // status: Status;
  // type: Type;
  advisor: User;
}
