import { TemplateRef } from "@angular/core";

import { Subject } from "rxjs";

import { TaIconType } from "@ta/icons";
import { Logger } from "@ta/server";

import { IInputBase, InputBase } from "./base";

export type TypeComponentInputToken = {
  selectedValue$: Subject<string>;
};
export interface IInputComponent<T> extends IInputBase<T> {
  icon?: TaIconType;
  template?: TemplateRef<TypeComponentInputToken>;
}

export class InputComponent extends InputBase<string> {
  override controlType = "component";
  icon?: TaIconType | null;
  template?: TemplateRef<TypeComponentInputToken>;

  readonly selectedValue$ = new Subject<string>();

  constructor(options: IInputComponent<string> = {}) {
    super(options);
    this.icon = options.icon || null;
    this.template = options.template;

    if (!this.template) {
      Logger.LogError("No template for InputComponent");
    }

    this._subscriberHandler.registerSubscription(
      this.selectedValue$.subscribe({
        next: (value) => (this.value = value),
      })
    );
  }
}
