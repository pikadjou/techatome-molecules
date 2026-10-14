import { Component, inject, viewChild } from '@angular/core';
import { TouchedChangeEvent, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, filter, of } from 'rxjs';
import { InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { FormLabelComponent, InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent, } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { getCountryList, isNonNullable, resolveCountryCode, toArray } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import { InputLocalityComponent } from '../locality/locality.component';
import * as i0 from "@angular/core";
const DEFAULT_COUNTRY = 'BE';
export class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.googleSearchInput = viewChild('googleSearchInput');
        this._countryItemTpl = viewChild.required('countryItemTpl');
        // La recherche Google n'est affichée que si l'API Maps/Places a bien été
        // injectée dans l'application (via provideGoogleMaps()).
        this.searchEnabled = false;
        this.complementInput = new InputTextBox({
            key: 'displayFloor',
            label: 'form.address.floor',
        });
        this.numberInput = new InputTextBox({
            key: 'displayNumber',
            label: 'form.address.number',
        });
        this.streetInput = new InputTextBox({
            key: 'displayStreet',
            label: 'form.address.street',
            validators: [Validators.required],
        });
        this._translate = inject(TranslateService);
        this._country$ = new BehaviorSubject(DEFAULT_COUNTRY);
        this._currentCountry = null;
        this._geo = { latitude: null, longitude: null, placeId: null };
        this._isApplyingValue = false;
        this._locality = null;
        TaTranslationForm.getInstance();
        this.countryInput = new InputChoices({
            key: 'displayCountry',
            label: 'form.address.country',
            options$: of([]),
            validators: [Validators.required],
            value: [DEFAULT_COUNTRY],
            withSearch: true,
        });
        this.localityInput = new InputLocality({
            country$: this._country$,
            key: 'displayLocality',
            label: 'form.address.locality',
            validators: [Validators.required],
        });
        this.detailsInputs = [
            this.complementInput,
            this.countryInput,
            this.localityInput,
            this.numberInput,
            this.streetInput,
        ];
    }
    ngOnInit() {
        super.ngOnInit();
        // Les sous-champs naissent ici : sans ça, une adresse désactivée restait éditable.
        if (this.input.disabled) {
            this.detailsInputs.forEach(i => (i.disabled = true));
        }
        this.searchEnabled = this._isGoogleAvailable() && !this.input.disabled;
        // Rendu d'une option (le composant gère la boucle et l'empilement vertical).
        this.countryInput.choiceTemplate = { one: this._countryItemTpl() };
        this.countryInput.options$ = of(getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
            data: c,
            id: c.code,
            name: c.name,
        })));
        if (this.input.value) {
            this._applyValueToFields(this.input.value);
        }
        else {
            // Adresse vide : on sème le pays par défaut (Belgique) dans la valeur.
            this._updateValueFromInputs();
        }
        this._currentCountry = this.countryInput.value?.[0] ?? null;
        this._country$.next(this._currentCountry ?? DEFAULT_COUNTRY);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.searchEnabled) {
            this._bindAutocomplete(this.googleSearchInput()?.nativeElement);
        }
        // Les contrôles des sous-champs n'existent qu'une fois la vue construite : sans ce calcul,
        // une adresse vide passait pour valide jusqu'à la première saisie. Hors du cycle courant
        // pour ne pas modifier une valeur déjà vérifiée.
        queueMicrotask(() => this._refreshValidity());
        // Une soumission invalide marque le contrôle d'adresse touché : on le répercute aux
        // sous-champs, sinon leurs messages d'erreur restent invisibles.
        const control = this.input.formControl;
        if (control) {
            this._registerSubscription(control.events
                .pipe(filter(event => event instanceof TouchedChangeEvent && event.touched))
                .subscribe(() => this.detailsInputs.forEach(i => i.formControl?.markAsTouched())));
        }
    }
    ngOnDestroy() {
        if (this._autocomplete) {
            google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
            this._autocomplete.unbindAll?.();
        }
        this.detailsInputs.forEach(i => i.destroy());
        this._country$.complete();
        super.ngOnDestroy();
    }
    onSubInputChanged() {
        if (this._isApplyingValue) {
            return;
        }
        // Si le pays change, la brique localité recharge sa liste et vide son choix.
        const country = this.countryInput.value?.[0] ?? null;
        if (country !== this._currentCountry) {
            this._currentCountry = country;
            this._country$.next(country ?? '');
        }
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    onLocalityChanged(value) {
        if (this._isApplyingValue) {
            return;
        }
        this._locality = toArray(value).filter(isNonNullable)[0] ?? null;
        // Une localité choisie à la main remplace le repère Google : ses coordonnées font foi.
        this._geo = {
            latitude: this._locality?.latitude ?? null,
            longitude: this._locality?.longitude ?? null,
            placeId: null,
        };
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    _refreshValidity() {
        this.input.formControl?.setErrors(this.detailsInputs.some(i => i.formControl?.invalid ?? false) ? { invalid: true } : null);
    }
    _applyValueToFields(value) {
        this._geo = {
            latitude: value.latitude ?? null,
            longitude: value.longitude ?? null,
            placeId: value.placeId ?? null,
        };
        // Un pays hérité en toutes lettres (« Belgium ») est ramené à son code : sans ça, ni la
        // liste des pays ni celle des localités ne le reconnaissent.
        this._setFields({
            city: value.city ?? '',
            country: resolveCountryCode(value.country) ?? DEFAULT_COUNTRY,
            floor: value.floor ?? '',
            number: value.number ?? '',
            street: value.street ?? '',
            zipCode: value.zipCode ?? '',
        });
    }
    _isGoogleAvailable() {
        return typeof google !== 'undefined' && !!google?.maps?.places?.Autocomplete;
    }
    _bindAutocomplete(el) {
        if (!el) {
            return;
        }
        if (this._autocomplete) {
            google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
        }
        if (!google?.maps?.places?.Autocomplete) {
            return;
        }
        this._autocomplete = new google.maps.places.Autocomplete(el, {
            fields: ['address_components', 'geometry', 'place_id'],
        });
        this._autocomplete.addListener('place_changed', () => {
            const place = this._autocomplete?.getPlace();
            if (place?.geometry) {
                this._parseAddress(place);
            }
        });
    }
    _parseAddress(place) {
        const addressComponents = place.address_components;
        const geometry = place.geometry;
        const getComponent = (type, nameType = 'long_name') => {
            const component = addressComponents?.find((c) => c.types.includes(type));
            return component ? component[nameType] : '';
        };
        this._geo = {
            latitude: geometry?.location?.lat() ?? null,
            longitude: geometry?.location?.lng() ?? null,
            placeId: place.place_id ?? null,
        };
        // La recherche est une aide : elle préremplit les champs sans les figer,
        // et on conserve le complément (étage/appartement) déjà saisi.
        this._setFields({
            city: getComponent('locality'),
            country: getComponent('country', 'short_name'),
            floor: this.complementInput.value ?? '',
            number: getComponent('street_number'),
            street: getComponent('route'),
            zipCode: getComponent('postal_code'),
        });
        this._updateValueFromInputs();
        const searchInput = this.googleSearchInput()?.nativeElement;
        if (searchInput) {
            searchInput.value = '';
        }
    }
    /**
     * Pose les champs sans déclencher leurs `valueChanged`.
     *
     * Le pays part avant la localité : la brique localité vide son choix à chaque
     * changement de pays, et écraserait sinon la localité qu'on vient de poser.
     */
    _setFields(fields) {
        this._isApplyingValue = true;
        this.complementInput.value = fields.floor;
        this.numberInput.value = fields.number;
        this.streetInput.value = fields.street;
        this.countryInput.value = [fields.country];
        this._currentCountry = fields.country;
        this._country$.next(fields.country);
        this._locality =
            fields.zipCode || fields.city
                ? { city: fields.city, country: fields.country, latitude: null, longitude: null, zipCode: fields.zipCode }
                : null;
        this.localityInput.value = this._locality;
        this._isApplyingValue = false;
    }
    _updateValueFromInputs() {
        this.input.value = {
            city: this._locality?.city ?? null,
            country: this.countryInput.value?.[0] ?? null,
            floor: this.complementInput.value ?? null,
            latitude: this._geo.latitude,
            longitude: this._geo.longitude,
            number: this.numberInput.value ?? null,
            placeId: this._geo.placeId,
            street: this.streetInput.value ?? null,
            zipCode: this._locality?.zipCode ?? null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "googleSearchInput", first: true, predicate: ["googleSearchInput"], descendants: true, isSignal: true }, { propertyName: "_countryItemTpl", first: true, predicate: ["countryItemTpl"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-locality\n        [input]=\"this.localityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onLocalityChanged($event)\"\n      ></ta-input-locality>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom", "variant"] }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: InputLocalityComponent, selector: "ta-input-locality" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ imports: [
                        FontIconComponent,
                        FormLabelComponent,
                        InputChoicesComponent,
                        InputLocalityComponent,
                        TextBoxComponent,
                        TranslatePipe,
                    ], selector: 'ta-input-address', standalone: true, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-locality\n        [input]=\"this.localityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onLocalityChanged($event)\"\n      ></ta-input-locality>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQThDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQTBDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFtQixjQUFjLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFReEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FB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QixtRkFDakIsa0JBQWtCLDRHQUNsQixxQkFBcUIsNkRBQ3JCLHNCQUFzQiw4REFDdEIsZ0JBQWdCLDJFQUNoQixhQUFhOzs0RkFPSixxQkFBcUI7a0JBZGpDLFNBQVM7OEJBQ0M7d0JBQ1AsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGFBQWE7cUJBQ2QsWUFDUyxrQkFBa0IsY0FDaEIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0LCB2aWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvdWNoZWRDaGFuZ2VFdmVudCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmaWx0ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElBZGRyZXNzVmFsdWUsIElucHV0QWRkcmVzcywgSW5wdXRCYXNlLCBJbnB1dENob2ljZXMsIElucHV0TG9jYWxpdHksIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7XG4gIEZvcm1MYWJlbENvbXBvbmVudCxcbiAgSW5wdXRDaG9pY2VzQ29tcG9uZW50LFxuICBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQsXG4gIFRleHRCb3hDb21wb25lbnQsXG59IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQWRkcmVzc0xvY2FsaXR5LCBnZXRDb3VudHJ5TGlzdCwgaXNOb25OdWxsYWJsZSwgcmVzb2x2ZUNvdW50cnlDb2RlLCB0b0FycmF5IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvbkZvcm0gfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElucHV0TG9jYWxpdHlDb21wb25lbnQgfSBmcm9tICcuLi9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgQWRkcmVzc0dlbyB7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIHBsYWNlSWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IERFRkFVTFRfQ09VTlRSWSA9ICdCRSc7XG5cbkBDb21wb25lbnQoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgICBJbnB1dExvY2FsaXR5Q29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0YS1pbnB1dC1hZGRyZXNzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc3R5bGVVcmw6ICcuL2FkZHJlc3MuY29tcG9uZW50LnNjc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0QWRkcmVzc0NvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dEFkZHJlc3M+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgZ29vZ2xlU2VhcmNoSW5wdXQgPSB2aWV3Q2hpbGQ8RWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pj4oJ2dvb2dsZVNlYXJjaElucHV0Jyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvdW50cnlJdGVtVHBsID0gdmlld0NoaWxkLnJlcXVpcmVkPFRlbXBsYXRlUmVmPHVua25vd24+PignY291bnRyeUl0ZW1UcGwnKTtcblxuICAvLyBMYSByZWNoZXJjaGUgR29vZ2xlIG4nZXN0IGFmZmljaMOpZSBxdWUgc2kgbCdBUEkgTWFwcy9QbGFjZXMgYSBiaWVuIMOpdMOpXG4gIC8vIGluamVjdMOpZSBkYW5zIGwnYXBwbGljYXRpb24gKHZpYSBwcm92aWRlR29vZ2xlTWFwcygpKS5cbiAgcHVibGljIHNlYXJjaEVuYWJsZWQgPSBmYWxzZTtcbiAgcHVibGljIGNvbXBsZW1lbnRJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlGbG9vcicsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuZmxvb3InLFxuICB9KTtcbiAgcHVibGljIGNvdW50cnlJbnB1dCE6IElucHV0Q2hvaWNlcztcbiAgcHVibGljIGRldGFpbHNJbnB1dHM6IElucHV0QmFzZTxhbnk+W107XG4gIC8vIENvZGUgcG9zdGFsICsgY29tbXVuZSA6IGxhIGJyaXF1ZSBsb2NhbGl0w6kgcG9ydGUgbGEgbGlzdGUgZHUgcGF5cyBldCBzb24gw6l2ZW50dWVsIHJlcGxpLlxuICBwdWJsaWMgbG9jYWxpdHlJbnB1dCE6IElucHV0TG9jYWxpdHk7XG4gIHB1YmxpYyBudW1iZXJJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlOdW1iZXInLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLm51bWJlcicsXG4gIH0pO1xuICBwdWJsaWMgc3RyZWV0SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5U3RyZWV0JyxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5zdHJlZXQnLFxuICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNsYXRlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICBwcml2YXRlIF9hdXRvY29tcGxldGU6IGFueTtcbiAgcHJpdmF0ZSBfY291bnRyeSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oREVGQVVMVF9DT1VOVFJZKTtcbiAgcHJpdmF0ZSBfY3VycmVudENvdW50cnk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9nZW86IEFkZHJlc3NHZW8gPSB7IGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwsIHBsYWNlSWQ6IG51bGwgfTtcbiAgcHJpdmF0ZSBfaXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvY2FsaXR5OiBBZGRyZXNzTG9jYWxpdHkgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25Gb3JtLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5jb3VudHJ5SW5wdXQgPSBuZXcgSW5wdXRDaG9pY2VzKHtcbiAgICAgIGtleTogJ2Rpc3BsYXlDb3VudHJ5JyxcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmNvdW50cnknLFxuICAgICAgb3B0aW9ucyQ6IG9mKFtdKSxcbiAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHZhbHVlOiBbREVGQVVMVF9DT1VOVFJZXSxcbiAgICAgIHdpdGhTZWFyY2g6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbGl0eUlucHV0ID0gbmV3IElucHV0TG9jYWxpdHkoe1xuICAgICAgY291bnRyeSQ6IHRoaXMuX2NvdW50cnkkLFxuICAgICAga2V5OiAnZGlzcGxheUxvY2FsaXR5JyxcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmxvY2FsaXR5JyxcbiAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgICB0aGlzLmRldGFpbHNJbnB1dHMgPSBbXG4gICAgICB0aGlzLmNvbXBsZW1lbnRJbnB1dCxcbiAgICAgIHRoaXMuY291bnRyeUlucHV0LFxuICAgICAgdGhpcy5sb2NhbGl0eUlucHV0LFxuICAgICAgdGhpcy5udW1iZXJJbnB1dCxcbiAgICAgIHRoaXMuc3RyZWV0SW5wdXQsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIC8vIExlcyBzb3VzLWNoYW1wcyBuYWlzc2VudCBpY2kgOiBzYW5zIMOnYSwgdW5lIGFkcmVzc2UgZMOpc2FjdGl2w6llIHJlc3RhaXQgw6lkaXRhYmxlLlxuICAgIGlmICh0aGlzLmlucHV0LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRldGFpbHNJbnB1dHMuZm9yRWFjaChpID0+IChpLmRpc2FibGVkID0gdHJ1ZSkpO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaEVuYWJsZWQgPSB0aGlzLl9pc0dvb2dsZUF2YWlsYWJsZSgpICYmICF0aGlzLmlucHV0LmRpc2FibGVkO1xuICAgIC8vIFJlbmR1IGQndW5lIG9wdGlvbiAobGUgY29tcG9zYW50IGfDqHJlIGxhIGJvdWNsZSBldCBsJ2VtcGlsZW1lbnQgdmVydGljYWwpLlxuICAgIHRoaXMuY291bnRyeUlucHV0LmNob2ljZVRlbXBsYXRlID0geyBvbmU6IHRoaXMuX2NvdW50cnlJdGVtVHBsKCkgfTtcbiAgICB0aGlzLmNvdW50cnlJbnB1dC5vcHRpb25zJCA9IG9mKFxuICAgICAgZ2V0Q291bnRyeUxpc3QodGhpcy5fdHJhbnNsYXRlLmN1cnJlbnRMYW5nLCB0aGlzLmlucHV0LnByaW9yaXR5Q291bnRyaWVzKS5tYXAoYyA9PiAoe1xuICAgICAgICBkYXRhOiBjLFxuICAgICAgICBpZDogYy5jb2RlLFxuICAgICAgICBuYW1lOiBjLm5hbWUsXG4gICAgICB9KSlcbiAgICApO1xuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHModGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkcmVzc2UgdmlkZSA6IG9uIHPDqG1lIGxlIHBheXMgcGFyIGTDqWZhdXQgKEJlbGdpcXVlKSBkYW5zIGxhIHZhbGV1ci5cbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcbiAgICB0aGlzLl9jb3VudHJ5JC5uZXh0KHRoaXMuX2N1cnJlbnRDb3VudHJ5ID8/IERFRkFVTFRfQ09VTlRSWSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIGlmICh0aGlzLnNlYXJjaEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX2JpbmRBdXRvY29tcGxldGUodGhpcy5nb29nbGVTZWFyY2hJbnB1dCgpPy5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgLy8gTGVzIGNvbnRyw7RsZXMgZGVzIHNvdXMtY2hhbXBzIG4nZXhpc3RlbnQgcXUndW5lIGZvaXMgbGEgdnVlIGNvbnN0cnVpdGUgOiBzYW5zIGNlIGNhbGN1bCxcbiAgICAvLyB1bmUgYWRyZXNzZSB2aWRlIHBhc3NhaXQgcG91ciB2YWxpZGUganVzcXUnw6AgbGEgcHJlbWnDqHJlIHNhaXNpZS4gSG9ycyBkdSBjeWNsZSBjb3VyYW50XG4gICAgLy8gcG91ciBuZSBwYXMgbW9kaWZpZXIgdW5lIHZhbGV1ciBkw6lqw6AgdsOpcmlmacOpZS5cbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLl9yZWZyZXNoVmFsaWRpdHkoKSk7XG4gICAgLy8gVW5lIHNvdW1pc3Npb24gaW52YWxpZGUgbWFycXVlIGxlIGNvbnRyw7RsZSBkJ2FkcmVzc2UgdG91Y2jDqSA6IG9uIGxlIHLDqXBlcmN1dGUgYXV4XG4gICAgLy8gc291cy1jaGFtcHMsIHNpbm9uIGxldXJzIG1lc3NhZ2VzIGQnZXJyZXVyIHJlc3RlbnQgaW52aXNpYmxlcy5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5pbnB1dC5mb3JtQ29udHJvbDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIGNvbnRyb2wuZXZlbnRzXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hlZENoYW5nZUV2ZW50ICYmIGV2ZW50LnRvdWNoZWQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUudW5iaW5kQWxsPy4oKTtcbiAgICB9XG4gICAgdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY291bnRyeSQuY29tcGxldGUoKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uU3ViSW5wdXRDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2kgbGUgcGF5cyBjaGFuZ2UsIGxhIGJyaXF1ZSBsb2NhbGl0w6kgcmVjaGFyZ2Ugc2EgbGlzdGUgZXQgdmlkZSBzb24gY2hvaXguXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcbiAgICBpZiAoY291bnRyeSAhPT0gdGhpcy5fY3VycmVudENvdW50cnkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gY291bnRyeTtcbiAgICAgIHRoaXMuX2NvdW50cnkkLm5leHQoY291bnRyeSA/PyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9jYWxpdHlDaGFuZ2VkKHZhbHVlOiBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNBcHBseWluZ1ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsaXR5ID0gdG9BcnJheSh2YWx1ZSkuZmlsdGVyKGlzTm9uTnVsbGFibGUpWzBdID8/IG51bGw7XG4gICAgLy8gVW5lIGxvY2FsaXTDqSBjaG9pc2llIMOgIGxhIG1haW4gcmVtcGxhY2UgbGUgcmVww6hyZSBHb29nbGUgOiBzZXMgY29vcmRvbm7DqWVzIGZvbnQgZm9pLlxuICAgIHRoaXMuX2dlbyA9IHtcbiAgICAgIGxhdGl0dWRlOiB0aGlzLl9sb2NhbGl0eT8ubGF0aXR1ZGUgPz8gbnVsbCxcbiAgICAgIGxvbmdpdHVkZTogdGhpcy5fbG9jYWxpdHk/LmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbGlkaXR5KCkge1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnNldEVycm9ycyhcbiAgICAgIHRoaXMuZGV0YWlsc0lucHV0cy5zb21lKGkgPT4gaS5mb3JtQ29udHJvbD8uaW52YWxpZCA/PyBmYWxzZSkgPyB7IGludmFsaWQ6IHRydWUgfSA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlWYWx1ZVRvRmllbGRzKHZhbHVlOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+KSB7XG4gICAgdGhpcy5fZ2VvID0ge1xuICAgICAgbGF0aXR1ZGU6IHZhbHVlLmxhdGl0dWRlID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogdmFsdWUucGxhY2VJZCA/PyBudWxsLFxuICAgIH07XG4gICAgLy8gVW4gcGF5cyBow6lyaXTDqSBlbiB0b3V0ZXMgbGV0dHJlcyAowqsgQmVsZ2l1bSDCuykgZXN0IHJhbWVuw6kgw6Agc29uIGNvZGUgOiBzYW5zIMOnYSwgbmkgbGFcbiAgICAvLyBsaXN0ZSBkZXMgcGF5cyBuaSBjZWxsZSBkZXMgbG9jYWxpdMOpcyBuZSBsZSByZWNvbm5haXNzZW50LlxuICAgIHRoaXMuX3NldEZpZWxkcyh7XG4gICAgICBjaXR5OiB2YWx1ZS5jaXR5ID8/ICcnLFxuICAgICAgY291bnRyeTogcmVzb2x2ZUNvdW50cnlDb2RlKHZhbHVlLmNvdW50cnkpID8/IERFRkFVTFRfQ09VTlRSWSxcbiAgICAgIGZsb29yOiB2YWx1ZS5mbG9vciA/PyAnJyxcbiAgICAgIG51bWJlcjogdmFsdWUubnVtYmVyID8/ICcnLFxuICAgICAgc3RyZWV0OiB2YWx1ZS5zdHJlZXQgPz8gJycsXG4gICAgICB6aXBDb2RlOiB2YWx1ZS56aXBDb2RlID8/ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNHb29nbGVBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBnb29nbGUgIT09ICd1bmRlZmluZWQnICYmICEhZ29vZ2xlPy5tYXBzPy5wbGFjZXM/LkF1dG9jb21wbGV0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2JpbmRBdXRvY29tcGxldGUoZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIGdvb2dsZT8ubWFwcz8uZXZlbnQ/LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnM/Lih0aGlzLl9hdXRvY29tcGxldGUpO1xuICAgIH1cbiAgICBpZiAoIWdvb2dsZT8ubWFwcz8ucGxhY2VzPy5BdXRvY29tcGxldGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoZWwsIHtcbiAgICAgIGZpZWxkczogWydhZGRyZXNzX2NvbXBvbmVudHMnLCAnZ2VvbWV0cnknLCAncGxhY2VfaWQnXSxcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZSA9IHRoaXMuX2F1dG9jb21wbGV0ZT8uZ2V0UGxhY2UoKTtcbiAgICAgIGlmIChwbGFjZT8uZ2VvbWV0cnkpIHtcbiAgICAgICAgdGhpcy5fcGFyc2VBZGRyZXNzKHBsYWNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQWRkcmVzcyhwbGFjZTogYW55KSB7XG4gICAgY29uc3QgYWRkcmVzc0NvbXBvbmVudHMgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHM7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBwbGFjZS5nZW9tZXRyeTtcbiAgICBjb25zdCBnZXRDb21wb25lbnQgPSAodHlwZTogc3RyaW5nLCBuYW1lVHlwZTogJ2xvbmdfbmFtZScgfCAnc2hvcnRfbmFtZScgPSAnbG9uZ19uYW1lJykgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gYWRkcmVzc0NvbXBvbmVudHM/LmZpbmQoKGM6IGFueSkgPT4gYy50eXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50ID8gY29tcG9uZW50W25hbWVUeXBlXSA6ICcnO1xuICAgIH07XG5cbiAgICB0aGlzLl9nZW8gPSB7XG4gICAgICBsYXRpdHVkZTogZ2VvbWV0cnk/LmxvY2F0aW9uPy5sYXQoKSA/PyBudWxsLFxuICAgICAgbG9uZ2l0dWRlOiBnZW9tZXRyeT8ubG9jYXRpb24/LmxuZygpID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCA/PyBudWxsLFxuICAgIH07XG4gICAgLy8gTGEgcmVjaGVyY2hlIGVzdCB1bmUgYWlkZSA6IGVsbGUgcHLDqXJlbXBsaXQgbGVzIGNoYW1wcyBzYW5zIGxlcyBmaWdlcixcbiAgICAvLyBldCBvbiBjb25zZXJ2ZSBsZSBjb21wbMOpbWVudCAow6l0YWdlL2FwcGFydGVtZW50KSBkw6lqw6Agc2Fpc2kuXG4gICAgdGhpcy5fc2V0RmllbGRzKHtcbiAgICAgIGNpdHk6IGdldENvbXBvbmVudCgnbG9jYWxpdHknKSxcbiAgICAgIGNvdW50cnk6IGdldENvbXBvbmVudCgnY291bnRyeScsICdzaG9ydF9uYW1lJyksXG4gICAgICBmbG9vcjogdGhpcy5jb21wbGVtZW50SW5wdXQudmFsdWUgPz8gJycsXG4gICAgICBudW1iZXI6IGdldENvbXBvbmVudCgnc3RyZWV0X251bWJlcicpLFxuICAgICAgc3RyZWV0OiBnZXRDb21wb25lbnQoJ3JvdXRlJyksXG4gICAgICB6aXBDb2RlOiBnZXRDb21wb25lbnQoJ3Bvc3RhbF9jb2RlJyksXG4gICAgfSk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSB0aGlzLmdvb2dsZVNlYXJjaElucHV0KCk/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHNlYXJjaElucHV0KSB7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NlIGxlcyBjaGFtcHMgc2FucyBkw6ljbGVuY2hlciBsZXVycyBgdmFsdWVDaGFuZ2VkYC5cbiAgICpcbiAgICogTGUgcGF5cyBwYXJ0IGF2YW50IGxhIGxvY2FsaXTDqSA6IGxhIGJyaXF1ZSBsb2NhbGl0w6kgdmlkZSBzb24gY2hvaXggw6AgY2hhcXVlXG4gICAqIGNoYW5nZW1lbnQgZGUgcGF5cywgZXQgw6ljcmFzZXJhaXQgc2lub24gbGEgbG9jYWxpdMOpIHF1J29uIHZpZW50IGRlIHBvc2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0RmllbGRzKGZpZWxkczoge1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgZmxvb3I6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBzdHJlZXQ6IHN0cmluZztcbiAgICB6aXBDb2RlOiBzdHJpbmc7XG4gIH0pIHtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID0gZmllbGRzLmZsb29yO1xuICAgIHRoaXMubnVtYmVySW5wdXQudmFsdWUgPSBmaWVsZHMubnVtYmVyO1xuICAgIHRoaXMuc3RyZWV0SW5wdXQudmFsdWUgPSBmaWVsZHMuc3RyZWV0O1xuICAgIHRoaXMuY291bnRyeUlucHV0LnZhbHVlID0gW2ZpZWxkcy5jb3VudHJ5XTtcbiAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IGZpZWxkcy5jb3VudHJ5O1xuICAgIHRoaXMuX2NvdW50cnkkLm5leHQoZmllbGRzLmNvdW50cnkpO1xuICAgIHRoaXMuX2xvY2FsaXR5ID1cbiAgICAgIGZpZWxkcy56aXBDb2RlIHx8IGZpZWxkcy5jaXR5XG4gICAgICAgID8geyBjaXR5OiBmaWVsZHMuY2l0eSwgY291bnRyeTogZmllbGRzLmNvdW50cnksIGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwsIHppcENvZGU6IGZpZWxkcy56aXBDb2RlIH1cbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZSA9IHRoaXMuX2xvY2FsaXR5O1xuICAgIHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB7XG4gICAgICBjaXR5OiB0aGlzLl9sb2NhbGl0eT8uY2l0eSA/PyBudWxsLFxuICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyBudWxsLFxuICAgICAgZmxvb3I6IHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBsYXRpdHVkZTogdGhpcy5fZ2VvLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB0aGlzLl9nZW8ubG9uZ2l0dWRlLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcklucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiB0aGlzLl9nZW8ucGxhY2VJZCxcbiAgICAgIHN0cmVldDogdGhpcy5zdHJlZXRJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgemlwQ29kZTogdGhpcy5fbG9jYWxpdHk/LnppcENvZGUgPz8gbnVsbCxcbiAgICB9O1xuICB9XG59XG4iLCI8dGEtZm9ybS1sYWJlbCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPjwvdGEtZm9ybS1sYWJlbD5cblxuPGRpdiBjbGFzcz1cImFkZHJlc3MtZm9ybSBmbGV4LWNvbHVtbiBnLXNwYWNlLW1kXCI+XG4gIEBpZiAodGhpcy5zZWFyY2hFbmFibGVkKSB7XG4gICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoXCI+XG4gICAgICA8dGEtZm9udC1pY29uIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2ljb25cIiBuYW1lPVwic2VhcmNoXCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2dvb2dsZVNlYXJjaElucHV0XG4gICAgICAgIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2lucHV0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2Zvcm0uYWRkcmVzcy5zZWFyY2gtZ29vZ2xlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2hpbnRcIj57eyAnZm9ybS5hZGRyZXNzLnNlYXJjaC1oaW50JyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgfVxuXG4gIDxkaXYgY2xhc3M9XCJncmlkIGctc3BhY2Utc21cIj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWhhbGZcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLnN0cmVldElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLm51bWJlcklucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvbXBsZW1lbnRJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1sb2NhbGl0eVxuICAgICAgICBbaW5wdXRdPVwidGhpcy5sb2NhbGl0eUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkxvY2FsaXR5Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgID48L3RhLWlucHV0LWxvY2FsaXR5PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvdW50cnlJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC1jaG9pY2VzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2NvdW50cnlJdGVtVHBsIGxldC1pdGVtPVwiaXRlbVwiPlxuICA8c3BhbiBjbGFzcz1cImxvY2FsaXR5LW9wdGlvblwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=