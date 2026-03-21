import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { TaPermissionsService } from '../services/permissions.service';
import { FeatureGuard } from './feature.guard';

describe('FeatureGuard', () => {
  let guard: FeatureGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let permissionsService: TaPermissionsService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [
        FeatureGuard,
        TaPermissionsService,
        { provide: Router, useValue: mockRouter },
      ],
    });
    guard = TestBed.inject(FeatureGuard);
    permissionsService = TestBed.inject(TaPermissionsService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true when user has the required feature permission', () => {
    permissionsService.set(
      { features: ['dashboard'], roles: [], guards: [] },
      true
    );

    const route = { data: { feature: 'dashboard', level: 'authorize' } } as unknown as ActivatedRouteSnapshot;
    const result = guard.canActivate(route);
    expect(result).toBe(true);
  });

  it('should redirect and return false when user lacks the feature', () => {
    permissionsService.set(
      { features: [], roles: [], guards: [] },
      true
    );

    const route = { data: { feature: 'dashboard', level: 'authorize' } } as unknown as ActivatedRouteSnapshot;
    const result = guard.canActivate(route);
    expect(result).toBe(false);
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should return observable when permissions not yet received', () => {
    const route = { data: { feature: 'dashboard', level: 'authorize' } } as unknown as ActivatedRouteSnapshot;
    const result = guard.canActivate(route);
    expect(typeof result).not.toBe('boolean');
  });

  it('should have setRedirect method', () => {
    guard.setRedirect();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
});
