import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';

import { ENotificationCode, LAZY_SERVICE_TOKEN } from '@ta/notification';
import { CamBaseComponent, RequestState, isNonNullable } from '@ta/utils';
import { convertBlocksToHtml } from '@ta/wysiswyg';
import { Observable, Subject, combineLatest, map, of, startWith } from 'rxjs';

import { CamCommunicationsService } from '../../services/communications.service';
import { Communication, CommunicationParticipantExtended, CommunicationType } from '../../services/dto/communication';
import { CommunicationPayloadInput, CorrespondentInputDto } from '../../services/dto/post/communication';
import { Filter } from '../filters/filters.component';
import { ListComponent } from '../list/list.component';
import { CorrespondentInput } from '../message-box-container/input/input.component';
import { MessageBoxOutputMessage } from '../message-box-container/message-box-container.component';

@Component({
  selector: 'ta-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent extends CamBaseComponent implements OnChanges, AfterViewInit {
  @Input()
  taskId!: string;

  @Input()
  contactId$!: Observable<string | null>;

  @Input()
  statusTemplate!: TemplateRef<any>;

  @Input()
  readonly: boolean = false;

  @ViewChildren(ListComponent) listComponents!: QueryList<ListComponent>;
  @ViewChild('scrollMe', { static: false }) scrollMe!: ElementRef<HTMLElement>;

  readonly scrollTop = signal(0);

  public filters$ = new Subject<Filter>();

  public communications$: Observable<Communication[]> = of([]);

  public participants$: Observable<CommunicationParticipantExtended[]> | null = null;

  public outOfBox = signal(false);

  readonly clearBox$ = new Subject<void>();

  private _conversationService = inject(CamCommunicationsService);

  protected _notificationService = inject(LAZY_SERVICE_TOKEN);

  public replyTo: { communication: Communication; isForward: boolean } | null = null;
  public seeAll = true;

  public messageBoxRequestState = new RequestState();
  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskId']?.previousValue !== changes['taskId']?.currentValue) {
      this.communications$ = combineLatest([
        this._conversationService.communicationByTaskId
          .get$(this.taskId)
          .pipe(map(conversation => conversation.communications ?? [])),
        this.filters$.pipe(startWith({})),
      ]).pipe(
        map(data => ({ conversation: data[0], filters: data[1] })),
        map(data => this._communicationFilters(data.conversation, data.filters))
      );
      this.participants$ = combineLatest([
        this._conversationService.communicationByTaskId
          .get$(this.taskId)
          .pipe(map(conversation => conversation.participants ?? [])),
        this.contactId$.pipe(startWith(null)),
      ]).pipe(
        map(data => ({ participants: data[0], contactId: data[1] })),
        map(({ participants, contactId }) =>
          participants.map<CommunicationParticipantExtended>(participant => ({
            ...participant,
            ...{
              isClient: contactId ? participant.contactId === contactId : false,
            },
          }))
        )
      );

      this._fetch();
    }
  }

  ngAfterViewInit() {
    let subscriptionTriggered = false;

    this._registerSubscription(
      this.listComponents.changes.subscribe(() => {
        subscriptionTriggered = true;
        this.scrollTop.set(this.scrollMe.nativeElement.scrollHeight);
      })
    );
    setTimeout(() => {
      if (!subscriptionTriggered) {
        this.scrollTop.set(this.scrollMe.nativeElement.scrollHeight);
      }
    }, 0);
  }

  public showAll() {
    this.seeAll = true;
  }

  public setReplyTo(replyTo: { communication: Communication; isForward: boolean }) {
    this.replyTo = replyTo;
  }
  public sendMessage(data: MessageBoxOutputMessage) {
    const conversationId = this._conversationService.communicationByTaskId.get(this.taskId)?.id;

    if (!conversationId) {
      return;
    }
    this.messageBoxRequestState.asked();
    const com: CommunicationPayloadInput = {
      type: data.type,
      toCorrespondents: this._mapCorrespondentInput(data.tos),
      ccCorrespondents: this._mapCorrespondentInput(data.ccs),
      taggedCorrespondents: this._mapCorrespondentInput(data.tags),
      documentIds: data.attachments.map(att => att.id),
      attachmentUrls: data.attachments.map(att => att.url),
      responseToCommunicationId: this.replyTo?.communication.id,
      body: data.type === CommunicationType.Mail ? convertBlocksToHtml(data.blocks) : JSON.stringify(data.blocks),

      conversationId,
    };
    this._conversationService.createConversation$(com).subscribe({
      complete: () => {
        this.messageBoxRequestState.completed();
        this._notificationService.addNotification('notification.common.success', ENotificationCode.success);
        this.clearBox$.next();
        this.replyTo = null;
        this.outOfBox.set(false);
        this._fetch();
      },
      error: () => {
        this.messageBoxRequestState.completed();
        this._notificationService.addNotification('notification.common.error', ENotificationCode.error);
      },
    });
  }

  private _fetch() {
    this.requestState.asked();
    this._conversationService.fetchConversationByTaskId$(this.taskId).subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }

  private _communicationFilters(communications: Communication[], filter: Filter) {
    return communications.filter(communication => {
      if (filter.messageType && !filter.messageType.includes(communication.type)) {
        return false;
      }

      if (filter.participants && filter.participants.length > 0) {
        const person = [
          ...[communication.from].flatMap(p => [p.email, p.userId, p.contactId]),
          ...communication.to.flatMap(p => [p.email, p.userId, p.contactId]),
          ...communication.cc.flatMap(p => [p.email, p.userId, p.contactId]),
        ]
          .filter(isNonNullable)
          .find(id => filter.participants?.includes(id));

        if (!person) {
          return false;
        }
      }
      return true;
    });
  }

  private _mapCorrespondentInput(Correspondents: CorrespondentInput[]): CorrespondentInputDto[] {
    return Correspondents.map(correspondent => {
      const { data, ...rest } = correspondent;
      return rest;
    });
  }
}
