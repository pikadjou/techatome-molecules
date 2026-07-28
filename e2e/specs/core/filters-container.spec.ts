import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Filters container",
  package: "core",
  route: "/e2e-harness/core",
  testId: "ta-filters-container",
  render: "attached",
});
