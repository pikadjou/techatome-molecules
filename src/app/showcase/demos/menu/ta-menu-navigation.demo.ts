import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { Menu, MenuIcon, NavigationComponent } from "@ta/menu";
import { TaSizes } from "@ta/styles";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-navigation-tabs",
  imports: [NavigationComponent, TextComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-menu-navigation [menu]="this.menu" container="tab"></ta-menu-navigation>
      <ta-text size="sm">Onglet actif : {{ this.activeLabel() || "(pas encore rendu)" }}</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuNavigationTabsExample {
  protected readonly activeLabel = signal("");

  readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({
        key: "contacts",
        label: "Contacts",
        icon: "person",
        defaultOpen: true,
        callback: () => this.activeLabel.set("Contacts"),
      }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        callback: () => this.activeLabel.set("Notifications"),
      }),
      new MenuIcon({
        key: "settings",
        label: "Paramètres",
        icon: "settings",
        callback: () => this.activeLabel.set("Paramètres"),
      }),
    ],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-navigation-tags",
  imports: [NavigationComponent],
  template: `<ta-menu-navigation [menu]="this.menu" container="tags" [options]="this.options"></ta-menu-navigation>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuNavigationTagsExample {
  protected readonly options: { spaceElement: TaSizes } = { spaceElement: "sm" };

  readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "actifs", label: "Actifs", defaultOpen: true, callback: () => {} }),
      new MenuIcon({ key: "archives", label: "Archivés", callback: () => {} }),
      new MenuIcon({ key: "supprimes", label: "Supprimés", disabled: true, callback: () => {} }),
    ],
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-menu-navigation",
  group: "Navigation",
  summary:
    "Navigation en onglets, étiquettes ou sous-menu, avec suivi interne de l'élément actif — sans dépendre du routeur quand les éléments portent un `callback`.",
  examples: [
    {
      title: "Onglets (`container: 'tab'`)",
      layout: "stack",
      description:
        "Chaque élément porte un `callback` : `isActive()` compare `item.key` à `activeKey`, mis à jour au clic — un état réellement suivi, indépendant du routeur.",
      component: TaMenuNavigationTabsExample,
    },
    {
      title: "Étiquettes (`container: 'tags'`), espacement réduit",
      layout: "stack",
      description:
        "`options.spaceElement` pilote le `gap` entre étiquettes (classe `g-space-{taille}`, `lg` par défaut). L'élément « Supprimés » est `disabled` : `callback()` retourne avant de changer `activeKey`, le clic n'a donc aucun effet.",
      component: TaMenuNavigationTagsExample,
    },
  ],
  notes:
    "Un élément sans `callback` (et non `disabled`) suit la branche `routerLink`/`routerLinkActive` du template : sur cette page de vitrine, l'URL ne correspond à aucun lien de menu, donc aucun état actif fiable n'y serait visible — les deux exemples ci-dessus évitent cette branche en donnant un `callback` à chaque élément. `swiper` (rendu via `ta-swiper-light`) et `manuallyChanged$` (pilotage externe de l'onglet actif par un `Observable<string>`) ne sont pas démontrés ici.",
};
