import { ChangeDetectionStrategy, Component } from "@angular/core";

import { UserLogoComponent, UserLogoData } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-user-logo-sizes",
  imports: [UserLogoComponent],
  template: `
    <ta-user-logo [user]="this.user" size="sm"></ta-user-logo>
    <ta-user-logo [user]="this.user" size="md"></ta-user-logo>
    <ta-user-logo [user]="this.user" size="lg"></ta-user-logo>
    <ta-user-logo [user]="this.user" size="xl"></ta-user-logo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaUserLogoSizesExample {
  readonly user: UserLogoData = { firstname: "Alice", lastname: "Martin" };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-user-logo-default-type",
  imports: [UserLogoComponent],
  template: `
    <ta-user-logo [user]="this.alice" defaultType="trigram"></ta-user-logo>
    <ta-user-logo [user]="this.bo" defaultType="trigram"></ta-user-logo>
    <ta-user-logo [user]="this.alice" defaultType="font"></ta-user-logo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaUserLogoDefaultTypeExample {
  // "Alice" (>= 4 caractères) : getTrigram() prend les caractères d'indices
  // 0, 2 et 3 — pas les trois premières lettres — et les met en majuscules : "AIC".
  readonly alice: UserLogoData = { firstname: "Alice", lastname: "Martin" };

  // "Bo" (< 4 caractères) : la chaîne entière est utilisée telle quelle, sans majuscule.
  readonly bo: UserLogoData = { firstname: "Bo", lastname: "Lambert" };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-user-logo-picture",
  imports: [UserLogoComponent],
  template: `<ta-user-logo [user]="this.withPicture" size="xl"></ta-user-logo>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaUserLogoPictureExample {
  readonly withPicture: UserLogoData = {
    firstname: "David",
    lastname: "Leroy",
    picture: "/assets/partners/icon/icon.png",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-user-logo",
  group: "Affichage",
  summary: "Avatar utilisateur : photo si fournie, sinon trigramme ou icône générique.",
  examples: [
    {
      title: "Tailles",
      description: "`size` (`sm`/`md`/`lg`/`xl` ici) fixe le diamètre (16/24/48/70px, `sizeValue`) ; `forcedSize` (non démontré) l'outrepasse en pixels exacts.",
      component: TaUserLogoSizesExample,
    },
    {
      title: "Type par défaut, sans photo",
      description:
        "Sans `picture`, `defaultType` choisit entre un trigramme (`getTrigram()`, indices 0/2/3 du prénom, en majuscules — « Alice » donne « AIC ») ou l'icône générique `profil-picture`. En dessous de quatre caractères, `getTrigram()` renvoie le prénom tel quel : « Bo » reste « Bo ».",
      component: TaUserLogoDefaultTypeExample,
    },
    { title: "Avec photo", description: "`user.picture` renseigné prend le pas sur `defaultType`, quel qu'il soit.", component: TaUserLogoPictureExample },
  ],
};
