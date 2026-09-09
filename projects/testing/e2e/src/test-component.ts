import { test, expect, type Page } from "@playwright/test";

import type { ComponentTestDescriptor, Interaction } from "./descriptor";
import { byTestId } from "./selectors";
import { ShowcasePage } from "./pages/showcase-page";

/**
 * Génère une suite de tests par composant à partir d'un descripteur minimal :
 * un test de rendu + un test par interaction déclarée.
 */
export function testComponent(d: ComponentTestDescriptor): void {
  test.describe(`@ta/${d.package} — ${d.name}`, () => {
    test.beforeEach(async ({ page }) => {
      const showcase = new ShowcasePage(page);
      await showcase.openSection(d.route);
      if (d.setup) {
        await d.setup(showcase);
      }
    });

    test("rend le composant", async ({ page }) => {
      const target = byTestId(page, d.testId).first();
      if (d.render === "attached") {
        await expect(target).toBeAttached();
      } else {
        await expect(target).toBeVisible();
      }
    });

    for (const interaction of d.interactions ?? []) {
      test(`interaction: ${interaction.kind}`, async ({ page }) => {
        await runInteraction(page, d.testId, interaction);
      });
    }
  });
}

async function runInteraction(
  page: Page,
  testId: string,
  interaction: Interaction,
): Promise<void> {
  const target = interaction.targetTestId
    ? byTestId(page, interaction.targetTestId).first()
    : byTestId(page, testId).first();

  switch (interaction.kind) {
    case "click":
      await target.click();
      if (interaction.assert === "stays-visible") {
        await expect(target).toBeVisible();
      }
      break;
    case "type":
      await target.click();
      await target.pressSequentially(interaction.value);
      break;
    case "select":
      await target.click();
      await page.getByText(interaction.option, { exact: false }).first().click();
      break;
    case "toggle":
      await target.click();
      break;
    case "open-overlay":
      await target.click();
      await expect(byTestId(page, interaction.overlayTestId).first()).toBeVisible();
      break;
  }
}
