import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnRenderDirective } from './on-render.directive';

@Component({
  standalone: true,
  imports: [OnRenderDirective],
  template: `<div TaOnRender [onRender]="renderTrigger()" (rendered)="onRendered()">Content</div>`,
})
class TestHostComponent {
  renderTrigger = signal(false);
  renderedCount = 0;

  onRendered() {
    this.renderedCount++;
  }
}

describe('OnRenderDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should emit rendered when onRender value changes', () => {
    component.renderTrigger.set(true);
    fixture.detectChanges();
    expect(component.renderedCount).toBe(1);
  });

  it('should emit rendered again on subsequent changes', () => {
    component.renderTrigger.set(true);
    fixture.detectChanges();

    component.renderTrigger.set(false);
    fixture.detectChanges();

    expect(component.renderedCount).toBe(2);
  });
});
