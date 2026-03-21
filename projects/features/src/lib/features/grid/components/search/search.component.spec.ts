import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridSessionService } from '../../services/grid-session.services';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaGridSearchComponent } from './search.component';

describe('TaGridSearchComponent', () => {
  let component: TaGridSearchComponent;
  let fixture: ComponentFixture<TaGridSearchComponent>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;
  let mockSessionService: jasmine.SpyObj<TaGridSessionService>;
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
      rowClicked$: new Subject(),
      totalItems: jasmine.createSpy('totalItems').and.returnValue(0),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    mockSessionService = jasmine.createSpyObj('TaGridSessionService', [
      'getFilter',
      'setFilter',
      'clearFilter',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridSearchComponent,
      ],
      providers: [
        { provide: TaGridInstanceService, useValue: mockInstanceService },
        { provide: TaGridSessionService, useValue: mockSessionService },
      ],
    })
      .overrideComponent(TaGridSearchComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridSearchComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default outOfBox as false', () => {
    expect(component.outOfBox()).toBeFalse();
  });

  it('should have an InputTextBox instance', () => {
    expect(component.input).toBeTruthy();
  });

  describe('valueChanged', () => {
    it('should apply filters to grid when outOfBox is false', () => {
      component.valueChanged('test query');

      expect(mockGridData.filters.apply).toHaveBeenCalledWith([
        {
          field: gridSearchFieldsName,
          type: 'like',
          value: 'test query',
        },
      ]);
    });

    it('should trim the search value', () => {
      component.valueChanged('  test query  ');

      expect(mockGridData.filters.apply).toHaveBeenCalledWith([
        {
          field: gridSearchFieldsName,
          type: 'like',
          value: 'test query',
        },
      ]);
    });

    it('should use session service when outOfBox is true', () => {
      fixture.componentRef.setInput('outOfBox', true);
      fixture.detectChanges();

      component.valueChanged('test query');

      expect(mockSessionService.setFilter).toHaveBeenCalledWith('test-grid', [
        {
          field: gridSearchFieldsName,
          type: 'like',
          value: 'test query',
        },
      ]);
      expect(mockGridData.filters.apply).not.toHaveBeenCalled();
    });
  });
});
