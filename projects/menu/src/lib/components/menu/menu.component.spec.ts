import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { of } from 'rxjs';

import { MenuBase } from '../../models/menu/item/base';
import { Menu } from '../../models/menu/menu';
import { MenuComponent } from './menu.component';

@Component({
  standalone: true,
  imports: [MenuComponent],
  template: '<ta-menu [menu]="menu" [container]="container"></ta-menu>',
})
class TestHostComponent {
  menu = new Menu({
    elements: [new MenuBase({ key: 'item1', label: 'Item 1' })],
    direction: 'horizontal',
  });
  container: 'main' | 'second' | 'overflow' | 'panel' = 'main';
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
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

  describe('containerCss', () => {
    it('should return "main-nav horizontal" for main container with horizontal menu', () => {
      fixture.componentInstance.container = 'main';
      fixture.detectChanges();
      expect(component.containerCss).toBe('main-nav horizontal');
    });

    it('should return "overflow vertical" for overflow container', () => {
      fixture.componentInstance.container = 'overflow';
      fixture.detectChanges();
      expect(component.containerCss).toBe('overflow vertical');
    });

    it('should return "second horizontal" for second container', () => {
      fixture.componentInstance.container = 'second';
      fixture.detectChanges();
      expect(component.containerCss).toBe('second horizontal');
    });

    it('should return empty string for panel container', () => {
      fixture.componentInstance.container = 'panel';
      fixture.detectChanges();
      expect(component.containerCss).toBe('');
    });
  });
});
