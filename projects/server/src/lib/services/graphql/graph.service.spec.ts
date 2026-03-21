import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ApolloError } from '@apollo/client/errors';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { of, throwError } from 'rxjs';

import { TaServerErrorService } from '../error.service';
import { GRAPHQL_SERVER_CONFIG } from './models/graphConfig';
import { TaGraphService } from './graph.service';

describe('TaGraphService', () => {
  let service: TaGraphService;
  let apollo: jasmine.SpyObj<Apollo>;
  let httpLink: jasmine.SpyObj<HttpLink>;
  let errorService: jasmine.SpyObj<TaServerErrorService>;

  const mockGraphConfig = {
    url: 'http://localhost:4000/graphql',
    visitor: 'http://localhost:4000/visitor',
  };

  beforeEach(() => {
    apollo = jasmine.createSpyObj('Apollo', ['query', 'mutate'], {
      client: {
        link: { concat: jasmine.createSpy('concat') },
        setLink: jasmine.createSpy('setLink'),
      },
    });

    httpLink = jasmine.createSpyObj('HttpLink', ['create']);
    errorService = jasmine.createSpyObj('TaServerErrorService', ['addError']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaGraphService,
        { provide: Apollo, useValue: apollo },
        { provide: HttpLink, useValue: httpLink },
        { provide: GRAPHQL_SERVER_CONFIG, useValue: mockGraphConfig },
        { provide: TaServerErrorService, useValue: errorService },
      ],
    });

    service = TestBed.inject(TaGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have isReady$ default to true', () => {
    expect(service.isReady$.getValue()).toBeTrue();
  });

  describe('fetchQueryList', () => {
    it('should fetch a query list and return the node data', (done) => {
      const mockData = { testNode: [{ id: 1 }, { id: 2 }] };
      apollo.query.and.returnValue(of({ data: mockData, loading: false, networkStatus: 7 }));

      const payload = { query: {}, variables: {} };
      service.fetchQueryList(payload, 'testNode', 'testContext').subscribe((result) => {
        expect(result).toEqual([{ id: 1 }, { id: 2 }]);
        done();
      });
    });

    it('should call error service on Apollo error', (done) => {
      const mockError = new ApolloError({
        errorMessage: 'Test error',
        networkError: { error: { errors: [] } } as any,
      });
      apollo.query.and.returnValue(throwError(() => mockError));

      const payload = { query: {}, variables: {} };
      service.fetchQueryList(payload, 'testNode', 'testContext').subscribe({
        error: (err) => {
          expect(errorService.addError).toHaveBeenCalled();
          done();
        },
      });
    });
  });

  describe('fetchPagedQueryList', () => {
    it('should fetch a paged query list and return the node data', (done) => {
      const mockData = {
        testNode: {
          items: [{ id: 1 }],
          totalCount: 1,
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
      };
      apollo.query.and.returnValue(of({ data: mockData, loading: false, networkStatus: 7 }));

      const payload = { query: {}, variables: {} };
      service.fetchPagedQueryList(payload, 'testNode', 'testContext').subscribe((result) => {
        expect(result).toEqual(mockData.testNode);
        done();
      });
    });
  });

  describe('fetchQuery', () => {
    it('should fetch a single query and return the node data', (done) => {
      const mockData = { testNode: { id: 1, name: 'test' } };
      apollo.query.and.returnValue(of({ data: mockData, loading: false, networkStatus: 7 }));

      const payload = { query: {}, variables: {} };
      service.fetchQuery(payload, 'testNode', 'testContext').subscribe((result) => {
        expect(result).toEqual({ id: 1, name: 'test' });
        done();
      });
    });
  });

  describe('mutate', () => {
    it('should perform a mutation and return the result data', (done) => {
      const mockData = { createItem: { id: 1, name: 'new' } };
      apollo.mutate.and.returnValue(of({ data: mockData }));

      const payload = { mutation: {} as any, variables: {} };
      service.mutate(payload, 'createItem', 'testContext').subscribe((result) => {
        expect(result).toEqual({ id: 1, name: 'new' });
        done();
      });
    });

    it('should clear specified cache keys after mutation', (done) => {
      const mockData = { createItem: { id: 1 } };
      apollo.mutate.and.returnValue(of({ data: mockData }));

      spyOn(service, 'clearCache');

      const payload = { mutation: {} as any, variables: {} };
      service.mutate(payload, 'createItem', 'testContext', ['cacheKey1']).subscribe(() => {
        expect(service.clearCache).toHaveBeenCalledWith('cacheKey1');
        done();
      });
    });

    it('should call error service on mutation error', (done) => {
      const mockError = new ApolloError({
        errorMessage: 'Mutation error',
        networkError: { error: { errors: [] } } as any,
      });
      apollo.mutate.and.returnValue(throwError(() => mockError));

      const payload = { mutation: {} as any, variables: {} };
      service.mutate(payload, 'createItem', 'testContext').subscribe({
        error: () => {
          expect(errorService.addError).toHaveBeenCalled();
          done();
        },
      });
    });
  });

  describe('fetchQueryBuilder', () => {
    it('should fetch query builder results and return data by name', (done) => {
      const mockData = { myQuery: { id: 1, value: 'test' } };
      apollo.query.and.returnValue(of({ data: mockData, loading: false, networkStatus: 7 }));

      const payload = { name: 'myQuery', query: {}, variables: {} };
      service.fetchQueryBuilder(payload, 'testContext').subscribe((result) => {
        expect(result).toEqual({ id: 1, value: 'test' });
        done();
      });
    });
  });

  describe('registerGraphEndpoint', () => {
    it('should create an HTTP link for the endpoint', () => {
      httpLink.create.and.returnValue({} as any);

      service.registerGraphEndpoint({
        clientName: 'test',
        endpoint: '/test-endpoint',
      });

      expect(httpLink.create).toHaveBeenCalledWith({
        headers: undefined,
        uri: 'http://localhost:4000/graphql/test-endpoint',
      });
    });

    it('should use visitor URL when options.visitor is true', () => {
      httpLink.create.and.returnValue({} as any);

      service.registerGraphEndpoint(
        {
          clientName: 'test',
          endpoint: '/test-endpoint',
        },
        { visitor: true }
      );

      expect(httpLink.create).toHaveBeenCalledWith({
        headers: undefined,
        uri: 'http://localhost:4000/visitor/test-endpoint',
      });
    });

    it('should use endpoint directly when it is a full URL', () => {
      httpLink.create.and.returnValue({} as any);

      service.registerGraphEndpoint({
        clientName: 'test',
        endpoint: 'https://external-api.com/graphql',
      });

      expect(httpLink.create).toHaveBeenCalledWith({
        headers: undefined,
        uri: 'https://external-api.com/graphql',
      });
    });
  });
});
