import { CommonModule } from '@angular/common';
import { Component, Inject, Input, Optional, TemplateRef } from '@angular/core';

import { MENU_MAX_HEIGHT, MENU_TEMPLATE } from '../overlay.service';

@Component({
  selector: 'ta-default-panel',
  templateUrl: './default-panel.component.html',
  styleUrls: ['./default-panel.component.scss'],
  standalone: true,
  host: {
    style: 'display: block; width: 100%;',
  },
  imports: [CommonModule],
})
export class CamDefaultPanelComponent {
  @Input() template?: TemplateRef<any>;

  constructor(
    @Optional() @Inject(MENU_TEMPLATE) public templateRef: TemplateRef<any>,
    @Optional() @Inject(MENU_MAX_HEIGHT) public maxHeight: number
  ) {}
}
