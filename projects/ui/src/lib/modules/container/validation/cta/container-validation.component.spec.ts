import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { of } from 'rxjs';

import { ContainerValidationComponent } from './container-validation.component';

describe('ContainerValidationComponent', () => {
  let component: ContainerValidationComponent;
  let fixture: ComponentFixture<ContainerValidationComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ContainerValidationComponent],
      providers: [
        provideRouter([]),
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default disabled to false', () => {
    expect(component.disabled()).toBe(false);
  });

  it('should accept disabled true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(component.disabled()).toBe(true);
  });

  it('should not open modal when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    component.openModal();
    expect(mockDialog.open).not.toHaveBeenCalled();
  });

  it('should open modal when not disabled', () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockDialogRef.afterClosed.and.returnValue(of(false));
    mockDialog.open.and.returnValue(mockDialogRef);

    component.openModal();
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should emit validated when modal result is true', () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockDialogRef.afterClosed.and.returnValue(of(true));
    mockDialog.open.and.returnValue(mockDialogRef);

    spyOn(component.validated, 'emit');
    component.openModal();
    expect(component.validated.emit).toHaveBeenCalled();
  });

  it('should not emit validated when modal result is false', () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockDialogRef.afterClosed.and.returnValue(of(false));
    mockDialog.open.and.returnValue(mockDialogRef);

    spyOn(component.validated, 'emit');
    component.openModal();
    expect(component.validated.emit).not.toHaveBeenCalled();
  });
});
