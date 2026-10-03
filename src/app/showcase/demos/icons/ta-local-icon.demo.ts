import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LocalIconComponent, TaIconType } from "@ta/icons";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-local-icon-sizes",
  imports: [LocalIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="xs"></ta-local-icon>
      <ta-text size="sm">xs (28px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="sm"></ta-local-icon>
      <ta-text size="sm">sm (35px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="md"></ta-local-icon>
      <ta-text size="sm">md (50px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="lg"></ta-local-icon>
      <ta-text size="sm">lg (120px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="xl"></ta-local-icon>
      <ta-text size="sm">xl (120px aussi)</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLocalIconSizesExample {
  // `size` par défaut est "xs" ; le fixer explicitement sur chaque instance rend
  // la comparaison lisible. `getSize()` mappe xs/sm/md/lg/xl vers des pixels fixes
  // — lg et xl produisent la même largeur (120px), à l'identique dans la source.
  icon = TaIconType.Search;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-local-icon-rotation",
  imports: [LocalIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="lg" [rotation]="false"></ta-local-icon>
      <ta-text size="sm">rotation="false"</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.icon" size="lg" [rotation]="true"></ta-local-icon>
      <ta-text size="sm">rotation="true"</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLocalIconRotationExample {
  icon = TaIconType.Loader;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-local-icon-sample",
  imports: [LocalIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.search" size="md"></ta-local-icon>
      <ta-text size="sm">Search</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.edit" size="md"></ta-local-icon>
      <ta-text size="sm">Edit</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.deleteIcon" size="md"></ta-local-icon>
      <ta-text size="sm">Delete</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.download" size="md"></ta-local-icon>
      <ta-text size="sm">Download</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.save" size="md"></ta-local-icon>
      <ta-text size="sm">Save</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.warning" size="md"></ta-local-icon>
      <ta-text size="sm">Warning</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.info" size="md"></ta-local-icon>
      <ta-text size="sm">Info</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-local-icon [type]="this.star" size="md"></ta-local-icon>
      <ta-text size="sm">Star</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLocalIconSampleExample {
  search = TaIconType.Search;
  edit = TaIconType.Edit;
  deleteIcon = TaIconType.Delete;
  download = TaIconType.Download;
  save = TaIconType.Save;
  warning = TaIconType.Warning;
  info = TaIconType.Info;
  star = TaIconType.Star;
}

export const DEMO: ComponentDemo = {
  id: "ta-local-icon",
  group: "Icônes",
  summary: "Icône SVG intégrée, résolue depuis l'énumération `TaIconType` par `TaIconsService`, en cinq tailles.",
  examples: [
    {
      title: "Tailles",
      description: "`getSize()` mappe `xs`/`sm`/`md`/`lg`/`xl` vers des largeurs fixes en pixels ; `lg` et `xl` produisent la même valeur (120px), à l'identique dans la source. Toute autre valeur retombe sur `auto`.",
      component: TaLocalIconSizesExample,
    },
    {
      title: "Rotation",
      description: "`rotation=true` ajoute la classe `is-rotation`, qui applique une animation CSS de rotation continue (2s, infinie, linéaire).",
      component: TaLocalIconRotationExample,
    },
    {
      title: "Échantillon d'icônes",
      description:
        "`type` attend une valeur de l'énumération `TaIconType` (plus de cent membres), résolue en SVG par `TaIconsService.getIcon()`. Ces huit icônes ne sont qu'un échantillon — l'ensemble se trouve par autocomplétion sur `TaIconType` dans l'IDE, ou en lisant `projects/icons/src/lib/services/icons.service.ts`.",
      component: TaLocalIconSampleExample,
    },
  ],
  notes:
    "Composant `@deprecated` : la documentation du paquet recommande `ta-flag-icon` pour les drapeaux et `ta-font-icon` pour le reste. `type` accepte aussi une chaîne libre (`TaIconType | string | null`), mais `getIcon()` indexe `iconMapping` par la valeur numérique de l'enum : seule une valeur `TaIconType.XXX` (ou son équivalent numérique) résout une icône, un nom de chaîne arbitraire ne matche rien.",
};
