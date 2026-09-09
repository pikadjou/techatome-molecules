import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "New",
  package: "ui",
  route: "/e2e-harness/ui-basics",
  testId: "ta-new",
  render: "attached",
});
