import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputRating } from '@ta/form-model';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let inputModel: InputRating;

  beforeEach(async () => {
    inputModel = new InputRating({ key: 'rating', label: 'Rating', max: 5, value: 3 });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        RatingComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have rating input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('rating');
  });

  it('should update form control when onRatingChange is called', () => {
    component.onRatingChange(4);
    expect(inputModel.formControl?.value).toBe(4);
  });

  it('should emit valueChanged when onRatingChange is called', () => {
    spyOn(component.valueChanged, 'emit');
    component.onRatingChange(5);
    expect(component.valueChanged.emit).toHaveBeenCalledWith(5);
  });
});
