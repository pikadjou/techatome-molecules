import { expect, test } from "@playwright/test";

/**
 * Vérifie le mécanisme de chargement paresseux du harness lui-même, dont dépend
 * tout le catalogue de démos de la vitrine.
 */
test("un cas déclaré avec `load` monte son composant", async ({ page }) => {
  await page.goto("/e2e-harness/lazy-smoke");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-button")).toBeVisible();
});

test("un identifiant inconnu affiche l'état introuvable", async ({ page }) => {
  await page.goto("/e2e-harness/identifiant-qui-nexiste-pas");

  await expect(page.getByTestId("harness-not-found")).toBeVisible();
});

test("un cas dont le `load` rejette affiche un état d'erreur", async ({ page }) => {
  await page.goto("/e2e-harness/lazy-broken");

  await expect(page.getByTestId("harness-load-error")).toBeVisible();
  await expect(page.getByTestId("harness-loading")).toHaveCount(0);
});
