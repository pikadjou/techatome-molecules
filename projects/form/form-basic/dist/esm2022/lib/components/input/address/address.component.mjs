import { Component, ViewChild, inject } from '@angular/core';
import { TouchedChangeEvent, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, filter, of } from 'rxjs';
import { InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { FormLabelComponent, InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent, } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { getCountryList, isNonNullable, toArray } from '@ta/utils';
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
        this._setFields({
            city: value.city ?? '',
            country: value.country || DEFAULT_COUNTRY,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQThDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQTBDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFtQixjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFReEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBZ0I3QixNQUFNLE9B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QWE7cUJBQ2QsWUFDUyxrQkFBa0IsY0FDaEIsSUFBSTt3REFRZ0IsaUJBQWlCO3NCQUFoRCxTQUFTO3VCQUFDLG1CQUFtQjtnQkFDeUIsZUFBZTtzQkFBckUsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBnb29nbGU6IGFueTtcblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb3VjaGVkQ2hhbmdlRXZlbnQsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZmlsdGVyLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJQWRkcmVzc1ZhbHVlLCBJbnB1dEFkZHJlc3MsIElucHV0QmFzZSwgSW5wdXRDaG9pY2VzLCBJbnB1dExvY2FsaXR5LCBJbnB1dFRleHRCb3ggfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQge1xuICBGb3JtTGFiZWxDb21wb25lbnQsXG4gIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50LFxuICBUZXh0Qm94Q29tcG9uZW50LFxufSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEFkZHJlc3NMb2NhbGl0eSwgZ2V0Q291bnRyeUxpc3QsIGlzTm9uTnVsbGFibGUsIHRvQXJyYXkgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5wdXRMb2NhbGl0eUNvbXBvbmVudCB9IGZyb20gJy4uL2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBBZGRyZXNzR2VvIHtcbiAgbGF0aXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIGxvbmdpdHVkZTogbnVtYmVyIHwgbnVsbDtcbiAgcGxhY2VJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgREVGQVVMVF9DT1VOVFJZID0gJ0JFJztcblxuQENvbXBvbmVudCh7XG4gIGltcG9ydHM6IFtcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBGb3JtTGFiZWxDb21wb25lbnQsXG4gICAgSW5wdXRDaG9pY2VzQ29tcG9uZW50LFxuICAgIElucHV0TG9jYWxpdHlDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICBdLFxuICBzZWxlY3RvcjogJ3RhLWlucHV0LWFkZHJlc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzdHlsZVVybHM6IFsnLi9hZGRyZXNzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRBZGRyZXNzQ29tcG9uZW50XG4gIGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0QWRkcmVzcz5cbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBAVmlld0NoaWxkKCdnb29nbGVTZWFyY2hJbnB1dCcpIGdvb2dsZVNlYXJjaElucHV0PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnY291bnRyeUl0ZW1UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9jb3VudHJ5SXRlbVRwbCE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gTGEgcmVjaGVyY2hlIEdvb2dsZSBuJ2VzdCBhZmZpY2jDqWUgcXVlIHNpIGwnQVBJIE1hcHMvUGxhY2VzIGEgYmllbiDDqXTDqVxuICAvLyBpbmplY3TDqWUgZGFucyBsJ2FwcGxpY2F0aW9uICh2aWEgcHJvdmlkZUdvb2dsZU1hcHMoKSkuXG4gIHB1YmxpYyBzZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gIHB1YmxpYyBjb21wbGVtZW50SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5Rmxvb3InLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmZsb29yJyxcbiAgfSk7XG4gIHB1YmxpYyBjb3VudHJ5SW5wdXQhOiBJbnB1dENob2ljZXM7XG4gIHB1YmxpYyBkZXRhaWxzSW5wdXRzOiBJbnB1dEJhc2U8YW55PltdO1xuICAvLyBDb2RlIHBvc3RhbCArIGNvbW11bmUgOiBsYSBicmlxdWUgbG9jYWxpdMOpIHBvcnRlIGxhIGxpc3RlIGR1IHBheXMgZXQgc29uIMOpdmVudHVlbCByZXBsaS5cbiAgcHVibGljIGxvY2FsaXR5SW5wdXQhOiBJbnB1dExvY2FsaXR5O1xuICBwdWJsaWMgbnVtYmVySW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5TnVtYmVyJyxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5udW1iZXInLFxuICB9KTtcbiAgcHVibGljIHN0cmVldElucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiAnZGlzcGxheVN0cmVldCcsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3Muc3RyZWV0JyxcbiAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RyYW5zbGF0ZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfYXV0b2NvbXBsZXRlOiBhbnk7XG4gIHByaXZhdGUgX2NvdW50cnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KERFRkFVTFRfQ09VTlRSWSk7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZ2VvOiBBZGRyZXNzR2VvID0geyBsYXRpdHVkZTogbnVsbCwgbG9uZ2l0dWRlOiBudWxsLCBwbGFjZUlkOiBudWxsIH07XG4gIHByaXZhdGUgX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2NhbGl0eTogQWRkcmVzc0xvY2FsaXR5IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY291bnRyeUlucHV0ID0gbmV3IElucHV0Q2hvaWNlcyh7XG4gICAgICBrZXk6ICdkaXNwbGF5Q291bnRyeScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jb3VudHJ5JyxcbiAgICAgIG9wdGlvbnMkOiBvZihbXSksXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB2YWx1ZTogW0RFRkFVTFRfQ09VTlRSWV0sXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMubG9jYWxpdHlJbnB1dCA9IG5ldyBJbnB1dExvY2FsaXR5KHtcbiAgICAgIGNvdW50cnkkOiB0aGlzLl9jb3VudHJ5JCxcbiAgICAgIGtleTogJ2Rpc3BsYXlMb2NhbGl0eScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5sb2NhbGl0eScsXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5kZXRhaWxzSW5wdXRzID0gW1xuICAgICAgdGhpcy5jb21wbGVtZW50SW5wdXQsXG4gICAgICB0aGlzLmNvdW50cnlJbnB1dCxcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dCxcbiAgICAgIHRoaXMubnVtYmVySW5wdXQsXG4gICAgICB0aGlzLnN0cmVldElucHV0LFxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAvLyBMZXMgc291cy1jaGFtcHMgbmFpc3NlbnQgaWNpIDogc2FucyDDp2EsIHVuZSBhZHJlc3NlIGTDqXNhY3RpdsOpZSByZXN0YWl0IMOpZGl0YWJsZS5cbiAgICBpZiAodGhpcy5pbnB1dC5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiAoaS5kaXNhYmxlZCA9IHRydWUpKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hFbmFibGVkID0gdGhpcy5faXNHb29nbGVBdmFpbGFibGUoKSAmJiAhdGhpcy5pbnB1dC5kaXNhYmxlZDtcbiAgICAvLyBSZW5kdSBkJ3VuZSBvcHRpb24gKGxlIGNvbXBvc2FudCBnw6hyZSBsYSBib3VjbGUgZXQgbCdlbXBpbGVtZW50IHZlcnRpY2FsKS5cbiAgICB0aGlzLmNvdW50cnlJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9jb3VudHJ5SXRlbVRwbCB9O1xuICAgIHRoaXMuY291bnRyeUlucHV0Lm9wdGlvbnMkID0gb2YoXG4gICAgICBnZXRDb3VudHJ5TGlzdCh0aGlzLl90cmFuc2xhdGUuY3VycmVudExhbmcsIHRoaXMuaW5wdXQucHJpb3JpdHlDb3VudHJpZXMpLm1hcChjID0+ICh7XG4gICAgICAgIGRhdGE6IGMsXG4gICAgICAgIGlkOiBjLmNvZGUsXG4gICAgICAgIG5hbWU6IGMubmFtZSxcbiAgICAgIH0pKVxuICAgICk7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuX2FwcGx5VmFsdWVUb0ZpZWxkcyh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRyZXNzZSB2aWRlIDogb24gc8OobWUgbGUgcGF5cyBwYXIgZMOpZmF1dCAoQmVsZ2lxdWUpIGRhbnMgbGEgdmFsZXVyLlxuICAgICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gdGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyBudWxsO1xuICAgIHRoaXMuX2NvdW50cnkkLm5leHQodGhpcy5fY3VycmVudENvdW50cnkgPz8gREVGQVVMVF9DT1VOVFJZKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgdGhpcy5fYmluZEF1dG9jb21wbGV0ZSh0aGlzLmdvb2dsZVNlYXJjaElucHV0Py5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgLy8gTGVzIGNvbnRyw7RsZXMgZGVzIHNvdXMtY2hhbXBzIG4nZXhpc3RlbnQgcXUndW5lIGZvaXMgbGEgdnVlIGNvbnN0cnVpdGUgOiBzYW5zIGNlIGNhbGN1bCxcbiAgICAvLyB1bmUgYWRyZXNzZSB2aWRlIHBhc3NhaXQgcG91ciB2YWxpZGUganVzcXUnw6AgbGEgcHJlbWnDqHJlIHNhaXNpZS4gSG9ycyBkdSBjeWNsZSBjb3VyYW50XG4gICAgLy8gcG91ciBuZSBwYXMgbW9kaWZpZXIgdW5lIHZhbGV1ciBkw6lqw6AgdsOpcmlmacOpZS5cbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLl9yZWZyZXNoVmFsaWRpdHkoKSk7XG4gICAgLy8gVW5lIHNvdW1pc3Npb24gaW52YWxpZGUgbWFycXVlIGxlIGNvbnRyw7RsZSBkJ2FkcmVzc2UgdG91Y2jDqSA6IG9uIGxlIHLDqXBlcmN1dGUgYXV4XG4gICAgLy8gc291cy1jaGFtcHMsIHNpbm9uIGxldXJzIG1lc3NhZ2VzIGQnZXJyZXVyIHJlc3RlbnQgaW52aXNpYmxlcy5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5pbnB1dC5mb3JtQ29udHJvbDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIGNvbnRyb2wuZXZlbnRzXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hlZENoYW5nZUV2ZW50ICYmIGV2ZW50LnRvdWNoZWQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUudW5iaW5kQWxsPy4oKTtcbiAgICB9XG4gICAgdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY291bnRyeSQuY29tcGxldGUoKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uU3ViSW5wdXRDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2kgbGUgcGF5cyBjaGFuZ2UsIGxhIGJyaXF1ZSBsb2NhbGl0w6kgcmVjaGFyZ2Ugc2EgbGlzdGUgZXQgdmlkZSBzb24gY2hvaXguXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcbiAgICBpZiAoY291bnRyeSAhPT0gdGhpcy5fY3VycmVudENvdW50cnkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gY291bnRyeTtcbiAgICAgIHRoaXMuX2NvdW50cnkkLm5leHQoY291bnRyeSA/PyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9jYWxpdHlDaGFuZ2VkKHZhbHVlOiBBZGRyZXNzTG9jYWxpdHkgfCBBZGRyZXNzTG9jYWxpdHlbXSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNBcHBseWluZ1ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsaXR5ID0gdG9BcnJheSh2YWx1ZSkuZmlsdGVyKGlzTm9uTnVsbGFibGUpWzBdID8/IG51bGw7XG4gICAgLy8gVW5lIGxvY2FsaXTDqSBjaG9pc2llIMOgIGxhIG1haW4gcmVtcGxhY2UgbGUgcmVww6hyZSBHb29nbGUgOiBzZXMgY29vcmRvbm7DqWVzIGZvbnQgZm9pLlxuICAgIHRoaXMuX2dlbyA9IHtcbiAgICAgIGxhdGl0dWRlOiB0aGlzLl9sb2NhbGl0eT8ubGF0aXR1ZGUgPz8gbnVsbCxcbiAgICAgIGxvbmdpdHVkZTogdGhpcy5fbG9jYWxpdHk/LmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbGlkaXR5KCkge1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnNldEVycm9ycyhcbiAgICAgIHRoaXMuZGV0YWlsc0lucHV0cy5zb21lKGkgPT4gaS5mb3JtQ29udHJvbD8uaW52YWxpZCA/PyBmYWxzZSkgPyB7IGludmFsaWQ6IHRydWUgfSA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlWYWx1ZVRvRmllbGRzKHZhbHVlOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+KSB7XG4gICAgdGhpcy5fZ2VvID0ge1xuICAgICAgbGF0aXR1ZGU6IHZhbHVlLmxhdGl0dWRlID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogdmFsdWUucGxhY2VJZCA/PyBudWxsLFxuICAgIH07XG4gICAgdGhpcy5fc2V0RmllbGRzKHtcbiAgICAgIGNpdHk6IHZhbHVlLmNpdHkgPz8gJycsXG4gICAgICBjb3VudHJ5OiB2YWx1ZS5jb3VudHJ5IHx8IERFRkFVTFRfQ09VTlRSWSxcbiAgICAgIGZsb29yOiB2YWx1ZS5mbG9vciA/PyAnJyxcbiAgICAgIG51bWJlcjogdmFsdWUubnVtYmVyID8/ICcnLFxuICAgICAgc3RyZWV0OiB2YWx1ZS5zdHJlZXQgPz8gJycsXG4gICAgICB6aXBDb2RlOiB2YWx1ZS56aXBDb2RlID8/ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNHb29nbGVBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBnb29nbGUgIT09ICd1bmRlZmluZWQnICYmICEhZ29vZ2xlPy5tYXBzPy5wbGFjZXM/LkF1dG9jb21wbGV0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2JpbmRBdXRvY29tcGxldGUoZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIGdvb2dsZT8ubWFwcz8uZXZlbnQ/LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnM/Lih0aGlzLl9hdXRvY29tcGxldGUpO1xuICAgIH1cbiAgICBpZiAoIWdvb2dsZT8ubWFwcz8ucGxhY2VzPy5BdXRvY29tcGxldGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoZWwsIHtcbiAgICAgIGZpZWxkczogWydhZGRyZXNzX2NvbXBvbmVudHMnLCAnZ2VvbWV0cnknLCAncGxhY2VfaWQnXSxcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZSA9IHRoaXMuX2F1dG9jb21wbGV0ZT8uZ2V0UGxhY2UoKTtcbiAgICAgIGlmIChwbGFjZT8uZ2VvbWV0cnkpIHtcbiAgICAgICAgdGhpcy5fcGFyc2VBZGRyZXNzKHBsYWNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQWRkcmVzcyhwbGFjZTogYW55KSB7XG4gICAgY29uc3QgYWRkcmVzc0NvbXBvbmVudHMgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHM7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBwbGFjZS5nZW9tZXRyeTtcbiAgICBjb25zdCBnZXRDb21wb25lbnQgPSAodHlwZTogc3RyaW5nLCBuYW1lVHlwZTogJ2xvbmdfbmFtZScgfCAnc2hvcnRfbmFtZScgPSAnbG9uZ19uYW1lJykgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gYWRkcmVzc0NvbXBvbmVudHM/LmZpbmQoKGM6IGFueSkgPT4gYy50eXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50ID8gY29tcG9uZW50W25hbWVUeXBlXSA6ICcnO1xuICAgIH07XG5cbiAgICB0aGlzLl9nZW8gPSB7XG4gICAgICBsYXRpdHVkZTogZ2VvbWV0cnk/LmxvY2F0aW9uPy5sYXQoKSA/PyBudWxsLFxuICAgICAgbG9uZ2l0dWRlOiBnZW9tZXRyeT8ubG9jYXRpb24/LmxuZygpID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCA/PyBudWxsLFxuICAgIH07XG4gICAgLy8gTGEgcmVjaGVyY2hlIGVzdCB1bmUgYWlkZSA6IGVsbGUgcHLDqXJlbXBsaXQgbGVzIGNoYW1wcyBzYW5zIGxlcyBmaWdlcixcbiAgICAvLyBldCBvbiBjb25zZXJ2ZSBsZSBjb21wbMOpbWVudCAow6l0YWdlL2FwcGFydGVtZW50KSBkw6lqw6Agc2Fpc2kuXG4gICAgdGhpcy5fc2V0RmllbGRzKHtcbiAgICAgIGNpdHk6IGdldENvbXBvbmVudCgnbG9jYWxpdHknKSxcbiAgICAgIGNvdW50cnk6IGdldENvbXBvbmVudCgnY291bnRyeScsICdzaG9ydF9uYW1lJyksXG4gICAgICBmbG9vcjogdGhpcy5jb21wbGVtZW50SW5wdXQudmFsdWUgPz8gJycsXG4gICAgICBudW1iZXI6IGdldENvbXBvbmVudCgnc3RyZWV0X251bWJlcicpLFxuICAgICAgc3RyZWV0OiBnZXRDb21wb25lbnQoJ3JvdXRlJyksXG4gICAgICB6aXBDb2RlOiBnZXRDb21wb25lbnQoJ3Bvc3RhbF9jb2RlJyksXG4gICAgfSk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgaWYgKHRoaXMuZ29vZ2xlU2VhcmNoSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZ29vZ2xlU2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NlIGxlcyBjaGFtcHMgc2FucyBkw6ljbGVuY2hlciBsZXVycyBgdmFsdWVDaGFuZ2VkYC5cbiAgICpcbiAgICogTGUgcGF5cyBwYXJ0IGF2YW50IGxhIGxvY2FsaXTDqSA6IGxhIGJyaXF1ZSBsb2NhbGl0w6kgdmlkZSBzb24gY2hvaXggw6AgY2hhcXVlXG4gICAqIGNoYW5nZW1lbnQgZGUgcGF5cywgZXQgw6ljcmFzZXJhaXQgc2lub24gbGEgbG9jYWxpdMOpIHF1J29uIHZpZW50IGRlIHBvc2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0RmllbGRzKGZpZWxkczoge1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgZmxvb3I6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBzdHJlZXQ6IHN0cmluZztcbiAgICB6aXBDb2RlOiBzdHJpbmc7XG4gIH0pIHtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID0gZmllbGRzLmZsb29yO1xuICAgIHRoaXMubnVtYmVySW5wdXQudmFsdWUgPSBmaWVsZHMubnVtYmVyO1xuICAgIHRoaXMuc3RyZWV0SW5wdXQudmFsdWUgPSBmaWVsZHMuc3RyZWV0O1xuICAgIHRoaXMuY291bnRyeUlucHV0LnZhbHVlID0gW2ZpZWxkcy5jb3VudHJ5XTtcbiAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IGZpZWxkcy5jb3VudHJ5O1xuICAgIHRoaXMuX2NvdW50cnkkLm5leHQoZmllbGRzLmNvdW50cnkpO1xuICAgIHRoaXMuX2xvY2FsaXR5ID1cbiAgICAgIGZpZWxkcy56aXBDb2RlIHx8IGZpZWxkcy5jaXR5XG4gICAgICAgID8geyBjaXR5OiBmaWVsZHMuY2l0eSwgY291bnRyeTogZmllbGRzLmNvdW50cnksIGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwsIHppcENvZGU6IGZpZWxkcy56aXBDb2RlIH1cbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZSA9IHRoaXMuX2xvY2FsaXR5O1xuICAgIHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB7XG4gICAgICBjaXR5OiB0aGlzLl9sb2NhbGl0eT8uY2l0eSA/PyBudWxsLFxuICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyBudWxsLFxuICAgICAgZmxvb3I6IHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBsYXRpdHVkZTogdGhpcy5fZ2VvLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB0aGlzLl9nZW8ubG9uZ2l0dWRlLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcklucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiB0aGlzLl9nZW8ucGxhY2VJZCxcbiAgICAgIHN0cmVldDogdGhpcy5zdHJlZXRJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgemlwQ29kZTogdGhpcy5fbG9jYWxpdHk/LnppcENvZGUgPz8gbnVsbCxcbiAgICB9O1xuICB9XG59XG4iLCI8dGEtZm9ybS1sYWJlbCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPjwvdGEtZm9ybS1sYWJlbD5cblxuPGRpdiBjbGFzcz1cImFkZHJlc3MtZm9ybSBmbGV4LWNvbHVtbiBnLXNwYWNlLW1kXCI+XG4gIEBpZiAodGhpcy5zZWFyY2hFbmFibGVkKSB7XG4gICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoXCI+XG4gICAgICA8dGEtZm9udC1pY29uIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2ljb25cIiBuYW1lPVwic2VhcmNoXCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2dvb2dsZVNlYXJjaElucHV0XG4gICAgICAgIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2lucHV0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2Zvcm0uYWRkcmVzcy5zZWFyY2gtZ29vZ2xlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2hpbnRcIj57eyAnZm9ybS5hZGRyZXNzLnNlYXJjaC1oaW50JyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgfVxuXG4gIDxkaXYgY2xhc3M9XCJncmlkIGctc3BhY2Utc21cIj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWhhbGZcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLnN0cmVldElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLm51bWJlcklucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvbXBsZW1lbnRJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1sb2NhbGl0eVxuICAgICAgICBbaW5wdXRdPVwidGhpcy5sb2NhbGl0eUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkxvY2FsaXR5Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgID48L3RhLWlucHV0LWxvY2FsaXR5PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvdW50cnlJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC1jaG9pY2VzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2NvdW50cnlJdGVtVHBsIGxldC1pdGVtPVwiaXRlbVwiPlxuICA8c3BhbiBjbGFzcz1cImxvY2FsaXR5LW9wdGlvblwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=