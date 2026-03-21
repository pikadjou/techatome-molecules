import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FiltersFormComponent } from './filters-form.component';

describe('FiltersFormComponent', () => {
  let component: FiltersFormComponent;
  let fixture: ComponentFixture<FiltersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FiltersFormComponent,
      ],
    })
      .overrideComponent(FiltersFormComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('askValidation$', new Subject<null>());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty form input', () => {
    expect(component.form()).toEqual([]);
  });

  describe('apply', () => {
    it('should emit filtersSelected with provided data', () => {
      const spy = jasmine.createSpy('filtersSelected');
      component.filtersSelected.subscribe(spy);
      const testData = { name: 'test' };

      component.apply(testData);

      expect(spy).toHaveBeenCalledWith(testData);
    });
  });

  describe('clear', () => {
    it('should emit filtersSelected with null', () => {
      const spy = jasmine.createSpy('filtersSelected');
      component.filtersSelected.subscribe(spy);

      component.clear();

      expect(spy).toHaveBeenCalledWith(null);
    });
  });
});
