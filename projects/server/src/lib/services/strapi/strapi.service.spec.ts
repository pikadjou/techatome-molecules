import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { TaGraphService } from '../graphql/graph.service';
import { TaServerSevice } from '../server/api/server.service';
import { STRAPI_SERVER_CONFIG } from './config';
import { TaStrapiService } from './strapi.service';

describe('TaStrapiService', () => {
  let service: TaStrapiService;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;
  let mockServerService: jasmine.SpyObj<TaServerSevice>;

  const mockStrapiConfig = {
    url: 'http://localhost:1337/graphql',
    token: 'test-token-123',
  };

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'registerGraphEndpoint',
      'fetchQuery',
      'fetchQueryList',
      'fetchPagedQueryList',
      'mutate',
    ]);
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes']);

    TestBed.configureTestingModule({
      providers: [
        TaStrapiService,
        { provide: STRAPI_SERVER_CONFIG, useValue: mockStrapiConfig },
        { provide: TaGraphService, useValue: mockGraphService },
        { provide: TaServerSevice, useValue: mockServerService },
      ],
    });
    service = TestBed.inject(TaStrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a graph endpoint with strapi client name on creation', () => {
    expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalled();
    const call = mockGraphService.registerGraphEndpoint.calls.mostRecent();
    const endpoint = call.args[0];
    expect(endpoint.clientName).toBe('strapi');
    expect(endpoint.endpoint).toBe('http://localhost:1337/graphql');
  });

  describe('fetchQuery$', () => {
    it('should call graph service fetchQuery with strapi context', (done) => {
      const mockData = { id: 1, name: 'test' };
      mockGraphService.fetchQuery.and.returnValue(of(mockData));

      const payload = { query: {}, variables: {} };
      service.fetchQuery$(payload, 'testNode').subscribe((result) => {
        expect(result).toEqual(mockData);
        expect(mockGraphService.fetchQuery).toHaveBeenCalledWith(payload, 'testNode', 'strapi');
        done();
      });
    });
  });

  describe('fetchQueryList$', () => {
    it('should call graph service fetchQuery with strapi context and return list', (done) => {
      const mockData = [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
      ];
      mockGraphService.fetchQuery.and.returnValue(of(mockData));

      const payload = { query: {}, variables: {} };
      service.fetchQueryList$(payload, 'testNode').subscribe((result) => {
        expect(result).toEqual(mockData);
        expect(mockGraphService.fetchQuery).toHaveBeenCalledWith(payload, 'testNode', 'strapi');
        done();
      });
    });
  });
});
