import { NgIf, AsyncPipe } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component } from '@angular/core';

import { CommunicationTemplateAbstractChoiceComponent } from '../abstract/choice.abstract';

@Component({
selector: 'ta-communication-template-choice-mobile',
  templateUrl: './choice-mobile.component.html',
  styleUrls: ['./choice-mobile.component.scss'],,
  standalone: true,
  imports: [NgIf, AsyncPipe, FontIconComponent],
})
export class CommunicationTemplateChoiceMobileComponent extends CommunicationTemplateAbstractChoiceComponent {}
