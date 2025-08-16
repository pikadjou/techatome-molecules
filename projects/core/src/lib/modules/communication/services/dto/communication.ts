import { GraphSchema } from '@ta/server';
import { Contact, User } from '@ta/user';

export enum CommunicationStatus {
  Unknown = 0,
  Sent = 1,
  Failed = 2,
  Pending = 3,
}

export enum CommunicationType {
  Unknown = 0,
  Mail = 1,
  Chat = 2,
  Sms = 3,
  Intern = 4,
  System = 5,
}

export enum LinkType {
  Unknown = 0,
  Invoice = 1,
  QuotationVersion = 2,
  Project = 3,
}

export interface Conversation<T = CommunicationParticipant> {
  id: string;
  title: string;
  reference: string;
  communications: Communication[];
  participants: T[];
  projectId: string;
  taskId: string;
  teamId: string;
}
export const conversationProps = new GraphSchema<Conversation>(['id', 'communications', 'participants']);

export interface Communication {
  id: string;
  from: CommunicationParticipant;
  to: CommunicationParticipant[];
  cc: CommunicationParticipant[];
  title: string;
  body: string;
  bodyPreview: string;
  replyHistoryPreview: string;
  status: CommunicationStatus;
  type: CommunicationType;
  numberOfDocuments: number;
  documentsIds: string[];
  documentLoaded: boolean;
  links: Link[];
  createdTime: string;
  createdByFullName: string;
  isMine: boolean;
  responseToCommunicationId?: string;
}
export const communicationProps = new GraphSchema<Communication>([
  'id',
  'from',
  'to',
  'cc',
  'title',
  'body',
  'bodyPreview',
  'replyHistoryPreview',
  'type',
  'createdTime',
  'createdByFullName',
  'isMine',
  'documentsIds',
  'status',
  'responseToCommunicationId',
]);

export interface CommunicationParticipant {
  id: string;
  email: string;
  userId?: string;
  contactId?: string;
  info: string;
}
export const communicationParticipantProps = new GraphSchema<CommunicationParticipant>([
  'id',
  'email',
  'userId',
  'contactId',
]);

export interface CommunicationParticipantExtended extends CommunicationParticipant {
  user?: User;
  contact?: Contact;
  isClient?: boolean;
}

export interface Link {
  id: string;
  type: LinkType;
}

export interface CommunicationError {
  id: string;
  error: string;
  conversationId: string;
  communicationId: string;
  communicationSubject: string;
}

export const communicationErrorProps = new GraphSchema<CommunicationError>([
  'id',
  'error',
  'conversationId',
  'communicationSubject',
  'communicationId',
  'communicationSubject',
]);
