import { NgIf, NgFor, NgClass } from '@angular/common';
import { LocalIconComponent } from '@ta/icons';
import { Component, Input, TemplateRef } from '@angular/core';

import { InputBase, InputDynamic } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';

@Component({
selector: 'ta-input-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, NgClass, LocalIconComponent],
})
export class DynamicComponent extends TaBaseComponent {
  @Input()
  public inputsTemplate!: TemplateRef<any>;

  @Input()
  input!: InputDynamic;

  constructor() {
    super();
  }

  public add = () => {
    this.input.add();
  };

  public canRemove(index: string): boolean {
    return !isNaN(Number(index));
  }

  public remove = (index: string) => {
    this.input.remove(index);
  };

  public getKeys(): string[] {
    return Object.keys(this.input.inputsGroup);
  }

  public getInputs(key: string) {
    return this.input.inputsGroup[key];
  }

  public trackByFn(_: number, key: string) {
    return key;
  }

  public trackInputByFn(_: number, input: InputBase<any>) {
    return input.key;
  }
}
