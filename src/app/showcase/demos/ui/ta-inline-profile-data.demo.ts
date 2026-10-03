import { ChangeDetectionStrategy, Component } from "@angular/core";

import { InlineProfileDataComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-inline-profile-data-with-logo",
  imports: [InlineProfileDataComponent],
  template: `
    <ta-inline-profile-data
      [profile]="this.profile"
      [userLogo]="{ user: { firstname: 'Claire', lastname: 'Bernard' }, size: 'md' }"
    ></ta-inline-profile-data>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInlineProfileDataWithLogoExample {
  readonly profile = {
    title: { main: "Claire Bernard", second: "Cheffe de chantier", sub: "Équipe rénovation" },
    email: "claire.bernard@example.com",
    phoneNumber: "+32 470 11 22 33",
  };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-inline-profile-data-without-logo",
  imports: [InlineProfileDataComponent],
  template: `<ta-inline-profile-data [profile]="this.profile"></ta-inline-profile-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInlineProfileDataWithoutLogoExample {
  readonly profile = { email: "contact@example.com" };
}

export const DEMO: ComponentDemo = {
  id: "ta-inline-profile-data",
  group: "Affichage",
  summary: "Poste et e-mail d'un profil, avec un `ta-user-logo` optionnel devant.",
  examples: [
    {
      title: "Avec logo utilisateur",
      description:
        "`userLogo` (objet `{ user, size? }`) ajoute un `ta-user-logo` devant le texte. Seuls `profile.title.second` et `profile.email` sont lus par le template : `title.main`, `title.sub` et `phoneNumber` — pourtant tous fournis ici — sont ignorés, vérifié dans `inline-profile-data.component.html`.",
      component: TaInlineProfileDataWithLogoExample,
    },
    {
      title: "Sans logo, poste absent",
      description: "`userLogo` non renseigné (`undefined` par défaut) : rien devant le texte. Sans `title`, seule la ligne e-mail s'affiche.",
      component: TaInlineProfileDataWithoutLogoExample,
    },
  ],
};
