import { Component, ViewChild, inject, signal } from '@angular/core';
import { TouchedChangeEvent } from '@angular/forms';
import { distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
import { InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { TaAddressLookupService, isNonNullable, toArray } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import * as i0 from "@angular/core";
const DEFAULT_COUNTRY = 'BE';
/** Options rendues au plus : la recherche affine, le DOM ne porte jamais un pays entier. */
const MAX_RESULTS = 100;
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
        /** Valeurs reçues qui ne figurent pas dans la liste officielle (données héritées) : gardées telles quelles. */
        this._orphans = new Map();
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
        const localities = (this.choicesInput.value ?? [])
            .map(id => this._localityMap.get(id) ?? this._orphans.get(id))
            .filter(isNonNullable);
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
        this._orphans = new Map(localities
            .map(locality => [InputLocality.localityId(locality), locality])
            .filter(([id]) => !this._localityMap.has(id)));
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
    /**
     * Options proposées : les valeurs déjà choisies d'abord (y compris celles hors liste,
     * pour qu'elles restent lisibles et retirables), puis la liste filtrée et plafonnée.
     */
    _searchLocalities(search) {
        const term = (search ?? '').trim().toLowerCase();
        const selected = toArray(this.input.value).filter(isNonNullable);
        const selectedIds = new Set(selected.map(locality => InputLocality.localityId(locality)));
        const matched = this._localities.filter(locality => !selectedIds.has(InputLocality.localityId(locality)) &&
            (!term || `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term)));
        return [...selected, ...matched.slice(0, MAX_RESULTS)].map(locality => this._toOption(locality));
    }
    _toOption(locality) {
        return {
            data: locality,
            id: InputLocality.localityId(locality),
            name: `${locality.zipCode} ${locality.city}`.trim(),
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQXNCLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWpFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3Qiw0RkFBNEY7QUFDNUYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBSXhCOzs7Ozs7O0dBT0c7QUFRSCxNQUFNLE9BQU8sc0JBQ1gsU0FBUSx3QkFBc0Q7SUFzQjlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQlYsc0ZBQXNGO1FBQ3RFLGNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFN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Q3BELENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDakYsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFTyxTQUFTLENBQUMsUUFBeUI7UUFDekMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtTQUNwRCxDQUFDO0lBQ0osQ0FBQzsrR0F0TFUsc0JBQXNCO21HQUF0QixzQkFBc0IsMEhBSXRCLHFCQUFxQiwyTENwQ2xDLHl6QkE0QkEsOE5ERlkscUJBQXFCLDZEQUFFLGdCQUFnQjs7NEZBTXRDLHNCQUFzQjtrQkFQbEMsU0FBUzs4QkFDQyxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDLFlBQ3hDLG1CQUFtQixjQUNqQixJQUFJO3dEQVEwQixXQUFXO3NCQUFwRCxTQUFTO3VCQUFDLHFCQUFxQjtnQkFFeEIsZ0JBQWdCO3NCQUR2QixTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdWNoZWRDaGFuZ2VFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG9mLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRDaG9pY2VzLCBJbnB1dENob2ljZXNPcHRpb24sIElucHV0TG9jYWxpdHksIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcclxuaW1wb3J0IHsgSW5wdXRDaG9pY2VzQ29tcG9uZW50LCBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XHJcbmltcG9ydCB7IEFkZHJlc3NMb2NhbGl0eSwgVGFBZGRyZXNzTG9va3VwU2VydmljZSwgaXNOb25OdWxsYWJsZSwgdG9BcnJheSB9IGZyb20gJ0B0YS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT1VOVFJZID0gJ0JFJztcclxuLyoqIE9wdGlvbnMgcmVuZHVlcyBhdSBwbHVzIDogbGEgcmVjaGVyY2hlIGFmZmluZSwgbGUgRE9NIG5lIHBvcnRlIGphbWFpcyB1biBwYXlzIGVudGllci4gKi9cclxuY29uc3QgTUFYX1JFU1VMVFMgPSAxMDA7XHJcblxyXG50eXBlIExvY2FsaXR5VmFsdWUgPSBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGw7XHJcblxyXG4vKipcclxuICogQ2hvaXggZCd1bmUgbG9jYWxpdMOpIChjb2RlIHBvc3RhbCArIGNvbW11bmUpIGRhbnMgbGEgbGlzdGUgb2ZmaWNpZWxsZSBkdSBwYXlzLlxyXG4gKlxyXG4gKiBMYSBsaXN0ZSBjb21wbMOodGUgZHUgcGF5cyBlc3QgZ2FyZMOpZSBlbiBtw6ltb2lyZSA7IGxhIHJlY2hlcmNoZSBmaWx0cmUgY8O0dMOpXHJcbiAqIGNsaWVudC4gU2V1bCB1biBwYXlzIHNhbnMgZG9ubsOpZXMgb3V2cmUgbGEgc2Fpc2llIGxpYnJlIChjb2RlIHBvc3RhbCArIHZpbGxlKS5cclxuICogTGUgY29tcG9zYW50IHBvcnRlIGxhIHZhbGV1ciBtw6l0aWVyIChgQWRkcmVzc0xvY2FsaXR5YCkgOiBsZXMgY2hhbXBzIGludGVybmVzXHJcbiAqIG5lIG1hbmlwdWxlbnQgcXVlIGRlcyBpZGVudGlmaWFudHMgb3UgZHUgdGV4dGUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBpbXBvcnRzOiBbSW5wdXRDaG9pY2VzQ29tcG9uZW50LCBUZXh0Qm94Q29tcG9uZW50XSxcclxuICBzZWxlY3RvcjogJ3RhLWlucHV0LWxvY2FsaXR5JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHN0eWxlVXJsczogWycuL2xvY2FsaXR5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsaXR5LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0TG9jYWxpdHlDb21wb25lbnRcclxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dExvY2FsaXR5LCBMb2NhbGl0eVZhbHVlPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3lcclxue1xyXG4gIEBWaWV3Q2hpbGQoSW5wdXRDaG9pY2VzQ29tcG9uZW50KSBwcml2YXRlIF9jaG9pY2VzUmVmPzogSW5wdXRDaG9pY2VzQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2xvY2FsaXR5SXRlbVRwbCcsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgcHJpdmF0ZSBfbG9jYWxpdHlJdGVtVHBsITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyoqIGBmYWxzZWAgdGFudCBxdWUgbGUgcGF5cyBjb3VyYW50IG4nYSBwYXMgZGUgbGlzdGUgOiBvbiBiYXNjdWxlIGVuIHNhaXNpZSBsaWJyZS4gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgYXZhaWxhYmxlID0gc2lnbmFsKHRydWUpO1xyXG5cclxuICBwdWJsaWMgY2hvaWNlc0lucHV0ITogSW5wdXRDaG9pY2VzO1xyXG4gIHB1YmxpYyBjaXR5SW5wdXQhOiBJbnB1dFRleHRCb3g7XHJcbiAgcHVibGljIHppcENvZGVJbnB1dCE6IElucHV0VGV4dEJveDtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfbG9va3VwID0gaW5qZWN0KFRhQWRkcmVzc0xvb2t1cFNlcnZpY2UpO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9pc0FwcGx5aW5nVmFsdWUgPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2xvY2FsaXR5TWFwID0gbmV3IE1hcDxzdHJpbmcsIEFkZHJlc3NMb2NhbGl0eT4oKTtcclxuICAvKiogVmFsZXVycyByZcOndWVzIHF1aSBuZSBmaWd1cmVudCBwYXMgZGFucyBsYSBsaXN0ZSBvZmZpY2llbGxlIChkb25uw6llcyBow6lyaXTDqWVzKSA6IGdhcmTDqWVzIHRlbGxlcyBxdWVsbGVzLiAqL1xyXG4gIHByaXZhdGUgX29ycGhhbnMgPSBuZXcgTWFwPHN0cmluZywgQWRkcmVzc0xvY2FsaXR5PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCkge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIHRoaXMuY2hvaWNlc0lucHV0ID0gbmV3IElucHV0Q2hvaWNlcyh7XHJcbiAgICAgIGFkdmFuY2VkU2VhcmNoJDogKHNlYXJjaD86IHN0cmluZykgPT4gb2YodGhpcy5fc2VhcmNoTG9jYWxpdGllcyhzZWFyY2gpKSxcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXHJcbiAgICAgIGtleTogYCR7dGhpcy5pbnB1dC5rZXl9X2Nob2ljZXNgLFxyXG4gICAgICBsYWJlbDogdGhpcy5pbnB1dC5sYWJlbCB8fCAnZm9ybS5hZGRyZXNzLmxvY2FsaXR5JyxcclxuICAgICAgbWVzc2FnZTogdGhpcy5pbnB1dC5tZXNzYWdlLFxyXG4gICAgICBtdWx0aXBsZTogdGhpcy5pbnB1dC5tdWx0aXBsZSxcclxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxyXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNob2ljZXNJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9sb2NhbGl0eUl0ZW1UcGwgfTtcclxuICAgIHRoaXMuemlwQ29kZUlucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlucHV0LmRpc2FibGVkLFxyXG4gICAgICBrZXk6IGAke3RoaXMuaW5wdXQua2V5fV96aXBDb2RlYCxcclxuICAgICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuemlwQ29kZScsXHJcbiAgICAgIHZhbGlkYXRvcnM6IHRoaXMuaW5wdXQudmFsaWRhdG9ycyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaXR5SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXHJcbiAgICAgIGtleTogYCR7dGhpcy5pbnB1dC5rZXl9X2NpdHlgLFxyXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jaXR5JyxcclxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVW5lIHZhbGV1ciBwb3PDqWUgZGUgbCdleHTDqXJpZXVyIChwcsOpcmVtcGxpc3NhZ2UsIHJlY2hlcmNoZSBHb29nbGUpIHNlIHJlZmzDqHRlIGRhbnMgbGVzIGNoYW1wcy5cclxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKSkpO1xyXG4gICAgLy8gVW5lIHNvdW1pc3Npb24gaW52YWxpZGUgbWFycXVlIGxlIGNvbnRyw7RsZSB0b3VjaMOpIDogb24gbGUgcsOpcGVyY3V0ZSBhdXggY2hhbXBzLFxyXG4gICAgLy8gc2lub24gbGV1cnMgbWVzc2FnZXMgZCdlcnJldXIgcmVzdGVudCBpbnZpc2libGVzLlxyXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgICBjb250cm9sLmV2ZW50c1xyXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hlZENoYW5nZUV2ZW50ICYmIGV2ZW50LnRvdWNoZWQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9maWVsZHMoKS5mb3JFYWNoKGZpZWxkID0+IGZpZWxkLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXHJcbiAgICAgICh0aGlzLmlucHV0LmNvdW50cnkkID8/IG9mKERFRkFVTFRfQ09VTlRSWSkpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgLy8gTGUgY2hvaXggZXN0IHZpZMOpIGTDqHMgcXVlIGxlIHBheXMgY2hhbmdlLCBhdmFudCBtw6ptZSBxdWUgbGEgbm91dmVsbGUgbGlzdGVcclxuICAgICAgICAgIC8vIG4nYXJyaXZlIDogdW5lIHZhbGV1ciBwb3PDqWUgZW50cmUtdGVtcHMgbidlc3QgYWluc2kgamFtYWlzIMOpY3Jhc8OpZS5cclxuICAgICAgICAgIHRhcChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzTm9uTnVsbGFibGUodGhpcy5fY3VycmVudENvdW50cnkpICYmIGNvdW50cnkgIT09IHRoaXMuX2N1cnJlbnRDb3VudHJ5KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLl9sb29rdXAuZ2V0Q291bnRyeVBvc3RhbENvZGVzKGNvdW50cnkpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKGxvY2FsaXRpZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fbG9jYWxpdGllcyA9IGxvY2FsaXRpZXM7XHJcbiAgICAgICAgICB0aGlzLl9sb2NhbGl0eU1hcCA9IG5ldyBNYXAobG9jYWxpdGllcy5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSkpO1xyXG4gICAgICAgICAgdGhpcy5hdmFpbGFibGUuc2V0KGxvY2FsaXRpZXMubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgICB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKTtcclxuICAgICAgICAgIHRoaXMuX2Nob2ljZXNSZWY/LnJlZnJlc2goKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2ZpZWxkcygpLmZvckVhY2goZmllbGQgPT4gZmllbGQuZGVzdHJveSgpKTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaG9pY2VzQ2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYWxpdGllcyA9ICh0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA/PyBbXSlcclxuICAgICAgLm1hcChpZCA9PiB0aGlzLl9sb2NhbGl0eU1hcC5nZXQoaWQpID8/IHRoaXMuX29ycGhhbnMuZ2V0KGlkKSlcclxuICAgICAgLmZpbHRlcihpc05vbk51bGxhYmxlKTtcclxuICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuX3BhY2sobG9jYWxpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRnJlZUlucHV0Q2hhbmdlZCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgemlwQ29kZSA9IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XHJcbiAgICBjb25zdCBjaXR5ID0gdGhpcy5jaXR5SW5wdXQudmFsdWU/LnRyaW0oKSA/PyAnJztcclxuICAgIGlmICghemlwQ29kZSAmJiAhY2l0eSkge1xyXG4gICAgICB0aGlzLl9zZXRWYWx1ZShudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0VmFsdWUoXHJcbiAgICAgIHRoaXMuX3BhY2soW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICBjb3VudHJ5OiB0aGlzLl9jdXJyZW50Q291bnRyeSA/PyBERUZBVUxUX0NPVU5UUlksXHJcbiAgICAgICAgICBsYXRpdHVkZTogbnVsbCxcclxuICAgICAgICAgIGxvbmdpdHVkZTogbnVsbCxcclxuICAgICAgICAgIHppcENvZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWVsZHMoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMuY2hvaWNlc0lucHV0LCB0aGlzLmNpdHlJbnB1dCwgdGhpcy56aXBDb2RlSW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcGFjayhsb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSk6IExvY2FsaXR5VmFsdWUge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQubXVsdGlwbGUgPyBsb2NhbGl0aWVzIDogKGxvY2FsaXRpZXNbMF0gPz8gbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogTG9jYWxpdHlWYWx1ZSkge1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlZmzDqHRlIGBpbnB1dC52YWx1ZWAgZGFucyBsZXMgY2hhbXBzIOKAlCBzYW5zIHJlcGFzc2VyIHBhciBsZXVycyBgdmFsdWVDaGFuZ2VkYC4gKi9cclxuICBwcml2YXRlIF9hcHBseVZhbHVlVG9GaWVsZHMoKSB7XHJcbiAgICBjb25zdCBsb2NhbGl0aWVzID0gdG9BcnJheSh0aGlzLmlucHV0LnZhbHVlKS5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XHJcbiAgICB0aGlzLl9vcnBoYW5zID0gbmV3IE1hcChcclxuICAgICAgbG9jYWxpdGllc1xyXG4gICAgICAgIC5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSBhcyBjb25zdClcclxuICAgICAgICAuZmlsdGVyKChbaWRdKSA9PiAhdGhpcy5fbG9jYWxpdHlNYXAuaGFzKGlkKSlcclxuICAgICk7XHJcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xyXG4gICAgY29uc3QgaWRzID0gbG9jYWxpdGllcy5tYXAobG9jYWxpdHkgPT4gSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSk7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jaG9pY2VzSW5wdXQudmFsdWUgPz8gW107XHJcbiAgICBpZiAoaWRzLmxlbmd0aCAhPT0gY3VycmVudC5sZW5ndGggfHwgaWRzLnNvbWUoaWQgPT4gIWN1cnJlbnQuaW5jbHVkZXMoaWQpKSkge1xyXG4gICAgICB0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA9IGlkcztcclxuICAgIH1cclxuICAgIGNvbnN0IGZpcnN0ID0gbG9jYWxpdGllc1swXTtcclxuICAgIHRoaXMuemlwQ29kZUlucHV0LnZhbHVlID0gZmlyc3Q/LnppcENvZGUgPz8gJyc7XHJcbiAgICB0aGlzLmNpdHlJbnB1dC52YWx1ZSA9IGZpcnN0Py5jaXR5ID8/ICcnO1xyXG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25zIHByb3Bvc8OpZXMgOiBsZXMgdmFsZXVycyBkw6lqw6AgY2hvaXNpZXMgZCdhYm9yZCAoeSBjb21wcmlzIGNlbGxlcyBob3JzIGxpc3RlLFxyXG4gICAqIHBvdXIgcXUnZWxsZXMgcmVzdGVudCBsaXNpYmxlcyBldCByZXRpcmFibGVzKSwgcHVpcyBsYSBsaXN0ZSBmaWx0csOpZSBldCBwbGFmb25uw6llLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NlYXJjaExvY2FsaXRpZXMoc2VhcmNoPzogc3RyaW5nKTogSW5wdXRDaG9pY2VzT3B0aW9uW10ge1xyXG4gICAgY29uc3QgdGVybSA9IChzZWFyY2ggPz8gJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMuaW5wdXQudmFsdWUpLmZpbHRlcihpc05vbk51bGxhYmxlKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gbmV3IFNldChzZWxlY3RlZC5tYXAobG9jYWxpdHkgPT4gSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSkpO1xyXG4gICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMuX2xvY2FsaXRpZXMuZmlsdGVyKFxyXG4gICAgICBsb2NhbGl0eSA9PlxyXG4gICAgICAgICFzZWxlY3RlZElkcy5oYXMoSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSkgJiZcclxuICAgICAgICAoIXRlcm0gfHwgYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gWy4uLnNlbGVjdGVkLCAuLi5tYXRjaGVkLnNsaWNlKDAsIE1BWF9SRVNVTFRTKV0ubWFwKGxvY2FsaXR5ID0+IHRoaXMuX3RvT3B0aW9uKGxvY2FsaXR5KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90b09wdGlvbihsb2NhbGl0eTogQWRkcmVzc0xvY2FsaXR5KTogSW5wdXRDaG9pY2VzT3B0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGxvY2FsaXR5LFxyXG4gICAgICBpZDogSW5wdXRMb2NhbGl0eS5sb2NhbGl0eUlkKGxvY2FsaXR5KSxcclxuICAgICAgbmFtZTogYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAudHJpbSgpLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiQGlmICh0aGlzLmF2YWlsYWJsZSgpKSB7XG4gIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgW2lucHV0XT1cInRoaXMuY2hvaWNlc0lucHV0XCJcbiAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25DaG9pY2VzQ2hhbmdlZCgpXCJcbiAgPjwvdGEtaW5wdXQtY2hvaWNlcz5cbn0gQGVsc2Uge1xuICA8ZGl2IGNsYXNzPVwiZ3JpZCBnLXNwYWNlLXNtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS10aGlyZFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuemlwQ29kZUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkZyZWVJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0d28tdGhpcmRzXCI+XG4gICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICBbaW5wdXRdPVwidGhpcy5jaXR5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uRnJlZUlucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG48bmctdGVtcGxhdGUgI2xvY2FsaXR5SXRlbVRwbCBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eS1vcHRpb25cIj57eyBpdGVtLnppcENvZGUgfX0ge3sgaXRlbS5jaXR5IH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==