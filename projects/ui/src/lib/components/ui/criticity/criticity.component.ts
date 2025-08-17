import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CamTranslationUI } from '../translation.service';
import { BadgeComponent } from '../badge/badge.component';

export enum CriticityStatus {
  Unknown = 0,
  P1 = 1,
  P2 = 2,
  P3 = 3,
}
export const criticityLabel = (criticity: CriticityStatus) => `ui.criticity.${criticity}`;

@Component({
selector: 'ta-criticity',
  templateUrl: './criticity.component.html',
  styleUrls: ['./criticity.component.scss'],
  standalone: true,
  imports: [TranslateModule, BadgeComponent],
})
export class CriticityComponent {
  @Input()
  criticity!: number | CriticityStatus;

  constructor() {
    CamTranslationUI.getInstance();
  }
  public label() {
    return criticityLabel(this.criticity);
  }
  public type() {
    switch (this.criticity) {
      case CriticityStatus.P1:
        return 'danger';
      case CriticityStatus.P2:
        return 'warning';
      case CriticityStatus.P3:
        return 'success';
      default:
        return 'primary';
    }
  }
}
