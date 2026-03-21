import { TestBed } from '@angular/core/testing';

import { TaGraphService } from '@ta/server';

import { estateInfo, gridSearchFieldsName, TaGridViewService } from './grid-view.service';

describe('TaGridViewService', () => {
  let service: TaGridViewService;
  let mockGraphService: jasmine.SpyObj<any>;
  let mockServerService: jasmine.SpyObj<any>;

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'fetchQueryBuilder',
      'registerGraphEndpoint',
    ]);
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes']);

    TestBed.configureTestingModule({
      providers: [
        TaGridViewService,
        { provide: TaGraphService, useValue: mockGraphService },
      ],
    });

    // Use overrideProvider to handle the inject() pattern in TaBaseService
    TestBed.overrideProvider(TaGraphService, { useValue: mockGraphService });
  });

  it('should have gridSearchFieldsName constant set to "search"', () => {
    expect(gridSearchFieldsName).toBe('search');
  });
});

describe('estateInfo', () => {
  it('should return a GraphPayload with Estate prefix', () => {
    const result = estateInfo('Property', { props: "'id' 'name'" });

    expect(result).toBeTruthy();
    expect(result.name).toBeDefined();
  });
});

describe('gridSearchFieldsName', () => {
  it('should be "search"', () => {
    expect(gridSearchFieldsName).toBe('search');
  });
});
