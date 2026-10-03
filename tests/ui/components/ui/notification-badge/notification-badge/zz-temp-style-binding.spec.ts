import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NotificationBadgeComponent } from "@lib/ui/components/ui/notification-badge/notification-badge/notification-badge.component";

@Component({
  standalone: true,
  selector: "app-zz-temp-host",
  imports: [NotificationBadgeComponent],
  template: `<ta-notification-badge [number]="1" [style]="'brand-500'"></ta-notification-badge>`,
})
class ZzTempHost {}

describe("zz temp style binding investigation", () => {
  let fixture: ComponentFixture<ZzTempHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ZzTempHost] }).compileComponents();
    fixture = TestBed.createComponent(ZzTempHost);
    fixture.detectChanges();
  });

  it("logs whether [style] binds to the component input", () => {
    const badgeEl: HTMLElement = fixture.nativeElement.querySelector("ta-notification-badge");
    const inner: HTMLElement = badgeEl.querySelector(".badge-container")!;
    // eslint-disable-next-line no-console
    console.log("ZZTEMP host style attr:", JSON.stringify(badgeEl.getAttribute("style")));
    // eslint-disable-next-line no-console
    console.log("ZZTEMP inner classList:", inner.className);
    expect(true).toBeTrue();
  });
});
