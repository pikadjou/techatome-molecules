import { Component, input, output } from '@angular/core';
import { TaAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
/** Contenu d'une modale piloté par un `ModalState<T, U>` : entrée `T` lue via `modalState().input()`, résultat `U` rendu par `confirm()`. */
export class TaBaseModal extends TaAbstractComponent {
    constructor() {
        super();
        this.modalState = input(null);
        this.closeEvent = output();
    }
    isOpen() {
        return this.modalState()?.open() ?? false;
    }
    /** Ferme avec un résultat : `completed()` sur l'état, puis `closeEvent`. */
    confirm(output) {
        this.modalState()?.completed(output);
        this.closeEvent.emit(output);
    }
    /** Ferme sans résultat. */
    dismiss() {
        this.modalState()?.dismissed();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseModal, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaBaseModal, selector: "ng-component", inputs: { modalState: { classPropertyName: "modalState", publicName: "modalState", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseModal, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZU1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hYnN0cmFjdC9iYXNlTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRCw2SUFBNkk7QUFFN0ksTUFBTSxPQUFnQixXQUFzQyxTQUFRLG1CQUFtQjtJQUtyRjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsZUFBVSxHQUFHLEtBQUssQ0FBMEIsSUFBSSxDQUFDLENBQUM7UUFFbEQsZUFBVSxHQUFHLE1BQU0sRUFBSyxDQUFDO0lBSXpCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRCw0RUFBNEU7SUFDckUsT0FBTyxDQUFDLE1BQVM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQzsrR0F0Qm1CLFdBQVc7bUdBQVgsV0FBVyxxUUFEVixFQUFFOzs0RkFDSCxXQUFXO2tCQURoQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbFN0YXRlIH0gZnJvbSAnLi4vaGVscGVycy9tb2RhbC9zdGF0ZSc7XG5pbXBvcnQgeyBUYUFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdENvbXBvbmVudCc7XG5cbi8qKiBDb250ZW51IGQndW5lIG1vZGFsZSBwaWxvdMOpIHBhciB1biBgTW9kYWxTdGF0ZTxULCBVPmAgOiBlbnRyw6llIGBUYCBsdWUgdmlhIGBtb2RhbFN0YXRlKCkuaW5wdXQoKWAsIHLDqXN1bHRhdCBgVWAgcmVuZHUgcGFyIGBjb25maXJtKClgLiAqL1xuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQmFzZU1vZGFsPFQgPSB1bmtub3duLCBVID0gdW5rbm93bj4gZXh0ZW5kcyBUYUFic3RyYWN0Q29tcG9uZW50IHtcbiAgbW9kYWxTdGF0ZSA9IGlucHV0PE1vZGFsU3RhdGU8VCwgVT4gfCBudWxsPihudWxsKTtcblxuICBjbG9zZUV2ZW50ID0gb3V0cHV0PFU+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTdGF0ZSgpPy5vcGVuKCkgPz8gZmFsc2U7XG4gIH1cblxuICAvKiogRmVybWUgYXZlYyB1biByw6lzdWx0YXQgOiBgY29tcGxldGVkKClgIHN1ciBsJ8OpdGF0LCBwdWlzIGBjbG9zZUV2ZW50YC4gKi9cbiAgcHVibGljIGNvbmZpcm0ob3V0cHV0OiBVKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFN0YXRlKCk/LmNvbXBsZXRlZChvdXRwdXQpO1xuICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KG91dHB1dCk7XG4gIH1cblxuICAvKiogRmVybWUgc2FucyByw6lzdWx0YXQuICovXG4gIHB1YmxpYyBkaXNtaXNzKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTdGF0ZSgpPy5kaXNtaXNzZWQoKTtcbiAgfVxufVxuIl19