import { Component } from "@angular/core";
import {
  ButtonComponent,
  ActionButtonComponent,
  DualButtonComponent,
  TitleComponent,
  TextComponent,
} from "@ta/ui";

@Component({
  selector: "app-buttons-demo",
  standalone: true,
  imports: [
    ButtonComponent,
    ActionButtonComponent,
    DualButtonComponent,
    TitleComponent,
    TextComponent,
  ],
  templateUrl: "./buttons-demo.component.html",
  styleUrl: "./buttons-demo.component.scss",
})
export class ButtonsDemoComponent {
  onButtonClick(buttonType: string) {
    console.log(`${buttonType} button clicked!`);
  }

  onActionClick() {
    console.log("Action executed!");
  }

  onPrimaryClick() {
    console.log("Primary action!");
  }

  onSecondaryClick() {
    console.log("Secondary action!");
  }
}
