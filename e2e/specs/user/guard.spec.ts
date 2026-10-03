import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Guard",
  package: "user",
  route: "/e2e-harness/user",
  testId: "ta-guard",
  render: "attached",
});
