import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FiltersComponent,
      ],
    })
      .overrideComponent(FiltersComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isFilterOpen set to false by default', () => {
    expect(component.isFilterOpen).toBeFalse();
  });

  describe('changeFilterOpen', () => {
    it('should toggle isFilterOpen from false to true', () => {
      component.isFilterOpen = false;
      component.changeFilterOpen();
      expect(component.isFilterOpen).toBeTrue();
    });

    it('should toggle isFilterOpen from true to false', () => {
      component.isFilterOpen = true;
      component.changeFilterOpen();
      expect(component.isFilterOpen).toBeFalse();
    });

    it('should emit on askValidation$ when closing (isFilterOpen was true)', () => {
      component.isFilterOpen = true;
      const spy = jasmine.createSpy('askValidation');
      component.askValidation$.subscribe(spy);

      component.changeFilterOpen();

      expect(spy).toHaveBeenCalledWith(null);
    });

    it('should not emit on askValidation$ when opening (isFilterOpen was false)', () => {
      component.isFilterOpen = false;
      const spy = jasmine.createSpy('askValidation');
      component.askValidation$.subscribe(spy);

      component.changeFilterOpen();

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
