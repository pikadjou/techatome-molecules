import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Filter container",
  package: "core",
  route: "/e2e-harness/core",
  testId: "ta-filter-container",
  render: "attached",
});
