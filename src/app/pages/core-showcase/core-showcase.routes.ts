import { Routes } from "@angular/router";

export const CORE_SHOWCASE_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./core-showcase.component").then((m) => m.CoreShowcaseComponent),
  },
];
