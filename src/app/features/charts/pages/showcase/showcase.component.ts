import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";
import { LayoutFirstLevelComponent } from "../../../core/layout/layout-first-level/layout-first-level.component";
import { LayoutTitleComponent } from "../../../core/layout/layout-title/layout-title.component";
import { LayoutContentComponent } from "../../../core/layout/layout-content/layout-content.component";
import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  standalone: true,
  selector: "app-charts-showcase",
  imports: [
    LayoutContentComponent,
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    NgFor,
    RouterLink,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./showcase.component.html",
  styleUrl: "./showcase.component.scss",
})
export class ChartsShowcasePage {
  chartTypes = [
    {
      title: "Bar Chart",
      description: "Graphiques en barres pour comparer des valeurs",
      route: "/charts/bar-chart",
      icon: "bar_chart",
      color: "#2196F3",
      status: "À venir",
    },
    {
      title: "Line Chart",
      description: "Graphiques linéaires pour afficher des tendances",
      route: "/charts/line-chart",
      icon: "show_chart",
      color: "#4CAF50",
      status: "À venir",
    },
    {
      title: "Pie Chart",
      description: "Graphiques circulaires pour montrer des proportions",
      route: "/charts/pie-chart",
      icon: "pie_chart",
      color: "#FF9800",
      status: "À venir",
    },
    {
      title: "Doughnut Chart",
      description: "Graphiques en anneau, variante du pie chart",
      route: "/charts/doughnut-chart",
      icon: "donut_large",
      color: "#9C27B0",
      status: "À venir",
    },
  ];
}
