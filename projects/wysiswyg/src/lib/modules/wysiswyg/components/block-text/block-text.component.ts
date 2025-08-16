import { Component, Input } from '@angular/core';

import { OutputBlockData } from '@editorjs/editorjs';
import { ENotificationCode } from '@ta/notification';
import { CamBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-cms-editor-blocks',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss'],
})
export class BlockTextComponent extends CamBaseComponent {
  @Input()
  blocks!: OutputBlockData[];

  readonly ENotificationCode = ENotificationCode;
}
