import { AsyncPipe } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  signal,
} from "@angular/core";

import { Observable, map } from "rxjs";

import { FontIconComponent } from "@ta/icons";
import { Menu, MenuComponent, MenuIcon } from "@ta/menu";
import { TaSizes } from "@ta/styles";
import { TranslatePipe } from "@ta/translation";
import {
  ButtonComponent,
  EmptyComponent,
  ErrorComponent,
  LoaderComponent,
  UserLogoData,
} from "@ta/ui";
import { InlineProfileDataComponent } from "@ta/ui";
import { StopPropagationDirective } from "@ta/utils";
import { TaBaseComponent } from "@ta/utils";

import { TA_AUTH_TOKEN } from "../../services/auth.service";
import { TA_USER_SERVICE } from "../../services/user.service";

@Component({
  selector: "ta-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    FontIconComponent,
    StopPropagationDirective,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
    ButtonComponent,
    MenuComponent,
    TranslatePipe,
    InlineProfileDataComponent,
    StopPropagationDirective,
  ],
})
export class MyAccountComponent extends TaBaseComponent implements OnInit {
  @Input()
  profileMenu: Menu | null = null;

  @Input()
  appVersion: string | null = null;

  @Input()
  isEditable: boolean = false;

  @Output()
  navigateEvent = new EventEmitter();

  @Output()
  navigateEditEvent = new EventEmitter();

  private _userService = inject(TA_USER_SERVICE);
  private _authService = inject(TA_AUTH_TOKEN);

  public disconnectionMenu = signal<Menu | null>(null);
  public userLogo$ = signal<
    Observable<{
      user: UserLogoData;
      size?: TaSizes;
    } | null>
  >(
    this._userService.userProfile.get$().pipe(
      map((up) => {
        if (!up) {
          return null;
        }

        return {
          user: {
            picture: up.picture,
            lastname: up.lastname ?? "",
            firstname: up.firstname ?? "",
          },
          size: "lg",
        };
      })
    )
  );
  constructor() {
    super();
  }

  get profile$() {
    return this._userService.userProfile.get$().pipe(
      map((data) => {
        return {
          title: {
            second: data?.firstname || data?.lastname,
          },
          email: data?.email || "",
        };
      })
    );
  }

  ngOnInit() {
    this.disconnectionMenu.set(this.getDisconnectionMenu());
  }

  public navigateToProfile() {
    this.navigateEvent.emit();
  }

  public disconnect() {
    this._authService.logout().then(() => location.reload());
  }

  public getDisconnectionMenu() {
    const menu = [
      new MenuIcon({
        key: "logout",
        label: "user.logout",
        order: 4,
        style: "dark",
        icon: "logout",
        iconsColor: "icon-color-icon-tertiary",
        callback: () => this.disconnect(),
      }),
    ];

    return new Menu({
      elements: menu.sort((a, b) => a.order - b.order),
      direction: "vertical",
    });
  }

  public navigateToEditProfile() {
    this.navigateEditEvent.emit();
  }
}
