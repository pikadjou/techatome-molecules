import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Search displayer",
  package: "core",
  route: "/e2e-harness/core",
  testId: "ta-search-displayer",
  render: "attached",
});
