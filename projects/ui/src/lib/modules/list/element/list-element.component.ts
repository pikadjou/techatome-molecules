import { Component, EventEmitter, input, Output } from "@angular/core";

@Component({
  selector: "ta-list-element",
  templateUrl: "./list-element.component.html",
  styleUrls: ["./list-element.component.scss"],
  standalone: true,
})
export class ListElementComponent {
  withSeparator = input<boolean>(true);

  flexColumn = input<boolean>(false);

  @Output()
  action = new EventEmitter();
}
