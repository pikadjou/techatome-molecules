import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { Observable } from 'rxjs';

import { BottomSheetData } from '../../../../models/bottom/bottom-sheet-data';

export interface BottomSheetTemplateBasicParams {
  orientation: 'horizontal' | 'vertical';
  menu$: Observable<BottomSheetData[]>;
}
@Component({
  selector: 'ta-bottom-sheet-template-basic',
  templateUrl: './bottom-sheet-template-basic.component.html',
  styleUrls: ['./bottom-sheet-template-basic.component.scss'],
})
export class BottomSheetTemplateBasicComponent {
  public typeItem!: { item: BottomSheetData };

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetTemplateBasicParams) {}
}
