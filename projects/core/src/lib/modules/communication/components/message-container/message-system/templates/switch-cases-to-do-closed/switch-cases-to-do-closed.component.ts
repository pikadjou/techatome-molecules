import { Component } from '@angular/core';

import { SwitchCasesToDoClosed } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'ta-switch-cases-to-do-closed',
  templateUrl: './switch-cases-to-do-closed.component.html',
  styleUrls: ['./switch-cases-to-do-closed.component.scss'],
})
export class SwitchCasesToDoClosedComponent extends SwitchCaseBaseComponent<SwitchCasesToDoClosed> {}
