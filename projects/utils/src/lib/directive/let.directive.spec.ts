import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetDirective } from './let.directive';

@Component({
  standalone: true,
  imports: [LetDirective],
  template: `
    <ng-container *ngLet="value() as val">
      <span class="output">{{ val }}</span>
    </ng-container>
  `,
})
class TestHostComponent {
  value = signal<string>('Hello');
}

describe('LetDirective', () => {
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

  it('should render the value in the template', () => {
    const span = fixture.nativeElement.querySelector('.output');
    expect(span.textContent.trim()).toBe('Hello');
  });

  it('should have a static template context guard', () => {
    expect(LetDirective.ngTemplateContextGuard).toBeDefined();
  });

  it('should return true from template context guard', () => {
    const result = LetDirective.ngTemplateContextGuard({} as any, {} as any);
    expect(result).toBe(true);
  });
});
