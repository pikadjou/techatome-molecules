import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FiltersContainerComponent } from './filters-container.component';

describe('FiltersContainerComponent', () => {
  let component: FiltersContainerComponent;
  let fixture: ComponentFixture<FiltersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FiltersContainerComponent,
      ],
    })
      .overrideComponent(FiltersContainerComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isFilterOpen set to false by default', () => {
    expect(component.isFilterOpen).toBeFalse();
  });

  it('should have default empty form input', () => {
    expect(component.form()).toEqual([]);
  });

  it('should have default empty activeFilter input', () => {
    expect(component.activeFilter()).toEqual([]);
  });

  describe('toggleFilter', () => {
    it('should toggle isFilterOpen from false to true', () => {
      component.isFilterOpen = false;
      component.toggleFilter();
      expect(component.isFilterOpen).toBeTrue();
    });

    it('should toggle isFilterOpen from true to false', () => {
      component.isFilterOpen = true;
      component.toggleFilter();
      expect(component.isFilterOpen).toBeFalse();
    });

    it('should emit on askValidation$ when closing (isFilterOpen was true)', () => {
      component.isFilterOpen = true;
      const spy = jasmine.createSpy('askValidation');
      component.askValidation$.subscribe(spy);

      component.toggleFilter();

      expect(spy).toHaveBeenCalledWith(null);
    });

    it('should not emit on askValidation$ when opening (isFilterOpen was false)', () => {
      component.isFilterOpen = false;
      const spy = jasmine.createSpy('askValidation');
      component.askValidation$.subscribe(spy);

      component.toggleFilter();

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('apply', () => {
    it('should emit filtersSelected with provided data', () => {
      const spy = jasmine.createSpy('filtersSelected');
      component.filtersSelected.subscribe(spy);
      const testData = { status: 'active' };

      component.apply(testData);

      expect(spy).toHaveBeenCalledWith(testData);
    });
  });
});
