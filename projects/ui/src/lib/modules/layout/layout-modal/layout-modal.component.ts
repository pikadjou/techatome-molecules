import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { CamTranslationLayout } from '../translation.service';

import { TitleComponent } from '../../../components/ui/title/title.component';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';

export type ModalStyle = 'full' | 'big' | 'classic' | 'small';
@Component({
  selector: 'ta-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
  standalone: true,
  imports: [
    FontIconComponent,
    TranslateModule,
    LayoutTitleComponent,
    LayoutHeaderComponent,
    TitleComponent,
    LayoutContentComponent,
  ],
})
export class LayoutModalComponent extends TaBaseComponent implements OnInit {
  @Input()
  style: ModalStyle = 'classic';

  @Input()
  title: string = '';

  constructor(public dialogRef: MatDialogRef<any>) {
    super();
    CamTranslationLayout.getInstance();
  }

  ngOnInit() {
    this.dialogRef.addPanelClass(this.style + '-modal');
  }

  public close() {
    this.dialogRef.close();
  }
}
