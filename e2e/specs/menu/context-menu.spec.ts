import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Context menu",
  package: "menu",
  route: "/e2e-harness/menu",
  testId: "ta-context-menu",
  render: "attached",
});
