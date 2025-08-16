import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CamSharedCommunicationsService {
  public taskStatusTemplate: TemplateRef<{ status: number }> | null = null;
  public documentsIdsByTaskId: { [id: string] : { communication: string[], task: string[], project: string[] }; } = {}
  constructor() {}
}
