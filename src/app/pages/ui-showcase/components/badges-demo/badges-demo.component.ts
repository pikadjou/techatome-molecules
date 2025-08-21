import { Component } from '@angular/core';
import { BadgeComponent, TitleComponent } from '@ta/ui';

@Component({
  selector: 'app-badges-demo',
  standalone: true,
  imports: [BadgeComponent, TitleComponent],
  templateUrl: './badges-demo.component.html',
  styleUrl: './badges-demo.component.scss'
})
export class BadgesDemoComponent { }