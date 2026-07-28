import { testComponent } from "@ta/testing/e2e";

testComponent({
  name: "Swiper light",
  package: "ui",
  route: "/e2e-harness/ui-container",
  testId: "ta-swiper-light",
  render: "attached",
});
