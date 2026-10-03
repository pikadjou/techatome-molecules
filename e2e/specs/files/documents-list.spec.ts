import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Documents list",
  package: "files-basic",
  route: "/e2e-harness/documents",
  testId: "ta-documents-list",
  render: "attached",
});
