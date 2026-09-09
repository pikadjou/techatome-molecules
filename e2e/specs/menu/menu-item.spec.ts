import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Menu item",
  package: "menu",
  route: "/e2e-harness/menu",
  testId: "ta-menu-item",
  render: "attached",
});
