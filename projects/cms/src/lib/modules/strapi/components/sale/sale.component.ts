import { AsyncPipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  OnInit,
  output,
  inject,
} from "@angular/core";

import { filter, of } from "rxjs";

import { ToggleComponent } from "@ta/form-input";
import { InputCheckBox } from "@ta/form-model";
import { TENANT_CONFIG_TOKEN } from "@ta/server";
import { EmptyComponent, ErrorComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent, isNonNullable } from "@ta/utils";

import { TaSaleService } from "../../services/sale.service";
import { RichTextComponent } from "../types/rich-text/rich-text.component";

@Component({
  selector: "ta-sale",
  templateUrl: "./sale.component.html",
  styleUrl: "./sale.component.scss",
  standalone: true,
  imports: [
    AsyncPipe,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
    RichTextComponent,
    ToggleComponent,
  ],
})
export class SaleComponent extends TaBaseComponent implements OnInit {
  acceptation = output<boolean>();

  public readonly saleService = inject(TaSaleService);
  private readonly _tenantConfig = inject(TENANT_CONFIG_TOKEN, { optional: true });

  public checkbox = new InputCheckBox({
    label: "strapi.sale.cguAcceptation",
    toggle: true,
  });
  get content$() {
    if (!this._tenantConfig?.tenantId) {
      return of();
    }
    return this.saleService.saleContents.get$(
      this._tenantConfig?.tenantId?.toString()
    );
  }
  constructor() {
    super();

    this.checkbox.createFormControl();
    this._registerSubscription(
      this.checkbox.changeValue$.pipe(filter(isNonNullable)).subscribe({
        next: (value) => this.acceptation.emit(value),
      })
    );
  }

  ngOnInit() {
    const tenantId = this._tenantConfig?.tenantId ?? 0;

    this.requestState.asked();
    this._registerSubscription(
      this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
        complete: () => this.requestState.completed(),
        error: (error: HttpErrorResponse) => {
          this.requestState.onError(error.status, error.statusText);
        },
      })
    );
  }
}
