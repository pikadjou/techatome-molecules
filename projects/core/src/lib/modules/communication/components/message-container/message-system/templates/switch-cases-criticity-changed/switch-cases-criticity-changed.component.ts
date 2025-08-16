import { Component } from '@angular/core';

import { SwitchCasesCriticityChanged } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'cam-switch-cases-criticity-changed',
  templateUrl: './switch-cases-criticity-changed.component.html',
  styleUrls: ['./switch-cases-criticity-changed.component.scss'],
})
export class SwitchCasesCriticityChangedComponent extends SwitchCaseBaseComponent<SwitchCasesCriticityChanged> {}
