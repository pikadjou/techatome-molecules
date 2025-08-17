import { Component } from '@angular/core';

import { SwitchCasesSubTypeChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
selector: 'ta-switch-cases-sub-type-changed',
  templateUrl: './switch-cases-sub-type-changed.component.html',
  styleUrls: ['./switch-cases-sub-type-changed.component.scss'],,
  standalone: true,
})
export class SwitchCasesSubTypeChangedComponent extends SwitchCaseBaseComponent<SwitchCasesSubTypeChanged> {}
