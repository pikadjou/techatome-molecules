import { CdkMenuModule, CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject, signal } from '@angular/core';

import { CamMenuModule, Menu, MenuIcon } from '@ta/menu';
import { CamContainerModule, CamUiModule } from '@ta/ui';
import { CamBaseComponent, CamDirectivePipeModule, extractEnum } from '@ta/utils';
import { WysiswgBlockData, convertBlocksToHtml } from '@ta/wysiswyg';

import { CamCommunicationsAiService } from '../../services/ai.service';
import { CamCommunicationsService } from '../../services/communications.service';
import { CommunicationType } from '../../services/dto/communication';
import { Tones } from '../../services/dto/tones';

@Component({
  selector: 'ta-conversations-ai-tools',
  standalone: true,
  imports: [CamUiModule, CamMenuModule, CdkMenuModule, CamDirectivePipeModule, CamContainerModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.scss',
})
export class AiToolsComponent extends CamBaseComponent implements OnInit {
  @Input()
  taskId!: string;
  @Input()
  responseToCommunicationId?: string;
  @Input()
  message: { blocks: WysiswgBlockData[] } | null = null;

  @Output()
  generatedMessage = new EventEmitter<{ blocks: string; saveAfter?: boolean }>();
  @Output()
  changedType = new EventEmitter<string>();

  @ViewChild(CdkMenuTrigger, { static: true }) trigger!: CdkMenuTrigger;

  public actionMenu = signal<Menu | null>(null);

  private _conversationService = inject(CamCommunicationsService);
  private _aiServices = inject(CamCommunicationsAiService);

  private _conversationId: string | null = null;

  ngOnInit() {
    this._conversationId = this._conversationService.communicationByTaskId.get(this.taskId)?.id ?? null;
  }

  public openMenu() {
    this._updateMenu();

    this.trigger.toggle();
  }

  public askSummary(send: boolean = false) {
    if (!this._conversationId) {
      return;
    }
    this.requestState.asked();
    this._aiServices.aiConversationSummary$(this._conversationId).subscribe({
      next: (message: string) => {
        this.generatedMessage.emit({ blocks: message, saveAfter: send });
        this.changedType.emit(CommunicationType.Intern.toString());
      },
      complete: () => this.requestState.completed(),
    });
  }

  public askAnswer() {
    if (!this._conversationId || !this.responseToCommunicationId) {
      return;
    }
    this.requestState.asked();
    this._aiServices.aiConversationAnswer$(this._conversationId, this.responseToCommunicationId).subscribe({
      next: (message: string) => this.generatedMessage.emit({ blocks: message }),
      complete: () => this.requestState.completed(),
    });
  }

  public askReformulation(tone: Tones) {
    if (!this._conversationId || !this.message || this.message.blocks.length === 0) {
      return;
    }
    this.requestState.asked();
    this._aiServices.aiMessageReformulation$(convertBlocksToHtml(this.message.blocks), tone).subscribe({
      next: (message: string) => this.generatedMessage.emit({ blocks: message }),
      complete: () => this.requestState.completed(),
    });
  }

  private _updateMenu() {
    const menu = [
      new MenuIcon({
        key: 'summary-send',
        label: 'communication.ai.summary-n-send',
        style: 'dark',
        icon: 'article-line',
        iconsColor: 'icon-color-icon-tertiary',
        callback: () => this.askSummary(true),
      }),
      new MenuIcon({
        key: 'summary',
        label: 'communication.ai.summary',
        style: 'dark',
        icon: 'article-line',
        iconsColor: 'icon-color-icon-tertiary',
        callback: () => this.askSummary(),
      }),
      new MenuIcon({
        key: 'summary',
        label: 'communication.ai.answer',
        style: 'dark',
        icon: 'modify',
        iconsColor: 'icon-color-icon-tertiary',
        disabled: !this.responseToCommunicationId,
        callback: () => this.askAnswer(),
      }),
      ...extractEnum(Tones, true).map(
        ({ value, name }) =>
          new MenuIcon({
            key: 'summary',
            label: 'communication.ai.reformulation.' + name.toLocaleLowerCase(),
            style: 'dark',
            icon: 'modify',
            iconsColor: 'icon-color-icon-tertiary',
            disabled: (this.message?.blocks?.length ?? 0) === 0,
            callback: () => this.askReformulation(value),
          })
      ),
    ];

    this.actionMenu.set(
      new Menu({
        elements: menu.sort((a, b) => a.order - b.order),
        direction: 'vertical',
      })
    );
  }
}
