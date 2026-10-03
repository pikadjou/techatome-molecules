import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MaterialIconComponent } from "@ta/icons";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-material-icon-styles",
  imports: [MaterialIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon>home</ta-material-icon>
      <ta-text size="sm">défaut</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [outline]="true">home</ta-material-icon>
      <ta-text size="sm">outline</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [sharp]="true">home</ta-material-icon>
      <ta-text size="sm">sharp</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [round]="true">home</ta-material-icon>
      <ta-text size="sm">round</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [dualTone]="true">home</ta-material-icon>
      <ta-text size="sm">dualTone</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMaterialIconStylesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-material-icon-sizes",
  imports: [MaterialIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon>star</ta-material-icon>
      <ta-text size="sm">(défaut, "")</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [type]="'sm'">star</ta-material-icon>
      <ta-text size="sm">sm</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [type]="'xl'">star</ta-material-icon>
      <ta-text size="sm">xl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-material-icon [type]="'xxl'">star</ta-material-icon>
      <ta-text size="sm">xxl</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMaterialIconSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-material-icon",
  group: "Icônes",
  summary: "Icône Material rendue par un `<mat-icon>` dont le nom de ligature est projeté, en quatre variantes de style.",
  examples: [
    {
      title: "Styles",
      description:
        "Le nom de la ligature est projeté (`<ng-content>`), pas passé en input, à la différence de `ta-font-icon`. `outline`/`sharp`/`round`/`dualTone` sélectionnent chacun une classe CSS distincte (`getDisplayStyle()`) ; si plusieurs sont à `true` en même temps, seul le premier dans cet ordre l'emporte. Seule la police Google `Material Icons` par défaut est importée dans ce dépôt (`ta/_index.scss`) — les polices `Material Icons Outlined/Sharp/Round/Two-tone` que ces classes attendent ne le sont pas, donc ces quatre variantes restent ici visuellement identiques au style par défaut.",
      component: TaMaterialIconStylesExample,
    },
    {
      title: "Tailles",
      description:
        "`type` compose la classe `icon-${type}` (`getTypeStyle()`). Sur les sept valeurs de `TaSizes` plus la chaîne vide par défaut, seules `sm` (20px), `xl` (45px) et `xxl` (90px) trouvent une règle dans `material-icon.component.scss` ; `xs`, `md`, `lg`, `big` et la valeur par défaut produisent une classe sans règle correspondante et n'ont donc aucun effet de taille constaté.",
      component: TaMaterialIconSizesExample,
    },
  ],
  notes:
    "Composant `@deprecated` : la documentation du paquet recommande `ta-font-icon` pour les nouveaux usages. `getDisplayStyle()` et `getTypeStyle()` sont des méthodes publiques mais ne servent qu'au template interne du composant (`[ngClass]`) — elles ne font pas partie d'une API destinée à être appelée par le consommateur.",
};
