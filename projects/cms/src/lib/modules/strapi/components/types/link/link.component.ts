import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RichParagraphLink } from '../../../services/dto/types/rich-text';

@Component({
selector: 'ta-rich-paragraph-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],,
  standalone: true,
  imports: [NgFor],
})
export class LinkComponent {
  @Input()
  link!: RichParagraphLink;

  public goTo() {
    window.open(this.link.url);
  }
}
