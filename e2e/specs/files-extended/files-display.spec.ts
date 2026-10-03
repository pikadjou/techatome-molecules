import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Files display",
  package: "files-extended",
  route: "/e2e-harness/files-extended",
  testId: "ta-files-display",
  render: "attached",
});
