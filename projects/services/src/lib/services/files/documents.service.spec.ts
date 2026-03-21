import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { TaGraphService, TaServerSevice, HandleSimpleRequest } from '@ta/server';

import { TaDocumentsService } from './documents.service';
import { DocumentDto } from './dto/document';

describe('TaDocumentsService', () => {
  let service: TaDocumentsService;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;
  let mockServerService: jasmine.SpyObj<TaServerSevice>;

  const mockDocuments: DocumentDto[] = [
    { id: '1', url: 'http://doc1.pdf', description: 'Doc 1', size: 1024 },
    { id: '2', url: 'http://doc2.pdf', description: 'Doc 2', size: 2048 },
    { id: '3', url: 'http://doc3.pdf', description: 'Doc 3', size: 512 },
  ];

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'registerGraphEndpoint',
      'fetchQuery',
      'fetchQueryList',
      'fetchPagedQueryList',
      'mutate',
    ]);
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes', 'request']);

    TestBed.configureTestingModule({
      providers: [
        TaDocumentsService,
        { provide: TaGraphService, useValue: mockGraphService },
        { provide: TaServerSevice, useValue: mockServerService },
      ],
    });
    service = TestBed.inject(TaDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize documents as HandleSimpleRequest', () => {
    expect(service.documents).toBeTruthy();
    expect(service.documents instanceof HandleSimpleRequest).toBeTrue();
  });

  it('should register both API routes and graph endpoint', () => {
    expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalled();
    expect(mockServerService.registerRoutes).toHaveBeenCalled();
  });

  describe('getDocuments', () => {
    it('should return null when no documents are loaded', () => {
      const result = service.getDocuments(['1']);
      expect(result).toBeUndefined();
    });

    it('should filter documents by ids', () => {
      service.documents.data$.next(mockDocuments);
      const result = service.getDocuments(['1', '3']);
      expect(result).toEqual([
        { id: '1', url: 'http://doc1.pdf', description: 'Doc 1', size: 1024 },
        { id: '3', url: 'http://doc3.pdf', description: 'Doc 3', size: 512 },
      ]);
    });

    it('should return empty array when no ids match', () => {
      service.documents.data$.next(mockDocuments);
      const result = service.getDocuments(['999']);
      expect(result).toEqual([]);
    });
  });

  describe('getDocuments$', () => {
    it('should return filtered documents as observable', (done) => {
      service.documents.data$.next(mockDocuments);
      service.getDocuments$(['2']).subscribe((result) => {
        expect(result).toEqual([{ id: '2', url: 'http://doc2.pdf', description: 'Doc 2', size: 2048 }]);
        done();
      });
    });
  });

  describe('fetchDocuments$', () => {
    it('should call graph service fetchPagedQueryList', () => {
      const pagedResponse = {
        items: mockDocuments,
        totalCount: 3,
      };
      mockGraphService.fetchPagedQueryList.and.returnValue(of(pagedResponse));

      service.fetchDocuments$(['1', '2', '3']).subscribe();

      expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
    });
  });

  describe('addDocument$', () => {
    it('should call server service request with FILES type', () => {
      const mockFile = new File(['test'], 'test.pdf', { type: 'application/pdf' });
      const doc = { file: mockFile };

      mockServerService.request.and.returnValue(of({ id: '4' } as any));

      service.addDocument$(doc);

      expect(mockServerService.request).toHaveBeenCalled();
    });
  });
});
