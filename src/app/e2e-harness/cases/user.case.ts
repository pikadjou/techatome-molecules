import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Observable, of } from "rxjs";

import {
  GuardComponent,
  LoginCardComponent,
  MyAccountComponent,
  SwitchLanguageComponent,
  SwitchLanguageCtaComponent,
  TA_AUTH_TOKEN,
  TA_LANGUAGES,
  TA_USER_SERVICE,
  UserProfile,
} from "@ta/user";
import { TaTestIdDirective } from "@ta/utils";

const MOCK_PROFILE: UserProfile = {
  id: "1",
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  picture: "",
  dateOfBirth: "1990-01-01",
};

/** Auth service factice : neutralise auth0/backend pour monter les composants gardés. */
const MOCK_AUTH = {
  login: () => undefined,
  signin: () => undefined,
  logout: async () => null,
  load: () => undefined,
  changePassword$: (): Observable<string> => of(""),
  fetchUserProfile$: (): Observable<UserProfile> => of(MOCK_PROFILE),
  get userProfile$(): Observable<UserProfile | null> {
    return of(MOCK_PROFILE);
  },
  isAuthenticated$: of(true),
};

/** User service factice : expose un profil sans requête GraphQL. */
const MOCK_USER_SERVICE = {
  userProfile: {
    get$: (): Observable<UserProfile> => of(MOCK_PROFILE),
    fetch: () => undefined,
  },
};

/**
 * Galerie « user » @ta/user — composants d'auth montés avec une session factice.
 * Les tokens `TA_AUTH_TOKEN` / `TA_USER_SERVICE` / `TA_LANGUAGES` sont fournis ici
 * (l'app showcase ne câble pas le module user), sans backend auth0 réel.
 * `ta-user-menu` n'est pas exporté publiquement → non couvert.
 * Route: /e2e-harness/user
 */
@Component({
  standalone: true,
  selector: "app-case-user",
  imports: [
    GuardComponent,
    LoginCardComponent,
    MyAccountComponent,
    SwitchLanguageComponent,
    SwitchLanguageCtaComponent,
    TaTestIdDirective,
  ],
  providers: [
    { provide: TA_AUTH_TOKEN, useValue: MOCK_AUTH },
    { provide: TA_USER_SERVICE, useValue: MOCK_USER_SERVICE },
    {
      provide: TA_LANGUAGES,
      useValue: [
        { id: "fr", name: "Français" },
        { id: "en", name: "English" },
      ],
    },
  ],
  template: `
    <ta-login-card taTestId="ta-login-card"></ta-login-card>
    <ta-my-account taTestId="ta-my-account"></ta-my-account>
    <ta-guard taTestId="ta-guard" [preview]="true">Contenu protégé</ta-guard>
    <ta-switch-language taTestId="ta-switch-language"></ta-switch-language>
    <ta-switch-language-cta taTestId="ta-switch-language-cta"></ta-switch-language-cta>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCase {}
