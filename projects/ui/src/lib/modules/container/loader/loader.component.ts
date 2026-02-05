import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TaSizes } from '@ta/styles';
import { TranslatePipe } from '@ta/translation';

import { TaTranslationUI } from '../../../translation.service';
import { Placeholder, PlaceholderConfig, getPlaceholderConfig } from '../placeholder/config';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

export type LoaderSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ta-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [NgClass, MatProgressSpinnerModule, PlaceholderComponent, TranslatePipe],
})
export class LoaderComponent {
  isLoading = input<boolean>(true);

  skeleton = input<PlaceholderConfig | null>(null);

  size = input<TaSizes>('lg');

  text = input<string>('ui.container.loading.light-message');

  constructor() {
    TaTranslationUI.getInstance();
  }
  public getPlaceholder(): Placeholder {
    return getPlaceholderConfig(this.skeleton() || 'default');
  }
}
