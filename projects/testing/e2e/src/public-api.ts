/*
 * Public API Surface of @ta/testing/e2e (helpers Playwright, plain TS)
 *
 * NOTE: re-exports nommés explicites (et non `export *`) car le loader Playwright
 * ne re-exporte pas correctement les barils `export *` chaînant un module
 * ne contenant que des types (descriptor.ts).
 */
export type { ComponentTestDescriptor, Interaction } from "./descriptor";
export { byTestId } from "./selectors";
export { testComponent } from "./test-component";
export { mockGraphql, mockRest } from "./mock-server";
export type { GraphqlMocks, MockGraphqlOptions, RestMock } from "./mock-server";
export { AppPage } from "./pages/app-page";
export { ShowcasePage } from "./pages/showcase-page";
