import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Menu, MenuBase } from '@ta/menu';
import { Culture } from '@ta/utils';

import { Template, TemplateVariant } from '../../../../services/dto/template';

@Component({
  selector: 'ta-choice-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class ChoiceDetailComponent implements OnChanges {
  @Input()
  template!: Template | null;

  @Output()
  selected = new EventEmitter<TemplateVariant>();

  public currentCulture = Culture.FR_BE;
  public cultureMenu: Menu | null = null;

  ngOnChanges() {
    if (!this.getVariant()) {
      this.currentCulture = Culture.FR_BE;
    }
    if (!this.getVariant()) {
      this.currentCulture = this.template?.availableCultures[0] ?? Culture.FR_BE;
    }
    this._renderMenu();
  }
  public getVariant() {
    return this.template?.variants.find(v => v.culture === this.currentCulture);
  }
  public changeSelection(culture: Culture) {
    this.currentCulture = culture;
  }

  public select(variant: TemplateVariant) {
    this.selected.emit(variant);
  }
  private _renderMenu() {
    if (!this.template) {
      return;
    }
    this.cultureMenu = new Menu({
      elements: this.template.availableCultures.map(
        cul =>
          new MenuBase({
            key: cul.toString(),
            label: 'ui.culture.long.' + cul,
            defaultOpen: this.currentCulture === cul,
            callback: () => this.changeSelection(Number(cul)),
          })
      ),
      direction: 'horizontal',
    });
  }
}
