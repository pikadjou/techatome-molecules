import { TestBed } from '@angular/core/testing';

import { TaPermissionsService } from './permissions.service';

describe('TaPermissionsService', () => {
  let service: TaPermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaPermissionsService],
    });
    service = TestBed.inject(TaPermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have received as false initially', () => {
    expect(service.received).toBe(false);
  });

  it('should have isAuthenticated as false initially', () => {
    expect(service.isAuthenticated).toBe(false);
  });

  it('should have empty features, guards, and roles initially', () => {
    expect(service.features).toEqual([]);
    expect(service.guards).toEqual([]);
    expect(service.roles).toEqual([]);
  });

  describe('set', () => {
    it('should update guard info and authentication', () => {
      service.set(
        { features: ['dashboard'], roles: ['admin'], guards: ['read'] },
        true
      );
      expect(service.isAuthenticated).toBe(true);
      expect(service.features).toEqual(['dashboard']);
      expect(service.roles).toEqual(['admin']);
      expect(service.guards).toEqual(['read']);
    });

    it('should handle null info', () => {
      service.set(null, true);
      expect(service.isAuthenticated).toBe(true);
    });
  });

  describe('setGuard', () => {
    it('should update features, roles, and guards', () => {
      service.setGuard({ features: ['reports'], roles: ['viewer'], guards: [] });
      expect(service.features).toEqual(['reports']);
      expect(service.roles).toEqual(['viewer']);
    });

    it('should handle null info gracefully', () => {
      service.setGuard(null);
      expect(service.features).toEqual([]);
    });
  });

  describe('setSilentAuthenticated', () => {
    it('should update isAuthenticated', () => {
      service.setSilentAuthenticated(true);
      expect(service.isAuthenticated).toBe(true);
    });
  });

  describe('setAuthenticated', () => {
    it('should update isAuthenticated and emit via updated$', (done) => {
      service.setAuthenticated(true);
      expect(service.isAuthenticated).toBe(true);
      service.updated$.subscribe(() => {
        expect(service.received).toBe(true);
        done();
      });
    });
  });

  describe('hasRole', () => {
    it('should return true when role exists', () => {
      service.set({ roles: ['admin', 'viewer'], features: [], guards: [] }, true);
      expect(service.hasRole('admin')).toBe(true);
    });

    it('should return false when role does not exist', () => {
      service.set({ roles: ['viewer'], features: [], guards: [] }, true);
      expect(service.hasRole('admin')).toBe(false);
    });
  });

  describe('hasRole$', () => {
    it('should return an observable', () => {
      expect(service.hasRole$('admin')).toBeDefined();
    });
  });

  describe('canDirectAccess', () => {
    beforeEach(() => {
      service.set(
        { features: ['dashboard'], roles: ['admin'], guards: [] },
        true
      );
    });

    it('should return true for authenticated level when authenticated', () => {
      expect(service.canDirectAccess('', 'authenticated')).toBe(true);
    });

    it('should return false for authenticated level when not authenticated', () => {
      service.setAuthenticated(false);
      expect(service.canDirectAccess('', 'authenticated')).toBe(false);
    });

    it('should return true for unauthenticated level when not authenticated', () => {
      service.setAuthenticated(false);
      expect(service.canDirectAccess('', 'unauthenticated')).toBe(true);
    });

    it('should return false for unauthenticated level when authenticated', () => {
      expect(service.canDirectAccess('', 'unauthenticated')).toBe(false);
    });

    it('should return true for authorize level when feature exists', () => {
      expect(service.canDirectAccess('dashboard', 'authorize')).toBe(true);
    });

    it('should return false for authorize level when feature does not exist', () => {
      expect(service.canDirectAccess('reports', 'authorize')).toBe(false);
    });

    it('should return true for administrator level with empty feature', () => {
      expect(service.canDirectAccess('', 'administrator')).toBe(true);
    });

    it('should return false for administrator level with feature', () => {
      expect(service.canDirectAccess('dashboard', 'administrator')).toBe(false);
    });
  });

  describe('canAccess$', () => {
    it('should return an observable', () => {
      expect(service.canAccess$('dashboard', 'authorize')).toBeDefined();
    });
  });
});
