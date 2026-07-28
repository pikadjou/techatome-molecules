import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Notification inline",
  package: "notification",
  route: "/e2e-harness/notification",
  testId: "ta-notification-inline",
  render: "attached",
});
