import { Routes } from "@angular/router";

export const LAYOUT_SHOWCASE_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./layout-showcase.component").then(
        (m) => m.LayoutShowcaseComponent
      ),
  },
];
