import { expect, test } from "@playwright/test";

test("chaque exemple de la vitrine est adressable dans le harness", async ({ page }) => {
  await page.goto("/e2e-harness/ta-button--types");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-button")).toHaveCount(4);
});

test("un exemple de champ de formulaire monte isolément", async ({ page }) => {
  await page.goto("/e2e-harness/ta-input-textbox--valeur-simple");

  await expect(page.getByTestId("harness-root")).toBeVisible();
  await expect(page.locator("ta-input-textbox")).toBeVisible();
});
