import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./showcase/home/home.component").then((c) => c.HomePage),
  },
  {
    path: "theme",
    loadComponent: () =>
      import("./showcase/theme/theme.component").then((c) => c.ThemePage),
  },
  {
    path: "ui",
    loadComponent: () =>
      import("./showcase/ui/ui.component").then((c) => c.UiPage),
  },
  {
    path: "form",
    loadComponent: () =>
      import("./showcase/form/form.component").then((c) => c.FormPage),
  },
  {
    path: "grid",
    loadComponent: () =>
      import("./showcase/grid/grid.component").then((c) => c.GridPage),
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];
