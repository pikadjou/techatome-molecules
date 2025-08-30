import { AsyncPipe, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { Menu, MenuComponent, MenuIcon, MenuPanel } from '@ta/menu';
import { TaSizes } from '@ta/styles';
import { TranslatePipe } from '@ta/translation';
import {
  ButtonComponent,
  EmptyComponent,
  ErrorComponent,
  InlineProfileDataComponent,
  LoaderComponent,
  UserLogoNaming,
} from '@ta/ui';
import { StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';

import { CAM_AUTH_TOKEN } from '../../services/auth.service';
import { TaUsersService } from '../../services/users.service';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';

@Component({
  selector: 'ta-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    FontIconComponent,
    StopPropagationDirective,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
    InlineProfileDataComponent,
    ButtonComponent,
    MenuComponent,
    SwitchLanguageComponent,
    TranslatePipe,
  ],
})
export class MyAccountComponent extends TaBaseComponent {
  @Input()
  infosMenu: Menu | null = null;

  @Input()
  appVersion: string | null = null;

  @Input()
  isEditable: boolean = false;

  @Output()
  navigateEvent = new EventEmitter();

  @Output()
  navigateEditEvent = new EventEmitter();

  @ViewChild('languageTemplate', { static: true })
  languageTemplate!: TemplateRef<any>;

  @ViewChild('infosTemplate', { static: true })
  infosTemplate!: TemplateRef<any>;

  private _authService = inject(CAM_AUTH_TOKEN);

  public profileMenu: Menu | null = null;
  public disconnectionMenu: Menu | null = null;

  get currentUser$() {
    return this._usersService.currentUser.get$();
  }

  constructor(private _usersService: TaUsersService) {
    super();
    this._fetch();
  }

  get profile$() {
    return this.currentUser$.pipe(
      map(data => {
        return {
          title: {
            second: data?.firstName || data?.lastName,
          },
          email: data?.userName,
        };
      })
    );
  }

  get userLogo$(): Observable<{
    userInfo: {
      profilePictureUrl?: string;
      naming: UserLogoNaming;
    };
    size?: TaSizes;
  } | null> {
    return this.currentUser$.pipe(
      map(x => {
        if (!x) {
          return null;
        }

        return {
          userInfo: {
            profilePictureUrl: x.picture,
            naming: {
              name: x.firstName || '',
              firstName: x.lastName || '',
              trigram: x.trigram || '',
            },
          },
          size: 'lg',
        };
      })
    );
  }

  ngAfterViewChecked() {
    this.profileMenu = this.getProfileMenu(this.languageTemplate, this.infosTemplate);
    this.disconnectionMenu = this.getDisconnectionMenu();
  }

  public navigateToProfile() {
    this.navigateEvent.emit();
  }

  public disconnect() {
    this._authService.logout().then(() => location.reload());
  }

  public getProfileMenu(languageTemplate: TemplateRef<any>, infosTemplate: TemplateRef<any>) {
    const menu = [
      new MenuPanel({
        key: 'language',
        label: 'user.language',
        order: 2,
        template: languageTemplate,
        style: 'dark',
        icon: 'language',
        iconsColor: 'icon-color-icon-tertiary',
        endingIcon: 'arrow-big-right',
      }),
      new MenuPanel({
        key: 'infos',
        label: 'user.infos',
        order: 3,
        template: infosTemplate,
        style: 'dark',
        icon: 'infos',
        iconsColor: 'icon-color-icon-tertiary',
        endingIcon: 'arrow-big-right',
      }),
      new MenuIcon({
        key: 'params',
        label: 'user.params',
        order: 4,
        disabled: true,
        style: 'dark',
        icon: 'label',
        iconsColor: 'icon-color-icon-tertiary',
      }),
    ];

    return new Menu({
      elements: menu.sort((a, b) => a.order - b.order),
      direction: 'vertical',
    });
  }

  public getDisconnectionMenu() {
    const menu = [
      new MenuIcon({
        key: 'logout',
        label: 'user.logout',
        order: 4,
        style: 'dark',
        icon: 'log-out',
        iconsColor: 'icon-color-icon-tertiary',
        callback: () => this.disconnect(),
      }),
    ];

    return new Menu({
      elements: menu.sort((a, b) => a.order - b.order),
      direction: 'vertical',
    });
  }

  public navigateToEditProfile() {
    this.navigateEditEvent.emit();
  }

  private _fetch() {
    this.requestState.asked();
    this._usersService.fetchCurrentUser$().subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
