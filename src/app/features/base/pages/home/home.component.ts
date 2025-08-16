import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../../projects/ui/src/lib/components/title/title.component";
import { MatIcon } from '@angular/material/icon';
import { LayoutFirstLevelComponent } from "../../../core/layout/layout-first-level/layout-first-level.component";
import { LayoutTitleComponent } from "../../../core/layout/layout-title/layout-title.component";
import { LayoutContentComponent } from "../../../core/layout/layout-content/layout-content.component";
import { TaBasePage } from '@ta/utils';
import { TaRoutes } from '@ta/menu';
import { ECategoriesRoute } from '../../../categories/categories.routes';
import { EDocumentsRoute } from '../../../documents/documents.routes';

@Component({
  selector: '',
  imports: [TitleComponent, MatIcon, LayoutFirstLevelComponent, LayoutTitleComponent, LayoutContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePage extends TaBasePage {

  public goToCategories() {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl([ECategoriesRoute.categories, ECategoriesRoute.list], {
        id: 'all',
      }),
    );
  }

  public goToDocuments() {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl([EDocumentsRoute.documents, EDocumentsRoute.list], {
        id: 'all',
      }),
    );
  }
}
