import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputImages } from '@ta/form-model';

import { InputImageComponent } from './input-image.component';

describe('InputImageComponent', () => {
  let component: InputImageComponent;
  let fixture: ComponentFixture<InputImageComponent>;
  let inputModel: InputImages;

  beforeEach(async () => {
    inputModel = new InputImages({ key: 'image', label: 'Image' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputImageComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputImageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return undefined selection when value is null', () => {
    inputModel.value = null;
    expect(component.selection).toBeUndefined();
  });

  it('should return urls from selection', () => {
    inputModel.value = [
      { id: '1', url: 'https://example.com/img1.png', description: 'img1' },
      { id: '2', url: 'https://example.com/img2.png', description: 'img2' },
    ] as any;
    expect(component.selection).toEqual([
      'https://example.com/img1.png',
      'https://example.com/img2.png',
    ]);
  });

  it('should return userInfo from first selection', () => {
    inputModel.value = [
      { id: '1', url: 'https://example.com/img1.png', description: 'img1' },
    ] as any;
    expect(component.userInfo).toEqual({
      picture: 'https://example.com/img1.png',
      firstname: '',
      lastname: '',
    });
  });

  it('should return undefined userInfo when value is null', () => {
    inputModel.value = null;
    expect(component.userInfo).toBeUndefined();
  });
});
