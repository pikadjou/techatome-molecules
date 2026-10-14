import { Component, input } from "@angular/core";

@Component({
  selector: "ta-layout-side-cta",
  templateUrl: "./layout-side-cta.component.html",
  styleUrl: "./layout-side-cta.component.scss",
  standalone: true,
})
export class LayoutSideCtaComponent {
  background = input<boolean>(true);

  rounded = input<boolean>(false);

  constructor() {}
}
