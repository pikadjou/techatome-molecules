import { Routes } from "@angular/router";

import { TaRoutes } from "@ta/menu";

export enum EChartsRoute {
  charts = "charts",
  showcase = "showcase",
  barChart = "bar-chart",
  lineChart = "line-chart",
  pieChart = "pie-chart",
  doughnutChart = "doughnut-chart",
}

TaRoutes.addRoute({
  key: EChartsRoute.charts,
  url: "charts",
  children: [
    {
      key: EChartsRoute.showcase,
      url: "showcase",
    },
    {
      key: EChartsRoute.barChart,
      url: "bar-chart",
    },
    {
      key: EChartsRoute.lineChart,
      url: "line-chart",
    },
    {
      key: EChartsRoute.pieChart,
      url: "pie-chart",
    },
    {
      key: EChartsRoute.doughnutChart,
      url: "doughnut-chart",
    },
  ],
});

export const chartsRoutes: Routes = [
  {
    path: TaRoutes.getUrl([EChartsRoute.charts, EChartsRoute.showcase]),
    loadComponent: () =>
      import("./pages/showcase/showcase.component").then(
        (c) => c.ChartsShowcasePage
      ),
  },
  {
    path: TaRoutes.getUrl([EChartsRoute.charts, EChartsRoute.barChart]),
    loadComponent: () =>
      import("./pages/bar-chart/bar-chart.component").then(
        (c) => c.BarChartPage
      ),
  },
  {
    path: TaRoutes.getUrl([EChartsRoute.charts, EChartsRoute.lineChart]),
    loadComponent: () =>
      import("./pages/line-chart/line-chart.component").then(
        (c) => c.LineChartPage
      ),
  },
  {
    path: TaRoutes.getUrl([EChartsRoute.charts, EChartsRoute.pieChart]),
    loadComponent: () =>
      import("./pages/pie-chart/pie-chart.component").then(
        (c) => c.PieChartPage
      ),
  },
  {
    path: TaRoutes.getUrl([EChartsRoute.charts, EChartsRoute.doughnutChart]),
    loadComponent: () =>
      import("./pages/doughnut-chart/doughnut-chart.component").then(
        (c) => c.DoughnutChartPage
      ),
  },
];
