import { InjectionToken, Provider } from "@angular/core";

export interface TestingServerConfig {
  /** Réponses GraphQL/REST mockées, indexées par nom d'opération */
  responses?: Record<string, unknown>;
}

export const TA_TESTING_SERVER_CONFIG = new InjectionToken<TestingServerConfig>(
  "TA_TESTING_SERVER_CONFIG",
);

/**
 * Fournit un environnement de test uniforme pour les apps consommatrices :
 * point d'ancrage pour stubber les services @ta/server. À enrichir selon les
 * besoins réels des apps.
 */
export function provideTestingServer(config: TestingServerConfig = {}): Provider[] {
  return [{ provide: TA_TESTING_SERVER_CONFIG, useValue: config }];
}
