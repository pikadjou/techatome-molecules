import { MenuBase } from './item/base';

export class Menu<T = MenuBase> {
  direction: string;
  elements: T[];

  constructor(options: IMenuOption<T> = {}) {
    this.direction = options.direction || '';
    this.elements = options.elements || [];
  }
}
export interface IMenuOption<T = MenuBase> {
  direction?: string;
  elements?: T[];
}
