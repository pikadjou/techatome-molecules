import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-ui-shell",
  templateUrl: "./ui-shell.component.html",
  styleUrl: "./ui-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiShellComponent {
  tabs = [
    { label: "Basics", route: "basics" },
    { label: "Display", route: "display" },
    { label: "Cards & Lists", route: "cards" },
    { label: "Layout", route: "layout" },
    { label: "Progress", route: "progress" },
    { label: "Container", route: "container" },
  ];
}
