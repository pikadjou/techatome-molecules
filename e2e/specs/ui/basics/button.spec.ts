import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Button",
  package: "ui",
  route: "/e2e-harness/ui-button",
  testId: "ta-button",
  interactions: [{ kind: "click", assert: "stays-visible" }],
});
