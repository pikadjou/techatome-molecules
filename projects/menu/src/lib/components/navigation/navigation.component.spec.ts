import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { NavigationComponent } from './navigation.component';

@Component({
  standalone: true,
  imports: [NavigationComponent],
  template: `<ta-menu-navigation
    [menu]="menu"
    [container]="container"
    [swiper]="swiper"
    [options]="options"
    [manuallyChanged$]="manuallyChanged$"
  ></ta-menu-navigation>`,
})
class TestHostComponent {
  menu = new Menu({
    elements: [
      new MenuIcon({
        key: 'tab1',
        label: 'Tab 1',
        icon: 'home',
        defaultOpen: true,
        callback: () => {},
      }),
      new MenuIcon({
        key: 'tab2',
        label: 'Tab 2',
        icon: 'settings',
      }),
      new MenuIcon({
        key: 'tab3',
        label: 'Tab 3',
        icon: 'info',
        disabled: true,
      }),
    ],
  });
  container: 'tags' | 'tab' | 'submenu' = 'tab';
  swiper = false;
  options: any = {};
  manuallyChanged$: any = undefined;
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TestHostComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}), queryParams: of({}) },
        },
        {
          provide: Router,
          useValue: { url: '/test', navigate: jasmine.createSpy('navigate') },
        },
        {
          provide: Location,
          useValue: {},
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set activeKey from defaultOpen element', () => {
      expect(component.activeKey).toBe('tab1');
    });

    it('should not set activeKey when no defaultOpen element', () => {
      hostComponent.menu = new Menu({
        elements: [
          new MenuIcon({ key: 'a', label: 'A', icon: 'home' }),
        ],
      });
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.activeKey).toBe('tab1');
    });
  });

  describe('getSpaceClass', () => {
    it('should return default g-space-lg class', () => {
      expect(component.getSpaceClass()).toBe('g-space-lg');
    });

    it('should return custom space class when provided', () => {
      hostComponent.options = { spaceElement: 'sm' };
      fixture.detectChanges();
      expect(component.getSpaceClass()).toBe('g-space-sm');
    });

    it('should return empty string when spaceElement is null', () => {
      hostComponent.options = { spaceElement: null };
      fixture.detectChanges();
      expect(component.getSpaceClass()).toBe('');
    });
  });

  describe('getLink', () => {
    it('should return link when present', () => {
      const item = new MenuIcon({ icon: 'home', link: '/home' });
      expect(component.getLink(item)).toBe('/home');
    });

    it('should return empty string when link is empty', () => {
      const item = new MenuBase({ key: 'test' });
      expect(component.getLink(item)).toBe('');
    });
  });

  describe('callback', () => {
    it('should set activeKey and call item callback', () => {
      const callbackSpy = jasmine.createSpy('callback');
      const item = new MenuBase({ key: 'clicked', callback: callbackSpy });
      component.callback(item);
      expect(component.activeKey).toBe('clicked');
      expect(callbackSpy).toHaveBeenCalled();
    });

    it('should not change activeKey for disabled items', () => {
      component.activeKey = 'current';
      const item = new MenuBase({ key: 'disabled', disabled: true });
      component.callback(item);
      expect(component.activeKey).toBe('current');
    });

    it('should handle items without callback', () => {
      const item = new MenuBase({ key: 'nocb' });
      expect(() => component.callback(item)).not.toThrow();
      expect(component.activeKey).toBe('nocb');
    });
  });

  describe('isActive', () => {
    it('should return true for the active item', () => {
      component.activeKey = 'tab1';
      const item = new MenuBase({ key: 'tab1' });
      expect(component.isActive(item)).toBe(true);
    });

    it('should return false for non-active item', () => {
      component.activeKey = 'tab1';
      const item = new MenuBase({ key: 'tab2' });
      expect(component.isActive(item)).toBe(false);
    });
  });

  describe('manuallyChanged$', () => {
    it('should update activeKey when manuallyChanged$ emits', () => {
      const manualSubject = new Subject<string>();
      hostComponent.manuallyChanged$ = manualSubject.asObservable();
      hostComponent.menu = new Menu({
        elements: [
          new MenuBase({ key: 'a', label: 'A', callback: () => {} }),
          new MenuBase({ key: 'b', label: 'B', callback: () => {} }),
        ],
      });
      fixture.detectChanges();
      component.ngOnInit();

      manualSubject.next('b');
      expect(component.activeKey).toBe('b');
    });
  });
});
