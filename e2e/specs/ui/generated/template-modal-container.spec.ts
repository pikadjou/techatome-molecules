import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Template modal container",
  package: "ui",
  route: "/e2e-harness/ui-overlays",
  testId: "ta-template-modal-container",
  render: "attached",
});
