import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SwiperComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-swiper-scroll",
  imports: [SwiperComponent],
  template: `
    <ta-swiper>
      @for (label of this.slides; track label) {
        <div style="display: inline-block; width: 160px; margin-right: 16px; vertical-align: top" class="p-space-md bdr-radius-rounded">
          {{ label }}
        </div>
      }
    </ta-swiper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSwiperScrollExample {
  readonly slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
}

export const DEMO: ComponentDemo = {
  id: "ta-swiper",
  group: "Conteneurs",
  summary: "Conteneur à défilement horizontal, sans aucune entrée : c'est le contenu projeté qui porte la mise en page.",
  examples: [
    {
      title: "Défilement horizontal",
      layout: "stack",
      description: "Le conteneur applique `overflow-x: auto; white-space: nowrap` ; les enfants doivent être `inline-block` pour s'aligner côte à côte plutôt que de s'empiler.",
      component: TaSwiperScrollExample,
    },
  ],
  notes:
    "Malgré son nom, `ta-swiper` ne charge aucune bibliothèque JavaScript (vérifié : aucune dépendance à `swiper` dans `swiper.component.ts`) — c'est un simple conteneur `overflow-x`/`white-space: nowrap` (`swiper.component.scss`) qui accepte n'importe quel contenu projeté via `CUSTOM_ELEMENTS_SCHEMA`, y compris les web components `<swiper-container>`/`<swiper-slide>` de la bibliothèque `swiper` (déjà présente en dépendance de `@ta/ui`) à condition que le consommateur appelle lui-même `register()` depuis `swiper/element/bundle` — rien dans ce dépôt ne le fait aujourd'hui. Pour un défilement mobile plus riche (déclencheur `forced`, détection d'appareil), voir `ta-swiper-light`.",
};
