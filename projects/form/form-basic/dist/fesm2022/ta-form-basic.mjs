import { NgClass, NgTemplateOutlet, NgIf, NgFor, AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, Component, input, EventEmitter, Output, signal, HostListener } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import deepEqual from 'fast-deep-equal';
import { distinctUntilChanged, BehaviorSubject } from 'rxjs';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TaLazyTranslationService, TranslatePipe } from '@ta/translation';
import { ButtonComponent, TitleComponent, LinkComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent, extractEnum, Culture, StopPropagationDirective } from '@ta/utils';
import { TaAbstractInputComponent, TextBoxComponent, FormLabelComponent, CheckboxComponent, InputChoicesComponent, ComponentInputComponent, CultureComponent, DatePickerComponent, DropdownComponent, LabelComponent, InputPhoneComponent, RadioComponent, InputSchemaComponent, SliderComponent, SwitchComponent, TextareaComponent, TimePickerComponent, ToggleComponent, UploadComponent, InputImageComponent, InputImagesComponent, InputLogoComponent, WysiswygComponent, RatingComponent } from '@ta/form-input';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocalIconComponent, FontIconComponent } from '@ta/icons';
import * as i1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { Menu, MenuBase } from '@ta/menu';

class TaTranslationForm extends TaLazyTranslationService {
    constructor() {
        super("form");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationForm, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationForm, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationForm, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    parseAddress(place) {
        const addressComponents = place.address_components;
        const getComponent = (type) => {
            const component = addressComponents.find((comp) => comp.types.includes(type));
            return component ? component.long_name : null;
        };
        const addressData = {
            streetNumber: getComponent("street_number"),
            street: getComponent("route"),
            locality: getComponent("locality"),
            postalCode: getComponent("postal_code"),
            country: getComponent("country"),
        };
        this.input.value = addressData;
    }
    dispatchNewValue() {
        this.input.updateValue();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"input\"></ta-form-label>\n<!-- <mat-google-maps-autocomplete\n  class=\"form-control\"\n  autocomplete=\"off\"\n  appearance=\"standard\"\n  [addressLabelText]=\"''\"\n  [placeholderText]=\"'form.input.address.placeholder' | translate\"\n  [requiredErrorText]=\"'form.input.address.required' | translate\"\n  [invalidErrorText]=\"'form.input.address.invalid' | translate\"\n  (onAutocompleteSelected)=\"this.parseAddress($event)\"\n  #addresstext\n></mat-google-maps-autocomplete> -->\n\n<div class=\"grid g-space-sm\">\n  <div class=\"one-half\">\n    <ta-input-textbox\n      [input]=\"this.input.street\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-fourth\">\n    <ta-input-textbox\n      [input]=\"this.input.number\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-fourth\">\n    <ta-input-textbox\n      [input]=\"this.input.floor\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-third\">\n    <ta-input-textbox\n      [input]=\"this.input.zipCode\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"two-thirds\">\n    <ta-input-textbox\n      [input]=\"this.input.city\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"full\">\n    <ta-input-textbox\n      [input]=\"this.input.country\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n</div>\n", styles: ["::ng-deep .mat-mdc-form-field-required-marker{display:none}::ng-deep .mat-mdc-form-field-infix{padding-top:var(--ta-space-sm)!important;padding-bottom:var(--ta-space-sm)!important;align-content:center;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}::ng-deep .mat-mdc-text-field-wrapper{border-radius:var(--ta-radius-rounded)!important}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "ngmodule", type: MatGoogleMapsAutocompleteModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatInputModule }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-address", standalone: true, imports: [
                        TranslateModule,
                        MatGoogleMapsAutocompleteModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        TextBoxComponent,
                        FormLabelComponent,
                    ], template: "<ta-form-label [input]=\"input\"></ta-form-label>\n<!-- <mat-google-maps-autocomplete\n  class=\"form-control\"\n  autocomplete=\"off\"\n  appearance=\"standard\"\n  [addressLabelText]=\"''\"\n  [placeholderText]=\"'form.input.address.placeholder' | translate\"\n  [requiredErrorText]=\"'form.input.address.required' | translate\"\n  [invalidErrorText]=\"'form.input.address.invalid' | translate\"\n  (onAutocompleteSelected)=\"this.parseAddress($event)\"\n  #addresstext\n></mat-google-maps-autocomplete> -->\n\n<div class=\"grid g-space-sm\">\n  <div class=\"one-half\">\n    <ta-input-textbox\n      [input]=\"this.input.street\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-fourth\">\n    <ta-input-textbox\n      [input]=\"this.input.number\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-fourth\">\n    <ta-input-textbox\n      [input]=\"this.input.floor\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"one-third\">\n    <ta-input-textbox\n      [input]=\"this.input.zipCode\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"two-thirds\">\n    <ta-input-textbox\n      [input]=\"this.input.city\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n  <div class=\"full\">\n    <ta-input-textbox\n      [input]=\"this.input.country\"\n      [standalone]=\"true\"\n      (valueChanged)=\"this.dispatchNewValue()\"\n    ></ta-input-textbox>\n  </div>\n</div>\n", styles: ["::ng-deep .mat-mdc-form-field-required-marker{display:none}::ng-deep .mat-mdc-form-field-infix{padding-top:var(--ta-space-sm)!important;padding-bottom:var(--ta-space-sm)!important;align-content:center;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}::ng-deep .mat-mdc-text-field-wrapper{border-radius:var(--ta-radius-rounded)!important}\n"] }]
        }], ctorParameters: () => [] });

class DynamicComponent extends TaBaseComponent {
    // Getter for backward compatibility
    get input() {
        return this.inputModel();
    }
    constructor() {
        super();
        this.inputsTemplate = input.required();
        this.inputModel = input.required({ alias: 'input' });
        this.add = () => {
            this.input.add();
        };
        this.remove = (index) => {
            this.input.remove(index);
        };
    }
    canRemove(index) {
        return !isNaN(Number(index));
    }
    getKeys() {
        return Object.keys(this.input.inputsGroup);
    }
    getInputs(key) {
        return this.input.inputsGroup[key];
    }
    trackByFn(_, key) {
        return key;
    }
    trackInputByFn(_, input) {
        return input.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DynamicComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DynamicComponent, isStandalone: true, selector: "ta-input-dynamic", inputs: { inputsTemplate: { classPropertyName: "inputsTemplate", publicName: "inputsTemplate", isSignal: true, isRequired: true, transformFunction: null }, inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n  <div>\n    @if (this.canRemove(key)) {\n    <div class=\"remove-action\">\n      <ta-button\n        class=\"remove-action\"\n        [style]=\"'danger'\"\n        (action)=\"remove(key)\"\n      >\n        <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n      </ta-button>\n    </div>\n    } @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n    @if (input) {\n    <div [ngClass]=\"input.class\">\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate()\"\n        [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n  }\n  <ta-button (action)=\"add()\">{{ \"form.dynamic.add\" | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-dynamic", standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgClass,
                        NgTemplateOutlet,
                        LocalIconComponent,
                        ButtonComponent,
                        TranslatePipe,
                    ], template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n  <div>\n    @if (this.canRemove(key)) {\n    <div class=\"remove-action\">\n      <ta-button\n        class=\"remove-action\"\n        [style]=\"'danger'\"\n        (action)=\"remove(key)\"\n      >\n        <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n      </ta-button>\n    </div>\n    } @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n    @if (input) {\n    <div [ngClass]=\"input.class\">\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate()\"\n        [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n  }\n  <ta-button (action)=\"add()\">{{ \"form.dynamic.add\" | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"] }]
        }], ctorParameters: () => [] });

class PanelComponent extends TaBaseComponent {
    constructor() {
        super();
        this.inputsTemplate = input.required();
        this.panel = input.required();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: PanelComponent, isStandalone: true, selector: "ta-form-panel", inputs: { inputsTemplate: { classPropertyName: "inputsTemplate", publicName: "inputsTemplate", isSignal: true, isRequired: true, transformFunction: null }, panel: { classPropertyName: "panel", publicName: "panel", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [ngClass]=\"this.panel().containerClass\">\n  @if (this.panel().label) {\n  <ta-title [level]=\"2\" class=\"panel-title\">{{\n    this.panel().label | translate\n  }}</ta-title>\n  }\n\n  <div [ngClass]=\"this.panel().contentClass\">\n    @for (input of this.panel().children; track this.trackByKey($index, input)) {\n    @if (input) {\n    <div\n      [ngClass]=\"input.class\"\n      [style.display]=\"(input.visible$ | async) ? 'block' : 'none'\"\n      class=\"mb-space-sm\"\n    >\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate()\"\n        [ngTemplateOutletContext]=\"{\n          input: input\n        }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n</div>\n", styles: [".with-separator{border-bottom:1px solid #a9a9a9;padding-bottom:2em}.highlight-title .panel-title{color:var(--ta-surface-brand-primary);font-size:var(--ta-font-body-lg-default-size);font-weight:var(--ta-font-body-lg-bold-weight)}.card{border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-lg)}.no-title-space .panel-title{padding-top:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-form-panel", standalone: true, imports: [
                        NgClass,
                        AsyncPipe,
                        NgTemplateOutlet,
                        TranslatePipe,
                        TitleComponent,
                    ], template: "<div class=\"flex-column g-space-md\" [ngClass]=\"this.panel().containerClass\">\n  @if (this.panel().label) {\n  <ta-title [level]=\"2\" class=\"panel-title\">{{\n    this.panel().label | translate\n  }}</ta-title>\n  }\n\n  <div [ngClass]=\"this.panel().contentClass\">\n    @for (input of this.panel().children; track this.trackByKey($index, input)) {\n    @if (input) {\n    <div\n      [ngClass]=\"input.class\"\n      [style.display]=\"(input.visible$ | async) ? 'block' : 'none'\"\n      class=\"mb-space-sm\"\n    >\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate()\"\n        [ngTemplateOutletContext]=\"{\n          input: input\n        }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n</div>\n", styles: [".with-separator{border-bottom:1px solid #a9a9a9;padding-bottom:2em}.highlight-title .panel-title{color:var(--ta-surface-brand-primary);font-size:var(--ta-font-body-lg-default-size);font-weight:var(--ta-font-body-lg-bold-weight)}.card{border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-lg)}.no-title-space .panel-title{padding-top:0}\n"] }]
        }], ctorParameters: () => [] });

class InputTranslationComponent extends TaBaseComponent {
    // Getter for backward compatibility
    get input() {
        return this.inputModel();
    }
    constructor() {
        super();
        this.inputModel = input.required({ alias: 'input' });
        this.inputsTemplate = input.required();
        this.cultureList = extractEnum(Culture, true);
        this.cultureMenu = null;
        this.currentCulture = Culture[Culture.FR_BE];
    }
    ngOnInit() {
        this._registerSubscription(this.input.listChanged$.subscribe({
            next: () => this._renderMenu(),
        }));
        this._renderMenu();
    }
    changeSelection(culture) {
        this.currentCulture = culture;
    }
    add(culture) {
        this.input.add(culture);
        this.changeSelection(culture);
    }
    remove(culture) {
        this.input.remove(culture);
    }
    hasKey(culture) {
        return this.getKeys().includes(culture);
    }
    getKeys() {
        return Object.keys(this.input.inputsGroup);
    }
    getInputs(culture) {
        return this.input.inputsGroup[culture];
    }
    trackByFn(_, key) {
        return key;
    }
    trackInputByFn(_, input) {
        return input.key;
    }
    _renderMenu() {
        this.cultureMenu = new Menu({
            elements: this.getKeys().map(cul => new MenuBase({
                key: cul,
                label: cul,
                order: 1,
                defaultOpen: this.currentCulture === cul,
                callback: () => this.changeSelection(cul),
            })),
            direction: 'horizontal',
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputTranslationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputTranslationComponent, isStandalone: true, selector: "ta-input-translation", inputs: { inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null }, inputsTemplate: { classPropertyName: "inputsTemplate", publicName: "inputsTemplate", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div class=\"translation-container\">\n  @if (this.input.label) {\n    <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.input.label | translate }}</ta-title>\n  }\n  <div class=\"flex-row align-center g-space-md\">\n    @if (this.cultureMenu) {\n      cultureMenu\n      <!-- <ta-toggle-navigation\n      [menu]=\"this.cultureMenu\"\n      container=\"tab\"\n    ></ta-toggle-navigation> -->\n    }\n    <ta-button size=\"small\" [matMenuTriggerFor]=\"menu\" [stopPropagationActivation]=\"false\">+</ta-button>\n  </div>\n\n  <div class=\"pt-space-md\">\n    @for (input of this.getInputs(this.currentCulture); track input) {\n      @if (input) {\n        <div [ngClass]=\"input.class\">\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate()\"\n            [ngTemplateOutletContext]=\"{\n              input: input,\n            }\"\n          ></ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @for (culture of this.cultureList; track culture) {\n    <div>\n      <div class=\"flex-row g-space-sm p-space-sm\">\n        @if (this.hasKey(culture.name)) {\n          <ta-font-icon name=\"check-line\" class=\"checked\"></ta-font-icon>\n          <ta-link (action)=\"this.remove(culture.name)\">{{ culture.name }}</ta-link>\n        } @else {\n          <ta-font-icon name=\"check-line\"></ta-font-icon>\n          <ta-link (action)=\"this.add(culture.name)\">{{ culture.name }}</ta-link>\n        }\n      </div>\n    </div>\n  }\n</mat-menu>\n", styles: [".checked{color:var(--ta-semantic-token-success)}.translation-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i1.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputTranslationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-translation', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgClass,
                        NgTemplateOutlet,
                        FontIconComponent,
                        MatMenuModule,
                        TitleComponent,
                        LinkComponent,
                        ButtonComponent,
                        TranslatePipe,
                    ], template: "<div class=\"translation-container\">\n  @if (this.input.label) {\n    <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.input.label | translate }}</ta-title>\n  }\n  <div class=\"flex-row align-center g-space-md\">\n    @if (this.cultureMenu) {\n      cultureMenu\n      <!-- <ta-toggle-navigation\n      [menu]=\"this.cultureMenu\"\n      container=\"tab\"\n    ></ta-toggle-navigation> -->\n    }\n    <ta-button size=\"small\" [matMenuTriggerFor]=\"menu\" [stopPropagationActivation]=\"false\">+</ta-button>\n  </div>\n\n  <div class=\"pt-space-md\">\n    @for (input of this.getInputs(this.currentCulture); track input) {\n      @if (input) {\n        <div [ngClass]=\"input.class\">\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate()\"\n            [ngTemplateOutletContext]=\"{\n              input: input,\n            }\"\n          ></ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @for (culture of this.cultureList; track culture) {\n    <div>\n      <div class=\"flex-row g-space-sm p-space-sm\">\n        @if (this.hasKey(culture.name)) {\n          <ta-font-icon name=\"check-line\" class=\"checked\"></ta-font-icon>\n          <ta-link (action)=\"this.remove(culture.name)\">{{ culture.name }}</ta-link>\n        } @else {\n          <ta-font-icon name=\"check-line\"></ta-font-icon>\n          <ta-link (action)=\"this.add(culture.name)\">{{ culture.name }}</ta-link>\n        }\n      </div>\n    </div>\n  }\n</mat-menu>\n", styles: [".checked{color:var(--ta-semantic-token-success)}.translation-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary)}\n"] }]
        }], ctorParameters: () => [] });

class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class InputsComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.inputModel = input.required({ alias: 'input' });
        this.standaloneMode = input(false, { alias: 'standalone' });
        this.onFocusObs = input(undefined, { alias: 'onFocus' });
        this.space = input(true);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputsComponent, isStandalone: true, selector: "ta-inputs", inputs: { inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null }, standaloneMode: { classPropertyName: "standaloneMode", publicName: "standalone", isSignal: true, isRequired: false, transformFunction: null }, onFocusObs: { classPropertyName: "onFocusObs", publicName: "onFocus", isSignal: true, isRequired: false, transformFunction: null }, space: { classPropertyName: "space", publicName: "space", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ng-container\n  [ngTemplateOutlet]=\"inputsTemplate\"\n  [ngTemplateOutletContext]=\"{\n    input: this.inputModel(),\n    matcher: this.matcher,\n  }\"\n></ng-container>\n\n<ng-template #inputsTemplate let-input=\"input\" let-matcher=\"matcher\">\n  @switch (input.controlType) {\n    @case ('textbox') {\n      <ta-input-textbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n        [space]=\"this.space()\"\n      ></ta-input-textbox>\n    }\n    @case ('textarea') {\n      <ta-input-textarea\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-textarea>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n        [space]=\"this.space()\"\n      ></ta-input-dropdown>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-date-picker>\n    }\n    @case ('timePicker') {\n      <ta-input-time-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-time-picker>\n    }\n    @case ('radio') {\n      <ta-input-radio\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-radio>\n    }\n    @case ('dynamic') {\n      <ta-input-dynamic [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-dynamic>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-checkbox>\n    }\n    @case ('toggle') {\n      <ta-input-toggle\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-toggle>\n    }\n    @case ('panel') {\n      <ta-form-panel [panel]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-form-panel>\n    }\n    @case ('label') {\n      <ta-input-label [input]=\"input\"></ta-input-label>\n    }\n    @case ('switch') {\n      <ta-input-switch\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-switch>\n    }\n    @case ('images') {\n      <ta-input-images\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-images>\n    }\n    @case ('logo') {\n      <ta-input-logo\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-logo>\n    }\n    @case ('image') {\n      <ta-input-image\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-image>\n    }\n    @case ('schema') {\n      <ta-input-schema\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-schema>\n    }\n    @case ('upload') {\n      <ta-input-upload\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-upload>\n    }\n    @case ('slider') {\n      <ta-input-slider\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-slider>\n    }\n    @case ('choices') {\n      <ta-input-choices\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-choices>\n    }\n    @case ('wysiswyg') {\n      <ta-input-wysiswyg\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-wysiswyg>\n    }\n    @case ('translation') {\n      <ta-input-translation [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-translation>\n    }\n    @case ('phone') {\n      <ta-input-phone\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-phone>\n    }\n    @case ('address') {\n      <ta-input-address\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-address>\n    }\n    @case ('culture') {\n      <ta-input-culture\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-culture>\n    }\n    @case ('component') {\n      <ta-input-component\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-component>\n    }\n    @case ('rating') {\n      <ta-input-rating\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-rating>\n    }\n  }\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CheckboxComponent, selector: "ta-input-checkbox" }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: ComponentInputComponent, selector: "ta-input-component" }, { kind: "component", type: CultureComponent, selector: "ta-input-culture" }, { kind: "component", type: DatePickerComponent, selector: "ta-input-date-picker" }, { kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }, { kind: "component", type: LabelComponent, selector: "ta-input-label" }, { kind: "component", type: InputPhoneComponent, selector: "ta-input-phone" }, { kind: "component", type: RadioComponent, selector: "ta-input-radio" }, { kind: "component", type: InputSchemaComponent, selector: "ta-input-schema" }, { kind: "component", type: SliderComponent, selector: "ta-input-slider" }, { kind: "component", type: SwitchComponent, selector: "ta-input-switch" }, { kind: "component", type: TextareaComponent, selector: "ta-input-textarea" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "component", type: TimePickerComponent, selector: "ta-input-time-picker" }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }, { kind: "component", type: UploadComponent, selector: "ta-input-upload", outputs: ["uploadStatusChanged"] }, { kind: "component", type: InputImageComponent, selector: "ta-input-image" }, { kind: "component", type: InputImagesComponent, selector: "ta-input-images" }, { kind: "component", type: InputLogoComponent, selector: "ta-input-logo" }, { kind: "component", type: WysiswygComponent, selector: "ta-input-wysiswyg" }, { kind: "component", type: DynamicComponent, selector: "ta-input-dynamic", inputs: ["inputsTemplate", "input"] }, { kind: "component", type: PanelComponent, selector: "ta-form-panel", inputs: ["inputsTemplate", "panel"] }, { kind: "component", type: InputTranslationComponent, selector: "ta-input-translation", inputs: ["input", "inputsTemplate"] }, { kind: "component", type: InputAddressComponent, selector: "ta-input-address" }, { kind: "component", type: RatingComponent, selector: "ta-input-rating" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-inputs', standalone: true, imports: [
                        NgTemplateOutlet,
                        CheckboxComponent,
                        InputChoicesComponent,
                        ComponentInputComponent,
                        CultureComponent,
                        DatePickerComponent,
                        DropdownComponent,
                        LabelComponent,
                        InputPhoneComponent,
                        RadioComponent,
                        InputSchemaComponent,
                        SliderComponent,
                        SwitchComponent,
                        TextareaComponent,
                        TextBoxComponent,
                        TimePickerComponent,
                        ToggleComponent,
                        UploadComponent,
                        InputImageComponent,
                        InputImagesComponent,
                        InputLogoComponent,
                        WysiswygComponent,
                        DynamicComponent,
                        PanelComponent,
                        InputTranslationComponent,
                        InputAddressComponent,
                        RatingComponent,
                    ], template: "<ng-container\n  [ngTemplateOutlet]=\"inputsTemplate\"\n  [ngTemplateOutletContext]=\"{\n    input: this.inputModel(),\n    matcher: this.matcher,\n  }\"\n></ng-container>\n\n<ng-template #inputsTemplate let-input=\"input\" let-matcher=\"matcher\">\n  @switch (input.controlType) {\n    @case ('textbox') {\n      <ta-input-textbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n        [space]=\"this.space()\"\n      ></ta-input-textbox>\n    }\n    @case ('textarea') {\n      <ta-input-textarea\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-textarea>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n        [space]=\"this.space()\"\n      ></ta-input-dropdown>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-date-picker>\n    }\n    @case ('timePicker') {\n      <ta-input-time-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-time-picker>\n    }\n    @case ('radio') {\n      <ta-input-radio\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-radio>\n    }\n    @case ('dynamic') {\n      <ta-input-dynamic [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-dynamic>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-checkbox>\n    }\n    @case ('toggle') {\n      <ta-input-toggle\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-toggle>\n    }\n    @case ('panel') {\n      <ta-form-panel [panel]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-form-panel>\n    }\n    @case ('label') {\n      <ta-input-label [input]=\"input\"></ta-input-label>\n    }\n    @case ('switch') {\n      <ta-input-switch\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-switch>\n    }\n    @case ('images') {\n      <ta-input-images\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-images>\n    }\n    @case ('logo') {\n      <ta-input-logo\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-logo>\n    }\n    @case ('image') {\n      <ta-input-image\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-image>\n    }\n    @case ('schema') {\n      <ta-input-schema\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-schema>\n    }\n    @case ('upload') {\n      <ta-input-upload\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-upload>\n    }\n    @case ('slider') {\n      <ta-input-slider\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-slider>\n    }\n    @case ('choices') {\n      <ta-input-choices\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-choices>\n    }\n    @case ('wysiswyg') {\n      <ta-input-wysiswyg\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-wysiswyg>\n    }\n    @case ('translation') {\n      <ta-input-translation [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-translation>\n    }\n    @case ('phone') {\n      <ta-input-phone\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-phone>\n    }\n    @case ('address') {\n      <ta-input-address\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-address>\n    }\n    @case ('culture') {\n      <ta-input-culture\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-culture>\n    }\n    @case ('component') {\n      <ta-input-component\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-component>\n    }\n    @case ('rating') {\n      <ta-input-rating\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocusObs()\"\n        [standalone]=\"this.standaloneMode()\"\n      ></ta-input-rating>\n    }\n  }\n</ng-template>\n" }]
        }] });

class FormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.inputs = input.required();
        this.askValidation$ = input();
        this.askOnDestroy = input();
        this.loader = input(false);
        this.error = input({ status: ENotificationCode.none, message: '' });
        this.border = input(true);
        this.canDisplayButton = input(true);
        this.buttonTitle = input('form.save');
        this.onLive = input(false);
        this.valid = new EventEmitter();
        this.isFormValid = new EventEmitter();
        TaTranslationForm.getInstance();
    }
    ngOnInit() {
        this.form = this.toFormGroup(this.inputs());
        this._registerSubscription(this.form.statusChanges.subscribe(() => this.isFormValid.emit(this.isValid())));
        if (this.onLive()) {
            this._registerSubscription(this.form.valueChanges
                .pipe(distinctUntilChanged((prev, curr) => deepEqual(prev, curr)))
                .subscribe(() => this.onSubmit()));
        }
        const askValidation = this.askValidation$();
        if (askValidation) {
            this._registerSubscription(askValidation.subscribe(_ => this.onSubmit()));
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges['inputs'] && !simpleChanges['inputs'].firstChange) {
            this.form = this.toFormGroup(this.inputs());
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputs().forEach(inputItem => {
            inputItem.destroy();
        });
        if (this.askOnDestroy()) {
            this.onSubmit();
        }
    }
    onSubmit() {
        if (!this.isValid()) {
            return;
        }
        this.valid.emit(this.form.value);
    }
    isValid() {
        return this.form.valid && !this.loader();
    }
    toFormGroup(inputs) {
        const group = new FormGroup({});
        if (inputs === null || inputs.length === 0) {
            return group;
        }
        inputs.forEach(input => {
            input.createFormControl(group);
        });
        return group;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: { classPropertyName: "inputs", publicName: "inputs", isSignal: true, isRequired: true, transformFunction: null }, askValidation$: { classPropertyName: "askValidation$", publicName: "askValidation$", isSignal: true, isRequired: false, transformFunction: null }, askOnDestroy: { classPropertyName: "askOnDestroy", publicName: "askOnDestroy", isSignal: true, isRequired: false, transformFunction: null }, loader: { classPropertyName: "loader", publicName: "loader", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, border: { classPropertyName: "border", publicName: "border", isSignal: true, isRequired: false, transformFunction: null }, canDisplayButton: { classPropertyName: "canDisplayButton", publicName: "canDisplayButton", isSignal: true, isRequired: false, transformFunction: null }, buttonTitle: { classPropertyName: "buttonTitle", publicName: "buttonTitle", isSignal: true, isRequired: false, transformFunction: null }, onLive: { classPropertyName: "onLive", publicName: "onLive", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\" class=\"flex-column g-space-sm\">\n    @for (input of this.inputs(); track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error().message\" [code]=\"this.error().status\" class=\"my-space-sm\">\n        <ta-loader [isLoading]=\"this.loader()\">\n          @if (this.canDisplayButton() && this.buttonTitle()) {\n            <ta-button\n              class=\"justify-end\"\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle() | translate }}\n            </ta-button>\n          }\n        </ta-loader>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form', standalone: true, imports: [
                        AsyncPipe,
                        ReactiveFormsModule,
                        NotificationInlineComponent,
                        LoaderComponent,
                        ButtonComponent,
                        TranslatePipe,
                        InputsComponent,
                    ], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\" class=\"flex-column g-space-sm\">\n    @for (input of this.inputs(); track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error().message\" [code]=\"this.error().status\" class=\"my-space-sm\">\n        <ta-loader [isLoading]=\"this.loader()\">\n          @if (this.canDisplayButton() && this.buttonTitle()) {\n            <ta-button\n              class=\"justify-end\"\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle() | translate }}\n            </ta-button>\n          }\n        </ta-loader>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { valid: [{
                type: Output
            }], isFormValid: [{
                type: Output
            }] } });

class EditFieldComponent extends TaBaseComponent {
    onDocumentClick(targetElement) {
        if (!this.editMode()) {
            return;
        }
        if (targetElement.tagName === "INPUT" &&
            targetElement.type === "file") {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.validation();
        }
    }
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.getInput = input.required();
        this.changeEditMode$ = input(null);
        this.isLoading = input(false);
        this.withBorder = input(true);
        this.disabled = input(false);
        this.newValue = new EventEmitter();
        this.onFocusBehavior = new BehaviorSubject(undefined);
        this.renderInput = signal(null);
        this.editMode = signal(false);
    }
    ngOnInit() {
        const changeEditMode = this.changeEditMode$();
        if (changeEditMode) {
            this._registerSubscription(changeEditMode.subscribe((value) => this.editMode.set(value)));
        }
        this._setInput();
    }
    ngOnChanges(changes) {
        if (changes["isLoading"] &&
            changes["isLoading"].currentValue !==
                changes["isLoading"].previousValue &&
            changes["isLoading"].currentValue === false) {
            this._setInput();
            this.editMode.set(false);
        }
    }
    toggleEditMode() {
        this.editMode.set(!this.editMode());
        if (this.editMode()) {
            this.onFocusBehavior.next();
        }
    }
    validation() {
        const input = this.renderInput();
        if (!input) {
            return;
        }
        this.newValue.emit(input.value);
        this.toggleEditMode();
    }
    _setInput() {
        this.renderInput.set(this.getInput()());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: { classPropertyName: "getInput", publicName: "getInput", isSignal: true, isRequired: true, transformFunction: null }, changeEditMode$: { classPropertyName: "changeEditMode$", publicName: "changeEditMode$", isSignal: true, isRequired: false, transformFunction: null }, isLoading: { classPropertyName: "isLoading", publicName: "isLoading", isSignal: true, isRequired: false, transformFunction: null }, withBorder: { classPropertyName: "withBorder", publicName: "withBorder", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-edit-field", standalone: true, imports: [
                        NgIf,
                        NgClass,
                        StopPropagationDirective,
                        LoaderComponent,
                        InputsComponent,
                    ], template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { newValue: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ["document:click", ["$event.target"]]
            }] } });

/*
 * Public API Surface of form-basic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EditFieldComponent, FormComponent, InputsComponent, MyErrorStateMatcher };
//# sourceMappingURL=ta-form-basic.mjs.map
