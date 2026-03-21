import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { UploadComponent } from './files-upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        UploadComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have features default to empty array', () => {
    expect(component.features()).toEqual([]);
  });

  it('should have canSelectMultipleFiles default to false', () => {
    expect(component.canSelectMultipleFiles()).toBe(false);
  });

  it('should have showInActionButton default to true', () => {
    expect(component.showInActionButton()).toBe(true);
  });

  it('should return empty addActions when no features', () => {
    expect(component.addActions.length).toBe(0);
  });

  it('should return take-pic action when feature is enabled', () => {
    fixture.componentRef.setInput('features', ['take-pic']);
    fixture.detectChanges();
    const actions = component.addActions;
    expect(actions.length).toBe(1);
    expect(actions[0].label).toBe('Take');
    expect(actions[0].icon).toBe('add_a_photo');
  });

  it('should return upload-pic action when feature is enabled', () => {
    fixture.componentRef.setInput('features', ['upload-pic']);
    fixture.detectChanges();
    const actions = component.addActions;
    expect(actions.length).toBe(1);
    expect(actions[0].label).toBe('Upload');
    expect(actions[0].icon).toBe('insert_photo');
  });

  it('should return upload-file action when feature is enabled', () => {
    fixture.componentRef.setInput('features', ['upload-file']);
    fixture.detectChanges();
    const actions = component.addActions;
    expect(actions.length).toBe(1);
    expect(actions[0].label).toBe('upload file');
    expect(actions[0].icon).toBe('upload_file');
  });

  it('should return multiple actions for multiple features', () => {
    fixture.componentRef.setInput('features', ['take-pic', 'upload-pic', 'upload-file']);
    fixture.detectChanges();
    expect(component.addActions.length).toBe(3);
  });

  it('should have filesPicked output', () => {
    expect(component.filesPicked).toBeDefined();
  });
});
