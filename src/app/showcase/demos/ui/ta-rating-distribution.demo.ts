import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RatingDistributionComponent } from '@ta/ui';

import { ComponentDemo } from '../../demo.types';

@Component({
  standalone: true,
  selector: 'app-ex-ta-rating-distribution-default',
  imports: [RatingDistributionComponent],
  template: `<ta-rating-distribution [values]="this.values"></ta-rating-distribution>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingDistributionDefaultExample {
  readonly values = [5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 5, 5, 4, 2];
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-rating-distribution-empty',
  imports: [RatingDistributionComponent],
  template: `<ta-rating-distribution [values]="[]"></ta-rating-distribution>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingDistributionEmptyExample {}

@Component({
  standalone: true,
  selector: 'app-ex-ta-rating-distribution-scale',
  imports: [RatingDistributionComponent],
  template: `<ta-rating-distribution [values]="this.values" [max]="10"></ta-rating-distribution>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingDistributionScaleExample {
  readonly values = [10, 9, 9, 8, 8, 8, 7, 6, 10, 9];
}

export const DEMO: ComponentDemo = {
  id: 'ta-rating-distribution',
  group: 'Progression',
  summary: 'Répartition des notes reçues, une barre par échelon — ce que la moyenne seule ne dit pas.',
  examples: [
    {
      title: 'Répartition',
      layout: 'stack',
      description:
        '`values` reçoit les notes brutes, une entrée par évaluation ; le composant compte lui-même. Les échelons se lisent du plus haut au plus bas, et la largeur de chaque barre rapporte son effectif au total.',
      component: TaRatingDistributionDefaultExample,
    },
    {
      title: 'Aucune évaluation',
      layout: 'stack',
      description:
        "Sans note, l'échelle reste affichée, toutes barres à zéro : elle dit qu'il n'y a rien à lire, là où un bloc absent laisserait croire à un oubli. À l'appelant de masquer le composant s'il préfère ne rien montrer.",
      component: TaRatingDistributionEmptyExample,
    },
    {
      title: 'Autre échelle',
      layout: 'stack',
      description:
        "`max` change la hauteur de l'échelle — dix échelons ici. Les notes hors bornes sont ignorées, et les notes décimales rejoignent l'échelon le plus proche.",
      component: TaRatingDistributionScaleExample,
    },
  ],
  notes:
    "Le composant ne rend pas la moyenne : elle se lit à côté, sur un `ta-rating`. Il n'affiche pas non plus de pourcentage — la barre le dit, et le chiffre en bout de ligne compte les évaluations, pas leur part.",
};
