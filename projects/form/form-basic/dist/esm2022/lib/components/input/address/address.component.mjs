import { Component, ViewChild, inject } from '@angular/core';
import { TouchedChangeEvent, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject, filter, of, switchMap } from 'rxjs';
import { InputChoices, InputTextBox, } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { FormLabelComponent, InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent, } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { TaAddressLookupService, getCountryList } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import * as i0 from "@angular/core";
export class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        // La recherche Google n'est affichée que si l'API Maps/Places a bien été
        // injectée dans l'application (via provideGoogleMaps()).
        this.searchEnabled = false;
        // Le choix code postal / commune remplace les champs libres tant que le pays
        // a des données ; sinon on bascule sur la saisie libre (zipCode + ville).
        this.localityAvailable = true;
        this.cityInput = new InputTextBox({
            key: 'displayCity',
            label: 'form.address.city',
            validators: [Validators.required],
        });
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
        this.zipCodeInput = new InputTextBox({
            key: 'displayZipCode',
            label: 'form.address.zipCode',
            validators: [Validators.required],
        });
        this._lookup = inject(TaAddressLookupService);
        this._translate = inject(TranslateService);
        this._country$ = new Subject();
        this._currentCountry = null;
        this._geo = { latitude: null, longitude: null, placeId: null };
        this._isApplyingValue = false;
        this._localities = [];
        this._localityMap = new Map();
        TaTranslationForm.getInstance();
        this.countryInput = new InputChoices({
            key: 'displayCountry',
            label: 'form.address.country',
            options$: of([]),
            validators: [Validators.required],
            value: ['BE'],
            withSearch: true,
        });
        this.localityInput = new InputChoices({
            // La liste complète du pays est gardée en mémoire ; advancedSearch$ filtre
            // côté client et plafonne l'affichage.
            advancedSearch$: (search) => of(this._searchLocalities(search)),
            key: 'displayLocality',
            label: 'form.address.locality',
            validators: [Validators.required],
            withSearch: true,
        });
        this.detailsInputs = [
            this.cityInput,
            this.complementInput,
            this.countryInput,
            this.localityInput,
            this.numberInput,
            this.streetInput,
            this.zipCodeInput,
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
        this.localityInput.choiceTemplate = { one: this._localityItemTpl };
        this.countryInput.choiceTemplate = { one: this._countryItemTpl };
        this.countryInput.options$ = of(getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
            data: c,
            id: c.code,
            name: c.name,
        })));
        // Pour chaque pays, on récupère TOUTE la liste des codes postaux / communes ;
        // la recherche se fait ensuite côté client (advancedSearch$).
        this._registerSubscription(this._country$
            .pipe(switchMap(country => this._lookup.getCountryPostalCodes(country)))
            .subscribe(localities => {
            this._localities = localities;
            this._rebuildLocalityMap(localities);
            this.localityAvailable = localities.length > 0;
            this._choicesRef?.refresh();
        }));
        if (this.input.value) {
            this._applyValueToFields(this.input.value);
        }
        else {
            // Adresse vide : on sème le pays par défaut (Belgique) dans la valeur.
            this._updateValueFromInputs();
        }
        this._currentCountry = this.countryInput.value?.[0] ?? null;
        this._country$.next(this.countryInput.value?.[0] ?? '');
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.searchEnabled) {
            this._bindAutocomplete(this.googleSearchInput?.nativeElement);
        }
        this._choicesRef?.refresh();
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
        // Si le pays change, on recharge la liste et on réinitialise le choix.
        const country = this.countryInput.value?.[0] ?? null;
        if (country !== this._currentCountry) {
            this._currentCountry = country;
            this.localityInput.value = [];
            this._country$.next(country ?? '');
        }
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    onLocalitySelected() {
        const id = this.localityInput.value?.[0];
        const locality = id ? this._localityMap.get(id) : undefined;
        if (!locality) {
            return;
        }
        this._geo = { latitude: locality.latitude, longitude: locality.longitude, placeId: null };
        this._isApplyingValue = true;
        this.zipCodeInput.value = locality.zipCode;
        this.cityInput.value = locality.city;
        this._isApplyingValue = false;
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    _searchLocalities(search) {
        const term = (search ?? '').trim().toLowerCase();
        const matched = term
            ? this._localities.filter(locality => `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term))
            : this._localities;
        return matched.map(locality => this._toOption(locality));
    }
    _toOption(locality) {
        return {
            data: locality,
            id: `${locality.zipCode}__${locality.city}`,
            name: `${locality.zipCode} ${locality.city}`,
        };
    }
    _rebuildLocalityMap(localities) {
        this._localityMap.clear();
        localities.forEach(locality => this._localityMap.set(`${locality.zipCode}__${locality.city}`, locality));
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
            country: value.country || 'BE',
            floor: value.floor ?? '',
            number: value.number ?? '',
            street: value.street ?? '',
            zipCode: value.zipCode ?? '',
        });
        // Présélection du choix code postal / commune (affiché une fois la liste chargée).
        if (value.zipCode && value.city) {
            this.localityInput.value = [`${value.zipCode}__${value.city}`];
        }
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
        // Recharge la liste du pays et présélectionne la localité trouvée.
        this._currentCountry = this.countryInput.value?.[0] ?? null;
        this._country$.next(this.countryInput.value?.[0] ?? '');
        const zipCode = this.zipCodeInput.value;
        const city = this.cityInput.value;
        if (zipCode && city) {
            this.localityInput.value = [`${zipCode}__${city}`];
        }
        this._updateValueFromInputs();
        if (this.googleSearchInput?.nativeElement) {
            this.googleSearchInput.nativeElement.value = '';
        }
    }
    _setFields(fields) {
        this._isApplyingValue = true;
        this.cityInput.value = fields.city;
        this.complementInput.value = fields.floor;
        this.countryInput.value = [fields.country];
        this.numberInput.value = fields.number;
        this.streetInput.value = fields.street;
        this.zipCodeInput.value = fields.zipCode;
        this._isApplyingValue = false;
    }
    _updateValueFromInputs() {
        this.input.value = {
            city: this.cityInput.value ?? null,
            country: this.countryInput.value?.[0] ?? null,
            floor: this.complementInput.value ?? null,
            latitude: this._geo.latitude,
            longitude: this._geo.longitude,
            number: this.numberInput.value ?? null,
            placeId: this._geo.placeId,
            street: this.streetInput.value ?? null,
            zipCode: this.zipCodeInput.value ?? null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "googleSearchInput", first: true, predicate: ["googleSearchInput"], descendants: true }, { propertyName: "_choicesRef", first: true, predicate: InputChoicesComponent, descendants: true }, { propertyName: "_localityItemTpl", first: true, predicate: ["localityItemTpl"], descendants: true, static: true }, { propertyName: "_countryItemTpl", first: true, predicate: ["countryItemTpl"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    @if (this.localityAvailable) {\n      <div class=\"full\">\n        <ta-input-choices\n          [input]=\"this.localityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onLocalitySelected()\"\n        ></ta-input-choices>\n      </div>\n    } @else {\n      <div class=\"one-third\">\n        <ta-input-textbox\n          [input]=\"this.zipCodeInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n      <div class=\"two-thirds\">\n        <ta-input-textbox\n          [input]=\"this.cityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n    }\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom", "variant"] }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ imports: [
                        FontIconComponent,
                        FormLabelComponent,
                        InputChoicesComponent,
                        TextBoxComponent,
                        TranslatePipe,
                    ], selector: 'ta-input-address', standalone: true, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    @if (this.localityAvailable) {\n      <div class=\"full\">\n        <ta-input-choices\n          [input]=\"this.localityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onLocalitySelected()\"\n        ></ta-input-choices>\n      </div>\n    } @else {\n      <div class=\"one-third\">\n        <ta-input-textbox\n          [input]=\"this.zipCodeInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n      <div class=\"two-thirds\">\n        <ta-input-textbox\n          [input]=\"this.cityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n    }\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { googleSearchInput: [{
                type: ViewChild,
                args: ['googleSearchInput']
            }], _choicesRef: [{
                type: ViewChild,
                args: [InputChoicesComponent]
            }], _localityItemTpl: [{
                type: ViewChild,
                args: ['localityItemTpl', { static: true }]
            }], _countryItemTpl: [{
                type: ViewChild,
                args: ['countryItemTpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQThDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUlMLFlBQVksRUFFWixZQUFZLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLGdCQUFnQixHQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFxQmpFLE1BQU0sT0FBTyxxQkFDWCxTQUFRLHdCQUFzQztJQW1EOUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQTVDVix5RUFBeUU7UUFDekUseURBQXlEO1FBQ2xELGtCQUFh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QUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUN0QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSTtTQUN6QyxDQUFDO0lBQ0osQ0FBQzsrR0F2VVUscUJBQXFCO21HQUFyQixxQkFBcUIsa09BS3JCLHFCQUFxQiw2U0NwRGxDLDAvRUFrRkEsd29DRDlDSSxpQkFBaUIsbUZBQ2pCLGtCQUFrQiw0R0FDbEIscUJBQXFCLDZEQUNyQixnQkFBZ0IsMkVBQ2hCLGFBQWE7OzRGQU9KLHFCQUFxQjtrQkFiakMsU0FBUzs4QkFDQzt3QkFDUCxpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLGFBQWE7cUJBQ2QsWUFDUyxrQkFBa0IsY0FDaEIsSUFBSTt3REFRZ0IsaUJBQWlCO3NCQUFoRCxTQUFTO3VCQUFDLG1CQUFtQjtnQkFDWSxXQUFXO3NCQUFwRCxTQUFTO3VCQUFDLHFCQUFxQjtnQkFDd0IsZ0JBQWdCO3NCQUF2RSxTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDUyxlQUFlO3NCQUFyRSxTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvdWNoZWRDaGFuZ2VFdmVudCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZmlsdGVyLCBvZiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIElBZGRyZXNzVmFsdWUsXG4gIElucHV0QWRkcmVzcyxcbiAgSW5wdXRCYXNlLFxuICBJbnB1dENob2ljZXMsXG4gIElucHV0Q2hvaWNlc09wdGlvbixcbiAgSW5wdXRUZXh0Qm94LFxufSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQge1xuICBGb3JtTGFiZWxDb21wb25lbnQsXG4gIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50LFxuICBUZXh0Qm94Q29tcG9uZW50LFxufSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEFkZHJlc3NMb2NhbGl0eSwgVGFBZGRyZXNzTG9va3VwU2VydmljZSwgZ2V0Q291bnRyeUxpc3QgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgQWRkcmVzc0dlbyB7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIHBsYWNlSWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbkBDb21wb25lbnQoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgICBUZXh0Qm94Q29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gIF0sXG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtYWRkcmVzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHN0eWxlVXJsczogWycuL2FkZHJlc3MuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEFkZHJlc3NDb21wb25lbnRcbiAgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRBZGRyZXNzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIEBWaWV3Q2hpbGQoJ2dvb2dsZVNlYXJjaElucHV0JykgZ29vZ2xlU2VhcmNoSW5wdXQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKElucHV0Q2hvaWNlc0NvbXBvbmVudCkgcHJpdmF0ZSBfY2hvaWNlc1JlZj86IElucHV0Q2hvaWNlc0NvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnbG9jYWxpdHlJdGVtVHBsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfbG9jYWxpdHlJdGVtVHBsITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnY291bnRyeUl0ZW1UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9jb3VudHJ5SXRlbVRwbCE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gTGEgcmVjaGVyY2hlIEdvb2dsZSBuJ2VzdCBhZmZpY2jDqWUgcXVlIHNpIGwnQVBJIE1hcHMvUGxhY2VzIGEgYmllbiDDqXTDqVxuICAvLyBpbmplY3TDqWUgZGFucyBsJ2FwcGxpY2F0aW9uICh2aWEgcHJvdmlkZUdvb2dsZU1hcHMoKSkuXG4gIHB1YmxpYyBzZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gIC8vIExlIGNob2l4IGNvZGUgcG9zdGFsIC8gY29tbXVuZSByZW1wbGFjZSBsZXMgY2hhbXBzIGxpYnJlcyB0YW50IHF1ZSBsZSBwYXlzXG4gIC8vIGEgZGVzIGRvbm7DqWVzIDsgc2lub24gb24gYmFzY3VsZSBzdXIgbGEgc2Fpc2llIGxpYnJlICh6aXBDb2RlICsgdmlsbGUpLlxuICBwdWJsaWMgbG9jYWxpdHlBdmFpbGFibGUgPSB0cnVlO1xuICBwdWJsaWMgY2l0eUlucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiAnZGlzcGxheUNpdHknLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmNpdHknLFxuICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG4gIHB1YmxpYyBjb21wbGVtZW50SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5Rmxvb3InLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmZsb29yJyxcbiAgfSk7XG4gIHB1YmxpYyBjb3VudHJ5SW5wdXQhOiBJbnB1dENob2ljZXM7XG4gIHB1YmxpYyBkZXRhaWxzSW5wdXRzOiBJbnB1dEJhc2U8YW55PltdO1xuICBwdWJsaWMgbG9jYWxpdHlJbnB1dCE6IElucHV0Q2hvaWNlcztcbiAgcHVibGljIG51bWJlcklucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiAnZGlzcGxheU51bWJlcicsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MubnVtYmVyJyxcbiAgfSk7XG4gIHB1YmxpYyBzdHJlZXRJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlTdHJlZXQnLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLnN0cmVldCcsXG4gICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcbiAgcHVibGljIHppcENvZGVJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlaaXBDb2RlJyxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy56aXBDb2RlJyxcbiAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvb2t1cCA9IGluamVjdChUYUFkZHJlc3NMb29rdXBTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNsYXRlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICBwcml2YXRlIF9hdXRvY29tcGxldGU6IGFueTtcbiAgcHJpdmF0ZSBfY291bnRyeSQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZ2VvOiBBZGRyZXNzR2VvID0geyBsYXRpdHVkZTogbnVsbCwgbG9uZ2l0dWRlOiBudWxsLCBwbGFjZUlkOiBudWxsIH07XG4gIHByaXZhdGUgX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSA9IFtdO1xuICBwcml2YXRlIF9sb2NhbGl0eU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBZGRyZXNzTG9jYWxpdHk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY291bnRyeUlucHV0ID0gbmV3IElucHV0Q2hvaWNlcyh7XG4gICAgICBrZXk6ICdkaXNwbGF5Q291bnRyeScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jb3VudHJ5JyxcbiAgICAgIG9wdGlvbnMkOiBvZihbXSksXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB2YWx1ZTogWydCRSddLFxuICAgICAgd2l0aFNlYXJjaDogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmxvY2FsaXR5SW5wdXQgPSBuZXcgSW5wdXRDaG9pY2VzKHtcbiAgICAgIC8vIExhIGxpc3RlIGNvbXBsw6h0ZSBkdSBwYXlzIGVzdCBnYXJkw6llIGVuIG3DqW1vaXJlIDsgYWR2YW5jZWRTZWFyY2gkIGZpbHRyZVxuICAgICAgLy8gY8O0dMOpIGNsaWVudCBldCBwbGFmb25uZSBsJ2FmZmljaGFnZS5cbiAgICAgIGFkdmFuY2VkU2VhcmNoJDogKHNlYXJjaD86IHN0cmluZykgPT4gb2YodGhpcy5fc2VhcmNoTG9jYWxpdGllcyhzZWFyY2gpKSxcbiAgICAgIGtleTogJ2Rpc3BsYXlMb2NhbGl0eScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5sb2NhbGl0eScsXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuZGV0YWlsc0lucHV0cyA9IFtcbiAgICAgIHRoaXMuY2l0eUlucHV0LFxuICAgICAgdGhpcy5jb21wbGVtZW50SW5wdXQsXG4gICAgICB0aGlzLmNvdW50cnlJbnB1dCxcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dCxcbiAgICAgIHRoaXMubnVtYmVySW5wdXQsXG4gICAgICB0aGlzLnN0cmVldElucHV0LFxuICAgICAgdGhpcy56aXBDb2RlSW5wdXQsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIC8vIExlcyBzb3VzLWNoYW1wcyBuYWlzc2VudCBpY2kgOiBzYW5zIMOnYSwgdW5lIGFkcmVzc2UgZMOpc2FjdGl2w6llIHJlc3RhaXQgw6lkaXRhYmxlLlxuICAgIGlmICh0aGlzLmlucHV0LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRldGFpbHNJbnB1dHMuZm9yRWFjaChpID0+IChpLmRpc2FibGVkID0gdHJ1ZSkpO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaEVuYWJsZWQgPSB0aGlzLl9pc0dvb2dsZUF2YWlsYWJsZSgpICYmICF0aGlzLmlucHV0LmRpc2FibGVkO1xuICAgIC8vIFJlbmR1IGQndW5lIG9wdGlvbiAobGUgY29tcG9zYW50IGfDqHJlIGxhIGJvdWNsZSBldCBsJ2VtcGlsZW1lbnQgdmVydGljYWwpLlxuICAgIHRoaXMubG9jYWxpdHlJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9sb2NhbGl0eUl0ZW1UcGwgfTtcbiAgICB0aGlzLmNvdW50cnlJbnB1dC5jaG9pY2VUZW1wbGF0ZSA9IHsgb25lOiB0aGlzLl9jb3VudHJ5SXRlbVRwbCB9O1xuICAgIHRoaXMuY291bnRyeUlucHV0Lm9wdGlvbnMkID0gb2YoXG4gICAgICBnZXRDb3VudHJ5TGlzdCh0aGlzLl90cmFuc2xhdGUuY3VycmVudExhbmcsIHRoaXMuaW5wdXQucHJpb3JpdHlDb3VudHJpZXMpLm1hcChjID0+ICh7XG4gICAgICAgIGRhdGE6IGMsXG4gICAgICAgIGlkOiBjLmNvZGUsXG4gICAgICAgIG5hbWU6IGMubmFtZSxcbiAgICAgIH0pKVxuICAgICk7XG4gICAgLy8gUG91ciBjaGFxdWUgcGF5cywgb24gcsOpY3Vww6hyZSBUT1VURSBsYSBsaXN0ZSBkZXMgY29kZXMgcG9zdGF1eCAvIGNvbW11bmVzIDtcbiAgICAvLyBsYSByZWNoZXJjaGUgc2UgZmFpdCBlbnN1aXRlIGPDtHTDqSBjbGllbnQgKGFkdmFuY2VkU2VhcmNoJCkuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICB0aGlzLl9jb3VudHJ5JFxuICAgICAgICAucGlwZShzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLl9sb29rdXAuZ2V0Q291bnRyeVBvc3RhbENvZGVzKGNvdW50cnkpKSlcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGl0aWVzID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2NhbGl0aWVzID0gbG9jYWxpdGllcztcbiAgICAgICAgICB0aGlzLl9yZWJ1aWxkTG9jYWxpdHlNYXAobG9jYWxpdGllcyk7XG4gICAgICAgICAgdGhpcy5sb2NhbGl0eUF2YWlsYWJsZSA9IGxvY2FsaXRpZXMubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLl9jaG9pY2VzUmVmPy5yZWZyZXNoKCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5fYXBwbHlWYWx1ZVRvRmllbGRzKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZHJlc3NlIHZpZGUgOiBvbiBzw6htZSBsZSBwYXlzIHBhciBkw6lmYXV0IChCZWxnaXF1ZSkgZGFucyBsYSB2YWxldXIuXG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudENvdW50cnkgPSB0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/IG51bGw7XG4gICAgdGhpcy5fY291bnRyeSQubmV4dCh0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/ICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgdGhpcy5fYmluZEF1dG9jb21wbGV0ZSh0aGlzLmdvb2dsZVNlYXJjaElucHV0Py5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5fY2hvaWNlc1JlZj8ucmVmcmVzaCgpO1xuICAgIC8vIExlcyBjb250csO0bGVzIGRlcyBzb3VzLWNoYW1wcyBuJ2V4aXN0ZW50IHF1J3VuZSBmb2lzIGxhIHZ1ZSBjb25zdHJ1aXRlIDogc2FucyBjZSBjYWxjdWwsXG4gICAgLy8gdW5lIGFkcmVzc2UgdmlkZSBwYXNzYWl0IHBvdXIgdmFsaWRlIGp1c3F1J8OgIGxhIHByZW1pw6hyZSBzYWlzaWUuIEhvcnMgZHUgY3ljbGUgY291cmFudFxuICAgIC8vIHBvdXIgbmUgcGFzIG1vZGlmaWVyIHVuZSB2YWxldXIgZMOpasOgIHbDqXJpZmnDqWUuXG4gICAgcXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5fcmVmcmVzaFZhbGlkaXR5KCkpO1xuICAgIC8vIFVuZSBzb3VtaXNzaW9uIGludmFsaWRlIG1hcnF1ZSBsZSBjb250csO0bGUgZCdhZHJlc3NlIHRvdWNow6kgOiBvbiBsZSByw6lwZXJjdXRlIGF1eFxuICAgIC8vIHNvdXMtY2hhbXBzLCBzaW5vbiBsZXVycyBtZXNzYWdlcyBkJ2VycmV1ciByZXN0ZW50IGludmlzaWJsZXMuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICBjb250cm9sLmV2ZW50c1xuICAgICAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIFRvdWNoZWRDaGFuZ2VFdmVudCAmJiBldmVudC50b3VjaGVkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0YWlsc0lucHV0cy5mb3JFYWNoKGkgPT4gaS5mb3JtQ29udHJvbD8ubWFya0FzVG91Y2hlZCgpKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIGdvb2dsZT8ubWFwcz8uZXZlbnQ/LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnM/Lih0aGlzLl9hdXRvY29tcGxldGUpO1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnVuYmluZEFsbD8uKCk7XG4gICAgfVxuICAgIHRoaXMuZGV0YWlsc0lucHV0cy5mb3JFYWNoKGkgPT4gaS5kZXN0cm95KCkpO1xuICAgIHRoaXMuX2NvdW50cnkkLmNvbXBsZXRlKCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1YklucHV0Q2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBseWluZ1ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNpIGxlIHBheXMgY2hhbmdlLCBvbiByZWNoYXJnZSBsYSBsaXN0ZSBldCBvbiByw6lpbml0aWFsaXNlIGxlIGNob2l4LlxuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/IG51bGw7XG4gICAgaWYgKGNvdW50cnkgIT09IHRoaXMuX2N1cnJlbnRDb3VudHJ5KSB7XG4gICAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IGNvdW50cnk7XG4gICAgICB0aGlzLmxvY2FsaXR5SW5wdXQudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuX2NvdW50cnkkLm5leHQoY291bnRyeSA/PyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9jYWxpdHlTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZT8uWzBdO1xuICAgIGNvbnN0IGxvY2FsaXR5ID0gaWQgPyB0aGlzLl9sb2NhbGl0eU1hcC5nZXQoaWQpIDogdW5kZWZpbmVkO1xuICAgIGlmICghbG9jYWxpdHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZ2VvID0geyBsYXRpdHVkZTogbG9jYWxpdHkubGF0aXR1ZGUsIGxvbmdpdHVkZTogbG9jYWxpdHkubG9uZ2l0dWRlLCBwbGFjZUlkOiBudWxsIH07XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gdHJ1ZTtcbiAgICB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA9IGxvY2FsaXR5LnppcENvZGU7XG4gICAgdGhpcy5jaXR5SW5wdXQudmFsdWUgPSBsb2NhbGl0eS5jaXR5O1xuICAgIHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuX3JlZnJlc2hWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VhcmNoTG9jYWxpdGllcyhzZWFyY2g/OiBzdHJpbmcpOiBJbnB1dENob2ljZXNPcHRpb25bXSB7XG4gICAgY29uc3QgdGVybSA9IChzZWFyY2ggPz8gJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IG1hdGNoZWQgPSB0ZXJtXG4gICAgICA/IHRoaXMuX2xvY2FsaXRpZXMuZmlsdGVyKGxvY2FsaXR5ID0+XG4gICAgICAgICAgYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKVxuICAgICAgICApXG4gICAgICA6IHRoaXMuX2xvY2FsaXRpZXM7XG4gICAgcmV0dXJuIG1hdGNoZWQubWFwKGxvY2FsaXR5ID0+IHRoaXMuX3RvT3B0aW9uKGxvY2FsaXR5KSk7XG4gIH1cblxuICBwcml2YXRlIF90b09wdGlvbihsb2NhbGl0eTogQWRkcmVzc0xvY2FsaXR5KTogSW5wdXRDaG9pY2VzT3B0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbG9jYWxpdHksXG4gICAgICBpZDogYCR7bG9jYWxpdHkuemlwQ29kZX1fXyR7bG9jYWxpdHkuY2l0eX1gLFxuICAgICAgbmFtZTogYCR7bG9jYWxpdHkuemlwQ29kZX0gJHtsb2NhbGl0eS5jaXR5fWAsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlYnVpbGRMb2NhbGl0eU1hcChsb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSkge1xuICAgIHRoaXMuX2xvY2FsaXR5TWFwLmNsZWFyKCk7XG4gICAgbG9jYWxpdGllcy5mb3JFYWNoKGxvY2FsaXR5ID0+XG4gICAgICB0aGlzLl9sb2NhbGl0eU1hcC5zZXQoYCR7bG9jYWxpdHkuemlwQ29kZX1fXyR7bG9jYWxpdHkuY2l0eX1gLCBsb2NhbGl0eSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbGlkaXR5KCkge1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnNldEVycm9ycyhcbiAgICAgIHRoaXMuZGV0YWlsc0lucHV0cy5zb21lKGkgPT4gaS5mb3JtQ29udHJvbD8uaW52YWxpZCA/PyBmYWxzZSkgPyB7IGludmFsaWQ6IHRydWUgfSA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlWYWx1ZVRvRmllbGRzKHZhbHVlOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+KSB7XG4gICAgdGhpcy5fZ2VvID0ge1xuICAgICAgbGF0aXR1ZGU6IHZhbHVlLmxhdGl0dWRlID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogdmFsdWUucGxhY2VJZCA/PyBudWxsLFxuICAgIH07XG4gICAgdGhpcy5fc2V0RmllbGRzKHtcbiAgICAgIGNpdHk6IHZhbHVlLmNpdHkgPz8gJycsXG4gICAgICBjb3VudHJ5OiB2YWx1ZS5jb3VudHJ5IHx8ICdCRScsXG4gICAgICBmbG9vcjogdmFsdWUuZmxvb3IgPz8gJycsXG4gICAgICBudW1iZXI6IHZhbHVlLm51bWJlciA/PyAnJyxcbiAgICAgIHN0cmVldDogdmFsdWUuc3RyZWV0ID8/ICcnLFxuICAgICAgemlwQ29kZTogdmFsdWUuemlwQ29kZSA/PyAnJyxcbiAgICB9KTtcbiAgICAvLyBQcsOpc8OpbGVjdGlvbiBkdSBjaG9peCBjb2RlIHBvc3RhbCAvIGNvbW11bmUgKGFmZmljaMOpIHVuZSBmb2lzIGxhIGxpc3RlIGNoYXJnw6llKS5cbiAgICBpZiAodmFsdWUuemlwQ29kZSAmJiB2YWx1ZS5jaXR5KSB7XG4gICAgICB0aGlzLmxvY2FsaXR5SW5wdXQudmFsdWUgPSBbYCR7dmFsdWUuemlwQ29kZX1fXyR7dmFsdWUuY2l0eX1gXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0dvb2dsZUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIGdvb2dsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgISFnb29nbGU/Lm1hcHM/LnBsYWNlcz8uQXV0b2NvbXBsZXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZEF1dG9jb21wbGV0ZShlbDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgfVxuICAgIGlmICghZ29vZ2xlPy5tYXBzPy5wbGFjZXM/LkF1dG9jb21wbGV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShlbCwge1xuICAgICAgZmllbGRzOiBbJ2FkZHJlc3NfY29tcG9uZW50cycsICdnZW9tZXRyeScsICdwbGFjZV9pZCddLFxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlID0gdGhpcy5fYXV0b2NvbXBsZXRlPy5nZXRQbGFjZSgpO1xuICAgICAgaWYgKHBsYWNlPy5nZW9tZXRyeSkge1xuICAgICAgICB0aGlzLl9wYXJzZUFkZHJlc3MocGxhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VBZGRyZXNzKHBsYWNlOiBhbnkpIHtcbiAgICBjb25zdCBhZGRyZXNzQ29tcG9uZW50cyA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cztcbiAgICBjb25zdCBnZW9tZXRyeSA9IHBsYWNlLmdlb21ldHJ5O1xuICAgIGNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcsIG5hbWVUeXBlOiAnbG9uZ19uYW1lJyB8ICdzaG9ydF9uYW1lJyA9ICdsb25nX25hbWUnKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBhZGRyZXNzQ29tcG9uZW50cz8uZmluZCgoYzogYW55KSA9PiBjLnR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQgPyBjb21wb25lbnRbbmFtZVR5cGVdIDogJyc7XG4gICAgfTtcblxuICAgIHRoaXMuX2dlbyA9IHtcbiAgICAgIGxhdGl0dWRlOiBnZW9tZXRyeT8ubG9jYXRpb24/LmxhdCgpID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IGdlb21ldHJ5Py5sb2NhdGlvbj8ubG5nKCkgPz8gbnVsbCxcbiAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkID8/IG51bGwsXG4gICAgfTtcbiAgICAvLyBMYSByZWNoZXJjaGUgZXN0IHVuZSBhaWRlIDogZWxsZSBwcsOpcmVtcGxpdCBsZXMgY2hhbXBzIHNhbnMgbGVzIGZpZ2VyLFxuICAgIC8vIGV0IG9uIGNvbnNlcnZlIGxlIGNvbXBsw6ltZW50ICjDqXRhZ2UvYXBwYXJ0ZW1lbnQpIGTDqWrDoCBzYWlzaS5cbiAgICB0aGlzLl9zZXRGaWVsZHMoe1xuICAgICAgY2l0eTogZ2V0Q29tcG9uZW50KCdsb2NhbGl0eScpLFxuICAgICAgY291bnRyeTogZ2V0Q29tcG9uZW50KCdjb3VudHJ5JywgJ3Nob3J0X25hbWUnKSxcbiAgICAgIGZsb29yOiB0aGlzLmNvbXBsZW1lbnRJbnB1dC52YWx1ZSA/PyAnJyxcbiAgICAgIG51bWJlcjogZ2V0Q29tcG9uZW50KCdzdHJlZXRfbnVtYmVyJyksXG4gICAgICBzdHJlZXQ6IGdldENvbXBvbmVudCgncm91dGUnKSxcbiAgICAgIHppcENvZGU6IGdldENvbXBvbmVudCgncG9zdGFsX2NvZGUnKSxcbiAgICB9KTtcbiAgICAvLyBSZWNoYXJnZSBsYSBsaXN0ZSBkdSBwYXlzIGV0IHByw6lzw6lsZWN0aW9ubmUgbGEgbG9jYWxpdMOpIHRyb3V2w6llLlxuICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gdGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyBudWxsO1xuICAgIHRoaXMuX2NvdW50cnkkLm5leHQodGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyAnJyk7XG4gICAgY29uc3QgemlwQ29kZSA9IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGNpdHkgPSB0aGlzLmNpdHlJbnB1dC52YWx1ZTtcbiAgICBpZiAoemlwQ29kZSAmJiBjaXR5KSB7XG4gICAgICB0aGlzLmxvY2FsaXR5SW5wdXQudmFsdWUgPSBbYCR7emlwQ29kZX1fXyR7Y2l0eX1gXTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgaWYgKHRoaXMuZ29vZ2xlU2VhcmNoSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZ29vZ2xlU2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldEZpZWxkcyhmaWVsZHM6IHtcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGZsb29yOiBzdHJpbmc7XG4gICAgbnVtYmVyOiBzdHJpbmc7XG4gICAgc3RyZWV0OiBzdHJpbmc7XG4gICAgemlwQ29kZTogc3RyaW5nO1xuICB9KSB7XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gdHJ1ZTtcbiAgICB0aGlzLmNpdHlJbnB1dC52YWx1ZSA9IGZpZWxkcy5jaXR5O1xuICAgIHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID0gZmllbGRzLmZsb29yO1xuICAgIHRoaXMuY291bnRyeUlucHV0LnZhbHVlID0gW2ZpZWxkcy5jb3VudHJ5XTtcbiAgICB0aGlzLm51bWJlcklucHV0LnZhbHVlID0gZmllbGRzLm51bWJlcjtcbiAgICB0aGlzLnN0cmVldElucHV0LnZhbHVlID0gZmllbGRzLnN0cmVldDtcbiAgICB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA9IGZpZWxkcy56aXBDb2RlO1xuICAgIHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB7XG4gICAgICBjaXR5OiB0aGlzLmNpdHlJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5SW5wdXQudmFsdWU/LlswXSA/PyBudWxsLFxuICAgICAgZmxvb3I6IHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBsYXRpdHVkZTogdGhpcy5fZ2VvLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB0aGlzLl9nZW8ubG9uZ2l0dWRlLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcklucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiB0aGlzLl9nZW8ucGxhY2VJZCxcbiAgICAgIHN0cmVldDogdGhpcy5zdHJlZXRJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgemlwQ29kZTogdGhpcy56aXBDb2RlSW5wdXQudmFsdWUgPz8gbnVsbCxcbiAgICB9O1xuICB9XG59XG4iLCI8dGEtZm9ybS1sYWJlbCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPjwvdGEtZm9ybS1sYWJlbD5cblxuPGRpdiBjbGFzcz1cImFkZHJlc3MtZm9ybSBmbGV4LWNvbHVtbiBnLXNwYWNlLW1kXCI+XG4gIEBpZiAodGhpcy5zZWFyY2hFbmFibGVkKSB7XG4gICAgPGRpdiBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoXCI+XG4gICAgICA8dGEtZm9udC1pY29uIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2ljb25cIiBuYW1lPVwic2VhcmNoXCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2dvb2dsZVNlYXJjaElucHV0XG4gICAgICAgIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2lucHV0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2Zvcm0uYWRkcmVzcy5zZWFyY2gtZ29vZ2xlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hfX2hpbnRcIj57eyAnZm9ybS5hZGRyZXNzLnNlYXJjaC1oaW50JyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgfVxuXG4gIDxkaXYgY2xhc3M9XCJncmlkIGctc3BhY2Utc21cIj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWhhbGZcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLnN0cmVldElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLm51bWJlcklucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS1mb3VydGhcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvbXBsZW1lbnRJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuXG4gICAgQGlmICh0aGlzLmxvY2FsaXR5QXZhaWxhYmxlKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxuICAgICAgICA8dGEtaW5wdXQtY2hvaWNlc1xuICAgICAgICAgIFtpbnB1dF09XCJ0aGlzLmxvY2FsaXR5SW5wdXRcIlxuICAgICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vbkxvY2FsaXR5U2VsZWN0ZWQoKVwiXG4gICAgICAgID48L3RhLWlucHV0LWNob2ljZXM+XG4gICAgICA8L2Rpdj5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJvbmUtdGhpcmRcIj5cbiAgICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgICBbaW5wdXRdPVwidGhpcy56aXBDb2RlSW5wdXRcIlxuICAgICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInR3by10aGlyZHNcIj5cbiAgICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgICBbaW5wdXRdPVwidGhpcy5jaXR5SW5wdXRcIlxuICAgICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XG4gICAgICA8dGEtaW5wdXQtY2hvaWNlc1xuICAgICAgICBbaW5wdXRdPVwidGhpcy5jb3VudHJ5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtY2hvaWNlcz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNsb2NhbGl0eUl0ZW1UcGwgbGV0LWl0ZW09XCJpdGVtXCI+XG4gIDxzcGFuIGNsYXNzPVwibG9jYWxpdHktb3B0aW9uXCI+e3sgaXRlbS56aXBDb2RlIH19IHt7IGl0ZW0uY2l0eSB9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjY291bnRyeUl0ZW1UcGwgbGV0LWl0ZW09XCJpdGVtXCI+XG4gIDxzcGFuIGNsYXNzPVwibG9jYWxpdHktb3B0aW9uXCI+e3sgaXRlbS5uYW1lIH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==