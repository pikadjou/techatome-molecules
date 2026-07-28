import type { Page, Route } from "@playwright/test";

/**
 * Réponses GraphQL mockées, indexées par nom d'opération (`operationName` de la
 * requête, ou premier mot après `query`/`mutation` si absent). La valeur est le
 * contenu de `data` renvoyé au client.
 *
 * @example
 * await mockGraphql(page, { ProjectsList: { projects: { items: [...], totalCount: 1 } } });
 */
export interface GraphqlMocks {
  [operationName: string]: unknown;
}

export interface MockGraphqlOptions {
  /** Motif d'URL de l'endpoint GraphQL (défaut: toute URL contenant `graphql`). */
  url?: string;
  /** Réponses par défaut si aucune opération ne matche (laisse passer sinon). */
  fallback?: unknown;
}

function operationNameFromQuery(query: string | undefined): string | undefined {
  if (!query) return undefined;
  const match = /\b(?:query|mutation|subscription)\s+([A-Za-z0-9_]+)/.exec(query);
  return match?.[1];
}

/**
 * Intercepte les requêtes GraphQL et renvoie des fixtures déterministes.
 * Réutilisable par toute app @ta/* pour tester des composants pilotés par données
 * sans backend réel. Les opérations non mockées sont laissées passer (`route.continue`)
 * sauf si `fallback` est fourni.
 */
export async function mockGraphql(page: Page, mocks: GraphqlMocks, options: MockGraphqlOptions = {}): Promise<void> {
  const pattern = options.url ?? "**/*graphql*";
  await page.route(pattern, async (route: Route) => {
    const request = route.request();
    if (request.method() !== "POST") {
      return route.continue();
    }
    let body: { operationName?: string; query?: string } = {};
    try {
      body = (request.postDataJSON() ?? {}) as typeof body;
    } catch {
      return route.continue();
    }
    const op = body.operationName ?? operationNameFromQuery(body.query);
    if (op && Object.prototype.hasOwnProperty.call(mocks, op)) {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ data: mocks[op] }),
      });
    }
    if (options.fallback !== undefined) {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ data: options.fallback }),
      });
    }
    return route.continue();
  });
}

export interface RestMock {
  /** Sous-chaîne ou glob de l'URL à matcher. */
  url: string;
  /** Méthode HTTP (défaut: toutes). */
  method?: string;
  /** Statut renvoyé (défaut: 200). */
  status?: number;
  /** Corps JSON renvoyé. */
  json: unknown;
}

/**
 * Intercepte des endpoints REST et renvoie des fixtures JSON. Complète
 * {@link mockGraphql} pour les composants qui parlent à une API REST/Strapi.
 */
export async function mockRest(page: Page, mocks: RestMock[]): Promise<void> {
  for (const mock of mocks) {
    await page.route(mock.url, async (route: Route) => {
      if (mock.method && route.request().method() !== mock.method.toUpperCase()) {
        return route.continue();
      }
      return route.fulfill({
        status: mock.status ?? 200,
        contentType: "application/json",
        body: JSON.stringify(mock.json),
      });
    });
  }
}
