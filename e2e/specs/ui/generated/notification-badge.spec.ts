import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Notification badge",
  package: "ui",
  route: "/e2e-harness/ui-notification",
  testId: "ta-notification-badge",
  render: "attached",
});
