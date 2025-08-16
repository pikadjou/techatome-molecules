import { Component, Input } from '@angular/core';

import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';

@Component({
  selector: 'ta-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  menu!: Menu<MenuIcon>;
}
