import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { ContainerValidationComponent } from '@ta/ui';

import { BottomSheetData } from '../../../../models/bottom/bottom-sheet-data';
import { TaTranslationMenu } from '../../../../translation.service';

export interface BottomSheetTemplateBasicParams {
  orientation: 'horizontal' | 'vertical';
  menu$: Observable<BottomSheetData[]>;
}
@Component({
  selector: 'ta-bottom-sheet-template-basic',
  templateUrl: './bottom-sheet-template-basic.component.html',
  styleUrls: ['./bottom-sheet-template-basic.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    AsyncPipe,
    NgTemplateOutlet,
    TranslateModule,
    FontIconComponent,
    ContainerValidationComponent,
  ],
})
export class BottomSheetTemplateBasicComponent {
  public typeItem!: { item: BottomSheetData };

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetTemplateBasicParams) {
    TaTranslationMenu.getInstance();
  }
}
