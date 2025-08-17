import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RichText, RichTextChildren } from '../../../services/dto/types/rich-text';

@Component({
selector: 'ta-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss'],,
  standalone: true,
  imports: [NgFor],
})
export class RichTextComponent {
  @Input()
  richText!: RichText;

  public readonly typeToken!: { childrenText: RichTextChildren[] };
}
