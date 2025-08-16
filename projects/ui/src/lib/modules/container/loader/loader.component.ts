import { Component, Input } from '@angular/core';

import {
  Placeholder,
  PlaceholderConfig,
  getPlaceholderConfig,
} from '../placeholder/config';

@Component({
  selector: 'cam-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
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
