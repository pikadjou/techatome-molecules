import { NgIf, AsyncPipe } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, SimpleChanges, TemplateRef, inject, signal } from '@angular/core';

import { InputUploadValue } from '@ta/form-model';
import { Menu, MenuIcon } from '@ta/menu';
import { CamUsersService } from '@ta/user';
import { TaBaseComponent, fullName } from '@ta/utils';
import { EditorInputSavedData, WysiswgBlockData } from '@ta/wysiswyg';
import { Observable, Subject } from 'rxjs';

import { CamCommunicationsService } from '../../services/communications.service';
import { Communication, CommunicationParticipantExtended, CommunicationType } from '../../services/dto/communication';
import { SignatureExtended } from '../../services/dto/signature';
import { TemplateVariant } from '../../services/dto/template';
import { CamSharedCommunicationsService } from '../../services/shared.service';
import { CamCommunicationsTemplatesService } from '../../services/templates.service';
import { CorrespondentInput, OutputCorrespondentInput } from './input/input.component';

type extraOpenKey = 'choiceTemplate';

export type MessageBoxOutputMessage = {
  type: CommunicationType;
  blocks: WysiswgBlockData[];
  tos: CorrespondentInput[];
  ccs: CorrespondentInput[];
  tags: CorrespondentInput[];
  attachments: InputUploadValue[];
};

@Component({
selector: 'ta-communication-message-box-container',
  templateUrl: './message-box-container.component.html',
  styleUrls: ['./message-box-container.component.scss'],,
  standalone: true,
  imports: [NgIf, AsyncPipe, FontIconComponent],
})
export class MessageBoxContainerComponent extends TaBaseComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];
  @Input()
  replyTo: { communication: Communication; isForward: boolean } | null = null;
  @Input()
  clear$?: Observable<void>;
  @Input()
  statusTemplate!: TemplateRef<any>;
  @Input()
  taskId!: string;
  @Input()
  openPanel: boolean = false;

  @Output()
  message = new EventEmitter<MessageBoxOutputMessage>();

  readonly usersService = inject(CamUsersService);
  readonly users = signal<{ id: string; name: string }[]>([]);
  readonly communicationsTemplateService = inject(CamCommunicationsTemplatesService);

  readonly CommunicationType = CommunicationType;
  readonly requestMessage$ = new Subject<void>();
  readonly selectedTemplateVariantBodyChanged$ = new Subject<{
    blocks: WysiswgBlockData[] | string;
    saveAfter?: boolean;
  }>();

  readonly messageContent = new Subject<{ blocks: WysiswgBlockData[] }>();
  public extraOpen: { [index: string]: boolean } = {
    choiceTemplate: false,
  };
  public collapsed: boolean = true;
  public withSignature: boolean = false;

  public attachments: InputUploadValue[] = [];
  public correspondents: OutputCorrespondentInput | null = null;
  public activeTab: CommunicationType = CommunicationType.Mail;
  public selectedTemplateVariant: TemplateVariant | null = null;

  public menu = new Menu({
    elements: [
      new MenuIcon({
        key: CommunicationType.Mail.toString(),
        icon: 'mail',
        order: 1,
        defaultOpen: true,
        callback: () => this.changeTab(CommunicationType.Mail),
      }),
      new MenuIcon({
        key: CommunicationType.Chat.toString(),
        icon: 'message',
        order: 2,
        callback: () => this.changeTab(CommunicationType.Chat),
        disabled: true,
      }),
      new MenuIcon({
        key: CommunicationType.Intern.toString(),
        icon: 'eye-closed',
        order: 3,
        callback: () => this.changeTab(CommunicationType.Intern),
      }),
    ],
    direction: 'vertical',
  });

  public activateMenuItem$ = new Subject<string>();

  private readonly _sharedCommunicationService = inject(CamSharedCommunicationsService);
  private readonly _communicationService = inject(CamCommunicationsService);

  public readonly mySignature$ = signal<Observable<SignatureExtended | null> | null>(null);

  documentsIds() {
    return this._sharedCommunicationService.documentsIdsByTaskId[this.taskId];
  }

  constructor() {
    super();
    this.usersService.fetchUsers$().subscribe({
      next: users => this.users.set(users.map(user => ({ id: user.id, name: fullName(user) }))),
    });
    this._fetch();
    this.mySignature$.set(this._communicationService.mySignature.get$());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['replyTo'] && changes['replyTo'].currentValue) {
      this.collapsed = false;
    }
    if (changes['openPanel'] && changes['openPanel'].currentValue) {
      this.collapsed = false;
    }
  }

  public changeTab(tab: CommunicationType) {
    this.activeTab = tab;
  }

  public updateCorrespondents(correspondents: OutputCorrespondentInput) {
    this.correspondents = correspondents;
  }

  public updateAttachments(attachments: InputUploadValue[]) {
    this.attachments = attachments;
  }
  public send(data: EditorInputSavedData, signature: SignatureExtended | null) {
    this.message.emit({
      type: this.activeTab,
      blocks: this.withSignature ? data.blocks.concat(signature?.blocks ?? []) : data.blocks,
      tos: this.correspondents?.tos ?? [],
      ccs: this.correspondents?.ccs ?? [],
      tags: data.tags.map(tag => ({ userId: tag })) ?? [],
      attachments: this.attachments ?? [],
    });
  }

  public toogleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  public selectTemplateVariant(variant: TemplateVariant | null) {
    this.selectedTemplateVariant = variant;
    if (variant?.jsonBodyParsed) {
      this.communicationsTemplateService
        .previewConversationTemplate$(JSON.stringify(variant.jsonBodyParsed), [{ key: 'TASK_ID', value: this.taskId }])
        .subscribe({
          next: value => this.selectedTemplateVariantBodyChanged$.next(JSON.parse(value)),
        });
    }
  }
  public toggleExtra(key: extraOpenKey) {
    this.extraOpen[key] = !this.extraOpen[key];
  }

  private _fetch() {
    this.requestState.asked();
    this._communicationService.fetchMySignature$().subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
