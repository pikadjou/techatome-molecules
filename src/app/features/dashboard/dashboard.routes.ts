import { Routes } from "@angular/router";

import { TaRoutes } from "@ta/menu";

export enum EDashboardRoute {
  dashboard = "dashboard",
  overview = "overview",
}

TaRoutes.addRoute({
  key: EDashboardRoute.dashboard,
  url: "dashboard",
  children: [
    {
      key: EDashboardRoute.overview,
      url: "overview",
    },
  ],
});

export const dashboardRoutes: Routes = [
  {
    path: TaRoutes.getUrl([
      EDashboardRoute.dashboard,
      EDashboardRoute.overview,
    ]),
    loadComponent: () =>
      import("./pages/overview/overview.component").then((c) => c.OverviewPage),
  },
];
