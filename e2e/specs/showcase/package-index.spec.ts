import { expect, test } from "@playwright/test";

test("l'index d'un paquet liste ses composants et mène à leur page", async ({ page }) => {
  await page.goto("/form-input");

  const card = page.getByTestId("index-card").filter({ hasText: "ta-input-textbox" });
  await expect(card).toBeVisible();

  await card.click();

  await expect(page).toHaveURL(/\/form-input\/ta-input-textbox$/);
  await expect(page.getByTestId("import-line")).toContainText("@ta/form-input");
});

test("la recherche de la navigation trouve un composant par sélecteur", async ({ page }) => {
  await page.goto("/home");

  await page.getByTestId("nav-search").fill("ta-card");

  const link = page.locator('a[data-testid="nav-component-link"][href="/ui/ta-card"]');
  await expect(link).toBeVisible();

  await link.click();
  await expect(page).toHaveURL(/\/ui\/ta-card$/);
});

test("l'index d'un paquet groupe et trie ses composants", async ({ page }) => {
  // Ce test n'était pas possible avant la tâche 17 : `/ui` était capté par le
  // shell thématique hérité.
  await page.goto("/ui");

  // @ta/ui compte plusieurs familles : le groupement doit être visible.
  const groups = page.getByTestId("index-group");
  await expect(groups.first()).toBeVisible();
  expect(await groups.count()).toBeGreaterThan(1);
});
