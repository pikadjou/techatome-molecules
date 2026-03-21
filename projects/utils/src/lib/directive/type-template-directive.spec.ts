import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedTemplateDirective } from './type-template-directive';

interface TestContext {
  name: string;
}

@Component({
  standalone: true,
  imports: [TypedTemplateDirective],
  template: `
    <ng-template [typedTemplate]="typeToken" let-item>
      <span>{{ item.name }}</span>
    </ng-template>
  `,
})
class TestHostComponent {
  typeToken!: TestContext;
}

describe('TypedTemplateDirective', () => {
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

  it('should have a static template context guard', () => {
    expect(TypedTemplateDirective.ngTemplateContextGuard).toBeDefined();
  });

  it('should return true from template context guard', () => {
    const result = TypedTemplateDirective.ngTemplateContextGuard(
      {} as any,
      {} as any
    );
    expect(result).toBe(true);
  });
});
