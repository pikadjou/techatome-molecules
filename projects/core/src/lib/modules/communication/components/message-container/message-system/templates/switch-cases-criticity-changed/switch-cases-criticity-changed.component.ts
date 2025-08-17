import { Component } from '@angular/core';

import { SwitchCasesCriticityChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
selector: 'ta-switch-cases-criticity-changed',
  templateUrl: './switch-cases-criticity-changed.component.html',
  styleUrls: ['./switch-cases-criticity-changed.component.scss'],,
  standalone: true,
})
export class SwitchCasesCriticityChangedComponent extends SwitchCaseBaseComponent<SwitchCasesCriticityChanged> {}
