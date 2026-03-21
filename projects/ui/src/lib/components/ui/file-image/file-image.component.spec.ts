import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaIconType } from '@ta/icons';

import { FileImageComponent } from './file-image.component';

describe('FileImageComponent', () => {
  let component: FileImageComponent;
  let fixture: ComponentFixture<FileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileImageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FileImageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('fileName', 'document.pdf');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Pdf icon for .pdf files', () => {
    expect(component.extIcon).toBe(TaIconType.Pdf);
  });

  it('should return Doc icon for .docx files', () => {
    fixture.componentRef.setInput('fileName', 'report.docx');
    fixture.detectChanges();
    expect(component.extIcon).toBe(TaIconType.Doc);
  });

  it('should return Xls icon for .xlsx files', () => {
    fixture.componentRef.setInput('fileName', 'data.xlsx');
    fixture.detectChanges();
    expect(component.extIcon).toBe(TaIconType.Xls);
  });

  it('should return FileEmpty icon for unknown extensions', () => {
    fixture.componentRef.setInput('fileName', 'file.txt');
    fixture.detectChanges();
    expect(component.extIcon).toBe(TaIconType.FileEmpty);
  });

  it('should default size to sm', () => {
    expect(component.size()).toBe('sm');
  });
});
