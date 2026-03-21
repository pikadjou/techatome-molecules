import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ErrorComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default message to empty string', () => {
    expect(component.message()).toBe('');
  });

  it('should default code to 200', () => {
    expect(component.code()).toBe(200);
  });

  it('should accept a custom message', () => {
    fixture.componentRef.setInput('message', 'Something went wrong');
    fixture.detectChanges();
    expect(component.message()).toBe('Something went wrong');
  });

  it('should accept a custom code', () => {
    fixture.componentRef.setInput('code', 500);
    fixture.detectChanges();
    expect(component.code()).toBe(500);
  });
});
