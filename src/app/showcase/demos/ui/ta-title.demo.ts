import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-title-levels",
  imports: [TitleComponent],
  template: `
    <ta-title [level]="1">Titre niveau 1</ta-title>
    <ta-title [level]="2">Titre niveau 2</ta-title>
    <ta-title [level]="3">Titre niveau 3</ta-title>
    <ta-title [level]="4">Titre niveau 4</ta-title>
    <ta-title [level]="5">Titre niveau 5</ta-title>
    <ta-title [level]="6">Titre niveau 6</ta-title>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTitleLevelsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-title-icon-and-styles",
  imports: [TitleComponent],
  template: `
    <ta-title [level]="2" icon="build">Avec icône</ta-title>
    <ta-title [level]="2" [isBold]="true">En gras</ta-title>
    <ta-title [level]="2" [isTheme]="true">Thématisé</ta-title>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTitleIconAndStylesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-title",
  group: "Bases",
  summary: "Titre `h1`-`h6` avec icône optionnelle, graisse et thème contrôlés indépendamment du niveau.",
  examples: [
    {
      title: "Niveaux",
      layout: "stack",
      description:
        "`level` (1 à 6) choisit la balise (`h1`-`h6`) via `@switch`. `title.component.scss` ne définit une taille dédiée (`fontSizeHeader`) que pour `h1`-`h4` ; `h5` et `h6` n'ont aucune règle et retombent donc sur le style par défaut du navigateur, nettement plus petit que `h4` — vérifié dans `title.component.scss`.",
      component: TaTitleLevelsExample,
    },
    {
      title: "Icône, gras, thème",
      layout: "stack",
      description:
        "`icon` (nom Material) précède le contenu projeté. `isBold` n'a d'effet visuel que sur `h2`-`h4` (seuls niveaux avec un sélecteur `.bold` dans le SCSS, testé ici sur `level=2`) ; `isTheme` (classe `.theme-title`, couleur de marque) s'applique quel que soit le niveau.",
      component: TaTitleIconAndStylesExample,
    },
  ],
};
