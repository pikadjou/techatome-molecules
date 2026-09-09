import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Menu, MenuComponent, MenuIcon } from "@ta/menu";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-containers",
  imports: [MenuComponent],
  template: `
    <div class="flex-row g-space-xl">
      <div class="flex-column g-space-xs">
        <span>main</span>
        <ta-menu [menu]="this.menu" container="main"></ta-menu>
      </div>
      <div class="flex-column g-space-xs">
        <span>second</span>
        <ta-menu [menu]="this.menu" container="second"></ta-menu>
      </div>
      <div class="flex-column g-space-xs">
        <span>overflow</span>
        <ta-menu [menu]="this.menu" container="overflow"></ta-menu>
      </div>
      <div class="flex-column g-space-xs">
        <span>panel</span>
        <ta-menu [menu]="this.menu" container="panel"></ta-menu>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuContainersExample {
  readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "home", label: "Accueil", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
    ],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-main-with-badge",
  imports: [MenuComponent],
  template: `
    <div style="max-width: 420px">
      <ta-menu [menu]="this.menu" container="main"></ta-menu>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuMainWithBadgeExample {
  readonly menu = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        options: { notificationBadge: { label: 3 } },
      }),
      new MenuIcon({ key: "settings", label: "Paramètres", icon: "settings" }),
    ],
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-menu",
  group: "Menu",
  summary:
    "Liste de `ta-menu-item` construite à partir d'un `Menu` ; `container` choisit la classe CSS appliquée (`main-nav`, `second`, `overflow vertical`, ou aucune pour `panel`).",
  examples: [
    {
      title: "Les quatre valeurs de `container`",
      description:
        "`main` et `second` reprennent `menu.direction` (ici `responsive`, la valeur par défaut) ; `overflow` force une liste verticale quelle que soit `direction` ; `panel` n'ajoute aucune classe de disposition.",
      component: TaMenuContainersExample,
    },
    {
      title: "Menu principal avec badge de notification",
      layout: "stack",
      description: "`direction: 'horizontal'` sur le `Menu`, avec un élément portant `options.notificationBadge`.",
      component: TaMenuMainWithBadgeExample,
    },
  ],
  notes:
    "`MenuAction`, un des types acceptés par `menu.elements` en plus de `MenuIcon`/`MenuBase`, n'est pas exporté par `@ta/menu` (`models/public-api.ts` l'omet) — inutilisable depuis l'application, comme dans `__mock__/menu.ts` qui ne s'en sert jamais non plus.",
};
