import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Files preview",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-files-preview",
  render: "attached",
});
