import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputSchemaModal } from './input-schema-modal.component';

describe('InputSchemaModal', () => {
  let component: InputSchemaModal;
  let fixture: ComponentFixture<InputSchemaModal>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<InputSchemaModal>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputSchemaModal,
      ],
      providers: [{ provide: MatDialogRef, useValue: dialogRefSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSchemaModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add panel class on construction', () => {
    expect(dialogRefSpy.addPanelClass).toHaveBeenCalledWith(['full-screen-modal', 'edit-mode']);
  });

  it('should have a default imagePath', () => {
    expect(component.imagePath).toBeTruthy();
    expect(component.imagePath.startsWith('data:image/png;base64,')).toBeTrue();
  });

  it('should close dialog when close is called', () => {
    component.close();
    expect(dialogRefSpy.close).toHaveBeenCalledWith();
  });

  it('should emit on askImage$ when selected is called', () => {
    spyOn(component.askImage$, 'next');
    component.selected();
    expect(component.askImage$.next).toHaveBeenCalledWith(null);
  });

  it('should close dialog with file data when savedImage is called', () => {
    const blob = new Blob(['test'], { type: 'image/png' });
    component.savedImage(blob);
    expect(dialogRefSpy.close).toHaveBeenCalled();
    const closeArg = dialogRefSpy.close.calls.mostRecent().args[0];
    expect(closeArg.file).toBeTruthy();
    expect(closeArg.file.file instanceof File).toBeTrue();
    expect(closeArg.file.localUrl).toBe(component.imagePath);
  });
});
