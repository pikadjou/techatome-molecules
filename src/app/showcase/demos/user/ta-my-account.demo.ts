import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-my-account",
  group: "Authentification",
  summary: "Carte de profil connecté : identité, menu de profil optionnel, bouton d'édition optionnel et déconnexion, via les jetons `TA_USER_SERVICE` et `TA_AUTH_TOKEN` (`@ta/user`).",
  examples: [],
  notRenderable: {
    reason:
      "`my-account.component.html` (ligne 33) contient `@let disconnectionMenu = this.disconnectionMenu();` : le nom de la variable de bloc est identique au membre de classe lu sur la même ligne (`disconnectionMenu` signal, toujours peuplé par `ngOnInit()`, sans lien avec un input). Le compilateur Angular (18.2 — vérifié à la fois via `ng build Techatome --configuration development` et `ng serve`) le compile en `ɵɵstoreLet(undefined())` au lieu de `ɵɵstoreLet(ctx.disconnectionMenu())` — visible dans le bundle émis. Ce `@let` s'exécute sans condition à chaque rendu : toute instance de `ta-my-account`, quels que soient ses inputs, lève `TypeError: undefined is not a function` dans `MyAccountComponent_Template` dès le premier rendu. Le bug est antérieur à cette tâche : il reproduit à l'identique dans `src/app/e2e-harness/cases/user.case.ts`, où il interrompt aussi le rendu des composants montés après `ta-my-account` dans le même parent (`ta-guard`, `ta-switch-language`, `ta-switch-language-cta`, tous sains isolément — voir leurs démos respectives). Hors périmètre de la vitrine de le corriger ; le renommer localement (ex. `disconnectionMenuValue`) suffirait.",
    usage: `<ta-my-account
  [profileMenu]="this.profileMenu"
  [appVersion]="this.appVersion"
  [isEditable]="true"
  (navigateEvent)="this.onNavigateToProfile()"
  (navigateEditEvent)="this.onNavigateToEdit()"
></ta-my-account>`,
  },
  notes:
    "API prévue (non démontrable, voir ci-dessus) : `profileMenu` (`Menu | null`) ajoute des entrées sous l'identité, `appVersion` s'affiche en pied de carte, `isEditable` ajoute un bouton « Modifier » émettant `navigateEditEvent` ; cliquer la ligne de profil émet `navigateEvent`. Une entrée « Déconnexion » est toujours affichée (`getDisconnectionMenu()`), qu'un `profileMenu` soit fourni ou non.",
};
