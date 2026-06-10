import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-menu-shell",
  templateUrl: "./menu-shell.component.html",
  styleUrl: "./menu-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuShellComponent {
  tabs = [
    { label: "Components", route: "components" },
    { label: "Navigation", route: "navigation" },
  ];
}
