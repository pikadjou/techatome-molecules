import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { LocalStorage } from 'storage-manager-js';

import { TaPwaService } from '@ta/capacitor';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { TaTranslationUI } from '../../../translation.service';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { LogoComponent } from '../logo/logo.component';
import { TitleComponent } from '../title/title.component';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'ta-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
  standalone: true,
  imports: [
    FontIconComponent,
    TranslateModule,
    LinkComponent,
    TitleComponent,
    ButtonComponent,
    LogoComponent,
    ToastComponent,
  ],
})
export class PwaComponent extends TaBaseComponent implements OnInit {
  @Output()
  askClose: EventEmitter<null> = new EventEmitter();

  public isShowed: boolean = false;
  public pictureWidth: number = 29;

  constructor(private _pwa: TaPwaService) {
    super();
    TaTranslationUI.getInstance();
    this._pwa.isPWaCapability$.subscribe(
      capability => (this.isShowed = capability && !LocalStorage.get('askForPwaAbility'))
    );
  }
  ngOnInit() {
    if (this.breakpoints.isDesktop) {
      this.pictureWidth = 18;
    }
  }

  public onNoClick(): void {
    this.isShowed = false;
  }
  public onYesClick(): void {
    this._pwa.launchInstall();
    this.isShowed = false;
  }
  public dontAsk() {
    LocalStorage.set('askForPwaAbility', 'false');
    this.isShowed = false;
  }
}
