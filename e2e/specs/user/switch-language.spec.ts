import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Switch language",
  package: "user",
  route: "/e2e-harness/user",
  testId: "ta-switch-language",
  render: "attached",
});
