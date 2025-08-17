import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaSizes } from '@ta/styles';

import { BulletComponent } from '../bullet/bullet.component';

@Component({
  selector: 'ta-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  standalone: true,
  imports: [NgIf, BulletComponent],
})
export class NewComponent {
  @Input()
  visible: boolean = false;

  @Input()
  isRelative: boolean = false;

  @Input()
  size: TaSizes = 'md';
}
