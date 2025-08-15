import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { DocumentsService } from '../../../../services/documents/documents.service';
import { Document } from '../../../../services/documents/dto/document';

import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

import { TaAbstractComponent } from '@ta/utils';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaButtonComponent } from '@ta/ui';
import {
  extractSections,
  extractReplaces,
  extractAgreement,
  extractTags,
  formatAgreements,
  formatReplaces,
  formatSections,
  AgreementType,
  Section,
  Agreement,
  Replace,
} from '../../../../services/documents/helpers';
import { MatIcon } from '@angular/material/icon';
import { TaRoutes } from '@ta/menu';
import { ECategoriesRoute, FormKey } from '../../../categories/categories.routes';
import { EDocumentsRoute } from '../../documents.routes';
import { TaFormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { FormDocumentsService } from '../../../../services/documents/form.service';
import { FormatFormData } from '../../../../services/shared/types/form-data.types';
import { Observable } from 'rxjs';
import { ENotificationCode, TaNotificationService } from '@ta/notification';

@Component({
  selector: 'app-document-view',
  imports: [AsyncPipe, FormsModule, TaButtonComponent, MatIcon, TaFormComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent extends TaAbstractComponent implements OnInit {
  @Input()
  id!: string;

  public selectedAgreementType: AgreementType | null = null;

  public document = signal<Observable<Document> | null>(null);
  public content = signal<string>('');

  public form = signal<InputBase<any>[]>([]);

  private readonly _notificationService = inject(TaNotificationService);
  private readonly _documentsService = inject(DocumentsService);
  private readonly _formDocumentsService = inject(FormDocumentsService);

  ngOnInit() {
    this.document.set(this._documentsService.document.get$(this.id));
    this._fetch();
  }

  public formatContent(
    content: string,
    format: { sections: Section[]; replaces: Replace[]; agreements: Agreement[]; selectedAgreementType: AgreementType },
  ) {
    content = formatSections(content, format.sections);
    content = formatReplaces(content, format.replaces);
    content = formatAgreements(content, format.agreements, format.selectedAgreementType);
    return content;
  }

  public async convertToDoc(content: string) {
    const leftTags = extractTags(content);

    if (leftTags.length > 0) {
      alert('NOP');
      return;
    }
    const doc = this._documentsService.document.get(this.id);
    if (!doc) {
      return;
    }

    asBlob(content).then((data) => {
      saveAs(data, doc.title + '.docx'); // save as docx file
    });
  }

  public selected(catId: string | null) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], { id: catId ?? 'all' }),
    );
  }
  public edit(id: string) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>([EDocumentsRoute.documents, EDocumentsRoute.form], {
        id: id ?? 'new',
      }),
    );
  }

  public delete(doc: Document) {
    this.requestState.asked();

    this._documentsService.deleteDocument$(this.id, doc.agreements ?? []).subscribe({
      complete: () => {
        this.requestState.completed();
        this._notificationService.addNotification('notification.common.success', ENotificationCode.success);
        this._router.navigateByUrl(
          TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], {
            id: doc.category?.documentId,
          }),
        );
      },
    });
  }

  private _fetch() {
    this._documentsService.fetchDocument$(this.id).subscribe({
      next: (doc) => {
        this._parseDoc(doc.content);
        this.content.set(doc.content);
      },
    });
  }

  public update(data: unknown) {
    const content = this._documentsService.document.get(this.id)?.content ?? '';
    const format = this._formDocumentsService.formatFormFormat(data as FormatFormData);
    this.content.set(this.formatContent(content, format));
  }

  private _parseDoc(content: string) {
    const agreementsValue = this._documentsService.document.get(this.id)?.agreements ?? [];
    const sections = extractSections(content);
    const replaces = extractReplaces(content);
    const agreements = extractAgreement(content);

    this.form.set(
      this._formDocumentsService.getFormFormat(
        sections.map((s) => s.key),
        replaces.map((r) => r.key),
        agreements.map((a) => a.key),
        agreementsValue,
      ),
    );
  }
}
