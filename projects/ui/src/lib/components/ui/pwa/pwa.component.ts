import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CamPwaService } from '@ta/capacitor';
import { CamBaseComponent } from '@ta/utils';
import { LocalStorage } from 'storage-manager-js';

@Component({
  selector: 'ta-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
})
export class PwaComponent extends CamBaseComponent implements OnInit {
  @Output()
  askClose: EventEmitter<null> = new EventEmitter();

  public isShowed: boolean = false;
  public pictureWidth: number = 29;

  constructor(private _pwa: CamPwaService) {
    super();
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
