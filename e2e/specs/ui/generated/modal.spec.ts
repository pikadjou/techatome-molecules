import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Modal",
  package: "ui",
  route: "/e2e-harness/ui-overlays",
  testId: "ta-modal",
  render: "attached",
});
