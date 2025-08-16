import { Component } from '@angular/core';

import { CommunicationTemplateAbstractChoiceComponent } from '../abstract/choice.abstract';

@Component({
  selector: 'cam-communication-template-choice-mobile',
  templateUrl: './choice-mobile.component.html',
  styleUrls: ['./choice-mobile.component.scss'],
})
export class CommunicationTemplateChoiceMobileComponent extends CommunicationTemplateAbstractChoiceComponent {}
