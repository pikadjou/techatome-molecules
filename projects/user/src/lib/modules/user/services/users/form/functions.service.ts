import { Injectable, inject } from '@angular/core';
import { Validators } from '@angular/forms';

import { InputChoices, InputPanel, InputTextBox } from '@ta/form-model';
import { isNonNullable } from '@ta/utils';
import { filter, map } from 'rxjs';

import { CamFunctionsService } from '../../functions.service';
import { Function, FunctionCreationPayload, FunctionModifierPayload } from '../dto/function';

export enum EFunctionFormFields {
  name = 'name',
  roles = 'roles',
}

@Injectable({
  providedIn: 'root',
})
export class CamFunctionsFormService {
  private _functionsService = inject(CamFunctionsService);

  public getFunctionForm(func: Function | null) {
    return [
      new InputPanel({
        key: 'panel',
        label: 'user.functions.form.title',
        contentClass: 'highlight-title g-space-md',
        children: [
          new InputTextBox({
            key: EFunctionFormFields.name,
            value: func?.name,
            label: 'user.functions.form.name',
            validators: [Validators.required],
          }),
          new InputChoices({
            key: EFunctionFormFields.roles,
            label: 'user.functions.form.roles',
            class: 'pt-xxl',
            withSearch: true,
            options: this._functionsService.fetchRoles$().pipe(
              filter(isNonNullable),
              map(roles =>
                roles.map(role => ({
                  id: role.id,
                  name: role.name,
                  data: role,
                }))
              )
            ),
            value: func?.roles?.map(x => x.id),
            multiple: true,
          }),
        ],
      }),
    ];
  }
  public formatCreationFunctionForm(data: any): FunctionCreationPayload {
    return {
      name: data[EFunctionFormFields.name],
      roleIds: data[EFunctionFormFields.roles],
    };
  }

  public formatUpdateFunctionForm(id: string, data: any): Partial<FunctionModifierPayload> {
    return {
      id: id,
      name: data[EFunctionFormFields.name],
      roleIds: data[EFunctionFormFields.roles],
    };
  }
}
