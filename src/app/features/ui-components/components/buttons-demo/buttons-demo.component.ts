import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import {
  TitleComponent,
  TextComponent,
  ButtonComponent as TaButtonComponent,
} from "@ta/ui";

@Component({
  standalone: true,
  selector: "app-buttons-demo",
  imports: [NgFor, TextComponent, TitleComponent, TaButtonComponent],
  templateUrl: "./buttons-demo.component.html",
  styleUrl: "./buttons-demo.component.scss",
})
export class ButtonComponent {
  buttonTypes = [
    { name: "Primary", class: "btn-primary", description: "Action principale" },
    {
      name: "Secondary",
      class: "btn-secondary",
      description: "Action secondaire",
    },
    {
      name: "Success",
      class: "btn-success",
      description: "Action de validation",
    },
    {
      name: "Warning",
      class: "btn-warning",
      description: "Action d'avertissement",
    },
    { name: "Danger", class: "btn-danger", description: "Action destructive" },
    { name: "Outline", class: "btn-outline", description: "Bouton en contour" },
  ];

  buttonSizes = [
    { name: "Small", class: "btn-sm", description: "Petit bouton" },
    { name: "Medium", class: "btn-md", description: "Bouton moyen (défaut)" },
    { name: "Large", class: "btn-lg", description: "Grand bouton" },
  ];

  onButtonClick(buttonType: string) {
    console.log(`${buttonType} button clicked!`);
  }
}
