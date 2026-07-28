import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Navigation",
  package: "menu",
  route: "/e2e-harness/menu",
  testId: "ta-menu-navigation",
  render: "attached",
});
