import { Component, Input } from '@angular/core';

import { Department } from './interface';
import { DepartmentIconListComponent } from './department-icon-list/department-icon-list.component';
import { DepartmentProfessionsComponent } from './professions/professions.component';

@Component({
selector: 'ta-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  standalone: true,
  imports: [DepartmentIconListComponent, DepartmentProfessionsComponent],
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
