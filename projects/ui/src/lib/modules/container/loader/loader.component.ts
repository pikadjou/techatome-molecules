import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Placeholder, PlaceholderConfig, getPlaceholderConfig } from '../placeholder/config';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
selector: 'ta-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule, PlaceholderComponent],
})
export class LoaderComponent {
  @Input()
  isLoading = false;

  @Input()
  skeleton: PlaceholderConfig | null = null;

  constructor() {
    this.isLoading = true;
  }

  public getPlaceholder(): Placeholder {
    return getPlaceholderConfig(this.skeleton || 'default');
  }
}
