import { Component } from '@angular/core';

import { SwitchCasesTaskMerged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'ta-switch-cases-task-merged',
  templateUrl: './switch-cases-task-merged.component.html',
  styleUrls: ['./switch-cases-task-merged.component.scss'],
})
export class SwitchCasesTaskMergedComponent extends SwitchCaseBaseComponent<SwitchCasesTaskMerged> {}
