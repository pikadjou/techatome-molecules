import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
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
      import("./showcase/ui/ui-shell.component").then((c) => c.UiShellComponent),
    children: [
      { path: "", redirectTo: "basics", pathMatch: "full" },
      {
        path: "basics",
        loadComponent: () =>
          import("./showcase/ui/basics/basics.component").then((c) => c.BasicsComponent),
      },
      {
        path: "display",
        loadComponent: () =>
          import("./showcase/ui/display/display.component").then((c) => c.DisplayComponent),
      },
      {
        path: "cards",
        loadComponent: () =>
          import("./showcase/ui/cards/cards.component").then((c) => c.CardsComponent),
      },
      {
        path: "layout",
        loadComponent: () =>
          import("./showcase/ui/layout/layout.component").then((c) => c.LayoutComponent),
      },
      {
        path: "progress",
        loadComponent: () =>
          import("./showcase/ui/progress/progress.component").then((c) => c.ProgressComponent),
      },
      {
        path: "container",
        loadComponent: () =>
          import("./showcase/ui/container/container.component").then((c) => c.ContainerComponent),
      },
    ],
  },
  {
    path: "notification",
    loadComponent: () =>
      import("./showcase/notification/notification.component").then((c) => c.NotificationComponent),
  },
  {
    path: "menu",
    loadComponent: () =>
      import("./showcase/menu/menu-shell.component").then((c) => c.MenuShellComponent),
    children: [
      { path: "", redirectTo: "components", pathMatch: "full" },
      {
        path: "components",
        loadComponent: () =>
          import("./showcase/menu/components/components.component").then((c) => c.MenuComponentsComponent),
      },
      {
        path: "navigation",
        loadComponent: () =>
          import("./showcase/menu/navigation/navigation.component").then((c) => c.MenuNavigationComponent),
      },
    ],
  },
  {
    path: "form",
    loadComponent: () =>
      import("./showcase/form/form-shell.component").then((c) => c.FormShellComponent),
    children: [
      { path: "", redirectTo: "inputs", pathMatch: "full" },
      {
        path: "inputs",
        loadComponent: () =>
          import("./showcase/form/inputs/inputs.component").then((c) => c.FormInputsComponent),
      },
      {
        path: "selection",
        loadComponent: () =>
          import("./showcase/form/selection/selection.component").then((c) => c.FormSelectionComponent),
      },
      {
        path: "datetime",
        loadComponent: () =>
          import("./showcase/form/datetime/datetime.component").then((c) => c.FormDatetimeComponent),
      },
      {
        path: "advanced",
        loadComponent: () =>
          import("./showcase/form/advanced/advanced.component").then((c) => c.FormAdvancedComponent),
      },
      {
        path: "example",
        loadComponent: () =>
          import("./showcase/form/example/example.component").then((c) => c.FormExampleComponent),
      },
    ],
  },
  {
    path: "wysiswyg",
    loadComponent: () =>
      import("./showcase/wysiswyg/wysiswyg.component").then((c) => c.WysiswygPage),
  },
  {
    path: "features",
    loadComponent: () =>
      import("./showcase/features/features.component").then((c) => c.FeaturesComponent),
  },
  {
    path: "charts",
    loadComponent: () =>
      import("./showcase/charts/charts.component").then((c) => c.ChartsPage),
  },
  {
    path: "files",
    loadComponent: () =>
      import("./showcase/files/files-shell.component").then((c) => c.FilesShellComponent),
    children: [
      { path: "", redirectTo: "basic", pathMatch: "full" },
      {
        path: "basic",
        loadComponent: () =>
          import("./showcase/files/basic/basic.component").then((c) => c.FilesBasicComponent),
      },
      {
        path: "extended",
        loadComponent: () =>
          import("./showcase/files/extended/extended.component").then((c) => c.FilesExtendedComponent),
      },
    ],
  },
  {
    path: "icons",
    loadComponent: () =>
      import("./showcase/icons/icons-shell.component").then((c) => c.IconsShellComponent),
    children: [
      { path: "", redirectTo: "font", pathMatch: "full" },
      {
        path: "font",
        loadComponent: () =>
          import("./showcase/icons/font/font.component").then((c) => c.IconsFontComponent),
      },
      {
        path: "material",
        loadComponent: () =>
          import("./showcase/icons/material/material.component").then((c) => c.IconsMaterialComponent),
      },
    ],
  },
  {
    path: "calendar",
    loadComponent: () =>
      import("./showcase/calendar/calendar.component").then((c) => c.CalendarComponent),
  },
  {
    path: "utils",
    loadComponent: () =>
      import("./showcase/utils/utils-shell.component").then((c) => c.UtilsShellComponent),
    children: [
      { path: "", redirectTo: "pipes", pathMatch: "full" },
      {
        path: "pipes",
        loadComponent: () =>
          import("./showcase/utils/pipes/pipes.component").then((c) => c.UtilsPipesComponent),
      },
      {
        path: "directives",
        loadComponent: () =>
          import("./showcase/utils/directives/directives.component").then((c) => c.UtilsDirectivesComponent),
      },
      {
        path: "functions",
        loadComponent: () =>
          import("./showcase/utils/functions/functions.component").then((c) => c.UtilsFunctionsComponent),
      },
    ],
  },
  {
    path: "user",
    loadComponent: () =>
      import("./showcase/user/user.component").then((c) => c.UserPage),
  },
  { path: "**", redirectTo: "/home" },
];
