import { Routes } from "@angular/router";

import { TaHarnessComponent } from "./harness.component";

/**
 * Construit la route harness à ajouter au routing de l'application.
 * @param basePath segment de base (défaut "e2e-harness")
 */
export function harnessRoutes(basePath = "e2e-harness"): Routes {
  return [{ path: `${basePath}/:caseId`, component: TaHarnessComponent }];
}
