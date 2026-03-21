import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FilterContainerComponent } from './filter-container.component';

describe('FilterContainerComponent', () => {
  let component: FilterContainerComponent;
  let fixture: ComponentFixture<FilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FilterContainerComponent,
      ],
    })
      .overrideComponent(FilterContainerComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FilterContainerComponent);
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

  describe('validate', () => {
    it('should emit on askValidation$', () => {
      const spy = jasmine.createSpy('askValidation');
      component.askValidation$.subscribe(spy);

      component.validate();

      expect(spy).toHaveBeenCalledWith(null);
    });
  });

  describe('ngOnInit', () => {
    it('should subscribe to askClear$ and call clear on emission', () => {
      spyOn(component, 'clear');
      component.askClear$.next(null);

      expect(component.clear).toHaveBeenCalled();
    });
  });
});
