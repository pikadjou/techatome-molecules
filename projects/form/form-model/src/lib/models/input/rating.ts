import { IInputBase, InputBase } from './base';

export interface IInputRating<T> extends IInputBase<T> {
  max?: number;
  size?: number;
  allowHalf?: boolean;
  readonly?: boolean;
}

export class InputRating<T = number> extends InputBase<T> {
  override controlType = 'rating';
  max: number;
  size: number;
  allowHalf: boolean;
  readonly: boolean;

  constructor(options: IInputRating<T> = {}) {
    super(options);
    this.max = options.max ?? 5;
    this.size = options.size ?? 24;
    this.allowHalf = options.allowHalf ?? false;
    this.readonly = options.readonly ?? false;
  }
}
