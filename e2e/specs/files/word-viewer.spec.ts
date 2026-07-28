import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Word viewer",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-word-viewer",
  render: "attached",
});
