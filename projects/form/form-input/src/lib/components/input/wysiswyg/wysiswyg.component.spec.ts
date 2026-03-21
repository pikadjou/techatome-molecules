import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputWysiswyg } from '@ta/form-model';

import { WysiswygComponent } from './wysiswyg.component';

describe('WysiswygComponent', () => {
  let component: WysiswygComponent;
  let fixture: ComponentFixture<WysiswygComponent>;
  let inputModel: InputWysiswyg;

  beforeEach(async () => {
    inputModel = new InputWysiswyg({ key: 'content', label: 'Content' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        WysiswygComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WysiswygComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wysiswyg input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('wysiswyg');
  });

  it('should set value from EditorInputSavedData', () => {
    const blocks = [{ type: 'paragraph', data: { text: 'Hello' } }];
    component.set({ blocks } as any);
    expect(inputModel.value).toEqual(blocks as any);
  });

  it('should clear value', () => {
    inputModel.value = [{ type: 'paragraph', data: { text: 'Hello' } }] as any;
    component.clear();
    expect(inputModel.value).toBeNull();
  });
});
