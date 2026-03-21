import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { EFileExtension } from '@ta/utils';

import { FileCardComponent } from './file-card.component';

describe('FileCardComponent', () => {
  let component: FileCardComponent;
  let fixture: ComponentFixture<FileCardComponent>;

  const mockFile = {
    name: 'test.pdf',
    url: 'https://example.com/test.pdf',
    fileExtension: EFileExtension.PDF,
    fileMetaData: {
      fileType: { translatedValue: 'PDF Document' },
      owner: { naming: { trigram: 'JDO' } },
      fileSize: 102400,
      fileName: 'test.pdf',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FileCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FileCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('file', mockFile);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return PDF icon for PDF file', () => {
    expect(component.localIcon).toBeDefined();
  });

  it('should return file type from metadata', () => {
    expect(component.fileType).toBe('PDF Document');
  });

  it('should return user trigram from metadata', () => {
    expect(component.userTrigram).toBe('JDO');
  });

  it('should return file size from metadata', () => {
    expect(component.fileSize).toBe(102400);
  });

  it('should return file name from metadata', () => {
    expect(component.fileName).toBe('test.pdf');
  });

  it('should emit fileSelected on body click', () => {
    spyOn(component.fileSelected, 'emit');
    component.onBodyClicked();
    expect(component.fileSelected.emit).toHaveBeenCalledWith(mockFile as any);
  });

  it('should emit moreInformationSelected on header click', () => {
    spyOn(component.moreInformationSelected, 'emit');
    component.onHeaderClicked();
    expect(component.moreInformationSelected.emit).toHaveBeenCalledWith(mockFile as any);
  });

  it('should return null for fileType when metadata is missing', () => {
    fixture.componentRef.setInput('file', { ...mockFile, fileMetaData: null });
    fixture.detectChanges();
    expect(component.fileType).toBeNull();
  });
});
