import { Component, OnInit, signal } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { TaBasePage } from '@ta/utils';
import { SubComponent } from '../../components/sub/sub.component';
import { TaButtonComponent } from '../../../../../../projects/ui/src/lib/components/button/button.component';
import { TaRoutes } from '@ta/menu';
import { ECategoriesRoute, FormKey } from '../../categories.routes';

@Component({
  selector: '',
  imports: [
    ListComponent,
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    SubComponent,
    TaButtonComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListPage extends TaBasePage implements OnInit {
  public id = signal<string | null>(null);

  ngOnInit() {
    this._registerSubscription(
      this._getPathParams<{ id: string }>({ id: '' }).subscribe((params) => {
        this.id.set(params.id === 'all' ? null : params.id);
      }),
    );
  }

  public add(id?: string) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>([ECategoriesRoute.categories, ECategoriesRoute.form], {
        id: id ?? 'new',
      }),
    );
  }
}
