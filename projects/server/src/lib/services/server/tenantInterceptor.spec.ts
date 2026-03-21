import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { GRAPHQL_SERVER_CONFIG } from '../graphql/models/graphConfig';
import { TENANT_CONFIG_TOKEN } from './token';
import { TenantInterceptor } from './tenantInterceptor';

describe('TenantInterceptor', () => {
  let interceptor: TenantInterceptor;
  const mockGraphConfig = { url: 'http://localhost:4000/graphql' };
  const mockTenantConfig = { tenantId: 42 };
  let mockHandler: HttpHandler;

  beforeEach(() => {
    mockHandler = {
      handle: jasmine.createSpy('handle').and.callFake((req: HttpRequest<any>) => of(req)),
    };
  });

  describe('with tenant and graph config', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TenantInterceptor,
          { provide: TENANT_CONFIG_TOKEN, useValue: mockTenantConfig },
          { provide: GRAPHQL_SERVER_CONFIG, useValue: mockGraphConfig },
        ],
      });
      interceptor = TestBed.inject(TenantInterceptor);
    });

    it('should be created', () => {
      expect(interceptor).toBeTruthy();
    });

    it('should add TenantId header for GraphQL requests', () => {
      const req = new HttpRequest('POST', 'http://localhost:4000/graphql', {});

      interceptor.intercept(req, mockHandler);

      expect(mockHandler.handle).toHaveBeenCalled();
      const interceptedReq = (mockHandler.handle as jasmine.Spy).calls.mostRecent().args[0] as HttpRequest<any>;
      expect(interceptedReq.headers.get('TenantId')).toBe('42');
    });

    it('should not add TenantId header for non-GraphQL requests', () => {
      const req = new HttpRequest('GET', 'http://other-api.com/data', {});

      interceptor.intercept(req, mockHandler);

      const interceptedReq = (mockHandler.handle as jasmine.Spy).calls.mostRecent().args[0] as HttpRequest<any>;
      expect(interceptedReq.headers.has('TenantId')).toBeFalse();
    });
  });

  describe('without tenant config', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TenantInterceptor,
          { provide: GRAPHQL_SERVER_CONFIG, useValue: mockGraphConfig },
        ],
      });
      interceptor = TestBed.inject(TenantInterceptor);
    });

    it('should pass request through without modifications', () => {
      const req = new HttpRequest('POST', 'http://localhost:4000/graphql', {});

      interceptor.intercept(req, mockHandler);

      const interceptedReq = (mockHandler.handle as jasmine.Spy).calls.mostRecent().args[0] as HttpRequest<any>;
      expect(interceptedReq.headers.has('TenantId')).toBeFalse();
    });
  });

  describe('without graph config', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TenantInterceptor,
          { provide: TENANT_CONFIG_TOKEN, useValue: mockTenantConfig },
        ],
      });
      interceptor = TestBed.inject(TenantInterceptor);
    });

    it('should pass request through without modifications', () => {
      const req = new HttpRequest('POST', 'http://localhost:4000/graphql', {});

      interceptor.intercept(req, mockHandler);

      const interceptedReq = (mockHandler.handle as jasmine.Spy).calls.mostRecent().args[0] as HttpRequest<any>;
      expect(interceptedReq.headers.has('TenantId')).toBeFalse();
    });
  });
});
