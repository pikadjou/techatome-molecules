import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material/bottom-sheet";

import { of } from "rxjs";

import { BottomSheetTemplateBasicComponent, BottomSheetTemplateGenericComponent } from "@ta/menu";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « bottom-sheets » @ta/menu.
 *
 * Ces templates sont normalement instanciés par `MatBottomSheet` et exigent le
 * token `MAT_BOTTOM_SHEET_DATA`. On le fournit ici (valeur fusionnée couvrant les
 * deux formes de paramètres) pour pouvoir les monter directement et les cibler.
 *
 * Route: /e2e-harness/menu-bottom-sheets
 */
@Component({
  standalone: true,
  selector: "app-case-menu-bottom-sheets",
  imports: [BottomSheetTemplateBasicComponent, BottomSheetTemplateGenericComponent, TaTestIdDirective],
  providers: [
    {
      provide: MAT_BOTTOM_SHEET_DATA,
      useValue: { orientation: "vertical", menu$: of([]), template: null },
    },
  ],
  template: `
    <ta-bottom-sheet-template-basic taTestId="ta-bottom-sheet-template-basic"></ta-bottom-sheet-template-basic>
    <ta-bottom-sheet-template-generic taTestId="ta-bottom-sheet-template-generic"></ta-bottom-sheet-template-generic>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBottomSheetsCase {}
