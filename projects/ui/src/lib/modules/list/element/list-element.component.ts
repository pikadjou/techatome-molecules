import { Component, input, output } from "@angular/core";

@Component({
  selector: "ta-list-element",
  templateUrl: "./list-element.component.html",
  styleUrl: "./list-element.component.scss",
  standalone: true,
})
export class ListElementComponent {
  withSeparator = input<boolean>(true);

  /** Signale l'élément courant par un filet jaune sur le bord gauche. */
  highlight = input<boolean>(false);

  flexColumn = input<boolean>(false);

  action = output<void>();
}
