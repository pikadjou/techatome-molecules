import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Layout modal",
  package: "ui",
  route: "/e2e-harness/ui-overlays",
  testId: "ta-layout-modal",
  render: "attached",
});
