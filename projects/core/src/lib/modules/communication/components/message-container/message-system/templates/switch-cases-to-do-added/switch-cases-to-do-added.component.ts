import { Component } from '@angular/core';

import { SwitchCasesToDoAdded } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
  selector: 'cam-switch-cases-to-do-added',
  templateUrl: './switch-cases-to-do-added.component.html',
  styleUrls: ['./switch-cases-to-do-added.component.scss'],
})
export class SwitchCasesToDoAddedComponent extends SwitchCaseBaseComponent<SwitchCasesToDoAdded> {}
