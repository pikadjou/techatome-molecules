import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ActiveFilterTag, FiltersTagComponent } from "@ta/core";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-filters-tag-removable",
  imports: [FiltersTagComponent],
  template: `
    <ta-filters-tag [activeFilter]="this.activeFilters" (removedFilter)="this.remove($event)"></ta-filters-tag>
    @if (this.activeFilters.length === 0) {
      <p>Tous les filtres ont été retirés.</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFiltersTagRemovableExample {
  activeFilters: ActiveFilterTag[] = [
    { id: "status", name: "Statut : Actif" },
    { id: "city", name: "Ville : Bruxelles" },
    { id: "type", name: "Type : Client" },
  ];

  remove(filter: ActiveFilterTag): void {
    this.activeFilters = this.activeFilters.filter((f) => f.id !== filter.id);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-filters-tag",
  group: "Filtres",
  summary:
    "Rangée de `ta-badge` (`type=\"info\"`, icône `close`) affichant les filtres actifs ; cliquer la croix d'un badge retire ce filtre.",
  examples: [
    {
      title: "Filtres actifs, retirables",
      description:
        "Chaque badge vient d'un `ActiveFilterTag` (`{ id, name }`). Cliquer sa croix émet `removedFilter` avec l'objet complet ; l'exemple retire l'entrée correspondante du tableau passé à `activeFilter`, qui redisparaît aussitôt.",
      component: TaFiltersTagRemovableExample,
    },
  ],
  notes:
    "Le template ne prévoit aucun état vide dédié : un `activeFilter` à `[]` rend un `<div>` sans enfants — invisible plutôt qu'un message quelconque (vérifié dans `filters-tag.component.html`).",
};
