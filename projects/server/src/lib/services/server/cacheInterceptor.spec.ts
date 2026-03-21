import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { CacheInterceptor } from './cacheInterceptor';

describe('CacheInterceptor', () => {
  let interceptor: CacheInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheInterceptor],
    });
    interceptor = TestBed.inject(CacheInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should pass through non-GET requests', () => {
    const req = new HttpRequest('POST', '/api/test', { data: 'test' });
    const mockHandler: HttpHandler = {
      handle: jasmine.createSpy('handle').and.returnValue(of(new HttpResponse({ body: {} }))),
    };

    interceptor.intercept(req, mockHandler);
    expect(mockHandler.handle).toHaveBeenCalledWith(req);
  });

  it('should pass through GET requests with cacheTime 0', () => {
    const req = new HttpRequest('GET', '/api/test', { params: { cacheTime: '0' } as any });
    const reqWithParams = req.clone({ params: req.params.set('cacheTime', '0') });
    const mockHandler: HttpHandler = {
      handle: jasmine.createSpy('handle').and.returnValue(of(new HttpResponse({ body: {} }))),
    };

    interceptor.intercept(reqWithParams, mockHandler);
    expect(mockHandler.handle).toHaveBeenCalled();
  });

  it('should cache GET requests and return cached response on second call', (done) => {
    const responseBody = { data: 'cached' };
    const response = new HttpResponse({ body: responseBody, status: 200 });

    const req = new HttpRequest('GET', '/api/cached-test');
    const reqWithParams = req.clone({ params: req.params.set('cacheTime', '10') });

    const mockHandler: HttpHandler = {
      handle: jasmine.createSpy('handle').and.returnValue(of(response)),
    };

    interceptor.intercept(reqWithParams, mockHandler).subscribe(() => {
      const mockHandler2: HttpHandler = {
        handle: jasmine.createSpy('handle2').and.returnValue(of(new HttpResponse())),
      };

      interceptor.intercept(reqWithParams, mockHandler2).subscribe((cachedResponse) => {
        expect(mockHandler2.handle).not.toHaveBeenCalled();
        expect(cachedResponse).toBeTruthy();
        done();
      });
    });
  });

  it('should cache permanently when cacheTime is -1', (done) => {
    const response = new HttpResponse({ body: { data: 'permanent' }, status: 200 });
    const req = new HttpRequest('GET', '/api/permanent-cache');
    const reqWithParams = req.clone({ params: req.params.set('cacheTime', '-1') });

    const mockHandler: HttpHandler = {
      handle: jasmine.createSpy('handle').and.returnValue(of(response)),
    };

    interceptor.intercept(reqWithParams, mockHandler).subscribe(() => {
      const mockHandler2: HttpHandler = {
        handle: jasmine.createSpy('handle2').and.returnValue(of(new HttpResponse())),
      };

      interceptor.intercept(reqWithParams, mockHandler2).subscribe((cachedResponse) => {
        expect(mockHandler2.handle).not.toHaveBeenCalled();
        expect(cachedResponse).toBeTruthy();
        done();
      });
    });
  });
});
