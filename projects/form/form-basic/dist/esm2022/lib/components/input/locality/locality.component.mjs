import { Component, inject, signal, viewChild } from '@angular/core';
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
        this._choicesRef = viewChild(InputChoicesComponent);
        this._localityItemTpl = viewChild.required('localityItemTpl');
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
        this.choicesInput.choiceTemplate = { one: this._localityItemTpl() };
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
            this._choicesRef()?.refresh();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputLocalityComponent, isStandalone: true, selector: "ta-input-locality", viewQueries: [{ propertyName: "_choicesRef", first: true, predicate: InputChoicesComponent, descendants: true, isSignal: true }, { propertyName: "_localityItemTpl", first: true, predicate: ["localityItemTpl"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "@if (this.available()) {\n  <ta-input-choices\n    [input]=\"this.choicesInput\"\n    [standalone]=\"true\"\n    (valueChanged)=\"this.onChoicesChanged()\"\n  ></ta-input-choices>\n} @else {\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n}\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n", styles: [":host{display:block}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputLocalityComponent, decorators: [{
            type: Component,
            args: [{ imports: [InputChoicesComponent, TextBoxComponent], selector: 'ta-input-locality', standalone: true, template: "@if (this.available()) {\n  <ta-input-choices\n    [input]=\"this.choicesInput\"\n    [standalone]=\"true\"\n    (valueChanged)=\"this.onChoicesChanged()\"\n  ></ta-input-choices>\n} @else {\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onFreeInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n}\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n", styles: [":host{display:block}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQXNCLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWpFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztBQUM3Qiw0RkFBNEY7QUFDNUYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBSXhCOzs7Ozs7O0dBT0c7QUFRSCxNQUFNLE9BQU8sc0JBQ1gsU0FBUSx3QkFBc0Q7SUFxQjlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFuQk8sZ0JBQVcsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxxQkFBZ0Is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SSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3JDLFFBQVEsQ0FBQyxFQUFFLENBQ1QsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNqRixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVPLFNBQVMsQ0FBQyxRQUF5QjtRQUN6QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO1NBQ3BELENBQUM7SUFDSixDQUFDOytHQXJMVSxzQkFBc0I7bUdBQXRCLHNCQUFzQiwwSEFJUSxxQkFBcUIsNk1DcENoRSx5ekJBNEJBLDhOREZZLHFCQUFxQiw2REFBRSxnQkFBZ0I7OzRGQU10QyxzQkFBc0I7a0JBUGxDLFNBQVM7OEJBQ0MsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQyxZQUN4QyxtQkFBbUIsY0FDakIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBpbmplY3QsIHNpZ25hbCwgdmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb3VjaGVkQ2hhbmdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG9mLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbnB1dENob2ljZXMsIElucHV0Q2hvaWNlc09wdGlvbiwgSW5wdXRMb2NhbGl0eSwgSW5wdXRUZXh0Qm94IH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgSW5wdXRDaG9pY2VzQ29tcG9uZW50LCBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBBZGRyZXNzTG9jYWxpdHksIFRhQWRkcmVzc0xvb2t1cFNlcnZpY2UsIGlzTm9uTnVsbGFibGUsIHRvQXJyYXkgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0NPVU5UUlkgPSAnQkUnO1xuLyoqIE9wdGlvbnMgcmVuZHVlcyBhdSBwbHVzIDogbGEgcmVjaGVyY2hlIGFmZmluZSwgbGUgRE9NIG5lIHBvcnRlIGphbWFpcyB1biBwYXlzIGVudGllci4gKi9cbmNvbnN0IE1BWF9SRVNVTFRTID0gMTAwO1xuXG50eXBlIExvY2FsaXR5VmFsdWUgPSBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGw7XG5cbi8qKlxuICogQ2hvaXggZCd1bmUgbG9jYWxpdMOpIChjb2RlIHBvc3RhbCArIGNvbW11bmUpIGRhbnMgbGEgbGlzdGUgb2ZmaWNpZWxsZSBkdSBwYXlzLlxuICpcbiAqIExhIGxpc3RlIGNvbXBsw6h0ZSBkdSBwYXlzIGVzdCBnYXJkw6llIGVuIG3DqW1vaXJlIDsgbGEgcmVjaGVyY2hlIGZpbHRyZSBjw7R0w6lcbiAqIGNsaWVudC4gU2V1bCB1biBwYXlzIHNhbnMgZG9ubsOpZXMgb3V2cmUgbGEgc2Fpc2llIGxpYnJlIChjb2RlIHBvc3RhbCArIHZpbGxlKS5cbiAqIExlIGNvbXBvc2FudCBwb3J0ZSBsYSB2YWxldXIgbcOpdGllciAoYEFkZHJlc3NMb2NhbGl0eWApIDogbGVzIGNoYW1wcyBpbnRlcm5lc1xuICogbmUgbWFuaXB1bGVudCBxdWUgZGVzIGlkZW50aWZpYW50cyBvdSBkdSB0ZXh0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIGltcG9ydHM6IFtJbnB1dENob2ljZXNDb21wb25lbnQsIFRleHRCb3hDb21wb25lbnRdLFxuICBzZWxlY3RvcjogJ3RhLWlucHV0LWxvY2FsaXR5JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc3R5bGVVcmw6ICcuL2xvY2FsaXR5LmNvbXBvbmVudC5zY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsaXR5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRMb2NhbGl0eUNvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dExvY2FsaXR5LCBMb2NhbGl0eVZhbHVlPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Nob2ljZXNSZWYgPSB2aWV3Q2hpbGQoSW5wdXRDaG9pY2VzQ29tcG9uZW50KTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxpdHlJdGVtVHBsID0gdmlld0NoaWxkLnJlcXVpcmVkPFRlbXBsYXRlUmVmPHVua25vd24+PignbG9jYWxpdHlJdGVtVHBsJyk7XG5cbiAgLyoqIGBmYWxzZWAgdGFudCBxdWUgbGUgcGF5cyBjb3VyYW50IG4nYSBwYXMgZGUgbGlzdGUgOiBvbiBiYXNjdWxlIGVuIHNhaXNpZSBsaWJyZS4gKi9cbiAgcHVibGljIHJlYWRvbmx5IGF2YWlsYWJsZSA9IHNpZ25hbCh0cnVlKTtcblxuICBwdWJsaWMgY2hvaWNlc0lucHV0ITogSW5wdXRDaG9pY2VzO1xuICBwdWJsaWMgY2l0eUlucHV0ITogSW5wdXRUZXh0Qm94O1xuICBwdWJsaWMgemlwQ29kZUlucHV0ITogSW5wdXRUZXh0Qm94O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvb2t1cCA9IGluamVjdChUYUFkZHJlc3NMb29rdXBTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfY3VycmVudENvdW50cnk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9pc0FwcGx5aW5nVmFsdWUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9jYWxpdGllczogQWRkcmVzc0xvY2FsaXR5W10gPSBbXTtcbiAgcHJpdmF0ZSBfbG9jYWxpdHlNYXAgPSBuZXcgTWFwPHN0cmluZywgQWRkcmVzc0xvY2FsaXR5PigpO1xuICAvKiogVmFsZXVycyByZcOndWVzIHF1aSBuZSBmaWd1cmVudCBwYXMgZGFucyBsYSBsaXN0ZSBvZmZpY2llbGxlIChkb25uw6llcyBow6lyaXTDqWVzKSA6IGdhcmTDqWVzIHRlbGxlcyBxdWVsbGVzLiAqL1xuICBwcml2YXRlIF9vcnBoYW5zID0gbmV3IE1hcDxzdHJpbmcsIEFkZHJlc3NMb2NhbGl0eT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25Gb3JtLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmNob2ljZXNJbnB1dCA9IG5ldyBJbnB1dENob2ljZXMoe1xuICAgICAgYWR2YW5jZWRTZWFyY2gkOiAoc2VhcmNoPzogc3RyaW5nKSA9PiBvZih0aGlzLl9zZWFyY2hMb2NhbGl0aWVzKHNlYXJjaCkpLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXG4gICAgICBrZXk6IGAke3RoaXMuaW5wdXQua2V5fV9jaG9pY2VzYCxcbiAgICAgIGxhYmVsOiB0aGlzLmlucHV0LmxhYmVsIHx8ICdmb3JtLmFkZHJlc3MubG9jYWxpdHknLFxuICAgICAgbWVzc2FnZTogdGhpcy5pbnB1dC5tZXNzYWdlLFxuICAgICAgbXVsdGlwbGU6IHRoaXMuaW5wdXQubXVsdGlwbGUsXG4gICAgICB2YWxpZGF0b3JzOiB0aGlzLmlucHV0LnZhbGlkYXRvcnMsXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuY2hvaWNlc0lucHV0LmNob2ljZVRlbXBsYXRlID0geyBvbmU6IHRoaXMuX2xvY2FsaXR5SXRlbVRwbCgpIH07XG4gICAgdGhpcy56aXBDb2RlSW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlucHV0LmRpc2FibGVkLFxuICAgICAga2V5OiBgJHt0aGlzLmlucHV0LmtleX1femlwQ29kZWAsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy56aXBDb2RlJyxcbiAgICAgIHZhbGlkYXRvcnM6IHRoaXMuaW5wdXQudmFsaWRhdG9ycyxcbiAgICB9KTtcbiAgICB0aGlzLmNpdHlJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgICAgZGlzYWJsZWQ6IHRoaXMuaW5wdXQuZGlzYWJsZWQsXG4gICAgICBrZXk6IGAke3RoaXMuaW5wdXQua2V5fV9jaXR5YCxcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmNpdHknLFxuICAgICAgdmFsaWRhdG9yczogdGhpcy5pbnB1dC52YWxpZGF0b3JzLFxuICAgIH0pO1xuXG4gICAgLy8gVW5lIHZhbGV1ciBwb3PDqWUgZGUgbCdleHTDqXJpZXVyIChwcsOpcmVtcGxpc3NhZ2UsIHJlY2hlcmNoZSBHb29nbGUpIHNlIHJlZmzDqHRlIGRhbnMgbGVzIGNoYW1wcy5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbih0aGlzLmlucHV0LmNoYW5nZVZhbHVlJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fYXBwbHlWYWx1ZVRvRmllbGRzKCkpKTtcbiAgICAvLyBVbmUgc291bWlzc2lvbiBpbnZhbGlkZSBtYXJxdWUgbGUgY29udHLDtGxlIHRvdWNow6kgOiBvbiBsZSByw6lwZXJjdXRlIGF1eCBjaGFtcHMsXG4gICAgLy8gc2lub24gbGV1cnMgbWVzc2FnZXMgZCdlcnJldXIgcmVzdGVudCBpbnZpc2libGVzLlxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmlucHV0LmZvcm1Db250cm9sO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgY29udHJvbC5ldmVudHNcbiAgICAgICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBUb3VjaGVkQ2hhbmdlRXZlbnQgJiYgZXZlbnQudG91Y2hlZCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9maWVsZHMoKS5mb3JFYWNoKGZpZWxkID0+IGZpZWxkLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkpKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAodGhpcy5pbnB1dC5jb3VudHJ5JCA/PyBvZihERUZBVUxUX0NPVU5UUlkpKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIC8vIExlIGNob2l4IGVzdCB2aWTDqSBkw6hzIHF1ZSBsZSBwYXlzIGNoYW5nZSwgYXZhbnQgbcOqbWUgcXVlIGxhIG5vdXZlbGxlIGxpc3RlXG4gICAgICAgICAgLy8gbidhcnJpdmUgOiB1bmUgdmFsZXVyIHBvc8OpZSBlbnRyZS10ZW1wcyBuJ2VzdCBhaW5zaSBqYW1haXMgw6ljcmFzw6llLlxuICAgICAgICAgIHRhcChjb3VudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc05vbk51bGxhYmxlKHRoaXMuX2N1cnJlbnRDb3VudHJ5KSAmJiBjb3VudHJ5ICE9PSB0aGlzLl9jdXJyZW50Q291bnRyeSkge1xuICAgICAgICAgICAgICB0aGlzLl9zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLl9sb29rdXAuZ2V0Q291bnRyeVBvc3RhbENvZGVzKGNvdW50cnkpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobG9jYWxpdGllcyA9PiB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxpdGllcyA9IGxvY2FsaXRpZXM7XG4gICAgICAgICAgdGhpcy5fbG9jYWxpdHlNYXAgPSBuZXcgTWFwKGxvY2FsaXRpZXMubWFwKGxvY2FsaXR5ID0+IFtJbnB1dExvY2FsaXR5LmxvY2FsaXR5SWQobG9jYWxpdHkpLCBsb2NhbGl0eV0pKTtcbiAgICAgICAgICB0aGlzLmF2YWlsYWJsZS5zZXQobG9jYWxpdGllcy5sZW5ndGggPiAwKTtcbiAgICAgICAgICB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHMoKTtcbiAgICAgICAgICB0aGlzLl9jaG9pY2VzUmVmKCk/LnJlZnJlc2goKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZpZWxkcygpLmZvckVhY2goZmllbGQgPT4gZmllbGQuZGVzdHJveSgpKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hvaWNlc0NoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsb2NhbGl0aWVzID0gKHRoaXMuY2hvaWNlc0lucHV0LnZhbHVlID8/IFtdKVxuICAgICAgLm1hcChpZCA9PiB0aGlzLl9sb2NhbGl0eU1hcC5nZXQoaWQpID8/IHRoaXMuX29ycGhhbnMuZ2V0KGlkKSlcbiAgICAgIC5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gICAgdGhpcy5fc2V0VmFsdWUodGhpcy5fcGFjayhsb2NhbGl0aWVzKSk7XG4gIH1cblxuICBwdWJsaWMgb25GcmVlSW5wdXRDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgemlwQ29kZSA9IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XG4gICAgY29uc3QgY2l0eSA9IHRoaXMuY2l0eUlucHV0LnZhbHVlPy50cmltKCkgPz8gJyc7XG4gICAgaWYgKCF6aXBDb2RlICYmICFjaXR5KSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0VmFsdWUoXG4gICAgICB0aGlzLl9wYWNrKFtcbiAgICAgICAge1xuICAgICAgICAgIGNpdHksXG4gICAgICAgICAgY291bnRyeTogdGhpcy5fY3VycmVudENvdW50cnkgPz8gREVGQVVMVF9DT1VOVFJZLFxuICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxuICAgICAgICAgIGxvbmdpdHVkZTogbnVsbCxcbiAgICAgICAgICB6aXBDb2RlLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmllbGRzKCkge1xuICAgIHJldHVybiBbdGhpcy5jaG9pY2VzSW5wdXQsIHRoaXMuY2l0eUlucHV0LCB0aGlzLnppcENvZGVJbnB1dF07XG4gIH1cblxuICBwcml2YXRlIF9wYWNrKGxvY2FsaXRpZXM6IEFkZHJlc3NMb2NhbGl0eVtdKTogTG9jYWxpdHlWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQubXVsdGlwbGUgPyBsb2NhbGl0aWVzIDogKGxvY2FsaXRpZXNbMF0gPz8gbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogTG9jYWxpdHlWYWx1ZSkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBSZWZsw6h0ZSBgaW5wdXQudmFsdWVgIGRhbnMgbGVzIGNoYW1wcyDigJQgc2FucyByZXBhc3NlciBwYXIgbGV1cnMgYHZhbHVlQ2hhbmdlZGAuICovXG4gIHByaXZhdGUgX2FwcGx5VmFsdWVUb0ZpZWxkcygpIHtcbiAgICBjb25zdCBsb2NhbGl0aWVzID0gdG9BcnJheSh0aGlzLmlucHV0LnZhbHVlKS5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gICAgdGhpcy5fb3JwaGFucyA9IG5ldyBNYXAoXG4gICAgICBsb2NhbGl0aWVzXG4gICAgICAgIC5tYXAobG9jYWxpdHkgPT4gW0lucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksIGxvY2FsaXR5XSBhcyBjb25zdClcbiAgICAgICAgLmZpbHRlcigoW2lkXSkgPT4gIXRoaXMuX2xvY2FsaXR5TWFwLmhhcyhpZCkpXG4gICAgKTtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIGNvbnN0IGlkcyA9IGxvY2FsaXRpZXMubWFwKGxvY2FsaXR5ID0+IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmNob2ljZXNJbnB1dC52YWx1ZSA/PyBbXTtcbiAgICBpZiAoaWRzLmxlbmd0aCAhPT0gY3VycmVudC5sZW5ndGggfHwgaWRzLnNvbWUoaWQgPT4gIWN1cnJlbnQuaW5jbHVkZXMoaWQpKSkge1xuICAgICAgdGhpcy5jaG9pY2VzSW5wdXQudmFsdWUgPSBpZHM7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0ID0gbG9jYWxpdGllc1swXTtcbiAgICB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA9IGZpcnN0Py56aXBDb2RlID8/ICcnO1xuICAgIHRoaXMuY2l0eUlucHV0LnZhbHVlID0gZmlyc3Q/LmNpdHkgPz8gJyc7XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9ucyBwcm9wb3PDqWVzIDogbGVzIHZhbGV1cnMgZMOpasOgIGNob2lzaWVzIGQnYWJvcmQgKHkgY29tcHJpcyBjZWxsZXMgaG9ycyBsaXN0ZSxcbiAgICogcG91ciBxdSdlbGxlcyByZXN0ZW50IGxpc2libGVzIGV0IHJldGlyYWJsZXMpLCBwdWlzIGxhIGxpc3RlIGZpbHRyw6llIGV0IHBsYWZvbm7DqWUuXG4gICAqL1xuICBwcml2YXRlIF9zZWFyY2hMb2NhbGl0aWVzKHNlYXJjaD86IHN0cmluZyk6IElucHV0Q2hvaWNlc09wdGlvbltdIHtcbiAgICBjb25zdCB0ZXJtID0gKHNlYXJjaCA/PyAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMuaW5wdXQudmFsdWUpLmZpbHRlcihpc05vbk51bGxhYmxlKTtcbiAgICBjb25zdCBzZWxlY3RlZElkcyA9IG5ldyBTZXQoc2VsZWN0ZWQubWFwKGxvY2FsaXR5ID0+IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpKTtcbiAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5fbG9jYWxpdGllcy5maWx0ZXIoXG4gICAgICBsb2NhbGl0eSA9PlxuICAgICAgICAhc2VsZWN0ZWRJZHMuaGFzKElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSkpICYmXG4gICAgICAgICghdGVybSB8fCBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgICk7XG4gICAgcmV0dXJuIFsuLi5zZWxlY3RlZCwgLi4ubWF0Y2hlZC5zbGljZSgwLCBNQVhfUkVTVUxUUyldLm1hcChsb2NhbGl0eSA9PiB0aGlzLl90b09wdGlvbihsb2NhbGl0eSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9PcHRpb24obG9jYWxpdHk6IEFkZHJlc3NMb2NhbGl0eSk6IElucHV0Q2hvaWNlc09wdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGxvY2FsaXR5LFxuICAgICAgaWQ6IElucHV0TG9jYWxpdHkubG9jYWxpdHlJZChsb2NhbGl0eSksXG4gICAgICBuYW1lOiBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YC50cmltKCksXG4gICAgfTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmF2YWlsYWJsZSgpKSB7XG4gIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgW2lucHV0XT1cInRoaXMuY2hvaWNlc0lucHV0XCJcbiAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25DaG9pY2VzQ2hhbmdlZCgpXCJcbiAgPjwvdGEtaW5wdXQtY2hvaWNlcz5cbn0gQGVsc2Uge1xuICA8ZGl2IGNsYXNzPVwiZ3JpZCBnLXNwYWNlLXNtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS10aGlyZFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuemlwQ29kZUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkZyZWVJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0d28tdGhpcmRzXCI+XG4gICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICBbaW5wdXRdPVwidGhpcy5jaXR5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uRnJlZUlucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG48bmctdGVtcGxhdGUgI2xvY2FsaXR5SXRlbVRwbCBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eS1vcHRpb25cIj57eyBpdGVtLnppcENvZGUgfX0ge3sgaXRlbS5jaXR5IH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==