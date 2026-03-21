import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ProgressBarDataComponent } from './progress-bar-data.component';

describe('ProgressBarDataComponent', () => {
  let component: ProgressBarDataComponent;
  let fixture: ComponentFixture<ProgressBarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ProgressBarDataComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProgressBarDataComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Storage');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return progress value with current and max', () => {
    fixture.componentRef.setInput('current', 30);
    fixture.componentRef.setInput('max', 100);
    fixture.detectChanges();
    expect(component.progressValue).toBe('30/100');
  });

  it('should return current value when max is undefined', () => {
    fixture.componentRef.setInput('current', 30);
    fixture.detectChanges();
    expect(component.progressValue).toBe('30');
  });

  it('should return max value when current is undefined', () => {
    fixture.componentRef.setInput('max', 100);
    fixture.detectChanges();
    expect(component.progressValue).toBe('100');
  });

  it('should return empty string when both are undefined', () => {
    expect(component.progressValue).toBe('');
  });

  it('should handle zero values for current and max', () => {
    fixture.componentRef.setInput('current', 0);
    fixture.componentRef.setInput('max', 0);
    fixture.detectChanges();
    expect(component.progressValue).toBe('0/0');
  });

  it('should default titleIcon to undefined', () => {
    expect(component.titleIcon()).toBeUndefined();
  });

  it('should default rightText to undefined', () => {
    expect(component.rightText()).toBeUndefined();
  });
});
