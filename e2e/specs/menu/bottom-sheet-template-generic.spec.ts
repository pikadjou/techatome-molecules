import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Bottom sheet generic",
  package: "menu",
  route: "/e2e-harness/menu-bottom-sheets",
  testId: "ta-bottom-sheet-template-generic",
  render: "attached",
});
