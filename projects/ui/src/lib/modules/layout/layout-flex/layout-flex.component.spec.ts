import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LayoutFlexComponent } from './layout-flex.component';

describe('LayoutFlexComponent', () => {
  let component: LayoutFlexComponent;
  let fixture: ComponentFixture<LayoutFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LayoutFlexComponent,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default allowClose to false', () => {
    expect(component.allowClose()).toBe(false);
  });

  it('should initialize view with all three panels', () => {
    expect(component.view).toContain('left');
    expect(component.view).toContain('right');
    expect(component.view).toContain('center');
  });

  it('should return false for onlyOne when all panels are visible', () => {
    component.view = ['left', 'right', 'center'];
    expect(component.onlyOne()).toBe(false);
  });

  it('should return true for onlyOne when only one panel is visible', () => {
    component.view = ['left'];
    expect(component.onlyOne()).toBe(true);
  });

  it('should return true for has when panel is in view', () => {
    component.view = ['left', 'right'];
    expect(component.has('left')).toBe(true);
    expect(component.has('right')).toBe(true);
  });

  it('should return false for has when panel is not in view', () => {
    component.view = ['left'];
    expect(component.has('right')).toBe(false);
  });

  it('should add panel when toggling absent panel', () => {
    component.view = ['left'];
    component.toggle('right');
    expect(component.has('right')).toBe(true);
  });

  it('should remove panel when toggling present panel', () => {
    component.view = ['left', 'right'];
    component.toggle('right');
    expect(component.has('right')).toBe(false);
  });

  it('should return classic state when not onlyOne', () => {
    component.view = ['left', 'right', 'center'];
    expect(component.state('left')).toBe('classic');
  });

  it('should return disabled state for visible panel when onlyOne', () => {
    component.view = ['left'];
    expect(component.state('left')).toBe('disabled');
  });

  it('should return classic state for hidden panel when onlyOne', () => {
    component.view = ['left'];
    expect(component.state('right')).toBe('classic');
  });
});
