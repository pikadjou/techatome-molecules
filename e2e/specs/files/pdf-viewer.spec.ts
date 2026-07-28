import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Pdf viewer",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-pdf-viewer",
  render: "attached",
});
