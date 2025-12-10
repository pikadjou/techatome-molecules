import { Routes } from "@angular/router";

export const FILES_SHOWCASE_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./files-showcase.component").then(
        (m) => m.FilesShowcaseComponent
      ),
  },
];
