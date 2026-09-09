import { ChangeDetectionStrategy, Component, signal, TemplateRef } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";

import { MenuIcon, MenuItemComponent, MenuPanel } from "@ta/menu";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-item-badge",
  imports: [MenuItemComponent],
  template: `
    <div style="max-width: 220px">
      <ta-menu-item [item]="this.item" styleType="vertical"></ta-menu-item>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuItemBadgeExample {
  readonly item = new MenuIcon({
    key: "notifications",
    label: "Notifications",
    icon: "notifications",
    options: { notificationBadge: { label: 5 } },
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-item-submenu",
  imports: [MenuItemComponent, MatMenuModule, TextComponent],
  template: `
    <ng-template #sousMenu>
      <button mat-menu-item (click)="this.lastChoice.set('Profil')">Profil</button>
      <button mat-menu-item (click)="this.lastChoice.set('Se déconnecter')">Se déconnecter</button>
    </ng-template>
    <div class="flex-column g-space-sm" style="max-width: 220px">
      <ta-menu-item [item]="this.buildPanel(sousMenu)" styleType="vertical"></ta-menu-item>
      <ta-text size="sm">Choix du sous-menu : {{ this.lastChoice() ?? "aucun" }}</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuItemSubmenuExample {
  protected readonly lastChoice = signal<string | null>(null);

  private _panel?: MenuPanel;

  // `MenuPanel.template` doit être un `TemplateRef` réel. `sousMenu`, la
  // référence locale du gabarit ci-dessus, est résolue avant l'évaluation de
  // cette expression — les références locales d'un template ont toute sa
  // portée, quel que soit leur ordre d'apparition. On mémoïse pour ne pas
  // reconstruire l'objet à chaque détection de changements.
  protected buildPanel(template: TemplateRef<unknown>): MenuPanel {
    return (this._panel ??= new MenuPanel({ key: "parametres", label: "Paramètres", icon: "settings", template }));
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-menu-item-disabled",
  imports: [MenuItemComponent],
  template: `
    <div style="max-width: 220px">
      <ta-menu-item [item]="this.item" styleType="vertical"></ta-menu-item>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMenuItemDisabledExample {
  readonly item = new MenuIcon({ key: "export", label: "Exporter", icon: "download", disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-menu-item",
  group: "Menu",
  summary:
    "Élément de menu unique : icône, libellé, badge de notification optionnel, lien ou action au clic, et sous-menu à deux niveaux via `MenuPanel`.",
  examples: [
    {
      title: "Avec badge de notification",
      description: "`item.options.notificationBadge.label` affiche `ta-notification-badge` à droite du libellé.",
      component: TaMenuItemBadgeExample,
    },
    {
      title: "Sous-menu à deux niveaux",
      layout: "stack",
      description:
        "Un `MenuPanel` (sous-classe de `MenuIcon` portant un `template`) fait ouvrir un `mat-menu` au clic au lieu de suivre un lien : c'est le seul mécanisme à deux niveaux que ce composant gère réellement — `item.children`, lui, ne rend rien (voir les notes).",
      component: TaMenuItemSubmenuExample,
    },
    {
      title: "Désactivé",
      description:
        "`disabled` ne réduit que l'opacité (classe `.disable`, `opacity: 0.5`) : `executeCallback()` n'a aucune garde sur `disabled`, le clic reste actif — contrairement à `ta-context-menu` ou `ta-menu-navigation`, qui bloquent réellement la navigation ou le callback d'un élément désactivé.",
      component: TaMenuItemDisabledExample,
    },
  ],
  notes:
    "`item.children` (hérité de `MenuBase`) n'est lu que par `hasChild()`, qui — s'il est vrai — fait disparaître tout le bloc lien/action de l'élément sans le remplacer par rien : un élément avec des `children` non vides s'affiche vide dans ce composant. Cette démo n'en construit donc aucun. `isOpen`/`toggle()` ne semblent lus par aucune expression du template actuel. `MenuAction`, un des types acceptés par `item`, n'est pas exporté par `@ta/menu` (`models/public-api.ts` l'omet).",
};
