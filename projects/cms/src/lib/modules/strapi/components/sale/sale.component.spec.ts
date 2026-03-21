import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TENANT_CONFIG_TOKEN } from '@ta/server';

import { TaSaleService } from '../../services/sale.service';
import { SaleComponent } from './sale.component';

describe('SaleComponent', () => {
  let component: SaleComponent;
  let fixture: ComponentFixture<SaleComponent>;
  let mockSaleService: jasmine.SpyObj<TaSaleService>;

  beforeEach(async () => {
    mockSaleService = jasmine.createSpyObj('TaSaleService', ['fetchSaleContents$'], {
      saleContents: { get$: jasmine.createSpy('get$').and.returnValue(of(null)) },
    });
    mockSaleService.fetchSaleContents$.and.returnValue(of(null as any));

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SaleComponent,
      ],
      providers: [
        { provide: TaSaleService, useValue: mockSaleService },
        { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 456 } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch sale content on init', () => {
    expect(mockSaleService.fetchSaleContents$).toHaveBeenCalledWith('456');
  });

  it('should have checkbox input model', () => {
    expect(component.checkbox).toBeDefined();
    expect(component.checkbox.label).toBe('strapi.sale.cguAcceptation');
  });

  it('should emit acceptation when checkbox changes', () => {
    spyOn(component.acceptation, 'emit');
    component.checkbox.changeValue$.next(true);
    expect(component.acceptation.emit).toHaveBeenCalledWith(true);
  });
});
