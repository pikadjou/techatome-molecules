import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FileListComponent } from './files-list.component';

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FileListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have files default to empty array', () => {
    expect(component.files()).toEqual([]);
  });

  it('should have canDeleteFile default to false', () => {
    expect(component.canDeleteFile()).toBe(false);
  });

  it('should return false for canDisplayFileType when no files', () => {
    expect(component.canDisplayFileType('Image')).toBe(false);
  });

  it('should return true for canDisplayFileType when first file matches', () => {
    fixture.componentRef.setInput('files', [{ type: 'Image' }]);
    fixture.detectChanges();
    expect(component.canDisplayFileType('Image')).toBe(true);
  });

  it('should not emit fileSelected for loading files', () => {
    spyOn(component.fileSelected, 'emit');
    component.onFileSelected({ isLoading: true } as any, 0);
    expect(component.fileSelected.emit).not.toHaveBeenCalled();
  });

  it('should emit fileSelected with index for non-loading files', () => {
    spyOn(component.fileSelected, 'emit');
    const file = { isLoading: false, name: 'test.jpg' } as any;
    component.onFileSelected(file, 2);
    expect(component.fileSelected.emit).toHaveBeenCalledWith(
      jasmine.objectContaining({ index: 2 })
    );
  });

  it('should not emit moreInformationSelected for loading files', () => {
    spyOn(component.moreInformationSelected, 'emit');
    component.onMoreInformationSelected({ isLoading: true } as any);
    expect(component.moreInformationSelected.emit).not.toHaveBeenCalled();
  });

  it('should emit moreInformationSelected for non-loading files', () => {
    spyOn(component.moreInformationSelected, 'emit');
    const file = { isLoading: false } as any;
    component.onMoreInformationSelected(file);
    expect(component.moreInformationSelected.emit).toHaveBeenCalledWith(file);
  });

  it('should emit fileDeleted on deleteFile', () => {
    spyOn(component.fileDeleted, 'emit');
    const file = { name: 'test.pdf' } as any;
    component.deleteFile(file);
    expect(component.fileDeleted.emit).toHaveBeenCalledWith(file);
  });
});
