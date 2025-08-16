import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
  Output,
} from '@angular/core';

import { of } from 'rxjs';

import { InputCheckBox } from '@camelot/form-model';
import { TENANT_CONFIG_TOKEN, TenantConfig } from '@camelot/server';
import { CamBaseComponent } from '@camelot/utils';

import { CamSaleService } from '../../services/sale.service';

@Component({
  selector: 'cam-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent extends CamBaseComponent implements OnInit {
  @Output()
  acceptation = new EventEmitter<boolean>();

  public checkbox = new InputCheckBox({
    label: 'strapi.sale.cguAcceptation',
    toggle: true,
  });
  get content$() {
    if (!this.tenantConfig.tenantId) {
      return of();
    }
    return this.saleService.saleContents.get$(
      this.tenantConfig.tenantId?.toString()
    );
  }
  constructor(
    public saleService: CamSaleService,
    @Optional() @Inject(TENANT_CONFIG_TOKEN) private tenantConfig: TenantConfig
  ) {
    super();

    this.checkbox.createFormControl();
    this._registerSubscription(
      this.checkbox.changeValue$.subscribe({
        next: (value) => this.acceptation.emit(value),
      })
    );
  }

  ngOnInit() {
    const tenantId = this.tenantConfig.tenantId ?? 0;

    this.requestState.asked();
    this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
