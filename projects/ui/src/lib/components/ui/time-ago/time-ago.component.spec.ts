import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TimeAgoComponent } from './time-ago.component';

describe('TimeAgoComponent', () => {
  let component: TimeAgoComponent;
  let fixture: ComponentFixture<TimeAgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TimeAgoComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TimeAgoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('date', new Date().toISOString());
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return today key for current date', () => {
    fixture.componentRef.setInput('date', new Date().toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.today');
  });

  it('should return yesterday key for yesterday date', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    fixture.componentRef.setInput('date', yesterday.toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.yesterday');
  });

  it('should return tomorrow key for tomorrow date', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fixture.componentRef.setInput('date', tomorrow.toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.tomorrow');
  });

  it('should return above key for 2 days ago', () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    fixture.componentRef.setInput('date', twoDaysAgo.toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.above');
  });

  it('should return ahead key for 2 days from now', () => {
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(twoDaysAhead.getDate() + 2);
    fixture.componentRef.setInput('date', twoDaysAhead.toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.ahead');
  });

  it('should return to-date key for far dates', () => {
    const farDate = new Date();
    farDate.setDate(farDate.getDate() - 30);
    fixture.componentRef.setInput('date', farDate.toISOString());
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.to-date');
  });

  it('should return to-date-with-hours key when withHours is true for far dates', () => {
    const farDate = new Date();
    farDate.setDate(farDate.getDate() - 30);
    fixture.componentRef.setInput('date', farDate.toISOString());
    fixture.componentRef.setInput('withHours', true);
    fixture.detectChanges();
    expect(component.key()).toBe('ui.common.to-date-with-hours');
  });

  it('should compute absDays correctly', () => {
    fixture.componentRef.setInput('date', new Date().toISOString());
    fixture.detectChanges();
    expect(component.absDays).toBe(0);
  });
});
