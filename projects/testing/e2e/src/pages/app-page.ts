import type { Locator, Page } from "@playwright/test";

import { byTestId } from "../selectors";

/**
 * Page object de base, portable : toute app consommatrice peut la sous-classer
 * pour exposer ses propres flux (login, navigation métier, etc.).
 */
export class AppPage {
  constructor(protected readonly page: Page) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
    await this.page.waitForLoadState("networkidle");
  }

  component(testId: string): Locator {
    return byTestId(this.page, testId);
  }
}
