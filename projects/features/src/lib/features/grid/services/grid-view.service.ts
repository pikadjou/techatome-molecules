import { Injectable } from '@angular/core';

import { Observable, filter, map } from 'rxjs';

import { GraphReponsePaged, OrderType, TaBaseService, WhereType, createPagedQuery } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { ColMetaData, Filter, FilterType, Sort, ajaxRequestFuncParams, ajaxResponse } from '../models/types';

export const gridSearchFieldsName = 'search';

const filterTypeToGql: Record<FilterType, string> = {
  '=': 'eq',
  '!=': 'neq',
  like: 'contains',
  '<': 'lt',
  '>': 'gt',
  '<=': 'lte',
  '>=': 'gte',
  in: 'in',
  starts: 'startsWith',
  ends: 'endsWith',
  regex: 'contains',
};

function buildWhere<T>(filters: Filter[], colsMetaData: ColMetaData<T>[]): WhereType<T> | null {
  if (!filters.length) return null;

  const conditions: any[] = [];

  for (const f of filters) {
    if (f.field === gridSearchFieldsName) {
      const searchFields = colsMetaData.filter(c => c.isSearchField).map(c => c.name as string);
      if (searchFields.length && f.value) {
        conditions.push({ or: searchFields.map(field => ({ [field]: { contains: f.value } })) });
      }
      continue;
    }
    const op = filterTypeToGql[f.type] ?? 'eq';
    conditions.push({ [f.field]: { [op]: f.value } });
  }

  if (!conditions.length) return null;
  if (conditions.length === 1) return conditions[0] as WhereType<T>;
  return { and: conditions } as unknown as WhereType<T>;
}

function buildOrder<T>(sort: Sort[]): OrderType<T>[] | null {
  if (!sort.length) return null;
  return sort.map(s => ({ [s.field]: s.dir.toUpperCase() as 'ASC' | 'DESC' } as OrderType<T>));
}

@Injectable({
  providedIn: 'root',
})
export class TaGridViewService extends TaBaseService {
  constructor() {
    super();
  }

  public getData$<T>(model: string, params: ajaxRequestFuncParams): Observable<ajaxResponse<T>> {
    const props = params.colsMetaData
      .filter(c => !c.notDisplayable)
      .map(c => c.name as string)
      .join('\n              ');

    const where = buildWhere<T>(params.filter, params.colsMetaData);
    const order = buildOrder<T>(params.sort);
    const skip = (params.page - 1) * params.size;

    return this._graphService
      .fetchQueryBuilder<GraphReponsePaged<T>>(
        createPagedQuery<T>(model, { props, where, order, take: params.size, skip }),
        ''
      )
      .pipe(
        filter(isNonNullable),
        map(response => ({
          data: response.items ?? [],
          total: response.totalCount,
          last_page: Math.ceil(response.totalCount / params.size),
        }))
      );
  }
}
