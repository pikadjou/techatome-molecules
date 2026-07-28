import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Login card",
  package: "user",
  route: "/e2e-harness/user",
  testId: "ta-login-card",
});
