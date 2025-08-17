import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { SwitchCasesSubTaskCreated } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
selector: 'ta-switch-cases-sub-task-created',
  templateUrl: './switch-cases-sub-task-created.component.html',
  styleUrls: ['./switch-cases-sub-task-created.component.scss'],,
  standalone: true,
  imports: [NgIf],
})
export class SwitchCasesSubTaskCreatedComponent extends SwitchCaseBaseComponent<SwitchCasesSubTaskCreated> {}
