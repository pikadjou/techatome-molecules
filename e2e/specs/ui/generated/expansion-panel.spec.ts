import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Expansion panel",
  package: "ui",
  route: "/e2e-harness/ui-interactive",
  testId: "ta-expansion-panel",
  render: "attached",
});
