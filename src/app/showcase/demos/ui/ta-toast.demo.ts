import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ToastComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-toast-codes",
  imports: [ToastComponent],
  template: `
    <div class="flex-column g-space-sm">
      @for (item of this.codes; track item.code) {
        <ta-toast [code]="item.code">{{ item.label }}</ta-toast>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaToastCodesExample {
  // `code` est typé `ENotificationCode`, une énumération interne à `@ta/ui`
  // (non ré-exportée par public-api.ts, voir notes) : impossible de l'importer
  // ici. Ses valeurs numériques sont stables (`enum.ts`) — un littéral numérique
  // reste assignable à un type énuméré, contrairement à la valeur d'une autre
  // énumération portant les mêmes noms.
  readonly codes: { label: string; code: number }[] = [
    { label: "Information (par défaut)", code: 3 },
    { label: "Succès", code: 4 },
    { label: "Attention", code: 2 },
    { label: "Erreur", code: 1 },
    { label: "Neutre (none)", code: 0 },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-toast",
  group: "Conteneurs",
  summary: "Carte au liseré coloré selon `code`, dont le contenu est entièrement projeté.",
  examples: [
    {
      title: "Types",
      layout: "stack",
      description: "`getTypeClass(code)` (importé de `../../../enum`) mappe chaque valeur vers `danger`/`warning`/`info`/`success` ; `none` ne produit aucune classe, donc aucun liseré.",
      component: TaToastCodesExample,
    },
  ],
  notes:
    "`ENotificationCode` (`none`/`error`/`warning`/`information`/`success`, valeurs `0` à `4`) est déclaré dans `projects/ui/src/lib/enum.ts` mais n'est pas ré-exporté par `public-api.ts` : un consommateur de `@ta/ui` ne peut pas l'importer et doit passer des littéraux numériques à `[code]`, comme ci-dessus. `@ta/notification` exporte sa propre énumération du même nom et des mêmes valeurs, mais une valeur de cette énumération-là n'est pas assignable au `code` de `ta-toast` (vérifié : TypeScript refuse une énumération pour une autre, même identique membre à membre) — seul un nombre littéral fonctionne.",
};
