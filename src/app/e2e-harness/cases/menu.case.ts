import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ContextMenuComponent,
  MainMenuComponent,
  Menu,
  MenuComponent,
  MenuIcon,
  MenuItemComponent,
  NavigationComponent,
} from "@ta/menu";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « menu » @ta/menu — composants pilotés par des modèles Menu.
 * Route: /e2e-harness/menu
 *
 * NB : `ta-bottom-sheet-template-basic` et `ta-bottom-sheet-template-generic`
 * ne sont pas couverts ici — ils exigent le token `MAT_BOTTOM_SHEET_DATA`
 * (dont un `TemplateRef` vivant) et ne sont montables qu'à l'intérieur d'un
 * `MatBottomSheet`, pas en standalone.
 */
@Component({
  standalone: true,
  selector: "app-case-menu",
  imports: [
    ContextMenuComponent,
    MainMenuComponent,
    MenuComponent,
    MenuItemComponent,
    NavigationComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-menu taTestId="ta-menu" [menu]="menu" [container]="'main'"></ta-menu>
    <ta-menu-item taTestId="ta-menu-item" [item]="item"></ta-menu-item>
    <ta-main-menu taTestId="ta-main-menu" [menuMain]="menu"></ta-main-menu>
    <ta-context-menu taTestId="ta-context-menu" [menu]="menu"></ta-context-menu>
    <ta-menu-navigation taTestId="ta-menu-navigation" [menu]="menu" [container]="'tab'"></ta-menu-navigation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCase {
  readonly item = new MenuIcon({ key: "home", label: "Accueil", icon: "user", link: "/home" });
  readonly menu = new Menu({ elements: [this.item] });
}
