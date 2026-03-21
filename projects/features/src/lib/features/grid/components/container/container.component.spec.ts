import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridData } from '../../models/grid-data';
import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridSessionService } from '../../services/grid-session.services';
import { TaGridViewService } from '../../services/grid-view.service';
import { TaGridContainerComponent } from './container.component';

describe('TaGridContainerComponent', () => {
  let component: TaGridContainerComponent;
  let fixture: ComponentFixture<TaGridContainerComponent>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;
  let mockSessionService: jasmine.SpyObj<TaGridSessionService>;
  let mockViewService: jasmine.SpyObj<TaGridViewService>;
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
      filters: null,
      tableHtml: null,
      rowClicked$: new BehaviorSubject(null),
      totalItems: jasmine.createSpy('totalItems').and.returnValue(0),
      init: jasmine.createSpy('init'),
      destroy: jasmine.createSpy('destroy'),
      switchView: jasmine.createSpy('switchView'),
      setGroupBy: jasmine.createSpy('setGroupBy'),
      clearGroupBy: jasmine.createSpy('clearGroupBy'),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    mockSessionService = jasmine.createSpyObj('TaGridSessionService', [
      'getFilter',
      'setFilter',
      'clearFilter',
    ]);
    mockSessionService.getFilter.and.returnValue(null);

    mockViewService = jasmine.createSpyObj('TaGridViewService', ['getData$']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridContainerComponent,
      ],
      providers: [
        { provide: TaGridInstanceService, useValue: mockInstanceService },
        { provide: TaGridSessionService, useValue: mockSessionService },
        { provide: TaGridViewService, useValue: mockViewService },
      ],
    })
      .overrideComponent(TaGridContainerComponent, {
        set: { template: '<div #table></div>' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridContainerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty colsMetaData', () => {
    expect(component.colsMetaData()).toEqual([]);
  });

  it('should have default empty model string', () => {
    expect(component.model()).toBe('');
  });

  it('should have initialData undefined by default', () => {
    expect(component.initialData()).toBeUndefined();
  });

  it('should have preset undefined by default', () => {
    expect(component.preset()).toBeUndefined();
  });

  it('should get the grid from the instance service during ngOnInit', () => {
    expect(mockInstanceService.get).toHaveBeenCalledWith('test-grid', true);
  });

  describe('ngOnDestroy', () => {
    it('should call grid.destroy', () => {
      component.ngOnDestroy();
      expect(mockGridData.destroy).toHaveBeenCalled();
    });
  });
});
