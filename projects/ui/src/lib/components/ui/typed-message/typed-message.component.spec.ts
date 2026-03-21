import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TypedMessageComponent } from './typed-message.component';

describe('TypedMessageComponent', () => {
  let component: TypedMessageComponent;
  let fixture: ComponentFixture<TypedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TypedMessageComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TypedMessageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('text', 'Test message');
    fixture.componentRef.setInput('type', 'info');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return help_outline icon for info type', () => {
    expect(component.icon).toBe('help_outline');
  });

  it('should return error_outline icon for danger type', () => {
    fixture.componentRef.setInput('type', 'danger');
    fixture.detectChanges();
    expect(component.icon).toBe('error_outline');
  });

  it('should return check_circle_outline icon for success type', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.detectChanges();
    expect(component.icon).toBe('check_circle_outline');
  });

  it('should return warning_amber icon for warning type', () => {
    fixture.componentRef.setInput('type', 'warning');
    fixture.detectChanges();
    expect(component.icon).toBe('warning_amber');
  });

  it('should return empty string for unknown type', () => {
    fixture.componentRef.setInput('type', 'unknown');
    fixture.detectChanges();
    expect(component.icon).toBe('');
  });
});
