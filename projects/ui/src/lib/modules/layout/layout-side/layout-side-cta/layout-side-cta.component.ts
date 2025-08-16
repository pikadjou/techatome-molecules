import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-layout-side-cta',
  templateUrl: './layout-side-cta.component.html',
  styleUrls: ['./layout-side-cta.component.scss'],
})
export class LayoutSideCtaComponent {
  @Input()
  background: boolean = true;

  constructor() {}
}
