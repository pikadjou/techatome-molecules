import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { SwitchCasesToDoAdded } from '../../../../../services/dto/switch-cases';
import { SwitchCaseBaseComponent } from '../switch-case-base/switch-case-base.component';

@Component({
selector: 'ta-switch-cases-to-do-added',
  templateUrl: './switch-cases-to-do-added.component.html',
  styleUrls: ['./switch-cases-to-do-added.component.scss'],,
  standalone: true,
  imports: [NgIf],
})
export class SwitchCasesToDoAddedComponent extends SwitchCaseBaseComponent<SwitchCasesToDoAdded> {}
