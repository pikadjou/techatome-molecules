import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/specs",
  // Résout les path mappings TS (@ta/testing/e2e) pour les specs.
  tsconfig: "./e2e/tsconfig.json",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://localhost:4300",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // Port dédié pour ne pas entrer en conflit avec un `yarn start` déjà lancé sur 4200.
    command: "ng serve --port 4300",
    url: "http://localhost:4300",
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
