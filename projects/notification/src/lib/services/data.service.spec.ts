import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { TaGraphService } from '@ta/server';

import { TaNotificationDataService } from './data.service';
import { TaNotificationSharedService } from './shared.service';

describe('TaNotificationDataService', () => {
  let service: TaNotificationDataService;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;
  let mockSharedService: jasmine.SpyObj<TaNotificationSharedService>;

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'fetchPagedQueryList',
      'fetchQueryList',
      'mutate',
      'registerGraphEndpoint',
    ]);

    mockSharedService = jasmine.createSpyObj(
      'TaNotificationSharedService',
      [],
      { getProjects$: null }
    );

    TestBed.configureTestingModule({
      providers: [
        TaNotificationDataService,
        { provide: TaGraphService, useValue: mockGraphService },
        { provide: TaNotificationSharedService, useValue: mockSharedService },
      ],
    });

    service = TestBed.inject(TaNotificationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a list HandleComplexRequest', () => {
    expect(service.list).toBeTruthy();
    expect(service.list.data$).toBeTruthy();
  });

  it('should have a count HandleComplexRequest', () => {
    expect(service.count).toBeTruthy();
    expect(service.count.data$).toBeTruthy();
  });

  it('should register graph endpoint on construction', () => {
    expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalled();
  });

  describe('computeKey', () => {
    it('should return "all" when no filters are provided', () => {
      expect(service.computeKey()).toBe('all');
    });

    it('should return "all" when filters are null', () => {
      expect(service.computeKey(null)).toBe('all');
    });

    it('should return a computed key with projectId, isNew and take', () => {
      const key = service.computeKey({
        projectId: 'proj-1',
        isNew: true,
        take: 10,
      });
      expect(key).toBe('proj-1-true-10');
    });

    it('should handle undefined filter values', () => {
      const key = service.computeKey({});
      expect(key).toBe('undefined-undefined-undefined');
    });

    it('should handle partial filter values', () => {
      const key = service.computeKey({ projectId: 'proj-2' });
      expect(key).toBe('proj-2-undefined-undefined');
    });
  });

  describe('fetchNotifications$', () => {
    it('should call graphService.fetchPagedQueryList', () => {
      mockGraphService.fetchPagedQueryList.and.returnValue(
        of({ items: [], totalCount: 0 })
      );

      service.fetchNotifications$(null).subscribe();

      expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
    });

    it('should return mapped items when no shared project service', (done) => {
      const mockNotifications = [
        { id: '1', projectId: 'p1' },
        { id: '2', projectId: 'p2' },
      ];
      mockGraphService.fetchPagedQueryList.and.returnValue(
        of({ items: mockNotifications, totalCount: 2 })
      );

      service.fetchNotifications$(null).subscribe((result) => {
        expect(result).toBeTruthy();
        done();
      });
    });
  });

  describe('fetchNumberOfNotifications$', () => {
    it('should call graphService.fetchPagedQueryList', () => {
      mockGraphService.fetchPagedQueryList.and.returnValue(
        of({ items: [], totalCount: 5 })
      );

      service.fetchNumberOfNotifications$(null).subscribe();

      expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
    });
  });

  describe('isRead$', () => {
    it('should call graphService.mutate with the notification id', () => {
      mockGraphService.mutate.and.returnValue(of(true));

      service.isRead$('notification-123').subscribe();

      expect(mockGraphService.mutate).toHaveBeenCalled();
      const callArgs = mockGraphService.mutate.calls.mostRecent().args;
      expect(callArgs[1]).toBe('notificationRead');
    });
  });
});
