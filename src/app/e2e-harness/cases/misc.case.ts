import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { PwaComponent } from "@ta/ui";
import { TaPwaService } from "@ta/capacitor";
import { TaTestIdDirective } from "@ta/utils";

/** TaPwaService factice : neutralise la détection PWA / l'installation. */
const MOCK_PWA_SERVICE = {
  isPWaCapability$: of(false),
  launchInstall: () => undefined,
};

/**
 * Galerie « misc » — `ta-pwa` monté avec un service PWA factice.
 * `ta-google-maps` non couvert : exige l'API JS Google Maps (global `google`)
 * chargée — dépendance externe, non mockable proprement.
 * `ta-strapi-cms` non exporté publiquement.
 * Route: /e2e-harness/misc
 */
@Component({
  standalone: true,
  selector: "app-case-misc",
  imports: [PwaComponent, TaTestIdDirective],
  providers: [{ provide: TaPwaService, useValue: MOCK_PWA_SERVICE }],
  template: ` <ta-pwa taTestId="ta-pwa"></ta-pwa> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiscCase {}
