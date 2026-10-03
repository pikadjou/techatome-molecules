import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Filters tag",
  package: "core",
  route: "/e2e-harness/core",
  testId: "ta-filters-tag",
  render: "attached",
});
