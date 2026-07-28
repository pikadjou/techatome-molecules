import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Layout with panel",
  package: "ui",
  route: "/e2e-harness/ui-layout",
  testId: "ta-layout-with-panel",
  render: "attached",
});
