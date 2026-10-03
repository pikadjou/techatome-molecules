import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";
import { LocalStorage } from "storage-manager-js";

import { PwaComponent } from "@ta/ui";
import { TaPwaService } from "@ta/capacitor";

import { ComponentDemo } from "../../demo.types";

/** Service factice : simule un navigateur qui propose l'installation PWA (évènement `beforeinstallprompt`). */
const MOCK_PWA_SERVICE = { isPWaCapability$: of(true), launchInstall: () => undefined };

@Component({
  standalone: true,
  selector: "app-ex-ta-pwa-prompt",
  imports: [PwaComponent],
  providers: [{ provide: TaPwaService, useValue: MOCK_PWA_SERVICE }],
  template: `<ta-pwa></ta-pwa>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaPwaPromptExample {
  constructor() {
    // `isShowed` (propriété simple, pas un signal) se calcule dans le constructeur
    // à partir de `capability && !LocalStorage.get('askForPwaAbility')` : un clic
    // précédent sur « Ne plus demander » (`dontAsk()`) mémorise ce refus dans le
    // navigateur et masquerait cet exemple sans ce nettoyage.
    LocalStorage.delete("askForPwaAbility");
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-pwa",
  group: "Overlays",
  summary: "Bandeau flottant proposant l'installation en PWA, affiché quand le navigateur signale la capacité d'installation.",
  examples: [
    {
      title: "Invite d'installation",
      description:
        "`isShowed` (calculé dans le constructeur à partir de `TaPwaService.isPWaCapability$`) vaut ici vrai grâce à un service factice fourni en `providers` — dans une vraie application, le navigateur ne l'émet qu'après son propre évènement `beforeinstallprompt`.",
      component: TaPwaPromptExample,
    },
  ],
  notes:
    "Le bandeau est en position `fixed`, ancré en bas à droite de l'écran (`.pwa-layout` dans `pwa.component.scss`, `z-index: 5000`) : il recouvre le bas de la page entière, pas seulement la carte de cet exemple — vérifié à l'exécution (bandeau visible hors de la carte de l'exemple, avec le logo `ta-logo` et les libellés « Install app »/« Cancel »/« Don't show again » en anglais plutôt qu'en français, même écart de locale que sur `ta-container-validation`/`ta-validation-modal` pour l'espace de traduction lazy-chargé `ui.*`). Il n'a aucune entrée pilotable depuis l'extérieur — ni `open`, ni bouton pour le déclencher manuellement — sa visibilité dépend uniquement de `TaPwaService` et du `localStorage` du visiteur ; « Ne plus demander » écrit `askForPwaAbility` dans le `localStorage` réel du navigateur et masque le bandeau durablement, y compris hors de cette page. `askClose`, la seule sortie du composant, n'est jamais émise par la classe (vérifié dans `pwa.component.ts`) : elle n'est démontrée nulle part ici faute d'usage réel.",
};
