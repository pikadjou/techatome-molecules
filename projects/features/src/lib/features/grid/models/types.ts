import { TemplateRef } from '@angular/core';

import { Observable } from 'rxjs';

import { InputChoicesOption } from '@ta/form-model';

export enum ParameterType {
  Unknown,
  String,
  Number,
  Boolean,
  DateTime,
  Enum,
  Relation,
}

export interface ColMetaData<T = unknown> {
  name: keyof T;
  type: ParameterType;
  isSearchField?: boolean;
  notDisplayable?: boolean;
  showOnSearch?: boolean;
  highlighted?: boolean;
  multivalues?: boolean;
  enumValues?: string[];
  dataSearch$?: (search?: string) => Observable<InputChoicesOption[]>;
  manyToOneOptions?: {
    field: string;
    model: string;
    data$: (id: number[]) => Observable<string[]>;
  };
  template?: TemplateRef<{ $implicit: T; value: any }>;
  width?: string;
}

export type FilterType = '=' | '!=' | 'like' | '<' | '>' | '<=' | '>=' | 'in' | 'regex' | 'starts' | 'ends';

export interface Filter {
  field: string;
  type: FilterType;
  value: any;
}

export interface ColConfig {
  key: string;
  title: string;
  sortable: boolean;
  width?: string;
  template?: TemplateRef<any>;
}

export type ActiveFilter = { key: string; values: Filter[] };
export type Sort = { field: string; dir: 'asc' | 'desc' };
export type GridOptions<T> = (services?: any) => {
  key: string;
  colsMetaData: ColMetaData<T>[];
  preset?: Preset[];
};

export type ajaxResponse<T> = { data: T[]; last_page: number; total: number };
export type ajaxRequestFuncParams = {
  filter: Filter[];
  sort: Sort[];
  groupBy: string | null;
  page: number;
  size: number;
  colsMetaData: ColMetaData<any>[];
};

export type ViewType = 'grid' | 'card';
export type Preset = { name: string; filters: Filter[] };
