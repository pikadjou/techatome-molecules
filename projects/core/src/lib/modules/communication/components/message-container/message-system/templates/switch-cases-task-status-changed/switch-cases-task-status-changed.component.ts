import { Component } from '@angular/core';

import { SwitchCasesTaskStatusChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'cam-switch-cases-task-status-changed',
  templateUrl: './switch-cases-task-status-changed.component.html',
  styleUrls: ['./switch-cases-task-status-changed.component.scss'],
})
export class SwitchCasesTaskStatusChangedComponent extends SwitchCaseBaseComponent<SwitchCasesTaskStatusChanged> {}
