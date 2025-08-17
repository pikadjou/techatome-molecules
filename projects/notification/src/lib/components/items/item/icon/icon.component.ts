import { ENotificationLevel } from '../../../../services/dto/level';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';

    FontIconComponent
  ],
})
export class IconComponent {
  @Input()
  level!: ENotificationLevel;

  @Input()
  icon!: string;
}
