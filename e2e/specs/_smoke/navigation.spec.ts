import { test, expect } from "@playwright/test";

import { ShowcasePage } from "@ta/testing/e2e";

test("navigation vers /theme rend la page", async ({ page }) => {
  const showcase = new ShowcasePage(page);
  await showcase.openSection("/theme");
  await expect(page).toHaveURL(/\/theme$/);
  await expect(page.locator("app-root")).toBeVisible();
});
