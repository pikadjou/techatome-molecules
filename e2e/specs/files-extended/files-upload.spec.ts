import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Files upload",
  package: "files-extended",
  route: "/e2e-harness/files-extended",
  testId: "ta-files-upload",
  render: "attached",
});
