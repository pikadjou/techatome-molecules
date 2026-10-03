import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { TextComponent } from "@ta/ui";
import { GuardComponent, TaPermissionsService } from "@ta/user";

import { ComponentDemo } from "../../demo.types";

// Chaque exemple fournit sa propre instance de `TaPermissionsService`
// (`providedIn: 'root'` sinon) : sans cela, les quatre variantes partageraient
// le même service que la navigation réelle de l'application, avec un état
// imprévisible selon la session.

@Component({
  standalone: true,
  selector: "app-ex-ta-guard-authorized",
  imports: [GuardComponent, TextComponent],
  providers: [TaPermissionsService],
  template: `<ta-guard [feature]="'reports'"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGuardAuthorizedExample {
  constructor() {
    // `level` non fourni retombe sur `'authorize'` (voir `isGuardValid$()`), qui
    // teste l'appartenance de `feature` à `TaPermissionsService.features`.
    inject(TaPermissionsService).set({ features: ["reports"] }, true);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-guard-denied",
  imports: [GuardComponent, TextComponent],
  providers: [TaPermissionsService],
  template: `<ta-guard [level]="'authenticated'"><ta-text>Contenu réservé aux utilisateurs authentifiés.</ta-text></ta-guard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGuardDeniedExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-guard-preview",
  imports: [GuardComponent, TextComponent],
  providers: [TaPermissionsService],
  template: `<ta-guard [feature]="'reports'" [preview]="true"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGuardPreviewExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-guard-silent",
  imports: [GuardComponent, TextComponent],
  providers: [TaPermissionsService],
  template: `<ta-guard [feature]="'reports'" [canDisplayErrorMessage]="false"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGuardSilentExample {}

export const DEMO: ComponentDemo = {
  id: "ta-guard",
  group: "Authentification",
  summary: "Garde d'accès conditionnant l'affichage de son contenu projeté à `TaPermissionsService` (`@ta/user`), par fonctionnalité, rôle ou simple authentification.",
  examples: [
    {
      title: "Accès autorisé",
      description: "`isGuardValid$()` s'appuie sur `TaPermissionsService.canAccess$(feature, level)` ; ici `features` contient `'reports'` et le contenu projeté s'affiche normalement.",
      component: TaGuardAuthorizedExample,
    },
    {
      title: "Accès refusé, message par défaut",
      description: "Service neuf, donc `isAuthenticated=false` : `level=\"authenticated\"` échoue, et le message par défaut s'affiche avec un bouton « Me connecter », visible seulement pour ce niveau (voir le template `guard.component.html`).",
      component: TaGuardDeniedExample,
    },
    {
      title: "Accès refusé, en aperçu",
      description: "`preview=true` affiche quand même le contenu projeté, recouvert d'un overlay avec deux actions (`goToLogin()`, `goToRegister()`), plutôt que de le masquer.",
      component: TaGuardPreviewExample,
    },
    {
      title: "Accès refusé, message masqué",
      description: "`canDisplayErrorMessage=false` : ni le contenu ni le message ne s'affichent — l'exemple ci-dessous est vide intentionnellement.",
      component: TaGuardSilentExample,
    },
  ],
  notes:
    "`role` (alternative à `feature`+`level`, testée via `TaPermissionsService.hasRole$()`) n'est pas démontré séparément : son effet est le même bascule autorisé/refusé que `feature`, seule la source de la vérification change (voir `isGuardValid$()`). `noAccessIcon` est un accesseur interne au template (icône `TaIconType.NoAccess` du message par défaut), sans usage depuis l'extérieur du composant.",
};
