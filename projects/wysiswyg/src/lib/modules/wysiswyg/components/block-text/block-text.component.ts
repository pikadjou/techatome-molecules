import { Component, Input } from '@angular/core';

import { OutputBlockData } from '@editorjs/editorjs';

import { ENotificationCode } from '@camelot/notification';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-cms-editor-blocks',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss'],
})
export class BlockTextComponent extends CamBaseComponent {
  @Input()
  blocks!: OutputBlockData[];

  readonly ENotificationCode = ENotificationCode;
}
