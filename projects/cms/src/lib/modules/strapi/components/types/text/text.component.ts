import { Component, input } from "@angular/core";

import { RichParagraphText } from "../../../services/dto/types/rich-text";

@Component({
  selector: "ta-rich-paragraph-text",
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss",
  standalone: true,
})
export class TextComponent {
  text = input.required<RichParagraphText>();
}
