import { Component, ViewChild, inject, signal } from '@angular/core';
import { TouchedChangeEvent } from '@angular/forms';
import { distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
import { InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { TaAddressLookupService, isNonNullable, toArray } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import * as i0 from "@angular/core";
const DEFAULT_COUNTRY = 'BE';
/**
 * Choix d'une localité (code postal + commune) dans la liste officielle du pays.
 *
 * La liste complète du pays est gardée en mémoire ; la recherche filtre côté
 * client. Seul un pays sans données ouvre la saisie libre (code postal + ville).
 * Le composant porte la valeur métier (`AddressLocality`) : les champs internes
 * ne manipulent que des identifiants ou du texte.
 */
export class InputLocalityComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        /** `false` tant que le pays courant n'a pas de liste : on bascule en saisie libre. */
        this.available = signal(true);
        this._lookup = inject(TaAddressLookupService);
        this._currentCountry = null;
        this._isApplyingValue = false;
        this._localities = [];
        this._localityMap = new Map();
        TaTranslationForm.getInstance();
    }
    ngOnInit() {
        super.ngOnInit();
        this.choicesInput = new InputChoices({
            advancedSearch$: (search) => of(this._searchLocalities(search)),
            disabled: this.input.disabled,
            key: `${this.input.key}_choices`,
            label: this.input.label || 'form.address.locality',
            message: this.input.message,
            multiple: this.input.multiple,
            validators: this.input.validators,
            withSearch: true,
        });
        this.choicesInput.choiceTemplate = { one: this._localityItemTpl };
        this.zipCodeInput = new InputTextBox({
            disabled: this.input.disabled,
            key: `${this.input.key}_zipCode`,
            label: 'form.address.zipCode',
            validators: this.input.validators,
        });
        this.cityInput = new InputTextBox({
            disabled: this.input.disabled,
            key: `${this.input.key}_city`,
            label: 'form.address.city',
            validators: this.input.validators,
        });
        // Une valeur posée de l'extérieur (préremplissage, recherche Google) se reflète dans les champs.
        this._registerSubscription(this.input.changeValue$.subscribe(() => this._applyValueToFields()));
        // Une soumission invalide marque le contrôle touché : on le répercute aux champs,
        // sinon leurs messages d'erreur restent invisibles.
        const control = this.input.formControl;
        if (control) {
            this._registerSubscription(control.events
                .pipe(filter(event => event instanceof TouchedChangeEvent && event.touched))
                .subscribe(() => this._fields().forEach(field => field.formControl?.markAsTouched())));
        }
        this._registerSubscription((this.input.country$ ?? of(DEFAULT_COUNTRY))
            .pipe(distinctUntilChanged(), 
        // Le choix est vidé dès que le pays change, avant même que la nouvelle liste
        // n'arrive : une valeur posée entre-temps n'est ainsi jamais écrasée.
        tap(country => {
            if (isNonNullable(this._currentCountry) && country !== this._currentCountry) {
                this._setValue(null);
            }
            this._currentCountry = country;
        }), switchMap(country => this._lookup.getCountryPostalCodes(country)))
            .subscribe(localities => {
            this._localities = localities;
            this._localityMap = new Map(localities.map(locality => [InputLocality.localityId(locality), locality]));
            this.available.set(localities.length > 0);
            this._applyValueToFields();
            this._choicesRef?.refresh();
        }));
    }
    ngOnDestroy() {
        this._fields().forEach(field => field.destroy());
        super.ngOnDestroy();
    }
    onChoicesChanged() {
        if (this._isApplyingValue) {
            return;
        }
        const localities = (this.choicesInput.value ?? []).map(id => this._localityMap.get(id)).filter(isNonNullable);
        this._setValue(this._pack(localities));
    }
    onFreeInputChanged() {
        if (this._isApplyingValue) {
            return;
        }
        const zipCode = this.zipCodeInput.value?.trim() ?? '';
        const city = this.cityInput.value?.trim() ?? '';
        if (!zipCode && !city) {
            this._setValue(null);
            return;
        }
        this._setValue(this._pack([
            {
                city,
                country: this._currentCountry ?? DEFAULT_COUNTRY,
                latitude: null,
                longitude: null,
                zipCode,
            },
        ]));
    }
    _fields() {
        return [this.choicesInput, this.cityInput, this.zipCodeInput];
    }
    _pack(localities) {
        return this.input.multiple ? localities : (localities[0] ?? null);
    }
    _setValue(value) {
        this.input.value = value;
    }
    /** Reflète `input.value` dans les champs — sans repasser par leurs `valueChanged`. */
    _applyValueToFields() {
        const localities = toArray(this.input.value).filter(isNonNullable);
        this._isApplyingValue = true;
        const ids = localities.map(locality => InputLocality.localityId(locality));
        const current = this.choicesInput.value ?? [];
        if (ids.length !== current.length || ids.some(id => !current.includes(id))) {
            this.choicesInput.value = ids;
        }
        const first = localities[0];
        this.zipCodeInput.value = first?.zipCode ?? '';
        this.cityInput.value = first?.city ?? '';
        this._isApplyingValue = false;
    }
    _searchLocalities(search) {
        const term = (search ?? '').trim().toLowerCase();
        const matched = term
            ? this._localities.filter(locality => `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term))
            : this._localities;
        return matched.map(locality => ({
            data: locality,
            id: InputLocality.localityId(locality),
            name: `${locality.zipCode} ${locality.city}`,
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputLocalityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputLocalityComponent, isStandalone: true, selector: "ta-input-locality", viewQueries: [{ propertyName: "_choicesRef", first: true, predicate: InputChoicesComponent, descendants: true }, { propertyName: "_localityItemTpl", first: true, predicate: ["localityItemTpl"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "@if (this.available()) {\n  <ta-input-choices\n    [input]=\"this.choicesInput\"\n    [standalone]=\"true\"\n    (valueChanged)=\"this.onChoicesChanged()\"\n  ></ta-input-choices>\n} @else {\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n}\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n", styles: [":host{display:block}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputLocalityComponent, decorators: [{
            type: Component,
            args: [{ imports: [InputChoicesComponent, TextBoxComponent], selector: 'ta-input-locality', standalone: true, template: "@if (this.available()) {\n  <ta-input-choices\n    [input]=\"this.choicesInput\"\n    [standalone]=\"true\"\n    (valueChanged)=\"this.onChoicesChanged()\"\n  ></ta-input-choices>\n} @else {\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n}\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n", styles: [":host{display:block}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { _choicesRef: [{
                type: ViewChild,
                args: [InputChoicesComponent]
            }], _localityItemTpl: [{
                type: ViewChild,
                args: ['localityItemTpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQXNCLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWpFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUk3Qjs7Ozs7OztHQU9HO0FBUUgsTUFBTSxPQUFPLHNCQUNYLFNBQVEsd0JBQXNEO0lBb0I5RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBZFYsc0ZBQXNGO1FBQ3RFLGNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFNeEIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xE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T25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdWNoZWRDaGFuZ2VFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG9mLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRDaG9pY2VzLCBJbnB1dENob2ljZXNPcHRpb24sIElucHV0TG9jYWxpdHksIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcclxuaW1wb3J0IHsgSW5wdXRDaG9pY2VzQ29tcG9uZW50LCBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XHJcbmltcG9ydCB7IEFkZHJlc3NMb2NhbGl0eSwgVGFBZGRyZXNzTG9va3VwU2VydmljZSwgaXNOb25OdWxsYWJsZSwgdG9BcnJheSB9IGZyb20gJ0B0YS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT1VOVFJZID0gJ0JFJztcclxuXHJcbnR5cGUgTG9jYWxpdHlWYWx1ZSA9IEFkZHJlc3NMb2NhbGl0eSB8IEFkZHJlc3NMb2NhbGl0eVtdIHwgbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDaG9peCBkJ3VuZSBsb2NhbGl0w6kgKGNvZGUgcG9zdGFsICsgY29tbXVuZSkgZGFucyBsYSBsaXN0ZSBvZmZpY2llbGxlIGR1IHBheXMuXHJcbiAqXHJcbiAqIExhIGxpc3RlIGNvbXBsw6h0ZSBkdSBwYXlzIGVzdCBnYXJkw6llIGVuIG3DqW1vaXJlIDsgbGEgcmVjaGVyY2hlIGZpbHRyZSBjw7R0w6lcclxuICogY2xpZW50LiBTZXVsIHVuIHBheXMgc2FucyBkb25uw6llcyBvdXZyZSBsYSBzYWlzaWUgbGlicmUgKGNvZGUgcG9zdGFsICsgdmlsbGUpLlxyXG4gKiBMZSBjb21wb3NhbnQgcG9ydGUgbGEgdmFsZXVyIG3DqXRpZXIgKGBBZGRyZXNzTG9jYWxpdHlgKSA6IGxlcyBjaGFtcHMgaW50ZXJuZXNcclxuICogbmUgbWFuaXB1bGVudCBxdWUgZGVzIGlkZW50aWZpYW50cyBvdSBkdSB0ZXh0ZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIGltcG9ydHM6IFtJbnB1dENob2ljZXNDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnRdLFxyXG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtbG9jYWxpdHknLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYWxpdHkuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYWxpdHkuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRMb2NhbGl0eUNvbXBvbmVudFxyXG4gIGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0TG9jYWxpdHksIExvY2FsaXR5VmFsdWU+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveVxyXG57XHJcbiAgQFZpZXdDaGlsZChJbnB1dENob2ljZXNDb21wb25lbnQpIHByaXZhdGUgX2Nob2ljZXNSZWY/OiBJbnB1dENob2ljZXNDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnbG9jYWxpdHlJdGVtVHBsJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBwcml2YXRlIF9sb2NhbGl0eUl0ZW1UcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAvKiogYGZhbHNlYCB0YW50IHF1ZSBsZSBwYXlzIGNvdXJhbnQgbidhIHBhcyBkZSBsaXN0ZSA6IG9uIGJhc2N1bGUgZW4gc2Fpc2llIGxpYnJlLiAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBhdmFpbGFibGUgPSBzaWduYWwodHJ1ZSk7XHJcblxyXG4gIHB1YmxpYyBjaG9pY2VzSW5wdXQhOiBJbnB1dENob2ljZXM7XHJcbiAgcHVibGljIGNpdHlJbnB1dCE6IElucHV0VGV4dEJveDtcclxuICBwdWJsaWMgemlwQ29kZUlucHV0ITogSW5wdXRUZXh0Qm94O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9sb29rdXAgPSBpbmplY3QoVGFBZGRyZXNzTG9va3VwU2VydmljZSk7XHJcbiAgcHJpdmF0ZSBfY3VycmVudENvdW50cnk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xvY2FsaXRpZXM6IEFkZHJlc3NMb2NhbGl0eVtdID0gW107XHJcbiAgcHJpdmF0ZSBfbG9jYWxpdHlNYXAgPSBuZXcgTWFwPHN0cmluZywgQWRkcmVzc0xvY2FsaXR5PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCkge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIHRoaXMuY2hvaWNlc0lucHV0ID0gbmV3IElucHV0Q2hvaWNlcyh7XHJcbiAgICAgIGFkdmFuY2VkU2VhcmNoJDogKHNlYXJjaD86IHN0cmluZykgPT4gb2YodGhpcy5fc2VhcmNoTG9jYWxpdGllcyhzZWFyY2gpKSxcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXHJcbiAgICAgIGtleTogYCR7dGhpcy5pbnB1dC5rZXl9X2Nob2ljZXNgLFxyXG4gICAgICBsYWJlbDogdGhpcy5pbnB1dC5sYWJlbCB8fCAnZm9ybS5hZGRyZXNzLmxvY2FsaXR5JyxcclxuICAgICAgbWVzc2FnZTogdGhpcy5pbnB1dC5tZXNzYWdlLFxyXG4gICAgICBtdWx0aXBsZTogdGhpcy5pbnB1dC5tdWx0aXBsZSxcclxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxyXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNob2ljZXNJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9sb2NhbGl0eUl0ZW1UcGwgfTtcclxuICAgIHRoaXMuemlwQ29kZUlucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlucHV0LmRpc2FibGVkLFxyXG4gICAgICBrZXk6IGAke3RoaXMuaW5wdXQua2V5fV96aXBDb2RlYCxcclxuICAgICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuemlwQ29kZScsXHJcbiAgICAgIHZhbGlkYXRvcnM6IHRoaXMuaW5wdXQudmFsaWRhdG9ycyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaXR5SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXHJcbiAgICAgIGtleTogYCR7dGhpcy5pbnB1dC5rZXl9X2NpdHlgLFxyXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jaXR5JyxcclxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVW5lIHZhbGV1ciBwb3PDqWUgZGUgbCdleHTDqXJpZXVyIChwcsOpcmVtcGxpc3NhZ2UsIHJlY2hlcmNoZSBHb29nbGUpIHNlIHJlZmzDqHRlIGRhbnMgbGVzIGNoYW1wcy5cclxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKSkpO1xyXG4gICAgLy8gVW5lIHNvdW1pc3Npb24gaW52YWxpZGUgbWFycXVlIGxlIGNvbnRyw7RsZSB0b3VjaMOpIDogb24gbGUgcsOpcGVyY3V0ZSBhdXggY2hhbXBzLFxyXG4gICAgLy8gc2lub24gbGV1cnMgbWVzc2FnZXMgZCdlcnJldXIgcmVzdGVudCBpbnZpc2libGVzLlxyXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgICBjb250cm9sLmV2ZW50c1xyXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hlZENoYW5nZUV2ZW50ICYmIGV2ZW50LnRvdWNoZWQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9maWVsZHMoKS5mb3JFYWNoKGZpZWxkID0+IGZpZWxkLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXHJcbiAgICAgICh0aGlzLmlucHV0LmNvdW50cnkkID8/IG9mKERFRkFVTFRfQ09VTlRSWSkpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgLy8gTGUgY2hvaXggZXN0IHZpZMOpIGTDqHMgcXVlIGxlIHBheXMgY2hhbmdlLCBhdmFudCBtw6ptZSBxdWUgbGEgbm91dmVsbGUgbGlzdGVcclxuICAgICAgICAgIC8vIG4nYXJyaXZlIDogdW5lIHZhbGV1ciBwb3PDqWUgZW50cmUtdGVtcHMgbidlc3QgYWluc2kgamFtYWlzIMOpY3Jhc8OpZS5cclxuICAgICAgICAgIHRhcChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzTm9uTnVsbGFibGUodGhpcy5fY3VycmVudENvdW50cnkpICYmIGNvdW50cnkgIT09IHRoaXMuX2N1cnJlbnRDb3VudHJ5KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLl9sb29rdXAuZ2V0Q291bnRyeVBvc3RhbENvZGVzKGNvdW50cnkpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKGxvY2FsaXRpZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fbG9jYWxpdGllcyA9IGxvY2FsaXRpZXM7XHJcbiAgICAgICAgICB0aGlzLl9sb2NhbGl0eU1hcCA9IG5ldyBNYXAobG9jYWxpdGllcy5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSkpO1xyXG4gICAgICAgICAgdGhpcy5hdmFpbGFibGUuc2V0KGxvY2FsaXRpZXMubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgICB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKTtcclxuICAgICAgICAgIHRoaXMuX2Nob2ljZXNSZWY/LnJlZnJlc2goKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2ZpZWxkcygpLmZvckVhY2goZmllbGQgPT4gZmllbGQuZGVzdHJveSgpKTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaG9pY2VzQ2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYWxpdGllcyA9ICh0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA/PyBbXSkubWFwKGlkID0+IHRoaXMuX2xvY2FsaXR5TWFwLmdldChpZCkpLmZpbHRlcihpc05vbk51bGxhYmxlKTtcclxuICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuX3BhY2sobG9jYWxpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRnJlZUlucHV0Q2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgemlwQ29kZSA9IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XHJcbiAgICBjb25zdCBjaXR5ID0gdGhpcy5jaXR5SW5wdXQudmFsdWU/LnRyaW0oKSA/PyAnJztcclxuICAgIGlmICghemlwQ29kZSAmJiAhY2l0eSkge1xyXG4gICAgICB0aGlzLl9zZXRWYWx1ZShudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0VmFsdWUoXHJcbiAgICAgIHRoaXMuX3BhY2soW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICBjb3VudHJ5OiB0aGlzLl9jdXJyZW50Q291bnRyeSA/PyBERUZBVUxUX0NPVU5UUlksXHJcbiAgICAgICAgICBsYXRpdHVkZTogbnVsbCxcclxuICAgICAgICAgIGxvbmdpdHVkZTogbnVsbCxcclxuICAgICAgICAgIHppcENvZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWVsZHMoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMuY2hvaWNlc0lucHV0LCB0aGlzLmNpdHlJbnB1dCwgdGhpcy56aXBDb2RlSW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcGFjayhsb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSk6IExvY2FsaXR5VmFsdWUge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQubXVsdGlwbGUgPyBsb2NhbGl0aWVzIDogKGxvY2FsaXRpZXNbMF0gPz8gbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogTG9jYWxpdHlWYWx1ZSkge1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlZmzDqHRlIGBpbnB1dC52YWx1ZWAgZGFucyBsZXMgY2hhbXBzIOKAlCBzYW5zIHJlcGFzc2VyIHBhciBsZXVycyBgdmFsdWVDaGFuZ2VkYC4gKi9cclxuICBwcml2YXRlIF9hcHBseVZhbHVlVG9GaWVsZHMoKSB7XHJcbiAgICBjb25zdCBsb2NhbGl0aWVzID0gdG9BcnJheSh0aGlzLmlucHV0LnZhbHVlKS5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XHJcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xyXG4gICAgY29uc3QgaWRzID0gbG9jYWxpdGllcy5tYXAobG9jYWxpdHkgPT4gSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSk7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jaG9pY2VzSW5wdXQudmFsdWUgPz8gW107XHJcbiAgICBpZiAoaWRzLmxlbmd0aCAhPT0gY3VycmVudC5sZW5ndGggfHwgaWRzLnNvbWUoaWQgPT4gIWN1cnJlbnQuaW5jbHVkZXMoaWQpKSkge1xyXG4gICAgICB0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA9IGlkcztcclxuICAgIH1cclxuICAgIGNvbnN0IGZpcnN0ID0gbG9jYWxpdGllc1swXTtcclxuICAgIHRoaXMuemlwQ29kZUlucHV0LnZhbHVlID0gZmlyc3Q/LnppcENvZGUgPz8gJyc7XHJcbiAgICB0aGlzLmNpdHlJbnB1dC52YWx1ZSA9IGZpcnN0Py5jaXR5ID8/ICcnO1xyXG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWFyY2hMb2NhbGl0aWVzKHNlYXJjaD86IHN0cmluZyk6IElucHV0Q2hvaWNlc09wdGlvbltdIHtcclxuICAgIGNvbnN0IHRlcm0gPSAoc2VhcmNoID8/ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IG1hdGNoZWQgPSB0ZXJtXHJcbiAgICAgID8gdGhpcy5fbG9jYWxpdGllcy5maWx0ZXIobG9jYWxpdHkgPT4gYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcclxuICAgICAgOiB0aGlzLl9sb2NhbGl0aWVzO1xyXG4gICAgcmV0dXJuIG1hdGNoZWQubWFwKGxvY2FsaXR5ID0+ICh7XHJcbiAgICAgIGRhdGE6IGxvY2FsaXR5LFxyXG4gICAgICBpZDogSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSxcclxuICAgICAgbmFtZTogYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiIsIkBpZiAodGhpcy5hdmFpbGFibGUoKSkge1xuICA8dGEtaW5wdXQtY2hvaWNlc1xuICAgIFtpbnB1dF09XCJ0aGlzLmNob2ljZXNJbnB1dFwiXG4gICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uQ2hvaWNlc0NoYW5nZWQoKVwiXG4gID48L3RhLWlucHV0LWNob2ljZXM+XG59IEBlbHNlIHtcbiAgPGRpdiBjbGFzcz1cImdyaWQgZy1zcGFjZS1zbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvbmUtdGhpcmRcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLnppcENvZGVJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25GcmVlSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHdvLXRoaXJkc1wiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuY2l0eUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkZyZWVJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbn1cblxuPG5nLXRlbXBsYXRlICNsb2NhbGl0eUl0ZW1UcGwgbGV0LWl0ZW09XCJpdGVtXCI+XG4gIDxzcGFuIGNsYXNzPVwibG9jYWxpdHktb3B0aW9uXCI+e3sgaXRlbS56aXBDb2RlIH19IHt7IGl0ZW0uY2l0eSB9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=