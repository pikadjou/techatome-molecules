import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-icons-shell",
  templateUrl: "./icons-shell.component.html",
  styleUrl: "./icons-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsShellComponent {
  tabs = [
    { label: "Font Icons", route: "font" },
    { label: "Material Icons", route: "material" },
  ];
}
