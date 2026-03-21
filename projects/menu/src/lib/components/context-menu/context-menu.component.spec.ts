import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { MenuBase } from '../../models/menu/item/base';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { ContextMenuComponent } from './context-menu.component';

@Component({
  standalone: true,
  imports: [ContextMenuComponent],
  template: '<ta-context-menu [menu]="menu"></ta-context-menu>',
})
class TestHostComponent {
  menu = new Menu({
    elements: [
      new MenuIcon({ key: 'home', label: 'Home', icon: 'home', link: '/home' }),
      new MenuIcon({ key: 'settings', label: 'Settings', icon: 'settings', link: '/settings', disabled: true }),
    ],
  });
}

describe('ContextMenuComponent', () => {
  let component: ContextMenuComponent;
  let fixture: ComponentFixture<TestHostComponent>;

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
    fixture.detectChanges();
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasFontIcon', () => {
    it('should return true for item with string icon', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(component.hasFontIcon(item)).toBe(true);
    });

    it('should return false for item without icon', () => {
      const item = new MenuBase({ key: 'test' });
      expect(component.hasFontIcon(item)).toBe(false);
    });
  });

  describe('hasIconImage', () => {
    it('should return false for item with string icon', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(component.hasIconImage(item)).toBe(false);
    });
  });

  describe('getIcon', () => {
    it('should return icon value', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(component.getIcon(item)).toBe('home');
    });

    it('should return empty string for item without icon', () => {
      const item = new MenuBase({ key: 'test' });
      expect(component.getIcon(item)).toBe('');
    });
  });

  describe('getFontIcon', () => {
    it('should return font icon string', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(component.getFontIcon(item)).toBe('home');
    });
  });

  describe('getLink', () => {
    it('should return link when present', () => {
      const item = new MenuIcon({ icon: 'home', link: '/home' });
      expect(component.getLink(item)).toBe('/home');
    });

    it('should return empty string when link is empty', () => {
      const item = new MenuIcon({ icon: 'home', link: '' });
      expect(component.getLink(item)).toBe('');
    });

    it('should return empty string when link is undefined', () => {
      const item = new MenuBase({ key: 'test' });
      expect(component.getLink(item)).toBe('');
    });
  });

  describe('getRoute', () => {
    it('should return array with link when not disabled', () => {
      const item = new MenuIcon({ icon: 'home', link: '/home', disabled: false });
      expect(component.getRoute(item)).toEqual(['/home']);
    });

    it('should return empty array when disabled', () => {
      const item = new MenuIcon({ icon: 'home', link: '/home', disabled: true });
      expect(component.getRoute(item)).toEqual([]);
    });
  });
});
