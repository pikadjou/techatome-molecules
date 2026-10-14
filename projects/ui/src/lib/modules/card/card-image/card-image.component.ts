import { Component, input } from "@angular/core";

@Component({
  selector: "ta-card-image",
  templateUrl: "./card-image.component.html",
  styleUrl: "./card-image.component.scss",
  standalone: true,
})
export class CardImageComponent {
  src = input<string>("");

  constructor() {}
}
