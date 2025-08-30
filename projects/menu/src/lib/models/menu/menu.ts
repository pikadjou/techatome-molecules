import { MenuBase } from './item/base';

export class Menu<T = MenuBase> {
  direction: 'horizontal' | 'vertical' | 'responsive' = 'responsive';
  elements: T[];

  constructor(options: IMenuOption<T> = {}) {
    this.direction = options.direction || 'responsive';
    this.elements = options.elements || [];
  }
}
export interface IMenuOption<T = MenuBase> {
  direction?: 'horizontal' | 'vertical' | 'responsive';
  elements?: T[];
}
