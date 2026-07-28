import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Swiper",
  package: "ui",
  route: "/e2e-harness/ui-container",
  testId: "ta-swiper",
  render: "attached",
});
