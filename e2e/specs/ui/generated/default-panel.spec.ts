import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Default panel",
  package: "ui",
  route: "/e2e-harness/ui-overlay",
  testId: "ta-default-panel",
  render: "attached",
});
