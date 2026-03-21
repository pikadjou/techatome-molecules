import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ProgressCircleComponent } from './progress-circle.component';

describe('ProgressCircleComponent', () => {
  let component: ProgressCircleComponent;
  let fixture: ComponentFixture<ProgressCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ProgressCircleComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default progress to 50', () => {
    expect(component.progress()).toBe(50);
  });

  it('should compute circumference correctly', () => {
    expect(component.circumference).toBeCloseTo(2 * Math.PI * 45);
  });

  it('should return true for canDisplayText with valid number', () => {
    expect(component.canDisplayText).toBeTrue();
  });

  it('should return false for canDisplayText with NaN', () => {
    fixture.componentRef.setInput('progress', NaN);
    fixture.detectChanges();
    expect(component.canDisplayText).toBeFalse();
  });

  it('should default upTitle to undefined', () => {
    expect(component.upTitle()).toBeUndefined();
  });

  it('should default downTitle to undefined', () => {
    expect(component.downTitle()).toBeUndefined();
  });
});
