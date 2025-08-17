import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaSizes } from '../../../../types/sizes';
import { BadgeComponent } from '../../badge/badge.component';

@Component({
selector: 'ta-department-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, BadgeComponent],
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
  fontSize: TaSizes = 'xs';

  @Input() maxVisible?: number;

  get visibleProfessions() {
    if (this.maxVisible) {
      return this.professions.slice(0, this.maxVisible);
    }
    return this.professions;
  }

  constructor() {}
}
