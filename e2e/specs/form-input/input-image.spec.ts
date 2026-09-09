import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Image",
  package: "form-input",
  route: "/e2e-harness/form-inputs-media",
  testId: "ta-input-image",
  render: "attached",
});
