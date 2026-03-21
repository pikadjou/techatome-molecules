import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { TaGraphService } from '../graphql/graph.service';
import { TaServerSevice } from '../server/api/server.service';
import { TaStrapiService } from './strapi.service';
import { STRAPI_SERVER_CONFIG } from './config';
import { TaBaseStrapiService } from './baseStrapi.service';

@Injectable()
class TestStrapiService extends TaBaseStrapiService {
  constructor() {
    super();
  }

  get strapiService() {
    return this._strapiService;
  }
}

describe('TaBaseStrapiService', () => {
  let service: TestStrapiService;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;
  let mockServerService: jasmine.SpyObj<TaServerSevice>;
  let mockStrapiService: jasmine.SpyObj<TaStrapiService>;

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'registerGraphEndpoint',
      'fetchQuery',
      'fetchQueryList',
      'fetchPagedQueryList',
      'mutate',
    ]);
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes']);
    mockStrapiService = jasmine.createSpyObj('TaStrapiService', ['fetchQuery$', 'fetchQueryList$']);

    TestBed.configureTestingModule({
      providers: [
        TestStrapiService,
        { provide: TaGraphService, useValue: mockGraphService },
        { provide: TaServerSevice, useValue: mockServerService },
        { provide: TaStrapiService, useValue: mockStrapiService },
        { provide: STRAPI_SERVER_CONFIG, useValue: { url: 'http://test', token: 'token' } },
      ],
    });
    service = TestBed.inject(TestStrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have access to strapi service via inject()', () => {
    expect(service.strapiService).toBe(mockStrapiService);
  });
});
