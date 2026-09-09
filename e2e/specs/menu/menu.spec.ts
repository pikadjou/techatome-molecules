import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Menu",
  package: "menu",
  route: "/e2e-harness/menu",
  testId: "ta-menu",
  render: "attached",
});
