import { Component, Input } from '@angular/core';

@Component({
selector: 'ta-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
})
export class ProgressBarComponent {
  @Input() current!: number;
  @Input() max!: number;
}
