import { Component, Input } from '@angular/core';

@Component({
  selector: 'cam-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() current!: number;
  @Input() max!: number;
}
