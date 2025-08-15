import { Component, OnInit } from '@angular/core';
import { TaBasePage } from '@ta/utils';
import { ViewComponent } from '../../components/view/view.component';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';

@Component({
  selector: '',
  imports: [ViewComponent, LayoutFirstLevelComponent, LayoutTitleComponent, LayoutContentComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewPage extends TaBasePage implements OnInit {
  public id!: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this._getPathParams<{ id: string }>({ id: '' }).subscribe((params) => {
      this.id = params.id;
    });
  }
}
