import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";

import { TextComponent } from "@ta/ui";
import { LoginCardComponent, TA_AUTH_TOKEN } from "@ta/user";

import { ComponentDemo } from "../../demo.types";

/**
 * `LoginCardComponent.login()` ne fait que relayer `TA_AUTH_TOKEN.login()` — en
 * pratique un flot Auth0 absent de la vitrine. Ce mock enregistre l'appel dans un
 * signal, que l'exemple affiche, pour prouver le déclenchement sans backend réel.
 */
class DemoAuthService {
  readonly loginRequested = signal(false);

  login(): void {
    this.loginRequested.set(true);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-login-card-default",
  imports: [LoginCardComponent, TextComponent],
  providers: [{ provide: TA_AUTH_TOKEN, useClass: DemoAuthService }],
  template: `
    <div class="flex-column g-space-sm">
      <ta-login-card></ta-login-card>
      <ta-text size="sm">Connexion demandée : {{ this.auth.loginRequested() ? "oui" : "non" }}</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLoginCardDefaultExample {
  // Typé `TaAuthService` par le jeton ; c'est bien l'instance `DemoAuthService`
  // fournie ci-dessus qui est injectée, d'où le recours à `unknown` pour la caster.
  protected auth = inject(TA_AUTH_TOKEN) as unknown as DemoAuthService;
}

export const DEMO: ComponentDemo = {
  id: "ta-login-card",
  group: "Authentification",
  summary: "Carte cliquable déclenchant la connexion, via le jeton d'injection `TA_AUTH_TOKEN` (`@ta/user`) que l'application hôte doit fournir.",
  examples: [
    {
      title: "Utilisation",
      description: "La carte entière et son bouton appellent tous deux `login()` de l'auth service injecté ; aucun état de connexion n'est représenté par le composant lui-même.",
      component: TaLoginCardDefaultExample,
    },
  ],
  notes:
    "Sans fournisseur pour `TA_AUTH_TOKEN`, `inject(TA_AUTH_TOKEN)` échoue au montage : ce jeton n'a pas de valeur par défaut. L'application réelle le fournit via `provideAuth0()` (voir `@ta/user`).",
};
