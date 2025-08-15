import { Component, Input, output, ChangeDetectionStrategy } from '@angular/core';
import { Document } from '../../../../services/documents/dto/document';
import { 
  CardComponent, 
  CardContentComponent, 
  CardHeaderComponent, 
  CardTitleComponent,
  TaButtonComponent,
  TaTextComponent 
} from '@ta/ui';
import { MatIcon } from '@angular/material/icon';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-document-list',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    TaTextComponent,
    MatIcon,
    DatePipe,
    SlicePipe
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentListComponent {
  @Input({ required: true }) documents: Document[] = [];
  
  readonly documentSelected = output<string>();

  trackByDocument = (index: number, document: Document) => document.documentId;

  onDocumentClick(document: Document): void {
    this.documentSelected.emit(document.documentId || '');
  }
}