import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from "@angular/core";

import { ButtonComponent, LayoutHeaderLogoComponent, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-header-logo-working",
  imports: [LayoutHeaderLogoComponent, ButtonComponent, TextComponent],
  template: `
    <ta-layout-header-logo [profile]="{ template: this.profileTpl, user: this.user }" [notificationTemplate]="this.notifTpl"> </ta-layout-header-logo>

    <ta-button type="secondary" size="small" (action)="this.header.isProfileOpen.set(true)"> Ouvrir le profil (l'avatar n'est pas cliquable, voir description) </ta-button>

    <ng-template #profileTpl>
      <div class="flex-column g-space-sm">
        <ta-text [isBold]="true">Camille Petit</ta-text>
        <ta-text size="sm">camille.petit&#64;example.com</ta-text>
      </div>
    </ng-template>

    <ng-template #notifTpl>
      <ta-text>3 nouvelles notifications.</ta-text>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutHeaderLogoWorkingExample {
  @ViewChild(LayoutHeaderLogoComponent) readonly header!: LayoutHeaderLogoComponent;
  @ViewChild("profileTpl", { static: true }) profileTpl!: TemplateRef<unknown>;
  @ViewChild("notifTpl", { static: true }) notifTpl!: TemplateRef<unknown>;

  readonly user = {
    profilePictureUrl: undefined,
    naming: { name: "Camille Petit", firstName: "Camille", trigram: "CP" },
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-header-logo",
  group: "Mise en page",
  summary: "Ligne d'en-tête avec avatar de profil, logo central et cloche de notifications, chacun ouvrant une `ta-modal` plein écran sur un `TemplateRef` fourni.",
  examples: [
    {
      title: "Profil et notifications",
      layout: "stack",
      description:
        "Bug de bibliothèque vérifié en conditions réelles (rendu de src/app/e2e-harness/cases/ui-layout.case.ts) : le tableau `imports` de `LayoutHeaderLogoComponent` (layout-header-logo.component.ts) liste `NgTemplateOutlet`, `FontIconComponent` et `TaModalComponent`, mais **pas** `UserLogoComponent` ni `LogoComponent`, alors que le template utilise `<ta-user-logo>` et `<ta-logo>`. Le composant porte `schemas: [CUSTOM_ELEMENTS_SCHEMA]`, qui supprime l'erreur Angular attendue (`NG0303`/élément inconnu) au lieu de la révéler : ces deux balises sont donc silencieusement traitées comme des éléments HTML inertes, sans rendu visuel (ni avatar, ni logo). Leurs gestionnaires `(click)` restent câblés — ce sont des écouteurs DOM natifs, indépendants de la résolution du composant — mais rien n'indique à l'écran qu'il faut cliquer là : le bouton ci-dessus appelle directement le signal public `isProfileOpen` du composant pour ouvrir la modale de profil de façon fiable. Seule la cloche de notifications (`ta-font-icon`, correctement importée) est réellement visible et cliquable ; elle ouvre une `ta-modal` plein écran sur `notificationTemplate` quand celui-ci est fourni (sinon elle reste grisée via la classe `disabled`, vérifié dans layout-header-logo.component.html).",
      component: TaLayoutHeaderLogoWorkingExample,
    },
  ],
  notes:
    "Le logo central appelle `goToHome()` (`this._router.navigateByUrl('/')`) — même s'il ne s'affiche pas ici (voir ci-dessus), cliquer sa zone dans une page réelle où il serait correctement importé ferait quitter la page courante. Composant non réparé ici : hors périmètre de cette vitrine (voir `layout-header-logo.component.ts`).",
};
