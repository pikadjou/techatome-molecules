import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { UserLogoData, UsersListComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-users-list-values",
  imports: [UsersListComponent],
  template: `<ta-users-list [users]="this.users$"></ta-users-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaUsersListValuesExample {
  readonly users$ = of<UserLogoData[]>([
    { firstname: "Alice", lastname: "Martin" },
    { firstname: "Bo", lastname: "Lambert" },
    { firstname: "Claire", lastname: "Bernard" },
  ]);
}

@Component({
  standalone: true,
  selector: "app-ex-ta-users-list-empty",
  imports: [UsersListComponent],
  template: `<ta-users-list [users]="this.users$"></ta-users-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaUsersListEmptyExample {
  readonly users$ = of<UserLogoData[]>([]);
}

export const DEMO: ComponentDemo = {
  id: "ta-users-list",
  group: "Affichage",
  summary: "Rangée de `ta-user-logo` (taille `md`, trigramme forcé) à partir d'un flux d'utilisateurs.",
  examples: [
    {
      title: "Liste",
      description: "`users` attend un `Observable<UserLogoData[]>` (`| async` en interne) ; chaque avatar force `size=\"md\"` et `defaultType=\"trigram\"`, sans exposer ces réglages.",
      component: TaUsersListValuesExample,
    },
    { title: "Liste vide", description: "Un flux résolvant `[]` : la boucle `@for` ne produit aucun avatar, seul le conteneur flex vide reste.", component: TaUsersListEmptyExample },
  ],
};
