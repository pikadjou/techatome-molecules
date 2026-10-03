import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SwiperLightComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

interface Slide {
  id: string;
  label: string;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-swiper-light-gallery",
  imports: [SwiperLightComponent],
  template: `
    <ta-swiper-light [items]="this.items" [template]="slideTpl" [forced]="true"></ta-swiper-light>

    <ng-template #slideTpl let-element="element">
      <div style="width: 160px" class="p-space-md bdr-radius-rounded">{{ element.label }}</div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSwiperLightGalleryExample {
  readonly items: Slide[] = [
    { id: "1", label: "Séjour" },
    { id: "2", label: "Cuisine" },
    { id: "3", label: "Chambre" },
    { id: "4", label: "Salle de bain" },
    { id: "5", label: "Terrasse" },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-swiper-light",
  group: "Conteneurs",
  summary: "Liste projetée via un `TemplateRef`, mise en scène en défilement horizontal sur mobile ou selon `forced`.",
  examples: [
    {
      title: "Galerie",
      layout: "stack",
      description:
        "`[forced]=\"true\"` applique toujours les classes de défilement (`.items`, `overflow-x: auto`) plutôt que de les réserver aux appareils mobiles détectés par `TaDeviceInfoService.os$` — nécessaire pour un rendu prévisible sur cette vitrine.",
      component: TaSwiperLightGalleryExample,
    },
  ],
  notes:
    "Sans `forced`, la classe appliquée dépend de `TaDeviceInfoService.os$` (mobile → classes de défilement horizontal ; desktop → `containerClasses`, vide par défaut, donc aucune mise en page particulière) : le rendu change selon l'appareil qui visite cette page, ce que `forced` neutralise ici pour un résultat stable. `track()` distingue les éléments par `id` ou par `key` s'ils en portent un, sinon par référence d'objet — les éléments ci-dessus utilisent `id`.",
};
