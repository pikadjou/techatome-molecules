import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TaPermissionsService } from '../services/permissions.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let permissionsService: TaPermissionsService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        TaPermissionsService,
        { provide: Router, useValue: mockRouter },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    permissionsService = TestBed.inject(TaPermissionsService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true when user is authenticated and permissions received', () => {
    permissionsService.set(
      { features: [], roles: [], guards: [] },
      true
    );
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBe(true);
  });

  it('should return false and redirect when user is not authenticated and permissions received', () => {
    permissionsService.set(
      { features: [], roles: [], guards: [] },
      false
    );
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBe(false);
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should return observable when permissions not yet received', () => {
    const result = guard.canActivate({} as any, {} as any);
    expect(typeof result).not.toBe('boolean');
  });

  it('should have setRedirect method', () => {
    expect(guard.setRedirect).toBeDefined();
    guard.setRedirect();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
});
