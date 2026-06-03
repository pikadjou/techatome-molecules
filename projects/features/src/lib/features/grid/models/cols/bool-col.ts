import { BaseCol } from './base-col';

export class BoolCol extends BaseCol<boolean> {
  public override defaultFormatter(row: any): string {
    const value = row[this.key as string];
    if (value == null) return '';
    return value ? '✓' : '✗';
  }
}
