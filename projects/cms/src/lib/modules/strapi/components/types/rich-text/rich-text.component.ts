import { NgFor, NgTemplateOutlet } from "@angular/common";
import { Component, Input } from "@angular/core";

import { TitleComponent } from "@ta/ui";
import {
  RichText,
  RichTextChildren,
} from "../../../services/dto/types/rich-text";
import { LinkComponent } from "../link/link.component";
import { TextComponent } from "../text/text.component";

@Component({
  selector: "ta-rich-text",
  templateUrl: "./rich-text.component.html",
  styleUrls: ["./rich-text.component.scss"],
  standalone: true,
  imports: [
    NgFor,
    NgTemplateOutlet,
    TitleComponent,
    TextComponent,
    LinkComponent,
  ],
})
export class RichTextComponent {
  @Input()
  richText!: RichText;

  public readonly typeToken!: { childrenText: RichTextChildren[] };
}
