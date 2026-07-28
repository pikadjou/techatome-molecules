import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  FilterContainerComponent,
  FilterDisplayerComponent,
  FiltersContainerComponent,
  FiltersTagComponent,
  SearchDisplayerComponent,
  SearchHistoryDisplayerComponent,
  TextToClipboardComponent,
} from "@ta/core";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « core » @ta/core — composants montables sans backend (inputs directs).
 * Les composants nécessitant un backend GraphQL/Strapi (documents, map, cms) ou
 * une configuration de grille sont couverts ailleurs / hors périmètre.
 * Route: /e2e-harness/core
 */
@Component({
  standalone: true,
  selector: "app-case-core",
  imports: [
    FilterContainerComponent,
    FilterDisplayerComponent,
    FiltersContainerComponent,
    FiltersTagComponent,
    SearchDisplayerComponent,
    SearchHistoryDisplayerComponent,
    TextToClipboardComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-text-to-clipboard taTestId="ta-text-to-clipboard" [value]="'À copier'"></ta-text-to-clipboard>
    <ta-filters-tag taTestId="ta-filters-tag" [activeFilter]="[]"></ta-filters-tag>
    <ta-filter-displayer taTestId="ta-filter-displayer" [form]="[]"></ta-filter-displayer>
    <ta-search-displayer taTestId="ta-search-displayer" [placeholder]="'Rechercher'"></ta-search-displayer>
    <ta-search-history-displayer
      taTestId="ta-search-history-displayer"
      [placeholder]="'Historique'"
    ></ta-search-history-displayer>
    <ta-filters-container taTestId="ta-filters-container" [form]="[]" [activeFilter]="[]"></ta-filters-container>
    <ta-filter-container taTestId="ta-filter-container" [form]="[]"></ta-filter-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreCase {}
