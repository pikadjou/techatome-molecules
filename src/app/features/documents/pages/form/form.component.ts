import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { TaBasePage } from '@ta/utils';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: '',
  imports: [LayoutFirstLevelComponent, FormComponent, LayoutTitleComponent, LayoutContentComponent, MatIcon],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormPage extends TaBasePage implements OnInit {
  public id!: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this._getPathParams<{ id: string }>({ id: '' }).subscribe((params) => {
      if (params.id && params.id !== 'new') {
        this.id = params.id;
      }
    });
  }

  public goBack() {
    window.history.back();
  }
}
