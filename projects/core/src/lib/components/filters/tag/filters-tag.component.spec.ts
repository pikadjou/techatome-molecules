import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ActiveFilterTag } from '../types';
import { FiltersTagComponent } from './filters-tag.component';

describe('FiltersTagComponent', () => {
  let component: FiltersTagComponent;
  let fixture: ComponentFixture<FiltersTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FiltersTagComponent,
      ],
    })
      .overrideComponent(FiltersTagComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty activeFilter input', () => {
    expect(component.activeFilter()).toEqual([]);
  });

  it('should accept activeFilter input values', () => {
    const filters: ActiveFilterTag[] = [
      { id: '1', name: 'Status' },
      { id: '2', name: 'Priority' },
    ];
    fixture.componentRef.setInput('activeFilter', filters);
    fixture.detectChanges();

    expect(component.activeFilter()).toEqual(filters);
  });

  describe('remove', () => {
    it('should emit removedFilter with the given filter', () => {
      const spy = jasmine.createSpy('removedFilter');
      component.removedFilter.subscribe(spy);
      const filter: ActiveFilterTag = { id: '1', name: 'Status' };

      component.remove(filter);

      expect(spy).toHaveBeenCalledWith(filter);
    });
  });
});
