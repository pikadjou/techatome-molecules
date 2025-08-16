import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { TENANT_CONFIG_TOKEN, TenantConfig } from '@ta/server';
import { CamBaseComponent } from '@ta/utils';

import { CamCmsService } from '../../services/cms.service';

@Component({
  selector: 'ta-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent extends CamBaseComponent implements OnInit {
  @Input()
  contentType!: string;

  get content$() {
    return this.cmsService.cmsContents.get$(this.contentType);
  }
  constructor(
    public cmsService: CamCmsService,
    @Optional() @Inject(TENANT_CONFIG_TOKEN) private tenantConfig: TenantConfig
  ) {
    super();
  }

  ngOnInit() {
    const tenantId = this.tenantConfig.tenantId ?? 0;
    this.requestState.asked();
    this.cmsService.fetchCmsContents$(this.contentType, tenantId.toString()).subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
