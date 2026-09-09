import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SearchHistoryDisplayerComponent } from "@ta/core";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-search-history-displayer-inline",
  imports: [SearchHistoryDisplayerComponent],
  template: `
    <div style="max-width: 320px">
      <ta-search-history-displayer
        [placeholder]="'Rechercher un article'"
        [searchHistory]="this.searchType"
        [isDropDown]="false"
        (valueCompleted)="this.selected = $event"
      ></ta-search-history-displayer>
      @if (this.selected) {
        <p>Dernière recherche validée : {{ this.selected }}</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSearchHistoryDisplayerInlineExample {
  readonly searchType = { type: "vitrine-search-history-inline" };

  selected = "";
}

@Component({
  standalone: true,
  selector: "app-ex-ta-search-history-displayer-dropdown",
  imports: [SearchHistoryDisplayerComponent],
  template: `
    <div style="max-width: 320px">
      <ta-search-history-displayer
        [placeholder]="'Rechercher un article'"
        [searchHistory]="this.searchType"
        [isDropDown]="true"
        (valueCompleted)="this.selected = $event"
      ></ta-search-history-displayer>
      @if (this.selected) {
        <p>Dernière recherche validée : {{ this.selected }}</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSearchHistoryDisplayerDropdownExample {
  readonly searchType = { type: "vitrine-search-history-dropdown" };

  selected = "";
}

export const DEMO: ComponentDemo = {
  id: "ta-search-history-displayer",
  group: "Recherche",
  summary:
    "Champ de recherche (`ta-search-field`) avec liste des dernières recherches persistées en `localStorage`, en liste inline ou en menu déroulant.",
  examples: [
    {
      title: "Liste inline",
      description:
        "Avec `searchHistory().type` renseigné et `isDropDown=false`, la liste des recherches récentes reste affichée sous le champ, sans interaction préalable. Valider une nouvelle recherche (Entrée, ou un second clic sur la loupe) l'ajoute en tête (cinq entrées max).",
      component: TaSearchHistoryDisplayerInlineExample,
    },
    {
      title: "Menu déroulant",
      description: "`isDropDown=true` : le même historique se présente dans un `mat-menu` qui s'ouvre au clic sur le champ, plutôt que de rester affiché en permanence.",
      component: TaSearchHistoryDisplayerDropdownExample,
    },
  ],
  notes:
    "`searchFieldWidth` (accesseur public) donne la largeur du champ pour caler le menu déroulant ; c'est un détail de mise en page interne, non démontrable isolément. L'en-tête « Dernières recherches » s'affiche comme la clé brute `core.historical-research.last-searches` : cette clé n'existe dans aucun des deux fichiers `projects/core/src/i18n/{en,fr}.json` — vérifié par recherche dans les deux fichiers. Sans effet sur le fonctionnement du champ.",
};
