import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "My account",
  package: "user",
  route: "/e2e-harness/user",
  testId: "ta-my-account",
  render: "attached",
});
