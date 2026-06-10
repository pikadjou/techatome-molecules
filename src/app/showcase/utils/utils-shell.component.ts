import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-utils-shell",
  templateUrl: "./utils-shell.component.html",
  styleUrl: "./utils-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsShellComponent {
  tabs = [
    { label: "Pipes", route: "pipes" },
    { label: "Directives", route: "directives" },
    { label: "Functions", route: "functions" },
  ];
}
