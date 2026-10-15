import * as i0 from '@angular/core';
import { Injectable, input, output, Component, viewChild, inject, ElementRef, InjectionToken, APP_INITIALIZER, viewChildren, computed, signal, importProvidersFrom } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FontIconComponent } from '@ta/icons';
import { ButtonComponent, BadgeComponent, LayoutWithPanelComponent, LayoutPanelComponent, LayoutContentComponent, LinkComponent, LayoutSideComponent, LayoutSideContentComponent, LayoutSideCtaComponent, LayoutFullPanelComponent, ContactInformationComponent, EmptyComponent, ListContainerComponent, ListElementComponent, ListTitleComponent, ListTagComponent } from '@ta/ui';
import { TaBaseComponent, copyTextToClipboard } from '@ta/utils';
import { FormComponent } from '@ta/form-basic';
import { TaLazyTranslationService, TranslatePipe } from '@ta/translation';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetTemplateGenericComponent } from '@ta/menu';
import { NgTemplateOutlet } from '@angular/common';
import { Validators } from '@angular/forms';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { LocalStorage } from 'storage-manager-js';
import { SearchFieldComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';
import { HttpClient } from '@angular/common/http';
import * as i1 from '@angular/google-maps';
import { MapInfoWindow, MapMarker, GoogleMapsModule } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Logger } from '@ta/server';
import { GoogleTagManagerModule } from '@edumetz16/angular-google-tag-manager';
export { GoogleTagManagerService as TaGoogleTagManagerService } from '@edumetz16/angular-google-tag-manager';
import { LAZY_SERVICE_TOKEN, ENotificationCode } from '@ta/notification';

class TaTranslationCore extends TaLazyTranslationService {
    constructor() {
        super("core");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class FiltersFormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = input([]);
        this.askValidation$ = input.required();
        this.filtersSelected = output();
        TaTranslationCore.getInstance();
    }
    apply(data) {
        this.filtersSelected.emit(data);
    }
    clear() {
        this.filtersSelected.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersFormComponent, isStandalone: true, selector: "ta-filters-form", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, askValidation$: { classPropertyName: "askValidation$", publicName: "askValidation$", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">\n      {{ 'core.filter.clear' | translate }}\n    </ta-button>\n  </div>\n  @if (this.form()) {\n    <ta-form\n      [inputs]=\"this.form()\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$()\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters-form', standalone: true, imports: [ButtonComponent, FormComponent, TranslatePipe], template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">\n      {{ 'core.filter.clear' | translate }}\n    </ta-button>\n  </div>\n  @if (this.form()) {\n    <ta-form\n      [inputs]=\"this.form()\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$()\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n" }]
        }], ctorParameters: () => [] });

class FiltersTagComponent extends TaBaseComponent {
    constructor() {
        super();
        this.activeFilter = input([]);
        this.removedFilter = output();
    }
    remove(filter) {
        this.removedFilter.emit(filter);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersTagComponent, isStandalone: true, selector: "ta-filters-tag", inputs: { activeFilter: { classPropertyName: "activeFilter", publicName: "activeFilter", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: "<div>\n  @for (filter of this.activeFilter(); track trackById($index, filter)) {\n  <span class=\"badge-container\">\n    <ta-badge\n      [value]=\"filter.name\"\n      type=\"info\"\n      icon=\"close\"\n      (clickAction)=\"this.remove(filter)\"\n    ></ta-badge>\n  </span>\n  }\n</div>\n", styles: [".badge-container{padding-right:var(--ta-space-sm);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.badge-container ta-badge{display:inline-block}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersTagComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filters-tag", standalone: true, imports: [BadgeComponent], template: "<div>\n  @for (filter of this.activeFilter(); track trackById($index, filter)) {\n  <span class=\"badge-container\">\n    <ta-badge\n      [value]=\"filter.name\"\n      type=\"info\"\n      icon=\"close\"\n      (clickAction)=\"this.remove(filter)\"\n    ></ta-badge>\n  </span>\n  }\n</div>\n", styles: [".badge-container{padding-right:var(--ta-space-sm);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.badge-container ta-badge{display:inline-block}\n"] }]
        }], ctorParameters: () => [] });

class FiltersContainerComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = input([]);
        this.activeFilter = input([]);
        this.filtersSelected = output();
        this.removedFilter = output();
        this.isFilterOpen = false;
        this.askValidation$ = new Subject();
    }
    toggleFilter() {
        if (this.isFilterOpen) {
            this.askValidation$.next(null);
        }
        this.isFilterOpen = !this.isFilterOpen;
    }
    apply(data) {
        this.filtersSelected.emit(data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersContainerComponent, isStandalone: true, selector: "ta-filters-container", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, activeFilter: { classPropertyName: "activeFilter", publicName: "activeFilter", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected", removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: "<div class=\"space-between p-space-sm\">\n  @if (this.activeFilter()) {\n  <div>\n    <ta-filters-tag\n      [activeFilter]=\"this.activeFilter()\"\n      (removedFilter)=\"this.removedFilter.emit($event)\"\n    ></ta-filters-tag>\n  </div>\n  }\n  <div>\n    <ta-link (action)=\"this.toggleFilter()\">\n      <ta-font-icon\n        [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"\n      ></ta-font-icon>\n    </ta-link>\n  </div>\n</div>\n<div>\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <div class=\"p-space-sm\">\n        <ta-filters-form\n          [form]=\"this.form()\"\n          [askValidation$]=\"this.askValidation$\"\n          (filtersSelected)=\"this.apply($event)\"\n        ></ta-filters-form>\n      </div>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutWithPanelComponent, selector: "ta-layout-with-panel", inputs: ["open"] }, { kind: "component", type: LayoutPanelComponent, selector: "ta-layout-panel" }, { kind: "component", type: FiltersFormComponent, selector: "ta-filters-form", inputs: ["form", "askValidation$"], outputs: ["filtersSelected"] }, { kind: "component", type: LayoutContentComponent, selector: "ta-layout-content", inputs: ["autoHeight"] }, { kind: "component", type: FiltersTagComponent, selector: "ta-filters-tag", inputs: ["activeFilter"], outputs: ["removedFilter"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filters-container", standalone: true, imports: [
                        FontIconComponent,
                        LayoutWithPanelComponent,
                        LayoutPanelComponent,
                        FiltersFormComponent,
                        LayoutContentComponent,
                        FiltersTagComponent,
                        LinkComponent,
                    ], template: "<div class=\"space-between p-space-sm\">\n  @if (this.activeFilter()) {\n  <div>\n    <ta-filters-tag\n      [activeFilter]=\"this.activeFilter()\"\n      (removedFilter)=\"this.removedFilter.emit($event)\"\n    ></ta-filters-tag>\n  </div>\n  }\n  <div>\n    <ta-link (action)=\"this.toggleFilter()\">\n      <ta-font-icon\n        [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"\n      ></ta-font-icon>\n    </ta-link>\n  </div>\n</div>\n<div>\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <div class=\"p-space-sm\">\n        <ta-filters-form\n          [form]=\"this.form()\"\n          [askValidation$]=\"this.askValidation$\"\n          (filtersSelected)=\"this.apply($event)\"\n        ></ta-filters-form>\n      </div>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n" }]
        }], ctorParameters: () => [] });

class FilterContainerComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = input([]);
        this.filtersSelected = output();
        this.isFilterOpen = false;
        this.askValidation$ = new Subject();
        this.askClear$ = new Subject();
        TaTranslationCore.getInstance();
    }
    ngOnInit() {
        if (this.askClear$) {
            this._registerSubscription(this.askClear$.subscribe(_ => this.clear()));
        }
    }
    apply(data) {
        this.filtersSelected.emit(data);
    }
    clear() {
        this.filtersSelected.emit(null);
    }
    validate() {
        this.askValidation$.next(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FilterContainerComponent, isStandalone: true, selector: "ta-filter-container", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<ta-layout-side class=\"flex-full\">\n  <ta-layout-side-content>\n    <div class=\"m-space-sm\">\n      <ta-form\n        [inputs]=\"this.form()\"\n        [canDisplayButton]=\"false\"\n        [askValidation$]=\"this.askValidation$\"\n        (valid)=\"this.apply($event)\"\n      ></ta-form>\n    </div>\n  </ta-layout-side-content>\n  <ta-layout-side-cta>\n    <div class=\"align-center space-between\">\n      <div class=\"pr-space-md\">\n        <div class=\"align-center g-space-xs link\">\n          <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n          <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n            {{ 'core.filter.clear' | translate }}\n          </ta-link>\n        </div>\n      </div>\n      <div>\n        <ta-button (action)=\"this.validate()\">\n          <div class=\"align-center m-space-xs\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n            {{ 'core.filter.validate' | translate }}\n          </div>\n        </ta-button>\n      </div>\n    </div>\n  </ta-layout-side-cta>\n</ta-layout-side>\n", styles: [".link{color:var(--ta-text-secondary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LayoutSideComponent, selector: "ta-layout-side" }, { kind: "component", type: LayoutSideContentComponent, selector: "ta-layout-side-content" }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "component", type: LayoutSideCtaComponent, selector: "ta-layout-side-cta", inputs: ["background", "rounded"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filter-container', standalone: true, imports: [
                        FontIconComponent,
                        LinkComponent,
                        LayoutSideComponent,
                        LayoutSideContentComponent,
                        FormComponent,
                        LayoutSideCtaComponent,
                        ButtonComponent,
                        TranslatePipe,
                    ], template: "<ta-layout-side class=\"flex-full\">\n  <ta-layout-side-content>\n    <div class=\"m-space-sm\">\n      <ta-form\n        [inputs]=\"this.form()\"\n        [canDisplayButton]=\"false\"\n        [askValidation$]=\"this.askValidation$\"\n        (valid)=\"this.apply($event)\"\n      ></ta-form>\n    </div>\n  </ta-layout-side-content>\n  <ta-layout-side-cta>\n    <div class=\"align-center space-between\">\n      <div class=\"pr-space-md\">\n        <div class=\"align-center g-space-xs link\">\n          <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n          <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n            {{ 'core.filter.clear' | translate }}\n          </ta-link>\n        </div>\n      </div>\n      <div>\n        <ta-button (action)=\"this.validate()\">\n          <div class=\"align-center m-space-xs\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n            {{ 'core.filter.validate' | translate }}\n          </div>\n        </ta-button>\n      </div>\n    </div>\n  </ta-layout-side-cta>\n</ta-layout-side>\n", styles: [".link{color:var(--ta-text-secondary)}\n"] }]
        }], ctorParameters: () => [] });

class FilterDisplayerComponent extends TaBaseComponent {
    get isFilterOpen() {
        return this._isFilterOpen;
    }
    set isFilterOpen(value) {
        this._isFilterOpen = value;
        if (this.mobileDetection) {
            if (value) {
                this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
                    panelClass: "no-padding",
                    data: {
                        template: this.filterTemplate(),
                        context: null,
                    },
                });
            }
            else {
                this._bottomSheet.dismiss();
            }
        }
    }
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor() {
        super();
        this.form = input([]);
        this.iconType = input("filter");
        this.container = input("button");
        this.filtersSelected = output();
        this.filterTemplate = viewChild.required("filterTemplate");
        this._isFilterOpen = false;
        this._bottomSheet = inject(MatBottomSheet);
    }
    selected(filters) {
        this.filtersSelected.emit(filters);
        this.close();
    }
    open() {
        this.isFilterOpen = true;
    }
    close() {
        this.isFilterOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, iconType: { classPropertyName: "iconType", publicName: "iconType", isSignal: true, isRequired: false, transformFunction: null }, container: { classPropertyName: "container", publicName: "container", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filter-displayer", standalone: true, imports: [
                        FontIconComponent,
                        LayoutFullPanelComponent,
                        FilterContainerComponent,
                        ButtonComponent,
                    ], template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [] });

class SearchHistoryDisplayerComponent {
    constructor() {
        this.searchHistory = input();
        this.placeholder = input("");
        this.isDropDown = input(false);
        this.valueCompleted = output();
        this.searchField = viewChild("searchField", { read: ElementRef });
        this.searchTrigger = viewChild("searchField", { read: MatMenuTrigger });
        this.input = new InputTextBox({
            validators: [Validators.minLength(3)],
        });
    }
    get searchFieldWidth() {
        return this.searchField()?.nativeElement.offsetWidth;
    }
    get listRecentSearches() {
        const searchHistoryValue = this.searchHistory();
        if (searchHistoryValue?.type) {
            const storedSearches = this._getFromLocalStorage(searchHistoryValue.type);
            const searches = storedSearches.map((obj) => obj.research);
            return searches;
        }
        return null;
    }
    searchCompleted(search) {
        if (!search?.trim())
            return;
        const searchHistoryValue = this.searchHistory();
        if (searchHistoryValue?.type) {
            this._saveInLocalStorage(search);
        }
        this.input.value = "";
        this.searchTrigger()?.closeMenu();
        this.valueCompleted.emit(search);
        return;
    }
    _getFromLocalStorage(type) {
        return JSON.parse(LocalStorage.get("search-" + type) || "[]");
    }
    _saveInLocalStorage(searchValue) {
        const searchHistoryValue = this.searchHistory();
        if (searchHistoryValue?.type) {
            let storedSearches = this._getFromLocalStorage(searchHistoryValue.type);
            const search = storedSearches.find((s) => s.research === searchValue);
            if (search) {
                search.storageTime = new Date();
            }
            else {
                storedSearches.push({
                    research: searchValue,
                    storageTime: new Date(),
                });
            }
            this.orderAndSelect(storedSearches);
            LocalStorage.set("search-" + searchHistoryValue.type || "", JSON.stringify(storedSearches.slice(0, 5)));
        }
    }
    orderAndSelect(items) {
        items.sort((a, b) => {
            const dateA = new Date(a.storageTime);
            const dateB = new Date(b.storageTime);
            return dateB.getTime() - dateA.getTime();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchHistoryDisplayerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchHistoryDisplayerComponent, isStandalone: true, selector: "ta-search-history-displayer", inputs: { searchHistory: { classPropertyName: "searchHistory", publicName: "searchHistory", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, isDropDown: { classPropertyName: "isDropDown", publicName: "isDropDown", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchField", first: true, predicate: ["searchField"], descendants: true, read: ElementRef, isSignal: true }, { propertyName: "searchTrigger", first: true, predicate: ["searchField"], descendants: true, read: MatMenuTrigger, isSignal: true }], ngImport: i0, template: "<ng-template #menuTemplate>\n  <div class=\"p-space-md\">\n    <ta-contact-information\n      icon=\"history\"\n      value=\"core.historical-research.last-searches\"\n    >\n      <ta-empty\n        [isEmpty]=\"!this.listRecentSearches?.length && !this.isDropDown()\"\n      >\n        <ta-list-container class=\"list-container\">\n          @for (search of this.listRecentSearches; track search) {\n          <ta-list-element (click)=\"this.searchCompleted(search)\">\n            <ta-list-title>\n              {{ search }}\n            </ta-list-title>\n            <ta-list-tag>\n              <ta-font-icon name=\"arrow-big-right\" type=\"sm\"></ta-font-icon>\n            </ta-list-tag>\n          </ta-list-element>\n          }\n        </ta-list-container>\n      </ta-empty>\n    </ta-contact-information>\n  </div>\n</ng-template>\n\n<ta-search-field\n  #searchField\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  [input]=\"this.input\"\n  (valueCompleted)=\"this.searchCompleted($event)\"\n  [matMenuTriggerFor]=\"\n    this.searchHistory()?.type && this.isDropDown() === true ? menu : null\n  \"\n></ta-search-field>\n\n<mat-menu #menu=\"matMenu\">\n  <div class=\"\" [style.width.px]=\"this.searchFieldWidth\">\n    @if (menuTemplate) {\n    <ng-container\n      [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ element: menu }\"\n    ></ng-container>\n    }\n  </div>\n</mat-menu>\n\n@if (menuTemplate && this.searchHistory()?.type && this.isDropDown() === false) {\n<ng-container\n  *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"\n></ng-container>\n}\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ContactInformationComponent, selector: "ta-contact-information", inputs: ["value", "icon", "localIcon"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "variant", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: ListContainerComponent, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent, selector: "ta-list-element", inputs: ["withSeparator", "highlight", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent, selector: "ta-list-title" }, { kind: "component", type: ListTagComponent, selector: "ta-list-tag" }, { kind: "component", type: SearchFieldComponent, selector: "ta-search-field", inputs: ["isOpen", "placeholder", "space", "type"], outputs: ["valueCompleted"] }, { kind: "component", type: MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchHistoryDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-history-displayer", standalone: true, imports: [
                        FontIconComponent,
                        ContactInformationComponent,
                        EmptyComponent,
                        ListContainerComponent,
                        ListElementComponent,
                        ListTitleComponent,
                        ListTagComponent,
                        SearchFieldComponent,
                        MatMenu,
                        MatMenuTrigger,
                        NgTemplateOutlet,
                    ], template: "<ng-template #menuTemplate>\n  <div class=\"p-space-md\">\n    <ta-contact-information\n      icon=\"history\"\n      value=\"core.historical-research.last-searches\"\n    >\n      <ta-empty\n        [isEmpty]=\"!this.listRecentSearches?.length && !this.isDropDown()\"\n      >\n        <ta-list-container class=\"list-container\">\n          @for (search of this.listRecentSearches; track search) {\n          <ta-list-element (click)=\"this.searchCompleted(search)\">\n            <ta-list-title>\n              {{ search }}\n            </ta-list-title>\n            <ta-list-tag>\n              <ta-font-icon name=\"arrow-big-right\" type=\"sm\"></ta-font-icon>\n            </ta-list-tag>\n          </ta-list-element>\n          }\n        </ta-list-container>\n      </ta-empty>\n    </ta-contact-information>\n  </div>\n</ng-template>\n\n<ta-search-field\n  #searchField\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  [input]=\"this.input\"\n  (valueCompleted)=\"this.searchCompleted($event)\"\n  [matMenuTriggerFor]=\"\n    this.searchHistory()?.type && this.isDropDown() === true ? menu : null\n  \"\n></ta-search-field>\n\n<mat-menu #menu=\"matMenu\">\n  <div class=\"\" [style.width.px]=\"this.searchFieldWidth\">\n    @if (menuTemplate) {\n    <ng-container\n      [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ element: menu }\"\n    ></ng-container>\n    }\n  </div>\n</mat-menu>\n\n@if (menuTemplate && this.searchHistory()?.type && this.isDropDown() === false) {\n<ng-container\n  *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"\n></ng-container>\n}\n" }]
        }] });

class SearchDisplayerComponent extends TaBaseComponent {
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor() {
        super();
        this.container = input("button");
        this.placeholder = input("");
        this.searchHistory = input();
        this.valueCompleted = output();
        this.searchTemplate = viewChild.required("searchTemplate");
        this._bottomSheet = inject(MatBottomSheet);
    }
    openDialog() {
        if (!this.searchHistory()?.type) {
            return;
        }
        this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
            data: {
                template: this.searchTemplate(),
                context: {
                    options: { isDropDown: false },
                },
            },
        });
    }
    action(result) {
        this._bottomSheet.dismiss();
        if (result) {
            this.valueCompleted.emit(result);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchDisplayerComponent, isStandalone: true, selector: "ta-search-displayer", inputs: { container: { classPropertyName: "container", publicName: "container", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, searchHistory: { classPropertyName: "searchHistory", publicName: "searchHistory", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchTemplate", first: true, predicate: ["searchTemplate"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "@if (this.mobileDetection) { @if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</div>\n} } @if (!this.mobileDetection) {\n<ng-template\n  [ngTemplateOutlet]=\"searchTemplate\"\n  [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder()\"\n    [searchHistory]=\"this.searchHistory()\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: SearchHistoryDisplayerComponent, selector: "ta-search-history-displayer", inputs: ["searchHistory", "placeholder", "isDropDown"], outputs: ["valueCompleted"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-displayer", standalone: true, imports: [
                        FontIconComponent,
                        SearchHistoryDisplayerComponent,
                        ButtonComponent,
                    ], template: "@if (this.mobileDetection) { @if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</div>\n} } @if (!this.mobileDetection) {\n<ng-template\n  [ngTemplateOutlet]=\"searchTemplate\"\n  [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder()\"\n    [searchHistory]=\"this.searchHistory()\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n" }]
        }], ctorParameters: () => [] });

const TA_GOOGLE_MAPS_CONFIG = new InjectionToken("TA_GOOGLE_MAPS_CONFIG");

class TaGoogleMapsLoaderService {
    constructor() {
        this._config = inject(TA_GOOGLE_MAPS_CONFIG);
    }
    get apiKey() {
        return this._config.apiKey;
    }
    load$() {
        return new Observable((subscriber) => {
            const win = window;
            if (win.google?.maps) {
                subscriber.next();
                subscriber.complete();
                return;
            }
            const libraries = (this._config.libraries ?? ["places", "geometry"]).join(",");
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this._config.apiKey}&libraries=${libraries}&v=weekly&callback=initMapLoader`;
            script.async = true;
            script.defer = true;
            script.onerror = () => subscriber.error(new Error("Google Maps API failed to load."));
            script.setAttribute("data-google-maps-api", "true");
            win.initMapLoader = () => {
                subscriber.next();
                subscriber.complete();
            };
            document.head.appendChild(script);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });

function initializeGoogleMaps(loader) {
    return () => loader.load$();
}
const provideGoogleMaps = (config) => [
    { provide: TA_GOOGLE_MAPS_CONFIG, useValue: config },
    {
        provide: APP_INITIALIZER,
        useFactory: initializeGoogleMaps,
        deps: [TaGoogleMapsLoaderService],
        multi: true,
    },
];

class TaTranslationMaps extends TaLazyTranslationService {
    constructor() {
        super("maps");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationMaps, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationMaps, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationMaps, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class MapComponent extends TaBaseComponent {
    constructor() {
        super();
        /** Points affichés sur la carte, regroupés automatiquement. */
        this.markers = input([]);
        /** Étapes de l'itinéraire à tracer (au moins deux points). */
        this.routePoints = input([]);
        this.options = input({ center: { lat: 50, lng: 4 }, zoom: 4 });
        this.infoWindow = viewChild(MapInfoWindow);
        this.map = viewChild('map');
        this.mapMarkers = viewChildren(MapMarker);
        this.markerOptions = computed(() => this.markers().map(marker => ({
            ...marker,
            options: {
                animation: google.maps.Animation.DROP,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    scale: 8,
                    fillColor: '#FF0000',
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: '#ffffff',
                },
            },
        })));
        this.routeSummary = signal(null);
        this.routeDetails = signal([]);
        this.selectedMarker = signal(null);
        this._http = inject(HttpClient);
        this._config = inject(TA_GOOGLE_MAPS_CONFIG);
        this._directionsRenderer = null;
        TaTranslationMaps.getInstance();
    }
    ngAfterViewInit() {
        const map = this.map()?.googleMap;
        if (!map) {
            return;
        }
        const bounds = new google.maps.LatLngBounds();
        const markers = this.mapMarkers();
        markers.forEach(marker => {
            bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
        });
        if (markers.length > 0) {
            this.map()?.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
        }
        new MarkerClusterer({ markers: markers.map(m => m.marker), map });
        this.renderRouteWithRoutesApi();
    }
    openInfoWindow(mapMarker) {
        if (mapMarker.marker) {
            this.selectedMarker.set(mapMarker.marker);
        }
        this.infoWindow()?.open(mapMarker);
    }
    renderRoute() {
        const points = this.routePoints();
        if (points.length < 2)
            return;
        const directionsService = new google.maps.DirectionsService();
        this._directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this._directionsRenderer.setMap(this.map()?.googleMap ?? null);
        const [origin, ...rest] = points;
        const destination = rest.pop();
        directionsService.route({ origin, destination, travelMode: google.maps.TravelMode.DRIVING, optimizeWaypoints: true }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
                this._directionsRenderer?.setDirections(result);
            }
            else {
                Logger.LogError('[ta-google-maps] route computation failed', status);
            }
        });
    }
    renderRouteWithRoutesApi() {
        const points = this.routePoints();
        if (points.length < 2)
            return;
        const [origin, ...rest] = points;
        const destination = rest.pop();
        const body = {
            origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
            destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } },
            intermediates: rest.map(p => ({ location: { latLng: { latitude: p.lat, longitude: p.lng } } })),
            travelMode: 'DRIVE',
            optimizeWaypointOrder: true,
            languageCode: 'fr-FR',
            computeAlternativeRoutes: false,
        };
        this._registerSubscription(this._http
            .post(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${this._config.apiKey}`, body, { headers: { 'Content-Type': 'application/json', 'X-Goog-FieldMask': '*' } })
            .subscribe({
            next: response => {
                const route = response.routes[0];
                if (!route)
                    return;
                const decodedPath = google.maps.geometry.encoding.decodePath(route.polyline.encodedPolyline);
                new google.maps.Polyline({
                    path: decodedPath,
                    strokeColor: 'red',
                    strokeOpacity: 0.8,
                    strokeWeight: 5,
                }).setMap(this.map()?.googleMap ?? null);
                const leg = route.legs[0];
                this.routeDetails.set(leg.steps.map(step => ({
                    instruction: step.navigationInstruction?.instructions ?? '',
                    distance: step.distanceMeters,
                    duration: step.duration,
                })));
                this.routeSummary.set({
                    distanceKm: (leg.distanceMeters / 1000).toFixed(1),
                    duration: this.parseDuration(leg.duration),
                });
            },
            error: err => Logger.LogError('[ta-google-maps] Routes API error', err),
        }));
    }
    parseDuration(isoDuration) {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match)
            return isoDuration;
        const [, hours, minutes] = match;
        return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min' : ''}`.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MapComponent, isStandalone: true, selector: "ta-google-maps", inputs: { markers: { classPropertyName: "markers", publicName: "markers", isSignal: true, isRequired: false, transformFunction: null }, routePoints: { classPropertyName: "routePoints", publicName: "routePoints", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true, isSignal: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true, isSignal: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "<google-map #map [options]=\"this.options()\">\n  @for (marker of this.markerOptions(); track $index) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@let summary = this.routeSummary();\n@if (summary) {\n<div>\n  <h3>{{ \"maps.route.summary\" | translate }}</h3>\n  <p>\n    {{ \"maps.route.distance\" | translate }} : {{ summary.distanceKm }} km<br />\n    {{ \"maps.route.duration\" | translate }} : {{ summary.duration }}\n  </p>\n</div>\n}\n\n@let steps = this.routeDetails();\n@if (steps.length > 0) {\n<div>\n  <h3>{{ \"maps.route.details\" | translate }}</h3>\n  <ul>\n    @for (step of steps; track $index) {\n    <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\n    }\n  </ul>\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i1.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i1.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i1.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-google-maps', standalone: true, imports: [GoogleMapsModule, TranslatePipe], template: "<google-map #map [options]=\"this.options()\">\n  @for (marker of this.markerOptions(); track $index) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@let summary = this.routeSummary();\n@if (summary) {\n<div>\n  <h3>{{ \"maps.route.summary\" | translate }}</h3>\n  <p>\n    {{ \"maps.route.distance\" | translate }} : {{ summary.distanceKm }} km<br />\n    {{ \"maps.route.duration\" | translate }} : {{ summary.duration }}\n  </p>\n</div>\n}\n\n@let steps = this.routeDetails();\n@if (steps.length > 0) {\n<div>\n  <h3>{{ \"maps.route.details\" | translate }}</h3>\n  <ul>\n    @for (step of steps; track $index) {\n    <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\n    }\n  </ul>\n</div>\n}\n" }]
        }], ctorParameters: () => [] });

const provideGTM = (config) => [
    importProvidersFrom(GoogleTagManagerModule.forRoot({
        id: config.gtmId,
    })),
];

class TextToClipboardComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.value = input.required();
        this.iconSize = input('sm');
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this.copyContent = async () => {
            const successNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.success);
            };
            const errorNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.error);
            };
            await copyTextToClipboard(this.value(), successNotification, errorNotification);
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TextToClipboardComponent, isStandalone: true, selector: "ta-text-to-clipboard", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, iconSize: { classPropertyName: "iconSize", publicName: "iconSize", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" [type]=\"this.iconSize()\"></ta-font-icon>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-text-to-clipboard", standalone: true, imports: [FontIconComponent], template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" [type]=\"this.iconSize()\"></ta-font-icon>\n</div>\n" }]
        }] });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilterContainerComponent, FilterDisplayerComponent, FiltersContainerComponent, FiltersTagComponent, MapComponent, SearchDisplayerComponent, SearchHistoryDisplayerComponent, TA_GOOGLE_MAPS_CONFIG, TextToClipboardComponent, initializeGoogleMaps, provideGTM, provideGoogleMaps };
//# sourceMappingURL=ta-core.mjs.map
