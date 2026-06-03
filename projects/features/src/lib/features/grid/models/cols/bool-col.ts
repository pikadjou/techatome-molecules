import { BaseCol } from './base-col';

export class BoolCol extends BaseCol<Boolean> {
  public override defaultFormatter(row: any): string {
    const value = row[this.key as string];
    return value ? '✓' : '✗';
  }
}
