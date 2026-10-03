import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TrigramComponent } from '@ta/ui';

import { ComponentDemo } from '../../demo.types';

@Component({
  standalone: true,
  selector: 'app-ex-ta-trigram-values',
  imports: [TrigramComponent],
  template: `
    <ta-trigram value="AMB"></ta-trigram>
    <ta-trigram value="JD"></ta-trigram>
    <ta-trigram [value]="null"></ta-trigram>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTrigramValuesExample {}

@Component({
  standalone: true,
  selector: 'app-ex-ta-trigram-sizes',
  imports: [TrigramComponent],
  template: `
    <ta-trigram value="CB" [size]="24"></ta-trigram>
    <ta-trigram value="CB" [size]="35"></ta-trigram>
    <ta-trigram value="CB" [size]="60"></ta-trigram>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTrigramSizesExample {}

@Component({
  standalone: true,
  selector: 'app-ex-ta-trigram-tones',
  imports: [TrigramComponent],
  template: `
    <div class="tones">
      <ta-trigram value="CB" tone="brand" [size]="48"></ta-trigram>
      <ta-trigram value="CB" tone="highlight" [size]="48"></ta-trigram>
      <ta-trigram value="CB" tone="surface" [size]="48"></ta-trigram>
    </div>
    <div class="tones tones--dark">
      <ta-trigram value="CB" tone="invert" [size]="48"></ta-trigram>
    </div>
  `,
  styles: [
    `
      .tones {
        display: flex;
        gap: 12px;
        padding: 12px;
      }
      .tones--dark {
        margin-top: 8px;
        border-radius: 12px;
        background: #121e38;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTrigramTonesExample {}

export const DEMO: ComponentDemo = {
  id: 'ta-trigram',
  group: 'Affichage',
  summary: 'Pastille ronde affichant une courte chaîne, taille personnalisable en pixels.',
  examples: [
    {
      title: 'Valeurs',
      description:
        "`value` est affiché tel quel (`{{ this.value() }}`) : ce composant ne calcule aucune initiale à partir d'un nom — c'est `ta-user-logo.getTrigram()` qui prépare la chaîne de trois caractères avant de la lui passer. `value=null` masque tout le composant (`@if (this.value())`).",
      component: TaTrigramValuesExample,
    },
    {
      title: 'Tailles',
      description: '`size` (en pixels, 35 par défaut) fixe largeur, hauteur et taille de police (`size / 3`, arrondi).',
      component: TaTrigramSizesExample,
    },
    {
      title: 'Tons',
      layout: 'stack',
      description:
        "`brand` pour une pastille de marque, `highlight` quand elle se pose sur cette même marque, `surface` pour une liste sur carte claire. `invert` est le seul prévu pour un fond sombre : un simple voile blanc, la couleur passant au texte — d'où le cartouche navy du dernier exemple, sans lequel il serait invisible.",
      component: TaTrigramTonesExample,
    },
  ],
};
