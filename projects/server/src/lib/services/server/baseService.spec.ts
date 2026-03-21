import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';

import { TaGraphService } from '../graphql/graph.service';
import { TaServerSevice } from './api/server.service';
import { TaBaseService } from './baseService';

@Injectable()
class TestService extends TaBaseService {
  constructor() {
    super();
  }
}

describe('TaBaseService', () => {
  let service: TestService;
  let mockServerService: jasmine.SpyObj<TaServerSevice>;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;

  beforeEach(() => {
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes']);
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'registerGraphEndpoint',
      'fetchQueryList',
      'fetchQuery',
      'fetchPagedQueryList',
      'mutate',
    ]);

    TestBed.configureTestingModule({
      providers: [
        TestService,
        { provide: TaServerSevice, useValue: mockServerService },
        { provide: TaGraphService, useValue: mockGraphService },
      ],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('registerRoutes', () => {
    it('should register API routes with server service', () => {
      const apiRoutes = {
        GetUsers: { type: 'GET' as const, url: '{ApiUrl}/users' },
      };
      service.registerRoutes({ apiRoutes });
      expect(mockServerService.registerRoutes).toHaveBeenCalledWith(apiRoutes);
    });

    it('should register graph endpoint with graph service', () => {
      const graphEndpoint = {
        clientName: 'test',
        endpoint: 'http://localhost/graphql',
      };
      service.registerRoutes({ graphEndpoint });
      expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalledWith(graphEndpoint, undefined);
    });

    it('should pass graph options when registering graph endpoint', () => {
      const graphEndpoint = {
        clientName: 'test',
        endpoint: 'http://localhost/graphql',
      };
      const options = { visitor: true };
      service.registerRoutes({ graphEndpoint }, options);
      expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalledWith(graphEndpoint, options);
    });

    it('should not call registerRoutes when no apiRoutes provided', () => {
      service.registerRoutes({});
      expect(mockServerService.registerRoutes).not.toHaveBeenCalled();
    });

    it('should not call registerGraphEndpoint when no graphEndpoint provided', () => {
      mockGraphService.registerGraphEndpoint.calls.reset();
      service.registerRoutes({});
      expect(mockGraphService.registerGraphEndpoint).not.toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe all subscriptions', () => {
      const sub1 = jasmine.createSpyObj<Subscription>('Subscription', ['unsubscribe']);
      const sub2 = jasmine.createSpyObj<Subscription>('Subscription', ['unsubscribe']);

      (service as any)._subscriptionList = [sub1, sub2];
      service.ngOnDestroy();

      expect(sub1.unsubscribe).toHaveBeenCalled();
      expect(sub2.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('_registerSubscription', () => {
    it('should add subscription to the list', () => {
      const sub = jasmine.createSpyObj<Subscription>('Subscription', ['unsubscribe']);
      (service as any)._registerSubscription(sub);
      expect((service as any)._subscriptionList).toContain(sub);
    });
  });
});
