import { Component } from '@angular/core';

import { SwitchCasesTypeChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'ta-switch-cases-type-changed',
  templateUrl: './switch-cases-type-changed.component.html',
  styleUrls: ['./switch-cases-type-changed.component.scss'],
})
export class SwitchCasesTypeChangedComponent extends SwitchCaseBaseComponent<SwitchCasesTypeChanged> {}
