import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Bottom sheet basic",
  package: "menu",
  route: "/e2e-harness/menu-bottom-sheets",
  testId: "ta-bottom-sheet-template-basic",
  render: "attached",
});
