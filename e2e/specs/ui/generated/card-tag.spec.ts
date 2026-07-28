import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Card tag",
  package: "ui",
  route: "/e2e-harness/ui-card",
  testId: "ta-card-tag",
  render: "attached",
});
