import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Layout full panel",
  package: "ui",
  route: "/e2e-harness/ui-layout",
  testId: "ta-layout-full-panel",
  render: "attached",
});
