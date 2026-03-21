import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BooleanIconComponent } from './boolean-icon.component';

describe('BooleanIconComponent', () => {
  let component: BooleanIconComponent;
  let fixture: ComponentFixture<BooleanIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BooleanIconComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BooleanIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return task_alt icon for true value', () => {
    fixture.componentRef.setInput('value', true);
    fixture.detectChanges();
    expect(component.getIconName()).toBe('task_alt');
  });

  it('should return cancel icon for false value', () => {
    fixture.componentRef.setInput('value', false);
    fixture.detectChanges();
    expect(component.getIconName()).toBe('cancel');
  });

  it('should return success class for true value', () => {
    fixture.componentRef.setInput('value', true);
    fixture.detectChanges();
    expect(component.getClass()).toContain('boolean-icon-success');
  });

  it('should return error class for false value', () => {
    fixture.componentRef.setInput('value', false);
    fixture.detectChanges();
    expect(component.getClass()).toContain('boolean-icon-error');
  });

  it('should include size in class', () => {
    fixture.componentRef.setInput('value', true);
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.getClass()).toContain('lg');
  });

  it('should detect null value', () => {
    fixture.componentRef.setInput('value', null);
    fixture.detectChanges();
    expect(component.isNullValue()).toBeTrue();
  });

  it('should detect undefined value', () => {
    expect(component.isNullValue()).toBeTrue();
  });

  it('should not be null for boolean values', () => {
    fixture.componentRef.setInput('value', false);
    fixture.detectChanges();
    expect(component.isNullValue()).toBeFalse();
  });
});
