import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { TaNotificationSharedService } from './shared.service';

describe('TaNotificationSharedService', () => {
  let service: TaNotificationSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaNotificationSharedService],
    });
    service = TestBed.inject(TaNotificationSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have null paymentStatusTemplate by default', () => {
    expect(service.paymentStatusTemplate).toBeNull();
  });

  it('should have null projectStatusTemplate by default', () => {
    expect(service.projectStatusTemplate).toBeNull();
  });

  it('should have null getProjects$ by default', () => {
    expect(service.getProjects$).toBeNull();
  });

  it('should have null routing by default', () => {
    expect(service.routing).toBeNull();
  });

  it('should allow setting getProjects$ function', () => {
    const mockFn = (ids: string[]) => of([{ id: '1', name: 'Project 1' }]);
    service.getProjects$ = mockFn;
    expect(service.getProjects$).toBe(mockFn);
  });

  it('should allow setting routing object', () => {
    const mockRouting = {
      project: jasmine.createSpy('project'),
      invoice: jasmine.createSpy('invoice'),
      quotationVersion: jasmine.createSpy('quotationVersion'),
      task: jasmine.createSpy('task'),
    };
    service.routing = mockRouting;
    expect(service.routing).toBe(mockRouting);
  });
});
