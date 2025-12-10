import { Component, Input } from "@angular/core";

@Component({
  selector: "ta-layout-content",
  templateUrl: "./layout-content.component.html",
  styleUrls: ["./layout-content.component.scss"],
  standalone: true,
})
export class LayoutContentComponent {
  @Input()
  autoHeight: boolean = false;

  constructor() {}
}
