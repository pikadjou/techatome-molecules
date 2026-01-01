import { Component, input } from "@angular/core";

@Component({
  selector: "ta-layout-content",
  templateUrl: "./layout-content.component.html",
  styleUrls: ["./layout-content.component.scss"],
  standalone: true,
})
export class LayoutContentComponent {
  autoHeight = input<boolean>(false);

  constructor() {}
}
