import { NgStyle } from '@angular/common';
import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

export type BottomSheetTemplateGenericParams<T = any> = {
  maxHeight?: number;
  template: TemplateRef<any>;
  context?: T;
};

@Component({
selector: 'ta-bottom-sheet-template-generic',
  templateUrl: './bottom-sheet-template-generic.component.html',
  styleUrls: ['./bottom-sheet-template-generic.component.scss'],
  standalone: true,
  imports: [NgStyle],
})
export class BottomSheetTemplateGenericComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetTemplateGenericParams) {}
}
