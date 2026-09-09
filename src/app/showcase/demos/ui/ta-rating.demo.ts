import { ChangeDetectionStrategy, Component } from "@angular/core";

import { RatingComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-rating-interactive",
  imports: [RatingComponent],
  template: `
    <ta-rating [value]="this.value" (ratingChange)="this.value = $event"></ta-rating>
    <p>Note choisie : {{ this.value }} / 5</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingInteractiveExample {
  // `ratingChange` émet la valeur cliquée sans mettre `value` à jour elle-même :
  // c'est cette propriété, réassignée ici, qui pilote l'affichage des étoiles.
  value = 3;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-rating-readonly",
  imports: [RatingComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-rating [value]="1" [readonly]="true"></ta-rating>
      <ta-rating [value]="3.5" [readonly]="true"></ta-rating>
      <ta-rating [value]="5" [readonly]="true"></ta-rating>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingReadonlyExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-rating-colors",
  imports: [RatingComponent],
  template: `<ta-rating [value]="4" [readonly]="true" color="#22c55e" emptyColor="#e5e7eb" [size]="32"></ta-rating>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaRatingColorsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-rating",
  group: "Progression",
  summary: "Étoiles de notation cliquables, avec remplissage partiel décimal, en lecture seule ou personnalisées (couleurs, taille).",
  examples: [
    {
      title: "Interactif",
      description: "Cliquer une étoile émet `ratingChange` ; `hoverChange` s'émet aussi au survol tant que `readonly` est faux et `showHover` (vrai par défaut) l'autorise.",
      component: TaRatingInteractiveExample,
    },
    {
      title: "Lecture seule",
      description: "`readonly` bloque les clics (`onStarClick` ne fait rien) ; `3.5` illustre le remplissage partiel d'une étoile via `getStarFillPercentage()`.",
      component: TaRatingReadonlyExample,
    },
    { title: "Couleurs et taille", description: "`color`/`emptyColor` (couleurs CSS) et `size` (pixels) personnalisent l'apparence des étoiles.", component: TaRatingColorsExample },
  ],
  notes:
    "Avec `value` à `0` (sa valeur par défaut) et `readonly` à vrai, le composant affiche `\"ui.rating.no-evaluation\"` traduit plutôt que des étoiles vides (`@if (this.value() || !this.readonly())` dans `rating.component.html` : la condition ne passe que si une valeur existe ou que le composant reste éditable) — non démontré ci-dessus, tous les exemples utilisent une valeur non nulle ou restent éditables.",
};
