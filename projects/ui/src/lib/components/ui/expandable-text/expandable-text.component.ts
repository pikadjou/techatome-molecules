import { Component, ElementRef, input, viewChild } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-expandable-text",
  templateUrl: "./expandable-text.component.html",
  styleUrl: "./expandable-text.component.scss",
  standalone: true,
  imports: [TranslateModule],
})
export class ExpandableTextComponent {
  height = input<number>(100);

  public showFullText: boolean = false;
  public showButton: boolean = true;

  private readonly _myText = viewChild<ElementRef<HTMLDivElement>>("myText");

  constructor() {
    TaTranslationUI.getInstance();
  }

  get textHeight() {
    const text = this._myText();
    if (text && text.nativeElement.offsetHeight < this.height()) {
      return "auto";
    }
    if (this.showFullText) {
      return "auto";
    }
    return `${this.height()}px`;
  }

  get hasFixedHeight() {
    return this.textHeight != "auto";
  }

  get hasTooBigText() {
    const text = this._myText();
    return text ? text.nativeElement.offsetHeight > this.height() : true;
  }

  toggleText() {
    if (this.showFullText === false) {
      this.showFullText = true;
    } else {
      this.showFullText = false;
    }
  }
}
