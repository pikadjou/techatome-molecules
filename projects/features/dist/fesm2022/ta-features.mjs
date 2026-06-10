import * as i0 from '@angular/core';
import { Injectable, signal, computed, input, inject, Component, output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TitleComponent, ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent, TextComponent, BadgeComponent, TaModalComponent, TaOverlayPanelComponent } from '@ta/ui';
import { of, Subject, BehaviorSubject, firstValueFrom, distinctUntilChanged, filter, map } from 'rxjs';
import { InputPanel, InputDropdown, InputDatePicker, InputNumber, InputChoices, InputTextBox } from '@ta/form-model';
import { isNonNullable, getUniqueArray, TaBaseComponent, TypedTemplateDirective } from '@ta/utils';
import { format } from 'date-fns';
import { NgTemplateOutlet, AsyncPipe } from '@angular/common';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFieldComponent } from '@ta/form-input';
import { TaBaseService, createPagedQuery, HandleComplexRequest } from '@ta/server';

var ParameterType;
(function (ParameterType) {
    ParameterType[ParameterType["Unknown"] = 0] = "Unknown";
    ParameterType[ParameterType["String"] = 1] = "String";
    ParameterType[ParameterType["Number"] = 2] = "Number";
    ParameterType[ParameterType["Boolean"] = 3] = "Boolean";
    ParameterType[ParameterType["DateTime"] = 4] = "DateTime";
    ParameterType[ParameterType["Enum"] = 5] = "Enum";
    ParameterType[ParameterType["Relation"] = 6] = "Relation";
})(ParameterType || (ParameterType = {}));

class TaGridFormService {
    constructor() { }
    getFiltersForm(model) {
        const keys = Object.keys(model.cols);
        if (!keys || keys.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'main-panel',
                class: 'p-space-sm',
                contentClass: 'grid g-space-md',
                children: keys
                    .filter(key => model.cols[key].data.col.showOnSearch)
                    .map(key => model.cols[key].getInputForm())
                    .filter(isNonNullable)
                    .map(input => new InputPanel({
                    key: 'panel',
                    class: 'g-col-6',
                    children: [input],
                })),
            }),
        ];
    }
    getHighlightedFiltersForm(model) {
        const keys = Object.keys(model.cols);
        if (!keys || keys.length === 0) {
            return [];
        }
        const children = keys
            .filter(key => model.cols[key].data.col.highlighted)
            .map(key => model.cols[key].getInputForm())
            .filter(isNonNullable)
            .map(input => new InputPanel({
            key: 'panel',
            class: 'g-col-6',
            children: [input],
        }));
        if (children.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'highlight-panel',
                contentClass: 'grid g-space-md',
                children,
            }),
        ];
    }
    formatFiltersForm(model, data) {
        return Object.keys(model.cols).reduce((acc, key) => {
            const filter = model.cols[key].formatInputForm(data);
            if (!filter) {
                return acc;
            }
            return [...acc, filter];
        }, []);
    }
    getGroupForm(model) {
        return [
            new InputPanel({
                key: 'main-panel',
                class: 'p-space-sm',
                children: [
                    new InputDropdown({
                        key: 'group',
                        label: 'grid.core.groupBy',
                        options$: of(Object.values(model.cols)
                            .filter(col => col.data.col.showOnSearch && !col.data.col.notDisplayable)
                            .map(group => ({
                            id: group.key,
                            name: group.inputLabel,
                        }))),
                        value: model.groupBy,
                    }),
                ],
            }),
        ];
    }
    formatGroupForm(data) {
        return data['group'] || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const operatorMap = {
    contains: '%',
    greaterThan: '>',
    lessThan: '<',
    equals: '=',
    notEqual: '!=',
    greaterThanOrEqual: '>=',
    lessThanOrEqual: '<=',
};
class BaseCol {
    get key() {
        return this.data.col.name;
    }
    get inputLabel() {
        return `grid.${this.data.scope}.core.${this.key}`;
    }
    get filterValues() {
        return (this.model.filters
            ?.get()
            .find(filter => filter.key === this.key)
            ?.values.map(f => f.value) || []);
    }
    constructor(data, model) {
        this.data = data;
        this.model = model;
    }
    getColConfig() {
        return {
            key: this.key,
            title: this.inputLabel,
            sortable: true,
            width: this.data.col.width,
            template: this.data.col.template,
        };
    }
    defaultFormatter(row) {
        const value = row[this.key];
        return value != null ? String(value) : '';
    }
    getInputForm() {
        return null;
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value) {
            return null;
        }
        return {
            field: this.key,
            type: '=',
            value: value.trim(),
        };
    }
}

class BoolCol extends BaseCol {
    defaultFormatter(row) {
        const value = row[this.key];
        if (value == null)
            return '';
        return value ? '✓' : '✗';
    }
}

class DateCol extends BaseCol {
    getInputForm() {
        return new InputDatePicker({
            key: this.key,
            label: this.inputLabel,
            rangeEnabled: true,
            value: this.filterValues[0] ? { start: this.filterValues[0] } : undefined,
        });
    }
    defaultFormatter(row) {
        const value = row[this.key];
        if (!value)
            return '';
        const date = new Date(value);
        if (isNaN(date.getTime()))
            return String(value);
        return format(date, 'dd/MM/yyyy');
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value) {
            return null;
        }
        return {
            field: this.key,
            type: 'like',
            value: format(value, 'yyyy-MM-dd') + '%',
        };
    }
}

class EnumCol extends BaseCol {
    getInputForm() {
        return new InputPanel({
            key: 'enum-panel',
            contentClass: 'row g-0',
            children: [
                new InputDropdown({
                    key: this.key,
                    label: this.inputLabel,
                    options$: of(this.data.col.enumValues?.map(value => ({
                        id: value,
                        name: value,
                    })) ?? []),
                    value: this.filterValues[0],
                }),
            ],
        });
    }
}

class NumberCol extends BaseCol {
    getInputForm() {
        return new InputPanel({
            key: 'number-panel',
            contentClass: 'row g-0',
            children: [
                new InputNumber({
                    key: this.key,
                    label: this.inputLabel,
                    value: this.filterValues[0],
                }),
            ],
        });
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value) {
            return null;
        }
        return {
            field: this.key,
            type: '=',
            value: value,
        };
    }
}

class RelationCol extends BaseCol {
    getInputForm() {
        if (this.data.col.dataSearch$) {
            return new InputChoices({
                key: this.key,
                label: this.inputLabel,
                class: 'pb-2',
                advancedSearch$: this.data.col.dataSearch$,
                value: this.filterValues,
            });
        }
        return new InputTextBox({
            key: this.key,
            value: this.filterValues[0],
        });
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value) {
            return null;
        }
        return {
            field: this.key,
            type: this.data.col.multivalues ? 'in' : '=',
            value: Number(value),
        };
    }
}

class StringCol extends BaseCol {
    getInputForm() {
        // const value = this.values;
        return new InputTextBox({
            key: this.key,
            label: this.inputLabel,
            class: 'pb-2',
            value: this.filterValues[0],
        });
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value || value === '' || value.length === 0) {
            return null;
        }
        return {
            field: this.key,
            type: 'like',
            value: value,
        };
    }
}

class TaGridFilters {
    constructor(scope, table, preset = []) {
        this.scope = scope;
        this.table = table;
        this.preset = preset;
        this._debounceTimer = null;
    }
    get() {
        return this.table.getFilters(false).reduce((acc, filter) => {
            const existing = acc.find(tag => tag.key === filter.field);
            if (existing) {
                existing.values.push(filter);
            }
            else {
                acc.push({
                    key: filter.field,
                    values: [filter],
                });
            }
            return acc;
        }, []);
    }
    apply(filters) {
        if (this._debounceTimer) {
            clearTimeout(this._debounceTimer);
        }
        this._debounceTimer = setTimeout(() => {
            this.table.setFilter(filters);
        }, 500);
    }
    remove(filter) {
        this.table.removeFilter(filter.field, filter.type, filter.value);
    }
    destroy() {
        if (this._debounceTimer) {
            clearTimeout(this._debounceTimer);
            this._debounceTimer = null;
        }
    }
}

class TaTableState {
    constructor() {
        this.rows = signal([]);
        this.currentPage = signal(1);
        this.pageSize = signal(20);
        this.totalItems = signal(0);
        this.totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems() / this.pageSize())));
        this.sortField = signal(null);
        this.sortDir = signal('asc');
        this.filters = signal([]);
        this.groupByField = signal(null);
        this.isLoading = signal(false);
        this.errorMessage = signal('');
        this.selectedIds = signal(new Set());
        this.selectionChanged$ = new Subject();
        this.rowClicked$ = new Subject();
        this.isReady$ = new BehaviorSubject(false);
        this.isDataReady$ = new BehaviorSubject(false);
        this._services = null;
        this._allData = [];
        this._colsMetaData = [];
        this._fetchTimer = null;
        this._fetchId = 0;
    }
    init(params) {
        this._services = params.services ?? null;
        this._colsMetaData = params.colsMetaData;
        this._onDataUpdate = params.onDataUpdate;
        if (params.initialFilter?.length) {
            this.filters.set(params.initialFilter);
        }
        if (params.data && !params.services) {
            this._allData = params.data;
        }
        this.isReady$.next(true);
        this._scheduleUpdate();
    }
    getData() {
        return this.rows();
    }
    getPage() {
        return this.currentPage();
    }
    getPageMax() {
        return this.totalPages();
    }
    setPage(n) {
        if (n >= 1 && n <= this.totalPages()) {
            this.currentPage.set(n);
            this._scheduleUpdate();
        }
    }
    nextPage() {
        if (this.currentPage() < this.totalPages()) {
            this.currentPage.update(p => p + 1);
            this._scheduleUpdate();
        }
    }
    previousPage() {
        if (this.currentPage() > 1) {
            this.currentPage.update(p => p - 1);
            this._scheduleUpdate();
        }
    }
    setFilter(filters) {
        this.currentPage.set(1);
        this.filters.set(filters);
        this._scheduleUpdate();
    }
    getFilters(_includeHeaderFilters) {
        return this.filters();
    }
    removeFilter(field, type, value) {
        this.filters.update(f => f.filter(filter => !(filter.field === field && filter.type === type && filter.value === value)));
        this.currentPage.set(1);
        this._scheduleUpdate();
    }
    setSort(field, dir) {
        this.sortField.set(field);
        this.sortDir.set(dir);
        this.currentPage.set(1);
        this._scheduleUpdate();
    }
    setGroupBy(field) {
        this.groupByField.set(field);
        this.currentPage.set(1);
        this._scheduleUpdate();
    }
    refresh() {
        this._scheduleUpdate();
    }
    toggleRow(id) {
        this.selectedIds.update(set => {
            const next = new Set(set);
            if (next.has(id))
                next.delete(id);
            else
                next.add(id);
            return next;
        });
        this.selectionChanged$.next([...this.selectedIds()]);
    }
    toggleAll() {
        const pageIds = this.rows().map(r => r.id);
        const allSelected = pageIds.length > 0 && pageIds.every(id => this.selectedIds().has(id));
        this.selectedIds.update(set => {
            const next = new Set(set);
            if (allSelected)
                pageIds.forEach(id => next.delete(id));
            else
                pageIds.forEach(id => next.add(id));
            return next;
        });
        this.selectionChanged$.next([...this.selectedIds()]);
    }
    clearSelection() {
        this.selectedIds.set(new Set());
        this.selectionChanged$.next([]);
    }
    isAllPageSelected() {
        const pageIds = this.rows().map(r => r.id);
        return pageIds.length > 0 && pageIds.every(id => this.selectedIds().has(id));
    }
    destroy() {
        if (this._fetchTimer) {
            clearTimeout(this._fetchTimer);
            this._fetchTimer = null;
        }
        ++this._fetchId;
        this.selectionChanged$.complete();
        this.rowClicked$.complete();
        this.isReady$.complete();
        this.isDataReady$.complete();
    }
    _scheduleUpdate() {
        if (!this._services) {
            this._applyLocalFilter();
            return;
        }
        if (this._fetchTimer)
            clearTimeout(this._fetchTimer);
        this._fetchTimer = setTimeout(() => this._fetchData(), 0);
    }
    // Client-side filter/sort/page for static data
    _applyLocalFilter() {
        let data = [...this._allData];
        for (const f of this.filters()) {
            const isSearch = f.field === 'search';
            if (isSearch) {
                const searchFields = this._colsMetaData
                    .filter(c => c.isSearchField)
                    .map(c => String(c.name));
                if (searchFields.length && f.value) {
                    const needle = String(f.value).toLowerCase();
                    data = data.filter(item => searchFields.some(key => String(item[key] ?? '').toLowerCase().includes(needle)));
                }
                continue;
            }
            data = data.filter(item => {
                const val = item[f.field];
                const target = f.value;
                switch (f.type) {
                    case '=': return val == target;
                    case '!=': return val != target;
                    case 'like': return String(val ?? '').toLowerCase().includes(String(target).toLowerCase());
                    case '<': return val < target;
                    case '>': return val > target;
                    case '<=': return val <= target;
                    case '>=': return val >= target;
                    case 'starts': return String(val ?? '').toLowerCase().startsWith(String(target).toLowerCase());
                    case 'ends': return String(val ?? '').toLowerCase().endsWith(String(target).toLowerCase());
                    case 'in': return Array.isArray(target) ? target.includes(val) : val == target;
                    default: return true;
                }
            });
        }
        if (this.sortField()) {
            const field = this.sortField();
            const dir = this.sortDir();
            data.sort((a, b) => {
                const av = a[field];
                const bv = b[field];
                if (av == null)
                    return 1;
                if (bv == null)
                    return -1;
                const cmp = av > bv ? 1 : av < bv ? -1 : 0;
                return dir === 'asc' ? cmp : -cmp;
            });
        }
        const total = data.length;
        this.totalItems.set(total);
        this.errorMessage.set('');
        const page = this.currentPage();
        const size = this.pageSize();
        const start = (page - 1) * size;
        this.rows.set(data.slice(start, start + size));
        this.isDataReady$.next(true);
        this._onDataUpdate?.(total);
    }
    _fetchData() {
        if (!this._services)
            return;
        const id = ++this._fetchId;
        this.isLoading.set(true);
        const sort = this.sortField() ? [{ field: this.sortField(), dir: this.sortDir() }] : [];
        firstValueFrom(this._services.getData$({
            filter: this.filters(),
            sort,
            groupBy: this.groupByField(),
            page: this.currentPage(),
            size: this.pageSize(),
            colsMetaData: this._colsMetaData,
        }))
            .then(response => {
            if (id !== this._fetchId)
                return;
            this.rows.set(response.data);
            this.totalItems.set(response.total);
            this.errorMessage.set('');
            this.isLoading.set(false);
            this.isDataReady$.next(true);
            this._onDataUpdate?.(response.total);
        })
            .catch(() => {
            if (id !== this._fetchId)
                return;
            this.isLoading.set(false);
            this.errorMessage.set('grid.error.fetch');
        });
    }
}

const groupBy = (key, data) => {
    if (!key) {
        return [{ key: '', data }];
    }
    const keys = getUniqueArray(data.map(item => item[key]));
    return keys.map(k => ({
        key: k.toString(),
        data: data.filter(item => item[key] === k),
    }));
};

class TaGridData {
    get data() {
        return this.table?.getData() ?? [];
    }
    get dataByGroup() {
        return groupBy(this.groupBy, this.data);
    }
    get isGroup() {
        return this.groupBy !== null;
    }
    constructor(scope) {
        this.scope = scope;
        this.rowClicked$ = new Subject();
        this.table = null;
        this.cols = {};
        this.filters = null;
        this.isReady$ = new BehaviorSubject(false);
        this.isDataReady$ = new BehaviorSubject(false);
        this._tableSubs = [];
        this.displayType = signal('card');
        this.groupBy = null;
        this.totalItems = signal(0);
    }
    init(params) {
        if (this.table) {
            this._tableSubs.forEach(s => s.unsubscribe());
            this._tableSubs = [];
            this.table.destroy();
        }
        this._buildCols(params.colsMetaData);
        this.table = new TaTableState();
        this.table.init({
            colsMetaData: params.colsMetaData,
            data: params.data,
            services: params.services,
            initialFilter: params.initialFilter,
            onDataUpdate: total => this.totalItems.set(total),
        });
        this.filters = new TaGridFilters(this.scope, this.table, params.preset);
        this._tableSubs.push(this.table.isReady$.subscribe(ready => { if (ready)
            this.isReady$.next(true); }), this.table.isDataReady$.subscribe(ready => { if (ready)
            this.isDataReady$.next(true); }), this.table.rowClicked$.subscribe(row => this.rowClicked$.next(row)));
    }
    destroy() {
        this._tableSubs.forEach(s => s.unsubscribe());
        this._tableSubs = [];
        this.filters?.destroy();
        this.table?.destroy();
        this.rowClicked$.complete();
        this.isReady$.complete();
        this.isDataReady$.complete();
    }
    setGroupBy(field) {
        this.groupBy = field;
        this.table?.setGroupBy(field);
    }
    clearGroupBy() {
        this.groupBy = null;
        this.table?.setGroupBy(null);
    }
    switchView(type) {
        this.displayType.set(type);
    }
    _buildCols(colsMetaData) {
        this.cols = Object.fromEntries(colsMetaData.map(meta => {
            const field = this._factoryCols(meta);
            return [field.key, field];
        }));
    }
    _factoryCols(col) {
        switch (col.type) {
            case ParameterType.String:
                return new StringCol({ scope: this.scope, col: col }, this);
            case ParameterType.Enum:
                return new EnumCol({ scope: this.scope, col: col }, this);
            case ParameterType.Number:
                return new NumberCol({ scope: this.scope, col: col }, this);
            case ParameterType.DateTime:
                return new DateCol({ scope: this.scope, col: col }, this);
            case ParameterType.Boolean:
                return new BoolCol({ scope: this.scope, col: col }, this);
            case ParameterType.Relation:
                return new RelationCol({ scope: this.scope, col: col }, this);
            default:
                return new BaseCol({ scope: this.scope, col: col }, this);
        }
    }
}

class TaGridInstanceService {
    constructor() {
        this.grids = {};
    }
    create(key) {
        if (!this.has(key)) {
            this.grids[key] = new TaGridData(key);
        }
    }
    get(key, create = false) {
        if (!this.has(key) && create) {
            this.create(key);
        }
        return this.grids[key];
    }
    has(key) {
        return !!this.grids[key];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridInstanceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class TaAbstractGridComponent extends TaBaseComponent {
    get grid() {
        return this._grid;
    }
    get isGroup() {
        return this._grid.isGroup;
    }
    get data() {
        return this._grid.data;
    }
    get dataByGroup() {
        return this._grid.dataByGroup;
    }
    get displayType() {
        return this._grid.displayType;
    }
    constructor() {
        super();
        this.gridId = input.required();
        this._dataService = inject(TaGridInstanceService);
    }
    ngOnInit() {
        this._grid = this._dataService.get(this.gridId(), true);
        this.isReady$ = this._grid.isReady$.pipe(distinctUntilChanged(), filter(isReady => isReady));
        this.isDataReady$ = this._grid.isDataReady$.pipe(distinctUntilChanged(), filter(isReady => isReady));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaAbstractGridComponent, selector: "ng-component", inputs: { gridId: { classPropertyName: "gridId", publicName: "gridId", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractGridComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });

class TaGridFormComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.showTitle = input(true);
        this.showReset = input(true);
        this.filtersForm = signal([]);
        this.groupForm = signal([]);
        this._formService = inject((TaGridFormService));
    }
    ngOnInit() {
        super.ngOnInit();
        this._registerSubscription(this.isReady$.subscribe({
            next: () => {
                this.filtersForm.set(this._formService.getFiltersForm(this._grid));
                this.groupForm.set(this._formService.getGroupForm(this._grid));
            },
        }));
    }
    applyFilters(data) {
        const filters = this._formService.formatFiltersForm(this._grid, data);
        this._grid.filters?.apply(filters);
    }
    applyGroup(data) {
        const group = this._formService.formatGroupForm(data);
        if (!group) {
            this._grid.clearGroupBy();
            return;
        }
        this._grid.setGroupBy(group);
    }
    reset() {
        this._grid.filters?.apply([]);
        this._grid.clearGroupBy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridFormComponent, isStandalone: true, selector: "ta-grid-form", inputs: { showTitle: { classPropertyName: "showTitle", publicName: "showTitle", isSignal: true, isRequired: false, transformFunction: null }, showReset: { classPropertyName: "showReset", publicName: "showReset", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div class=\"grid-form\">\n  @if (this.showTitle()) {\n    <div class=\"grid-form__header\">\n      <div class=\"flex-row align-center g-space-sm\">\n        <ta-font-icon name=\"filter\" size=\"sm\"></ta-font-icon>\n        <ta-title [level]=\"3\">{{ 'grid.' + this.grid.scope + '.title' | translate }}</ta-title>\n      </div>\n    </div>\n  }\n\n  <div class=\"grid-form__body\">\n    <div class=\"grid-form__section\">\n      <ta-form\n        [inputs]=\"this.filtersForm()\"\n        (valid)=\"this.applyFilters($event)\"\n        [askOnDestroy]=\"true\"\n        [canDisplayButton]=\"false\"\n      ></ta-form>\n    </div>\n\n    @if (this.groupForm().length > 0) {\n      <div class=\"grid-form__section\">\n        <ta-form\n          [inputs]=\"this.groupForm()\"\n          (valid)=\"this.applyGroup($event)\"\n          [askOnDestroy]=\"true\"\n          [canDisplayButton]=\"false\"\n        ></ta-form>\n      </div>\n    }\n  </div>\n\n  @if (this.showReset()) {\n    <div class=\"grid-form__footer\">\n      <ta-button type=\"secondary\" (action)=\"this.reset()\">\n        {{ 'grid.form.reset' | translate }}\n      </ta-button>\n    </div>\n  }\n</div>\n", styles: [":host{display:block}.grid-form{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__header{padding-bottom:var(--ta-space-sm);border-bottom:1px solid var(--ta-border-secondary)}.grid-form__header ta-font-icon{color:var(--ta-icon-brand-primary)}.grid-form__body{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__section{padding:var(--ta-space-md);background:var(--ta-surface-secondary);border-radius:var(--ta-radius-rounded)}.grid-form__footer{display:flex;flex-wrap:nowrap;justify-content:flex-end;padding-top:var(--ta-space-sm);border-top:1px solid var(--ta-border-secondary)}\n"], dependencies: [{ kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-form', standalone: true, imports: [FormComponent, TitleComponent, TranslatePipe, FontIconComponent, ButtonComponent], template: "<div class=\"grid-form\">\n  @if (this.showTitle()) {\n    <div class=\"grid-form__header\">\n      <div class=\"flex-row align-center g-space-sm\">\n        <ta-font-icon name=\"filter\" size=\"sm\"></ta-font-icon>\n        <ta-title [level]=\"3\">{{ 'grid.' + this.grid.scope + '.title' | translate }}</ta-title>\n      </div>\n    </div>\n  }\n\n  <div class=\"grid-form__body\">\n    <div class=\"grid-form__section\">\n      <ta-form\n        [inputs]=\"this.filtersForm()\"\n        (valid)=\"this.applyFilters($event)\"\n        [askOnDestroy]=\"true\"\n        [canDisplayButton]=\"false\"\n      ></ta-form>\n    </div>\n\n    @if (this.groupForm().length > 0) {\n      <div class=\"grid-form__section\">\n        <ta-form\n          [inputs]=\"this.groupForm()\"\n          (valid)=\"this.applyGroup($event)\"\n          [askOnDestroy]=\"true\"\n          [canDisplayButton]=\"false\"\n        ></ta-form>\n      </div>\n    }\n  </div>\n\n  @if (this.showReset()) {\n    <div class=\"grid-form__footer\">\n      <ta-button type=\"secondary\" (action)=\"this.reset()\">\n        {{ 'grid.form.reset' | translate }}\n      </ta-button>\n    </div>\n  }\n</div>\n", styles: [":host{display:block}.grid-form{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__header{padding-bottom:var(--ta-space-sm);border-bottom:1px solid var(--ta-border-secondary)}.grid-form__header ta-font-icon{color:var(--ta-icon-brand-primary)}.grid-form__body{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__section{padding:var(--ta-space-md);background:var(--ta-surface-secondary);border-radius:var(--ta-radius-rounded)}.grid-form__footer{display:flex;flex-wrap:nowrap;justify-content:flex-end;padding-top:var(--ta-space-sm);border-top:1px solid var(--ta-border-secondary)}\n"] }]
        }] });

class PaginationComponent extends TaAbstractGridComponent {
    get show() {
        return this.paginationGetTotalPages > 1;
    }
    get paginationGetTotalPages() {
        return this.grid.table?.getPageMax() || 0;
    }
    constructor() {
        super();
        this.maxPageNumber = 10;
    }
    getListPage() {
        if (!this.grid || !this.grid.table) {
            return [];
        }
        const last = this.paginationGetTotalPages;
        if (last <= this.maxPageNumber) {
            return this._computedPageNumbers(2, last);
        }
        const current = this.grid.table.getPage() || 0;
        const rangeStart = Math.floor(current / 10) * 10;
        const rangeEnd = rangeStart + 10;
        return [
            ...(rangeStart <= 1 ? [] : [{ number: rangeStart - 1, icon: 'more_horiz' }]),
            ...this._computedPageNumbers(rangeStart > 1 ? rangeStart : 2, rangeEnd < last ? rangeEnd : last),
            ...(rangeEnd > last ? [] : [{ number: rangeEnd, icon: 'more_horiz' }]),
        ];
    }
    _computedPageNumbers(start, end) {
        const pageNumbers = [];
        for (let i = start; i < end; i++) {
            pageNumbers.push({ number: i });
        }
        return pageNumbers;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: PaginationComponent, isStandalone: true, selector: "ta-grid-pagination", usesInheritance: true, ngImport: i0, template: "@if (this.grid && this.grid.table && this.show) {\r\n  <div class=\"flex-start g-space-sm align-center\">\r\n    <ta-font-icon icon=\"chevron_left\" class=\"c-pointer\" (click)=\"this.grid.table.previousPage()\"></ta-font-icon>\r\n    <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: { number: 1 } }\"></ng-template>\r\n\r\n    @for (page of this.getListPage(); track page.number) {\r\n      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: page }\"></ng-template>\r\n    }\r\n\r\n    @if (this.paginationGetTotalPages > 1) {\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"item\"\r\n        [ngTemplateOutletContext]=\"{\r\n          pagenumber: { number: this.paginationGetTotalPages },\r\n        }\"\r\n      ></ng-template>\r\n    }\r\n\r\n    <ta-font-icon icon=\"chevron_right\" class=\"c-pointer\" (click)=\"this.grid.table.nextPage()\"></ta-font-icon>\r\n  </div>\r\n}\r\n\r\n<ng-template #item let-pagenumber=\"pagenumber\" [typedTemplate]=\"this.PageNumber\">\r\n  <div\r\n    class=\"figure c-pointer\"\r\n    [class.is-active]=\"pagenumber.number === (this.grid.table?.getPage() || 0)\"\r\n    (click)=\"this.grid.table?.setPage(pagenumber.number)\"\r\n  >\r\n    @if (pagenumber.icon) {\r\n      <ta-font-icon [icon]=\"pagenumber.icon\"></ta-font-icon>\r\n    } @else {\r\n      {{ pagenumber.number }}\r\n    }\r\n  </div>\r\n</ng-template>\r\n", styles: [".figure{color:var(--ta-text-primary);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-sm) var(--ta-space-md);border-radius:var(--ta-radius-rounded)}.figure.is-active{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: TypedTemplateDirective, selector: "ng-template[typedTemplate]", inputs: ["typedTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-pagination', standalone: true, imports: [FontIconComponent, NgTemplateOutlet, TypedTemplateDirective], template: "@if (this.grid && this.grid.table && this.show) {\r\n  <div class=\"flex-start g-space-sm align-center\">\r\n    <ta-font-icon icon=\"chevron_left\" class=\"c-pointer\" (click)=\"this.grid.table.previousPage()\"></ta-font-icon>\r\n    <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: { number: 1 } }\"></ng-template>\r\n\r\n    @for (page of this.getListPage(); track page.number) {\r\n      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: page }\"></ng-template>\r\n    }\r\n\r\n    @if (this.paginationGetTotalPages > 1) {\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"item\"\r\n        [ngTemplateOutletContext]=\"{\r\n          pagenumber: { number: this.paginationGetTotalPages },\r\n        }\"\r\n      ></ng-template>\r\n    }\r\n\r\n    <ta-font-icon icon=\"chevron_right\" class=\"c-pointer\" (click)=\"this.grid.table.nextPage()\"></ta-font-icon>\r\n  </div>\r\n}\r\n\r\n<ng-template #item let-pagenumber=\"pagenumber\" [typedTemplate]=\"this.PageNumber\">\r\n  <div\r\n    class=\"figure c-pointer\"\r\n    [class.is-active]=\"pagenumber.number === (this.grid.table?.getPage() || 0)\"\r\n    (click)=\"this.grid.table?.setPage(pagenumber.number)\"\r\n  >\r\n    @if (pagenumber.icon) {\r\n      <ta-font-icon [icon]=\"pagenumber.icon\"></ta-font-icon>\r\n    } @else {\r\n      {{ pagenumber.number }}\r\n    }\r\n  </div>\r\n</ng-template>\r\n", styles: [".figure{color:var(--ta-text-primary);border:1px solid var(--ta-border-secondary);padding:var(--ta-space-sm) var(--ta-space-md);border-radius:var(--ta-radius-rounded)}.figure.is-active{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}\n"] }]
        }], ctorParameters: () => [] });

class TaGridComponent extends TaAbstractGridComponent {
    constructor() {
        super();
        this.cardTemplate = input.required();
        this.showSelection = input(false);
        this.rowClicked = output();
        this.selectionChanged = output();
    }
    ngOnInit() {
        super.ngOnInit();
        this.visibleCols = computed(() => Object.values(this.grid.cols)
            .filter(col => !col.data.col.notDisplayable && !String(col.key).startsWith('_'))
            .map(col => col.getColConfig()));
        this._registerSubscription(this._grid.rowClicked$.subscribe({ next: row => this.rowClicked.emit(row) }));
        if (this._grid.table) {
            this._registerSubscription(this._grid.table.selectionChanged$.subscribe(ids => {
                this.selectionChanged.emit(this.rows.filter(r => ids.includes(r.id)));
            }));
        }
    }
    get rows() {
        return this._grid.table?.rows() ?? [];
    }
    get sortField() {
        return this._grid.table?.sortField() ?? null;
    }
    get sortDir() {
        return this._grid.table?.sortDir() ?? 'asc';
    }
    get isLoading() {
        return this._grid.table?.isLoading() ?? false;
    }
    get errorMessage() {
        return this._grid.table?.errorMessage() ?? '';
    }
    get selectedIds() {
        return this._grid.table?.selectedIds() ?? new Set();
    }
    isSelected(id) {
        return this.selectedIds.has(id);
    }
    isAllPageSelected() {
        return this._grid.table?.isAllPageSelected() ?? false;
    }
    toggleRow(row) {
        this._grid.table?.toggleRow(row.id);
    }
    toggleAll() {
        this._grid.table?.toggleAll();
    }
    getCellValue(row, key) {
        return row[key];
    }
    onRowClick(row) {
        this._grid.rowClicked$.next(row);
    }
    onSort(col) {
        if (!col.sortable || !this._grid.table)
            return;
        const current = this.sortField;
        const dir = this.sortDir;
        if (current !== col.key) {
            this._grid.table.setSort(col.key, 'asc');
        }
        else if (dir === 'asc') {
            this._grid.table.setSort(col.key, 'desc');
        }
        else {
            this._grid.table.setSort(null, 'asc');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridComponent, isStandalone: true, selector: "ta-grid", inputs: { cardTemplate: { classPropertyName: "cardTemplate", publicName: "cardTemplate", isSignal: true, isRequired: true, transformFunction: null }, showSelection: { classPropertyName: "showSelection", publicName: "showSelection", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { rowClicked: "rowClicked", selectionChanged: "selectionChanged" }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\n  <ta-loader [isLoading]=\"this.isLoading\">\n    <ta-error [message]=\"this.errorMessage\" (retry)=\"this._grid.table?.refresh()\">\n      <ta-empty [isEmpty]=\"this.rows.length === 0\">\n        @if (this.displayType() === 'grid') {\n          <div class=\"ta-grid-table-wrapper\">\n            <table class=\"ta-grid-table\">\n              <thead>\n                <tr>\n                  @if (this.showSelection()) {\n                    <th class=\"ta-grid-th ta-grid-th--select\" (click)=\"this.toggleAll()\">\n                      <ta-font-icon\n                        class=\"c-pointer\"\n                        [icon]=\"this.isAllPageSelected() ? 'check_box' : 'check_box_outline_blank'\"\n                      />\n                    </th>\n                  }\n                  @for (col of this.visibleCols(); track col.key) {\n                    <th\n                      class=\"ta-grid-th\"\n                      [class.is-sortable]=\"col.sortable\"\n                      [class.is-sorted]=\"this.sortField === col.key\"\n                      [style.width]=\"col.width ?? 'auto'\"\n                      (click)=\"this.onSort(col)\"\n                    >\n                      <div class=\"ta-grid-th__inner\">\n                        <span class=\"ta-grid-th__label\">{{ col.title | translate }}</span>\n                        @if (this.sortField === col.key) {\n                          <ta-font-icon\n                            class=\"ta-grid-th__sort-icon\"\n                            [icon]=\"this.sortDir === 'asc' ? 'arrow-up' : 'arrow-down'\"\n                          />\n                        }\n                      </div>\n                    </th>\n                  }\n                </tr>\n              </thead>\n              <tbody>\n                @for (row of this.rows; track row.id) {\n                  <tr\n                    class=\"ta-grid-tr c-pointer\"\n                    [class.is-selected]=\"this.isSelected(row.id)\"\n                    (click)=\"this.onRowClick(row)\"\n                  >\n                    @if (this.showSelection()) {\n                      <td class=\"ta-grid-td ta-grid-td--select\" (click)=\"$event.stopPropagation(); this.toggleRow(row)\">\n                        <ta-font-icon\n                          class=\"c-pointer\"\n                          [icon]=\"this.isSelected(row.id) ? 'check_box' : 'check_box_outline_blank'\"\n                        />\n                      </td>\n                    }\n                    @for (col of this.visibleCols(); track col.key) {\n                      <td class=\"ta-grid-td\">\n                        @if (col.template) {\n                          <ng-container\n                            [ngTemplateOutlet]=\"col.template\"\n                            [ngTemplateOutletContext]=\"{ $implicit: row, value: this.getCellValue(row, col.key) }\"\n                          ></ng-container>\n                        } @else {\n                          {{ this.grid.cols[col.key]?.defaultFormatter(row) ?? this.getCellValue(row, col.key) }}\n                        }\n                      </td>\n                    }\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        }\n\n        @if (this.displayType() === 'card') {\n          @if (this.isGroup) {\n            @for (group of this.dataByGroup; track group.key) {\n              <ta-title [level]=\"3\">{{ group.key }}</ta-title>\n              <div class=\"py-space-md\">\n                <ng-template\n                  [ngTemplateOutlet]=\"this.cardTemplate()\"\n                  [ngTemplateOutletContext]=\"{ items: group.data, selectedIds: this.selectedIds }\"\n                ></ng-template>\n              </div>\n            }\n          } @else {\n            <ng-template\n              [ngTemplateOutlet]=\"this.cardTemplate()\"\n              [ngTemplateOutletContext]=\"{ items: this.data, selectedIds: this.selectedIds }\"\n            ></ng-template>\n          }\n        }\n\n        <div class=\"py-space-md align-center\">\n          <ta-grid-pagination [gridId]=\"this.gridId()\"></ta-grid-pagination>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [".ta-grid-table-wrapper{width:100%;overflow-x:auto}.ta-grid-table{width:100%;border-collapse:collapse;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.ta-grid-table .ta-grid-th{padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border-bottom:2px solid var(--ta-border-primary);color:var(--ta-text-secondary);white-space:nowrap;-webkit-user-select:none;user-select:none}.ta-grid-table .ta-grid-th.is-sortable{cursor:pointer}.ta-grid-table .ta-grid-th.is-sortable:hover{color:var(--ta-text-primary);background:var(--ta-surface-hover)}.ta-grid-table .ta-grid-th.is-sorted{color:var(--ta-text-brand)}.ta-grid-table .ta-grid-th__inner{display:flex;align-items:center;gap:var(--ta-space-xs)}.ta-grid-table .ta-grid-tr{border-bottom:1px solid var(--ta-border-secondary)}.ta-grid-table .ta-grid-tr:hover{background:var(--ta-surface-hover)}.ta-grid-table .ta-grid-td{padding:var(--ta-space-sm) var(--ta-space-md);color:var(--ta-text-primary);vertical-align:middle}\n"], dependencies: [{ kind: "component", type: PaginationComponent, selector: "ta-grid-pagination" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code", "showRetry", "retryLabel"], outputs: ["retry"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid', standalone: true, imports: [PaginationComponent, NgTemplateOutlet, AsyncPipe, EmptyComponent, ErrorComponent, FontIconComponent, LoaderComponent, TitleComponent, TranslateModule], encapsulation: ViewEncapsulation.None, template: "@if (this.isReady$ | async) {\n  <ta-loader [isLoading]=\"this.isLoading\">\n    <ta-error [message]=\"this.errorMessage\" (retry)=\"this._grid.table?.refresh()\">\n      <ta-empty [isEmpty]=\"this.rows.length === 0\">\n        @if (this.displayType() === 'grid') {\n          <div class=\"ta-grid-table-wrapper\">\n            <table class=\"ta-grid-table\">\n              <thead>\n                <tr>\n                  @if (this.showSelection()) {\n                    <th class=\"ta-grid-th ta-grid-th--select\" (click)=\"this.toggleAll()\">\n                      <ta-font-icon\n                        class=\"c-pointer\"\n                        [icon]=\"this.isAllPageSelected() ? 'check_box' : 'check_box_outline_blank'\"\n                      />\n                    </th>\n                  }\n                  @for (col of this.visibleCols(); track col.key) {\n                    <th\n                      class=\"ta-grid-th\"\n                      [class.is-sortable]=\"col.sortable\"\n                      [class.is-sorted]=\"this.sortField === col.key\"\n                      [style.width]=\"col.width ?? 'auto'\"\n                      (click)=\"this.onSort(col)\"\n                    >\n                      <div class=\"ta-grid-th__inner\">\n                        <span class=\"ta-grid-th__label\">{{ col.title | translate }}</span>\n                        @if (this.sortField === col.key) {\n                          <ta-font-icon\n                            class=\"ta-grid-th__sort-icon\"\n                            [icon]=\"this.sortDir === 'asc' ? 'arrow-up' : 'arrow-down'\"\n                          />\n                        }\n                      </div>\n                    </th>\n                  }\n                </tr>\n              </thead>\n              <tbody>\n                @for (row of this.rows; track row.id) {\n                  <tr\n                    class=\"ta-grid-tr c-pointer\"\n                    [class.is-selected]=\"this.isSelected(row.id)\"\n                    (click)=\"this.onRowClick(row)\"\n                  >\n                    @if (this.showSelection()) {\n                      <td class=\"ta-grid-td ta-grid-td--select\" (click)=\"$event.stopPropagation(); this.toggleRow(row)\">\n                        <ta-font-icon\n                          class=\"c-pointer\"\n                          [icon]=\"this.isSelected(row.id) ? 'check_box' : 'check_box_outline_blank'\"\n                        />\n                      </td>\n                    }\n                    @for (col of this.visibleCols(); track col.key) {\n                      <td class=\"ta-grid-td\">\n                        @if (col.template) {\n                          <ng-container\n                            [ngTemplateOutlet]=\"col.template\"\n                            [ngTemplateOutletContext]=\"{ $implicit: row, value: this.getCellValue(row, col.key) }\"\n                          ></ng-container>\n                        } @else {\n                          {{ this.grid.cols[col.key]?.defaultFormatter(row) ?? this.getCellValue(row, col.key) }}\n                        }\n                      </td>\n                    }\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        }\n\n        @if (this.displayType() === 'card') {\n          @if (this.isGroup) {\n            @for (group of this.dataByGroup; track group.key) {\n              <ta-title [level]=\"3\">{{ group.key }}</ta-title>\n              <div class=\"py-space-md\">\n                <ng-template\n                  [ngTemplateOutlet]=\"this.cardTemplate()\"\n                  [ngTemplateOutletContext]=\"{ items: group.data, selectedIds: this.selectedIds }\"\n                ></ng-template>\n              </div>\n            }\n          } @else {\n            <ng-template\n              [ngTemplateOutlet]=\"this.cardTemplate()\"\n              [ngTemplateOutletContext]=\"{ items: this.data, selectedIds: this.selectedIds }\"\n            ></ng-template>\n          }\n        }\n\n        <div class=\"py-space-md align-center\">\n          <ta-grid-pagination [gridId]=\"this.gridId()\"></ta-grid-pagination>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [".ta-grid-table-wrapper{width:100%;overflow-x:auto}.ta-grid-table{width:100%;border-collapse:collapse;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.ta-grid-table .ta-grid-th{padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border-bottom:2px solid var(--ta-border-primary);color:var(--ta-text-secondary);white-space:nowrap;-webkit-user-select:none;user-select:none}.ta-grid-table .ta-grid-th.is-sortable{cursor:pointer}.ta-grid-table .ta-grid-th.is-sortable:hover{color:var(--ta-text-primary);background:var(--ta-surface-hover)}.ta-grid-table .ta-grid-th.is-sorted{color:var(--ta-text-brand)}.ta-grid-table .ta-grid-th__inner{display:flex;align-items:center;gap:var(--ta-space-xs)}.ta-grid-table .ta-grid-tr{border-bottom:1px solid var(--ta-border-secondary)}.ta-grid-table .ta-grid-tr:hover{background:var(--ta-surface-hover)}.ta-grid-table .ta-grid-td{padding:var(--ta-space-sm) var(--ta-space-md);color:var(--ta-text-primary);vertical-align:middle}\n"] }]
        }], ctorParameters: () => [] });

class TaGridHighlightFiltersComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.showResultCount = input(true);
        this.showReset = input(true);
        this.highlightForm = signal([]);
        this.hasActiveFilters = signal(false);
        this._formService = inject((TaGridFormService));
    }
    ngOnInit() {
        super.ngOnInit();
        this._registerSubscription(this.isReady$.subscribe({
            next: () => {
                this.highlightForm.set(this._formService.getHighlightedFiltersForm(this._grid));
            },
        }));
    }
    applyFilters(data) {
        const filters = this._formService.formatFiltersForm(this._grid, data);
        this.hasActiveFilters.set(filters.length > 0);
        this._grid.filters?.apply(filters);
    }
    reset() {
        this.hasActiveFilters.set(false);
        this._grid.filters?.apply([]);
        this.highlightForm.set(this._formService.getHighlightedFiltersForm(this._grid));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridHighlightFiltersComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridHighlightFiltersComponent, isStandalone: true, selector: "ta-grid-highlight-filters", inputs: { showResultCount: { classPropertyName: "showResultCount", publicName: "showResultCount", isSignal: true, isRequired: false, transformFunction: null }, showReset: { classPropertyName: "showReset", publicName: "showReset", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.highlightForm().length > 0) {\n  <div class=\"highlight-filters\" [class.highlight-filters--active]=\"this.hasActiveFilters()\">\n    <div class=\"highlight-filters__icon\">\n      <ta-font-icon name=\"filter\" size=\"sm\"></ta-font-icon>\n    </div>\n\n    <div class=\"highlight-filters__form\">\n      <ta-form\n        [inputs]=\"this.highlightForm()\"\n        (valid)=\"this.applyFilters($event)\"\n        [askOnDestroy]=\"true\"\n        [canDisplayButton]=\"false\"\n      ></ta-form>\n    </div>\n\n    <div class=\"highlight-filters__actions\">\n      @if (this.showReset() && this.hasActiveFilters()) {\n        <ta-button type=\"tertiary\" size=\"small\" icon=\"close\" (action)=\"this.reset()\">\n          {{ 'grid.form.reset' | translate }}\n        </ta-button>\n      }\n    </div>\n\n    @if (this.showResultCount()) {\n      <div class=\"highlight-filters__count\">\n        <ta-text size=\"sm\">\n          {{ 'grid.tag.results' | translate: { nb: this.grid.totalItems() } }}\n        </ta-text>\n      </div>\n    }\n  </div>\n}\n", styles: [":host{display:block}.highlight-filters{display:flex;align-items:center;gap:var(--ta-space-md);padding:var(--ta-space-sm) var(--ta-space-md);background:var(--ta-surface-secondary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);transition:border-color .2s ease,box-shadow .2s ease}.highlight-filters--active{border-color:var(--ta-brand-300);box-shadow:0 0 0 1px var(--ta-brand-100)}.highlight-filters__icon{display:flex;align-items:center;justify-content:center;width:var(--ta-space-xl);height:var(--ta-space-xl);min-width:var(--ta-space-xl);border-radius:var(--ta-radius-minimal);background:var(--ta-brand-50);color:var(--ta-icon-brand-primary)}.highlight-filters__form{flex:1;min-width:0}.highlight-filters__form ::ng-deep ta-form .ta-form{gap:0}.highlight-filters__form ::ng-deep .ta-panel{padding:0;background:transparent}.highlight-filters__form ::ng-deep .grid{display:flex;flex-wrap:wrap;align-items:flex-end;gap:var(--ta-space-sm)}.highlight-filters__form ::ng-deep .g-col-6{flex:1 1 160px;min-width:140px;max-width:240px}.highlight-filters__form ::ng-deep .mat-mdc-form-field{width:100%}.highlight-filters__form ::ng-deep ta-inputs{margin-bottom:0}.highlight-filters__actions{display:flex;align-items:center;flex-shrink:0}.highlight-filters__count{display:flex;align-items:center;flex-shrink:0;padding-left:var(--ta-space-sm);border-left:1px solid var(--ta-border-secondary);color:var(--ta-text-secondary);white-space:nowrap;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}@media screen and (max-width: 767px){.highlight-filters{flex-wrap:wrap}.highlight-filters__icon{display:none}.highlight-filters__form{flex-basis:100%}.highlight-filters__form ::ng-deep .g-col-6{flex:1 1 100%;max-width:none}.highlight-filters__count{border-left:none;padding-left:0}}\n"], dependencies: [{ kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridHighlightFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-highlight-filters', standalone: true, imports: [FormComponent, FontIconComponent, TranslatePipe, ButtonComponent, TextComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (this.highlightForm().length > 0) {\n  <div class=\"highlight-filters\" [class.highlight-filters--active]=\"this.hasActiveFilters()\">\n    <div class=\"highlight-filters__icon\">\n      <ta-font-icon name=\"filter\" size=\"sm\"></ta-font-icon>\n    </div>\n\n    <div class=\"highlight-filters__form\">\n      <ta-form\n        [inputs]=\"this.highlightForm()\"\n        (valid)=\"this.applyFilters($event)\"\n        [askOnDestroy]=\"true\"\n        [canDisplayButton]=\"false\"\n      ></ta-form>\n    </div>\n\n    <div class=\"highlight-filters__actions\">\n      @if (this.showReset() && this.hasActiveFilters()) {\n        <ta-button type=\"tertiary\" size=\"small\" icon=\"close\" (action)=\"this.reset()\">\n          {{ 'grid.form.reset' | translate }}\n        </ta-button>\n      }\n    </div>\n\n    @if (this.showResultCount()) {\n      <div class=\"highlight-filters__count\">\n        <ta-text size=\"sm\">\n          {{ 'grid.tag.results' | translate: { nb: this.grid.totalItems() } }}\n        </ta-text>\n      </div>\n    }\n  </div>\n}\n", styles: [":host{display:block}.highlight-filters{display:flex;align-items:center;gap:var(--ta-space-md);padding:var(--ta-space-sm) var(--ta-space-md);background:var(--ta-surface-secondary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);transition:border-color .2s ease,box-shadow .2s ease}.highlight-filters--active{border-color:var(--ta-brand-300);box-shadow:0 0 0 1px var(--ta-brand-100)}.highlight-filters__icon{display:flex;align-items:center;justify-content:center;width:var(--ta-space-xl);height:var(--ta-space-xl);min-width:var(--ta-space-xl);border-radius:var(--ta-radius-minimal);background:var(--ta-brand-50);color:var(--ta-icon-brand-primary)}.highlight-filters__form{flex:1;min-width:0}.highlight-filters__form ::ng-deep ta-form .ta-form{gap:0}.highlight-filters__form ::ng-deep .ta-panel{padding:0;background:transparent}.highlight-filters__form ::ng-deep .grid{display:flex;flex-wrap:wrap;align-items:flex-end;gap:var(--ta-space-sm)}.highlight-filters__form ::ng-deep .g-col-6{flex:1 1 160px;min-width:140px;max-width:240px}.highlight-filters__form ::ng-deep .mat-mdc-form-field{width:100%}.highlight-filters__form ::ng-deep ta-inputs{margin-bottom:0}.highlight-filters__actions{display:flex;align-items:center;flex-shrink:0}.highlight-filters__count{display:flex;align-items:center;flex-shrink:0;padding-left:var(--ta-space-sm);border-left:1px solid var(--ta-border-secondary);color:var(--ta-text-secondary);white-space:nowrap;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}@media screen and (max-width: 767px){.highlight-filters{flex-wrap:wrap}.highlight-filters__icon{display:none}.highlight-filters__form{flex-basis:100%}.highlight-filters__form ::ng-deep .g-col-6{flex:1 1 100%;max-width:none}.highlight-filters__count{border-left:none;padding-left:0}}\n"] }]
        }] });

class TaGridTagsComponent extends TaAbstractGridComponent {
    get group() {
        return this._grid.groupBy;
    }
    get activeFilters() {
        return this._grid.filters?.get() ?? [];
    }
    ngOnInit() {
        super.ngOnInit();
    }
    remove(filter) {
        this._grid.filters?.remove(filter);
    }
    removeGroup() {
        this._grid.clearGroupBy();
    }
    clear() {
        this._grid.filters?.apply([]);
        this._grid.clearGroupBy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridTagsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridTagsComponent, isStandalone: true, selector: "ta-grid-tags", usesInheritance: true, ngImport: i0, template: "<div class=\"space-between align-center g-space-md\">\r\n  <div class=\"list-tag flex-start g-space-sm\">\r\n    <div class=\"group-tag flex-start g-space-xs align-center\">\r\n      @if (this.group) {\r\n        {{ 'grid.core.groupBy' | translate }}:\r\n        <ta-badge [value]=\"this.group\" type=\"primary\" icon=\"close\" (clickAction)=\"this.removeGroup()\"></ta-badge>\r\n      }\r\n    </div>\r\n\r\n    @for (tag of this.activeFilters; track tag.key) {\r\n      <div class=\"item-tag flex-start g-space-xs align-center\">\r\n        <div class=\"tag-title\">{{ 'grid.' + this.gridId() + '.core.' + tag.key | translate }}:</div>\r\n        @for (value of tag.values; track value.field) {\r\n          <ta-badge\r\n            [value]=\"value.type + ' ' + value.value\"\r\n            type=\"primary\"\r\n            icon=\"close\"\r\n            (clickAction)=\"this.remove(value)\"\r\n          ></ta-badge>\r\n        }\r\n      </div>\r\n    }\r\n  </div>\r\n\r\n  <div class=\"reset-n-result flex-start g-space-md align-center\">\r\n    @if (this.activeFilters.length > 0) {\r\n      <div class=\"reset\">\r\n        <ta-button (action)=\"this.clear()\">\r\n          {{ 'grid.tag.reset' | translate }}\r\n        </ta-button>\r\n      </div>\r\n    }\r\n    <div class=\"result\">\r\n      <ta-text>\r\n        {{ 'grid.tag.results' | translate: { nb: this.grid.totalItems() } }}\r\n      </ta-text>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-tags', standalone: true, imports: [TranslatePipe, BadgeComponent, TextComponent, ButtonComponent], template: "<div class=\"space-between align-center g-space-md\">\r\n  <div class=\"list-tag flex-start g-space-sm\">\r\n    <div class=\"group-tag flex-start g-space-xs align-center\">\r\n      @if (this.group) {\r\n        {{ 'grid.core.groupBy' | translate }}:\r\n        <ta-badge [value]=\"this.group\" type=\"primary\" icon=\"close\" (clickAction)=\"this.removeGroup()\"></ta-badge>\r\n      }\r\n    </div>\r\n\r\n    @for (tag of this.activeFilters; track tag.key) {\r\n      <div class=\"item-tag flex-start g-space-xs align-center\">\r\n        <div class=\"tag-title\">{{ 'grid.' + this.gridId() + '.core.' + tag.key | translate }}:</div>\r\n        @for (value of tag.values; track value.field) {\r\n          <ta-badge\r\n            [value]=\"value.type + ' ' + value.value\"\r\n            type=\"primary\"\r\n            icon=\"close\"\r\n            (clickAction)=\"this.remove(value)\"\r\n          ></ta-badge>\r\n        }\r\n      </div>\r\n    }\r\n  </div>\r\n\r\n  <div class=\"reset-n-result flex-start g-space-md align-center\">\r\n    @if (this.activeFilters.length > 0) {\r\n      <div class=\"reset\">\r\n        <ta-button (action)=\"this.clear()\">\r\n          {{ 'grid.tag.reset' | translate }}\r\n        </ta-button>\r\n      </div>\r\n    }\r\n    <div class=\"result\">\r\n      <ta-text>\r\n        {{ 'grid.tag.results' | translate: { nb: this.grid.totalItems() } }}\r\n      </ta-text>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }] });

class TaFiltersModal extends TaBaseComponent {
    constructor() {
        super();
        this.open = input.required();
        this.gridId = input.required();
        this.closeEvent = output();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFiltersModal, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaFiltersModal, isStandalone: true, selector: "ta-grid-filters-modal", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: true, transformFunction: null }, gridId: { classPropertyName: "gridId", publicName: "gridId", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: `
    <ta-modal
      [open]="this.open()"
      size="medium"
      [title]="'grid.filters.title' | translate"
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        <ta-grid-form [gridId]="this.gridId()" [showTitle]="false"></ta-grid-form>
      </div>
      <div modal-footer>
        <ta-button (action)="this.closeEvent.emit()">{{ 'grid.filters.apply' | translate }}</ta-button>
      </div>
    </ta-modal>
  `, isInline: true, styles: [".filters-modal{display:flex;flex-direction:column;gap:var(--ta-space-md)}.filters-modal__header{flex-direction:row;justify-content:space-between;display:flex;align-items:center;padding:var(--ta-space-md) var(--ta-space-md) var(--ta-space-sm);border-bottom:1px solid var(--ta-border-secondary)}.filters-modal__header ta-font-icon{color:var(--ta-icon-brand-primary)}.filters-modal__content{padding:0 var(--ta-space-md)}.filters-modal__footer{display:flex;flex-wrap:nowrap;justify-content:flex-end;padding:var(--ta-space-sm) var(--ta-space-md) var(--ta-space-md);border-top:1px solid var(--ta-border-secondary)}\n"], dependencies: [{ kind: "component", type: TaGridFormComponent, selector: "ta-grid-form", inputs: ["showTitle", "showReset"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: TaModalComponent, selector: "ta-modal", inputs: ["open", "size", "title", "closeOnBackdrop", "contentFit"], outputs: ["closeEvent"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFiltersModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-filters-modal', template: `
    <ta-modal
      [open]="this.open()"
      size="medium"
      [title]="'grid.filters.title' | translate"
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        <ta-grid-form [gridId]="this.gridId()" [showTitle]="false"></ta-grid-form>
      </div>
      <div modal-footer>
        <ta-button (action)="this.closeEvent.emit()">{{ 'grid.filters.apply' | translate }}</ta-button>
      </div>
    </ta-modal>
  `, standalone: true, imports: [TaGridFormComponent, ButtonComponent, TaModalComponent, TranslatePipe], styles: [".filters-modal{display:flex;flex-direction:column;gap:var(--ta-space-md)}.filters-modal__header{flex-direction:row;justify-content:space-between;display:flex;align-items:center;padding:var(--ta-space-md) var(--ta-space-md) var(--ta-space-sm);border-bottom:1px solid var(--ta-border-secondary)}.filters-modal__header ta-font-icon{color:var(--ta-icon-brand-primary)}.filters-modal__content{padding:0 var(--ta-space-md)}.filters-modal__footer{display:flex;flex-wrap:nowrap;justify-content:flex-end;padding:var(--ta-space-sm) var(--ta-space-md) var(--ta-space-md);border-top:1px solid var(--ta-border-secondary)}\n"] }]
        }], ctorParameters: () => [] });
class TaGridControlComponent extends TaAbstractGridComponent {
    constructor() {
        super();
        this.show = input({
            switchView: true,
            filters: true,
            preset: true,
        });
        this.isFiltersOpen = signal(false);
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.breakpoints.isMobile && this.show().switchView) {
            this.switchView('card');
        }
    }
    switchView(type) {
        this._grid.switchView(type);
    }
    openFilters() {
        this.isFiltersOpen.set(true);
    }
    setPreset(preset) {
        this.grid.filters?.apply(preset.filters);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridControlComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridControlComponent, isStandalone: true, selector: "ta-grid-control", inputs: { show: { classPropertyName: "show", publicName: "show", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\n  <div class=\"grid-control\">\n    @if (this.show().filters) {\n      <ta-button\n        icon=\"filter\"\n        type=\"secondary\"\n        [options]=\"{ circular: 'small' }\"\n        (action)=\"this.openFilters()\"\n      ></ta-button>\n    }\n\n    @if (this.show().preset && (this.grid.filters?.preset?.length ?? 0 > 0)) {\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\n        <ng-template #panelTrigger>\n          <ta-button type=\"secondary\" icon=\"tune\" [options]=\"{ circular: 'small' }\"></ta-button>\n        </ng-template>\n        <ng-template #panelContent>\n          <div class=\"preset-menu\">\n            @for (preset of this.grid.filters?.preset; track preset.name) {\n              <div class=\"preset-menu__item c-pointer\" (click)=\"this.setPreset(preset)\">\n                {{ preset.name }}\n              </div>\n            }\n          </div>\n        </ng-template>\n      </ta-overlay-panel>\n    }\n\n    @if (this.show().switchView) {\n      <div class=\"grid-control__toggle\">\n        <ta-button\n          icon=\"view_list\"\n          [type]=\"this.displayType() === 'grid' ? 'primary' : 'tertiary'\"\n          [options]=\"{ circular: 'small', border: this.displayType() !== 'grid' }\"\n          (action)=\"this.switchView('grid')\"\n        ></ta-button>\n        <ta-button\n          icon=\"grid_view\"\n          [type]=\"this.displayType() === 'card' ? 'primary' : 'tertiary'\"\n          [options]=\"{ circular: 'small', border: this.displayType() !== 'card' }\"\n          (action)=\"this.switchView('card')\"\n        ></ta-button>\n      </div>\n    }\n  </div>\n}\n\n<ta-grid-filters-modal\n  [open]=\"this.isFiltersOpen()\"\n  [gridId]=\"this.gridId()\"\n  (closeEvent)=\"this.isFiltersOpen.set(false)\"\n></ta-grid-filters-modal>\n", styles: [".grid-control{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.grid-control__toggle{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs)}.preset-menu{display:flex;flex-direction:column;padding:var(--ta-space-xs)}.preset-menu__item{padding:var(--ta-space-sm) var(--ta-space-md);border-radius:var(--ta-radius-minimal);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.preset-menu__item:hover{background:var(--ta-surface-hover)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: TaOverlayPanelComponent, selector: "ta-overlay-panel", inputs: ["panelConfig", "position"], outputs: ["closed"] }, { kind: "component", type: TaFiltersModal, selector: "ta-grid-filters-modal", inputs: ["open", "gridId"], outputs: ["closeEvent"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-control', standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, TaOverlayPanelComponent, TaFiltersModal], template: "@if (this.isReady$ | async) {\n  <div class=\"grid-control\">\n    @if (this.show().filters) {\n      <ta-button\n        icon=\"filter\"\n        type=\"secondary\"\n        [options]=\"{ circular: 'small' }\"\n        (action)=\"this.openFilters()\"\n      ></ta-button>\n    }\n\n    @if (this.show().preset && (this.grid.filters?.preset?.length ?? 0 > 0)) {\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\n        <ng-template #panelTrigger>\n          <ta-button type=\"secondary\" icon=\"tune\" [options]=\"{ circular: 'small' }\"></ta-button>\n        </ng-template>\n        <ng-template #panelContent>\n          <div class=\"preset-menu\">\n            @for (preset of this.grid.filters?.preset; track preset.name) {\n              <div class=\"preset-menu__item c-pointer\" (click)=\"this.setPreset(preset)\">\n                {{ preset.name }}\n              </div>\n            }\n          </div>\n        </ng-template>\n      </ta-overlay-panel>\n    }\n\n    @if (this.show().switchView) {\n      <div class=\"grid-control__toggle\">\n        <ta-button\n          icon=\"view_list\"\n          [type]=\"this.displayType() === 'grid' ? 'primary' : 'tertiary'\"\n          [options]=\"{ circular: 'small', border: this.displayType() !== 'grid' }\"\n          (action)=\"this.switchView('grid')\"\n        ></ta-button>\n        <ta-button\n          icon=\"grid_view\"\n          [type]=\"this.displayType() === 'card' ? 'primary' : 'tertiary'\"\n          [options]=\"{ circular: 'small', border: this.displayType() !== 'card' }\"\n          (action)=\"this.switchView('card')\"\n        ></ta-button>\n      </div>\n    }\n  </div>\n}\n\n<ta-grid-filters-modal\n  [open]=\"this.isFiltersOpen()\"\n  [gridId]=\"this.gridId()\"\n  (closeEvent)=\"this.isFiltersOpen.set(false)\"\n></ta-grid-filters-modal>\n", styles: [".grid-control{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.grid-control__toggle{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs)}.preset-menu{display:flex;flex-direction:column;padding:var(--ta-space-xs)}.preset-menu__item{padding:var(--ta-space-sm) var(--ta-space-md);border-radius:var(--ta-radius-minimal);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.preset-menu__item:hover{background:var(--ta-surface-hover)}\n"] }]
        }], ctorParameters: () => [] });

const gridSearchFieldsName = 'search';
const filterTypeToGql = {
    '=': 'eq',
    '!=': 'neq',
    like: 'contains',
    '<': 'lt',
    '>': 'gt',
    '<=': 'lte',
    '>=': 'gte',
    in: 'in',
    starts: 'startsWith',
    ends: 'endsWith',
    regex: 'contains',
};
function buildWhere(filters, colsMetaData) {
    if (!filters.length)
        return null;
    const conditions = [];
    for (const f of filters) {
        if (f.field === gridSearchFieldsName) {
            const searchFields = colsMetaData.filter(c => c.isSearchField).map(c => c.name);
            if (searchFields.length && f.value) {
                conditions.push({ or: searchFields.map(field => ({ [field]: { contains: f.value } })) });
            }
            continue;
        }
        const op = filterTypeToGql[f.type] ?? 'eq';
        conditions.push({ [f.field]: { [op]: f.value } });
    }
    if (!conditions.length)
        return null;
    if (conditions.length === 1)
        return conditions[0];
    return { and: conditions };
}
function buildOrder(sort) {
    if (!sort.length)
        return null;
    return sort.map(s => ({ [s.field]: s.dir.toUpperCase() }));
}
class TaGridViewService extends TaBaseService {
    constructor() {
        super();
    }
    getData$(model, params) {
        const props = params.colsMetaData
            .filter(c => !c.notDisplayable)
            .map(c => c.name)
            .join('\n              ');
        const where = buildWhere(params.filter, params.colsMetaData);
        const order = buildOrder(params.sort);
        const skip = (params.page - 1) * params.size;
        return this._graphService
            .fetchQueryBuilder(createPagedQuery(model, { props, where, order, take: params.size, skip }), '')
            .pipe(filter(isNonNullable), map(response => ({
            data: response.items ?? [],
            total: response.totalCount,
            last_page: Math.ceil(response.totalCount / params.size),
        })));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class TaGridSearchComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.placeholder = input('grid.search.placeholder');
        this.searchInput = new InputTextBox();
    }
    valueChanged(value) {
        const trimmed = (value ?? '').trim();
        const filters = trimmed
            ? [{ field: gridSearchFieldsName, type: 'like', value: trimmed }]
            : [];
        this.grid.filters?.apply(filters);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridSearchComponent, isStandalone: true, selector: "ta-grid-search", inputs: { placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-search-field\n  [input]=\"this.searchInput\"\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  (valueCompleted)=\"this.valueChanged($event)\"\n></ta-search-field>\n", styles: [":host{display:block;width:100%}\n"], dependencies: [{ kind: "component", type: SearchFieldComponent, selector: "ta-search-field", inputs: ["isOpen", "placeholder", "space", "type"], outputs: ["valueCompleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-search', standalone: true, imports: [SearchFieldComponent], template: "<ta-search-field\n  [input]=\"this.searchInput\"\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  (valueCompleted)=\"this.valueChanged($event)\"\n></ta-search-field>\n", styles: [":host{display:block;width:100%}\n"] }]
        }] });

class TaGridSessionService {
    constructor() {
        this._filterData = new HandleComplexRequest();
    }
    setFilter(key, filter) {
        this._filterData.update(key, filter, false);
    }
    getFilter(key) {
        return this._filterData.get(key);
    }
    clearFilter(key) {
        this._filterData.update(key, []);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class TaGridContainerComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.initialData = input();
        this.model = input('');
        this.colsMetaData = input([]);
        this.preset = input();
        this._session = inject(TaGridSessionService);
        this._service = inject(TaGridViewService);
    }
    ngOnInit() {
        super.ngOnInit();
        const raw = this._session.getFilter(this.gridId());
        this._grid.init({
            colsMetaData: this.colsMetaData(),
            initialFilter: raw ?? [],
            data: this.initialData(),
            preset: this.preset(),
            services: this.model()
                ? { getData$: params => this._service.getData$(this.model(), params) }
                : undefined,
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<ng-content></ng-content>\r\n" }]
        }] });

/*
 * Public API Surface of features
 */

/*
 * Public API Surface of features
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ParameterType, TaFiltersModal, TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridFormComponent, TaGridHighlightFiltersComponent, TaGridSearchComponent, TaGridTagsComponent };
//# sourceMappingURL=ta-features.mjs.map
