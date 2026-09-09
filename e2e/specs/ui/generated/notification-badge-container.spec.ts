import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Notification badge container",
  package: "ui",
  route: "/e2e-harness/ui-notification",
  testId: "ta-notification-badge-container",
  render: "attached",
});
