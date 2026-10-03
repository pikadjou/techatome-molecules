import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material/bottom-sheet";

import { of } from "rxjs";

import { BottomSheetData, BottomSheetTemplateBasicComponent, BottomSheetTemplateBasicParams } from "@ta/menu";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

// `BottomSheetTemplateBasicComponent` lit `MAT_BOTTOM_SHEET_DATA` dans son
// constructeur, appelé pendant la création du template de la classe
// d'exemple ci-dessous — donc après le constructeur de cette dernière :
// remplir cet objet partagé dans son constructeur suffit, aucun hook de
// cycle de vie plus tardif n'est nécessaire.
const verticalData: BottomSheetTemplateBasicParams = { orientation: "vertical", menu$: of([]) };

@Component({
  standalone: true,
  selector: "app-ex-ta-bottom-sheet-template-basic-vertical",
  imports: [BottomSheetTemplateBasicComponent],
  providers: [{ provide: MAT_BOTTOM_SHEET_DATA, useValue: verticalData }],
  template: `<ta-bottom-sheet-template-basic></ta-bottom-sheet-template-basic>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBottomSheetTemplateBasicVerticalExample {
  protected readonly actions: BottomSheetData[] = [
    { label: "Nouveau contact", icon: "person", action: () => {} },
    { label: "Nouvelle visite", icon: "favorite", action: () => {} },
    { label: "Exporter", icon: "download", subtitle: "Format CSV", action: () => {} },
  ];

  constructor() {
    verticalData.menu$ = of(this.actions);
  }
}

const horizontalData: BottomSheetTemplateBasicParams = { orientation: "horizontal", menu$: of([]) };

@Component({
  standalone: true,
  selector: "app-ex-ta-bottom-sheet-template-basic-secure",
  imports: [BottomSheetTemplateBasicComponent, TextComponent],
  providers: [{ provide: MAT_BOTTOM_SHEET_DATA, useValue: horizontalData }],
  template: `
    <div class="flex-column g-space-sm">
      <ta-bottom-sheet-template-basic></ta-bottom-sheet-template-basic>
      <ta-text size="sm">Dernière action exécutée : {{ this.lastAction() ?? "aucune" }}</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBottomSheetTemplateBasicSecureExample {
  protected readonly lastAction = signal<string | null>(null);

  protected readonly actions: BottomSheetData[] = [
    { label: "Renommer", icon: "settings", action: () => this.lastAction.set("Renommer") },
    {
      label: "Supprimer",
      icon: "delete",
      subtitle: "Confirmation requise",
      secure: true,
      action: () => this.lastAction.set("Supprimer (confirmé)"),
    },
  ];

  constructor() {
    horizontalData.menu$ = of(this.actions);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-bottom-sheet-template-basic",
  group: "Menu",
  summary:
    "Contenu standard d'un `MatBottomSheet` : une liste d'actions (icône, libellé, sous-titre optionnel) fournie via le jeton `MAT_BOTTOM_SHEET_DATA`, pas par des `@Input()`.",
  examples: [
    {
      title: "Orientation verticale",
      layout: "stack",
      description:
        "`orientation: \"vertical\"` applique la classe `col` à chaque élément de `menu$` (`Observable<BottomSheetData[]>`) ; chaque élément affiche `icon`, `label` et, s'il est fourni, `subtitle`.",
      component: TaBottomSheetTemplateBasicVerticalExample,
    },
    {
      title: "Orientation horizontale et action sécurisée",
      layout: "stack",
      description:
        "`orientation: \"horizontal\"` applique `col-12`. Un élément `secure: true` est enveloppé dans `ta-container-validation` (`@ta/ui`) : le clic ouvre une modale de confirmation et `action()` n'est appelé qu'après validation — l'élément non sécurisé exécute `action()` dès le clic.",
      component: TaBottomSheetTemplateBasicSecureExample,
    },
  ],
  notes:
    "Composant normalement instancié par `MatBottomSheet.open(BottomSheetTemplateBasicComponent, { data })`, jamais posé directement dans un template applicatif. Cette page le monte quand même en fournissant `MAT_BOTTOM_SHEET_DATA` via `providers` (comme `src/app/e2e-harness/cases/menu-bottom-sheets.case.ts`) ; sans ce jeton, son constructeur échoue au montage.",
};
