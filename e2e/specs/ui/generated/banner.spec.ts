import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Banner",
  package: "ui",
  route: "/e2e-harness/ui-basics",
  testId: "ta-banner",
  render: "attached",
});
