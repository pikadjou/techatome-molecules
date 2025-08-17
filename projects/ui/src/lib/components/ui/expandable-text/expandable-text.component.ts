import { NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
selector: 'ta-expandable-text',
  templateUrl: './expandable-text.component.html',
  styleUrls: ['./expandable-text.component.scss'],
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class ExpandableTextComponent {
  @Input()
  height: number = 100;

  public showFullText: boolean = false;
  public showButton: boolean = true;

  @ViewChild('myText')
  public _myText!: ElementRef<HTMLDivElement>;

  get textHeight() {
    if (this._myText) {
      if (this._myText.nativeElement.offsetHeight < this.height) {
        return 'auto';
      }
    }
    if (this.showFullText) {
      return 'auto';
    }
    return `${this.height}px`;
  }

  get hasFixedHeight() {
    return this.textHeight != 'auto';
  }

  get hasTooBigText() {
    if (this._myText) {
      return this._myText.nativeElement.offsetHeight > this.height;
    }
    return true;
  }

  toggleText() {
    if (this.showFullText === false) {
      this.showFullText = true;
    } else {
      this.showFullText = false;
    }
  }
}
