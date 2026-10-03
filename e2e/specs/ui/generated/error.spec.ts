import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Error",
  package: "ui",
  route: "/e2e-harness/ui-container",
  testId: "ta-error",
  render: "attached",
});
