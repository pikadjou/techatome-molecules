import { test, expect } from "@playwright/test";

/**
 * @ta/features — la page thématique héritée `/features` a été retirée (tâche 17
 * du plan de vitrine) : chaque composant du système grid a désormais sa propre
 * page de démonstration générée, sous `/features/<sélecteur>`, avec des données
 * locales (pas de backend). On vérifie que chacun s'y monte bien.
 *
 * Les endpoints GraphQL éventuels sont neutralisés pour éviter tout hang réseau.
 */

// Composant interne à @ta/features (`pagination.component.ts`), non exporté par
// `public-api.ts` : pas de page générée pour lui. `ta-grid` le rend toujours lui-même
// (`grid.component.html`), donc la page de `ta-grid` suffit à le monter aussi.
const GRID_COMPONENT_PAGES: Record<string, string> = {
  "ta-grid": "/features/ta-grid",
  "ta-grid-container": "/features/ta-grid-container",
  "ta-grid-control": "/features/ta-grid-control",
  "ta-grid-form": "/features/ta-grid-form",
  "ta-grid-highlight-filters": "/features/ta-grid-highlight-filters",
  "ta-grid-search": "/features/ta-grid-search",
  "ta-grid-tags": "/features/ta-grid-tags",
  "ta-grid-pagination": "/features/ta-grid",
};

test.describe("@ta/features — Grid (pages générées /features/<id>)", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/*graphql*", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ data: {} }) }),
    );
  });

  for (const [selector, path] of Object.entries(GRID_COMPONENT_PAGES)) {
    test(`${selector} est monté`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator(selector).first()).toBeAttached();
    });
  }

  // Échec préexistant connu, pas à corriger ici : `ta-grid-filters-panel` a été
  // renommé depuis `ta-grid-filters-modal` par une refonte non commitée de
  // @ta/features (voir le champ `notes` de
  // src/app/showcase/demos/features/ta-grid-filters-panel.demo.ts, qui documente
  // déjà ce cas). Le bouton "Ouvrir les filtres" est cliqué pour reproduire le
  // seul chemin qui monte ce composant — il n'échoue donc que sur le nom, pas sur
  // l'absence d'interaction.
  test("ta-grid-filters-modal est monté", async ({ page }) => {
    await page.goto("/features/ta-grid-filters-panel");
    await page.getByText("Ouvrir les filtres").first().click();

    await expect(page.locator("ta-grid-filters-modal").first()).toBeAttached();
  });

  test("le grid affiche des lignes de données locales", async ({ page }) => {
    await page.goto("/features/ta-grid");

    await expect(page.locator("ta-grid").first()).toBeVisible();
    await expect(page.getByText("Amélie Laurent").first()).toBeVisible();
  });
});
