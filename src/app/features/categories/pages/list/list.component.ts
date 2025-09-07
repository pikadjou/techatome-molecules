import { Component, OnInit, signal } from '@angular/core';

import { TaRoutes } from '@ta/menu';
import { ButtonComponent } from '@ta/ui';
import { TaBasePage } from '@ta/utils';

import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { ECategoriesRoute, FormKey } from '../../categories.routes';
import { ListComponent } from '../../components/list/list.component';
import { SubComponent } from '../../components/sub/sub.component';

@Component({
  standalone: true,
  selector: '',
  imports: [
    ListComponent,
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    SubComponent,
    ButtonComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListPage extends TaBasePage implements OnInit {
  public id = signal<string | null>(null);

  ngOnInit() {
    this._registerSubscription(
      this._getPathParams<{ id: string }>({ id: '' }).subscribe(params => {
        this.id.set(params.id === 'all' ? null : params.id);
      })
    );
  }

  public add(id?: string) {
    this._router.navigateByUrl(
      TaRoutes.getAbsoluteUrl<{ id: FormKey | string }>([ECategoriesRoute.categories, ECategoriesRoute.form], {
        id: id ?? 'new',
      })
    );
  }
}
