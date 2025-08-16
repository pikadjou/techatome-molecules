import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

@Component({
  selector: 'ta-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  @Input()
  visible: boolean = false;

  @Input()
  isRelative: boolean = false;

  @Input()
  size: CamSizes = 'md';
}
