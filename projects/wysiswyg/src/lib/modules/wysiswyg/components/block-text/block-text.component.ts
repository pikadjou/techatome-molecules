import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { OutputBlockData } from '@editorjs/editorjs';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TitleComponent, TextComponent, ToastComponent } from '@ta/ui';
import { TaBaseComponent, SafePipe } from '@ta/utils';

@Component({
selector: 'ta-cms-editor-blocks',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NotificationInlineComponent, SafePipe, TitleComponent, TextComponent, ToastComponent],
})
export class BlockTextComponent extends TaBaseComponent {
  @Input()
  blocks!: OutputBlockData[];

  readonly ENotificationCode = ENotificationCode;
}
