import { Component, Input } from '@angular/core';

@Component({
  selector: 'cam-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
})
export class LayoutContentComponent {
  @Input()
  autoHeight: boolean = false;

  constructor() {}
}
