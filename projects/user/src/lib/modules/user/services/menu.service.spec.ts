import { TestBed } from '@angular/core/testing';

import { TaUserMenuService } from './menu.service';

describe('TaUserMenuService', () => {
  let service: TaUserMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaUserMenuService],
    });
    service = TestBed.inject(TaUserMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('infosMenu', () => {
    it('should return a Menu object', () => {
      const menu = service.infosMenu();
      expect(menu).toBeTruthy();
    });

    it('should contain language, infos, and params items', () => {
      const menu = service.infosMenu();
      expect(menu.elements).toBeDefined();
      expect(menu.elements.length).toBe(3);
    });

    it('should have vertical direction', () => {
      const menu = service.infosMenu();
      expect(menu.direction).toBe('vertical');
    });

    it('should have elements sorted by order', () => {
      const menu = service.infosMenu();
      for (let i = 1; i < menu.elements.length; i++) {
        expect(menu.elements[i].order).toBeGreaterThanOrEqual(
          menu.elements[i - 1].order
        );
      }
    });
  });
});
