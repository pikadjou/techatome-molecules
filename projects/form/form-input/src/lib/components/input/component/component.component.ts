import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Output, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Subject } from 'rxjs';

import { InputComponent } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TaModalComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-component-selector-modal',
  standalone: true,
  imports: [NgTemplateOutlet, TaModalComponent],
  templateUrl: './modal.html',
})
export class ComponentSelectorModal extends TaBaseComponent {
  open = input.required<boolean>();
  inputData = input.required<InputComponent>();

  @Output() closeEvent = new EventEmitter<void>();

  readonly selectedValue$ = new Subject<string>();

  constructor() {
    super();
    this._registerSubscription(
      this.selectedValue$.subscribe({ next: value => this.select(value) })
    );
  }

  public select(value: string) {
    this.inputData().selectedValue$.next(value);
    this.closeEvent.emit();
  }
}

@Component({
  selector: 'ta-input-component',
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule, FontIconComponent, ComponentSelectorModal],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss',
})
export class ComponentInputComponent extends TaAbstractInputComponent<InputComponent> {
  public isModalOpen = signal(false);

  public open() {
    this.isModalOpen.set(true);
  }
}
