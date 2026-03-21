import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';

import { TaSharedMenuService } from '@ta/services';

import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { MainMenuComponent } from './main-menu.component';

@Component({
  standalone: true,
  imports: [MainMenuComponent],
  template: '<ta-main-menu [menuMain]="menuMain" [direction]="direction"></ta-main-menu>',
})
class TestHostComponent {
  menuMain = new Menu({
    elements: [
      new MenuIcon({ key: 'home', label: 'Home', icon: 'home', link: '/home' }),
    ],
    direction: 'vertical',
  });
  direction: 'horizontal' | 'vertical' = 'vertical';
}

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let mockSharedMenuService: jasmine.SpyObj<TaSharedMenuService>;
  let mockRouter: any;

  beforeEach(async () => {
    mockSharedMenuService = {
      isMinimized$: new BehaviorSubject<boolean>(false),
    } as any;

    mockRouter = {
      url: '/test',
      navigate: jasmine.createSpy('navigate'),
    };

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
          useValue: mockRouter,
        },
        {
          provide: Location,
          useValue: {},
        },
        {
          provide: TaSharedMenuService,
          useValue: mockSharedMenuService,
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

  describe('navigateToHome', () => {
    it('should navigate to root', () => {
      component.navigateToHome();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe('toggleView', () => {
    it('should toggle isMinimized$ from false to true', () => {
      mockSharedMenuService.isMinimized$.next(false);
      component.toggleView();
      expect(mockSharedMenuService.isMinimized$.getValue()).toBe(true);
    });

    it('should toggle isMinimized$ from true to false', () => {
      mockSharedMenuService.isMinimized$.next(true);
      component.toggleView();
      expect(mockSharedMenuService.isMinimized$.getValue()).toBe(false);
    });
  });

  describe('toggleMobilePanel', () => {
    it('should toggle isPanelOpen', () => {
      expect(component.isPanelOpen).toBe(false);
      component.toggleMobilePanel();
      expect(component.isPanelOpen).toBe(true);
      component.toggleMobilePanel();
      expect(component.isPanelOpen).toBe(false);
    });
  });

  describe('closeMobilePanel', () => {
    it('should set isPanelOpen to false', () => {
      component.isPanelOpen = true;
      component.closeMobilePanel();
      expect(component.isPanelOpen).toBe(false);
    });
  });

  describe('direction input', () => {
    it('should default to vertical', () => {
      expect(component.direction()).toBe('vertical');
    });
  });
});
