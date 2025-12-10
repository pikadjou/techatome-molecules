import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";

import { LinkComponent as UiLinkComponent } from "@ta/ui";
import { RichParagraphLink } from "../../../services/dto/types/rich-text";
import { TextComponent } from "../text/text.component";

@Component({
  selector: "ta-rich-paragraph-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
  standalone: true,
  imports: [NgFor, UiLinkComponent, TextComponent],
})
export class LinkComponent {
  @Input()
  link!: RichParagraphLink;

  public goTo() {
    window.open(this.link.url);
  }
}
