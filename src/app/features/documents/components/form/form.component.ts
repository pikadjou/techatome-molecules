import { Component, inject, Input, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { DocumentsService } from '../../../../services/documents/documents.service';
import { InputBase } from '@ta/form-model';
import { FormDocumentsService } from '../../../../services/documents/form.service';
import { TaFormComponent } from '@ta/form-basic';
import { TaTextComponent } from '@ta/ui';
import { Document, PostDocument } from '../../../../services/documents/dto/document';
import { TaBaseComponent } from '@ta/utils';
import { ENotificationCode, TaNotificationService } from '@ta/notification';
import { HttpErrorResponse } from '@angular/common/http';
import { TaRoutes } from '@ta/menu';
import { ECategoriesRoute } from '../../../categories/categories.routes';
import { FormAgreementsService } from '../../../../services/agreements/form.service';
import { ErrorHandlerService } from '../../../../services/shared/error-handler.service';
import { DocumentFormData } from '../../../../services/shared/types/form-data.types';

@Component({
  selector: 'app-document-form',
  imports: [TaFormComponent, TaTextComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent extends TaBaseComponent implements OnInit {
  @Input()
  id!: string;

  public form = signal<InputBase<string | number | boolean>[]>([]);
  public formAgreements = signal<InputBase<string | number | boolean>[]>([]);

  public temporaryDoc: PostDocument | null = null;
  public actualDoc: Document | null = null;

  private readonly _notificationService = inject(TaNotificationService);
  private readonly _documentsService = inject(DocumentsService);
  private readonly _formDocumentsService = inject(FormDocumentsService);
  private readonly _formAgreementsService = inject(FormAgreementsService);
  private readonly _errorHandler = inject(ErrorHandlerService);

  ngOnInit() {
    this._fetch();
  }

  public update(data: unknown) {
    this.temporaryDoc = this._formDocumentsService.formatFormDocument(data as DocumentFormData);

    if (!this.temporaryDoc?.content) {
      return;
    }
    this.formAgreements.set(this._formAgreementsService.getFormAgreements(this.temporaryDoc.content, this.actualDoc));
  }

  public save(data: unknown) {
    if (!this.temporaryDoc) {
      return;
    }
    this.requestState.asked();
    const agreements = this._formAgreementsService.formatFormAgreements(data);

    const obs = (this.id && this.actualDoc)
      ? this._documentsService.updateDocument$(this.id, this.temporaryDoc, agreements, this.actualDoc)
      : this._documentsService.addDocument$(this.temporaryDoc, agreements);
    obs.subscribe({
      next: (doc) => {
        this.requestState.completed();
        this._errorHandler.handleSuccess({ 
          operation: this.id ? 'update' : 'create', 
          entity: 'document' 
        });
        this._router.navigateByUrl(
          TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], {
            id: doc.category?.documentId,
          }),
        );
      },
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
        this._errorHandler.handleError(error, { 
          operation: this.id ? 'update' : 'create', 
          entity: 'document',
          id: this.id 
        });
      },
    });
  }
  private _fetch() {
    const parentId = this._getSnapshotQueryParams('parentId');

    if (!this.id) {
      this.form.set(this._formDocumentsService.getFormDocument(parentId));
      return;
    }
    this._documentsService.fetchDocument$(this.id).subscribe({
      next: (doc) => {
        this.actualDoc = doc;
        this.form.set(this._formDocumentsService.getFormDocument(parentId, doc));
      },
      error: (error: HttpErrorResponse) => {
        this._errorHandler.handleError(error, { 
          operation: 'fetch', 
          entity: 'document',
          id: this.id 
        });
      },
    });
  }
}
