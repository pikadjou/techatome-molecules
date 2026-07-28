import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Files list",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-files-list",
  render: "attached",
});
