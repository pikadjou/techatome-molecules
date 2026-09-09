import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaTestIdDirective } from "./test-id.directive";

@Component({
  standalone: true,
  imports: [TaTestIdDirective],
  template: `<button taTestId="ta-button">Click</button>`,
})
class TestHostComponent {}

describe("TaTestIdDirective", () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it("expose data-testid", () => {
    const button = fixture.nativeElement.querySelector("button");
    expect(button.getAttribute("data-testid")).toBe("ta-button");
  });
});
