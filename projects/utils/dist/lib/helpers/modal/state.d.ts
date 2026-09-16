/** État partagé entre un parent et une modale : entrée `T` poussée à l'ouverture, résultat `U` rendu à la fermeture. */
export declare class ModalState<T, U> {
    open: import("@angular/core").WritableSignal<boolean>;
    input: import("@angular/core").WritableSignal<T | null | undefined>;
    output: import("@angular/core").WritableSignal<U | null>;
    asked(input: T): void;
    completed(output: U): void;
    /** Fermeture sans résultat. */
    dismissed(): void;
}
