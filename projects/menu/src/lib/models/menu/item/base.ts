import { TemplateRef } from '@angular/core';
import { QueryParamsHandling } from '@angular/router';

import { Observable, of } from 'rxjs';

import { isNonNullable } from '@camelot/utils';

export class MenuBase {
  key: string;
  label: string;
  order: number;
  link: string;
  callback?: (data?: any) => void;
  style: string;
  children: MenuBase[];
  visible$: Observable<boolean>;
  defaultOpen: boolean;
  exact: boolean;
  replaceUrl: boolean;
  queryParamsHandling: QueryParamsHandling;
  disabled: boolean;
  translationData?: any;
  endingIcon?: string;
  iconsColor?: string;
  options?: {
    notificationBadge?: { label: number; style?: string };
    extraTemplate?: TemplateRef<any>;
  };
  constructor(options: IMenuBaseOption = {}) {
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.link = options.link || '';
    this.callback = options.callback;
    this.style = options.style || 'bloc';
    this.children = options.children || [];
    this.visible$ = options.visible$ || of(true);
    this.defaultOpen =
      options.defaultOpen === undefined ? false : options.defaultOpen;
    this.exact = options.exact === undefined ? false : options.exact;
    this.replaceUrl = isNonNullable(options.replaceUrl)
      ? options.replaceUrl
      : false;
    this.queryParamsHandling = options.queryParamsHandling ?? '';
    this.disabled = options.disabled === undefined ? false : options.disabled;
    this.translationData = options.translationData;
    this.endingIcon = options.endingIcon;
    this.iconsColor = options.iconsColor;
    this.options = options.options;
  }

  get isMenuPanel() {
    return false;
  }
}
export interface IMenuBaseOption {
  key?: string;
  label?: string;
  order?: number;
  link?: string;
  callback?: (data?: any) => void;
  style?: string;
  children?: MenuBase[];
  visible$?: Observable<boolean>;
  defaultOpen?: boolean;
  exact?: boolean;
  replaceUrl?: boolean;
  queryParamsHandling?: QueryParamsHandling;
  disabled?: boolean;
  translationData?: object;
  endingIcon?: string;
  iconsColor?: string;
  options?: {
    notificationBadge?: { label: number; style?: string };
    extraTemplate?: TemplateRef<any>;
  };
}
