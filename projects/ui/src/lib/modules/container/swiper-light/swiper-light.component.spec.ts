import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateRef } from '@angular/core';
import { provideRouter } from '@angular/router';

import { TaDeviceInfoService } from '@ta/capacitor';

import { SwiperLightComponent } from './swiper-light.component';

describe('SwiperLightComponent', () => {
  let component: SwiperLightComponent;
  let fixture: ComponentFixture<SwiperLightComponent>;
  let mockDeviceInfoService: jasmine.SpyObj<TaDeviceInfoService>;
  let mockTemplateRef: jasmine.SpyObj<TemplateRef<any>>;

  beforeEach(async () => {
    mockDeviceInfoService = jasmine.createSpyObj('TaDeviceInfoService', ['isMobileOs'], {
      os$: { subscribe: jasmine.createSpy('subscribe').and.callFake((cb: any) => {
        cb('web');
        return { unsubscribe: jasmine.createSpy('unsubscribe') };
      })},
    });
    mockDeviceInfoService.isMobileOs.and.returnValue(false);
    mockTemplateRef = jasmine.createSpyObj('TemplateRef', ['createEmbeddedView']);

    await TestBed.configureTestingModule({
      imports: [SwiperLightComponent],
      providers: [
        provideRouter([]),
        { provide: TaDeviceInfoService, useValue: mockDeviceInfoService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperLightComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [{ id: 1 }, { id: 2 }]);
    fixture.componentRef.setInput('template', mockTemplateRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required items input', () => {
    expect(component.items().length).toBe(2);
  });

  it('should default swiperClasses to g-space-sm', () => {
    expect(component.swiperClasses()).toBe('g-space-sm');
  });

  it('should default containerClasses to undefined', () => {
    expect(component.containerClasses()).toBeUndefined();
  });

  it('should default forced to false', () => {
    expect(component.forced()).toBe(false);
  });

  it('should track items by id when item has id', () => {
    const result = component.track(0, { id: 42 });
    expect(result).toBe(42);
  });

  it('should track items by key when item has key', () => {
    const result = component.track(0, { key: 'abc' });
    expect(result).toBe('abc');
  });

  it('should return the item itself when it has no id or key', () => {
    const item = { name: 'test' };
    const result = component.track(0, item);
    expect(result).toBe(item);
  });
});
