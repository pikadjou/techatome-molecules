import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENU_MAX_HEIGHT, MENU_TEMPLATE } from '../overlay.service';
import { TaDefaultPanelComponent } from './default-panel.component';

describe('TaDefaultPanelComponent', () => {
  let component: TaDefaultPanelComponent;
  let fixture: ComponentFixture<TaDefaultPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaDefaultPanelComponent],
      providers: [
        { provide: MENU_TEMPLATE, useValue: null },
        { provide: MENU_MAX_HEIGHT, useValue: 300 },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaDefaultPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default template input to undefined', () => {
    expect(component.template()).toBeUndefined();
  });

  it('should inject MENU_MAX_HEIGHT', () => {
    expect(component.maxHeight).toBe(300);
  });
});
