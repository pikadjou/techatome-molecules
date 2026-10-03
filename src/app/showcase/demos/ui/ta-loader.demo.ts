import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LoaderComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-loader-loading",
  imports: [LoaderComponent],
  template: `<ta-loader text="Chargement des données…"></ta-loader>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLoaderLoadingExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-loader-sizes",
  imports: [LoaderComponent],
  template: `
    <div class="flex-row g-space-lg">
      <ta-loader size="sm" text=""></ta-loader>
      <ta-loader size="md" text=""></ta-loader>
      <ta-loader size="lg" text=""></ta-loader>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLoaderSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-loader-skeleton",
  imports: [LoaderComponent],
  template: `<ta-loader [skeleton]="'cardList'"></ta-loader>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLoaderSkeletonExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-loader-loaded",
  imports: [LoaderComponent],
  template: `
    <ta-loader [isLoading]="false">
      <p>Contenu chargé, affiché via &lt;ng-content&gt; une fois isLoading à faux.</p>
    </ta-loader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLoaderLoadedExample {}

export const DEMO: ComponentDemo = {
  id: "ta-loader",
  group: "Conteneurs",
  summary: "Chargeur animé (plan d'appartement qui se dessine en boucle) avec message, ou squelette de mise en page alternatif.",
  examples: [
    {
      title: "Chargement",
      layout: "stack",
      description: "`isLoading` (vrai par défaut) affiche l'animation SVG en boucle continue et le `text` traduit sous celle-ci.",
      component: TaLoaderLoadingExample,
    },
    {
      title: "Tailles",
      description: "`sm`/`md`/`lg`, les seules valeurs de `size` stylées dans `loader.component.scss` (voir notes).",
      component: TaLoaderSizesExample,
    },
    {
      title: "Squelette de mise en page",
      layout: "stack",
      description: "`skeleton=\"cardList\"` remplace l'animation par `ta-placeholder`, une mise en page de blocs gris (`getPlaceholderConfig()`).",
      component: TaLoaderSkeletonExample,
    },
    {
      title: "Chargé",
      layout: "stack",
      description: "`isLoading=\"false\"` bascule vers `<ng-content>` : le contenu projeté remplace l'animation.",
      component: TaLoaderLoadedExample,
    },
  ],
  notes:
    "`size` accepte les sept valeurs de `TaSizes`, mais seules `sm`/`md` (implicite, sans classe dédiée)/`lg` ont une règle dans `loader.component.scss` — `xs`/`xl`/`xxl`/`big` ne redimensionnent pas le spinner (vérifié). `skeleton` accepte aussi `'default'`, `'detail'` et `'fileList'`, non démontrés ici (une seule mise en page suffit à montrer le mécanisme).",
};
