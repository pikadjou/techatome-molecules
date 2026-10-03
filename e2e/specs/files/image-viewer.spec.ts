import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Image viewer",
  package: "files-basic",
  route: "/e2e-harness/files",
  testId: "ta-image-viewer",
});
