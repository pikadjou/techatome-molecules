import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonToolComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-button-tool-sizes",
  imports: [ButtonToolComponent],
  template: `
    <ta-button-tool icon="settings" size="xs"></ta-button-tool>
    <ta-button-tool icon="settings" size="sm"></ta-button-tool>
    <ta-button-tool icon="settings" size="md"></ta-button-tool>
    <ta-button-tool icon="settings" size="lg"></ta-button-tool>
    <ta-button-tool icon="settings" size="xl"></ta-button-tool>
    <ta-button-tool icon="settings" size="xxl"></ta-button-tool>
    <ta-button-tool icon="settings" size="big"></ta-button-tool>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonToolSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-tool-states",
  imports: [ButtonToolComponent],
  template: `
    <ta-button-tool icon="edit" size="lg" state="classic" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
    <ta-button-tool icon="edit" size="lg" state="disabled" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
    <ta-button-tool icon="edit" size="lg" state="inactive" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonToolStatesExample {
  // `handleClick()` n'émet `action` que si `state()` vaut `classic` : les deux
  // états non-classiques bloquent l'émission à l'identique, seule leur couleur
  // diffère.
  clicks = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-tool-readonly",
  imports: [ButtonToolComponent],
  template: `
    <ta-button-tool icon="save" size="lg" [readonly]="false" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
    <ta-button-tool icon="save" size="lg" [readonly]="true" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonToolReadonlyExample {
  // `readonly` pose l'attribut natif `[disabled]` sur le `<button>` : le
  // navigateur bloque l'événement de clic lui-même, avant même que
  // `handleClick()` ne s'exécute. C'est un mécanisme distinct de `state`, qui
  // lui laisse le clic natif passer et se contente d'ignorer l'appel dans
  // `handleClick()`.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-button-tool",
  group: "Boutons",
  summary: "Bouton icône seul, en sept tailles et trois états, avec un blocage natif distinct via `readonly`.",
  examples: [
    { title: "Tailles", description: "Les sept valeurs de `size`.", component: TaButtonToolSizesExample },
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent l'émission de `action` à l'identique ; ils ne diffèrent que par leur couleur.",
      component: TaButtonToolStatesExample,
    },
    {
      title: "Lecture seule",
      description: "`readonly` désactive le `<button>` natif (le clic n'atteint jamais `handleClick()`), à la différence de `state` qui laisse le clic passer et l'ignore.",
      component: TaButtonToolReadonlyExample,
    },
  ],
  notes:
    "`type` n'accepte que la valeur `\"primary\"` (union à un seul membre) : pas de variante à démontrer. `stopPropagationActivation` (`true` par défaut) empêche le clic de remonter à un conteneur cliquable englobant (ex. une ligne de tableau) ; non démontrable isolément, sans effet visuel propre.",
};
