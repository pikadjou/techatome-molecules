import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleComplexRequest, StrapiService } from '@ta/server';
import { GraphMutationPayload } from '@ta/server';

export interface BaseCrudEntity {
  documentId?: string;
  [key: string]: any;
}

export interface CrudOperations<T extends BaseCrudEntity, CreateT = Partial<T>, UpdateT = Partial<T>> {
  getCreateMutation(data: CreateT): GraphMutationPayload;
  getUpdateMutation(id: string, data: UpdateT): GraphMutationPayload;
  getDeleteMutation(id: string): GraphMutationPayload;
  getFetchQuery(id: string): GraphMutationPayload;
  getFetchAllQuery(): GraphMutationPayload;
}

@Injectable()
export abstract class BaseCrudService<T extends BaseCrudEntity, CreateT = Partial<T>, UpdateT = Partial<T>> 
  implements CrudOperations<T, CreateT, UpdateT> {
  
  protected readonly _strapiService = inject(StrapiService);
  
  // Abstract properties that must be implemented by child classes
  protected abstract entityName: string;
  protected abstract entityNamePlural: string;
  
  // Abstract methods that must be implemented by child classes
  abstract getCreateMutation(data: CreateT): GraphMutationPayload;
  abstract getUpdateMutation(id: string, data: UpdateT): GraphMutationPayload;
  abstract getDeleteMutation(id: string): GraphMutationPayload;
  abstract getFetchQuery(id: string): GraphMutationPayload;
  abstract getFetchAllQuery(): GraphMutationPayload;
  
  // Generic CRUD operations
  create$(data: CreateT): Observable<T> {
    return this._strapiService.mutate$<T>(
      this.getCreateMutation(data), 
      `create${this.entityName}`
    );
  }
  
  update$(id: string, data: UpdateT): Observable<T> {
    return this._strapiService.mutate$<T>(
      this.getUpdateMutation(id, data), 
      `update${this.entityName}`
    );
  }
  
  delete$(id: string): Observable<T> {
    return this._strapiService.mutate$<T>(
      this.getDeleteMutation(id), 
      `delete${this.entityName}`
    );
  }
  
  fetchOne$(id: string): Observable<T> {
    return this._strapiService.query$<T>(
      this.getFetchQuery(id), 
      this.entityName.toLowerCase()
    );
  }
  
  fetchAll$(): Observable<T[]> {
    return this._strapiService.query$<T[]>(
      this.getFetchAllQuery(), 
      this.entityNamePlural.toLowerCase()
    );
  }

  // Helper methods for complex requests
  protected createComplexRequest<R>(
    operation: () => Observable<R>,
    requestKey: string
  ): HandleComplexRequest<R> {
    return new HandleComplexRequest<R>(operation, requestKey);
  }
}