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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZU1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hYnN0cmFjdC9iYXNlTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRCw2SUFBNkk7QUFFN0ksTUFBTSxPQUFnQixXQUFzQyxTQUFRLG1CQUFtQjtJQUtyRjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsZUFBVSxHQUFHLEtBQUssQ0FBMEIsSUFBSSxDQUFDLENBQUM7UUFFbEQsZUFBVSxHQUFHLE1BQU0sRUFBSyxDQUFDO0lBSXpCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRCw0RUFBNEU7SUFDckUsT0FBTyxDQUFDLE1BQVM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQzsrR0F0Qm1CLFdBQVc7bUdBQVgsV0FBVyxxUUFEVixFQUFFOzs0RkFDSCxXQUFXO2tCQURoQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxTdGF0ZSB9IGZyb20gJy4uL2hlbHBlcnMvbW9kYWwvc3RhdGUnO1xyXG5pbXBvcnQgeyBUYUFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdENvbXBvbmVudCc7XHJcblxyXG4vKiogQ29udGVudSBkJ3VuZSBtb2RhbGUgcGlsb3TDqSBwYXIgdW4gYE1vZGFsU3RhdGU8VCwgVT5gIDogZW50csOpZSBgVGAgbHVlIHZpYSBgbW9kYWxTdGF0ZSgpLmlucHV0KClgLCByw6lzdWx0YXQgYFVgIHJlbmR1IHBhciBgY29uZmlybSgpYC4gKi9cclxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFCYXNlTW9kYWw8VCA9IHVua25vd24sIFUgPSB1bmtub3duPiBleHRlbmRzIFRhQWJzdHJhY3RDb21wb25lbnQge1xyXG4gIG1vZGFsU3RhdGUgPSBpbnB1dDxNb2RhbFN0YXRlPFQsIFU+IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNsb3NlRXZlbnQgPSBvdXRwdXQ8VT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsU3RhdGUoKT8ub3BlbigpID8/IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlcm1lIGF2ZWMgdW4gcsOpc3VsdGF0IDogYGNvbXBsZXRlZCgpYCBzdXIgbCfDqXRhdCwgcHVpcyBgY2xvc2VFdmVudGAuICovXHJcbiAgcHVibGljIGNvbmZpcm0ob3V0cHV0OiBVKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGFsU3RhdGUoKT8uY29tcGxldGVkKG91dHB1dCk7XHJcbiAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdChvdXRwdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlcm1lIHNhbnMgcsOpc3VsdGF0LiAqL1xyXG4gIHB1YmxpYyBkaXNtaXNzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbFN0YXRlKCk/LmRpc21pc3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=