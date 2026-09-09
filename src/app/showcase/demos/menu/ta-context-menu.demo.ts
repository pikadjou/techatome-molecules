import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ContextMenuComponent, Menu, MenuIcon } from "@ta/menu";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-context-menu-grid",
  imports: [ContextMenuComponent],
  template: `<ta-context-menu [menu]="this.menu"></ta-context-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContextMenuGridExample {
  readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person", disabled: true }),
      new MenuIcon({ key: "notifications", label: "Notifications", icon: "notifications" }),
      new MenuIcon({ key: "settings", label: "Paramètres", icon: "settings" }),
      new MenuIcon({ key: "export", label: "Exporter", icon: "download" }),
      new MenuIcon({ key: "search", label: "Rechercher", icon: "search" }),
    ],
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-context-menu",
  group: "Menu",
  summary: "Grille d'actions en tuiles (icône + libellé), une tuile par élément de `menu`, chacune un `routerLink`.",
  examples: [
    {
      title: "Grille de tuiles",
      layout: "stack",
      description:
        "Chaque tuile est un `[routerLink]` (`getRoute()`), actif même sans `link` renseigné — seul un élément `disabled: true` (« Contacts » ci-dessus) fait renvoyer `getRoute()` un tableau vide, ce qui bloque réellement la navigation.",
      component: TaContextMenuGridExample,
    },
  ],
  notes:
    "Le composant surligne la tuile active via `routerLinkActive=\"active\"`, comparé à l'URL courante du routeur — sur cette page de vitrine, l'URL est celle de la démo elle-même, qu'aucune tuile ne référence : aucune n'apparaît donc active ici, ce n'est pas un défaut du composant. `hasIconImage()`/`ta-local-icon` (icônes numériques `TaIconType`, dépréciées) sont gérées par ce composant mais non démontrées : tous les éléments ci-dessus utilisent des icônes de police (chaînes). `MenuAction`, un des types acceptés par `menu.elements`, n'est pas exporté par `@ta/menu` (`models/public-api.ts` l'omet) — seuls `MenuIcon` et `MenuBase` sont utilisables depuis l'application.",
};
