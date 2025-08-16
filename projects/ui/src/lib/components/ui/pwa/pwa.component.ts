import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LocalStorage } from 'storage-manager-js';

import { CamPwaService } from '@camelot/capacitor';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-pwa',
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
      (capability) =>
        (this.isShowed = capability && !LocalStorage.get('askForPwaAbility'))
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
