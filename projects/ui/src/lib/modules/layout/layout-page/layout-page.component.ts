import { Component } from "@angular/core";

import { LayoutNavComponent } from "../layout-nav/layout-nav.component";

@Component({
  selector: "ta-layout-page",
  templateUrl: "./layout-page.component.html",
  styleUrls: ["./layout-page.component.scss"],
  standalone: true,
  imports: [LayoutNavComponent],
})
export class LayoutPageComponent {}
