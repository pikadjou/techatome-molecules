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
    path: "icons",
    loadComponent: () =>
      import("./showcase/icons/icons.component").then((c) => c.IconsPage),
  },
  {
    path: "ui",
    loadComponent: () =>
      import("./showcase/ui/ui.component").then((c) => c.UiPage),
  },
  {
    path: "ui-display",
    loadComponent: () =>
      import("./showcase/ui-display/ui-display.component").then(
        (c) => c.UiDisplayPage,
      ),
  },
  {
    path: "ui-cards-lists",
    loadComponent: () =>
      import("./showcase/ui-cards-lists/ui-cards-lists.component").then(
        (c) => c.UiCardsListsPage,
      ),
  },
  {
    path: "ui-layout",
    loadComponent: () =>
      import("./showcase/ui-layout/ui-layout.component").then(
        (c) => c.UiLayoutPage,
      ),
  },
  {
    path: "ui-feedback",
    loadComponent: () =>
      import("./showcase/ui-feedback/ui-feedback.component").then(
        (c) => c.UiFeedbackPage,
      ),
  },
  {
    path: "ui-navigation",
    loadComponent: () =>
      import("./showcase/ui-navigation/ui-navigation.component").then(
        (c) => c.UiNavigationPage,
      ),
  },
  {
    path: "ui-progress",
    loadComponent: () =>
      import("./showcase/ui-progress/ui-progress.component").then(
        (c) => c.UiProgressPage,
      ),
  },
  {
    path: "container",
    loadComponent: () =>
      import("./showcase/container/container.component").then(
        (c) => c.ContainerPage,
      ),
  },
  {
    path: "form",
    loadComponent: () =>
      import("./showcase/form/form.component").then((c) => c.FormPage),
  },
  {
    path: "wysiswyg",
    loadComponent: () =>
      import("./showcase/wysiswyg/wysiswyg.component").then(
        (c) => c.WysiswygPage,
      ),
  },
  {
    path: "grid",
    loadComponent: () =>
      import("./showcase/grid/grid.component").then((c) => c.GridPage),
  },
  {
    path: "charts",
    loadComponent: () =>
      import("./showcase/charts/charts.component").then(
        (c) => c.ChartsPage,
      ),
  },
  {
    path: "utils",
    loadComponent: () =>
      import("./showcase/utils/utils.component").then((c) => c.UtilsPage),
  },
  {
    path: "user",
    loadComponent: () =>
      import("./showcase/user/user.component").then((c) => c.UserPage),
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];
