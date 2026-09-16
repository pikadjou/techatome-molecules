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
  /** Compteur affiché en pastille à droite du libellé. `null` le masque. */
  count?: number | string | null;
  disabled?: boolean;
}

/**
 * `underline` : onglets soulignés, pour naviguer entre les sections d'une page.
 * `pill` : filtres capsulés, pour restreindre une liste sans changer de section.
 */
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
