import { Component, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { MenuAction } from '../../../models/menu/item/action';
import { MenuBase } from '../../../models/menu/item/base';
import { MenuIcon } from '../../../models/menu/item/icon';
import { MenuPanel } from '../../../models/menu/item/panel';
import { MenuItemComponent } from './menu-item.component';

@Component({
  standalone: true,
  imports: [MenuItemComponent],
  template: '<ta-menu-item [item]="item" [styleType]="styleType"></ta-menu-item>',
})
class TestHostComponent {
  item: MenuIcon | MenuAction | MenuBase | MenuPanel = new MenuIcon({
    key: 'test',
    label: 'Test',
    icon: 'home',
    link: '/test',
    defaultOpen: false,
    children: [],
  });
  styleType = 'bloc';
}

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
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
        {
          provide: MatDialog,
          useValue: { open: jasmine.createSpy('open') },
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
    it('should set isOpen to false when item defaultOpen is false', () => {
      expect(component.isOpen).toBe(false);
    });

    it('should set isOpen to true when item defaultOpen is true', () => {
      hostComponent.item = new MenuIcon({
        key: 'open',
        label: 'Open',
        icon: 'home',
        defaultOpen: true,
      });
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.isOpen).toBe(true);
    });
  });

  describe('getStyleType', () => {
    it('should combine styleType and item style', () => {
      hostComponent.item = new MenuIcon({
        key: 'styled',
        label: 'Styled',
        icon: 'home',
        style: 'active',
      });
      fixture.detectChanges();
      expect(component.getStyleType()).toBe('bloc active');
    });
  });

  describe('hasFontIcon', () => {
    it('should return true when item has string icon', () => {
      expect(component.hasFontIcon()).toBe(true);
    });

    it('should return false when item has no icon', () => {
      hostComponent.item = new MenuBase({ key: 'noicon' });
      fixture.detectChanges();
      expect(component.hasFontIcon()).toBe(false);
    });
  });

  describe('hasIconImage', () => {
    it('should return false when item has string icon', () => {
      expect(component.hasIconImage()).toBe(false);
    });
  });

  describe('getIcon', () => {
    it('should return the icon value', () => {
      expect(component.getIcon()).toBe('home');
    });
  });

  describe('getFontIcon', () => {
    it('should return the font icon string', () => {
      expect(component.getFontIcon()).toBe('home');
    });
  });

  describe('hasChild', () => {
    it('should return false when no children', () => {
      expect(component.hasChild()).toBe(false);
    });

    it('should return true when children exist', () => {
      hostComponent.item = new MenuIcon({
        key: 'parent',
        label: 'Parent',
        icon: 'folder',
        children: [new MenuBase({ key: 'child' })],
      });
      fixture.detectChanges();
      expect(component.hasChild()).toBe(true);
    });
  });

  describe('toggle', () => {
    it('should toggle isOpen', () => {
      expect(component.isOpen).toBe(false);
      component.toggle();
      expect(component.isOpen).toBe(true);
      component.toggle();
      expect(component.isOpen).toBe(false);
    });
  });

  describe('getTemplate', () => {
    it('should return null for non-panel items', () => {
      expect(component.getTemplate()).toBeNull();
    });

    it('should return template for MenuPanel items', () => {
      const mockTemplate = {} as TemplateRef<any>;
      hostComponent.item = new MenuPanel({
        key: 'panel',
        label: 'Panel',
        template: mockTemplate,
      });
      fixture.detectChanges();
      expect(component.getTemplate()).toBe(mockTemplate);
    });
  });

  describe('getLink', () => {
    it('should return the link when present', () => {
      expect(component.getLink()).toBe('/test');
    });

    it('should return empty string when link is empty', () => {
      hostComponent.item = new MenuIcon({ key: 'nolink', icon: 'test' });
      fixture.detectChanges();
      expect(component.getLink()).toBe('');
    });
  });

  describe('executeCallback', () => {
    it('should call item callback when no template', () => {
      const callbackSpy = jasmine.createSpy('callback');
      hostComponent.item = new MenuIcon({
        key: 'cb',
        icon: 'test',
        callback: callbackSpy,
      });
      fixture.detectChanges();
      component.executeCallback();
      expect(callbackSpy).toHaveBeenCalled();
    });
  });

  describe('trackByFn', () => {
    it('should return a combination of item and key', () => {
      const child = new MenuBase({ key: 'child1' });
      const result = component.trackByFn(0, child);
      expect(result).toContain('child1');
    });
  });
});
