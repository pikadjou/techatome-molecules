import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSideCtaComponent } from './layout-side-cta.component';

describe('LayoutSideCtaComponent', () => {
  let component: LayoutSideCtaComponent;
  let fixture: ComponentFixture<LayoutSideCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSideCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default background to true', () => {
    expect(component.background()).toBe(true);
  });

  it('should accept background false', () => {
    fixture.componentRef.setInput('background', false);
    fixture.detectChanges();
    expect(component.background()).toBe(false);
  });
});
