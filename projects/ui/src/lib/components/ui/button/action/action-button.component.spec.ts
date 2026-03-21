import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaIconType } from '@ta/icons';

import { ActionButtonComponent } from './action-button.component';
import { ActionButtonData } from './action-button-data';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  const mockActions: ActionButtonData[] = [
    { callback: jasmine.createSpy('callback1'), icon: 'edit', label: 'Edit' },
    { callback: jasmine.createSpy('callback2'), icon: TaIconType.Delete, label: 'Delete' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('actions', mockActions);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isOpen to false', () => {
    expect(component.isOpen).toBeFalse();
  });

  it('should toggle isOpen when more than one action', () => {
    component.openBullet();
    expect(component.isOpen).toBeTrue();
    component.openBullet();
    expect(component.isOpen).toBeFalse();
  });

  it('should call callback directly when only one action', () => {
    const singleAction: ActionButtonData[] = [
      { callback: jasmine.createSpy('singleCallback'), icon: 'edit' },
    ];
    fixture.componentRef.setInput('actions', singleAction);
    fixture.detectChanges();
    component.openBullet();
    expect(singleAction[0].callback).toHaveBeenCalled();
  });

  it('should do nothing when no actions', () => {
    fixture.componentRef.setInput('actions', []);
    fixture.detectChanges();
    component.openBullet();
    expect(component.isOpen).toBeFalse();
  });

  it('should detect font icon', () => {
    expect(component.isFontIcon(mockActions[0])).toBeTrue();
  });
});
