import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { DurationComponent } from './duration.component';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DurationComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should compute interval on init with valid dates', () => {
    fixture.componentRef.setInput('startDate', '2024-01-01');
    fixture.componentRef.setInput('endDate', '2024-01-10');
    fixture.detectChanges();
    expect(component.interval).toBeTruthy();
    expect(component.interval!.days).toBe(9);
  });

  it('should set interval to null for invalid dates', () => {
    fixture.componentRef.setInput('startDate', 'invalid');
    fixture.componentRef.setInput('endDate', 'invalid');
    fixture.detectChanges();
    expect(component.interval).toBeNull();
  });
});
