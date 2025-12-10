import { Routes } from "@angular/router";

export const MENU_SHOWCASE_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./menu-showcase.component").then((m) => m.MenuShowcaseComponent),
  },
];
