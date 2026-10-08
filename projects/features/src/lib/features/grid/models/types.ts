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
  Range,
  Locality,
  Choices,
}

/** Comment une colonne se filtre : le grid en tire le champ et le critère, le parent ne fait que déclarer. */
export interface ColFilterOptions {
  /** Classe du champ dans le formulaire de filtres (grille 12 colonnes) ; `full` à défaut. */
  class?: string;
  /** Rendu brut sous le champ : à traduire avant. */
  message?: string;
  /** Opérateur du critère, quand celui du type ne convient pas (`>=` pour un seuil, une date au plus tôt…). */
  operator?: FilterType;
  /** Enum, Choices : les options proposées. */
  options$?: Observable<{ id: string; name: string; data?: unknown }[]>;
  /** Enum : libellé de l'option « indifférent » qui retire le critère. */
  anyLabel?: string;
  /** Choices : rendu de la liste à la place des pastilles. */
  choiceTemplate?: TemplateRef<any>;
  /** Range : la piste ; une extrémité en butée ne borne rien. */
  range?: { min: number; max: number; step?: number; format?: (value: number, end: boolean) => string };
  /** DateTime avec `operator` : première date sélectionnable. */
  minDate?: Date | 'today';
}

export interface ColMetaData<T = unknown> {
  name: keyof T;
  type: ParameterType;
  /** Clé de traduction du titre et du filtre ; `grid.<scope>.core.<champ>` à défaut. */
  label?: string;
  filter?: ColFilterOptions;
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
  /** Alignement du contenu de la colonne — les montants se lisent à droite. */
  align?: 'left' | 'center' | 'right';
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
  align?: 'left' | 'center' | 'right';
  template?: TemplateRef<any>;
}

export type ActiveFilter = { key: string; values: Filter[] };
export type Sort = { field: string; dir: 'asc' | 'desc' };
export type GridOptions<T> = (services?: any) => {
  key: string;
  colsMetaData: ColMetaData<T>[];
  preset?: Preset[];
};

/**
 * Comment la source numérote ses pages : `page` demande une page par son rang et connaît le total,
 * `cursor` demande la suite à partir d'un curseur et empile les réponses (les connexions Relay ne
 * savent pas compter).
 */
export type PaginationMode = 'page' | 'cursor';

export type ajaxResponse<T> = {
  data: T[];
  last_page: number;
  total: number;
  /** Mode `cursor` : reste-t-il une page, et à partir d'où la demander. */
  hasNextPage?: boolean;
  endCursor?: string | null;
};
export type ajaxRequestFuncParams = {
  filter: Filter[];
  sort: Sort[];
  groupBy: string | null;
  page: number;
  size: number;
  colsMetaData: ColMetaData<any>[];
  /** Mode `cursor` : `null` pour la première page, sinon la fin de la précédente. */
  cursor: string | null;
};

export type ViewType = 'grid' | 'card';
export type Preset = { name: string; filters: Filter[] };
