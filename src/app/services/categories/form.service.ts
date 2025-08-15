import { inject, Injectable } from '@angular/core';

import { InputDropdown, InputPanel, InputTextBox } from '@ta/form-model';
import { Category } from './dto/category';
import { CategoriesService } from './categories.service';
import { filter, map } from 'rxjs';
import { isNonNullable } from '@ta/utils';
import { Validators } from '@angular/forms';
import { organiseCategories } from './helpers';
import { CategoryFormData } from '../shared/types/form-data.types';

enum EFormCategoryFields {
  name = 'name',
  description = 'description',
  parent = 'parent',
}
@Injectable({
  providedIn: 'root',
})
export class FormCategoriesService {
  private readonly _categoriesService = inject(CategoriesService);

  constructor() {
    this._categoriesService.fetchAllCategories$().subscribe();
  }

  public getFormCategory(defaultCat: string| null, cat?: Category) {
    return [
      new InputPanel({
        key: 'panel',
        label: 'Ma categorie',
        children: [
          new InputTextBox({
            key: EFormCategoryFields.name,
            label: 'Nom',
            value: cat?.name,
            validators: [Validators.required],
          }),
          new InputTextBox({
            key: EFormCategoryFields.description,
            label: 'Description',
            value: cat?.description,
          }),
          new InputDropdown({
            key: EFormCategoryFields.parent,
            label: 'Catégorie parente',
            options: this._categoriesService.allCategories.get$().pipe(
              filter(isNonNullable),
              map(organiseCategories),
              map((categories) =>
                categories.map((category) => ({ id: category.documentId ?? '', name: category.name })),
              ),
            ),
            showNothingOption: true,
            withSearch: false,
            value: cat?.parent?.documentId ?? defaultCat,
          }),
        ],
      }),
    ];
  }

  public formatFormCategory(data: CategoryFormData & { parent?: string }): Partial<Category> {
    return {
      name: data[EFormCategoryFields.name],
      description: data[EFormCategoryFields.description],
      parent: data[EFormCategoryFields.parent] as any,
    };
  }

}
