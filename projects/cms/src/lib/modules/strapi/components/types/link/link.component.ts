import { NgFor } from "@angular/common";
import { Component, input } from "@angular/core";

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
  link = input.required<RichParagraphLink>();

  public goTo() {
    window.open(this.link().url);
  }
}
