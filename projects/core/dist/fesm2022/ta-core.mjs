import { NgIf, NgFor, NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, TemplateRef, ViewChild, ElementRef, Injectable, APP_INITIALIZER, signal, ViewChildren, inject, NgModule } from '@angular/core';
import { Subject, combineLatest, of } from 'rxjs';
import { FontIconComponent, TaIconsModule } from '@ta/icons';
import { ButtonComponent, BadgeComponent, LayoutWithPanelComponent, LayoutPanelComponent, LayoutContentComponent, LinkComponent, LayoutSideComponent, LayoutSideContentComponent, LayoutSideCtaComponent, LayoutFullPanelComponent, ContactInformationComponent, EmptyComponent, ListContainerComponent, ListElementComponent, ListTitleComponent, ListTagComponent, LayoutModalComponent, openModal, TaLayoutModule, TaUiModule, TaCardModule, TaContainerModule, TaListModule } from '@ta/ui';
import { TaBaseComponent, downloadFile, getFileExtension, copyTextToClipboard, TaDirectivePipeModule } from '@ta/utils';
import { FormComponent, TaFormModule } from '@ta/form-basic';
import { TranslatePipe, TaLazyTranslationService } from '@ta/translation';
import { BottomSheetTemplateGenericComponent, FilterHelper, BottomSheetTemplateBasicComponent } from '@ta/menu';
import * as i1 from '@angular/material/bottom-sheet';
import { Validators } from '@angular/forms';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { LocalStorage } from 'storage-manager-js';
import { SearchFieldComponent, TaFormInputsModule } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';
import * as i2 from '@angular/google-maps';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import * as i1$1 from '@angular/common/http';
import * as i2$1 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import * as i3 from '@ta/files-extended';
import { FilesDisplayComponent, TaFilesExtendedModule } from '@ta/files-extended';
import { map } from 'rxjs/operators';
import * as i1$2 from '@ta/services';
import { LAZY_SERVICE_TOKEN, ENotificationCode } from '@ta/notification';

class FiltersFormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = [];
        this.filtersSelected = new EventEmitter();
    }
    apply(data) {
        this.filtersSelected.emit(data);
    }
    clear() {
        this.filtersSelected.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersFormComponent, isStandalone: true, selector: "ta-filters-form", inputs: { form: "form", askValidation$: "askValidation$" }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{ 'core.filter.clear' | translate }}</ta-button>\n  </div>\n  @if (this.form) {\n    <ta-form\n      [inputs]=\"this.form\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters-form', standalone: true, imports: [NgIf, ButtonComponent, FormComponent, TranslatePipe], template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{ 'core.filter.clear' | translate }}</ta-button>\n  </div>\n  @if (this.form) {\n    <ta-form\n      [inputs]=\"this.form\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { form: [{
                type: Input
            }], askValidation$: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }] } });

class FiltersTagComponent extends TaBaseComponent {
    constructor() {
        super();
        this.activeFilter = [];
        this.removedFilter = new EventEmitter();
    }
    remove(filter) {
        this.removedFilter.emit(filter);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersTagComponent, isStandalone: true, selector: "ta-filters-tag", inputs: { activeFilter: "activeFilter" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: "<div>\n  @for (filter of this.activeFilter; track trackById($index, filter)) {\n    <span class=\"badge-container\">\n      <ta-badge [value]=\"filter.name\" type=\"info\" icon=\"close\" (clickAction)=\"this.remove(filter)\"></ta-badge>\n    </span>\n  }\n</div>\n", styles: [".badge-container{padding-right:var(--ta-space-sm);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.badge-container ta-badge{display:inline-block}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters-tag', standalone: true, imports: [NgFor, BadgeComponent], template: "<div>\n  @for (filter of this.activeFilter; track trackById($index, filter)) {\n    <span class=\"badge-container\">\n      <ta-badge [value]=\"filter.name\" type=\"info\" icon=\"close\" (clickAction)=\"this.remove(filter)\"></ta-badge>\n    </span>\n  }\n</div>\n", styles: [".badge-container{padding-right:var(--ta-space-sm);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.badge-container ta-badge{display:inline-block}\n"] }]
        }], ctorParameters: () => [], propDecorators: { activeFilter: [{
                type: Input
            }], removedFilter: [{
                type: Output
            }] } });

class FiltersContainerComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = [];
        this.activeFilter = [];
        this.filtersSelected = new EventEmitter();
        this.removedFilter = new EventEmitter();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersContainerComponent, isStandalone: true, selector: "ta-filters-container", inputs: { form: "form", activeFilter: "activeFilter" }, outputs: { filtersSelected: "filtersSelected", removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: "<div class=\"space-between p-space-sm\">\n  @if (this.activeFilter) {\n    <div>\n      <ta-filters-tag\n        [activeFilter]=\"this.activeFilter\"\n        (removedFilter)=\"this.removedFilter.emit($event)\"\n      ></ta-filters-tag>\n    </div>\n  }\n  <div>\n    <ta-link (action)=\"this.toggleFilter()\">\n      <ta-font-icon [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"></ta-font-icon>\n    </ta-link>\n  </div>\n</div>\n<div>\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <div class=\"p-space-sm\">\n        <ta-filters-form\n          [form]=\"this.form\"\n          [askValidation$]=\"this.askValidation$\"\n          (filtersSelected)=\"this.apply($event)\"\n        ></ta-filters-form>\n      </div>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutWithPanelComponent, selector: "ta-layout-with-panel", inputs: ["open"] }, { kind: "component", type: LayoutPanelComponent, selector: "ta-layout-panel" }, { kind: "component", type: FiltersFormComponent, selector: "ta-filters-form", inputs: ["form", "askValidation$"], outputs: ["filtersSelected"] }, { kind: "component", type: LayoutContentComponent, selector: "ta-layout-content", inputs: ["autoHeight"] }, { kind: "component", type: FiltersTagComponent, selector: "ta-filters-tag", inputs: ["activeFilter"], outputs: ["removedFilter"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters-container', standalone: true, imports: [
                        NgIf,
                        FontIconComponent,
                        LayoutWithPanelComponent,
                        LayoutPanelComponent,
                        FiltersFormComponent,
                        LayoutContentComponent,
                        FiltersTagComponent,
                        LinkComponent,
                    ], template: "<div class=\"space-between p-space-sm\">\n  @if (this.activeFilter) {\n    <div>\n      <ta-filters-tag\n        [activeFilter]=\"this.activeFilter\"\n        (removedFilter)=\"this.removedFilter.emit($event)\"\n      ></ta-filters-tag>\n    </div>\n  }\n  <div>\n    <ta-link (action)=\"this.toggleFilter()\">\n      <ta-font-icon [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"></ta-font-icon>\n    </ta-link>\n  </div>\n</div>\n<div>\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <div class=\"p-space-sm\">\n        <ta-filters-form\n          [form]=\"this.form\"\n          [askValidation$]=\"this.askValidation$\"\n          (filtersSelected)=\"this.apply($event)\"\n        ></ta-filters-form>\n      </div>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { form: [{
                type: Input
            }], activeFilter: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }], removedFilter: [{
                type: Output
            }] } });

class FilterContainerComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = [];
        this.filtersSelected = new EventEmitter();
        this.isFilterOpen = false;
        this.askValidation$ = new Subject();
        this.askClear$ = new Subject();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FilterContainerComponent, isStandalone: true, selector: "ta-filter-container", inputs: { form: "form" }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<ta-layout-side class=\"d-flex full-width\">\n  <ta-layout-side-content>\n    <div class=\"m-space-sm\">\n      <ta-form\n        [inputs]=\"this.form\"\n        [canDisplayButton]=\"false\"\n        [askValidation$]=\"this.askValidation$\"\n        (valid)=\"this.apply($event)\"\n      ></ta-form>\n    </div>\n  </ta-layout-side-content>\n  <ta-layout-side-cta>\n    <div class=\"align-center space-between\">\n      <div class=\"pr-space-md\">\n        <div class=\"align-center g-space-xs link\">\n          <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n          <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n            {{ 'core.filter.clear' | translate }}\n          </ta-link>\n        </div>\n      </div>\n      <div>\n        <ta-button (action)=\"this.validate()\">\n          <div class=\"align-center m-space-xs\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n            {{ 'core.filter.validate' | translate }}\n          </div>\n        </ta-button>\n      </div>\n    </div>\n  </ta-layout-side-cta>\n</ta-layout-side>\n", styles: [".link{color:var(--ta-text-secondary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LayoutSideComponent, selector: "ta-layout-side" }, { kind: "component", type: LayoutSideContentComponent, selector: "ta-layout-side-content" }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "component", type: LayoutSideCtaComponent, selector: "ta-layout-side-cta", inputs: ["background"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
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
                    ], template: "<ta-layout-side class=\"d-flex full-width\">\n  <ta-layout-side-content>\n    <div class=\"m-space-sm\">\n      <ta-form\n        [inputs]=\"this.form\"\n        [canDisplayButton]=\"false\"\n        [askValidation$]=\"this.askValidation$\"\n        (valid)=\"this.apply($event)\"\n      ></ta-form>\n    </div>\n  </ta-layout-side-content>\n  <ta-layout-side-cta>\n    <div class=\"align-center space-between\">\n      <div class=\"pr-space-md\">\n        <div class=\"align-center g-space-xs link\">\n          <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n          <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n            {{ 'core.filter.clear' | translate }}\n          </ta-link>\n        </div>\n      </div>\n      <div>\n        <ta-button (action)=\"this.validate()\">\n          <div class=\"align-center m-space-xs\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n            {{ 'core.filter.validate' | translate }}\n          </div>\n        </ta-button>\n      </div>\n    </div>\n  </ta-layout-side-cta>\n</ta-layout-side>\n", styles: [".link{color:var(--ta-text-secondary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { form: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }] } });

class FilterDisplayerComponent extends TaBaseComponent {
    get isFilterOpen() {
        return this._isFilterOpen;
    }
    set isFilterOpen(value) {
        this._isFilterOpen = value;
        if (this.mobileDetection) {
            if (value) {
                this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
                    panelClass: 'no-padding',
                    data: {
                        template: this.filterTemplate,
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
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.form = [];
        this.iconType = 'filter';
        this.container = 'button';
        this.filtersSelected = new EventEmitter();
        this._isFilterOpen = false;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: "form", iconType: "iconType", container: "container" }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.container === 'button') {\n  <ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </ta-button>\n} @else if (this.container === 'link') {\n  <div (click)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </div>\n}\n\n@if (!this.mobileDetection) {\n  @if (this.isFilterOpen) {\n    <ta-layout-full-panel (closeEvent)=\"this.close()\">\n      <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filter-displayer', standalone: true, imports: [NgIf, FontIconComponent, LayoutFullPanelComponent, FilterContainerComponent, ButtonComponent], template: "@if (this.container === 'button') {\n  <ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </ta-button>\n} @else if (this.container === 'link') {\n  <div (click)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </div>\n}\n\n@if (!this.mobileDetection) {\n  @if (this.isFilterOpen) {\n    <ta-layout-full-panel (closeEvent)=\"this.close()\">\n      <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { form: [{
                type: Input
            }], iconType: [{
                type: Input
            }], container: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }], filterTemplate: [{
                type: ViewChild,
                args: ['filterTemplate', { read: TemplateRef }]
            }] } });

class SearchHistoryDisplayerComponent {
    constructor() {
        this.placeholder = '';
        this.isDropDown = false;
        this.valueCompleted = new EventEmitter();
        this.searchField = null;
        this.searchTrigger = null;
        this.input = new InputTextBox({
            validators: [Validators.minLength(3)],
        });
    }
    get searchFieldWidth() {
        return this.searchField?.nativeElement.offsetWidth;
    }
    get listRecentSearches() {
        if (this.searchHistory?.type) {
            const storedSearches = this._getFromLocalStorage(this.searchHistory?.type);
            const searches = storedSearches.map(obj => obj.research);
            return searches;
        }
        return null;
    }
    searchCompleted(search) {
        if (this.searchHistory?.type) {
            this._saveInLocalStorage(search);
        }
        this.input.value = '';
        this.searchTrigger?.closeMenu();
        this.valueCompleted.emit(search);
        return;
    }
    _getFromLocalStorage(type) {
        return JSON.parse(LocalStorage.get('search-' + type) || '[]');
    }
    _saveInLocalStorage(searchValue) {
        if (this.searchHistory?.type) {
            let storedSearches = this._getFromLocalStorage(this.searchHistory?.type);
            const search = storedSearches.find(s => s.research === searchValue);
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
            LocalStorage.set('search-' + this.searchHistory?.type || '', JSON.stringify(storedSearches.slice(0, 5)));
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchHistoryDisplayerComponent, isStandalone: true, selector: "ta-search-history-displayer", inputs: { searchHistory: "searchHistory", placeholder: "placeholder", isDropDown: "isDropDown" }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchField", first: true, predicate: ["searchField"], descendants: true, read: ElementRef }, { propertyName: "searchTrigger", first: true, predicate: ["searchField"], descendants: true, read: MatMenuTrigger }], ngImport: i0, template: "<ng-template #menuTemplate>\n  <div class=\"p-space-md\">\n    <ta-contact-information icon=\"history\" value=\"core.historical-research.last-searches\">\n      <ta-empty [isEmpty]=\"!this.listRecentSearches?.length && !this.isDropDown\">\n        <ta-list-container class=\"list-container\">\n          @for (search of this.listRecentSearches; track search) {\n            <ta-list-element (click)=\"this.searchCompleted(search)\">\n              <ta-list-title>\n                {{ search }}\n              </ta-list-title>\n              <ta-list-tag>\n                <ta-font-icon name=\"arrow-big-right\" type=\"sm\"></ta-font-icon>\n              </ta-list-tag>\n            </ta-list-element>\n          }\n        </ta-list-container>\n      </ta-empty>\n    </ta-contact-information>\n  </div>\n</ng-template>\n\n<ta-search-field\n  #searchField\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder\"\n  [input]=\"this.input\"\n  (valueCompleted)=\"this.searchCompleted($event)\"\n  [matMenuTriggerFor]=\"this.searchHistory?.type && this.isDropDown === true ? menu : null\"\n></ta-search-field>\n\n<mat-menu #menu=\"matMenu\">\n  <div class=\"\" [style.width.px]=\"this.searchFieldWidth\">\n    @if (menuTemplate) {\n      <ng-container *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"></ng-container>\n    }\n  </div>\n</mat-menu>\n\n@if (menuTemplate && this.searchHistory?.type && this.isDropDown === false) {\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"></ng-container>\n}\n\n\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ContactInformationComponent, selector: "ta-contact-information", inputs: ["value", "icon", "localIcon"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ListContainerComponent, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent, selector: "ta-list-element", inputs: ["withSeparator", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent, selector: "ta-list-title" }, { kind: "component", type: ListTagComponent, selector: "ta-list-tag" }, { kind: "component", type: SearchFieldComponent, selector: "ta-search-field", inputs: ["isOpen", "placeholder", "space", "type"], outputs: ["valueCompleted"] }, { kind: "component", type: MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchHistoryDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-search-history-displayer', standalone: true, imports: [
                        NgIf,
                        NgFor,
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
                    ], template: "<ng-template #menuTemplate>\n  <div class=\"p-space-md\">\n    <ta-contact-information icon=\"history\" value=\"core.historical-research.last-searches\">\n      <ta-empty [isEmpty]=\"!this.listRecentSearches?.length && !this.isDropDown\">\n        <ta-list-container class=\"list-container\">\n          @for (search of this.listRecentSearches; track search) {\n            <ta-list-element (click)=\"this.searchCompleted(search)\">\n              <ta-list-title>\n                {{ search }}\n              </ta-list-title>\n              <ta-list-tag>\n                <ta-font-icon name=\"arrow-big-right\" type=\"sm\"></ta-font-icon>\n              </ta-list-tag>\n            </ta-list-element>\n          }\n        </ta-list-container>\n      </ta-empty>\n    </ta-contact-information>\n  </div>\n</ng-template>\n\n<ta-search-field\n  #searchField\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder\"\n  [input]=\"this.input\"\n  (valueCompleted)=\"this.searchCompleted($event)\"\n  [matMenuTriggerFor]=\"this.searchHistory?.type && this.isDropDown === true ? menu : null\"\n></ta-search-field>\n\n<mat-menu #menu=\"matMenu\">\n  <div class=\"\" [style.width.px]=\"this.searchFieldWidth\">\n    @if (menuTemplate) {\n      <ng-container *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"></ng-container>\n    }\n  </div>\n</mat-menu>\n\n@if (menuTemplate && this.searchHistory?.type && this.isDropDown === false) {\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { element: menu }\"></ng-container>\n}\n\n\n" }]
        }], propDecorators: { searchHistory: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isDropDown: [{
                type: Input
            }], valueCompleted: [{
                type: Output
            }], searchField: [{
                type: ViewChild,
                args: ['searchField', { read: ElementRef }]
            }], searchTrigger: [{
                type: ViewChild,
                args: ['searchField', { read: MatMenuTrigger }]
            }] } });

class SearchDisplayerComponent extends TaBaseComponent {
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.container = 'button';
        this.placeholder = '';
        this.valueCompleted = new EventEmitter();
    }
    openDialog() {
        if (!this.searchHistory?.type) {
            return;
        }
        this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
            data: {
                template: this.searchTemplate,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchDisplayerComponent, isStandalone: true, selector: "ta-search-displayer", inputs: { container: "container", placeholder: "placeholder", searchHistory: "searchHistory" }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchTemplate", first: true, predicate: ["searchTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.mobileDetection) {\n  @if (this.container === 'button') {\n    <ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </ta-button>\n  } @else if (this.container === 'link') {\n    <div (click)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </div>\n  }\n}\n\n@if (!this.mobileDetection) {\n  <ng-template\n    [ngTemplateOutlet]=\"searchTemplate\"\n    [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n  ></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: SearchHistoryDisplayerComponent, selector: "ta-search-history-displayer", inputs: ["searchHistory", "placeholder", "isDropDown"], outputs: ["valueCompleted"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-search-displayer', standalone: true, imports: [NgIf, FontIconComponent, SearchHistoryDisplayerComponent, ButtonComponent], template: "@if (this.mobileDetection) {\n  @if (this.container === 'button') {\n    <ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </ta-button>\n  } @else if (this.container === 'link') {\n    <div (click)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </div>\n  }\n}\n\n@if (!this.mobileDetection) {\n  <ng-template\n    [ngTemplateOutlet]=\"searchTemplate\"\n    [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n  ></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { container: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], searchHistory: [{
                type: Input
            }], valueCompleted: [{
                type: Output
            }], searchTemplate: [{
                type: ViewChild,
                args: ['searchTemplate', { read: TemplateRef }]
            }] } });

class GoogleMapsLoaderService {
    constructor() {
        this.apiKey = 'AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y';
    }
    load() {
        return new Promise((resolve, reject) => {
            if (window.google?.maps) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places,geometry&v=weekly&callback=initMapLoader`;
            script.async = true;
            script.defer = true;
            script.onerror = () => reject(new Error('Google Maps API failed to load.'));
            script.setAttribute('data-google-maps-api', 'true');
            window.initMapLoader = () => {
                resolve();
            };
            document.head.appendChild(script);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

function initializeGoogleMaps(loader) {
    return () => loader.load();
}
const provideGoogleMaps = () => [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeGoogleMaps,
        deps: [GoogleMapsLoaderService],
        multi: true,
    },
];

const markers = [
    { position: { lat: 50.8503, lng: 4.3517 }, title: 'Bruxelles' },
    { position: { lat: 51.2194, lng: 4.4025 }, title: 'Anvers' },
    { position: { lat: 50.6326, lng: 5.5797 }, title: 'Liège' },
    { position: { lat: 50.4669, lng: 4.8675 }, title: 'Namur' },
    { position: { lat: 50.8798, lng: 4.7005 }, title: 'Louvain' },
    { position: { lat: 50.6403, lng: 5.5718 }, title: 'Seraing' },
    { position: { lat: 50.4114, lng: 4.4446 }, title: 'Charleroi' },
    { position: { lat: 51.0543, lng: 3.7174 }, title: 'Gand' },
    { position: { lat: 50.949, lng: 5.333 }, title: 'Hasselt' },
    { position: { lat: 50.7284, lng: 4.6103 }, title: 'Ottignies' },
    { position: { lat: 50.8796, lng: 3.2649 }, title: 'Courtrai' },
    { position: { lat: 51.0381, lng: 4.4776 }, title: 'Malines' },
    {
        position: { lat: 50.418, lng: 4.4446 },
        title: 'Montigny-le-Tilleul',
    },
    { position: { lat: 51.033, lng: 4.4856 }, title: 'Willebroek' },
    { position: { lat: 50.9647, lng: 4.6156 }, title: 'Vilvorde' },
    { position: { lat: 50.8033, lng: 3.2089 }, title: 'Mouscron' },
    { position: { lat: 51.2115, lng: 4.3927 }, title: 'Deurne' },
    { position: { lat: 50.5167, lng: 4.75 }, title: 'Gembloux' },
    { position: { lat: 50.4, lng: 4.45 }, title: 'Fleurus' },
    { position: { lat: 50.58, lng: 4.77 }, title: 'Wavre' },
    {
        position: { lat: 50.7942, lng: 3.2568 },
        title: 'Comines-Warneton',
    },
    { position: { lat: 51.2671, lng: 4.8003 }, title: 'Turnhout' },
    { position: { lat: 50.6333, lng: 5.5667 }, title: 'Herstal' },
    { position: { lat: 50.7333, lng: 5.7167 }, title: 'Verviers' },
    { position: { lat: 51.0256, lng: 3.7361 }, title: 'Merelbeke' },
    { position: { lat: 50.85, lng: 3.25 }, title: 'Renaix' },
    { position: { lat: 50.5833, lng: 4.0667 }, title: 'Binche' },
    { position: { lat: 50.6, lng: 5.15 }, title: 'Huy' },
    { position: { lat: 50.2667, lng: 4.8667 }, title: 'Dinant' },
    { position: { lat: 50.45, lng: 5.6167 }, title: 'Aywaille' },
    {
        position: { lat: 50.2833, lng: 4.7167 },
        title: 'Philippeville',
    },
    { position: { lat: 50.4167, lng: 5.3167 }, title: 'Ciney' },
    { position: { lat: 50.9333, lng: 4.0333 }, title: 'Alost' },
    { position: { lat: 51.0333, lng: 3.7333 }, title: 'Lokeren' },
    {
        position: { lat: 50.6833, lng: 5.5833 },
        title: 'Chaudfontaine',
    },
    { position: { lat: 51.2167, lng: 3.2333 }, title: 'Bruges' },
    { position: { lat: 50.8667, lng: 4.4 }, title: 'Schaerbeek' },
    { position: { lat: 50.85, lng: 4.35 }, title: 'Ixelles' },
    { position: { lat: 50.8333, lng: 4.3333 }, title: 'Forest' },
    { position: { lat: 50.6833, lng: 4.6 }, title: 'Waterloo' },
    { position: { lat: 50.45, lng: 3.95 }, title: 'La Louvière' },
    { position: { lat: 50.9333, lng: 3.1333 }, title: 'Tournai' },
    { position: { lat: 50.6167, lng: 4.0833 }, title: 'Morlanwelz' },
    { position: { lat: 50.7833, lng: 5.25 }, title: 'Waremme' },
    { position: { lat: 50.8833, lng: 4.7167 }, title: 'Herent' },
    { position: { lat: 50.9833, lng: 4.5 }, title: 'Aarschot' },
    { position: { lat: 51.0167, lng: 4.4 }, title: 'Lierre' },
    { position: { lat: 50.9167, lng: 3.4333 }, title: 'Waregem' },
    // { position: { lat: 1.033, lng: 4.4856 }, title: 'Outsiplou' },
];

class MapComponent {
    constructor(http) {
        this.http = http;
        this.options = {
            center: { lat: 50, lng: 4 },
            zoom: 4,
        };
        this.routeSummary = null;
        this.routeDetails = signal([]);
        this.markers = markers.map(marker => ({
            ...marker,
            ...{
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
            },
        }));
        this.selectedPoints = [
            { lat: 50.8503, lng: 4.3517 },
            { lat: 50.6326, lng: 5.5797 },
            { lat: 51.2194, lng: 4.4025 },
        ];
        this.selectedMarker = signal(null);
    }
    ngAfterViewInit() {
        const bounds = new google.maps.LatLngBounds();
        this.mapMarkers.forEach(marker => {
            bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
        });
        this.map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
        new MarkerClusterer({
            markers: this.mapMarkers.map(m => m.marker),
            map: this.map.googleMap,
        });
        this.renderRouteWithRoutesApi();
    }
    openInfoWindow(mapMarker) {
        if (mapMarker.marker) {
            this.selectedMarker.set(mapMarker.marker);
        }
        if (this.infoWindow) {
            this.infoWindow.open(mapMarker);
        }
    }
    renderRoute() {
        if (this.selectedPoints.length < 2)
            return;
        const directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.directionsRenderer.setMap(this.map.googleMap);
        const [origin, ...rest] = this.selectedPoints;
        const destination = rest.pop(); // last point
        directionsService.route({
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
            optimizeWaypoints: true,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
                this.directionsRenderer.setDirections(result);
            }
            else {
                console.error('Erreur de calcul de l’itinéraire :', status);
            }
        });
    }
    renderRouteWithRoutesApi() {
        if (this.selectedPoints.length < 2)
            return;
        const [origin, ...rest] = this.selectedPoints;
        const destination = rest.pop();
        const body = {
            origin: {
                location: {
                    latLng: { latitude: origin.lat, longitude: origin.lng },
                },
            },
            destination: {
                location: {
                    latLng: { latitude: destination?.lat, longitude: destination?.lng },
                },
            },
            intermediates: rest.map(p => ({
                location: { latLng: { latitude: p.lat, longitude: p.lng } },
            })),
            travelMode: 'DRIVE',
            optimizeWaypointOrder: true,
            languageCode: 'fr-FR',
            computeAlternativeRoutes: false,
        };
        const key = 'AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y';
        this.http
            .post(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${key}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-FieldMask': '*',
            },
        })
            .subscribe({
            next: (response) => {
                const route = response.routes[0];
                const polyline = route.polyline.encodedPolyline;
                const decodedPath = google.maps.geometry.encoding.decodePath(polyline);
                const routePolyline = new google.maps.Polyline({
                    path: decodedPath,
                    strokeColor: 'red',
                    strokeOpacity: 0.8,
                    strokeWeight: 5,
                });
                routePolyline.setMap(this.map.googleMap);
                // Extraire les détails
                const leg = route.legs[0];
                this.routeDetails.set(leg.steps.map((step) => ({
                    instruction: step.navigationInstruction?.instructions,
                    distance: step.distanceMeters,
                    duration: step.duration,
                })));
                const distanceKm = (leg.distanceMeters / 1000).toFixed(1);
                const duration = this.parseDuration(leg.duration);
                this.routeSummary = {
                    distanceKm,
                    duration,
                };
            },
            error: err => {
                console.error('Erreur Routes API :', err);
            },
        });
    }
    parseDuration(isoDuration) {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match)
            return isoDuration;
        const [, hours, minutes] = match;
        return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min' : ''}`.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MapComponent, isStandalone: true, selector: "ta-google-maps", viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true }], ngImport: i0, template: "<google-map #map [options]=\"this.options\">\r\n  @for (marker of this.markers; track marker.position) {\r\n    <map-marker\r\n      #mapMarker=\"mapMarker\"\r\n      [position]=\"marker.position\"\r\n      [title]=\"marker.title\"\r\n      [options]=\"marker.options\"\r\n      (mapClick)=\"this.openInfoWindow(mapMarker)\"\r\n    ></map-marker>\r\n  }\r\n\r\n  <map-info-window>\r\n    {{ this.selectedMarker()?.getTitle() }}\r\n  </map-info-window>\r\n</google-map>\r\n\r\n@if (this.routeSummary) {\r\n  <div>\r\n    <h3>R\u00E9sum\u00E9 du trajet</h3>\r\n    <p>\r\n      Distance : {{ this.routeSummary.distanceKm }} km<br />\r\n      Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\r\n    </p>\r\n  </div>\r\n}\r\n\r\n@if (routeDetails().length > 0) {\r\n  <div>\r\n    <h3>D\u00E9tails du trajet</h3>\r\n    <ul>\r\n      @for (step of routeDetails(); track step) {\r\n        <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\r\n      }\r\n    </ul>\r\n  </div>\r\n}\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i2.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i2.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i2.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-google-maps', standalone: true, imports: [GoogleMapsModule, NgIf, NgFor], template: "<google-map #map [options]=\"this.options\">\r\n  @for (marker of this.markers; track marker.position) {\r\n    <map-marker\r\n      #mapMarker=\"mapMarker\"\r\n      [position]=\"marker.position\"\r\n      [title]=\"marker.title\"\r\n      [options]=\"marker.options\"\r\n      (mapClick)=\"this.openInfoWindow(mapMarker)\"\r\n    ></map-marker>\r\n  }\r\n\r\n  <map-info-window>\r\n    {{ this.selectedMarker()?.getTitle() }}\r\n  </map-info-window>\r\n</google-map>\r\n\r\n@if (this.routeSummary) {\r\n  <div>\r\n    <h3>R\u00E9sum\u00E9 du trajet</h3>\r\n    <p>\r\n      Distance : {{ this.routeSummary.distanceKm }} km<br />\r\n      Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\r\n    </p>\r\n  </div>\r\n}\r\n\r\n@if (routeDetails().length > 0) {\r\n  <div>\r\n    <h3>D\u00E9tails du trajet</h3>\r\n    <ul>\r\n      @for (step of routeDetails(); track step) {\r\n        <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\r\n      }\r\n    </ul>\r\n  </div>\r\n}\r\n" }]
        }], ctorParameters: () => [{ type: i1$1.HttpClient }], propDecorators: { infoWindow: [{
                type: ViewChild,
                args: [MapInfoWindow]
            }], map: [{
                type: ViewChild,
                args: ['map']
            }], mapMarkers: [{
                type: ViewChildren,
                args: [MapMarker]
            }] } });

class UploadDocumentModal {
    get fileTypes$() {
        return this._enumTypeService.fetchFileTypes();
    }
    constructor(_enumTypeService, dialogRef, _form) {
        this._enumTypeService = _enumTypeService;
        this.dialogRef = dialogRef;
        this._form = _form;
        this.form = [];
        this.error = { status: 0, message: '' };
        this.loader = false;
        this.onSaveClick = (values) => {
            this.dialogRef.close({
                description: values.description,
                documentTypeId: Number(values.documentType),
            });
        };
    }
    ngOnInit() {
        this.form = this._form.getGroupForm({
            description: '',
            documentTypes$: this.fileTypes$,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentModal, deps: [{ token: i1$2.TaEnumerationService }, { token: i2$1.MatDialogRef }, { token: i3.UploadDocumentFormService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadDocumentModal, isStandalone: true, selector: "ta-upload-document", ngImport: i0, template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"], dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-upload-document', standalone: true, imports: [NgIf, LayoutModalComponent, FormComponent], template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1$2.TaEnumerationService }, { type: i2$1.MatDialogRef }, { type: i3.UploadDocumentFormService }] });

class DocumentsComponent extends TaBaseComponent {
    constructor(_bottomSheet, _dialog) {
        super();
        this._bottomSheet = _bottomSheet;
        this._dialog = _dialog;
        this.filesSaved = new EventEmitter();
        this.filesDeleted = new EventEmitter();
        this.filterHelper = new FilterHelper([
            { label: 'documents.mine', defaultOpen: false },
            { label: 'documents.all', defaultOpen: true },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    ngOnInit() {
        this._registerSubscription(combineLatest({
            all: this._filteredDocuments$('all'),
            mine: this._filteredDocuments$('mine'),
        }).subscribe(data => {
            this._updateMenu({ all: data.all.length, mine: data.mine.length });
        }));
    }
    uploadDocuments(files) {
        this._openUploadWorkflow(files[0].file);
    }
    downloadDocument(fileData) {
        downloadFile(fileData.url);
        this._bottomSheet.dismiss(true);
    }
    openBottomSheet(fileData) {
        const bottomSheetData = [
            {
                label: 'documents.download',
                icon: 'download',
                action: () => this.downloadDocument(fileData),
            },
            {
                label: 'documents.delete',
                icon: 'delete',
                action: () => this._proposeDeleteDocument(fileData),
            },
        ];
        this._bottomSheet.open(BottomSheetTemplateBasicComponent, {
            data: {
                orientation: 'horizontal',
                menu$: of(bottomSheetData),
            },
        });
    }
    getDocs$() {
        return this._filteredDocuments$(this.filterHelper.filter).pipe(map(documents => documents.map(document => {
            return {
                id: document.id,
                url: document.url,
                type: 'Document',
                fileMetaData: document.fileMetadata,
                fileExtension: getFileExtension(document.url),
            };
        })));
    }
    _filteredDocuments$(filter) {
        return this.document$.pipe(map(documents => documents.filter(document => {
            if (filter === 'all')
                return true;
            if (filter === 'mine' && document.isOwner)
                return true;
            return false;
        })));
    }
    _saveDocument(file, fileMetadata) {
        this.requestState.asked();
        this.filesSaved.emit({ file, fileMetadata });
    }
    _openUploadWorkflow(file) {
        this._registerSubscription(this._dialog
            .open(UploadDocumentModal, {
            panelClass: 'full-screen-modal',
            data: {
                file,
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (!result) {
                return;
            }
            this._saveDocument(file, {
                description: result.description,
                fileType: {
                    id: result.documentTypeId,
                    translatedValue: '',
                },
            });
        }));
    }
    _proposeDeleteDocument(fileData) {
        this._registerSubscription(openModal(this._dialog).subscribe((result) => {
            if (result) {
                this._deleteDocument(fileData);
            }
        }));
        this._bottomSheet.dismiss(true);
    }
    _deleteDocument(fileData) {
        this.filesDeleted.emit(fileData);
    }
    _updateMenu(data) {
        this.filterHelper.updateMenuDatas([
            {
                key: 'documents.mine',
                options: {
                    notificationBadge: {
                        label: data.mine,
                    },
                },
            },
            {
                key: 'documents.all',
                options: {
                    notificationBadge: {
                        label: data.all,
                    },
                },
            },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsComponent, deps: [{ token: i1.MatBottomSheet }, { token: i2$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DocumentsComponent, isStandalone: true, selector: "ta-documents", inputs: { document$: "document$", canAddFile: "canAddFile" }, outputs: { filesSaved: "filesSaved", filesDeleted: "filesDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"], dependencies: [{ kind: "component", type: FilesDisplayComponent, selector: "ta-files-display", inputs: ["files$", "menu", "canAddFile", "tempFiles", "fileType"], outputs: ["fileSelected", "moreInformationSelected", "fileUploading"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-documents', standalone: true, imports: [FilesDisplayComponent], template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }, { type: i2$1.MatDialog }], propDecorators: { document$: [{
                type: Input
            }], canAddFile: [{
                type: Input
            }], filesSaved: [{
                type: Output
            }], filesDeleted: [{
                type: Output
            }] } });

class FiltersComponent {
    constructor() {
        this.isFilterOpen = false;
        this.askValidation$ = new Subject();
    }
    changeFilterOpen() {
        if (this.isFilterOpen) {
            this.askValidation$.next(null);
        }
        this.isFilterOpen = !this.isFilterOpen;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FiltersComponent, isStandalone: true, selector: "ta-filters", ngImport: i0, template: "<div class=\"container p-space-xs\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-10 pt-space-0\">list of tag</div>\n    <div class=\"col-2\">\n      <ta-link (action)=\"this.changeFilterOpen()\">\n        <ta-font-icon [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"></ta-font-icon>\n      </ta-link>\n    </div>\n  </div>\n</div>\n<div class=\"list\">\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <ta-filters-form></ta-filters-form>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LayoutWithPanelComponent, selector: "ta-layout-with-panel", inputs: ["open"] }, { kind: "component", type: LayoutPanelComponent, selector: "ta-layout-panel" }, { kind: "component", type: FiltersFormComponent, selector: "ta-filters-form", inputs: ["form", "askValidation$"], outputs: ["filtersSelected"] }, { kind: "component", type: LayoutContentComponent, selector: "ta-layout-content", inputs: ["autoHeight"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters', standalone: true, imports: [
                        FontIconComponent,
                        LinkComponent,
                        LayoutWithPanelComponent,
                        LayoutPanelComponent,
                        FiltersFormComponent,
                        LayoutContentComponent,
                    ], template: "<div class=\"container p-space-xs\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-10 pt-space-0\">list of tag</div>\n    <div class=\"col-2\">\n      <ta-link (action)=\"this.changeFilterOpen()\">\n        <ta-font-icon [name]=\"this.isFilterOpen ? 'check-line' : 'filter-tool'\"></ta-font-icon>\n      </ta-link>\n    </div>\n  </div>\n</div>\n<div class=\"list\">\n  <ta-layout-with-panel [open]=\"this.isFilterOpen\">\n    <ta-layout-panel>\n      <ta-filters-form></ta-filters-form>\n    </ta-layout-panel>\n    <ta-layout-content>\n      <ng-content></ng-content>\n    </ta-layout-content>\n  </ta-layout-with-panel>\n</div>\n" }]
        }] });

class TextToClipboardComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this.copyContent = async () => {
            const successNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.success);
            };
            const errorNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.error);
            };
            await copyTextToClipboard(this.value, successNotification, errorNotification);
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextToClipboardComponent, isStandalone: true, selector: "ta-text-to-clipboard", inputs: { value: "value" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text-to-clipboard', standalone: true, imports: [FontIconComponent], template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n" }]
        }], propDecorators: { value: [{
                type: Input
            }] } });

class TaTranslationCore extends TaLazyTranslationService {
    constructor() {
        super('core');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationCore, decorators: [{
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
 * // import { TaCoreModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FiltersContainerComponent, DocumentsComponent, CallTemplateComponent } from '@ta/library-name';
 */
class TaCoreModule {
    constructor() {
        TaTranslationCore.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
            TaLayoutModule,
            TaUiModule,
            TaFormModule,
            TaIconsModule,
            TaDirectivePipeModule,
            TaCardModule,
            TaFilesExtendedModule,
            TaFormInputsModule,
            TaContainerModule,
            TaListModule,
            MatMenuModule,
            MatDialogModule,
            TranslatePipe,
            FiltersComponent,
            FiltersContainerComponent,
            FiltersFormComponent,
            FiltersTagComponent,
            DocumentsComponent,
            UploadDocumentModal,
            FilterContainerComponent,
            SearchHistoryDisplayerComponent,
            SearchDisplayerComponent,
            FilterDisplayerComponent,
            TextToClipboardComponent], exports: [FiltersContainerComponent,
            DocumentsComponent,
            FilterContainerComponent,
            SearchDisplayerComponent,
            SearchHistoryDisplayerComponent,
            FilterDisplayerComponent,
            FiltersTagComponent,
            TextToClipboardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
            TaLayoutModule,
            TaUiModule,
            TaFormModule,
            TaIconsModule,
            TaDirectivePipeModule,
            TaCardModule,
            TaFilesExtendedModule,
            TaFormInputsModule,
            TaContainerModule,
            TaListModule,
            MatMenuModule,
            MatDialogModule,
            FiltersComponent,
            FiltersContainerComponent,
            FiltersFormComponent,
            FiltersTagComponent,
            DocumentsComponent,
            UploadDocumentModal,
            FilterContainerComponent,
            SearchHistoryDisplayerComponent,
            SearchDisplayerComponent,
            FilterDisplayerComponent,
            TextToClipboardComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaLayoutModule,
                        TaUiModule,
                        TaFormModule,
                        TaIconsModule,
                        TaDirectivePipeModule,
                        TaCardModule,
                        TaFilesExtendedModule,
                        TaFormInputsModule,
                        TaContainerModule,
                        TaListModule,
                        MatMenuModule,
                        MatDialogModule,
                        TranslatePipe,
                        FiltersComponent,
                        FiltersContainerComponent,
                        FiltersFormComponent,
                        FiltersTagComponent,
                        DocumentsComponent,
                        UploadDocumentModal,
                        FilterContainerComponent,
                        SearchHistoryDisplayerComponent,
                        SearchDisplayerComponent,
                        FilterDisplayerComponent,
                        TextToClipboardComponent,
                    ],
                    exports: [
                        FiltersContainerComponent,
                        DocumentsComponent,
                        FilterContainerComponent,
                        SearchDisplayerComponent,
                        SearchHistoryDisplayerComponent,
                        FilterDisplayerComponent,
                        FiltersTagComponent,
                        TextToClipboardComponent,
                    ],
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DocumentsComponent, FilterContainerComponent, FilterDisplayerComponent, FiltersContainerComponent, FiltersTagComponent, MapComponent, SearchDisplayerComponent, SearchHistoryDisplayerComponent, TaCoreModule, TextToClipboardComponent, UploadDocumentModal, initializeGoogleMaps, provideGoogleMaps };
//# sourceMappingURL=ta-core.mjs.map
