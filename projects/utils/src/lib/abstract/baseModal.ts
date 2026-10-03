import { Component, input, output } from '@angular/core';

import { ModalState } from '../helpers/modal/state';
import { TaAbstractComponent } from './abstractComponent';

/** Contenu d'une modale piloté par un `ModalState<T, U>` : entrée `T` lue via `modalState().input()`, résultat `U` rendu par `confirm()`. */
@Component({ template: '' })
export abstract class TaBaseModal<T = unknown, U = unknown> extends TaAbstractComponent {
  modalState = input<ModalState<T, U> | null>(null);

  closeEvent = output<U>();

  constructor() {
    super();
  }

  public isOpen(): boolean {
    return this.modalState()?.open() ?? false;
  }

  /** Ferme avec un résultat : `completed()` sur l'état, puis `closeEvent`. */
  public confirm(output: U): void {
    this.modalState()?.completed(output);
    this.closeEvent.emit(output);
  }

  /** Ferme sans résultat. */
  public dismiss(): void {
    this.modalState()?.dismissed();
  }
}
