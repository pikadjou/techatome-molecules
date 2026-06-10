import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-files-shell",
  templateUrl: "./files-shell.component.html",
  styleUrl: "./files-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesShellComponent {
  tabs = [
    { label: "Basic", route: "basic" },
    { label: "Extended", route: "extended" },
  ];
}
