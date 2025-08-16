import { CommunicationType } from '../communication';

export interface CommunicationPayloadInput {
  toCorrespondents: CorrespondentInputDto[];
  ccCorrespondents: CorrespondentInputDto[];
  taggedCorrespondents: CorrespondentInputDto[];
  body: string;
  type: CommunicationType;
  documentIds: string[];
  attachmentUrls: string[];
  conversationId: string;
  responseToCommunicationId?: string;
}

export interface CorrespondentInputDto {
  userId?: string;
  contactId?: string;
  mail?: string;
}
