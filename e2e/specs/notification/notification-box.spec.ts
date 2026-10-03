import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Notification box",
  package: "notification",
  route: "/e2e-harness/notification",
  testId: "ta-notification-box",
  render: "attached",
});
