import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Files preview modal",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-files-preview-modal",
  render: "attached",
});
