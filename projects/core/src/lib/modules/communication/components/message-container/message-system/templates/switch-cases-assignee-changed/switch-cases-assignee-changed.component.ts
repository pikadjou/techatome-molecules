import { Component } from '@angular/core';

import { SwitchCasesAssigneeChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'cam-switch-cases-assignee-changed',
  templateUrl: './switch-cases-assignee-changed.component.html',
  styleUrls: ['./switch-cases-assignee-changed.component.scss'],
})
export class SwitchCasesAssigneeChangedComponent extends SwitchCaseBaseComponent<SwitchCasesAssigneeChanged> {}
