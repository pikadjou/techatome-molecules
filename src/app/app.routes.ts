import { Routes } from "@angular/router";

import { canMatchComponentPage, canMatchPackageIndex } from "./showcase/registry.guards";

/**
 * Une entrée par paquet @ta. La page composant générique (`:pkg/:component`) et
 * l'index de paquet (`:pkg`) couvrent tous les paquets documentés par le
 * registre ; `utils` garde une route dédiée, `@ta/utils` n'exportant aucun
 * composant `ta-*` — ses pipes et directives n'ont donc pas de page générée
 * (voir `src/app/showcase/utils/utils.component.ts`).
 */
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
  // Planches de la direction visuelle retenue, montées avec les vrais
  // composants @ta : la page sert de preuve de rendu et de cible e2e.
  {
    path: "catalogue",
    loadComponent: () =>
      import("./showcase/catalogue/catalogue.component").then((c) => c.CataloguePage),
  },
  // Placée avant l'index de paquet générique : sa garde n'accepte qu'une paire
  // connue du registre.
  {
    path: ":pkg/:component",
    canMatch: [canMatchComponentPage],
    loadComponent: () =>
      import("./showcase/component-page/component-page.component").then((c) => c.ComponentPage),
  },
  {
    path: "utils",
    loadComponent: () =>
      import("./showcase/utils/utils.component").then((c) => c.UtilsPage),
  },
  {
    path: "e2e-harness/:caseId",
    loadComponent: () => import("@ta/testing").then((c) => c.TaHarnessComponent),
  },
  {
    path: ":pkg",
    canMatch: [canMatchPackageIndex],
    loadComponent: () =>
      import("./showcase/package-index/package-index.component").then((c) => c.PackageIndexPage),
  },
  { path: "**", redirectTo: "/home" },
];
