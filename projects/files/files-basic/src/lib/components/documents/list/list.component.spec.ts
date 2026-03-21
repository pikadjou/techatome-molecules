import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TaDocumentsService } from '@ta/services';

import { DocumentsListComponent } from './list.component';

describe('DocumentsListComponent', () => {
  let component: DocumentsListComponent;
  let fixture: ComponentFixture<DocumentsListComponent>;
  let mockDocumentsService: any;

  beforeEach(async () => {
    mockDocumentsService = {
      getDocuments$: jasmine.createSpy('getDocuments$').and.returnValue(of([])),
      fetchDocuments$: jasmine.createSpy('fetchDocuments$').and.returnValue(of([])),
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DocumentsListComponent,
      ],
      providers: [
        { provide: TaDocumentsService, useValue: mockDocumentsService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentsListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('documentsIds', ['doc1', 'doc2']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch documents on init', () => {
    expect(mockDocumentsService.fetchDocuments$).toHaveBeenCalledWith(['doc1', 'doc2']);
  });

  it('should have emptyMessage default to empty string', () => {
    expect(component.emptyMessage()).toBe('');
  });

  it('should have actions default to empty string', () => {
    expect(component.actions()).toBe('');
  });

  it('should have readonly default to false', () => {
    expect(component.readonly()).toBe(false);
  });

  it('should have defaultSelected default to empty array', () => {
    expect(component.defaultSelected()).toEqual([]);
  });

  it('should emit remove event', () => {
    spyOn(component.remove, 'emit');
    const doc = { id: 'doc1', url: 'http://example.com/doc', description: 'Test' } as any;
    component.removeDocument(doc);
    expect(component.remove.emit).toHaveBeenCalledWith('doc1');
  });

  it('should toggle checked files on check', () => {
    spyOn(component.checkedFilesChanged, 'emit');
    const doc = { id: 'doc1', description: 'Test', url: 'http://example.com' } as any;
    component.check(doc);
    expect(component.checkedFilesChanged.emit).toHaveBeenCalled();
  });

  it('should return false for isChecked when not checked', () => {
    const doc = { id: 'notchecked' } as any;
    expect(component.isChecked(doc)).toBeFalsy();
  });
});
