import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { BehaviorSubject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridControlComponent } from './control.component';

describe('TaGridControlComponent', () => {
  let component: TaGridControlComponent;
  let fixture: ComponentFixture<TaGridControlComponent>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
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
      switchView: jasmine.createSpy('switchView'),
      setGroupBy: jasmine.createSpy('setGroupBy'),
      clearGroupBy: jasmine.createSpy('clearGroupBy'),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridControlComponent,
      ],
      providers: [
        { provide: TaGridInstanceService, useValue: mockInstanceService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    })
      .overrideComponent(TaGridControlComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridControlComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default show input', () => {
    const show = component.show();
    expect(show.switchView).toBeTrue();
    expect(show.filters).toBeTrue();
    expect(show.preset).toBeTrue();
  });

  describe('switchView', () => {
    it('should call grid.switchView with the given type', () => {
      component.switchView('grid');
      expect(mockGridData.switchView).toHaveBeenCalledWith('grid');
    });

    it('should call grid.switchView with card type', () => {
      component.switchView('card');
      expect(mockGridData.switchView).toHaveBeenCalledWith('card');
    });
  });

  describe('openFilters', () => {
    it('should open the dialog', () => {
      component.openFilters();
      expect(mockDialog.open).toHaveBeenCalled();
    });
  });

  describe('setPreset', () => {
    it('should call grid.filters.apply when filters exist', () => {
      mockGridData.filters = { apply: jasmine.createSpy('apply') };
      const preset = { name: 'Active', filters: [{ field: 'status', type: '=', value: 'active' }] };

      component.setPreset(preset);

      expect(mockGridData.filters.apply).toHaveBeenCalledWith(preset.filters);
    });
  });
});
