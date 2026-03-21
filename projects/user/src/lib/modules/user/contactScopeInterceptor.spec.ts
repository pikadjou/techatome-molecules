import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { GRAPHQL_SERVER_CONFIG, IGraphConfig } from '@ta/server';
import { APPLICATION_CONFIG, IApplicationConfig } from '@ta/utils';

import { ContactScopeInterceptor } from './contactScopeInterceptor';
import { TaUsersService } from './services/users.service';

describe('ContactScopeInterceptor', () => {
  let interceptor: ContactScopeInterceptor;
  let mockHandler: jasmine.SpyObj<HttpHandler>;
  let mockUsersService: any;

  beforeEach(() => {
    mockHandler = jasmine.createSpyObj('HttpHandler', ['handle']);
    mockHandler.handle.and.returnValue(of({} as any));

    mockUsersService = {
      currentUserContactIds: {
        get: jasmine.createSpy('get').and.returnValue(['id1', 'id2']),
      },
    };

    TestBed.configureTestingModule({
      providers: [
        ContactScopeInterceptor,
        { provide: TaUsersService, useValue: mockUsersService },
        {
          provide: GRAPHQL_SERVER_CONFIG,
          useValue: { config: { url: 'https://api.example.com/graphql' } } as IGraphConfig,
        },
        {
          provide: APPLICATION_CONFIG,
          useValue: { isCustomerApplication: true } as IApplicationConfig,
        },
      ],
    });
    interceptor = TestBed.inject(ContactScopeInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should pass through JSON file requests', () => {
    const req = new HttpRequest('GET', 'https://example.com/data.json');
    interceptor.intercept(req, mockHandler);
    expect(mockHandler.handle).toHaveBeenCalledWith(req);
  });

  it('should pass through non-customer application requests', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        ContactScopeInterceptor,
        { provide: TaUsersService, useValue: mockUsersService },
        {
          provide: GRAPHQL_SERVER_CONFIG,
          useValue: { config: { url: 'https://api.example.com/graphql' } } as IGraphConfig,
        },
        {
          provide: APPLICATION_CONFIG,
          useValue: { isCustomerApplication: false } as IApplicationConfig,
        },
      ],
    });

    const nonCustomerInterceptor = TestBed.inject(ContactScopeInterceptor);
    const req = new HttpRequest('GET', 'https://api.example.com/graphql');
    nonCustomerInterceptor.intercept(req, mockHandler);
    expect(mockHandler.handle).toHaveBeenCalledWith(req);
  });
});
