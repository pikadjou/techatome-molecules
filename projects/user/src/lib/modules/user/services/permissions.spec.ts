import { Permissions, PermissionsCore } from './permissions';

describe('PermissionsCore (deprecated)', () => {
  let permissionsCore: PermissionsCore;

  beforeEach(() => {
    permissionsCore = new PermissionsCore();
  });

  it('should create instance', () => {
    expect(permissionsCore).toBeTruthy();
  });

  it('should have received as false initially', () => {
    expect(permissionsCore.received).toBe(false);
  });

  it('should have isAuthenticated as false initially', () => {
    expect(permissionsCore.isAuthenticated).toBe(false);
  });

  describe('set', () => {
    it('should parse permissions into guards map', () => {
      permissionsCore.set(
        { permissions: ['read:dashboard', 'write:dashboard'], roles: ['admin'] },
        true
      );
      expect(permissionsCore.guards['dashboard']).toEqual(['read', 'write']);
      expect(permissionsCore.roles).toEqual(['admin']);
      expect(permissionsCore.isAuthenticated).toBe(true);
    });

    it('should handle empty permissions', () => {
      permissionsCore.set({ permissions: [], roles: [] }, false);
      expect(permissionsCore.guards).toEqual({});
      expect(permissionsCore.isAuthenticated).toBe(false);
    });
  });

  describe('hasRole', () => {
    it('should return true when role matches', () => {
      permissionsCore.set({ permissions: [], roles: ['admin'] }, true);
      expect(permissionsCore.hasRole('admin')).toBe(true);
    });

    it('should return false when role does not match', () => {
      permissionsCore.set({ permissions: [], roles: ['viewer'] }, true);
      expect(permissionsCore.hasRole('admin')).toBe(false);
    });
  });

  describe('canDirectAccess', () => {
    it('should return true for authenticated level when authenticated', () => {
      permissionsCore.set({ permissions: [], roles: [] }, true);
      expect(permissionsCore.canDirectAccess('', 'authenticated')).toBe(true);
    });

    it('should return false for authenticated level when not authenticated', () => {
      permissionsCore.set({ permissions: [], roles: [] }, false);
      expect(permissionsCore.canDirectAccess('', 'authenticated')).toBe(false);
    });

    it('should return true when feature has empty string (no feature)', () => {
      expect(permissionsCore.canDirectAccess('', 'read')).toBe(true);
    });

    it('should return false when feature guard is not found', () => {
      expect(permissionsCore.canDirectAccess('dashboard', 'read')).toBe(false);
    });

    it('should return true when feature has "all" access', () => {
      permissionsCore.set(
        { permissions: ['all:dashboard'], roles: [] },
        true
      );
      expect(permissionsCore.canDirectAccess('dashboard', 'read')).toBe(true);
    });

    it('should return true when feature has the required level', () => {
      permissionsCore.set(
        { permissions: ['read:dashboard'], roles: [] },
        true
      );
      expect(permissionsCore.canDirectAccess('dashboard', 'read')).toBe(true);
    });

    it('should return false when feature does not have the required level', () => {
      permissionsCore.set(
        { permissions: ['read:dashboard'], roles: [] },
        true
      );
      expect(permissionsCore.canDirectAccess('dashboard', 'write')).toBe(false);
    });
  });

  describe('canAccess', () => {
    it('should return an observable', () => {
      expect(permissionsCore.canAccess('dashboard', 'read')).toBeDefined();
    });
  });

  describe('setSilentAuthenticated', () => {
    it('should update isAuthenticated silently', () => {
      permissionsCore.setSilentAuthenticated(true);
      expect(permissionsCore.isAuthenticated).toBe(true);
    });
  });

  describe('setAuthenticated', () => {
    it('should update isAuthenticated and emit', () => {
      permissionsCore.setAuthenticated(true);
      expect(permissionsCore.isAuthenticated).toBe(true);
      expect(permissionsCore.received).toBe(true);
    });
  });
});

describe('Permissions singleton (deprecated)', () => {
  it('should be an instance of PermissionsCore', () => {
    expect(Permissions).toBeInstanceOf(PermissionsCore);
  });
});
