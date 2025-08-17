import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ENotificationCode, getTypeClass } from '../../../enum';

@Component({
selector: 'ta-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ToastComponent {
  @Input()
  code: ENotificationCode = ENotificationCode.information;

  readonly getTypeClass = getTypeClass;
}
