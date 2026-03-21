import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject, of } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridFormService } from '../../services/grid-form.services';
import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridFormComponent } from './form.component';

describe('TaGridFormComponent', () => {
  let component: TaGridFormComponent;
  let fixture: ComponentFixture<TaGridFormComponent>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;
  let mockFormService: jasmine.SpyObj<TaGridFormService<any>>;
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
      filters: { apply: jasmine.createSpy('apply') },
      tableHtml: null,
      rowClicked$: new BehaviorSubject(null),
      totalItems: jasmine.createSpy('totalItems').and.returnValue(0),
      switchView: jasmine.createSpy('switchView'),
      setGroupBy: jasmine.createSpy('setGroupBy'),
      clearGroupBy: jasmine.createSpy('clearGroupBy'),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    mockFormService = jasmine.createSpyObj('TaGridFormService', [
      'getFiltersForm',
      'formatFiltersForm',
      'getGroupForm',
      'formatGroupForm',
    ]);
    mockFormService.getFiltersForm.and.returnValue([]);
    mockFormService.getGroupForm.and.returnValue([]);
    mockFormService.formatFiltersForm.and.returnValue([]);
    mockFormService.formatGroupForm.and.returnValue(null);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridFormComponent,
      ],
      providers: [
        { provide: TaGridInstanceService, useValue: mockInstanceService },
        { provide: TaGridFormService, useValue: mockFormService },
      ],
    })
      .overrideComponent(TaGridFormComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty filtersForm initially', () => {
    expect(component.filtersForm()).toEqual([]);
  });

  it('should have empty groupForm initially', () => {
    expect(component.groupForm()).toEqual([]);
  });

  describe('when grid becomes ready', () => {
    it('should load filters form and group form', () => {
      mockGridData.isReady$.next(true);

      expect(mockFormService.getFiltersForm).toHaveBeenCalledWith(mockGridData);
      expect(mockFormService.getGroupForm).toHaveBeenCalledWith(mockGridData);
    });
  });

  describe('applyFilters', () => {
    it('should format and apply filters', () => {
      const testData = { name: 'test' };
      const formattedFilters = [{ field: 'name', type: 'like', value: 'test' }];
      mockFormService.formatFiltersForm.and.returnValue(formattedFilters);

      component.applyFilters(testData);

      expect(mockFormService.formatFiltersForm).toHaveBeenCalledWith(mockGridData, testData);
      expect(mockGridData.filters.apply).toHaveBeenCalledWith(formattedFilters);
    });
  });

  describe('applyGroup', () => {
    it('should call clearGroupBy when formatGroupForm returns null', () => {
      mockFormService.formatGroupForm.and.returnValue(null);

      component.applyGroup({});

      expect(mockGridData.clearGroupBy).toHaveBeenCalled();
    });

    it('should call setGroupBy when formatGroupForm returns a value', () => {
      mockFormService.formatGroupForm.and.returnValue('category');

      component.applyGroup({ group: 'category' });

      expect(mockGridData.setGroupBy).toHaveBeenCalledWith('category');
    });
  });
});
