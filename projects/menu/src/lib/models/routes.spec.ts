import { TaMainRoute, TaRoutes, TaRoutesCore } from './routes';

describe('TaMainRoute', () => {
  it('should have expected enum values', () => {
    expect(TaMainRoute.HOME).toBe('HOME');
    expect(TaMainRoute.USERLOGIN).toBe('USERLOGIN');
    expect(TaMainRoute.SINGIN).toBe('SINGIN');
    expect(TaMainRoute.USERLOGOUT).toBe('USERLOGOUT');
    expect(TaMainRoute.NOTIFICATIONS).toBe('NOTIFICATIONS');
    expect(TaMainRoute.REDIRECT).toBe('REDIRECT');
  });
});

describe('TaRoutesCore', () => {
  let routesCore: TaRoutesCore;

  beforeEach(() => {
    routesCore = new TaRoutesCore();
  });

  it('should have default routes', () => {
    expect(routesCore.routes.length).toBe(6);
  });

  describe('getHome', () => {
    it('should return absolute home url', () => {
      const url = routesCore.getHome();
      expect(url).toBe('/');
    });
  });

  describe('getLogin', () => {
    it('should return absolute login url', () => {
      const url = routesCore.getLogin();
      expect(url).toBe('/login');
    });
  });

  describe('getSign', () => {
    it('should return absolute signin url', () => {
      const url = routesCore.getSign();
      expect(url).toBe('/signin');
    });
  });

  describe('getLogout', () => {
    it('should return absolute logout url', () => {
      const url = routesCore.getLogout();
      expect(url).toBe('/logout');
    });
  });

  describe('addRoute', () => {
    it('should add a single route', () => {
      routesCore.addRoute({ key: 'CUSTOM', url: 'custom' });
      expect(routesCore.routes.length).toBe(7);
    });
  });

  describe('addRoutes', () => {
    it('should add multiple routes', () => {
      routesCore.addRoutes([
        { key: 'A', url: 'a' },
        { key: 'B', url: 'b' },
      ]);
      expect(routesCore.routes.length).toBe(8);
    });
  });

  describe('getUrl', () => {
    it('should return url for known route', () => {
      const url = routesCore.getUrl([TaMainRoute.USERLOGIN]);
      expect(url).toBe('login');
    });

    it('should return empty string for unknown route', () => {
      const url = routesCore.getUrl(['UNKNOWN']);
      expect(url).toBe('');
    });
  });

  describe('getAbsoluteUrl', () => {
    it('should return absolute url for known route', () => {
      const url = routesCore.getAbsoluteUrl([TaMainRoute.NOTIFICATIONS]);
      expect(url).toBe('/notifications');
    });

    it('should replace params in url', () => {
      routesCore.addRoute({ key: 'DETAIL', url: 'detail/:id' });
      const url = routesCore.getAbsoluteUrl(['DETAIL'], { id: '42' });
      expect(url).toBe('/detail/42');
    });

    it('should return empty string for unknown route', () => {
      const url = routesCore.getAbsoluteUrl(['NONEXISTENT']);
      expect(url).toBe('');
    });

    it('should remove unmatched params when strict is true', () => {
      routesCore.addRoute({ key: 'DETAIL', url: 'detail/:id' });
      const url = routesCore.getAbsoluteUrl(['DETAIL'], {}, true);
      expect(url).toBe('/detail');
    });
  });

  describe('getPermission', () => {
    it('should return true for route without canActivate', () => {
      expect(routesCore.getPermission([TaMainRoute.HOME])).toBe(true);
    });

    it('should return canActivate value when defined', () => {
      routesCore.addRoute({ key: 'PROTECTED', url: 'protected', canActivate: false });
      expect(routesCore.getPermission(['PROTECTED'])).toBe(false);
    });

    it('should return true for unknown route', () => {
      expect(routesCore.getPermission(['UNKNOWN'])).toBe(true);
    });
  });

  describe('nested routes', () => {
    beforeEach(() => {
      routesCore.addRoute({
        key: 'PARENT',
        url: 'parent',
        children: [
          { key: 'CHILD', url: 'child' },
        ],
      });
    });

    it('should resolve nested route url', () => {
      const url = routesCore.getAbsoluteUrl(['PARENT', 'CHILD']);
      expect(url).toBe('/parent/child');
    });

    it('should return relative url for nested route', () => {
      const url = routesCore.getUrl(['PARENT', 'CHILD']);
      expect(url).toBe('child');
    });
  });
});

describe('TaRoutes (singleton)', () => {
  it('should be an instance of TaRoutesCore', () => {
    expect(TaRoutes).toBeInstanceOf(TaRoutesCore);
  });

  it('should have default routes', () => {
    expect(TaRoutes.routes.length).toBeGreaterThanOrEqual(6);
  });
});
