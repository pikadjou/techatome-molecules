import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';

export interface TabBarItem {
  /** Identifiant remonté par `(select)`. */
  key: string;
  /** Clé de traduction, ou texte déjà traduit. */
  label: string;
  icon?: string;
  /** Compteur en pastille ; `null` le masque. */
  count?: number | string | null;
  disabled?: boolean;
}

/** `underline` : onglets de section ; `pill` : filtres capsulés. */
export type TabBarVariant = 'underline' | 'pill';

@Component({
  selector: 'ta-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [FontIconComponent, NgClass, TranslateModule],
})
export class TabBarComponent {
  active = input<string | null>(null);

  items = input.required<TabBarItem[]>();

  variant = input<TabBarVariant>('underline');

  select = output<string>();

  public hasCount(item: TabBarItem): boolean {
    return item.count !== undefined && item.count !== null;
  }

  public isActive(item: TabBarItem): boolean {
    return item.key === this.active();
  }

  public trigger(item: TabBarItem): void {
    if (item.disabled) return;
    this.select.emit(item.key);
  }
}
