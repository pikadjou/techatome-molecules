import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SearchDisplayerComponent } from './search-displayer.component';

describe('SearchDisplayerComponent', () => {
  let component: SearchDisplayerComponent;
  let fixture: ComponentFixture<SearchDisplayerComponent>;
  let mockBottomSheet: jasmine.SpyObj<MatBottomSheet>;

  beforeEach(async () => {
    mockBottomSheet = jasmine.createSpyObj('MatBottomSheet', ['open', 'dismiss']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SearchDisplayerComponent,
      ],
      providers: [{ provide: MatBottomSheet, useValue: mockBottomSheet }],
    })
      .overrideComponent(SearchDisplayerComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SearchDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default container as "button"', () => {
    expect(component.container()).toBe('button');
  });

  it('should have default empty placeholder', () => {
    expect(component.placeholder()).toBe('');
  });

  it('should have searchHistory undefined by default', () => {
    expect(component.searchHistory()).toBeUndefined();
  });

  describe('openDialog', () => {
    it('should not open bottom sheet if searchHistory type is not set', () => {
      component.openDialog();
      expect(mockBottomSheet.open).not.toHaveBeenCalled();
    });

    it('should not open bottom sheet if searchHistory is undefined', () => {
      fixture.componentRef.setInput('searchHistory', undefined);
      fixture.detectChanges();

      component.openDialog();

      expect(mockBottomSheet.open).not.toHaveBeenCalled();
    });
  });

  describe('action', () => {
    it('should dismiss the bottom sheet', () => {
      component.action('test-result');
      expect(mockBottomSheet.dismiss).toHaveBeenCalled();
    });

    it('should emit valueCompleted when result is truthy', () => {
      const spy = jasmine.createSpy('valueCompleted');
      component.valueCompleted.subscribe(spy);

      component.action('test-result');

      expect(spy).toHaveBeenCalledWith('test-result');
    });

    it('should not emit valueCompleted when result is falsy', () => {
      const spy = jasmine.createSpy('valueCompleted');
      component.valueCompleted.subscribe(spy);

      component.action(null);

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
