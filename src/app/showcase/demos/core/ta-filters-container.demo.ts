import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { ActiveFilterTag, FiltersContainerComponent } from "@ta/core";
import { InputBase, InputDropdown, InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

interface Client {
  id: string;
  name: string;
  city: string;
  status: "active" | "inactive";
}

@Component({
  standalone: true,
  selector: "app-ex-ta-filters-container-working",
  imports: [FiltersContainerComponent],
  template: `
    <ta-filters-container
      class="flex-full"
      [form]="this.form"
      [activeFilter]="this.activeFilter"
      (filtersSelected)="this.apply($event)"
      (removedFilter)="this.remove($event)"
    >
      <div class="flex-column g-space-xs p-space-sm">
        @for (client of this.filteredClients; track client.id) {
          <div>{{ client.name }} — {{ client.city }}</div>
        } @empty {
          <div>Aucun client ne correspond aux filtres.</div>
        }
      </div>
    </ta-filters-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFiltersContainerWorkingExample {
  private readonly _clients: Client[] = [
    { id: "1", name: "Atelier Dupont", city: "Bruxelles", status: "active" },
    { id: "2", name: "Studio Levert", city: "Namur", status: "active" },
    { id: "3", name: "Menuiserie Colle", city: "Bruxelles", status: "inactive" },
    { id: "4", name: "Ferronnerie Wallon", city: "Liège", status: "active" },
  ];

  readonly form: InputBase<any>[] = [
    new InputDropdown({
      key: "status",
      label: "Statut",
      options$: of([
        { id: "active", name: "Actif" },
        { id: "inactive", name: "Inactif" },
      ]),
    }),
    new InputTextBox({ key: "city", label: "Ville" }),
  ];

  activeFilter: ActiveFilterTag[] = [];
  filteredClients: Client[] = this._clients;

  private _applied: Record<string, string | null> = {};

  apply(data: Record<string, string | null> | null): void {
    this._applied = data ?? {};
    this._refresh();
  }

  remove(tag: ActiveFilterTag): void {
    this._applied = { ...this._applied, [tag.id]: null };
    const field = this.form.find((input) => input.key === tag.id);
    if (field) {
      field.value = null;
    }
    this._refresh();
  }

  private _refresh(): void {
    const status = this._applied["status"];
    const city = this._applied["city"];

    const tags: ActiveFilterTag[] = [];
    if (status) {
      tags.push({ id: "status", name: `Statut : ${status === "active" ? "Actif" : "Inactif"}` });
    }
    if (city) {
      tags.push({ id: "city", name: `Ville : ${city}` });
    }
    this.activeFilter = tags;

    this.filteredClients = this._clients.filter(
      (client) => (!status || client.status === status) && (!city || client.city.toLowerCase().includes(city.toLowerCase())),
    );
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-filters-container",
  group: "Filtres",
  summary: "Panneau de filtres repliable, avec ses tags actifs intégrés (`ta-filters-tag`) et une zone de contenu projetée.",
  examples: [
    {
      title: "Filtres appliqués sur une liste",
      layout: "stack",
      description:
        "Cliquer l'icône bascule le panneau ; le refermer en cliquant à nouveau valide le formulaire (`toggleFilter()` appelle `askValidation$.next(null)` avant de fermer) et émet `filtersSelected`. Chaque valeur non vide devient un tag dans le `ta-filters-tag` intégré ; retirer un tag (`removedFilter`) réinitialise le champ correspondant et refiltre la liste de clients projetée par `<ng-content>`.",
      component: TaFiltersContainerWorkingExample,
    },
  ],
  notes:
    "`FiltersFormComponent`, le formulaire interne du panneau, n'est pas exporté par `@ta/core` (`components/public-api.ts` ne le liste pas) : il n'est utilisable qu'à travers `ta-filters-container`. Pendant que le panneau est ouvert, son fond est transparent (`mat-drawer-container { background: transparent }` dans `layout-with-panel.component.scss`) : le contenu projeté reste visible en transparence derrière le formulaire — vérifié à l'exécution, pas un défaut de cette démo.",
};
