import { Injectable, inject } from '@angular/core';

import { Subject, combineLatest, filter, map, mergeMap, of, tap } from 'rxjs';

import { CamBaseService, GraphEndpoint, HandleComplexRequest, HandleSimpleRequest } from '@camelot/server';
import { CamContactService, CamUsersService } from '@camelot/user';
import { getUniqueArray, isNonNullable } from '@camelot/utils';

import {
  CommunicationError,
  CommunicationParticipantExtended,
  Conversation,
  communicationErrorProps,
  communicationParticipantProps,
  communicationProps,
  conversationProps,
} from './dto/communication';
import { CommunicationPayloadInput } from './dto/post/communication';
import {
  CreateUserSignaturePayloadInput,
  SignatureExtended,
  UpdateUserSignaturePayloadInput,
  signatureProps,
} from './dto/signature';
import { CREATE_CONVERSATION, CREATE_MY_SIGNATURE, UPDATE_MY_SIGNATURE } from './mutations';
import { GET_COMMUNICATION_ERRORS, GET_CONVERSATION, GET_MY_SIGNATURE } from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'taskService',
  endpoint: 'task',
};

@Injectable({
  providedIn: 'root',
})
export class CamCommunicationsService extends CamBaseService {
  public communicationByTaskId = new HandleComplexRequest<Conversation<CommunicationParticipantExtended>>();
  public communicationDocumentsByTaskId = new HandleComplexRequest<string[]>();
  public mySignature = new HandleSimpleRequest<SignatureExtended>();
  public communicationErrorsByCommunicationId = new HandleComplexRequest<CommunicationError>();

  public lastMessageSended$ = new Subject<CommunicationPayloadInput>();

  private readonly _contactsService = inject(CamContactService);
  private readonly _usersService = inject(CamUsersService);

  constructor() {
    super();

    super.registerRoutes({ graphEndpoint });
  }

  public fetchConversationDocumentsByTaskId$(taskId: string) {
    return this.communicationDocumentsByTaskId.fetch(
      taskId,
      this._graphService
        .fetchPagedQueryList<Conversation>(
          GET_CONVERSATION(
            `where: { taskId: { eq: "${taskId}" } }`,
            `
              ${conversationProps.get('id')}
              ${conversationProps.get('communications')} {
                ${communicationProps.get('id')}
                ${communicationProps.get('documentsIds')}
              }
            `
          ),
          'conversations',
          graphEndpoint.clientName
        )
        .pipe(
          map(data =>
            getUniqueArray(
              data.items?.reduce<string[]>(
                (acc, item) => [
                  ...acc,
                  ...item.communications?.reduce<string[]>((acc, item) => [...acc, ...item.documentsIds], []),
                ],
                []
              ) ?? []
            )
          )
        )
    );
  }

  public fetchConversationByTaskId$(taskId: string) {
    return this.communicationByTaskId.fetch(
      taskId,
      this._graphService
        .fetchPagedQueryList<Conversation>(
          GET_CONVERSATION(
            `where: { taskId: { eq: "${taskId}" } }`,
            `
              ${conversationProps.get('id')}
              ${conversationProps.get('participants')} {
                ${communicationParticipantProps.get('id')}
                ${communicationParticipantProps.get('userId')}
                ${communicationParticipantProps.get('contactId')}
                ${communicationParticipantProps.get('email')}
              }
              ${conversationProps.get('communications')} {
                ${communicationProps.get('id')}
                ${communicationProps.get('from')} {
                  ${communicationParticipantProps.get('id')}
                  ${communicationParticipantProps.get('email')}
                  ${communicationParticipantProps.get('userId')}
                  ${communicationParticipantProps.get('contactId')}
                }
                ${communicationProps.get('to')} {
                  ${communicationParticipantProps.get('id')}
                  ${communicationParticipantProps.get('email')}
                  ${communicationParticipantProps.get('userId')}
                  ${communicationParticipantProps.get('contactId')}
                }
                ${communicationProps.get('cc')} {
                  ${communicationParticipantProps.get('id')}
                  ${communicationParticipantProps.get('email')}
                  ${communicationParticipantProps.get('userId')}
                  ${communicationParticipantProps.get('contactId')}
                }
                ${communicationProps.get('title')}
                ${communicationProps.get('body')}
                ${communicationProps.get('bodyPreview')}
                ${communicationProps.get('replyHistoryPreview')}
                ${communicationProps.get('type')}
                ${communicationProps.get('status')}
                ${communicationProps.get('createdTime')}
                ${communicationProps.get('createdByFullName')}
                ${communicationProps.get('isMine')}
                ${communicationProps.get('documentsIds')}
                ${communicationProps.get('responseToCommunicationId')}
              }
            `
          ),
          'conversations',
          graphEndpoint.clientName
        )
        .pipe(
          mergeMap(entities => {
            if (entities.items?.length === 0) {
              return of(entities);
            }

            // userIds
            const userIds = getUniqueArray(
              (entities.items ?? [])
                .reduce<string[]>((acc, e) => {
                  return acc.concat(e.participants.map(p => p.userId ?? ''));
                }, [])
                .filter(id => !!id)
            );

            // contactIds
            const contactIds = getUniqueArray(
              (entities.items ?? [])
                .reduce<string[]>((acc, e) => {
                  return acc.concat(e.participants.map(p => p.contactId ?? ''));
                }, [])
                .filter(id => !!id)
            );

            return combineLatest([
              userIds && userIds.length ? this._usersService.fetchUsersByIds$(userIds) : of([]),
              contactIds && contactIds.length ? this._contactsService.fetchContactsByIds$(contactIds) : of([]),
            ]).pipe(
              map(data => ({ users: data[0], contacts: data[1] })),
              map(({ users, contacts }) => ({
                ...entities,
                items: (entities.items ?? []).map(e => ({
                  ...e,
                  ...{
                    participants: e.participants.map<CommunicationParticipantExtended>(p => ({
                      ...p,
                      ...{
                        contact: contacts.find(c => c.id === p.contactId),
                      },
                      ...{ user: users.find(u => u.id === p.userId) },
                    })),
                  },
                })),
              }))
            );
          }),
          map(data => (data.items ?? [])[0])
        )
    );
  }

  public createConversation$(com: CommunicationPayloadInput) {
    return this._graphService
      .mutate<any>(CREATE_CONVERSATION(com), 'createNewCommunication', graphEndpoint.clientName, ['conversations'])
      .pipe(tap(() => this.lastMessageSended$.next(com)));
  }

  public fetchMySignature$() {
    return this.mySignature.fetch(
      this._graphService
        .fetchQuery<SignatureExtended>(
          GET_MY_SIGNATURE(
            `
            ${signatureProps.get('id')}
            ${signatureProps.get('mailSignature')}
            ${signatureProps.get('userId')}
          `
          ),
          'mySignature',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(signature => {
            try {
              const blocks = JSON.parse(signature.mailSignature) ?? null;

              return {
                ...signature,
                ...{ blocks },
              };
            } catch (error) {
              return signature;
            }
          })
        )
    );
  }

  public createMySignature$(payload: CreateUserSignaturePayloadInput) {
    return this._graphService
      .mutate<any>(CREATE_MY_SIGNATURE(payload), 'createUserSignature', graphEndpoint.clientName, ['mySignature'])
      .pipe(mergeMap(() => this.fetchMySignature$()));
  }

  public updateMySignature$(payload: Partial<UpdateUserSignaturePayloadInput>) {
    return this._graphService
      .mutate<any>(UPDATE_MY_SIGNATURE(payload), 'updateUserSignature', graphEndpoint.clientName, ['mySignature'])
      .pipe(mergeMap(() => this.fetchMySignature$()));
  }

  public fetchConversationError$(communicationId: string) {
    return this.communicationErrorsByCommunicationId.fetch(
      communicationId,
      this._graphService
        .fetchPagedQueryList<CommunicationError>(
          GET_COMMUNICATION_ERRORS(
            `where: { communicationId: { eq: "${communicationId}" } }`,
            `
              ${communicationErrorProps.get('id')}
              ${communicationErrorProps.get('error')}
              ${communicationErrorProps.get('conversationId')}
              ${communicationErrorProps.get('communicationId')}
              ${communicationErrorProps.get('communicationSubject')}
            `
          ),
          'communicationErrors',
          graphEndpoint.clientName
        )
        .pipe(
          map(data => (data.items && data.items.length === 1 ? data.items[0] : null)),
          filter(isNonNullable)
        )
    );
  }
}
