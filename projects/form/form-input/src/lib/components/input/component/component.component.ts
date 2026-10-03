import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Subject } from 'rxjs';

import { InputComponent } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TaModalComponent } from '@ta/ui';
import { ModalState, TaBaseModal } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-component-selector-modal',
  standalone: true,
  imports: [NgTemplateOutlet, TaModalComponent],
  templateUrl: './modal.html',
})
/** Projette le `TemplateRef` du modèle `InputComponent` reçu en entrée ; rend la valeur choisie. */
export class ComponentSelectorModal extends TaBaseModal<InputComponent, string> {
  readonly selectedValue$ = new Subject<string>();

  constructor() {
    super();
    this._registerSubscription(this.selectedValue$.subscribe({ next: value => this.select(value) }));
  }

  public select(value: string) {
    this.modalState()?.input()?.selectedValue$.next(value);
    this.confirm(value);
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
  public selectorModal = new ModalState<InputComponent, string>();

  public open() {
    this.selectorModal.asked(this.input);
  }
}
