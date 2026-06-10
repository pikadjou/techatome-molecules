import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-form-shell",
  templateUrl: "./form-shell.component.html",
  styleUrl: "./form-shell.component.scss",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PageLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormShellComponent {
  tabs = [
    { label: "Inputs", route: "inputs" },
    { label: "Selection", route: "selection" },
    { label: "Date & Time", route: "datetime" },
    { label: "Advanced", route: "advanced" },
    { label: "Full Example", route: "example" },
  ];
}
