import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPropagationDirective } from './stop-propagation.directive';

@Component({
  standalone: true,
  imports: [StopPropagationDirective],
  template: `<button appStopPropagation>Click me</button>`,
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [StopPropagationDirective],
  template: `<button appStopPropagation [stopPropagationActivation]="false">Click me</button>`,
})
class TestHostDeactivatedComponent {}

describe('StopPropagationDirective', () => {
  describe('with default activation', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestHostComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(TestHostComponent);
      fixture.detectChanges();
    });

    it('should create an instance', () => {
      expect(fixture).toBeTruthy();
    });

    it('should stop propagation on click', () => {
      const button = fixture.nativeElement.querySelector('button');
      const event = new Event('click', { bubbles: true });
      spyOn(event, 'stopPropagation');
      spyOn(event, 'preventDefault');

      button.dispatchEvent(event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('with deactivated propagation', () => {
    let fixture: ComponentFixture<TestHostDeactivatedComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestHostDeactivatedComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(TestHostDeactivatedComponent);
      fixture.detectChanges();
    });

    it('should not stop propagation when deactivated', () => {
      const button = fixture.nativeElement.querySelector('button');
      const event = new Event('click', { bubbles: true });
      spyOn(event, 'stopPropagation');

      button.dispatchEvent(event);

      expect(event.stopPropagation).not.toHaveBeenCalled();
    });
  });
});
