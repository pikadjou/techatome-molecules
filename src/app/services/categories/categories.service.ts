import { inject, Injectable } from '@angular/core';
import { HandleComplexRequest, HandleSimpleRequest, TaServerSevice, TaStrapiService } from '@ta/server';
import { Category } from './dto/category';
import { GET_ALL_CATEGORIES, GET_CATEGORIES, GET_CATEGORY } from './queries';
import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './mutations';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends TaServerSevice {
  protected readonly _strapiService = inject(TaStrapiService);

  readonly allCategories = new HandleSimpleRequest<Category[]>();

  readonly categories = new HandleSimpleRequest<Category[]>();
  readonly subCategories = new HandleComplexRequest<Category[]>();
  readonly category = new HandleComplexRequest<Category>();

  constructor() {
    super();
  }

  public fetchCategory$(id: string) {
    return this.category.fetch(id, this._strapiService.fetchQuery$<Category>(GET_CATEGORY(id), 'category'));
  }
  public fetchCategories$() {
    return this.categories.fetch(this._strapiService.fetchQueryList$<Category>(GET_CATEGORIES(null), 'categories'));
  }

  public fetchSubCategories$(id: string) {
    return this.subCategories.fetch(
      id,
      this._strapiService.fetchQueryList$<Category>(GET_CATEGORIES(id), 'categories'),
    );
  }

  public fetchAllCategories$() {
    return this.allCategories.fetch(this._strapiService.fetchQueryList$<Category>(GET_ALL_CATEGORIES(), 'categories'));
  }

  public addCategory$(category: Partial<Category>) {
    return this._strapiService.mutate$<Category>(ADD_CATEGORY(category), 'createCategory');
  }
  public updateCategory$(id: string, category: Partial<Category>) {
    return this._strapiService.mutate$<Category>(UPDATE_CATEGORY(id, category), 'updateCategory');
  }
  public deleteCategory$(id: string) {
    return this._strapiService.mutate$<Category>(DELETE_CATEGORY(id), 'deleteCategory');
  }
}
