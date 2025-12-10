import { Component } from "@angular/core";
import {
  CardComponent,
  TitleComponent,
  TextComponent,
  ButtonComponent,
} from "@ta/ui";

@Component({
  selector: "app-cards-demo",
  standalone: true,
  imports: [CardComponent, TitleComponent, TextComponent, ButtonComponent],
  templateUrl: "./cards-demo.component.html",
  styleUrl: "./cards-demo.component.scss",
})
export class CardsDemoComponent {
  onCardClick(card: string) {
    console.log(`${card} clicked!`);
  }

  onAction(action: string) {
    console.log(`${action} action clicked!`);
  }
}
