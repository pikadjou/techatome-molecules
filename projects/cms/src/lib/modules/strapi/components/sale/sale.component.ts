import { AsyncPipe, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';

import { of } from 'rxjs';

import { ToggleComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';
import { TENANT_CONFIG_TOKEN, TenantConfig } from '@ta/server';
import { EmptyComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { TaSaleService } from '../../services/sale.service';
import { RichTextComponent } from '../types/rich-text/rich-text.component';

@Component({
  selector: 'ta-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe, LoaderComponent, ErrorComponent, EmptyComponent, RichTextComponent, ToggleComponent],
})
export class SaleComponent extends TaBaseComponent implements OnInit {
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
    return this.saleService.saleContents.get$(this.tenantConfig.tenantId?.toString());
  }
  constructor(
    public saleService: TaSaleService,
    @Optional() @Inject(TENANT_CONFIG_TOKEN) private tenantConfig: TenantConfig
  ) {
    super();

    this.checkbox.createFormControl();
    this._registerSubscription(
      this.checkbox.changeValue$.subscribe({
        next: value => this.acceptation.emit(value),
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
