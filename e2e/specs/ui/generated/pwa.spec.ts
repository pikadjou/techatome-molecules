import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Pwa",
  package: "ui",
  route: "/e2e-harness/misc",
  testId: "ta-pwa",
  render: "attached",
});
