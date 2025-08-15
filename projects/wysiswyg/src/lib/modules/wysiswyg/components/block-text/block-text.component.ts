import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

import { OutputBlockData } from '@editorjs/editorjs';
import { TaTextComponent, TitleComponent } from '@ta/ui';

import { TaBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-cms-editor-blocks',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, TitleComponent, TaTextComponent],
})
export class BlockTextComponent extends TaBaseComponent {
  @Input()
  blocks!: OutputBlockData[];

 // readonly ENotificationCode = ENotificationCode;
}
