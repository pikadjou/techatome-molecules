import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FilterDisplayerComponent } from './filter-displayer.component';

describe('FilterDisplayerComponent', () => {
  let component: FilterDisplayerComponent;
  let fixture: ComponentFixture<FilterDisplayerComponent>;
  let mockBottomSheet: jasmine.SpyObj<MatBottomSheet>;

  beforeEach(async () => {
    mockBottomSheet = jasmine.createSpyObj('MatBottomSheet', ['open', 'dismiss']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FilterDisplayerComponent,
      ],
      providers: [{ provide: MatBottomSheet, useValue: mockBottomSheet }],
    })
      .overrideComponent(FilterDisplayerComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FilterDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty form input', () => {
    expect(component.form()).toEqual([]);
  });

  it('should have default iconType as "filter"', () => {
    expect(component.iconType()).toBe('filter');
  });

  it('should have default container as "button"', () => {
    expect(component.container()).toBe('button');
  });

  it('should have isFilterOpen set to false initially', () => {
    expect(component.isFilterOpen).toBeFalse();
  });

  describe('selected', () => {
    it('should emit filtersSelected and close', () => {
      const spy = jasmine.createSpy('filtersSelected');
      component.filtersSelected.subscribe(spy);
      spyOn(component, 'close');
      const testFilters = { status: 'active' };

      component.selected(testFilters);

      expect(spy).toHaveBeenCalledWith(testFilters);
      expect(component.close).toHaveBeenCalled();
    });
  });

  describe('open', () => {
    it('should set isFilterOpen to true', () => {
      component.open();
      expect(component.isFilterOpen).toBeTrue();
    });
  });

  describe('close', () => {
    it('should set isFilterOpen to false', () => {
      component.close();
      expect(component.isFilterOpen).toBeFalse();
    });
  });
});
