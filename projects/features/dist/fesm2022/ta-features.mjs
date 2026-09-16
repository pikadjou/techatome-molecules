import * as i0 from '@angular/core';
import { Injectable, signal, computed, input, inject, Component, output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { TaLazyTranslationService, TranslatePipe } from '@ta/translation';
import { TitleComponent, TextComponent, ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent, BadgeComponent, LayoutFullPanelComponent, TaOverlayPanelComponent } from '@ta/ui';
import { isNonNullable, getUniqueArray, TaBaseComponent, PluralTranslatePipe, TypedTemplateDirective } from '@ta/utils';
import { of, Subject, BehaviorSubject, firstValueFrom, distinctUntilChanged, filter, map } from 'rxjs';
import { InputPanel, InputDropdown, InputDatePicker, InputNumber, InputChoices, InputTextBox } from '@ta/form-model';
import { format } from 'date-fns';
import { NgTemplateOutlet, AsyncPipe } from '@angular/common';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseService, createPagedQuery, HandleComplexRequest } from '@ta/server';
import { SearchFieldComponent } from '@ta/form-input';

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
                contentClass: 'flex-column g-space-md',
                children: keys
                    .filter(key => model.cols[key].data.col.showOnSearch)
                    .map(key => model.cols[key].getInputForm())
                    .filter(isNonNullable)
                    .map(input => new InputPanel({
                    key: `panel-${input.key}`,
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
            key: `panel-${input.key}`,
            class: 'g-col-6',
            children: [input],
        }));
        if (children.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'highlight-panel',
                contentClass: 'flex-column g-space-md',
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

/**
 * Charge les libellés de @ta/features depuis `assets/i18n/grid/<lang>.json`.
 * Les clés du fichier sont automatiquement préfixées par `grid.`.
 */
class TaTranslationGrid extends TaLazyTranslationService {
    constructor() {
        super('grid');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, decorators: [{
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
            align: this.data.col.align,
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
        return groupBy(this._groupBy(), this.data);
    }
    get isGroup() {
        return this._groupBy() !== null;
    }
    /**
     * Champ de regroupement courant. Adossé à un signal : lu depuis un template,
     * il notifie les composants même sous un parent en OnPush.
     */
    get groupBy() {
        return this._groupBy();
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
        this._groupBy = signal(null);
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
        this._groupBy.set(field);
        this.table?.setGroupBy(field);
    }
    clearGroupBy() {
        this._groupBy.set(null);
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
        TaTranslationGrid.getInstance();
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
        /** Clé de traduction du titre du panneau. */
        this.title = input('grid.form.title');
        /** Affiche le nombre de résultats à côté du titre. */
        this.showResultCount = input(true);
        /**
         * Affiche le regroupement dans le panneau. Désactivé par défaut : le
         * regroupement organise l'affichage, il est porté par `ta-grid-control`.
         */
        this.showGroup = input(false);
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
        if (this.showGroup()) {
            this._grid.clearGroupBy();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridFormComponent, isStandalone: true, selector: "ta-grid-form", inputs: { showTitle: { classPropertyName: "showTitle", publicName: "showTitle", isSignal: true, isRequired: false, transformFunction: null }, showReset: { classPropertyName: "showReset", publicName: "showReset", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, showResultCount: { classPropertyName: "showResultCount", publicName: "showResultCount", isSignal: true, isRequired: false, transformFunction: null }, showGroup: { classPropertyName: "showGroup", publicName: "showGroup", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div class=\"grid-form\">\r\n  @if (this.showTitle()) {\r\n    <div class=\"grid-form__header\">\r\n      <ta-title [level]=\"3\">{{ this.title() | translate }}</ta-title>\r\n      @if (this.showResultCount()) {\r\n        <ta-text class=\"grid-form__count\">\r\n          {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n        </ta-text>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  <div class=\"grid-form__body\">\r\n    <div class=\"grid-form__section\">\r\n      <ta-form\r\n        [inputs]=\"this.filtersForm()\"\r\n        (valid)=\"this.applyFilters($event)\"\r\n        [onLive]=\"true\"\r\n        [askOnDestroy]=\"true\"\r\n        [canDisplayButton]=\"false\"\r\n      ></ta-form>\r\n    </div>\r\n\r\n    @if (this.showGroup() && this.groupForm().length > 0) {\r\n      <div class=\"grid-form__section\">\r\n        <div class=\"grid-form__section-title\">{{ 'grid.form.group.title' | translate }}</div>\r\n        <ta-form\r\n          [inputs]=\"this.groupForm()\"\r\n          (valid)=\"this.applyGroup($event)\"\r\n          [onLive]=\"true\"\r\n          [askOnDestroy]=\"true\"\r\n          [canDisplayButton]=\"false\"\r\n        ></ta-form>\r\n      </div>\r\n    }\r\n  </div>\r\n\r\n  @if (this.showReset()) {\r\n    <div class=\"grid-form__footer\">\r\n      <ta-button type=\"tertiary\" size=\"small\" (action)=\"this.reset()\">\r\n        {{ 'grid.form.reset' | translate }}\r\n      </ta-button>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [":host{display:block}.grid-form{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__header{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;gap:var(--ta-space-md);padding-bottom:var(--ta-space-sm)}.grid-form__count{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary);white-space:nowrap}.grid-form__body{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__section+.grid-form__section{padding-top:var(--ta-space-md);border-top:1px solid var(--ta-border-tertiary)}.grid-form__section-title{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);margin-bottom:var(--ta-space-sm);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold)}.grid-form__footer{flex-wrap:nowrap;display:flex;align-items:center;justify-content:flex-end;padding-top:var(--ta-space-sm);border-top:1px solid var(--ta-border-tertiary)}\n"], dependencies: [{ kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-form', standalone: true, imports: [FormComponent, TitleComponent, TextComponent, TranslatePipe, PluralTranslatePipe, ButtonComponent], template: "<div class=\"grid-form\">\r\n  @if (this.showTitle()) {\r\n    <div class=\"grid-form__header\">\r\n      <ta-title [level]=\"3\">{{ this.title() | translate }}</ta-title>\r\n      @if (this.showResultCount()) {\r\n        <ta-text class=\"grid-form__count\">\r\n          {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n        </ta-text>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  <div class=\"grid-form__body\">\r\n    <div class=\"grid-form__section\">\r\n      <ta-form\r\n        [inputs]=\"this.filtersForm()\"\r\n        (valid)=\"this.applyFilters($event)\"\r\n        [onLive]=\"true\"\r\n        [askOnDestroy]=\"true\"\r\n        [canDisplayButton]=\"false\"\r\n      ></ta-form>\r\n    </div>\r\n\r\n    @if (this.showGroup() && this.groupForm().length > 0) {\r\n      <div class=\"grid-form__section\">\r\n        <div class=\"grid-form__section-title\">{{ 'grid.form.group.title' | translate }}</div>\r\n        <ta-form\r\n          [inputs]=\"this.groupForm()\"\r\n          (valid)=\"this.applyGroup($event)\"\r\n          [onLive]=\"true\"\r\n          [askOnDestroy]=\"true\"\r\n          [canDisplayButton]=\"false\"\r\n        ></ta-form>\r\n      </div>\r\n    }\r\n  </div>\r\n\r\n  @if (this.showReset()) {\r\n    <div class=\"grid-form__footer\">\r\n      <ta-button type=\"tertiary\" size=\"small\" (action)=\"this.reset()\">\r\n        {{ 'grid.form.reset' | translate }}\r\n      </ta-button>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [":host{display:block}.grid-form{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__header{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;gap:var(--ta-space-md);padding-bottom:var(--ta-space-sm)}.grid-form__count{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary);white-space:nowrap}.grid-form__body{display:flex;flex-direction:column;gap:var(--ta-space-md)}.grid-form__section+.grid-form__section{padding-top:var(--ta-space-md);border-top:1px solid var(--ta-border-tertiary)}.grid-form__section-title{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);margin-bottom:var(--ta-space-sm);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold)}.grid-form__footer{flex-wrap:nowrap;display:flex;align-items:center;justify-content:flex-end;padding-top:var(--ta-space-sm);border-top:1px solid var(--ta-border-tertiary)}\n"] }]
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: PaginationComponent, isStandalone: true, selector: "ta-grid-pagination", usesInheritance: true, ngImport: i0, template: "@if (this.grid && this.grid.table && this.show) {\r\n  <div class=\"flex-start g-space-sm align-center\">\r\n    <ta-font-icon\r\n      name=\"chevron_left\"\r\n      class=\"c-pointer\"\r\n      [title]=\"'grid.pagination.previous' | translate\"\r\n      [attr.aria-label]=\"'grid.pagination.previous' | translate\"\r\n      (click)=\"this.grid.table.previousPage()\"\r\n    ></ta-font-icon>\r\n    <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: { number: 1 } }\"></ng-template>\r\n\r\n    @for (page of this.getListPage(); track page.number) {\r\n      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: page }\"></ng-template>\r\n    }\r\n\r\n    @if (this.paginationGetTotalPages > 1) {\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"item\"\r\n        [ngTemplateOutletContext]=\"{\r\n          pagenumber: { number: this.paginationGetTotalPages },\r\n        }\"\r\n      ></ng-template>\r\n    }\r\n\r\n    <ta-font-icon\r\n      name=\"chevron_right\"\r\n      class=\"c-pointer\"\r\n      [title]=\"'grid.pagination.next' | translate\"\r\n      [attr.aria-label]=\"'grid.pagination.next' | translate\"\r\n      (click)=\"this.grid.table.nextPage()\"\r\n    ></ta-font-icon>\r\n  </div>\r\n}\r\n\r\n<ng-template #item let-pagenumber=\"pagenumber\" [typedTemplate]=\"this.PageNumber\">\r\n  <div\r\n    class=\"figure c-pointer\"\r\n    [class.is-active]=\"pagenumber.number === (this.grid.table?.getPage() || 0)\"\r\n    (click)=\"this.grid.table?.setPage(pagenumber.number)\"\r\n  >\r\n    @if (pagenumber.icon) {\r\n      <ta-font-icon [name]=\"pagenumber.icon\"></ta-font-icon>\r\n    } @else {\r\n      {{ pagenumber.number }}\r\n    }\r\n  </div>\r\n</ng-template>\r\n", styles: [":host{display:block}.figure{flex-wrap:nowrap;align-items:center;display:flex;justify-content:center;margin:auto;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);min-width:var(--ta-space-xl);height:var(--ta-space-xl);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);border:1px solid transparent;color:var(--ta-text-secondary);transition:color .15s ease,background-color .15s ease,border-color .15s ease}.figure:hover{color:var(--ta-text-primary);background-color:var(--ta-surface-hover-primary)}.figure.is-active{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary);font-weight:var(--ta-font-weight-bold)}.figure.is-active:hover{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}ta-font-icon{color:var(--ta-icon-secondary);border-radius:var(--ta-radius-full);transition:color .15s ease,background-color .15s ease}ta-font-icon:hover{color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: TypedTemplateDirective, selector: "ng-template[typedTemplate]", inputs: ["typedTemplate"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-pagination', standalone: true, imports: [FontIconComponent, NgTemplateOutlet, TypedTemplateDirective, TranslatePipe], template: "@if (this.grid && this.grid.table && this.show) {\r\n  <div class=\"flex-start g-space-sm align-center\">\r\n    <ta-font-icon\r\n      name=\"chevron_left\"\r\n      class=\"c-pointer\"\r\n      [title]=\"'grid.pagination.previous' | translate\"\r\n      [attr.aria-label]=\"'grid.pagination.previous' | translate\"\r\n      (click)=\"this.grid.table.previousPage()\"\r\n    ></ta-font-icon>\r\n    <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: { number: 1 } }\"></ng-template>\r\n\r\n    @for (page of this.getListPage(); track page.number) {\r\n      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{ pagenumber: page }\"></ng-template>\r\n    }\r\n\r\n    @if (this.paginationGetTotalPages > 1) {\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"item\"\r\n        [ngTemplateOutletContext]=\"{\r\n          pagenumber: { number: this.paginationGetTotalPages },\r\n        }\"\r\n      ></ng-template>\r\n    }\r\n\r\n    <ta-font-icon\r\n      name=\"chevron_right\"\r\n      class=\"c-pointer\"\r\n      [title]=\"'grid.pagination.next' | translate\"\r\n      [attr.aria-label]=\"'grid.pagination.next' | translate\"\r\n      (click)=\"this.grid.table.nextPage()\"\r\n    ></ta-font-icon>\r\n  </div>\r\n}\r\n\r\n<ng-template #item let-pagenumber=\"pagenumber\" [typedTemplate]=\"this.PageNumber\">\r\n  <div\r\n    class=\"figure c-pointer\"\r\n    [class.is-active]=\"pagenumber.number === (this.grid.table?.getPage() || 0)\"\r\n    (click)=\"this.grid.table?.setPage(pagenumber.number)\"\r\n  >\r\n    @if (pagenumber.icon) {\r\n      <ta-font-icon [name]=\"pagenumber.icon\"></ta-font-icon>\r\n    } @else {\r\n      {{ pagenumber.number }}\r\n    }\r\n  </div>\r\n</ng-template>\r\n", styles: [":host{display:block}.figure{flex-wrap:nowrap;align-items:center;display:flex;justify-content:center;margin:auto;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);min-width:var(--ta-space-xl);height:var(--ta-space-xl);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);border:1px solid transparent;color:var(--ta-text-secondary);transition:color .15s ease,background-color .15s ease,border-color .15s ease}.figure:hover{color:var(--ta-text-primary);background-color:var(--ta-surface-hover-primary)}.figure.is-active{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary);font-weight:var(--ta-font-weight-bold)}.figure.is-active:hover{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}ta-font-icon{color:var(--ta-icon-secondary);border-radius:var(--ta-radius-full);transition:color .15s ease,background-color .15s ease}ta-font-icon:hover{color:var(--ta-icon-brand-primary)}\n"] }]
        }], ctorParameters: () => [] });

class TaGridComponent extends TaAbstractGridComponent {
    constructor() {
        super();
        this.cardTemplate = input.required();
        this.showSelection = input(false);
        /** Hauteur de ligne : confortable par défaut, compacte pour les longues listes. */
        this.density = input('comfortable');
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
    /** Largeur d'une ligne d'en-tête de groupe, colonne de sélection comprise. */
    get colspan() {
        return this.visibleCols().length + (this.showSelection() ? 1 : 0);
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
    /**
     * Libellé d'un groupe : `groupBy` produit des chaînes, on repasse par le
     * formatteur de la colonne pour retrouver dates et booléens lisibles.
     */
    groupLabel(value) {
        const field = this._grid.groupBy;
        const col = field ? this._grid.cols[field] : null;
        if (!col) {
            return value;
        }
        const casted = value === 'true' ? true : value === 'false' ? false : value;
        return col.defaultFormatter({ [field]: casted }) || value;
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridComponent, isStandalone: true, selector: "ta-grid", inputs: { cardTemplate: { classPropertyName: "cardTemplate", publicName: "cardTemplate", isSignal: true, isRequired: true, transformFunction: null }, showSelection: { classPropertyName: "showSelection", publicName: "showSelection", isSignal: true, isRequired: false, transformFunction: null }, density: { classPropertyName: "density", publicName: "density", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { rowClicked: "rowClicked", selectionChanged: "selectionChanged" }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\r\n  <ta-loader [isLoading]=\"this.isLoading\">\r\n    <ta-error [message]=\"this.errorMessage\" (retry)=\"this._grid.table?.refresh()\">\r\n      <ta-empty [isEmpty]=\"this.rows.length === 0\">\r\n        @if (this.displayType() === 'grid') {\r\n          <div class=\"ta-grid-table-wrapper\">\r\n            <table class=\"ta-grid-table\" [class.is-compact]=\"this.density() === 'compact'\">\r\n              <thead>\r\n                <tr>\r\n                  @if (this.showSelection()) {\r\n                    <th class=\"ta-grid-th ta-grid-th--select\" (click)=\"this.toggleAll()\">\r\n                      <ta-font-icon\r\n                        class=\"c-pointer\"\r\n                        [name]=\"this.isAllPageSelected() ? 'check_box' : 'check_box_outline_blank'\"\r\n                      />\r\n                    </th>\r\n                  }\r\n                  @for (col of this.visibleCols(); track col.key) {\r\n                    <th\r\n                      class=\"ta-grid-th\"\r\n                      [class.is-sortable]=\"col.sortable\"\r\n                      [class.is-sorted]=\"this.sortField === col.key\"\r\n                      [style.width]=\"col.width ?? 'auto'\"\r\n                      [style.text-align]=\"col.align ?? 'left'\"\r\n                      (click)=\"this.onSort(col)\"\r\n                    >\r\n                      <div class=\"ta-grid-th__inner\">\r\n                        <span class=\"ta-grid-th__label\">{{ col.title | translate }}</span>\r\n                        @if (this.sortField === col.key) {\r\n                          <ta-font-icon\r\n                            class=\"ta-grid-th__sort-icon\"\r\n                            [name]=\"this.sortDir === 'asc' ? 'arrow-up' : 'arrow-down'\"\r\n                          />\r\n                        }\r\n                      </div>\r\n                    </th>\r\n                  }\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @if (this.isGroup) {\r\n                  <!-- Regroupement : une ligne d'en-t\u00EAte introduit chaque groupe. -->\r\n                  @for (group of this.dataByGroup; track group.key) {\r\n                    <tr class=\"ta-grid-group-row\">\r\n                      <td class=\"ta-grid-group-row__cell\" [attr.colspan]=\"this.colspan\">\r\n                        <div class=\"ta-grid-group-row__inner\">\r\n                          <span class=\"ta-grid-group-row__label\">{{ this.groupLabel(group.key) }}</span>\r\n                          <span class=\"ta-grid-group-row__count\">{{ group.data.length }}</span>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                    @for (row of group.data; track row.id) {\r\n                      <ng-container\r\n                        [ngTemplateOutlet]=\"rowTpl\"\r\n                        [ngTemplateOutletContext]=\"{ $implicit: row }\"\r\n                      ></ng-container>\r\n                    }\r\n                  }\r\n                } @else {\r\n                  @for (row of this.rows; track row.id) {\r\n                    <ng-container\r\n                      [ngTemplateOutlet]=\"rowTpl\"\r\n                      [ngTemplateOutletContext]=\"{ $implicit: row }\"\r\n                    ></ng-container>\r\n                  }\r\n                }\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        }\r\n\r\n        @if (this.displayType() === 'card') {\r\n          @if (this.isGroup) {\r\n            @for (group of this.dataByGroup; track group.key) {\r\n              <div class=\"ta-grid-group-header\">\r\n                <ta-title [level]=\"3\">{{ this.groupLabel(group.key) }}</ta-title>\r\n                <span class=\"ta-grid-group-header__count\">{{ group.data.length }}</span>\r\n              </div>\r\n              <div class=\"py-space-md\">\r\n                <ng-template\r\n                  [ngTemplateOutlet]=\"this.cardTemplate()\"\r\n                  [ngTemplateOutletContext]=\"{ items: group.data, selectedIds: this.selectedIds }\"\r\n                ></ng-template>\r\n              </div>\r\n            }\r\n          } @else {\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"this.cardTemplate()\"\r\n              [ngTemplateOutletContext]=\"{ items: this.data, selectedIds: this.selectedIds }\"\r\n            ></ng-template>\r\n          }\r\n        }\r\n\r\n        <div class=\"py-space-md align-center\">\r\n          <ta-grid-pagination [gridId]=\"this.gridId()\"></ta-grid-pagination>\r\n        </div>\r\n      </ta-empty>\r\n    </ta-error>\r\n  </ta-loader>\r\n}\r\n\r\n<ng-template #rowTpl let-row>\r\n  <tr\r\n    class=\"ta-grid-tr c-pointer\"\r\n    [class.is-selected]=\"this.isSelected(row.id)\"\r\n    (click)=\"this.onRowClick(row)\"\r\n  >\r\n    @if (this.showSelection()) {\r\n      <td class=\"ta-grid-td ta-grid-td--select\" (click)=\"$event.stopPropagation(); this.toggleRow(row)\">\r\n        <ta-font-icon\r\n          class=\"c-pointer\"\r\n          [name]=\"this.isSelected(row.id) ? 'check_box' : 'check_box_outline_blank'\"\r\n        />\r\n      </td>\r\n    }\r\n    @for (col of this.visibleCols(); track col.key) {\r\n      <td class=\"ta-grid-td\" [style.text-align]=\"col.align ?? 'left'\">\r\n        @if (col.template) {\r\n          <ng-container\r\n            [ngTemplateOutlet]=\"col.template\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: row, value: this.getCellValue(row, col.key) }\"\r\n          ></ng-container>\r\n        } @else {\r\n          {{ this.grid.cols[col.key]?.defaultFormatter(row) ?? this.getCellValue(row, col.key) }}\r\n        }\r\n      </td>\r\n    }\r\n  </tr>\r\n</ng-template>\r\n", styles: [".ta-grid-table-wrapper{width:100%;overflow-x:auto}.ta-grid-table{width:100%;border-collapse:collapse;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.ta-grid-table .ta-grid-th{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border-bottom:1px solid var(--ta-border-tertiary);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold);white-space:nowrap;-webkit-user-select:none;user-select:none}.ta-grid-table .ta-grid-th.is-sortable{cursor:pointer}.ta-grid-table .ta-grid-th.is-sortable:hover{color:var(--ta-text-primary);background:var(--ta-surface-hover-primary)}.ta-grid-table .ta-grid-th.is-sorted{color:var(--ta-text-brand-primary)}.ta-grid-table .ta-grid-th__inner{display:flex;align-items:center;gap:var(--ta-space-xs)}.ta-grid-table .ta-grid-tr{border-bottom:1px solid var(--ta-border-tertiary);transition:background-color .12s ease}.ta-grid-table .ta-grid-tr:last-child{border-bottom:none}.ta-grid-table .ta-grid-tr:hover{background:var(--ta-surface-secondary)}.ta-grid-table .ta-grid-tr.is-selected{background:var(--ta-surface-tertiary)}.ta-grid-table .ta-grid-td{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-sm) var(--ta-space-md);color:var(--ta-text-primary);vertical-align:middle}.ta-grid-table .ta-grid-th--select,.ta-grid-table .ta-grid-td--select{width:1%;padding-right:0;color:var(--ta-icon-secondary)}.ta-grid-table.is-compact .ta-grid-th,.ta-grid-table.is-compact .ta-grid-td{padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-xs)}.ta-grid-group-row__cell{padding:var(--ta-space-sm) var(--ta-space-md);background:var(--ta-surface-secondary);border-bottom:1px solid var(--ta-border-tertiary)}.ta-grid-group-row__inner{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.ta-grid-group-row__label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold)}.ta-grid-group-row__count{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);background:var(--ta-surface-primary);color:var(--ta-text-secondary);font-weight:var(--ta-font-weight-bold)}.ta-grid-group-header{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm);padding-top:var(--ta-space-md)}.ta-grid-group-header__count{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);background:var(--ta-surface-secondary);color:var(--ta-text-secondary);font-weight:var(--ta-font-weight-bold)}\n"], dependencies: [{ kind: "component", type: PaginationComponent, selector: "ta-grid-pagination" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "variant", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code", "showRetry", "retryLabel"], outputs: ["retry"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid', standalone: true, imports: [PaginationComponent, NgTemplateOutlet, AsyncPipe, EmptyComponent, ErrorComponent, FontIconComponent, LoaderComponent, TitleComponent, TranslateModule], encapsulation: ViewEncapsulation.None, template: "@if (this.isReady$ | async) {\r\n  <ta-loader [isLoading]=\"this.isLoading\">\r\n    <ta-error [message]=\"this.errorMessage\" (retry)=\"this._grid.table?.refresh()\">\r\n      <ta-empty [isEmpty]=\"this.rows.length === 0\">\r\n        @if (this.displayType() === 'grid') {\r\n          <div class=\"ta-grid-table-wrapper\">\r\n            <table class=\"ta-grid-table\" [class.is-compact]=\"this.density() === 'compact'\">\r\n              <thead>\r\n                <tr>\r\n                  @if (this.showSelection()) {\r\n                    <th class=\"ta-grid-th ta-grid-th--select\" (click)=\"this.toggleAll()\">\r\n                      <ta-font-icon\r\n                        class=\"c-pointer\"\r\n                        [name]=\"this.isAllPageSelected() ? 'check_box' : 'check_box_outline_blank'\"\r\n                      />\r\n                    </th>\r\n                  }\r\n                  @for (col of this.visibleCols(); track col.key) {\r\n                    <th\r\n                      class=\"ta-grid-th\"\r\n                      [class.is-sortable]=\"col.sortable\"\r\n                      [class.is-sorted]=\"this.sortField === col.key\"\r\n                      [style.width]=\"col.width ?? 'auto'\"\r\n                      [style.text-align]=\"col.align ?? 'left'\"\r\n                      (click)=\"this.onSort(col)\"\r\n                    >\r\n                      <div class=\"ta-grid-th__inner\">\r\n                        <span class=\"ta-grid-th__label\">{{ col.title | translate }}</span>\r\n                        @if (this.sortField === col.key) {\r\n                          <ta-font-icon\r\n                            class=\"ta-grid-th__sort-icon\"\r\n                            [name]=\"this.sortDir === 'asc' ? 'arrow-up' : 'arrow-down'\"\r\n                          />\r\n                        }\r\n                      </div>\r\n                    </th>\r\n                  }\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @if (this.isGroup) {\r\n                  <!-- Regroupement : une ligne d'en-t\u00EAte introduit chaque groupe. -->\r\n                  @for (group of this.dataByGroup; track group.key) {\r\n                    <tr class=\"ta-grid-group-row\">\r\n                      <td class=\"ta-grid-group-row__cell\" [attr.colspan]=\"this.colspan\">\r\n                        <div class=\"ta-grid-group-row__inner\">\r\n                          <span class=\"ta-grid-group-row__label\">{{ this.groupLabel(group.key) }}</span>\r\n                          <span class=\"ta-grid-group-row__count\">{{ group.data.length }}</span>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                    @for (row of group.data; track row.id) {\r\n                      <ng-container\r\n                        [ngTemplateOutlet]=\"rowTpl\"\r\n                        [ngTemplateOutletContext]=\"{ $implicit: row }\"\r\n                      ></ng-container>\r\n                    }\r\n                  }\r\n                } @else {\r\n                  @for (row of this.rows; track row.id) {\r\n                    <ng-container\r\n                      [ngTemplateOutlet]=\"rowTpl\"\r\n                      [ngTemplateOutletContext]=\"{ $implicit: row }\"\r\n                    ></ng-container>\r\n                  }\r\n                }\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        }\r\n\r\n        @if (this.displayType() === 'card') {\r\n          @if (this.isGroup) {\r\n            @for (group of this.dataByGroup; track group.key) {\r\n              <div class=\"ta-grid-group-header\">\r\n                <ta-title [level]=\"3\">{{ this.groupLabel(group.key) }}</ta-title>\r\n                <span class=\"ta-grid-group-header__count\">{{ group.data.length }}</span>\r\n              </div>\r\n              <div class=\"py-space-md\">\r\n                <ng-template\r\n                  [ngTemplateOutlet]=\"this.cardTemplate()\"\r\n                  [ngTemplateOutletContext]=\"{ items: group.data, selectedIds: this.selectedIds }\"\r\n                ></ng-template>\r\n              </div>\r\n            }\r\n          } @else {\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"this.cardTemplate()\"\r\n              [ngTemplateOutletContext]=\"{ items: this.data, selectedIds: this.selectedIds }\"\r\n            ></ng-template>\r\n          }\r\n        }\r\n\r\n        <div class=\"py-space-md align-center\">\r\n          <ta-grid-pagination [gridId]=\"this.gridId()\"></ta-grid-pagination>\r\n        </div>\r\n      </ta-empty>\r\n    </ta-error>\r\n  </ta-loader>\r\n}\r\n\r\n<ng-template #rowTpl let-row>\r\n  <tr\r\n    class=\"ta-grid-tr c-pointer\"\r\n    [class.is-selected]=\"this.isSelected(row.id)\"\r\n    (click)=\"this.onRowClick(row)\"\r\n  >\r\n    @if (this.showSelection()) {\r\n      <td class=\"ta-grid-td ta-grid-td--select\" (click)=\"$event.stopPropagation(); this.toggleRow(row)\">\r\n        <ta-font-icon\r\n          class=\"c-pointer\"\r\n          [name]=\"this.isSelected(row.id) ? 'check_box' : 'check_box_outline_blank'\"\r\n        />\r\n      </td>\r\n    }\r\n    @for (col of this.visibleCols(); track col.key) {\r\n      <td class=\"ta-grid-td\" [style.text-align]=\"col.align ?? 'left'\">\r\n        @if (col.template) {\r\n          <ng-container\r\n            [ngTemplateOutlet]=\"col.template\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: row, value: this.getCellValue(row, col.key) }\"\r\n          ></ng-container>\r\n        } @else {\r\n          {{ this.grid.cols[col.key]?.defaultFormatter(row) ?? this.getCellValue(row, col.key) }}\r\n        }\r\n      </td>\r\n    }\r\n  </tr>\r\n</ng-template>\r\n", styles: [".ta-grid-table-wrapper{width:100%;overflow-x:auto}.ta-grid-table{width:100%;border-collapse:collapse;font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.ta-grid-table .ta-grid-th{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border-bottom:1px solid var(--ta-border-tertiary);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold);white-space:nowrap;-webkit-user-select:none;user-select:none}.ta-grid-table .ta-grid-th.is-sortable{cursor:pointer}.ta-grid-table .ta-grid-th.is-sortable:hover{color:var(--ta-text-primary);background:var(--ta-surface-hover-primary)}.ta-grid-table .ta-grid-th.is-sorted{color:var(--ta-text-brand-primary)}.ta-grid-table .ta-grid-th__inner{display:flex;align-items:center;gap:var(--ta-space-xs)}.ta-grid-table .ta-grid-tr{border-bottom:1px solid var(--ta-border-tertiary);transition:background-color .12s ease}.ta-grid-table .ta-grid-tr:last-child{border-bottom:none}.ta-grid-table .ta-grid-tr:hover{background:var(--ta-surface-secondary)}.ta-grid-table .ta-grid-tr.is-selected{background:var(--ta-surface-tertiary)}.ta-grid-table .ta-grid-td{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-sm) var(--ta-space-md);color:var(--ta-text-primary);vertical-align:middle}.ta-grid-table .ta-grid-th--select,.ta-grid-table .ta-grid-td--select{width:1%;padding-right:0;color:var(--ta-icon-secondary)}.ta-grid-table.is-compact .ta-grid-th,.ta-grid-table.is-compact .ta-grid-td{padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-xs)}.ta-grid-group-row__cell{padding:var(--ta-space-sm) var(--ta-space-md);background:var(--ta-surface-secondary);border-bottom:1px solid var(--ta-border-tertiary)}.ta-grid-group-row__inner{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.ta-grid-group-row__label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold)}.ta-grid-group-row__count{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);background:var(--ta-surface-primary);color:var(--ta-text-secondary);font-weight:var(--ta-font-weight-bold)}.ta-grid-group-header{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm);padding-top:var(--ta-space-md)}.ta-grid-group-header__count{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:0 var(--ta-space-sm);border-radius:var(--ta-radius-full);background:var(--ta-surface-secondary);color:var(--ta-text-secondary);font-weight:var(--ta-font-weight-bold)}\n"] }]
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridHighlightFiltersComponent, isStandalone: true, selector: "ta-grid-highlight-filters", inputs: { showResultCount: { classPropertyName: "showResultCount", publicName: "showResultCount", isSignal: true, isRequired: false, transformFunction: null }, showReset: { classPropertyName: "showReset", publicName: "showReset", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.highlightForm().length > 0) {\r\n  <div class=\"highlight-filters\" [class.highlight-filters--active]=\"this.hasActiveFilters()\">\r\n    <div class=\"highlight-filters__form\">\r\n      <ta-form\r\n        [inputs]=\"this.highlightForm()\"\r\n        (valid)=\"this.applyFilters($event)\"\r\n        [onLive]=\"true\"\r\n        [askOnDestroy]=\"true\"\r\n        [canDisplayButton]=\"false\"\r\n      ></ta-form>\r\n    </div>\r\n\r\n    <div class=\"highlight-filters__meta\">\r\n      @if (this.showResultCount()) {\r\n        <ta-text class=\"highlight-filters__count\">\r\n          {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n        </ta-text>\r\n      }\r\n\r\n      @if (this.showReset() && this.hasActiveFilters()) {\r\n        <ta-button type=\"tertiary\" size=\"small\" icon=\"close\" (action)=\"this.reset()\">\r\n          {{ 'grid.form.reset' | translate }}\r\n        </ta-button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [":host{display:block}.highlight-filters{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-xs);background:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-full);box-shadow:var(--ta-shadow-black-sm);transition:border-color .2s ease,box-shadow .2s ease}.highlight-filters:hover{box-shadow:var(--ta-shadow-black-md)}.highlight-filters--active{border-color:var(--ta-border-brand-primary)}.highlight-filters__form{display:flex;flex:1 1 100%;min-width:0}.highlight-filters__meta{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm);flex-shrink:0;padding:0 var(--ta-space-md);border-left:1px solid var(--ta-border-tertiary)}.highlight-filters__count{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold);white-space:nowrap}@media screen and (max-width: 767px){.highlight-filters{flex-wrap:wrap;padding:var(--ta-space-sm);border-radius:var(--ta-radius-rounded)}.highlight-filters__form{flex-basis:100%}.highlight-filters__meta{width:100%;justify-content:space-between;padding:var(--ta-space-xs) var(--ta-space-sm) 0;border-left:none;border-top:1px solid var(--ta-border-tertiary)}}\n"], dependencies: [{ kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridHighlightFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-highlight-filters', standalone: true, imports: [FormComponent, TranslatePipe, PluralTranslatePipe, ButtonComponent, TextComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (this.highlightForm().length > 0) {\r\n  <div class=\"highlight-filters\" [class.highlight-filters--active]=\"this.hasActiveFilters()\">\r\n    <div class=\"highlight-filters__form\">\r\n      <ta-form\r\n        [inputs]=\"this.highlightForm()\"\r\n        (valid)=\"this.applyFilters($event)\"\r\n        [onLive]=\"true\"\r\n        [askOnDestroy]=\"true\"\r\n        [canDisplayButton]=\"false\"\r\n      ></ta-form>\r\n    </div>\r\n\r\n    <div class=\"highlight-filters__meta\">\r\n      @if (this.showResultCount()) {\r\n        <ta-text class=\"highlight-filters__count\">\r\n          {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n        </ta-text>\r\n      }\r\n\r\n      @if (this.showReset() && this.hasActiveFilters()) {\r\n        <ta-button type=\"tertiary\" size=\"small\" icon=\"close\" (action)=\"this.reset()\">\r\n          {{ 'grid.form.reset' | translate }}\r\n        </ta-button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [":host{display:block}.highlight-filters{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-xs);background:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-full);box-shadow:var(--ta-shadow-black-sm);transition:border-color .2s ease,box-shadow .2s ease}.highlight-filters:hover{box-shadow:var(--ta-shadow-black-md)}.highlight-filters--active{border-color:var(--ta-border-brand-primary)}.highlight-filters__form{display:flex;flex:1 1 100%;min-width:0}.highlight-filters__meta{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm);flex-shrink:0;padding:0 var(--ta-space-md);border-left:1px solid var(--ta-border-tertiary)}.highlight-filters__count{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold);white-space:nowrap}@media screen and (max-width: 767px){.highlight-filters{flex-wrap:wrap;padding:var(--ta-space-sm);border-radius:var(--ta-radius-rounded)}.highlight-filters__form{flex-basis:100%}.highlight-filters__meta{width:100%;justify-content:space-between;padding:var(--ta-space-xs) var(--ta-space-sm) 0;border-left:none;border-top:1px solid var(--ta-border-tertiary)}}\n"] }]
        }] });

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

/** Opérateurs rendus tels quels dans le chip, sous leur forme mathématique. */
const OPERATOR_SYMBOLS = {
    '!=': '≠',
    '<': '<',
    '<=': '≤',
    '>': '>',
    '>=': '≥',
};
class TaGridTagsComponent extends TaAbstractGridComponent {
    get group() {
        return this._grid.groupBy;
    }
    get activeFilters() {
        return this._grid.filters?.get() ?? [];
    }
    get hasActiveFilters() {
        return this.activeFilters.length > 0 || !!this.group;
    }
    /** Clé de traduction du libellé d'un critère — le champ de recherche n'est pas une colonne. */
    labelKey(key) {
        if (key === gridSearchFieldsName) {
            return 'grid.tag.search';
        }
        return this._grid.cols[key]?.inputLabel ?? key;
    }
    /**
     * Suffixe lisible du chip : « : Electronics », « ≥ 100 », « : « book » ».
     * L'opérateur n'apparaît que lorsqu'il porte du sens.
     */
    formatValue(filter) {
        if (typeof filter.value === 'boolean') {
            return ` ${filter.value ? '✓' : '✗'}`;
        }
        const value = Array.isArray(filter.value) ? filter.value.join(', ') : String(filter.value);
        switch (filter.type) {
            case 'like':
            case 'regex':
                return ` : « ${value} »`;
            case 'starts':
                return ` : ${value}…`;
            case 'ends':
                return ` : …${value}`;
            case '=':
            case 'in':
                return ` : ${value}`;
            default:
                return ` ${OPERATOR_SYMBOLS[filter.type] ?? filter.type} ${value}`;
        }
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridTagsComponent, isStandalone: true, selector: "ta-grid-tags", usesInheritance: true, ngImport: i0, template: "<div class=\"grid-tags\">\r\n  <ta-text class=\"grid-tags__results\">\r\n    {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n  </ta-text>\r\n\r\n  @if (this.hasActiveFilters) {\r\n    <div class=\"grid-tags__list\">\r\n      @if (this.group) {\r\n        <ta-badge\r\n          class=\"grid-tags__chip grid-tags__chip--group\"\r\n          [value]=\"('grid.tag.group' | translate) + ' : ' + (this.labelKey(this.group) | translate)\"\r\n          type=\"secondary\"\r\n          icon=\"close\"\r\n          (clickAction)=\"this.removeGroup()\"\r\n        ></ta-badge>\r\n      }\r\n\r\n      @for (tag of this.activeFilters; track tag.key) {\r\n        @for (value of tag.values; track value.type + value.value) {\r\n          <ta-badge\r\n            class=\"grid-tags__chip\"\r\n            [value]=\"(this.labelKey(tag.key) | translate) + this.formatValue(value)\"\r\n            type=\"primary\"\r\n            icon=\"close\"\r\n            (clickAction)=\"this.remove(value)\"\r\n          ></ta-badge>\r\n        }\r\n      }\r\n    </div>\r\n\r\n    <ta-button class=\"grid-tags__clear\" type=\"tertiary\" size=\"small\" (action)=\"this.clear()\">\r\n      {{ 'grid.tag.reset' | translate }}\r\n    </ta-button>\r\n  }\r\n</div>\r\n", styles: [":host{display:block}.grid-tags{flex-wrap:nowrap;display:flex;align-items:center;flex-wrap:wrap;gap:var(--ta-space-sm) var(--ta-space-md);padding:var(--ta-space-sm) 0}.grid-tags__results{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-bold-weight);color:var(--ta-text-primary);white-space:nowrap}.grid-tags__list{flex-wrap:nowrap;display:flex;align-items:center;flex:1 1 auto;flex-wrap:wrap;gap:var(--ta-space-sm);min-width:0}\n"], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-tags', standalone: true, imports: [TranslatePipe, PluralTranslatePipe, BadgeComponent, TextComponent, ButtonComponent], template: "<div class=\"grid-tags\">\r\n  <ta-text class=\"grid-tags__results\">\r\n    {{ 'grid.tag.results' | pluralTranslate: this.grid.totalItems() | translate: { nb: this.grid.totalItems() } }}\r\n  </ta-text>\r\n\r\n  @if (this.hasActiveFilters) {\r\n    <div class=\"grid-tags__list\">\r\n      @if (this.group) {\r\n        <ta-badge\r\n          class=\"grid-tags__chip grid-tags__chip--group\"\r\n          [value]=\"('grid.tag.group' | translate) + ' : ' + (this.labelKey(this.group) | translate)\"\r\n          type=\"secondary\"\r\n          icon=\"close\"\r\n          (clickAction)=\"this.removeGroup()\"\r\n        ></ta-badge>\r\n      }\r\n\r\n      @for (tag of this.activeFilters; track tag.key) {\r\n        @for (value of tag.values; track value.type + value.value) {\r\n          <ta-badge\r\n            class=\"grid-tags__chip\"\r\n            [value]=\"(this.labelKey(tag.key) | translate) + this.formatValue(value)\"\r\n            type=\"primary\"\r\n            icon=\"close\"\r\n            (clickAction)=\"this.remove(value)\"\r\n          ></ta-badge>\r\n        }\r\n      }\r\n    </div>\r\n\r\n    <ta-button class=\"grid-tags__clear\" type=\"tertiary\" size=\"small\" (action)=\"this.clear()\">\r\n      {{ 'grid.tag.reset' | translate }}\r\n    </ta-button>\r\n  }\r\n</div>\r\n", styles: [":host{display:block}.grid-tags{flex-wrap:nowrap;display:flex;align-items:center;flex-wrap:wrap;gap:var(--ta-space-sm) var(--ta-space-md);padding:var(--ta-space-sm) 0}.grid-tags__results{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-bold-weight);color:var(--ta-text-primary);white-space:nowrap}.grid-tags__list{flex-wrap:nowrap;display:flex;align-items:center;flex:1 1 auto;flex-wrap:wrap;gap:var(--ta-space-sm);min-width:0}\n"] }]
        }] });

/**
 * Panneau latéral des filtres. Un panneau plutôt qu'une modale : les critères
 * restent à côté de la liste, qui se met à jour pendant qu'on les règle.
 */
class TaGridFiltersPanel extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.closeEvent = output();
    }
    get resultCount() {
        return this.grid?.totalItems() ?? 0;
    }
    /** Ne touche qu'aux filtres : le regroupement se pilote depuis ta-grid-control. */
    reset() {
        this._grid.filters?.apply([]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFiltersPanel, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaGridFiltersPanel, isStandalone: true, selector: "ta-grid-filters-panel", outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: "<ta-layout-full-panel\r\n  width=\"420px\"\r\n  [title]=\"'grid.filters.title' | translate\"\r\n  (closeEvent)=\"this.closeEvent.emit()\"\r\n>\r\n  <div panel-content>\r\n    <ta-grid-form [gridId]=\"this.gridId()\" [showTitle]=\"false\" [showReset]=\"false\"></ta-grid-form>\r\n  </div>\r\n\r\n  <div panel-footer class=\"filters-panel__footer\">\r\n    <ta-button type=\"tertiary\" (action)=\"this.reset()\">\r\n      {{ 'grid.form.reset' | translate }}\r\n    </ta-button>\r\n\r\n    <ta-button (action)=\"this.closeEvent.emit()\">\r\n      {{ 'grid.filters.applyCount' | pluralTranslate: this.resultCount | translate: { nb: this.resultCount } }}\r\n    </ta-button>\r\n  </div>\r\n</ta-layout-full-panel>\r\n", styles: [".filters-panel__footer{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;gap:var(--ta-space-md);width:100%}\n"], dependencies: [{ kind: "component", type: TaGridFormComponent, selector: "ta-grid-form", inputs: ["showTitle", "showReset", "title", "showResultCount", "showGroup"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFiltersPanel, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-filters-panel', standalone: true, imports: [TaGridFormComponent, ButtonComponent, LayoutFullPanelComponent, TranslatePipe, PluralTranslatePipe], template: "<ta-layout-full-panel\r\n  width=\"420px\"\r\n  [title]=\"'grid.filters.title' | translate\"\r\n  (closeEvent)=\"this.closeEvent.emit()\"\r\n>\r\n  <div panel-content>\r\n    <ta-grid-form [gridId]=\"this.gridId()\" [showTitle]=\"false\" [showReset]=\"false\"></ta-grid-form>\r\n  </div>\r\n\r\n  <div panel-footer class=\"filters-panel__footer\">\r\n    <ta-button type=\"tertiary\" (action)=\"this.reset()\">\r\n      {{ 'grid.form.reset' | translate }}\r\n    </ta-button>\r\n\r\n    <ta-button (action)=\"this.closeEvent.emit()\">\r\n      {{ 'grid.filters.applyCount' | pluralTranslate: this.resultCount | translate: { nb: this.resultCount } }}\r\n    </ta-button>\r\n  </div>\r\n</ta-layout-full-panel>\r\n", styles: [".filters-panel__footer{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;gap:var(--ta-space-md);width:100%}\n"] }]
        }] });
class TaGridControlComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.show = input({
            filters: true,
            group: true,
            preset: true,
            sort: true,
            switchView: true,
        });
        /** Masque les libellés textuels : ne restent que les icônes. */
        this.compact = input(false);
        this.isFiltersOpen = signal(false);
    }
    /** Nombre de critères actifs, hors recherche globale — affiché sur le bouton Filtres. */
    get activeFiltersCount() {
        return (this.grid?.filters?.get() ?? [])
            .filter(tag => tag.key !== gridSearchFieldsName)
            .reduce((count, tag) => count + tag.values.length, 0);
    }
    /** Colonnes sur lesquelles un regroupement a du sens. */
    get groupableCols() {
        return Object.values(this.grid?.cols ?? {})
            .filter(col => col.data.col.showOnSearch && !col.data.col.notDisplayable)
            .map(col => ({ key: col.key, label: col.inputLabel }));
    }
    get hasGroupableCols() {
        return this.groupableCols.length > 0;
    }
    /** Colonnes triables, pour les vues sans en-têtes (cartes). */
    get sortableCols() {
        return Object.values(this.grid?.cols ?? {})
            .filter(col => !col.data.col.notDisplayable && !String(col.key).startsWith('_'))
            .map(col => ({ key: col.key, label: col.inputLabel }));
    }
    get hasSortableCols() {
        return this.sortableCols.length > 0;
    }
    get activeSort() {
        return this.grid?.table?.sortField() ?? null;
    }
    get activeSortDir() {
        return this.grid?.table?.sortDir() ?? 'asc';
    }
    get activeSortLabel() {
        const key = this.activeSort;
        return key ? (this.grid?.cols[key]?.inputLabel ?? key) : null;
    }
    get activeGroup() {
        return this.grid?.groupBy ?? null;
    }
    get activeGroupLabel() {
        const key = this.activeGroup;
        return key ? (this.grid?.cols[key]?.inputLabel ?? key) : null;
    }
    get hasPresets() {
        return (this.grid?.filters?.preset?.length ?? 0) > 0;
    }
    get activePresetName() {
        return this.grid?.filters?.preset?.find(preset => this.isPresetActive(preset))?.name ?? null;
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
        this.grid.filters?.apply(this.isPresetActive(preset) ? [] : preset.filters);
    }
    /** Rejouer le même critère inverse le sens. */
    setSort(key) {
        if (!key) {
            this.grid?.table?.setSort(null, 'asc');
            return;
        }
        const dir = key === this.activeSort && this.activeSortDir === 'asc' ? 'desc' : 'asc';
        this.grid?.table?.setSort(key, dir);
    }
    setGroup(key) {
        if (!key || key === this.activeGroup) {
            this._grid.clearGroupBy();
            return;
        }
        this._grid.setGroupBy(key);
    }
    isPresetActive(preset) {
        if (!preset.filters.length) {
            return false;
        }
        const active = (this.grid?.filters?.get() ?? []).flatMap(tag => tag.values);
        return preset.filters.every(filter => active.some(current => current.field === filter.field &&
            current.type === filter.type &&
            String(current.value) === String(filter.value)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridControlComponent, isStandalone: true, selector: "ta-grid-control", inputs: { show: { classPropertyName: "show", publicName: "show", isSignal: true, isRequired: false, transformFunction: null }, compact: { classPropertyName: "compact", publicName: "compact", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\r\n  <div class=\"grid-control\" [class.grid-control--compact]=\"this.compact()\">\r\n    @if (this.show().filters) {\r\n      <ta-button\r\n        [type]=\"this.activeFiltersCount > 0 ? 'secondary' : 'tertiary'\"\r\n        icon=\"filter_alt\"\r\n        (action)=\"this.openFilters()\"\r\n      >\r\n        <span class=\"grid-control__label\">{{ 'grid.control.filters' | translate }}</span>\r\n        @if (this.activeFiltersCount > 0) {\r\n          <span class=\"grid-control__count\">{{ this.activeFiltersCount }}</span>\r\n        }\r\n      </ta-button>\r\n    }\r\n\r\n    @if (this.show().preset && this.hasPresets) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Pas de stopPropagation : le clic doit atteindre l'overlay. -->\r\n          <ta-button\r\n            [type]=\"this.activePresetName ? 'secondary' : 'tertiary'\"\r\n            icon=\"tune\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activePresetName ?? ('grid.control.presets' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.presets' | translate }}</div>\r\n            @for (preset of this.grid.filters?.preset; track preset.name) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.isPresetActive(preset)\"\r\n                (click)=\"this.setPreset(preset)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ preset.name }}</span>\r\n                @if (this.isPresetActive(preset)) {\r\n                  <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().sort && this.hasSortableCols) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Le clic doit atteindre le d\u00E9clencheur de l'overlay : pas de stopPropagation. -->\r\n          <ta-button\r\n            [type]=\"this.activeSort ? 'secondary' : 'tertiary'\"\r\n            [icon]=\"this.activeSort && this.activeSortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activeSortLabel ? (this.activeSortLabel | translate) : ('grid.control.sort' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.sort' | translate }}</div>\r\n\r\n            <div class=\"preset-menu__item c-pointer\" [class.is-active]=\"!this.activeSort\" (click)=\"this.setSort(null)\">\r\n              <span class=\"preset-menu__item-label\">{{ 'grid.control.sortNone' | translate }}</span>\r\n              @if (!this.activeSort) {\r\n                <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n              }\r\n            </div>\r\n\r\n            @for (col of this.sortableCols; track col.key) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.activeSort === col.key\"\r\n                (click)=\"this.setSort(col.key)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ col.label | translate }}</span>\r\n                @if (this.activeSort === col.key) {\r\n                  <ta-font-icon\r\n                    [name]=\"this.activeSortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'\"\r\n                    type=\"sm\"\r\n                  ></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().group && this.hasGroupableCols) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Le clic doit atteindre le d\u00E9clencheur de l'overlay : pas de stopPropagation. -->\r\n          <ta-button\r\n            [type]=\"this.activeGroup ? 'secondary' : 'tertiary'\"\r\n            icon=\"workspaces\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activeGroupLabel ? (this.activeGroupLabel | translate) : ('grid.control.group' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.group' | translate }}</div>\r\n\r\n            <div\r\n              class=\"preset-menu__item c-pointer\"\r\n              [class.is-active]=\"!this.activeGroup\"\r\n              (click)=\"this.setGroup(null)\"\r\n            >\r\n              <span class=\"preset-menu__item-label\">{{ 'grid.control.groupNone' | translate }}</span>\r\n              @if (!this.activeGroup) {\r\n                <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n              }\r\n            </div>\r\n\r\n            @for (col of this.groupableCols; track col.key) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.activeGroup === col.key\"\r\n                (click)=\"this.setGroup(col.key)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ col.label | translate }}</span>\r\n                @if (this.activeGroup === col.key) {\r\n                  <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().switchView) {\r\n      <div class=\"grid-control__switch\" role=\"group\">\r\n        <div class=\"grid-control__segment\" [class.is-active]=\"this.displayType() === 'grid'\">\r\n          <ta-button type=\"tertiary\" icon=\"view_list\" size=\"small\" (action)=\"this.switchView('grid')\">\r\n            <span class=\"grid-control__label\">{{ 'grid.control.table' | translate }}</span>\r\n          </ta-button>\r\n        </div>\r\n        <div class=\"grid-control__segment\" [class.is-active]=\"this.displayType() === 'card'\">\r\n          <ta-button type=\"tertiary\" icon=\"grid_view\" size=\"small\" (action)=\"this.switchView('card')\">\r\n            <span class=\"grid-control__label\">{{ 'grid.control.card' | translate }}</span>\r\n          </ta-button>\r\n        </div>\r\n      </div>\r\n    }\r\n  </div>\r\n}\r\n\r\n@if (this.isFiltersOpen()) {\r\n  <ta-grid-filters-panel [gridId]=\"this.gridId()\" (closeEvent)=\"this.isFiltersOpen.set(false)\"></ta-grid-filters-panel>\r\n}\r\n", styles: [".grid-control{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.grid-control__label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);font-weight:var(--ta-font-weight-medium)}.grid-control__count{flex-wrap:nowrap;align-items:center;display:flex;justify-content:center;margin:auto;font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);min-width:var(--ta-space-md);height:var(--ta-space-md);padding:0 var(--ta-space-xs);border-radius:var(--ta-radius-full);background:var(--ta-surface-brand-primary);color:var(--ta-text-invert-primary);font-weight:var(--ta-font-weight-bold);line-height:1}.grid-control__switch{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-xs);border-radius:var(--ta-radius-full);background:var(--ta-surface-secondary)}.grid-control__segment{border-radius:var(--ta-radius-full)}.grid-control__segment.is-active{background:var(--ta-surface-primary);box-shadow:var(--ta-shadow-black-sm)}.grid-control--compact .grid-control__label{display:none}@media screen and (max-width: 767px){.grid-control__label{display:none}}.preset-menu{display:flex;flex-direction:column;min-width:220px;padding:var(--ta-space-xs)}.preset-menu__title{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:var(--ta-space-xs) var(--ta-space-sm);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold)}.preset-menu__item{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);gap:var(--ta-space-md);padding:var(--ta-space-sm) var(--ta-space-sm);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary)}.preset-menu__item:hover{background:var(--ta-surface-hover-primary)}.preset-menu__item.is-active{color:var(--ta-text-brand-primary);font-weight:var(--ta-font-weight-bold)}.preset-menu__item.is-active ta-font-icon{color:var(--ta-icon-brand-primary)}.preset-menu__item-label{display:flex;flex:1 1 100%}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: TaOverlayPanelComponent, selector: "ta-overlay-panel", inputs: ["panelConfig", "position"], outputs: ["closed"] }, { kind: "component", type: TaGridFiltersPanel, selector: "ta-grid-filters-panel", outputs: ["closeEvent"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-control', standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, TaOverlayPanelComponent, TaGridFiltersPanel, TranslatePipe], template: "@if (this.isReady$ | async) {\r\n  <div class=\"grid-control\" [class.grid-control--compact]=\"this.compact()\">\r\n    @if (this.show().filters) {\r\n      <ta-button\r\n        [type]=\"this.activeFiltersCount > 0 ? 'secondary' : 'tertiary'\"\r\n        icon=\"filter_alt\"\r\n        (action)=\"this.openFilters()\"\r\n      >\r\n        <span class=\"grid-control__label\">{{ 'grid.control.filters' | translate }}</span>\r\n        @if (this.activeFiltersCount > 0) {\r\n          <span class=\"grid-control__count\">{{ this.activeFiltersCount }}</span>\r\n        }\r\n      </ta-button>\r\n    }\r\n\r\n    @if (this.show().preset && this.hasPresets) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Pas de stopPropagation : le clic doit atteindre l'overlay. -->\r\n          <ta-button\r\n            [type]=\"this.activePresetName ? 'secondary' : 'tertiary'\"\r\n            icon=\"tune\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activePresetName ?? ('grid.control.presets' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.presets' | translate }}</div>\r\n            @for (preset of this.grid.filters?.preset; track preset.name) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.isPresetActive(preset)\"\r\n                (click)=\"this.setPreset(preset)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ preset.name }}</span>\r\n                @if (this.isPresetActive(preset)) {\r\n                  <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().sort && this.hasSortableCols) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Le clic doit atteindre le d\u00E9clencheur de l'overlay : pas de stopPropagation. -->\r\n          <ta-button\r\n            [type]=\"this.activeSort ? 'secondary' : 'tertiary'\"\r\n            [icon]=\"this.activeSort && this.activeSortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activeSortLabel ? (this.activeSortLabel | translate) : ('grid.control.sort' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.sort' | translate }}</div>\r\n\r\n            <div class=\"preset-menu__item c-pointer\" [class.is-active]=\"!this.activeSort\" (click)=\"this.setSort(null)\">\r\n              <span class=\"preset-menu__item-label\">{{ 'grid.control.sortNone' | translate }}</span>\r\n              @if (!this.activeSort) {\r\n                <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n              }\r\n            </div>\r\n\r\n            @for (col of this.sortableCols; track col.key) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.activeSort === col.key\"\r\n                (click)=\"this.setSort(col.key)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ col.label | translate }}</span>\r\n                @if (this.activeSort === col.key) {\r\n                  <ta-font-icon\r\n                    [name]=\"this.activeSortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'\"\r\n                    type=\"sm\"\r\n                  ></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().group && this.hasGroupableCols) {\r\n      <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\r\n        <ng-template #panelTrigger>\r\n          <!-- Le clic doit atteindre le d\u00E9clencheur de l'overlay : pas de stopPropagation. -->\r\n          <ta-button\r\n            [type]=\"this.activeGroup ? 'secondary' : 'tertiary'\"\r\n            icon=\"workspaces\"\r\n            [stopPropagationActivation]=\"false\"\r\n          >\r\n            <span class=\"grid-control__label\">\r\n              {{ this.activeGroupLabel ? (this.activeGroupLabel | translate) : ('grid.control.group' | translate) }}\r\n            </span>\r\n          </ta-button>\r\n        </ng-template>\r\n\r\n        <ng-template #panelContent>\r\n          <div class=\"preset-menu\">\r\n            <div class=\"preset-menu__title\">{{ 'grid.control.group' | translate }}</div>\r\n\r\n            <div\r\n              class=\"preset-menu__item c-pointer\"\r\n              [class.is-active]=\"!this.activeGroup\"\r\n              (click)=\"this.setGroup(null)\"\r\n            >\r\n              <span class=\"preset-menu__item-label\">{{ 'grid.control.groupNone' | translate }}</span>\r\n              @if (!this.activeGroup) {\r\n                <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n              }\r\n            </div>\r\n\r\n            @for (col of this.groupableCols; track col.key) {\r\n              <div\r\n                class=\"preset-menu__item c-pointer\"\r\n                [class.is-active]=\"this.activeGroup === col.key\"\r\n                (click)=\"this.setGroup(col.key)\"\r\n              >\r\n                <span class=\"preset-menu__item-label\">{{ col.label | translate }}</span>\r\n                @if (this.activeGroup === col.key) {\r\n                  <ta-font-icon name=\"check\" type=\"sm\"></ta-font-icon>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ta-overlay-panel>\r\n    }\r\n\r\n    @if (this.show().switchView) {\r\n      <div class=\"grid-control__switch\" role=\"group\">\r\n        <div class=\"grid-control__segment\" [class.is-active]=\"this.displayType() === 'grid'\">\r\n          <ta-button type=\"tertiary\" icon=\"view_list\" size=\"small\" (action)=\"this.switchView('grid')\">\r\n            <span class=\"grid-control__label\">{{ 'grid.control.table' | translate }}</span>\r\n          </ta-button>\r\n        </div>\r\n        <div class=\"grid-control__segment\" [class.is-active]=\"this.displayType() === 'card'\">\r\n          <ta-button type=\"tertiary\" icon=\"grid_view\" size=\"small\" (action)=\"this.switchView('card')\">\r\n            <span class=\"grid-control__label\">{{ 'grid.control.card' | translate }}</span>\r\n          </ta-button>\r\n        </div>\r\n      </div>\r\n    }\r\n  </div>\r\n}\r\n\r\n@if (this.isFiltersOpen()) {\r\n  <ta-grid-filters-panel [gridId]=\"this.gridId()\" (closeEvent)=\"this.isFiltersOpen.set(false)\"></ta-grid-filters-panel>\r\n}\r\n", styles: [".grid-control{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-sm)}.grid-control__label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);font-weight:var(--ta-font-weight-medium)}.grid-control__count{flex-wrap:nowrap;align-items:center;display:flex;justify-content:center;margin:auto;font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);min-width:var(--ta-space-md);height:var(--ta-space-md);padding:0 var(--ta-space-xs);border-radius:var(--ta-radius-full);background:var(--ta-surface-brand-primary);color:var(--ta-text-invert-primary);font-weight:var(--ta-font-weight-bold);line-height:1}.grid-control__switch{flex-wrap:nowrap;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-xs);border-radius:var(--ta-radius-full);background:var(--ta-surface-secondary)}.grid-control__segment{border-radius:var(--ta-radius-full)}.grid-control__segment.is-active{background:var(--ta-surface-primary);box-shadow:var(--ta-shadow-black-sm)}.grid-control--compact .grid-control__label{display:none}@media screen and (max-width: 767px){.grid-control__label{display:none}}.preset-menu{display:flex;flex-direction:column;min-width:220px;padding:var(--ta-space-xs)}.preset-menu__title{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);padding:var(--ta-space-xs) var(--ta-space-sm);color:var(--ta-text-secondary);text-transform:uppercase;letter-spacing:.06em;font-weight:var(--ta-font-weight-bold)}.preset-menu__item{flex-wrap:nowrap;align-items:center;display:flex;flex-direction:row;justify-content:space-between;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);gap:var(--ta-space-md);padding:var(--ta-space-sm) var(--ta-space-sm);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary)}.preset-menu__item:hover{background:var(--ta-surface-hover-primary)}.preset-menu__item.is-active{color:var(--ta-text-brand-primary);font-weight:var(--ta-font-weight-bold)}.preset-menu__item.is-active ta-font-icon{color:var(--ta-icon-brand-primary)}.preset-menu__item-label{display:flex;flex:1 1 100%}\n"] }]
        }] });

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

/** Nombre de résultats de la liste, affiché au-dessus des résultats. */
class TaGridCountComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        /** Clé de traduction pluralisée du décompte (résultats par défaut). */
        this.label = input('grid.tag.results');
    }
    get total() {
        return this.grid?.totalItems() ?? 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridCountComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridCountComponent, isStandalone: true, selector: "ta-grid-count", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\n  <span class=\"grid-count\">\n    {{ this.label() | pluralTranslate: this.total | translate: { nb: this.total } }}\n  </span>\n}\n", styles: [".grid-count{font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:var(--ta-font-weight-bold);color:var(--ta-text-primary)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridCountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-count', standalone: true, imports: [AsyncPipe, PluralTranslatePipe, TranslatePipe], template: "@if (this.isReady$ | async) {\n  <span class=\"grid-count\">\n    {{ this.label() | pluralTranslate: this.total | translate: { nb: this.total } }}\n  </span>\n}\n", styles: [".grid-count{font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:var(--ta-font-weight-bold);color:var(--ta-text-primary)}\n"] }]
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

export { ParameterType, TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridCountComponent, TaGridFiltersPanel, TaGridFormComponent, TaGridHighlightFiltersComponent, TaGridSearchComponent, TaGridTagsComponent };
//# sourceMappingURL=ta-features.mjs.map
