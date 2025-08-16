import { Component, Input } from '@angular/core';

import { Culture } from '@camelot/utils';

@Component({
  selector: 'cam-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
})
export class CultureComponent {
  @Input()
  cultures!: Culture[];
}
