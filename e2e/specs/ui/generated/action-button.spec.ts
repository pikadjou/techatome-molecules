import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Action button",
  package: "ui",
  route: "/e2e-harness/ui-buttons",
  testId: "ta-action-button",
  render: "attached",
});
