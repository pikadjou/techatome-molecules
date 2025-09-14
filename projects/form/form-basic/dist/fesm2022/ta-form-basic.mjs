import { NgClass, NgTemplateOutlet, NgIf, NgFor, AsyncPipe, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, EventEmitter, Output, signal, HostListener, Injectable, NgModule } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import deepEqual from 'fast-deep-equal';
import { distinctUntilChanged, BehaviorSubject } from 'rxjs';
import { ENotificationCode, NotificationInlineComponent, TaNotificationModule } from '@ta/notification';
import { TranslatePipe, TaLazyTranslationService } from '@ta/translation';
import { ButtonComponent, TitleComponent, LinkComponent, LoaderComponent, TaContainerModule, TaUiModule } from '@ta/ui';
import { TaBaseComponent, extractEnum, Culture, StopPropagationDirective, TaDirectivePipeModule } from '@ta/utils';
import { InputAddressComponent, CheckboxComponent, InputChoicesComponent, ComponentInputComponent, CultureComponent, DatePickerComponent, DropdownComponent, LabelComponent, InputPhoneComponent, RadioComponent, InputSchemaComponent, SliderComponent, SwitchComponent, TextareaComponent, TextBoxComponent, TimePickerComponent, ToggleComponent, UploadComponent, InputImageComponent, InputImagesComponent, InputLogoComponent, WysiswygComponent, TaFormInputsModule } from '@ta/form-input';
import { LocalIconComponent, FontIconComponent, TaIconsModule } from '@ta/icons';
import * as i1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { Menu, MenuBase, ToggleNavigationComponent, TaMenuModule } from '@ta/menu';
import { MatNativeDateModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material/core';

class DynamicComponent extends TaBaseComponent {
    constructor() {
        super();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DynamicComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DynamicComponent, isStandalone: true, selector: "ta-input-dynamic", inputs: { inputsTemplate: "inputsTemplate", input: "input" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n    <div>\n      @if (this.canRemove(key)) {\n        <div class=\"remove-action\">\n          <ta-button class=\"remove-action\" [style]=\"'danger'\" (action)=\"remove(key)\">\n            <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n          </ta-button>\n        </div>\n      }\n\n      @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n        @if (input) {\n          <div [ngClass]=\"input.class\">\n            <ng-container\n              [ngTemplateOutlet]=\"this.inputsTemplate\"\n              [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n            >\n            </ng-container>\n          </div>\n        }\n      }\n    </div>\n  }\n  <ta-button (action)=\"add()\">{{ 'form.dynamic.add' | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-dynamic', standalone: true, imports: [NgIf, NgFor, NgClass, NgTemplateOutlet, LocalIconComponent, ButtonComponent, TranslatePipe], template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n    <div>\n      @if (this.canRemove(key)) {\n        <div class=\"remove-action\">\n          <ta-button class=\"remove-action\" [style]=\"'danger'\" (action)=\"remove(key)\">\n            <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n          </ta-button>\n        </div>\n      }\n\n      @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n        @if (input) {\n          <div [ngClass]=\"input.class\">\n            <ng-container\n              [ngTemplateOutlet]=\"this.inputsTemplate\"\n              [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n            >\n            </ng-container>\n          </div>\n        }\n      }\n    </div>\n  }\n  <ta-button (action)=\"add()\">{{ 'form.dynamic.add' | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { inputsTemplate: [{
                type: Input
            }], input: [{
                type: Input
            }] } });

class PanelComponent extends TaBaseComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: PanelComponent, isStandalone: true, selector: "ta-form-panel", inputs: { inputsTemplate: "inputsTemplate", panel: "panel" }, usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [ngClass]=\"this.panel.containerClass\">\n  @if (this.panel.label) {\n    <ta-title [level]=\"2\" class=\"panel-title\">{{ this.panel.label | translate }}</ta-title>\n  }\n\n  <div [ngClass]=\"this.panel.contentClass\">\n    @for (input of this.panel.children; track this.trackByKey($index, input)) {\n      @if (input) {\n        <div\n          [ngClass]=\"input.class\"\n          [style.display]=\"(input.visible$ | async) ? 'block' : 'none'\"\n          class=\"mb-space-sm\"\n        >\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate\"\n            [ngTemplateOutletContext]=\"{\n              input: input\n            }\"\n          >\n          </ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n", styles: [".with-separator{border-bottom:1px solid #a9a9a9;padding-bottom:2em}.highlight-title .panel-title{color:var(--ta-surface-brand-primary);font-size:var(--ta-font-body-lg-default-size);line-height:var(--ta-font-body-lg-default-line);font-weight:var(--ta-font-body-lg-bold-weight)}.card{border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-lg)}.no-title-space .panel-title{padding-top:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form-panel', standalone: true, imports: [NgClass, AsyncPipe, NgTemplateOutlet, TranslatePipe, TitleComponent], template: "<div class=\"flex-column g-space-md\" [ngClass]=\"this.panel.containerClass\">\n  @if (this.panel.label) {\n    <ta-title [level]=\"2\" class=\"panel-title\">{{ this.panel.label | translate }}</ta-title>\n  }\n\n  <div [ngClass]=\"this.panel.contentClass\">\n    @for (input of this.panel.children; track this.trackByKey($index, input)) {\n      @if (input) {\n        <div\n          [ngClass]=\"input.class\"\n          [style.display]=\"(input.visible$ | async) ? 'block' : 'none'\"\n          class=\"mb-space-sm\"\n        >\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate\"\n            [ngTemplateOutletContext]=\"{\n              input: input\n            }\"\n          >\n          </ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n", styles: [".with-separator{border-bottom:1px solid #a9a9a9;padding-bottom:2em}.highlight-title .panel-title{color:var(--ta-surface-brand-primary);font-size:var(--ta-font-body-lg-default-size);line-height:var(--ta-font-body-lg-default-line);font-weight:var(--ta-font-body-lg-bold-weight)}.card{border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-lg)}.no-title-space .panel-title{padding-top:0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { inputsTemplate: [{
                type: Input
            }], panel: [{
                type: Input
            }] } });

class InputTranslationComponent extends TaBaseComponent {
    constructor() {
        super();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputTranslationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputTranslationComponent, isStandalone: true, selector: "ta-input-translation", inputs: { input: "input", inputsTemplate: "inputsTemplate" }, usesInheritance: true, ngImport: i0, template: "<div class=\"translation-container\">\n  @if (this.input.label) {\n    <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.input.label | translate }}</ta-title>\n  }\n  <div class=\"flex-row align-center g-space-md\">\n    @if (this.cultureMenu) {\n      <ta-toggle-navigation [menu]=\"this.cultureMenu\" container=\"tab\"></ta-toggle-navigation>\n    }\n    <ta-button size=\"small\" [matMenuTriggerFor]=\"menu\" [stopPropagationActivation]=\"false\">+</ta-button>\n  </div>\n\n  <div class=\"pt-space-md\">\n    @for (input of this.getInputs(this.currentCulture); track input) {\n      @if (input) {\n        <div [ngClass]=\"input.class\">\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate\"\n            [ngTemplateOutletContext]=\"{\n              input: input,\n            }\"\n          >\n          </ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @for (culture of this.cultureList; track culture) {\n    <div>\n      <div class=\"flex-row g-space-sm p-space-sm\">\n        @if (this.hasKey(culture.name)) {\n          <ta-font-icon name=\"check-line\" class=\"checked\"></ta-font-icon>\n          <ta-link (action)=\"this.remove(culture.name)\">{{ culture.name }}</ta-link>\n        } @else {\n          <ta-font-icon name=\"check-line\"> </ta-font-icon>\n          <ta-link (action)=\"this.add(culture.name)\">{{ culture.name }}</ta-link>\n        }\n      </div>\n    </div>\n  }\n</mat-menu>\n", styles: [".checked{color:var(--ta-semantic-token-success)}.translation-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i1.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "component", type: ToggleNavigationComponent, selector: "ta-toggle-navigation", inputs: ["menu", "container"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputTranslationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-translation', standalone: true, imports: [NgIf, NgFor, NgClass, NgTemplateOutlet, FontIconComponent, MatMenuModule, ToggleNavigationComponent, TitleComponent, LinkComponent, ButtonComponent, TranslatePipe], template: "<div class=\"translation-container\">\n  @if (this.input.label) {\n    <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.input.label | translate }}</ta-title>\n  }\n  <div class=\"flex-row align-center g-space-md\">\n    @if (this.cultureMenu) {\n      <ta-toggle-navigation [menu]=\"this.cultureMenu\" container=\"tab\"></ta-toggle-navigation>\n    }\n    <ta-button size=\"small\" [matMenuTriggerFor]=\"menu\" [stopPropagationActivation]=\"false\">+</ta-button>\n  </div>\n\n  <div class=\"pt-space-md\">\n    @for (input of this.getInputs(this.currentCulture); track input) {\n      @if (input) {\n        <div [ngClass]=\"input.class\">\n          <ng-container\n            [ngTemplateOutlet]=\"this.inputsTemplate\"\n            [ngTemplateOutletContext]=\"{\n              input: input,\n            }\"\n          >\n          </ng-container>\n        </div>\n      }\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @for (culture of this.cultureList; track culture) {\n    <div>\n      <div class=\"flex-row g-space-sm p-space-sm\">\n        @if (this.hasKey(culture.name)) {\n          <ta-font-icon name=\"check-line\" class=\"checked\"></ta-font-icon>\n          <ta-link (action)=\"this.remove(culture.name)\">{{ culture.name }}</ta-link>\n        } @else {\n          <ta-font-icon name=\"check-line\"> </ta-font-icon>\n          <ta-link (action)=\"this.add(culture.name)\">{{ culture.name }}</ta-link>\n        }\n      </div>\n    </div>\n  }\n</mat-menu>\n", styles: [".checked{color:var(--ta-semantic-token-success)}.translation-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-rounded);border:1px solid var(--ta-border-secondary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { input: [{
                type: Input
            }], inputsTemplate: [{
                type: Input
            }] } });

class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class InputsComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.standalone = false;
        this.space = true;
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputsComponent, isStandalone: true, selector: "ta-inputs", inputs: { input: "input", standalone: "standalone", onFocus: "onFocus", space: "space" }, usesInheritance: true, ngImport: i0, template: "<ng-container\n  [ngTemplateOutlet]=\"inputsTemplate\"\n  [ngTemplateOutletContext]=\"{\n    input: this.input,\n    matcher: this.matcher,\n  }\"\n></ng-container>\n\n<ng-template #inputsTemplate let-input=\"input\" let-matcher=\"matcher\">\n  @switch (input.controlType) {\n    @case ('textbox') {\n      <ta-input-textbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n        [space]=\"this.space\"\n      ></ta-input-textbox>\n    }\n    @case ('textarea') {\n      <ta-input-textarea\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-textarea>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n        [space]=\"this.space\"\n      ></ta-input-dropdown>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-date-picker>\n    }\n    @case ('timePicker') {\n      <ta-input-time-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-time-picker>\n    }\n    @case ('radio') {\n      <ta-input-radio\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-radio>\n    }\n    @case ('dynamic') {\n      <ta-input-dynamic [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-dynamic>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-checkbox>\n    }\n    @case ('toggle') {\n      <ta-input-toggle\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-toggle>\n    }\n    @case ('panel') {\n      <ta-form-panel [panel]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-form-panel>\n    }\n    @case ('label') {\n      <ta-input-label [input]=\"input\"></ta-input-label>\n    }\n    @case ('switch') {\n      <ta-input-switch\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-switch>\n    }\n    @case ('images') {\n      <ta-input-images\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-images>\n    }\n    @case ('logo') {\n      <ta-input-logo\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-logo>\n    }\n    @case ('image') {\n      <ta-input-image\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-image>\n    }\n    @case ('schema') {\n      <ta-input-schema\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-schema>\n    }\n    @case ('upload') {\n      <ta-input-upload\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-upload>\n    }\n    @case ('slider') {\n      <ta-input-slider\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-slider>\n    }\n    @case ('choices') {\n      <ta-input-choices\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-choices>\n    }\n    @case ('wysiswyg') {\n      <ta-input-wysiswyg\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-wysiswyg>\n    }\n    @case ('translation') {\n      <ta-input-translation [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-translation>\n    }\n    @case ('phone') {\n      <ta-input-phone\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-phone>\n    }\n    @case ('address') {\n      <ta-input-address\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-address>\n    }\n    @case ('culture') {\n      <ta-input-culture\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-culture>\n    }\n    @case ('component') {\n      <ta-input-component\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-component>\n    }\n  }\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: InputAddressComponent, selector: "ta-input-address" }, { kind: "component", type: CheckboxComponent, selector: "ta-input-checkbox" }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: ComponentInputComponent, selector: "ta-input-component" }, { kind: "component", type: CultureComponent, selector: "ta-input-culture" }, { kind: "component", type: DatePickerComponent, selector: "ta-input-date-picker" }, { kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }, { kind: "component", type: LabelComponent, selector: "ta-input-label" }, { kind: "component", type: InputPhoneComponent, selector: "ta-input-phone" }, { kind: "component", type: RadioComponent, selector: "ta-input-radio" }, { kind: "component", type: InputSchemaComponent, selector: "ta-input-schema" }, { kind: "component", type: SliderComponent, selector: "ta-input-slider" }, { kind: "component", type: SwitchComponent, selector: "ta-input-switch" }, { kind: "component", type: TextareaComponent, selector: "ta-input-textarea" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "component", type: TimePickerComponent, selector: "ta-input-time-picker" }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }, { kind: "component", type: UploadComponent, selector: "ta-input-upload", outputs: ["uploadStatusChanged"] }, { kind: "component", type: InputImageComponent, selector: "ta-input-image" }, { kind: "component", type: InputImagesComponent, selector: "ta-input-images" }, { kind: "component", type: InputLogoComponent, selector: "ta-input-logo" }, { kind: "component", type: WysiswygComponent, selector: "ta-input-wysiswyg" }, { kind: "component", type: DynamicComponent, selector: "ta-input-dynamic", inputs: ["inputsTemplate", "input"] }, { kind: "component", type: PanelComponent, selector: "ta-form-panel", inputs: ["inputsTemplate", "panel"] }, { kind: "component", type: InputTranslationComponent, selector: "ta-input-translation", inputs: ["input", "inputsTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-inputs', standalone: true, imports: [
                        NgTemplateOutlet,
                        InputAddressComponent,
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
                        InputTranslationComponent
                    ], template: "<ng-container\n  [ngTemplateOutlet]=\"inputsTemplate\"\n  [ngTemplateOutletContext]=\"{\n    input: this.input,\n    matcher: this.matcher,\n  }\"\n></ng-container>\n\n<ng-template #inputsTemplate let-input=\"input\" let-matcher=\"matcher\">\n  @switch (input.controlType) {\n    @case ('textbox') {\n      <ta-input-textbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n        [space]=\"this.space\"\n      ></ta-input-textbox>\n    }\n    @case ('textarea') {\n      <ta-input-textarea\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-textarea>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n        [space]=\"this.space\"\n      ></ta-input-dropdown>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-date-picker>\n    }\n    @case ('timePicker') {\n      <ta-input-time-picker\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-time-picker>\n    }\n    @case ('radio') {\n      <ta-input-radio\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-radio>\n    }\n    @case ('dynamic') {\n      <ta-input-dynamic [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-dynamic>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-checkbox>\n    }\n    @case ('toggle') {\n      <ta-input-toggle\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-toggle>\n    }\n    @case ('panel') {\n      <ta-form-panel [panel]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-form-panel>\n    }\n    @case ('label') {\n      <ta-input-label [input]=\"input\"></ta-input-label>\n    }\n    @case ('switch') {\n      <ta-input-switch\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-switch>\n    }\n    @case ('images') {\n      <ta-input-images\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-images>\n    }\n    @case ('logo') {\n      <ta-input-logo\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-logo>\n    }\n    @case ('image') {\n      <ta-input-image\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-image>\n    }\n    @case ('schema') {\n      <ta-input-schema\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-schema>\n    }\n    @case ('upload') {\n      <ta-input-upload\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-upload>\n    }\n    @case ('slider') {\n      <ta-input-slider\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-slider>\n    }\n    @case ('choices') {\n      <ta-input-choices\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-choices>\n    }\n    @case ('wysiswyg') {\n      <ta-input-wysiswyg\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-wysiswyg>\n    }\n    @case ('translation') {\n      <ta-input-translation [input]=\"input\" [inputsTemplate]=\"inputsTemplate\"></ta-input-translation>\n    }\n    @case ('phone') {\n      <ta-input-phone\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-phone>\n    }\n    @case ('address') {\n      <ta-input-address\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-address>\n    }\n    @case ('culture') {\n      <ta-input-culture\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-culture>\n    }\n    @case ('component') {\n      <ta-input-component\n        [input]=\"input\"\n        [matcher]=\"matcher\"\n        [onFocus]=\"this.onFocus\"\n        [standalone]=\"this.standalone\"\n      ></ta-input-component>\n    }\n  }\n</ng-template>\n" }]
        }], propDecorators: { input: [{
                type: Input
            }], standalone: [{
                type: Input
            }], onFocus: [{
                type: Input
            }], space: [{
                type: Input
            }] } });

class FormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.loader = false;
        this.error = { status: ENotificationCode.none, message: '' };
        this.border = true;
        this.canDisplayButton = true;
        this.buttonTitle = 'form.save';
        this.onLive = false;
        this.valid = new EventEmitter();
        this.isFormValid = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.toFormGroup(this.inputs);
        this._registerSubscription(this.form.statusChanges.subscribe(() => this.isFormValid.emit(this.isValid())));
        if (this.onLive) {
            this._registerSubscription(this.form.valueChanges
                .pipe(distinctUntilChanged((prev, curr) => deepEqual(prev, curr)))
                .subscribe(() => this.onSubmit()));
        }
        if (this.askValidation$) {
            this._registerSubscription(this.askValidation$.subscribe(_ => this.onSubmit()));
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges['inputs'] && !simpleChanges['inputs'].firstChange) {
            this.form = this.toFormGroup(this.inputs);
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputs.forEach(input => {
            input.destroy();
        });
        if (this.askOnDestroy) {
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
        return this.form.valid && !this.loader;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: "inputs", askValidation$: "askValidation$", askOnDestroy: "askOnDestroy", loader: "loader", error: "error", border: "border", canDisplayButton: "canDisplayButton", buttonTitle: "buttonTitle", onLive: "onLive" }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form', standalone: true, imports: [
                        AsyncPipe,
                        ReactiveFormsModule,
                        NotificationInlineComponent,
                        LoaderComponent,
                        ButtonComponent,
                        TranslatePipe,
                        InputsComponent,
                    ], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { inputs: [{
                type: Input
            }], askValidation$: [{
                type: Input
            }], askOnDestroy: [{
                type: Input
            }], loader: [{
                type: Input
            }], error: [{
                type: Input
            }], border: [{
                type: Input
            }], canDisplayButton: [{
                type: Input
            }], buttonTitle: [{
                type: Input
            }], onLive: [{
                type: Input
            }], valid: [{
                type: Output
            }], isFormValid: [{
                type: Output
            }] } });

class EditFieldComponent extends TaBaseComponent {
    onDocumentClick(targetElement) {
        if (!this.editMode()) {
            return;
        }
        if (targetElement.tagName === 'INPUT' && targetElement.type === 'file') {
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
        this.changeEditMode$ = null;
        this.isLoading = false;
        this.withBorder = true;
        this.disabled = false;
        this.newValue = new EventEmitter();
        this.onFocus = new BehaviorSubject(undefined);
        this.renderInput = signal(null);
        this.editMode = signal(false);
    }
    ngOnInit() {
        if (this.changeEditMode$) {
            this._registerSubscription(this.changeEditMode$.subscribe(value => this.editMode.set(value)));
        }
        this._setInput();
    }
    ngOnChanges(changes) {
        if (changes['isLoading'] &&
            changes['isLoading'].currentValue !== changes['isLoading'].previousValue &&
            changes['isLoading'].currentValue === false) {
            this._setInput();
            this.editMode.set(false);
        }
    }
    toggleEditMode() {
        this.editMode.set(!this.editMode());
        if (this.editMode()) {
            this.onFocus.next();
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
        this.renderInput.set(this.getInput());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditFieldComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: "getInput", changeEditMode$: "changeEditMode$", isLoading: "isLoading", withBorder: "withBorder", disabled: "disabled" }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput();\n  @if (!this.editMode()) {\n    <div\n      class=\"value-container\"\n      [ngClass]=\"{ 'no-border': !this.withBorder }\"\n      [class.is-disabled]=\"this.disabled\"\n      (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n      appStopPropagation\n    >\n      <ng-content></ng-content>\n    </div>\n  } @else if (input) {\n    <div class=\"align-center g-space-sm\">\n      <ta-inputs\n        class=\"flex-fill\"\n        appStopPropagation\n        [input]=\"input\"\n        [standalone]=\"true\"\n        [onFocus]=\"this.onFocus\"\n      ></ta-inputs>\n    </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-edit-field', standalone: true, imports: [NgIf, NgClass, StopPropagationDirective, LoaderComponent, InputsComponent], template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput();\n  @if (!this.editMode()) {\n    <div\n      class=\"value-container\"\n      [ngClass]=\"{ 'no-border': !this.withBorder }\"\n      [class.is-disabled]=\"this.disabled\"\n      (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n      appStopPropagation\n    >\n      <ng-content></ng-content>\n    </div>\n  } @else if (input) {\n    <div class=\"align-center g-space-sm\">\n      <ta-inputs\n        class=\"flex-fill\"\n        appStopPropagation\n        [input]=\"input\"\n        [standalone]=\"true\"\n        [onFocus]=\"this.onFocus\"\n      ></ta-inputs>\n    </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { getInput: [{
                type: Input
            }], changeEditMode$: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], withBorder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], newValue: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event.target']]
            }] } });

class TaTranslationForm extends TaLazyTranslationService {
    constructor() {
        super('form');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationForm, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationForm, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationForm, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFormModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FormComponent, MatNativeDateModule, EditFieldComponent } from '@ta/library-name';
 */
class TaFormModule {
    constructor() {
        TaTranslationForm.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaNotificationModule,
            TaFormInputsModule,
            TaUiModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TaIconsModule,
            TaMenuModule,
            MatMenuModule,
            TranslatePipe,
            FormComponent,
            InputsComponent,
            PanelComponent,
            DynamicComponent,
            EditFieldComponent,
            InputTranslationComponent], exports: [FormComponent, MatNativeDateModule, EditFieldComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }], imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaNotificationModule,
            TaFormInputsModule,
            TaUiModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TaIconsModule,
            TaMenuModule,
            MatMenuModule,
            FormComponent,
            InputsComponent,
            PanelComponent,
            DynamicComponent,
            EditFieldComponent,
            InputTranslationComponent, MatNativeDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaNotificationModule,
                        TaFormInputsModule,
                        TaUiModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaIconsModule,
                        TaMenuModule,
                        MatMenuModule,
                        TranslatePipe,
                        FormComponent,
                        InputsComponent,
                        PanelComponent,
                        DynamicComponent,
                        EditFieldComponent,
                        InputTranslationComponent,
                    ],
                    providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
                    declarations: [],
                    exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of form-basic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EditFieldComponent, FormComponent, InputsComponent, MyErrorStateMatcher, TaFormModule };
//# sourceMappingURL=ta-form-basic.mjs.map
