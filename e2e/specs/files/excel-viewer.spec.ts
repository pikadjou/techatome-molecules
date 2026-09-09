import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Excel viewer",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-excel-viewer",
  render: "attached",
});
