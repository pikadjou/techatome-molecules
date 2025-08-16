import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

@Component({
  selector: 'ta-department-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
})
export class DepartmentProfessionsComponent {
  /**
   * List of professions to display
   */
  @Input()
  professions!: string[];

  /**
   * font-size
   */
  @Input()
  fontSize: CamSizes = 'xs';

  @Input() maxVisible?: number;

  get visibleProfessions() {
    if (this.maxVisible) {
      return this.professions.slice(0, this.maxVisible);
    }
    return this.professions;
  }

  constructor() {}
}
