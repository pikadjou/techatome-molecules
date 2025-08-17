import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { SwitchCasesTaskStatusChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
selector: 'ta-switch-cases-task-status-changed',
  templateUrl: './switch-cases-task-status-changed.component.html',
  styleUrls: ['./switch-cases-task-status-changed.component.scss'],,
  standalone: true,
  imports: [NgIf],
})
export class SwitchCasesTaskStatusChangedComponent extends SwitchCaseBaseComponent<SwitchCasesTaskStatusChanged> {}
