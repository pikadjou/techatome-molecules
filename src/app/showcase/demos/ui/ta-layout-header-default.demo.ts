import { ChangeDetectionStrategy, Component, signal, TemplateRef, ViewChild } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";

import { LayoutHeaderDefaultComponent, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-header-default-back",
  imports: [LayoutHeaderDefaultComponent],
  template: `
    <ta-layout-header-default title="Facture #4821" [showBack]="true"></ta-layout-header-default>
    <ta-layout-header-default title="Tableau de bord" [showBack]="false"></ta-layout-header-default>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutHeaderDefaultBackExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-header-default-menu",
  imports: [LayoutHeaderDefaultComponent, MatMenuModule, TextComponent],
  template: `
    <ta-layout-header-default title="Documents" [showBack]="false" [menuTemplate]="this.menuTpl"></ta-layout-header-default>

    <ng-template #menuTpl>
      <button mat-menu-item (click)="this.lastAction.set('Renommer')">Renommer</button>
      <button mat-menu-item (click)="this.lastAction.set('Supprimer')">Supprimer</button>
    </ng-template>

    @if (this.lastAction(); as action) {
      <ta-text size="sm">Action choisie : {{ action }}</ta-text>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutHeaderDefaultMenuExample {
  @ViewChild("menuTpl", { static: true }) menuTpl!: TemplateRef<unknown>;

  readonly lastAction = signal<string | null>(null);
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-header-default",
  group: "Mise en page",
  summary: "Barre d'en-tête à trois zones : retour, titre centré, menu contextuel — chacune conditionnée par ses inputs.",
  examples: [
    {
      title: "Avec ou sans bouton de retour",
      layout: "stack",
      description:
        "`showBack` (défaut `true`) affiche une flèche à gauche. Vérifié dans layout-header-default.component.ts (`showBackAction()`) : cliquer cette flèche appelle `Location.back()` — un retour navigateur réel, en plus d'émettre `backEvent` — donc cliquer la première barre ci-dessous vous fera quitter la vitrine.",
      component: TaLayoutHeaderDefaultBackExample,
    },
    {
      title: "Menu contextuel (menuTemplate)",
      layout: "stack",
      description:
        "Quand `menuTemplate` est fourni, une icône « more » apparaît à droite (sinon la zone reste vide, vérifié : l'icône est dans un `@if (this.menuTemplate())`) et ouvre un `mat-menu` matérialisant le template projeté.",
      component: TaLayoutHeaderDefaultMenuExample,
    },
  ],
};
