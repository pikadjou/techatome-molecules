import type { Page } from "@playwright/test";

import { AppPage } from "./app-page";

export class ShowcasePage extends AppPage {
  constructor(page: Page) {
    super(page);
  }

  async openSection(route: string): Promise<void> {
    await this.goto(route);
  }
}
