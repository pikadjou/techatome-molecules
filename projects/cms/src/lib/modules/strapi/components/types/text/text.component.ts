import { Component, Input } from '@angular/core';

import { RichParagraphText } from '../../../services/dto/types/rich-text';

@Component({
  selector: 'cam-rich-paragraph-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input()
  text!: RichParagraphText;
}
