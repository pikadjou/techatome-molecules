import { AsyncPipe } from "@angular/common";
import { Component, OnDestroy, inject } from "@angular/core";

import { of } from "rxjs";

import { DropdownComponent } from "@ta/form-input";
import { InputDropdown } from "@ta/form-model";
import { TaTranslationService, TranslatePipe } from "@ta/translation";
import { ButtonComponent, TrigramComponent } from "@ta/ui";
import { JoinPipe, StopPropagationDirective } from "@ta/utils";
import { TaBaseComponent } from "@ta/utils";

import { TA_AUTH_TOKEN } from "../../services/auth.service";
import { TaPermissionsService } from "../../services/permissions.service";

@Component({
  selector: "ta-user-menu",
  templateUrl: "./menu-user.component.html",
  styleUrls: ["./menu-user.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    StopPropagationDirective,
    TrigramComponent,
    ButtonComponent,
    TranslatePipe,
    JoinPipe,
    DropdownComponent,
  ],
})
export class MenuUserComponent extends TaBaseComponent implements OnDestroy {
  public readonly _permissionsService = inject(TaPermissionsService);

  get roles() {
    return this._permissionsService.roles;
  }

  get getFirstLetter() {
    return (this._authService as any).firstLetter;
  }

  protected _authService = inject(TA_AUTH_TOKEN);
  public language = new InputDropdown<string>({
    label: "",
    options$: of([
      { id: "fr", name: "Français" },
      { id: "nl", name: "Nederlands" },
      { id: "en", name: "English" },
      { id: "es", name: "Español" },
    ]),
  });

  private _translateService = inject(TaTranslationService);

  constructor() {
    super();

    this.language.value = this._translateService.getLanguage();

    this._registerSubscription(
      this.language.changeValue$.subscribe((value) =>
        value ? this._translateService.use(value) : null
      )
    );
  }

  public login() {
    this._authService.login();
  }

  public logout() {
    this._authService.logout();
  }
}
