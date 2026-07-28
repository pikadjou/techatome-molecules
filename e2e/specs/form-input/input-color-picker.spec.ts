import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Color picker",
  package: "form-input",
  route: "/e2e-harness/form-inputs",
  testId: "ta-input-color-picker",
  render: "attached",
});
