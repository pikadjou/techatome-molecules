import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { MainMenuComponent, Menu, MenuIcon } from "@ta/menu";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-main-menu-desktop",
  imports: [MainMenuComponent],
  template: `<ta-main-menu [menuMain]="this.menuMain" [menuUser]="this.menuUser" direction="horizontal"></ta-main-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMainMenuDesktopExample {
  readonly menuMain = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        options: { notificationBadge: { label: 2 } },
      }),
    ],
  });

  readonly menuUser = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "profil", label: "Profil", icon: "settings" }),
      new MenuIcon({ key: "logout", label: "Se déconnecter", icon: "logout" }),
    ],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-main-menu-custom-user-zone",
  imports: [MainMenuComponent, FontIconComponent],
  template: `
    <ng-template #utilisateur>
      <div class="flex-row g-space-xs align-center">
        <ta-font-icon name="person" type="sm"></ta-font-icon>
        <span>Amélie Laurent</span>
      </div>
    </ng-template>
    <ta-main-menu [menuMain]="this.menuMain" [userMenuTemplate]="utilisateur" direction="horizontal"></ta-main-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMainMenuCustomUserZoneExample {
  readonly menuMain = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
    ],
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-main-menu",
  group: "Menu",
  summary:
    "Barre de navigation principale de l'application : logo, `ta-menu` pour `menuMain`, et zone utilisateur optionnelle (`menuUser` ou `userMenuTemplate`).",
  examples: [
    {
      title: "En-tête complet",
      layout: "stack",
      description: "`menuMain` et `menuUser` sont chacun rendus par un `ta-menu` interne (`container: 'main'`).",
      component: TaMainMenuDesktopExample,
    },
    {
      title: "Zone utilisateur personnalisée",
      layout: "stack",
      description:
        "`userMenuTemplate` ajoute n'importe quel gabarit dans la zone utilisateur ; il peut coexister avec `menuUser`, qui s'affiche alors en plus, pas à sa place.",
      component: TaMainMenuCustomUserZoneExample,
    },
  ],
  notes:
    "Le composant bascule vers une disposition mobile (panneau latéral, icône `menu`) sous le point de rupture `isMobile` (`BreakpointDetection`, `@ta/utils`) ; cette page ne peut pas forcer cet état d'écran, seule la disposition bureau est visible ici. `direction` vaut `'vertical'` par défaut — les deux exemples le forcent à `'horizontal'`, l'usage réel d'un en-tête. `toggleView()` bascule `TaSharedMenuService.isMinimized$`, mais ce composant ne lit cette valeur nulle part dans son propre template : la bascule n'a aucun effet observable ici.",
};
