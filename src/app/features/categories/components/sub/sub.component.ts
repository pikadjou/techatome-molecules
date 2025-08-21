import { Component, inject, Input, OnChanges, signal, ChangeDetectionStrategy } from '@angular/core';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { TaBaseComponent } from '@ta/utils';
import { TaRoutes } from '@ta/menu';
import { EDocumentsRoute } from '../../../documents/documents.routes';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from '../../../../services/categories/dto/category';
import { ECategoriesRoute, FormKey } from '../../categories.routes';
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleComponent,
  EmptyComponent,
  ErrorComponent,
  LoaderComponent,
  TaButtonComponent,
  TaTextComponent,
  TitleComponent,
} from '@ta/ui';
import { MatIcon } from '@angular/material/icon';
import { combineLatest, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Document } from '../../../../services/documents/dto/document';
import { DocumentsService } from '../../../../services/documents/documents.service';
import { ENotificationCode, TaNotificationService } from '@ta/notification';
import { CategoryListComponent } from '../category-list/category-list.component';
import { DocumentListComponent } from '../document-list/document-list.component';
import { ErrorHandlerService } from '../../../../services/shared/error-handler.service';

@Component({
  standalone: true,
  selector: 'app-category-sub',
  imports: [
    TaButtonComponent,
    TitleComponent,
    MatIcon,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    TaTextComponent,
    DatePipe,
  ],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubComponent extends TaBaseComponent implements OnChanges {
  @Input()
  public id!: string;

  private readonly _notificationService = inject(TaNotificationService);
  private readonly _errorHandler = inject(ErrorHandlerService);

  readonly categoriesService = inject(CategoriesService);
  readonly documentsService = inject(DocumentsService);

  // Signals réactifs pour les données
  readonly category = signal<Category | undefined>(undefined);
  readonly subCategories = signal<Category[]>([]);
  readonly documents = signal<Document[]>([]);

  ngOnChanges() {
    this._fetch();
  }

  public selected(catId: string | null) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], { id: catId ?? 'all' }),
    );
  }
  public goToDoc(id: string) {
    this._router.navigateByUrl(TaRoutes.getAbsoluteUrl([EDocumentsRoute.documents, EDocumentsRoute.view], { id }));
  }
  public add(cat: Category | null) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>(
        [ECategoriesRoute.categories, ECategoriesRoute.form],
        {
          id: 'new',
        },
        cat?.documentId ? { parentId: cat.documentId } : null,
      ),
    );
  }

  public update(cat: Category ) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>(
        [ECategoriesRoute.categories, ECategoriesRoute.form],
        {
          id: cat.documentId ?? '',
        },
      ),
    );
  }
  public delete() {
    this.requestState.asked();
    this.categoriesService.deleteCategory$(this.id).subscribe({
      complete: () => {
        this.requestState.completed();
        this._errorHandler.handleSuccess({ operation: 'delete', entity: 'category' });
        this.selected(this.categoriesService.category.get(this.id)?.parent?.documentId ?? null);
      },
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
        this._errorHandler.handleError(error, { operation: 'delete', entity: 'category', id: this.id });
      },
    });
  }

  public addDoc(cat: Category | null) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>(
        [EDocumentsRoute.documents, EDocumentsRoute.form],
        {
          id: 'new',
        },
        cat?.documentId ? { parentId: cat.documentId } : null),
    );
  }

  private _fetch() {
    this.requestState.asked();
    combineLatest({
      category: this.categoriesService.fetchCategory$(this.id),
      categories: this.categoriesService.fetchSubCategories$(this.id),
      documents: this.documentsService.fetchDocuments$(this.id),
    }).subscribe({
      next: (data) => {
        this.category.set(data.category);
        this.subCategories.set(data.categories);
        this.documents.set(data.documents);
        this.requestState.completed();
      },
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
        this._errorHandler.handleError(error, { operation: 'fetch', entity: 'category', id: this.id });
      },
    });
  }
}
