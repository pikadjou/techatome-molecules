import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridTagsComponent } from './tags.component';

describe('TaGridTagsComponent', () => {
  let component: TaGridTagsComponent;
  let fixture: ComponentFixture<TaGridTagsComponent>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;
  let mockGridData: any;

  beforeEach(async () => {
    mockGridData = {
      scope: 'test-grid',
      isReady$: new BehaviorSubject(false),
      isDataReady$: new BehaviorSubject(false),
      data: [],
      dataByGroup: [{ key: '', data: [] }],
      isGroup: false,
      displayType: jasmine.createSpy('displayType').and.returnValue('card'),
      groupBy: null,
      table: null,
      cols: {},
      filters: {
        get: jasmine.createSpy('get').and.returnValue([]),
        apply: jasmine.createSpy('apply'),
        remove: jasmine.createSpy('remove'),
      },
      tableHtml: null,
      rowClicked$: new Subject(),
      totalItems: jasmine.createSpy('totalItems').and.returnValue(0),
      clearGroupBy: jasmine.createSpy('clearGroupBy'),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridTagsComponent,
      ],
      providers: [{ provide: TaGridInstanceService, useValue: mockInstanceService }],
    })
      .overrideComponent(TaGridTagsComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridTagsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('group', () => {
    it('should return the grid groupBy value', () => {
      expect(component.group).toBeNull();
    });

    it('should reflect changes to groupBy', () => {
      mockGridData.groupBy = 'category';
      expect(component.group).toBe('category');
    });
  });

  describe('activeFilters', () => {
    it('should return empty array when no filters', () => {
      expect(component.activeFilters).toEqual([]);
    });

    it('should return filters from grid', () => {
      const filters = [
        { key: 'status', values: [{ field: 'status', type: '=', value: 'active' }] },
      ];
      mockGridData.filters.get.and.returnValue(filters);

      expect(component.activeFilters).toEqual(filters);
    });

    it('should return empty array when filters is null', () => {
      mockGridData.filters = null;
      expect(component.activeFilters).toEqual([]);
    });
  });

  describe('remove', () => {
    it('should call grid.filters.remove with the given filter', () => {
      const filter = { field: 'status', type: '=', value: 'active' };

      component.remove(filter);

      expect(mockGridData.filters.remove).toHaveBeenCalledWith(filter);
    });
  });

  describe('removeGroup', () => {
    it('should call grid.clearGroupBy', () => {
      component.removeGroup();
      expect(mockGridData.clearGroupBy).toHaveBeenCalled();
    });
  });

  describe('clear', () => {
    it('should apply empty filters and clear group', () => {
      component.clear();

      expect(mockGridData.filters.apply).toHaveBeenCalledWith([]);
      expect(mockGridData.clearGroupBy).toHaveBeenCalled();
    });
  });
});
