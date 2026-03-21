import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LayoutModalComponent } from './layout-modal.component';

describe('LayoutModalComponent', () => {
  let component: LayoutModalComponent;
  let fixture: ComponentFixture<LayoutModalComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LayoutModalComponent,
      ],
      providers: [
        provideRouter([]),
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default style to classic', () => {
    expect(component.style()).toBe('classic');
  });

  it('should default title to empty string', () => {
    expect(component.title()).toBe('');
  });

  it('should add panel class on init', () => {
    expect(mockDialogRef.addPanelClass).toHaveBeenCalledWith('classic-modal');
  });

  it('should close dialog when close is called', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should accept a custom style', () => {
    fixture.componentRef.setInput('style', 'full');
    fixture.detectChanges();
    expect(component.style()).toBe('full');
  });

  it('should accept a custom title', () => {
    fixture.componentRef.setInput('title', 'My Modal');
    fixture.detectChanges();
    expect(component.title()).toBe('My Modal');
  });
});
