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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQXNCLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWpFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3Qiw0RkFBNEY7QUFDNUYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBSXhCOzs7Ozs7O0dBT0c7QUFRSCxNQUFNLE9BQU8sc0JBQ1gsU0FBUSx3QkFBc0Q7SUFzQjlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQlYsc0ZBQXNGO1FBQ3RFLGNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFN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Q3BELENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDakYsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFTyxTQUFTLENBQUMsUUFBeUI7UUFDekMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtTQUNwRCxDQUFDO0lBQ0osQ0FBQzsrR0F0TFUsc0JBQXNCO21HQUF0QixzQkFBc0IsMEhBSXRCLHFCQUFxQiwyTENwQ2xDLHl6QkE0QkEsOE5ERlkscUJBQXFCLDZEQUFFLGdCQUFnQjs7NEZBTXRDLHNCQUFzQjtrQkFQbEMsU0FBUzs4QkFDQyxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDLFlBQ3hDLG1CQUFtQixjQUNqQixJQUFJO3dEQVEwQixXQUFXO3NCQUFwRCxTQUFTO3VCQUFDLHFCQUFxQjtnQkFFeEIsZ0JBQWdCO3NCQUR2QixTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb3VjaGVkQ2hhbmdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG9mLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbnB1dENob2ljZXMsIElucHV0Q2hvaWNlc09wdGlvbiwgSW5wdXRMb2NhbGl0eSwgSW5wdXRUZXh0Qm94IH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgSW5wdXRDaG9pY2VzQ29tcG9uZW50LCBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBBZGRyZXNzTG9jYWxpdHksIFRhQWRkcmVzc0xvb2t1cFNlcnZpY2UsIGlzTm9uTnVsbGFibGUsIHRvQXJyYXkgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0NPVU5UUlkgPSAnQkUnO1xuLyoqIE9wdGlvbnMgcmVuZHVlcyBhdSBwbHVzIDogbGEgcmVjaGVyY2hlIGFmZmluZSwgbGUgRE9NIG5lIHBvcnRlIGphbWFpcyB1biBwYXlzIGVudGllci4gKi9cbmNvbnN0IE1BWF9SRVNVTFRTID0gMTAwO1xuXG50eXBlIExvY2FsaXR5VmFsdWUgPSBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGw7XG5cbi8qKlxuICogQ2hvaXggZCd1bmUgbG9jYWxpdMOpIChjb2RlIHBvc3RhbCArIGNvbW11bmUpIGRhbnMgbGEgbGlzdGUgb2ZmaWNpZWxsZSBkdSBwYXlzLlxuICpcbiAqIExhIGxpc3RlIGNvbXBsw6h0ZSBkdSBwYXlzIGVzdCBnYXJkw6llIGVuIG3DqW1vaXJlIDsgbGEgcmVjaGVyY2hlIGZpbHRyZSBjw7R0w6lcbiAqIGNsaWVudC4gU2V1bCB1biBwYXlzIHNhbnMgZG9ubsOpZXMgb3V2cmUgbGEgc2Fpc2llIGxpYnJlIChjb2RlIHBvc3RhbCArIHZpbGxlKS5cbiAqIExlIGNvbXBvc2FudCBwb3J0ZSBsYSB2YWxldXIgbcOpdGllciAoYEFkZHJlc3NMb2NhbGl0eWApIDogbGVzIGNoYW1wcyBpbnRlcm5lc1xuICogbmUgbWFuaXB1bGVudCBxdWUgZGVzIGlkZW50aWZpYW50cyBvdSBkdSB0ZXh0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIGltcG9ydHM6IFtJbnB1dENob2ljZXNDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnRdLFxuICBzZWxlY3RvcjogJ3RhLWlucHV0LWxvY2FsaXR5JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYWxpdHkuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsaXR5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRMb2NhbGl0eUNvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dExvY2FsaXR5LCBMb2NhbGl0eVZhbHVlPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIEBWaWV3Q2hpbGQoSW5wdXRDaG9pY2VzQ29tcG9uZW50KSBwcml2YXRlIF9jaG9pY2VzUmVmPzogSW5wdXRDaG9pY2VzQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdsb2NhbGl0eUl0ZW1UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIF9sb2NhbGl0eUl0ZW1UcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKiBgZmFsc2VgIHRhbnQgcXVlIGxlIHBheXMgY291cmFudCBuJ2EgcGFzIGRlIGxpc3RlIDogb24gYmFzY3VsZSBlbiBzYWlzaWUgbGlicmUuICovXG4gIHB1YmxpYyByZWFkb25seSBhdmFpbGFibGUgPSBzaWduYWwodHJ1ZSk7XG5cbiAgcHVibGljIGNob2ljZXNJbnB1dCE6IElucHV0Q2hvaWNlcztcbiAgcHVibGljIGNpdHlJbnB1dCE6IElucHV0VGV4dEJveDtcbiAgcHVibGljIHppcENvZGVJbnB1dCE6IElucHV0VGV4dEJveDtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9sb29rdXAgPSBpbmplY3QoVGFBZGRyZXNzTG9va3VwU2VydmljZSk7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvY2FsaXRpZXM6IEFkZHJlc3NMb2NhbGl0eVtdID0gW107XG4gIHByaXZhdGUgX2xvY2FsaXR5TWFwID0gbmV3IE1hcDxzdHJpbmcsIEFkZHJlc3NMb2NhbGl0eT4oKTtcbiAgLyoqIFZhbGV1cnMgcmXDp3VlcyBxdWkgbmUgZmlndXJlbnQgcGFzIGRhbnMgbGEgbGlzdGUgb2ZmaWNpZWxsZSAoZG9ubsOpZXMgaMOpcml0w6llcykgOiBnYXJkw6llcyB0ZWxsZXMgcXVlbGxlcy4gKi9cbiAgcHJpdmF0ZSBfb3JwaGFucyA9IG5ldyBNYXA8c3RyaW5nLCBBZGRyZXNzTG9jYWxpdHk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5jaG9pY2VzSW5wdXQgPSBuZXcgSW5wdXRDaG9pY2VzKHtcbiAgICAgIGFkdmFuY2VkU2VhcmNoJDogKHNlYXJjaD86IHN0cmluZykgPT4gb2YodGhpcy5fc2VhcmNoTG9jYWxpdGllcyhzZWFyY2gpKSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlucHV0LmRpc2FibGVkLFxuICAgICAga2V5OiBgJHt0aGlzLmlucHV0LmtleX1fY2hvaWNlc2AsXG4gICAgICBsYWJlbDogdGhpcy5pbnB1dC5sYWJlbCB8fCAnZm9ybS5hZGRyZXNzLmxvY2FsaXR5JyxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaW5wdXQubWVzc2FnZSxcbiAgICAgIG11bHRpcGxlOiB0aGlzLmlucHV0Lm11bHRpcGxlLFxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxuICAgICAgd2l0aFNlYXJjaDogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmNob2ljZXNJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9sb2NhbGl0eUl0ZW1UcGwgfTtcbiAgICB0aGlzLnppcENvZGVJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXG4gICAgICBrZXk6IGAke3RoaXMuaW5wdXQua2V5fV96aXBDb2RlYCxcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLnppcENvZGUnLFxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxuICAgIH0pO1xuICAgIHRoaXMuY2l0eUlucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAgICBkaXNhYmxlZDogdGhpcy5pbnB1dC5kaXNhYmxlZCxcbiAgICAgIGtleTogYCR7dGhpcy5pbnB1dC5rZXl9X2NpdHlgLFxuICAgICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuY2l0eScsXG4gICAgICB2YWxpZGF0b3JzOiB0aGlzLmlucHV0LnZhbGlkYXRvcnMsXG4gICAgfSk7XG5cbiAgICAvLyBVbmUgdmFsZXVyIHBvc8OpZSBkZSBsJ2V4dMOpcmlldXIgKHByw6lyZW1wbGlzc2FnZSwgcmVjaGVyY2hlIEdvb2dsZSkgc2UgcmVmbMOodGUgZGFucyBsZXMgY2hhbXBzLlxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKSkpO1xuICAgIC8vIFVuZSBzb3VtaXNzaW9uIGludmFsaWRlIG1hcnF1ZSBsZSBjb250csO0bGUgdG91Y2jDqSA6IG9uIGxlIHLDqXBlcmN1dGUgYXV4IGNoYW1wcyxcbiAgICAvLyBzaW5vbiBsZXVycyBtZXNzYWdlcyBkJ2VycmV1ciByZXN0ZW50IGludmlzaWJsZXMuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICBjb250cm9sLmV2ZW50c1xuICAgICAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIFRvdWNoZWRDaGFuZ2VFdmVudCAmJiBldmVudC50b3VjaGVkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2ZpZWxkcygpLmZvckVhY2goZmllbGQgPT4gZmllbGQuZm9ybUNvbnRyb2w/Lm1hcmtBc1RvdWNoZWQoKSkpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICh0aGlzLmlucHV0LmNvdW50cnkkID8/IG9mKERFRkFVTFRfQ09VTlRSWSkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgLy8gTGUgY2hvaXggZXN0IHZpZMOpIGTDqHMgcXVlIGxlIHBheXMgY2hhbmdlLCBhdmFudCBtw6ptZSBxdWUgbGEgbm91dmVsbGUgbGlzdGVcbiAgICAgICAgICAvLyBuJ2Fycml2ZSA6IHVuZSB2YWxldXIgcG9zw6llIGVudHJlLXRlbXBzIG4nZXN0IGFpbnNpIGphbWFpcyDDqWNyYXPDqWUuXG4gICAgICAgICAgdGFwKGNvdW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTm9uTnVsbGFibGUodGhpcy5fY3VycmVudENvdW50cnkpICYmIGNvdW50cnkgIT09IHRoaXMuX2N1cnJlbnRDb3VudHJ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN3aXRjaE1hcChjb3VudHJ5ID0+IHRoaXMuX2xvb2t1cC5nZXRDb3VudHJ5UG9zdGFsQ29kZXMoY291bnRyeSkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGl0aWVzID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2NhbGl0aWVzID0gbG9jYWxpdGllcztcbiAgICAgICAgICB0aGlzLl9sb2NhbGl0eU1hcCA9IG5ldyBNYXAobG9jYWxpdGllcy5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSkpO1xuICAgICAgICAgIHRoaXMuYXZhaWxhYmxlLnNldChsb2NhbGl0aWVzLmxlbmd0aCA+IDApO1xuICAgICAgICAgIHRoaXMuX2FwcGx5VmFsdWVUb0ZpZWxkcygpO1xuICAgICAgICAgIHRoaXMuX2Nob2ljZXNSZWY/LnJlZnJlc2goKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZpZWxkcygpLmZvckVhY2goZmllbGQgPT4gZmllbGQuZGVzdHJveSgpKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hvaWNlc0NoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsb2NhbGl0aWVzID0gKHRoaXMuY2hvaWNlc0lucHV0LnZhbHVlID8/IFtdKVxuICAgICAgLm1hcChpZCA9PiB0aGlzLl9sb2NhbGl0eU1hcC5nZXQoaWQpID8/IHRoaXMuX29ycGhhbnMuZ2V0KGlkKSlcbiAgICAgIC5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gICAgdGhpcy5fc2V0VmFsdWUodGhpcy5fcGFjayhsb2NhbGl0aWVzKSk7XG4gIH1cblxuICBwdWJsaWMgb25GcmVlSW5wdXRDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgemlwQ29kZSA9IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XG4gICAgY29uc3QgY2l0eSA9IHRoaXMuY2l0eUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XG4gICAgaWYgKCF6aXBDb2RlICYmICFjaXR5KSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0VmFsdWUoXG4gICAgICB0aGlzLl9wYWNrKFtcbiAgICAgICAge1xuICAgICAgICAgIGNpdHksXG4gICAgICAgICAgY291bnRyeTogdGhpcy5fY3VycmVudENvdW50cnkgPz8gREVGQVVMVF9DT1VOVFJZLFxuICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxuICAgICAgICAgIGxvbmdpdHVkZTogbnVsbCxcbiAgICAgICAgICB6aXBDb2RlLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmllbGRzKCkge1xuICAgIHJldHVybiBbdGhpcy5jaG9pY2VzSW5wdXQsIHRoaXMuY2l0eUlucHV0LCB0aGlzLnppcENvZGVJbnB1dF07XG4gIH1cblxuICBwcml2YXRlIF9wYWNrKGxvY2FsaXRpZXM6IEFkZHJlc3NMb2NhbGl0eVtdKTogTG9jYWxpdHlWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQubXVsdGlwbGUgPyBsb2NhbGl0aWVzIDogKGxvY2FsaXRpZXNbMF0gPz8gbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogTG9jYWxpdHlWYWx1ZSkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBSZWZsw6h0ZSBgaW5wdXQudmFsdWVgIGRhbnMgbGVzIGNoYW1wcyDigJQgc2FucyByZXBhc3NlciBwYXIgbGV1cnMgYHZhbHVlQ2hhbmdlZGAuICovXG4gIHByaXZhdGUgX2FwcGx5VmFsdWVUb0ZpZWxkcygpIHtcbiAgICBjb25zdCBsb2NhbGl0aWVzID0gdG9BcnJheSh0aGlzLmlucHV0LnZhbHVlKS5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gICAgdGhpcy5fb3JwaGFucyA9IG5ldyBNYXAoXG4gICAgICBsb2NhbGl0aWVzXG4gICAgICAgIC5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSBhcyBjb25zdClcbiAgICAgICAgLmZpbHRlcigoW2lkXSkgPT4gIXRoaXMuX2xvY2FsaXR5TWFwLmhhcyhpZCkpXG4gICAgKTtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIGNvbnN0IGlkcyA9IGxvY2FsaXRpZXMubWFwKGxvY2FsaXR5ID0+IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA/PyBbXTtcbiAgICBpZiAoaWRzLmxlbmd0aCAhPT0gY3VycmVudC5sZW5ndGggfHwgaWRzLnNvbWUoaWQgPT4gIWN1cnJlbnQuaW5jbHVkZXMoaWQpKSkge1xuICAgICAgdGhpcy5jaG9pY2VzSW5wdXQudmFsdWUgPSBpZHM7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0ID0gbG9jYWxpdGllc1swXTtcbiAgICB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA9IGZpcnN0Py56aXBDb2RlID8/ICcnO1xuICAgIHRoaXMuY2l0eUlucHV0LnZhbHVlID0gZmlyc3Q/LmNpdHkgPz8gJyc7XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9ucyBwcm9wb3PDqWVzIDogbGVzIHZhbGV1cnMgZMOpasOgIGNob2lzaWVzIGQnYWJvcmQgKHkgY29tcHJpcyBjZWxsZXMgaG9ycyBsaXN0ZSxcbiAgICogcG91ciBxdSdlbGxlcyByZXN0ZW50IGxpc2libGVzIGV0IHJldGlyYWJsZXMpLCBwdWlzIGxhIGxpc3RlIGZpbHRyw6llIGV0IHBsYWZvbm7DqWUuXG4gICAqL1xuICBwcml2YXRlIF9zZWFyY2hMb2NhbGl0aWVzKHNlYXJjaD86IHN0cmluZyk6IElucHV0Q2hvaWNlc09wdGlvbltdIHtcbiAgICBjb25zdCB0ZXJtID0gKHNlYXJjaCA/PyAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMuaW5wdXQudmFsdWUpLmZpbHRlcihpc05vbk51bGxhYmxlKTtcbiAgICBjb25zdCBzZWxlY3RlZElkcyA9IG5ldyBTZXQoc2VsZWN0ZWQubWFwKGxvY2FsaXR5ID0+IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpKTtcbiAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5fbG9jYWxpdGllcy5maWx0ZXIoXG4gICAgICBsb2NhbGl0eSA9PlxuICAgICAgICAhc2VsZWN0ZWRJZHMuaGFzKElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpICYmXG4gICAgICAgICghdGVybSB8fCBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgICk7XG4gICAgcmV0dXJuIFsuLi5zZWxlY3RlZCwgLi4ubWF0Y2hlZC5zbGljZSgwLCBNQVhfUkVTVUxUUyldLm1hcChsb2NhbGl0eSA9PiB0aGlzLl90b09wdGlvbihsb2NhbGl0eSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9PcHRpb24obG9jYWxpdHk6IEFkZHJlc3NMb2NhbGl0eSk6IElucHV0Q2hvaWNlc09wdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGxvY2FsaXR5LFxuICAgICAgaWQ6IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksXG4gICAgICBuYW1lOiBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YC50cmltKCksXG4gICAgfTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmF2YWlsYWJsZSgpKSB7XG4gIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgW2lucHV0XT1cInRoaXMuY2hvaWNlc0lucHV0XCJcbiAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25DaG9pY2VzQ2hhbmdlZCgpXCJcbiAgPjwvdGEtaW5wdXQtY2hvaWNlcz5cbn0gQGVsc2Uge1xuICA8ZGl2IGNsYXNzPVwiZ3JpZCBnLXNwYWNlLXNtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS10aGlyZFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuemlwQ29kZUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkZyZWVJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0d28tdGhpcmRzXCI+XG4gICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICBbaW5wdXRdPVwidGhpcy5jaXR5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uRnJlZUlucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG48bmctdGVtcGxhdGUgI2xvY2FsaXR5SXRlbVRwbCBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eS1vcHRpb25cIj57eyBpdGVtLnppcENvZGUgfX0ge3sgaXRlbS5jaXR5IH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==