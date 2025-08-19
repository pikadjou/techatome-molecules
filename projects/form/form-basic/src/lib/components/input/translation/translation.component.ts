import { NgIf, NgFor, NgClass, NgTemplateOutlet } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { InputBase, InputTranslation } from '@ta/form-model';
import { Menu, MenuBase, ToggleNavigationComponent } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { TitleComponent, LinkComponent, ButtonComponent } from '@ta/ui';
import { TaBaseComponent, Culture, extractEnum } from '@ta/utils';

@Component({
selector: 'ta-input-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgTemplateOutlet, FontIconComponent, MatMenuModule, ToggleNavigationComponent, TitleComponent, LinkComponent, ButtonComponent, TranslatePipe],
})
export class InputTranslationComponent extends TaBaseComponent implements OnInit {
  @Input()
  input!: InputTranslation;
  @Input()
  inputsTemplate!: TemplateRef<any>;

  public cultureList = extractEnum(Culture, true);
  public cultureMenu: Menu | null = null;

  public currentCulture: string = Culture[Culture.FR_BE];

  constructor() {
    super();
  }

  ngOnInit() {
    this._registerSubscription(
      this.input.listChanged$.subscribe({
        next: () => this._renderMenu(),
      })
    );
    this._renderMenu();
  }

  public changeSelection(culture: string) {
    this.currentCulture = culture;
  }

  public add(culture: string) {
    this.input.add(culture);
    this.changeSelection(culture);
  }

  public remove(culture: string) {
    this.input.remove(culture);
  }

  public hasKey(culture: string) {
    return this.getKeys().includes(culture);
  }
  public getKeys() {
    return Object.keys(this.input.inputsGroup);
  }

  public getInputs(culture: string) {
    return this.input.inputsGroup[culture];
  }

  public trackByFn(_: number, key: string) {
    return key;
  }

  public trackInputByFn(_: number, input: InputBase<any>) {
    return input.key;
  }

  private _renderMenu() {
    this.cultureMenu = new Menu({
      elements: this.getKeys().map(
        cul =>
          new MenuBase({
            key: cul,
            label: cul,
            order: 1,
            defaultOpen: this.currentCulture === cul,
            callback: () => this.changeSelection(cul),
          })
      ),
      direction: 'horizontal',
    });
  }
}
