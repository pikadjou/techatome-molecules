import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { SERVER_CONFIG_KEY, TaServerSevice } from './server.service';
import { Request } from '../request';
import { RequestMap } from './requestMap';

describe('TaServerSevice', () => {
  let service: TaServerSevice;
  let httpMock: HttpTestingController;

  const mockConfig = {
    pendindRequestId: 5,
    serverUrl: 'http://localhost:3000',
    apiExt: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaServerSevice,
        { provide: SERVER_CONFIG_KEY, useValue: mockConfig },
      ],
    });
    service = TestBed.inject(TaServerSevice);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have zero requests in progress initially', () => {
    expect(service.requestInProgressNumber).toBe(0);
  });

  describe('isAuthenticated', () => {
    it('should default to false', () => {
      expect(service.isAuthenticated).toBeFalse();
    });

    it('should allow setting isAuthenticated', () => {
      service.isAuthenticated = true;
      expect(service.isAuthenticated).toBeTrue();
    });
  });

  describe('registerRoutes', () => {
    it('should register routes to RequestMap', () => {
      spyOn(RequestMap, 'register');
      const routes = {
        TestRoute: { type: 'GET' as const, url: '{ApiUrl}/test' },
      };
      service.registerRoutes(routes);
      expect(RequestMap.register).toHaveBeenCalledWith(routes);
    });
  });

  describe('request', () => {
    beforeEach(() => {
      service.registerRoutes({
        GetTest: { type: 'GET', url: '{ApiUrl}/api/test' },
        PostTest: { type: 'POST', url: '{ApiUrl}/api/test' },
        PutTest: { type: 'PUT', url: '{ApiUrl}/api/test' },
        PatchTest: { type: 'PATCH', url: '{ApiUrl}/api/test' },
        DeleteTest: { type: 'DELETE', url: '{ApiUrl}/api/test' },
      });
      service.isAuthenticated = true;
    });

    it('should make a GET request', () => {
      const request = new Request({
        type: 'GetTest',
        loginRequired: false,
        cacheTime: 0,
      });

      const subject = service.request(request);
      subject.subscribe();

      const req = httpMock.expectOne((r) => r.url.includes('/api/test'));
      expect(req.request.method).toBe('GET');
      req.flush({ Status: 200, Content: { data: 'test' } });
    });

    it('should make a POST request', () => {
      const request = new Request({
        type: 'PostTest',
        content: { name: 'test' },
        loginRequired: false,
        cacheTime: 0,
      });

      const subject = service.request(request);
      subject.subscribe();

      const req = httpMock.expectOne((r) => r.url.includes('/api/test'));
      expect(req.request.method).toBe('POST');
      req.flush({ Status: 200, Content: { id: 1 } });
    });

    it('should queue requests when login is required but not authenticated', () => {
      service.isAuthenticated = false;

      const request = new Request({
        type: 'GetTest',
        loginRequired: true,
        cacheTime: 0,
      });

      service.request(request);
      httpMock.expectNone(() => true);
    });

    it('should retry queued login-required requests when authenticated', () => {
      service.isAuthenticated = false;

      const request = new Request({
        type: 'GetTest',
        loginRequired: true,
        cacheTime: 0,
      });

      const subject = service.request(request);
      subject.subscribe();

      httpMock.expectNone(() => true);

      service.isAuthenticated = true;

      const req = httpMock.expectOne((r) => r.url.includes('/api/test'));
      expect(req.request.method).toBe('GET');
      req.flush({ Status: 200, Content: {} });
    });
  });

  describe('retryRequest', () => {
    it('should retry an empty list without errors', () => {
      expect(() => service.retryRequest([])).not.toThrow();
    });
  });
});
