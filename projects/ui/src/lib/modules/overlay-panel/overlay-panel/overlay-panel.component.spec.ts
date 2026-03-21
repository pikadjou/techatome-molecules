import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OverlayService } from '../overlay.service';
import { TaOverlayPanelComponent } from './overlay-panel.component';

describe('TaOverlayPanelComponent', () => {
  let component: TaOverlayPanelComponent;
  let fixture: ComponentFixture<TaOverlayPanelComponent>;
  let mockOverlayService: jasmine.SpyObj<OverlayService>;

  beforeEach(async () => {
    mockOverlayService = jasmine.createSpyObj('OverlayService', ['openMenu', 'closeMenu'], {
      onClose$: { subscribe: jasmine.createSpy('subscribe').and.callFake((cb: any) => {
        return { unsubscribe: jasmine.createSpy('unsubscribe') };
      })},
    });

    await TestBed.configureTestingModule({
      imports: [TaOverlayPanelComponent],
      providers: [
        provideRouter([]),
        { provide: OverlayService, useValue: mockOverlayService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaOverlayPanelComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('panelConfig', { menuComponent: null });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default position to default', () => {
    expect(component.position()).toBe('default');
  });

  it('should accept position right', () => {
    fixture.componentRef.setInput('position', 'right');
    fixture.detectChanges();
    expect(component.position()).toBe('right');
  });

  it('should call overlayService closeMenu on close', () => {
    component.close();
    expect(mockOverlayService.closeMenu).toHaveBeenCalled();
  });
});
