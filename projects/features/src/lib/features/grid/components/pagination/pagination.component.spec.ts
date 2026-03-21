import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
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
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        PaginationComponent,
      ],
      providers: [{ provide: TaGridInstanceService, useValue: mockInstanceService }],
    })
      .overrideComponent(PaginationComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have maxPageNumber set to 10', () => {
    expect(component.maxPageNumber).toBe(10);
  });

  describe('show', () => {
    it('should return false when total pages is 0', () => {
      expect(component.show).toBeFalse();
    });

    it('should return false when total pages is 1', () => {
      mockGridData.table = { getPageMax: () => 1 };
      expect(component.show).toBeFalse();
    });
  });

  describe('paginationGetTotalPages', () => {
    it('should return 0 when table is null', () => {
      expect(component.paginationGetTotalPages).toBe(0);
    });

    it('should return the value from table.getPageMax', () => {
      mockGridData.table = { getPageMax: () => 5 };
      expect(component.paginationGetTotalPages).toBe(5);
    });
  });

  describe('getListPage', () => {
    it('should return empty array when grid is not initialized', () => {
      expect(component.getListPage()).toEqual([]);
    });

    it('should return empty array when table is null', () => {
      mockGridData.table = null;
      expect(component.getListPage()).toEqual([]);
    });

    it('should return page numbers for small page counts', () => {
      mockGridData.table = { getPageMax: () => 5, getPage: () => 1 };
      const pages = component.getListPage();

      expect(pages.length).toBeGreaterThan(0);
      pages.forEach((p: any) => {
        expect(p.number).toBeDefined();
      });
    });

    it('should handle large page counts with range navigation', () => {
      mockGridData.table = { getPageMax: () => 25, getPage: () => 5 };
      const pages = component.getListPage();

      expect(pages.length).toBeGreaterThan(0);
    });
  });
});
