import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";
import { LayoutFirstLevelComponent } from "../../../core/layout/layout-first-level/layout-first-level.component";
import { LayoutTitleComponent } from "../../../core/layout/layout-title/layout-title.component";
import { LayoutContentComponent } from "../../../core/layout/layout-content/layout-content.component";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  standalone: true,
  selector: "app-overview",
  imports: [
    LayoutContentComponent,
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    NgFor,
    RouterLink,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.scss",
})
export class OverviewPage {
  features = [
    {
      title: "UI Components",
      description:
        "Boutons, badges, banners et autres éléments d'interface utilisateur",
      route: "/ui-components/showcase",
      icon: "widgets",
      color: "#2196F3",
      stats: "15+ composants",
    },
    {
      title: "Charts",
      description: "Graphiques et visualisations de données avec Chart.js",
      route: "/charts/showcase",
      icon: "bar_chart",
      color: "#F44336",
      stats: "5 types de graphiques",
    },
    {
      title: "Forms",
      description: "Formulaires et composants de saisie avancés",
      route: "/forms",
      icon: "edit",
      color: "#FF9800",
      stats: "Bientôt disponible",
    },
    {
      title: "Icons",
      description: "Icônes Material, Font et locales",
      route: "/icons",
      icon: "emoji_symbols",
      color: "#607D8B",
      stats: "500+ icônes",
    },
  ];

  stats = [
    { label: "Librairies", value: "20+", icon: "library_books" },
    { label: "Composants", value: "100+", icon: "widgets" },
    { label: "Pages démo", value: "15+", icon: "web" },
    { label: "Patterns", value: "8", icon: "pattern" },
  ];
}
