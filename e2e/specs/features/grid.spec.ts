import { test, expect } from "@playwright/test";

/**
 * @ta/features — le grid et ses sous-composants sont rendus par la page showcase
 * `/features` avec des données locales (pas de backend). On vérifie que chaque
 * composant du système grid est bien monté et rendu.
 *
 * Les endpoints GraphQL éventuels sont neutralisés pour éviter tout hang réseau
 * (démonstration du helper réutilisable `mockGraphql`).
 */

const GRID_COMPONENTS = [
  "ta-grid",
  "ta-grid-container",
  "ta-grid-control",
  "ta-grid-form",
  "ta-grid-highlight-filters",
  "ta-grid-search",
  "ta-grid-tags",
  "ta-grid-pagination",
  "ta-grid-filters-modal",
] as const;

test.describe("@ta/features — Grid (page /features)", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/*graphql*", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ data: {} }) }),
    );
    await page.goto("/features");
  });

  for (const selector of GRID_COMPONENTS) {
    test(`${selector} est monté`, async ({ page }) => {
      await expect(page.locator(selector).first()).toBeAttached();
    });
  }

  test("le grid affiche des lignes de données locales", async ({ page }) => {
    await expect(page.locator("ta-grid").first()).toBeVisible();
    await expect(page.getByText("Laptop Pro 16").first()).toBeVisible();
  });
});
