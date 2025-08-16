import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'cam-calendar-by-day',
  templateUrl: './calendar-by-day.component.html',
  styleUrls: ['./calendar-by-day.component.scss'],
})
export class ByDayComponent implements OnInit {
  /**
   * Day to display
   */
  @Input()
  viewDate: Date = new Date();

  /**
   * Events to display
   */
  @Input()
  events: CalendarEvent[] = [];

  /**
   * Template to render
   */
  @Input()
  eventTemplate!: TemplateRef<any>;

  @Input()
  hourSegmentHeight: number = 130;

  /**
   * Event to force refreshing the content
   */
  @Input()
  refresh!: Subject<void>;

  ngOnInit(): void {
    console.log(this.events, this.viewDate, this.eventTemplate);
  }
}
