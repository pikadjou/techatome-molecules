import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-font-icon-sizes",
  imports: [FontIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="xs"></ta-font-icon>
      <ta-text size="sm">xs</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="sm"></ta-font-icon>
      <ta-text size="sm">sm</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="md"></ta-font-icon>
      <ta-text size="sm">md (défaut)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="lg"></ta-font-icon>
      <ta-text size="sm">lg</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="xl"></ta-font-icon>
      <ta-text size="sm">xl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="xxl"></ta-font-icon>
      <ta-text size="sm">xxl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="big"></ta-font-icon>
      <ta-text size="sm">big</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFontIconSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-font-icon-names",
  imports: [FontIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="home" type="lg"></ta-font-icon>
      <ta-text size="sm">home</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="search" type="lg"></ta-font-icon>
      <ta-text size="sm">search</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="settings" type="lg"></ta-font-icon>
      <ta-text size="sm">settings</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="delete" type="lg"></ta-font-icon>
      <ta-text size="sm">delete</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="favorite" type="lg"></ta-font-icon>
      <ta-text size="sm">favorite</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="download" type="lg"></ta-font-icon>
      <ta-text size="sm">download</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="person" type="lg"></ta-font-icon>
      <ta-text size="sm">person</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-font-icon name="notifications" type="lg"></ta-font-icon>
      <ta-text size="sm">notifications</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFontIconNamesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-font-icon",
  group: "Icônes",
  summary: "Icône rendue par un `<mat-icon>` ligaturé, en sept tailles, à partir d'un nom de police d'icônes.",
  examples: [
    {
      title: "Tailles",
      description: "`type` accepte les sept valeurs de `TaSizes` ; chacune a sa propre classe et sa propre taille, déclarées dans `font-icon.component.scss`.",
      component: TaFontIconSizesExample,
    },
    {
      title: "Échantillon de noms",
      description:
        "`name` attend le nom exact d'une ligature de la police Google `Material Icons`, chargée globalement par `@ta/styles` (`@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\")` dans `ta/_index.scss`) : le composant se contente d'injecter ce texte dans un `<mat-icon>`. Ces huit noms ne sont qu'un échantillon — le jeu complet se cherche sur fonts.google.com/icons (style « Material Icons ») : chaque fiche y affiche le nom de ligature à copier tel quel dans `name`.",
      component: TaFontIconNamesExample,
    },
  ],
  notes:
    "Seul des trois composants d'icônes du paquet à ne pas être marqué `@deprecated` — `ta-local-icon` et `ta-material-icon` le sont, voir leurs démos respectives.",
};
