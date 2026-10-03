import { Component, ViewChild, inject } from '@angular/core';
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
        this.countryInput.choiceTemplate = { one: this._countryItemTpl };
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
            this._bindAutocomplete(this.googleSearchInput?.nativeElement);
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
        if (this.googleSearchInput?.nativeElement) {
            this.googleSearchInput.nativeElement.value = '';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "googleSearchInput", first: true, predicate: ["googleSearchInput"], descendants: true }, { propertyName: "_countryItemTpl", first: true, predicate: ["countryItemTpl"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-locality\n        [input]=\"this.localityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onLocalityChanged($event)\"\n      ></ta-input-locality>\n    </div>\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom", "variant"] }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: InputLocalityComponent, selector: "ta-input-locality" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
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
        }], ctorParameters: () => [], propDecorators: { googleSearchInput: [{
                type: ViewChild,
                args: ['googleSearchInput']
            }], _countryItemTpl: [{
                type: ViewChild,
                args: ['countryItemTpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQThDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQTBDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFtQixjQUFjLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFReEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FB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QWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNkLFlBQ1Msa0JBQWtCLGNBQ2hCLElBQUk7d0RBUWdCLGlCQUFpQjtzQkFBaEQsU0FBUzt1QkFBQyxtQkFBbUI7Z0JBQ3lCLGVBQWU7c0JBQXJFLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XHJcblxyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG91Y2hlZENoYW5nZUV2ZW50LCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZpbHRlciwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IElBZGRyZXNzVmFsdWUsIElucHV0QWRkcmVzcywgSW5wdXRCYXNlLCBJbnB1dENob2ljZXMsIElucHV0TG9jYWxpdHksIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcclxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1MYWJlbENvbXBvbmVudCxcclxuICBJbnB1dENob2ljZXNDb21wb25lbnQsXHJcbiAgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50LFxyXG4gIFRleHRCb3hDb21wb25lbnQsXHJcbn0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgQWRkcmVzc0xvY2FsaXR5LCBnZXRDb3VudHJ5TGlzdCwgaXNOb25OdWxsYWJsZSwgcmVzb2x2ZUNvdW50cnlDb2RlLCB0b0FycmF5IH0gZnJvbSAnQHRhL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Gb3JtIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0TG9jYWxpdHlDb21wb25lbnQgfSBmcm9tICcuLi9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIEFkZHJlc3NHZW8ge1xyXG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICBwbGFjZUlkOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0NPVU5UUlkgPSAnQkUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9udEljb25Db21wb25lbnQsXHJcbiAgICBGb3JtTGFiZWxDb21wb25lbnQsXHJcbiAgICBJbnB1dENob2ljZXNDb21wb25lbnQsXHJcbiAgICBJbnB1dExvY2FsaXR5Q29tcG9uZW50LFxyXG4gICAgVGV4dEJveENvbXBvbmVudCxcclxuICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgXSxcclxuICBzZWxlY3RvcjogJ3RhLWlucHV0LWFkZHJlc3MnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkcmVzcy5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0QWRkcmVzc0NvbXBvbmVudFxyXG4gIGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0QWRkcmVzcz5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XHJcbntcclxuICBAVmlld0NoaWxkKCdnb29nbGVTZWFyY2hJbnB1dCcpIGdvb2dsZVNlYXJjaElucHV0PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdjb3VudHJ5SXRlbVRwbCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgX2NvdW50cnlJdGVtVHBsITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLy8gTGEgcmVjaGVyY2hlIEdvb2dsZSBuJ2VzdCBhZmZpY2jDqWUgcXVlIHNpIGwnQVBJIE1hcHMvUGxhY2VzIGEgYmllbiDDqXTDqVxyXG4gIC8vIGluamVjdMOpZSBkYW5zIGwnYXBwbGljYXRpb24gKHZpYSBwcm92aWRlR29vZ2xlTWFwcygpKS5cclxuICBwdWJsaWMgc2VhcmNoRW5hYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjb21wbGVtZW50SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcclxuICAgIGtleTogJ2Rpc3BsYXlGbG9vcicsXHJcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5mbG9vcicsXHJcbiAgfSk7XHJcbiAgcHVibGljIGNvdW50cnlJbnB1dCE6IElucHV0Q2hvaWNlcztcclxuICBwdWJsaWMgZGV0YWlsc0lucHV0czogSW5wdXRCYXNlPGFueT5bXTtcclxuICAvLyBDb2RlIHBvc3RhbCArIGNvbW11bmUgOiBsYSBicmlxdWUgbG9jYWxpdMOpIHBvcnRlIGxhIGxpc3RlIGR1IHBheXMgZXQgc29uIMOpdmVudHVlbCByZXBsaS5cclxuICBwdWJsaWMgbG9jYWxpdHlJbnB1dCE6IElucHV0TG9jYWxpdHk7XHJcbiAgcHVibGljIG51bWJlcklucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XHJcbiAgICBrZXk6ICdkaXNwbGF5TnVtYmVyJyxcclxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLm51bWJlcicsXHJcbiAgfSk7XHJcbiAgcHVibGljIHN0cmVldElucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XHJcbiAgICBrZXk6ICdkaXNwbGF5U3RyZWV0JyxcclxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLnN0cmVldCcsXHJcbiAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgfSk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RyYW5zbGF0ZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcclxuICBwcml2YXRlIF9hdXRvY29tcGxldGU6IGFueTtcclxuICBwcml2YXRlIF9jb3VudHJ5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihERUZBVUxUX0NPVU5UUlkpO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9nZW86IEFkZHJlc3NHZW8gPSB7IGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwsIHBsYWNlSWQ6IG51bGwgfTtcclxuICBwcml2YXRlIF9pc0FwcGx5aW5nVmFsdWUgPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2NhbGl0eTogQWRkcmVzc0xvY2FsaXR5IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIFRhVHJhbnNsYXRpb25Gb3JtLmdldEluc3RhbmNlKCk7XHJcbiAgICB0aGlzLmNvdW50cnlJbnB1dCA9IG5ldyBJbnB1dENob2ljZXMoe1xyXG4gICAgICBrZXk6ICdkaXNwbGF5Q291bnRyeScsXHJcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmNvdW50cnknLFxyXG4gICAgICBvcHRpb25zJDogb2YoW10pLFxyXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHZhbHVlOiBbREVGQVVMVF9DT1VOVFJZXSxcclxuICAgICAgd2l0aFNlYXJjaDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2NhbGl0eUlucHV0ID0gbmV3IElucHV0TG9jYWxpdHkoe1xyXG4gICAgICBjb3VudHJ5JDogdGhpcy5fY291bnRyeSQsXHJcbiAgICAgIGtleTogJ2Rpc3BsYXlMb2NhbGl0eScsXHJcbiAgICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmxvY2FsaXR5JyxcclxuICAgICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGFpbHNJbnB1dHMgPSBbXHJcbiAgICAgIHRoaXMuY29tcGxlbWVudElucHV0LFxyXG4gICAgICB0aGlzLmNvdW50cnlJbnB1dCxcclxuICAgICAgdGhpcy5sb2NhbGl0eUlucHV0LFxyXG4gICAgICB0aGlzLm51bWJlcklucHV0LFxyXG4gICAgICB0aGlzLnN0cmVldElucHV0LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICAvLyBMZXMgc291cy1jaGFtcHMgbmFpc3NlbnQgaWNpIDogc2FucyDDp2EsIHVuZSBhZHJlc3NlIGTDqXNhY3RpdsOpZSByZXN0YWl0IMOpZGl0YWJsZS5cclxuICAgIGlmICh0aGlzLmlucHV0LmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZGV0YWlsc0lucHV0cy5mb3JFYWNoKGkgPT4gKGkuZGlzYWJsZWQgPSB0cnVlKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlYXJjaEVuYWJsZWQgPSB0aGlzLl9pc0dvb2dsZUF2YWlsYWJsZSgpICYmICF0aGlzLmlucHV0LmRpc2FibGVkO1xyXG4gICAgLy8gUmVuZHUgZCd1bmUgb3B0aW9uIChsZSBjb21wb3NhbnQgZ8OocmUgbGEgYm91Y2xlIGV0IGwnZW1waWxlbWVudCB2ZXJ0aWNhbCkuXHJcbiAgICB0aGlzLmNvdW50cnlJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9jb3VudHJ5SXRlbVRwbCB9O1xyXG4gICAgdGhpcy5jb3VudHJ5SW5wdXQub3B0aW9ucyQgPSBvZihcclxuICAgICAgZ2V0Q291bnRyeUxpc3QodGhpcy5fdHJhbnNsYXRlLmN1cnJlbnRMYW5nLCB0aGlzLmlucHV0LnByaW9yaXR5Q291bnRyaWVzKS5tYXAoYyA9PiAoe1xyXG4gICAgICAgIGRhdGE6IGMsXHJcbiAgICAgICAgaWQ6IGMuY29kZSxcclxuICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgIH0pKVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2FwcGx5VmFsdWVUb0ZpZWxkcyh0aGlzLmlucHV0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFkcmVzc2UgdmlkZSA6IG9uIHPDqG1lIGxlIHBheXMgcGFyIGTDqWZhdXQgKEJlbGdpcXVlKSBkYW5zIGxhIHZhbGV1ci5cclxuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcclxuICAgIHRoaXMuX2NvdW50cnkkLm5leHQodGhpcy5fY3VycmVudENvdW50cnkgPz8gREVGQVVMVF9DT1VOVFJZKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgIGlmICh0aGlzLnNlYXJjaEVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fYmluZEF1dG9jb21wbGV0ZSh0aGlzLmdvb2dsZVNlYXJjaElucHV0Py5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIC8vIExlcyBjb250csO0bGVzIGRlcyBzb3VzLWNoYW1wcyBuJ2V4aXN0ZW50IHF1J3VuZSBmb2lzIGxhIHZ1ZSBjb25zdHJ1aXRlIDogc2FucyBjZSBjYWxjdWwsXHJcbiAgICAvLyB1bmUgYWRyZXNzZSB2aWRlIHBhc3NhaXQgcG91ciB2YWxpZGUganVzcXUnw6AgbGEgcHJlbWnDqHJlIHNhaXNpZS4gSG9ycyBkdSBjeWNsZSBjb3VyYW50XHJcbiAgICAvLyBwb3VyIG5lIHBhcyBtb2RpZmllciB1bmUgdmFsZXVyIGTDqWrDoCB2w6lyaWZpw6llLlxyXG4gICAgcXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5fcmVmcmVzaFZhbGlkaXR5KCkpO1xyXG4gICAgLy8gVW5lIHNvdW1pc3Npb24gaW52YWxpZGUgbWFycXVlIGxlIGNvbnRyw7RsZSBkJ2FkcmVzc2UgdG91Y2jDqSA6IG9uIGxlIHLDqXBlcmN1dGUgYXV4XHJcbiAgICAvLyBzb3VzLWNoYW1wcywgc2lub24gbGV1cnMgbWVzc2FnZXMgZCdlcnJldXIgcmVzdGVudCBpbnZpc2libGVzLlxyXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgICBjb250cm9sLmV2ZW50c1xyXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hlZENoYW5nZUV2ZW50ICYmIGV2ZW50LnRvdWNoZWQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGFpbHNJbnB1dHMuZm9yRWFjaChpID0+IGkuZm9ybUNvbnRyb2w/Lm1hcmtBc1RvdWNoZWQoKSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XHJcbiAgICAgIGdvb2dsZT8ubWFwcz8uZXZlbnQ/LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnM/Lih0aGlzLl9hdXRvY29tcGxldGUpO1xyXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUudW5iaW5kQWxsPy4oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGV0YWlsc0lucHV0cy5mb3JFYWNoKGkgPT4gaS5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy5fY291bnRyeSQuY29tcGxldGUoKTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TdWJJbnB1dENoYW5nZWQoKSB7XHJcbiAgICBpZiAodGhpcy5faXNBcHBseWluZ1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFNpIGxlIHBheXMgY2hhbmdlLCBsYSBicmlxdWUgbG9jYWxpdMOpIHJlY2hhcmdlIHNhIGxpc3RlIGV0IHZpZGUgc29uIGNob2l4LlxyXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcclxuICAgIGlmIChjb3VudHJ5ICE9PSB0aGlzLl9jdXJyZW50Q291bnRyeSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgIHRoaXMuX2NvdW50cnkkLm5leHQoY291bnRyeSA/PyAnJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKTtcclxuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTG9jYWxpdHlDaGFuZ2VkKHZhbHVlOiBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGwpIHtcclxuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9jYWxpdHkgPSB0b0FycmF5KHZhbHVlKS5maWx0ZXIoaXNOb25OdWxsYWJsZSlbMF0gPz8gbnVsbDtcclxuICAgIC8vIFVuZSBsb2NhbGl0w6kgY2hvaXNpZSDDoCBsYSBtYWluIHJlbXBsYWNlIGxlIHJlcMOocmUgR29vZ2xlIDogc2VzIGNvb3Jkb25uw6llcyBmb250IGZvaS5cclxuICAgIHRoaXMuX2dlbyA9IHtcclxuICAgICAgbGF0aXR1ZGU6IHRoaXMuX2xvY2FsaXR5Py5sYXRpdHVkZSA/PyBudWxsLFxyXG4gICAgICBsb25naXR1ZGU6IHRoaXMuX2xvY2FsaXR5Py5sb25naXR1ZGUgPz8gbnVsbCxcclxuICAgICAgcGxhY2VJZDogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKTtcclxuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbGlkaXR5KCkge1xyXG4gICAgdGhpcy5pbnB1dC5mb3JtQ29udHJvbD8uc2V0RXJyb3JzKFxyXG4gICAgICB0aGlzLmRldGFpbHNJbnB1dHMuc29tZShpID0+IGkuZm9ybUNvbnRyb2w/LmludmFsaWQgPz8gZmFsc2UpID8geyBpbnZhbGlkOiB0cnVlIH0gOiBudWxsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlWYWx1ZVRvRmllbGRzKHZhbHVlOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+KSB7XHJcbiAgICB0aGlzLl9nZW8gPSB7XHJcbiAgICAgIGxhdGl0dWRlOiB2YWx1ZS5sYXRpdHVkZSA/PyBudWxsLFxyXG4gICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZSA/PyBudWxsLFxyXG4gICAgICBwbGFjZUlkOiB2YWx1ZS5wbGFjZUlkID8/IG51bGwsXHJcbiAgICB9O1xyXG4gICAgLy8gVW4gcGF5cyBow6lyaXTDqSBlbiB0b3V0ZXMgbGV0dHJlcyAowqsgQmVsZ2l1bSDCuykgZXN0IHJhbWVuw6kgw6Agc29uIGNvZGUgOiBzYW5zIMOnYSwgbmkgbGFcclxuICAgIC8vIGxpc3RlIGRlcyBwYXlzIG5pIGNlbGxlIGRlcyBsb2NhbGl0w6lzIG5lIGxlIHJlY29ubmFpc3NlbnQuXHJcbiAgICB0aGlzLl9zZXRGaWVsZHMoe1xyXG4gICAgICBjaXR5OiB2YWx1ZS5jaXR5ID8/ICcnLFxyXG4gICAgICBjb3VudHJ5OiByZXNvbHZlQ291bnRyeUNvZGUodmFsdWUuY291bnRyeSkgPz8gREVGQVVMVF9DT1VOVFJZLFxyXG4gICAgICBmbG9vcjogdmFsdWUuZmxvb3IgPz8gJycsXHJcbiAgICAgIG51bWJlcjogdmFsdWUubnVtYmVyID8/ICcnLFxyXG4gICAgICBzdHJlZXQ6IHZhbHVlLnN0cmVldCA/PyAnJyxcclxuICAgICAgemlwQ29kZTogdmFsdWUuemlwQ29kZSA/PyAnJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaXNHb29nbGVBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGdvb2dsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgISFnb29nbGU/Lm1hcHM/LnBsYWNlcz8uQXV0b2NvbXBsZXRlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYmluZEF1dG9jb21wbGV0ZShlbDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XHJcbiAgICAgIGdvb2dsZT8ubWFwcz8uZXZlbnQ/LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnM/Lih0aGlzLl9hdXRvY29tcGxldGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFnb29nbGU/Lm1hcHM/LnBsYWNlcz8uQXV0b2NvbXBsZXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGVsLCB7XHJcbiAgICAgIGZpZWxkczogWydhZGRyZXNzX2NvbXBvbmVudHMnLCAnZ2VvbWV0cnknLCAncGxhY2VfaWQnXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwbGFjZSA9IHRoaXMuX2F1dG9jb21wbGV0ZT8uZ2V0UGxhY2UoKTtcclxuICAgICAgaWYgKHBsYWNlPy5nZW9tZXRyeSkge1xyXG4gICAgICAgIHRoaXMuX3BhcnNlQWRkcmVzcyhwbGFjZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcGFyc2VBZGRyZXNzKHBsYWNlOiBhbnkpIHtcclxuICAgIGNvbnN0IGFkZHJlc3NDb21wb25lbnRzID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBwbGFjZS5nZW9tZXRyeTtcclxuICAgIGNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcsIG5hbWVUeXBlOiAnbG9uZ19uYW1lJyB8ICdzaG9ydF9uYW1lJyA9ICdsb25nX25hbWUnKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGFkZHJlc3NDb21wb25lbnRzPy5maW5kKChjOiBhbnkpID0+IGMudHlwZXMuaW5jbHVkZXModHlwZSkpO1xyXG4gICAgICByZXR1cm4gY29tcG9uZW50ID8gY29tcG9uZW50W25hbWVUeXBlXSA6ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9nZW8gPSB7XHJcbiAgICAgIGxhdGl0dWRlOiBnZW9tZXRyeT8ubG9jYXRpb24/LmxhdCgpID8/IG51bGwsXHJcbiAgICAgIGxvbmdpdHVkZTogZ2VvbWV0cnk/LmxvY2F0aW9uPy5sbmcoKSA/PyBudWxsLFxyXG4gICAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCA/PyBudWxsLFxyXG4gICAgfTtcclxuICAgIC8vIExhIHJlY2hlcmNoZSBlc3QgdW5lIGFpZGUgOiBlbGxlIHByw6lyZW1wbGl0IGxlcyBjaGFtcHMgc2FucyBsZXMgZmlnZXIsXHJcbiAgICAvLyBldCBvbiBjb25zZXJ2ZSBsZSBjb21wbMOpbWVudCAow6l0YWdlL2FwcGFydGVtZW50KSBkw6lqw6Agc2Fpc2kuXHJcbiAgICB0aGlzLl9zZXRGaWVsZHMoe1xyXG4gICAgICBjaXR5OiBnZXRDb21wb25lbnQoJ2xvY2FsaXR5JyksXHJcbiAgICAgIGNvdW50cnk6IGdldENvbXBvbmVudCgnY291bnRyeScsICdzaG9ydF9uYW1lJyksXHJcbiAgICAgIGZsb29yOiB0aGlzLmNvbXBsZW1lbnRJbnB1dC52YWx1ZSA/PyAnJyxcclxuICAgICAgbnVtYmVyOiBnZXRDb21wb25lbnQoJ3N0cmVldF9udW1iZXInKSxcclxuICAgICAgc3RyZWV0OiBnZXRDb21wb25lbnQoJ3JvdXRlJyksXHJcbiAgICAgIHppcENvZGU6IGdldENvbXBvbmVudCgncG9zdGFsX2NvZGUnKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XHJcbiAgICBpZiAodGhpcy5nb29nbGVTZWFyY2hJbnB1dD8ubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmdvb2dsZVNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2UgbGVzIGNoYW1wcyBzYW5zIGTDqWNsZW5jaGVyIGxldXJzIGB2YWx1ZUNoYW5nZWRgLlxyXG4gICAqXHJcbiAgICogTGUgcGF5cyBwYXJ0IGF2YW50IGxhIGxvY2FsaXTDqSA6IGxhIGJyaXF1ZSBsb2NhbGl0w6kgdmlkZSBzb24gY2hvaXggw6AgY2hhcXVlXHJcbiAgICogY2hhbmdlbWVudCBkZSBwYXlzLCBldCDDqWNyYXNlcmFpdCBzaW5vbiBsYSBsb2NhbGl0w6kgcXUnb24gdmllbnQgZGUgcG9zZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2V0RmllbGRzKGZpZWxkczoge1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gICAgZmxvb3I6IHN0cmluZztcclxuICAgIG51bWJlcjogc3RyaW5nO1xyXG4gICAgc3RyZWV0OiBzdHJpbmc7XHJcbiAgICB6aXBDb2RlOiBzdHJpbmc7XHJcbiAgfSkge1xyXG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID0gZmllbGRzLmZsb29yO1xyXG4gICAgdGhpcy5udW1iZXJJbnB1dC52YWx1ZSA9IGZpZWxkcy5udW1iZXI7XHJcbiAgICB0aGlzLnN0cmVldElucHV0LnZhbHVlID0gZmllbGRzLnN0cmVldDtcclxuICAgIHRoaXMuY291bnRyeUlucHV0LnZhbHVlID0gW2ZpZWxkcy5jb3VudHJ5XTtcclxuICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gZmllbGRzLmNvdW50cnk7XHJcbiAgICB0aGlzLl9jb3VudHJ5JC5uZXh0KGZpZWxkcy5jb3VudHJ5KTtcclxuICAgIHRoaXMuX2xvY2FsaXR5ID1cclxuICAgICAgZmllbGRzLnppcENvZGUgfHwgZmllbGRzLmNpdHlcclxuICAgICAgICA/IHsgY2l0eTogZmllbGRzLmNpdHksIGNvdW50cnk6IGZpZWxkcy5jb3VudHJ5LCBsYXRpdHVkZTogbnVsbCwgbG9uZ2l0dWRlOiBudWxsLCB6aXBDb2RlOiBmaWVsZHMuemlwQ29kZSB9XHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgdGhpcy5sb2NhbGl0eUlucHV0LnZhbHVlID0gdGhpcy5fbG9jYWxpdHk7XHJcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB7XHJcbiAgICAgIGNpdHk6IHRoaXMuX2xvY2FsaXR5Py5jaXR5ID8/IG51bGwsXHJcbiAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbCxcclxuICAgICAgZmxvb3I6IHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID8/IG51bGwsXHJcbiAgICAgIGxhdGl0dWRlOiB0aGlzLl9nZW8ubGF0aXR1ZGUsXHJcbiAgICAgIGxvbmdpdHVkZTogdGhpcy5fZ2VvLmxvbmdpdHVkZSxcclxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcklucHV0LnZhbHVlID8/IG51bGwsXHJcbiAgICAgIHBsYWNlSWQ6IHRoaXMuX2dlby5wbGFjZUlkLFxyXG4gICAgICBzdHJlZXQ6IHRoaXMuc3RyZWV0SW5wdXQudmFsdWUgPz8gbnVsbCxcclxuICAgICAgemlwQ29kZTogdGhpcy5fbG9jYWxpdHk/LnppcENvZGUgPz8gbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIjx0YS1mb3JtLWxhYmVsIFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+PC90YS1mb3JtLWxhYmVsPlxuXG48ZGl2IGNsYXNzPVwiYWRkcmVzcy1mb3JtIGZsZXgtY29sdW1uIGctc3BhY2UtbWRcIj5cbiAgQGlmICh0aGlzLnNlYXJjaEVuYWJsZWQpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hcIj5cbiAgICAgIDx0YS1mb250LWljb24gY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faWNvblwiIG5hbWU9XCJzZWFyY2hcIiB0eXBlPVwic21cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjZ29vZ2xlU2VhcmNoSW5wdXRcbiAgICAgICAgY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faW5wdXRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInZm9ybS5hZGRyZXNzLnNlYXJjaC1nb29nbGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faGludFwiPnt7ICdmb3JtLmFkZHJlc3Muc2VhcmNoLWhpbnQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICB9XG5cbiAgPGRpdiBjbGFzcz1cImdyaWQgZy1zcGFjZS1zbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvbmUtaGFsZlwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuc3RyZWV0SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWZvdXJ0aFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMubnVtYmVySW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWZvdXJ0aFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuY29tcGxlbWVudElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxuICAgICAgPHRhLWlucHV0LWxvY2FsaXR5XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmxvY2FsaXR5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uTG9jYWxpdHlDaGFuZ2VkKCRldmVudClcIlxuICAgICAgPjwvdGEtaW5wdXQtbG9jYWxpdHk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxuICAgICAgPHRhLWlucHV0LWNob2ljZXNcbiAgICAgICAgW2lucHV0XT1cInRoaXMuY291bnRyeUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LWNob2ljZXM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjY291bnRyeUl0ZW1UcGwgbGV0LWl0ZW09XCJpdGVtXCI+XG4gIDxzcGFuIGNsYXNzPVwibG9jYWxpdHktb3B0aW9uXCI+e3sgaXRlbS5uYW1lIH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==