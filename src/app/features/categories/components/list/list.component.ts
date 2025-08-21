import { Component, inject, signal } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import {
  CardComponent,
  CardHeaderComponent,
  CardContentComponent,
  TitleComponent,
  CardTitleComponent,
  LoaderComponent,
  ErrorComponent,
  EmptyComponent,
} from '@ta/ui';
import { TaRoutes } from '@ta/menu';
import { ECategoriesRoute } from '../../categories.routes';
import { Category } from '../../../../services/categories/dto/category';

@Component({
  standalone: true,
  selector: 'app-categories-list',
  imports: [
    AsyncPipe,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TitleComponent,
    CardTitleComponent,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent extends TaBaseComponent {
  readonly categoriesService = inject(CategoriesService);

  readonly categories$ = signal(this.categoriesService.categories.get$());

  constructor() {
    super();

    this._fetch();
  }

  public selected(cat: Category | null) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], { id: cat?.documentId ?? 'all' }),
    );
  }

  private _fetch() {
    this.requestState.asked();
    this.categoriesService.fetchCategories$().subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
