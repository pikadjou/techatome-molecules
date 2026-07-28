import { test, expect } from "@playwright/test";

test("le showcase démarre et redirige vers /home", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/home$/);
});
