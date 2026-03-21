import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { LayoutHeaderLogoComponent } from './layout-header-logo.component';

describe('LayoutHeaderLogoComponent', () => {
  let component: LayoutHeaderLogoComponent;
  let fixture: ComponentFixture<LayoutHeaderLogoComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [LayoutHeaderLogoComponent],
      providers: [
        provideRouter([]),
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default profile to null', () => {
    expect(component.profile()).toBeNull();
  });

  it('should default notificationTemplate to null', () => {
    expect(component.notificationTemplate()).toBeNull();
  });

  it('should return default userInfo when profile is null', () => {
    const info = component.userInfo();
    expect(info.naming).toBeNull();
    expect(info.profilePictureUrl).toBe('');
  });

  it('should not open modal when profile has no template', () => {
    component.openProfile();
    expect(mockDialog.open).not.toHaveBeenCalled();
  });

  it('should not open notification modal when notificationTemplate is null', () => {
    component.openNotification();
    expect(mockDialog.open).not.toHaveBeenCalled();
  });
});
