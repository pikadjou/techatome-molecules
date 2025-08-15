import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { TaSizes } from '@ta/styles';
import { MessageLevel, TranslatePipe } from '@ta/utils';
import { TypedMessageComponent } from "../typed-message/typed-message.component";

@Component({
  selector: 'ta-picture-info-message',
  templateUrl: './picture-info-message.component.html',
  styleUrls: ['./picture-info-message.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, MatIconModule, TranslatePipe, TypedMessageComponent]
})
export class PictureInfoMessageComponent {
  @Input() icon?: string;
  @Input() iconSize?: TaSizes;
  @Input() text?: string;
  @Input() type?: MessageLevel = 'info';

  get displayedText() {
    return this.text ?? '';
  }

}
