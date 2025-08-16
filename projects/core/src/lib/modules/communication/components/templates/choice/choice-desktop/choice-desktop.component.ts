import { Component } from '@angular/core';

import { Template } from '../../../../services/dto/template';
import { CommunicationTemplateAbstractChoiceComponent } from '../abstract/choice.abstract';

@Component({
  selector: 'cam-communication-template-choice-desktop',
  templateUrl: './choice-desktop.component.html',
  styleUrls: ['./choice-desktop.component.scss'],
})
export class CommunicationTemplateChoiceDesktopComponent extends CommunicationTemplateAbstractChoiceComponent {
  public chose(template: Template) {
    this.select(template.variants[0]);
  }
}
