import { AsyncPipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, input, inject } from "@angular/core";

import { TENANT_CONFIG_TOKEN } from "@ta/server";
import {
  EmptyComponent,
  ErrorComponent,
  LoaderComponent,
  TitleComponent,
} from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { TaCmsService } from "../../services/cms.service";
import { RichTextComponent } from "../types/rich-text/rich-text.component";

@Component({
  selector: "ta-cms",
  templateUrl: "./cms.component.html",
  styleUrl: "./cms.component.scss",
  standalone: true,
  imports: [
    AsyncPipe,
    LoaderComponent,
    ErrorComponent,
    EmptyComponent,
    TitleComponent,
    RichTextComponent,
  ],
})
export class CmsComponent extends TaBaseComponent implements OnInit {
  contentType = input.required<string>();

  public readonly cmsService = inject(TaCmsService);
  private readonly _tenantConfig = inject(TENANT_CONFIG_TOKEN, { optional: true });

  get content$() {
    return this.cmsService.cmsContents.get$(this.contentType());
  }
  constructor() {
    super();
  }

  ngOnInit() {
    const tenantId = this._tenantConfig?.tenantId ?? 0;
    this.requestState.asked();
    this._registerSubscription(
      this.cmsService
        .fetchCmsContents$(this.contentType(), tenantId.toString())
        .subscribe({
          complete: () => this.requestState.completed(),
          error: (error: HttpErrorResponse) => {
            this.requestState.onError(error.status, error.statusText);
          },
        })
    );
  }
}
