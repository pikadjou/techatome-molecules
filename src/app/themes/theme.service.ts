import { Injectable, signal } from '@angular/core';

import { ThemeConfig, THEMES } from './theme.config';

const THEME_LINK_ID = 'ta-theme-link';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly themes = THEMES;
  readonly activeTheme = signal<ThemeConfig>(THEMES[0]);

  applyTheme(theme: ThemeConfig): void {
    let link = document.getElementById(THEME_LINK_ID) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');
      link.id = THEME_LINK_ID;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    link.href = theme.cssFile;
    this.activeTheme.set(theme);
  }
}
