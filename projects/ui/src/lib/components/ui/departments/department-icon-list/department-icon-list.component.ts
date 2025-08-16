import { Component, Input } from '@angular/core';

import { Department } from '../interface';

@Component({
  selector: 'cam-department-icon-list',
  templateUrl: './department-icon-list.component.html',
  styleUrls: ['./department-icon-list.component.scss'],
})
export class DepartmentIconListComponent {
  /**
   * List of departments object to display
   */
  @Input()
  public departments!: Department[];

  @Input()
  public withName: boolean = false;
}
