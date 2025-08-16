import { Component, Input } from '@angular/core';

import { Department } from './interface';

@Component({
  selector: 'cam-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent {
  /**
   * List of departments object to display
   */
  @Input()
  departments!: Department[];

  /**
   * List of professions to display
   */
  @Input()
  professions!: string[];
}
