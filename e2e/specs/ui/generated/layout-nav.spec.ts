import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Layout nav",
  package: "ui",
  route: "/e2e-harness/ui-layout",
  testId: "ta-layout-nav",
  render: "attached",
});
