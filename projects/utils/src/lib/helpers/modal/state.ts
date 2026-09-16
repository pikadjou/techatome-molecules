import { signal } from '@angular/core';

/** État partagé entre un parent et une modale : entrée `T` poussée à l'ouverture, résultat `U` rendu à la fermeture. */
export class ModalState<T, U> {
  public open = signal(false);
  public input = signal<T | null | undefined>(null);
  public output = signal<U | null>(null);

  public asked(input: T) {
    this.input.set(input);
    this.output.set(null);
    this.open.set(true);
  }

  public completed(output: U) {
    this.output.set(output);
    this.open.set(false);
  }

  /** Fermeture sans résultat. */
  public dismissed() {
    this.open.set(false);
  }
}
