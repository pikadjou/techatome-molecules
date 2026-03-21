import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SearchHistoryDisplayerComponent } from './search-history-displayer.component';

describe('SearchHistoryDisplayerComponent', () => {
  let component: SearchHistoryDisplayerComponent;
  let fixture: ComponentFixture<SearchHistoryDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatMenuModule,
        SearchHistoryDisplayerComponent,
      ],
    })
      .overrideComponent(SearchHistoryDisplayerComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SearchHistoryDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty placeholder', () => {
    expect(component.placeholder()).toBe('');
  });

  it('should have default isDropDown as false', () => {
    expect(component.isDropDown()).toBeFalse();
  });

  it('should have searchHistory undefined by default', () => {
    expect(component.searchHistory()).toBeUndefined();
  });

  it('should have an InputTextBox as input field', () => {
    expect(component.input).toBeTruthy();
  });

  describe('listRecentSearches', () => {
    it('should return null when searchHistory type is not set', () => {
      expect(component.listRecentSearches).toBeNull();
    });

    it('should return null when searchHistory is undefined', () => {
      fixture.componentRef.setInput('searchHistory', undefined);
      fixture.detectChanges();

      expect(component.listRecentSearches).toBeNull();
    });

    it('should return empty array when no searches in localStorage', () => {
      fixture.componentRef.setInput('searchHistory', { type: 'test-type' });
      fixture.detectChanges();

      const result = component.listRecentSearches;
      expect(result).toEqual([]);
    });
  });

  describe('searchCompleted', () => {
    it('should emit valueCompleted with the search value', () => {
      const spy = jasmine.createSpy('valueCompleted');
      component.valueCompleted.subscribe(spy);

      component.searchCompleted('test-query');

      expect(spy).toHaveBeenCalledWith('test-query');
    });

    it('should reset input value to empty string', () => {
      component.searchCompleted('test-query');

      expect(component.input.value).toBe('');
    });
  });

  describe('searchFieldWidth', () => {
    it('should return undefined when searchField is null', () => {
      component.searchField = null;
      expect(component.searchFieldWidth).toBeUndefined();
    });
  });
});
