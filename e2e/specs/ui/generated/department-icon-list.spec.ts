import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Department icon list",
  package: "ui",
  route: "/e2e-harness/ui-display",
  testId: "ta-department-icon-list",
  render: "attached",
});
