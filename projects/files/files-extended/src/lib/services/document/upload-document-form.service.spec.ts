import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { UploadDocumentFormService } from './upload-document-form.service';

describe('UploadDocumentFormService', () => {
  let service: UploadDocumentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadDocumentFormService],
    });
    service = TestBed.inject(UploadDocumentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getGroupForm', () => {
    it('should return an array of InputBase', () => {
      const form = service.getGroupForm({
        documentTypes$: of([
          { id: 1, translatedValue: 'Invoice' },
          { id: 2, translatedValue: 'Contract' },
        ]),
      });
      expect(form).toBeTruthy();
      expect(Array.isArray(form)).toBe(true);
      expect(form.length).toBe(1);
    });

    it('should return a panel with children', () => {
      const form = service.getGroupForm({
        documentTypes$: of([]),
      });
      const panel = form[0] as any;
      expect(panel.key).toBe('panel');
      expect(panel.children).toBeDefined();
      expect(panel.children.length).toBe(2);
    });

    it('should have documentType dropdown child', () => {
      const form = service.getGroupForm({
        documentTypes$: of([]),
      });
      const panel = form[0] as any;
      const dropdown = panel.children[0];
      expect(dropdown.key).toBe('documentType');
    });

    it('should have description textarea child', () => {
      const form = service.getGroupForm({
        description: 'Initial description',
        documentTypes$: of([]),
      });
      const panel = form[0] as any;
      const textarea = panel.children[1];
      expect(textarea.key).toBe('description');
      expect(textarea.value).toBe('Initial description');
    });
  });
});
