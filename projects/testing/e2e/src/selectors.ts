import type { Locator, Page } from "@playwright/test";

export function byTestId(scope: Page | Locator, id: string): Locator {
  return scope.locator(`[data-testid="${id}"]`);
}
