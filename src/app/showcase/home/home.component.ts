import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [PageLayoutComponent, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  sections = [
    {
      title: "UI Components",
      description: "Buttons, badges, cards, lists, progress, layout",
      route: "/ui",
      icon: "widgets",
    },
    {
      title: "Form System",
      description: "All 24 input types, form layout, validation",
      route: "/form",
      icon: "edit_note",
    },
    {
      title: "Grid / Table",
      description:
        "Tabulator grid, card view, filters, presets, search, pagination",
      route: "/grid",
      icon: "table_chart",
    },
  ];
}
