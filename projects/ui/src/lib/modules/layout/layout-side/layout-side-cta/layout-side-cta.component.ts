import { Component, input } from "@angular/core";

@Component({
  selector: "ta-layout-side-cta",
  templateUrl: "./layout-side-cta.component.html",
  styleUrls: ["./layout-side-cta.component.scss"],
  standalone: true,
})
export class LayoutSideCtaComponent {
  background = input<boolean>(true);

  constructor() {}
}
