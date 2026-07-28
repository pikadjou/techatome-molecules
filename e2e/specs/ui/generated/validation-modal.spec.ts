import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Validation modal",
  package: "ui",
  route: "/e2e-harness/ui-overlays",
  testId: "ta-validation-modal",
  render: "attached",
});
