import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Main menu",
  package: "menu",
  route: "/e2e-harness/menu",
  testId: "ta-main-menu",
  render: "attached",
});
