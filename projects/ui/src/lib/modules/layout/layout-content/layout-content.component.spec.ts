import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContentComponent } from './layout-content.component';

describe('LayoutContentComponent', () => {
  let component: LayoutContentComponent;
  let fixture: ComponentFixture<LayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default autoHeight to false', () => {
    expect(component.autoHeight()).toBe(false);
  });

  it('should accept autoHeight true', () => {
    fixture.componentRef.setInput('autoHeight', true);
    fixture.detectChanges();
    expect(component.autoHeight()).toBe(true);
  });
});
