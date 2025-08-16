import { Component } from '@angular/core';

import { SwitchCasesTeamChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'ta-switch-cases-team-changed',
  templateUrl: './switch-cases-team-changed.component.html',
  styleUrls: ['./switch-cases-team-changed.component.scss'],
})
export class SwitchCasesTeamChangedComponent extends SwitchCaseBaseComponent<SwitchCasesTeamChanged> {}
