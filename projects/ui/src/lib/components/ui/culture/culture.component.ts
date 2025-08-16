import { Component, Input } from '@angular/core';

import { Culture } from '@ta/utils';

@Component({
  selector: 'ta-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
})
export class CultureComponent {
  @Input()
  cultures!: Culture[];
}
