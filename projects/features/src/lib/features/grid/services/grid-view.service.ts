import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TaBaseService } from '@ta/server';

import { ajaxRequestFuncParams, ajaxResponse } from '../models/types';

export const gridSearchFieldsName = 'search';
@Injectable({
  providedIn: 'root',
})
export class TaGridViewService extends TaBaseService {
  constructor() {
    super();
  }

  public getData$<T>(model: string, ajaxParam: ajaxRequestFuncParams): Observable<ajaxResponse<T>> {
    // const filterParams = () => {
    //   const searchField = ajaxParam.filter.filter(f => f.field === gridSearchFieldsName);
    //   const otherFields = ajaxParam.filter.filter(f => f.field !== gridSearchFieldsName);

    //   return [
    //     ...searchField.flatMap(f =>
    //       this._buildOrDomain(
    //         ajaxParam.colsMetaData.filter(c => c.isSearchField).map(f => f.name),
    //         f.value
    //       )
    //     ),
    //     ...otherFields.map(f => [f.field, f.type, f.value]),
    //   ];
    // };

    // const orderParams = ajaxParam.sort.map(s => `${s.field} ${s.dir}`).join(',') ?? '';
    // const groupBy = ajaxParam.groupBy;

    return of({
      data: [],
      last_page: 0,
      total: 0,
    });
    // return this._odooService.searchCount$(model, filterParams()).pipe(
    //   mergeMap(count =>
    //     this._odooService
    //       .searchRead$<T>(
    //         model,
    //         filterParams(),
    //         ajaxParam.colsMetaData.filter(col => !col.notDisplayable).map(col => col.name),
    //         {
    //           order: groupBy ? `${groupBy} asc ${orderParams ? ',' + orderParams : ''}` : orderParams,
    //           offset: (ajaxParam.page - 1) * ajaxParam.size,
    //           limit: ajaxParam.size,
    //         }
    //       )
    //       .pipe(
    //         filter(isNonNullable),
    //         map(data => {
    //           const mapping = ajaxParam.colsMetaData
    //             .filter(col => col.type === ParameterType.Relation)
    //             .map(col => ({ from: col.name, to: (<String>col.name).split('_')[0] }));

    //           if (!mapping || mapping.length === 0) {
    //             return data;
    //           }
    //           return data.map(entity =>
    //             this._handleJoinData(entity, mapping as unknown as Array<{ from?: keyof T; to: keyof T }>)
    //           );
    //         }),
    //         map(data => ({
    //           data: data,
    //           total: count,
    //           last_page: Math.ceil(count / ajaxParam.size),
    //         }))
    //       )
    //   )
    // );
  }

  // private _buildOrDomain(fields: string[], value: string) {
  //   if (fields.length === 0) return [];

  //   return [...fields.slice(0, -1).map(_ => '|'), ...fields.map(field => [field, 'ilike', value])];
  // }
}
