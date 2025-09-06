import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';

import { Observable, map } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { Menu, MenuComponent, MenuIcon, MenuPanel } from '@ta/menu';
import { TaSizes } from '@ta/styles';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent, UserLogoData } from '@ta/ui';
import { InlineProfileDataComponent } from '@ta/ui';
import { StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';

import { TA_AUTH_TOKEN } from '../../services/auth.service';
import { TA_USER_SERVICE } from '../../services/user.service';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';

@Component({
  selector: 'ta-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
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
    SwitchLanguageComponent,
    TranslatePipe,
    InlineProfileDataComponent,
    StopPropagationDirective,
  ],
})
export class MyAccountComponent extends TaBaseComponent implements AfterViewInit {
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

  private _userService = inject(TA_USER_SERVICE);
  private _authService = inject(TA_AUTH_TOKEN);

  public profileMenu = signal<Menu | null>(null);
  public disconnectionMenu = signal<Menu | null>(null);
  public userLogo$ = signal<Observable<{
    user: UserLogoData;
    size?: TaSizes;
  } | null>>(this._userService.userProfile.get$().pipe(
      map(up => {
        if (!up) {
          return null;
        }

        return {
          user: {
            picture: up.picture,
            lastname: up.lastname ?? '',
            firstname: up.firstname ?? '',
          },
          size: 'lg',
        };
      })
    )
  )
  constructor() {
    super();
  }

  get profile$() {
    return this._userService.userProfile.get$().pipe(
      map(data => {
        return {
          title: {
            second: data?.firstname || data?.lastname,
          },
          email: data?.email || '',
        };
      })
    );
  }



  ngAfterViewInit() {
    this.profileMenu.set(this.getProfileMenu(this.languageTemplate, this.infosTemplate));
    this.disconnectionMenu.set(this.getDisconnectionMenu());
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
}
