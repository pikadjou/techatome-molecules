import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2, TemplateRef } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { TaGridComponent } from './grid.component';

describe('TaGridComponent', () => {
  let component: TaGridComponent<any>;
  let fixture: ComponentFixture<TaGridComponent<any>>;
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
      filters: null,
      tableHtml: null,
      rowClicked$: new Subject(),
      totalItems: jasmine.createSpy('totalItems').and.returnValue(0),
      switchView: jasmine.createSpy('switchView'),
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridComponent,
      ],
      providers: [
        { provide: TaGridInstanceService, useValue: mockInstanceService },
      ],
    })
      .overrideComponent(TaGridComponent, {
        set: { template: '<div #table></div>' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TaGridComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.componentRef.setInput('cardTemplate', {} as TemplateRef<any>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have rowClicked output', () => {
    expect(component.rowClicked).toBeTruthy();
  });

  it('should emit row data on rowClicked', () => {
    const spy = jasmine.createSpy('rowClicked');
    component.rowClicked.subscribe(spy);

    const testRow = { id: 1, name: 'Test' };
    component.rowClicked.emit(testRow);

    expect(spy).toHaveBeenCalledWith(testRow);
  });
});
