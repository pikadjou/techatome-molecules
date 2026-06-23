import { Component, ViewChild, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { InputDropdown, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { DropdownComponent, FormLabelComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { getCountryList } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import * as i0 from "@angular/core";
export class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        // La recherche Google n'est affichée que si l'API Maps/Places a bien été
        // injectée dans l'application (via provideGoogleMaps()).
        this.searchEnabled = false;
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
        this._translate = inject(TranslateService);
        this._geo = { latitude: null, longitude: null, placeId: null };
        this._isApplyingValue = false;
        TaTranslationForm.getInstance();
        this.countryInput = new InputDropdown({
            key: 'displayCountry',
            label: 'form.address.country',
            options$: of([]),
            validators: [Validators.required],
            withSearch: true,
        });
        this.detailsInputs = [
            this.cityInput,
            this.complementInput,
            this.countryInput,
            this.numberInput,
            this.streetInput,
            this.zipCodeInput,
        ];
    }
    ngOnInit() {
        super.ngOnInit();
        this.searchEnabled = this._isGoogleAvailable();
        this.countryInput.options$ = of(getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
            id: c.code,
            name: c.name,
        })));
        if (this.input.value) {
            this._applyValueToFields(this.input.value);
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.searchEnabled) {
            this._bindAutocomplete(this.googleSearchInput?.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this._autocomplete) {
            google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
            this._autocomplete.unbindAll?.();
        }
        this.detailsInputs.forEach(i => i.destroy());
        super.ngOnDestroy();
    }
    onSubInputChanged() {
        if (this._isApplyingValue) {
            return;
        }
        this._updateValueFromInputs();
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
            country: value.country ?? '',
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
    _setFields(fields) {
        this._isApplyingValue = true;
        this.cityInput.value = fields.city;
        this.complementInput.value = fields.floor;
        this.countryInput.value = fields.country;
        this.numberInput.value = fields.number;
        this.streetInput.value = fields.street;
        this.zipCodeInput.value = fields.zipCode;
        this._isApplyingValue = false;
    }
    _updateValueFromInputs() {
        this.input.value = {
            city: this.cityInput.value ?? null,
            country: this.countryInput.value ?? null,
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "googleSearchInput", first: true, predicate: ["googleSearchInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"full\">\n      <ta-input-dropdown\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-dropdown>\n    </div>\n    <div class=\"full\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n</div>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}\n"], dependencies: [{ kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ imports: [
                        DropdownComponent,
                        FontIconComponent,
                        FormLabelComponent,
                        TextBoxComponent,
                        TranslatePipe,
                    ], selector: 'ta-input-address', standalone: true, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-third\">\n      <ta-input-textbox\n        [input]=\"this.zipCodeInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"two-thirds\">\n      <ta-input-textbox\n        [input]=\"this.cityInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"full\">\n      <ta-input-dropdown\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-dropdown>\n    </div>\n    <div class=\"full\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n  </div>\n</div>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { googleSearchInput: [{
                type: ViewChild,
                args: ['googleSearchInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQWlDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUEwQyxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXFCakUsTUFBTSxPQUFPLHFCQUNYLFNBQVEsd0JBQXNDO0lBdUM5QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBbkNWLHlFQUF5RTtRQUN6RSx5REFBeUQ7UUFDbEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2xDLEdBQUcs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QUksSUFBSTtZQUN0QyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ3RDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJO1NBQ3pDLENBQUM7SUFDSixDQUFDOytHQXhNVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiwyTkNuQ2xDLHk2REE4REEsMC9CRHRDSSxpQkFBaUIsaUZBQ2pCLGlCQUFpQixtRkFDakIsa0JBQWtCLGlHQUNsQixnQkFBZ0IsMkVBQ2hCLGFBQWE7OzRGQU9KLHFCQUFxQjtrQkFiakMsU0FBUzs4QkFDQzt3QkFDUCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGFBQWE7cUJBQ2QsWUFDUyxrQkFBa0IsY0FDaEIsSUFBSTt3REFRZ0IsaUJBQWlCO3NCQUFoRCxTQUFTO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSUFkZHJlc3NWYWx1ZSwgSW5wdXRBZGRyZXNzLCBJbnB1dEJhc2UsIElucHV0RHJvcGRvd24sIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50LCBGb3JtTGFiZWxDb21wb25lbnQsIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCwgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgZ2V0Q291bnRyeUxpc3QgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgQWRkcmVzc0dlbyB7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIHBsYWNlSWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbkBDb21wb25lbnQoe1xuICBpbXBvcnRzOiBbXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0YS1pbnB1dC1hZGRyZXNzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkcmVzcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0QWRkcmVzc0NvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dEFkZHJlc3M+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgQFZpZXdDaGlsZCgnZ29vZ2xlU2VhcmNoSW5wdXQnKSBnb29nbGVTZWFyY2hJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgLy8gTGEgcmVjaGVyY2hlIEdvb2dsZSBuJ2VzdCBhZmZpY2jDqWUgcXVlIHNpIGwnQVBJIE1hcHMvUGxhY2VzIGEgYmllbiDDqXTDqVxuICAvLyBpbmplY3TDqWUgZGFucyBsJ2FwcGxpY2F0aW9uICh2aWEgcHJvdmlkZUdvb2dsZU1hcHMoKSkuXG4gIHB1YmxpYyBzZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gIHB1YmxpYyBjaXR5SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5Q2l0eScsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuY2l0eScsXG4gICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcbiAgcHVibGljIGNvbXBsZW1lbnRJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlGbG9vcicsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuZmxvb3InLFxuICB9KTtcbiAgcHVibGljIGNvdW50cnlJbnB1dCE6IElucHV0RHJvcGRvd248c3RyaW5nPjtcbiAgcHVibGljIGRldGFpbHNJbnB1dHM6IElucHV0QmFzZTxhbnk+W107XG4gIHB1YmxpYyBudW1iZXJJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlOdW1iZXInLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLm51bWJlcicsXG4gIH0pO1xuICBwdWJsaWMgc3RyZWV0SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5U3RyZWV0JyxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5zdHJlZXQnLFxuICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG4gIHB1YmxpYyB6aXBDb2RlSW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5WmlwQ29kZScsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuemlwQ29kZScsXG4gICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF90cmFuc2xhdGUgPSBpbmplY3QoVHJhbnNsYXRlU2VydmljZSk7XG4gIHByaXZhdGUgX2F1dG9jb21wbGV0ZTogYW55O1xuICBwcml2YXRlIF9nZW86IEFkZHJlc3NHZW8gPSB7IGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwsIHBsYWNlSWQ6IG51bGwgfTtcbiAgcHJpdmF0ZSBfaXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY291bnRyeUlucHV0ID0gbmV3IElucHV0RHJvcGRvd248c3RyaW5nPih7XG4gICAgICBrZXk6ICdkaXNwbGF5Q291bnRyeScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jb3VudHJ5JyxcbiAgICAgIG9wdGlvbnMkOiBvZihbXSksXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuZGV0YWlsc0lucHV0cyA9IFtcbiAgICAgIHRoaXMuY2l0eUlucHV0LFxuICAgICAgdGhpcy5jb21wbGVtZW50SW5wdXQsXG4gICAgICB0aGlzLmNvdW50cnlJbnB1dCxcbiAgICAgIHRoaXMubnVtYmVySW5wdXQsXG4gICAgICB0aGlzLnN0cmVldElucHV0LFxuICAgICAgdGhpcy56aXBDb2RlSW5wdXQsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2VhcmNoRW5hYmxlZCA9IHRoaXMuX2lzR29vZ2xlQXZhaWxhYmxlKCk7XG4gICAgdGhpcy5jb3VudHJ5SW5wdXQub3B0aW9ucyQgPSBvZihcbiAgICAgIGdldENvdW50cnlMaXN0KHRoaXMuX3RyYW5zbGF0ZS5jdXJyZW50TGFuZywgdGhpcy5pbnB1dC5wcmlvcml0eUNvdW50cmllcykubWFwKGMgPT4gKHtcbiAgICAgICAgaWQ6IGMuY29kZSxcbiAgICAgICAgbmFtZTogYy5uYW1lLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5fYXBwbHlWYWx1ZVRvRmllbGRzKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgdGhpcy5fYmluZEF1dG9jb21wbGV0ZSh0aGlzLmdvb2dsZVNlYXJjaElucHV0Py5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUudW5iaW5kQWxsPy4oKTtcbiAgICB9XG4gICAgdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmRlc3Ryb3koKSk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1YklucHV0Q2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBseWluZ1ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnNldEVycm9ycyhcbiAgICAgIHRoaXMuZGV0YWlsc0lucHV0cy5zb21lKGkgPT4gaS5mb3JtQ29udHJvbD8uaW52YWxpZCA/PyBmYWxzZSkgPyB7IGludmFsaWQ6IHRydWUgfSA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwbHlWYWx1ZVRvRmllbGRzKHZhbHVlOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+KSB7XG4gICAgdGhpcy5fZ2VvID0ge1xuICAgICAgbGF0aXR1ZGU6IHZhbHVlLmxhdGl0dWRlID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogdmFsdWUucGxhY2VJZCA/PyBudWxsLFxuICAgIH07XG4gICAgdGhpcy5fc2V0RmllbGRzKHtcbiAgICAgIGNpdHk6IHZhbHVlLmNpdHkgPz8gJycsXG4gICAgICBjb3VudHJ5OiB2YWx1ZS5jb3VudHJ5ID8/ICcnLFxuICAgICAgZmxvb3I6IHZhbHVlLmZsb29yID8/ICcnLFxuICAgICAgbnVtYmVyOiB2YWx1ZS5udW1iZXIgPz8gJycsXG4gICAgICBzdHJlZXQ6IHZhbHVlLnN0cmVldCA/PyAnJyxcbiAgICAgIHppcENvZGU6IHZhbHVlLnppcENvZGUgPz8gJycsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0dvb2dsZUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIGdvb2dsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgISFnb29nbGU/Lm1hcHM/LnBsYWNlcz8uQXV0b2NvbXBsZXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZEF1dG9jb21wbGV0ZShlbDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgfVxuICAgIGlmICghZ29vZ2xlPy5tYXBzPy5wbGFjZXM/LkF1dG9jb21wbGV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShlbCwge1xuICAgICAgZmllbGRzOiBbJ2FkZHJlc3NfY29tcG9uZW50cycsICdnZW9tZXRyeScsICdwbGFjZV9pZCddLFxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlID0gdGhpcy5fYXV0b2NvbXBsZXRlPy5nZXRQbGFjZSgpO1xuICAgICAgaWYgKHBsYWNlPy5nZW9tZXRyeSkge1xuICAgICAgICB0aGlzLl9wYXJzZUFkZHJlc3MocGxhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VBZGRyZXNzKHBsYWNlOiBhbnkpIHtcbiAgICBjb25zdCBhZGRyZXNzQ29tcG9uZW50cyA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cztcbiAgICBjb25zdCBnZW9tZXRyeSA9IHBsYWNlLmdlb21ldHJ5O1xuICAgIGNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcsIG5hbWVUeXBlOiAnbG9uZ19uYW1lJyB8ICdzaG9ydF9uYW1lJyA9ICdsb25nX25hbWUnKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBhZGRyZXNzQ29tcG9uZW50cz8uZmluZCgoYzogYW55KSA9PiBjLnR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQgPyBjb21wb25lbnRbbmFtZVR5cGVdIDogJyc7XG4gICAgfTtcblxuICAgIHRoaXMuX2dlbyA9IHtcbiAgICAgIGxhdGl0dWRlOiBnZW9tZXRyeT8ubG9jYXRpb24/LmxhdCgpID8/IG51bGwsXG4gICAgICBsb25naXR1ZGU6IGdlb21ldHJ5Py5sb2NhdGlvbj8ubG5nKCkgPz8gbnVsbCxcbiAgICAgIHBsYWNlSWQ6IHBsYWNlLnBsYWNlX2lkID8/IG51bGwsXG4gICAgfTtcbiAgICAvLyBMYSByZWNoZXJjaGUgZXN0IHVuZSBhaWRlIDogZWxsZSBwcsOpcmVtcGxpdCBsZXMgY2hhbXBzIHNhbnMgbGVzIGZpZ2VyLFxuICAgIC8vIGV0IG9uIGNvbnNlcnZlIGxlIGNvbXBsw6ltZW50ICjDqXRhZ2UvYXBwYXJ0ZW1lbnQpIGTDqWrDoCBzYWlzaS5cbiAgICB0aGlzLl9zZXRGaWVsZHMoe1xuICAgICAgY2l0eTogZ2V0Q29tcG9uZW50KCdsb2NhbGl0eScpLFxuICAgICAgY291bnRyeTogZ2V0Q29tcG9uZW50KCdjb3VudHJ5JywgJ3Nob3J0X25hbWUnKSxcbiAgICAgIGZsb29yOiB0aGlzLmNvbXBsZW1lbnRJbnB1dC52YWx1ZSA/PyAnJyxcbiAgICAgIG51bWJlcjogZ2V0Q29tcG9uZW50KCdzdHJlZXRfbnVtYmVyJyksXG4gICAgICBzdHJlZXQ6IGdldENvbXBvbmVudCgncm91dGUnKSxcbiAgICAgIHppcENvZGU6IGdldENvbXBvbmVudCgncG9zdGFsX2NvZGUnKSxcbiAgICB9KTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKTtcbiAgICBpZiAodGhpcy5nb29nbGVTZWFyY2hJbnB1dD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5nb29nbGVTZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmllbGRzKGZpZWxkczoge1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgZmxvb3I6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBzdHJlZXQ6IHN0cmluZztcbiAgICB6aXBDb2RlOiBzdHJpbmc7XG4gIH0pIHtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIHRoaXMuY2l0eUlucHV0LnZhbHVlID0gZmllbGRzLmNpdHk7XG4gICAgdGhpcy5jb21wbGVtZW50SW5wdXQudmFsdWUgPSBmaWVsZHMuZmxvb3I7XG4gICAgdGhpcy5jb3VudHJ5SW5wdXQudmFsdWUgPSBmaWVsZHMuY291bnRyeTtcbiAgICB0aGlzLm51bWJlcklucHV0LnZhbHVlID0gZmllbGRzLm51bWJlcjtcbiAgICB0aGlzLnN0cmVldElucHV0LnZhbHVlID0gZmllbGRzLnN0cmVldDtcbiAgICB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA9IGZpZWxkcy56aXBDb2RlO1xuICAgIHRoaXMuX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB7XG4gICAgICBjaXR5OiB0aGlzLmNpdHlJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5SW5wdXQudmFsdWUgPz8gbnVsbCxcbiAgICAgIGZsb29yOiB0aGlzLmNvbXBsZW1lbnRJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgbGF0aXR1ZGU6IHRoaXMuX2dlby5sYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZTogdGhpcy5fZ2VvLmxvbmdpdHVkZSxcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXJJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogdGhpcy5fZ2VvLnBsYWNlSWQsXG4gICAgICBzdHJlZXQ6IHRoaXMuc3RyZWV0SW5wdXQudmFsdWUgPz8gbnVsbCxcbiAgICAgIHppcENvZGU6IHRoaXMuemlwQ29kZUlucHV0LnZhbHVlID8/IG51bGwsXG4gICAgfTtcbiAgfVxufVxuIiwiPHRhLWZvcm0tbGFiZWwgW2lucHV0XT1cInRoaXMuaW5wdXRcIj48L3RhLWZvcm0tbGFiZWw+XG5cbjxkaXYgY2xhc3M9XCJhZGRyZXNzLWZvcm0gZmxleC1jb2x1bW4gZy1zcGFjZS1tZFwiPlxuICBAaWYgKHRoaXMuc2VhcmNoRW5hYmxlZCkge1xuICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLXNlYXJjaFwiPlxuICAgICAgPHRhLWZvbnQtaWNvbiBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoX19pY29uXCIgbmFtZT1cInNlYXJjaFwiIHR5cGU9XCJzbVwiPjwvdGEtZm9udC1pY29uPlxuICAgICAgPGlucHV0XG4gICAgICAgICNnb29nbGVTZWFyY2hJbnB1dFxuICAgICAgICBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoX19pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidmb3JtLmFkZHJlc3Muc2VhcmNoLWdvb2dsZScgfCB0cmFuc2xhdGVcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3Mtc2VhcmNoX19oaW50XCI+e3sgJ2Zvcm0uYWRkcmVzcy5zZWFyY2gtaGludCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gIH1cblxuICA8ZGl2IGNsYXNzPVwiZ3JpZCBnLXNwYWNlLXNtXCI+XG4gICAgPGRpdiBjbGFzcz1cInR3by10aGlyZHNcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLnN0cmVldElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9uZS10aGlyZFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMubnVtYmVySW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLXRoaXJkXCI+XG4gICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICBbaW5wdXRdPVwidGhpcy56aXBDb2RlSW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHdvLXRoaXJkc1wiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuY2l0eUlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1kcm9wZG93blxuICAgICAgICBbaW5wdXRdPVwidGhpcy5jb3VudHJ5SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC10ZXh0Ym94XG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvbXBsZW1lbnRJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19