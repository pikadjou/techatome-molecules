import { NgFor, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { isSameDay, isSameMonth, isSameYear } from 'date-fns';

import { VisitEvent } from '../../types/visit-event';

@Component({
selector: 'ta-calendar-by-month',
  templateUrl: './calendar-by-month.component.html',
  styleUrls: ['./calendar-by-month.component.scss'],,
  standalone: true,
  imports: [NgFor, NgClass],
})
export class ByMonthComponent implements OnInit {
  /**
   * Date containing the month to view
   */
  @Input()
  viewDate: Date = new Date();

  /**
   * Events to display
   */
  @Input()
  events: CalendarEvent<VisitEvent>[] = [];

  /**
   * Event to indicate when the month viewed is changed
   */
  @Output()
  viewDateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  public selectedDate: Date | null = null;

  constructor() {}

  ngOnInit() {
    this.selectedDate = this.viewDate;
  }

  public isCurrentDate(day: { date: Date }): boolean {
    if (!this.selectedDate) {
      return false;
    }
    return (
      isSameDay(day.date, this.selectedDate) &&
      isSameMonth(day.date, this.selectedDate) &&
      isSameYear(day.date, this.selectedDate)
    );
  }

  public daySelected(data: { day: CalendarMonthViewDay }): void {
    this.viewDateChanged.emit(data.day.date);
  }
}
