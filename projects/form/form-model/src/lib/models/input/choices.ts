import { TemplateRef } from "@angular/core";

import { Observable } from "rxjs";

import { IInputDropdown, InputDropdown } from "./dropdown";

export type InputChoicesOption = {
  id: string;
  name: string;
  disabled?: boolean;
  data: any;
};

export interface IInputChoices extends IInputDropdown<string[]> {
  onlyTemplate?: boolean;
  options$?: Observable<InputChoicesOption[]>;
  advancedSearch$?: (search?: string) => Observable<InputChoicesOption[]>;
  choiceTemplate?: {
    one?: TemplateRef<any>;
    list?: TemplateRef<any>;
  };
  showNullableFields?: boolean;
}
export class InputChoices extends InputDropdown<string[]> {
  override controlType = "choices";
  override options$!: Observable<InputChoicesOption[]>;

  public onlyTemplate?: boolean;
  public advancedSearch$:
    | ((search?: string) => Observable<InputChoicesOption[]>)
    | null;
  public choiceTemplate?: {
    one?: TemplateRef<any>;
    list?: TemplateRef<any>;
  };
  public showNullableFields: boolean;

  constructor(options: IInputChoices = {}) {
    super(options);

    this.onlyTemplate = options.onlyTemplate;
    this.advancedSearch$ = options["advancedSearch$"] || null;
    this.choiceTemplate = options.choiceTemplate;
    this.showNullableFields = options.showNullableFields ?? false;
  }
}
