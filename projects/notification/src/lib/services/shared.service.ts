import { Injectable, TemplateRef } from '@angular/core';

import { Observable } from 'rxjs';

export type RoutingType = 'project' | 'invoice' | 'quotationVersion' | 'task';

@Injectable({
  providedIn: 'root',
})
export class TaNotificationSharedService {
  public paymentStatusTemplate: TemplateRef<any> | null = null;
  public projectStatusTemplate: TemplateRef<any> | null = null;

  public getProjects$: ((ids: string[]) => Observable<{ id: string; name: string }[]>) | null = null;

  public routing: { [index in RoutingType]: (data: any) => void } | null = null;

  constructor() {}
}
