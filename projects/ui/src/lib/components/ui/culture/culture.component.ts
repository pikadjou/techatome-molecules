import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Culture } from '@ta/utils';

@Component({
selector: 'ta-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class CultureComponent {
  @Input()
  cultures!: Culture[];
}
