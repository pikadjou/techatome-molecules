import { NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { TA_HARNESS_CASES } from "./harness-case";
import * as i0 from "@angular/core";
/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 *
 * Un cas portant `component` est résolu de façon synchrone, comme auparavant ;
 * un cas portant `load` est chargé à la demande.
 */
export class TaHarnessComponent {
    constructor() {
        this._cases = inject(TA_HARNESS_CASES);
        this._caseId = toSignal(inject(ActivatedRoute).paramMap.pipe(map((params) => params.get("caseId") ?? "")), { initialValue: "" });
        this._case = computed(() => this._cases.find((c) => c.id === this._caseId()) ?? null);
        /**
         * Résultat de la résolution paresseuse, mémorisé avec l'identifiant qui l'a
         * produit. `component: null` signale un échec définitif pour ce cas.
         */
        this._lazy = signal(null);
        this.component = computed(() => {
            const found = this._case();
            if (!found) {
                return null;
            }
            if (found.component) {
                return found.component;
            }
            const lazy = this._lazy();
            return lazy?.id === found.id ? lazy.component : null;
        });
        this.notFound = computed(() => this._case() === null);
        /**
         * Le cas existe mais son composant ne viendra jamais : `load()` a échoué, ou le
         * cas est mal formé (ni `component` ni `load`). Sans cet état, la page resterait
         * figée sur « Chargement… » indéfiniment.
         */
        this.loadFailed = computed(() => {
            const found = this._case();
            const lazy = this._lazy();
            return !!found && !found.component && lazy?.id === found.id && lazy.component === null;
        });
        effect(() => {
            const found = this._case();
            if (!found || found.component) {
                return;
            }
            const id = found.id;
            if (!found.load) {
                // Cas mal formé : ni composant direct, ni chargeur.
                this._lazy.set({ id, component: null });
                return;
            }
            void found
                .load()
                .then((component) => this._lazy.set({ id, component }))
                .catch((error) => {
                console.error(`[ta-harness] échec du chargement du cas "${id}"`, error);
                this._lazy.set({ id, component: null });
            });
        }, { allowSignalWrites: true });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaHarnessComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaHarnessComponent, isStandalone: true, selector: "ta-harness", ngImport: i0, template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else if (this.notFound()) {
      <div data-testid="harness-not-found">Case introuvable</div>
    } @else if (this.loadFailed()) {
      <div data-testid="harness-load-error">Échec du chargement du cas</div>
    } @else {
      <div data-testid="harness-loading">Chargement…</div>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaHarnessComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ta-harness",
                    standalone: true,
                    imports: [NgComponentOutlet],
                    template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else if (this.notFound()) {
      <div data-testid="harness-not-found">Case introuvable</div>
    } @else if (this.loadFailed()) {
      <div data-testid="harness-load-error">Échec du chargement du cas</div>
    } @else {
      <div data-testid="harness-loading">Chargement…</div>
    }
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFybmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hhcm5lc3MvaGFybmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbEQ7Ozs7Ozs7R0FPRztBQW9CSCxNQUFNLE9BQU8sa0JBQWtCO0lBeUM3QjtRQXhDUSxXQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFbEMsWUFBTyxHQUFHLFFBQVEsQ0FDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ2pGLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUNyQixDQUFDO1FBRU0sVUFBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMs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TUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbXBvbmVudE91dGxldCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgY29tcHV0ZWQsXHJcbiAgZWZmZWN0LFxyXG4gIGluamVjdCxcclxuICBzaWduYWwsXHJcbiAgVHlwZSxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyB0b1NpZ25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBUQV9IQVJORVNTX0NBU0VTIH0gZnJvbSBcIi4vaGFybmVzcy1jYXNlXCI7XHJcblxyXG4vKipcclxuICogTW9udGUgZHluYW1pcXVlbWVudCB1biBjb21wb3NhbnQgQHRhLyogc2Vsb24gbGUgcGFyYW3DqHRyZSBkZSByb3V0ZSBgY2FzZUlkYCxcclxuICogZW4gbGUgY2hlcmNoYW50IGRhbnMgbGVzIGNhcyBmb3VybmlzIHZpYSBgcHJvdmlkZUhhcm5lc3NDYXNlc2AuXHJcbiAqIFLDqXV0aWxpc2FibGUgcGFyIG4naW1wb3J0ZSBxdWVsbGUgYXBwIGNvbnNvbW1hdHJpY2UgZGVzIGxpYnJhaXJpZXMgQHRhLyouXHJcbiAqXHJcbiAqIFVuIGNhcyBwb3J0YW50IGBjb21wb25lbnRgIGVzdCByw6lzb2x1IGRlIGZhw6dvbiBzeW5jaHJvbmUsIGNvbW1lIGF1cGFyYXZhbnQgO1xyXG4gKiB1biBjYXMgcG9ydGFudCBgbG9hZGAgZXN0IGNoYXJnw6kgw6AgbGEgZGVtYW5kZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInRhLWhhcm5lc3NcIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0NvbXBvbmVudE91dGxldF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIEBpZiAodGhpcy5jb21wb25lbnQoKTsgYXMgY21wKSB7XHJcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoYXJuZXNzLXJvb3RcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNtcFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH0gQGVsc2UgaWYgKHRoaXMubm90Rm91bmQoKSkge1xyXG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGFybmVzcy1ub3QtZm91bmRcIj5DYXNlIGludHJvdXZhYmxlPC9kaXY+XHJcbiAgICB9IEBlbHNlIGlmICh0aGlzLmxvYWRGYWlsZWQoKSkge1xyXG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGFybmVzcy1sb2FkLWVycm9yXCI+w4ljaGVjIGR1IGNoYXJnZW1lbnQgZHUgY2FzPC9kaXY+XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhhcm5lc3MtbG9hZGluZ1wiPkNoYXJnZW1lbnTigKY8L2Rpdj5cclxuICAgIH1cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFIYXJuZXNzQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9jYXNlcyA9IGluamVjdChUQV9IQVJORVNTX0NBU0VTKTtcclxuXHJcbiAgcHJpdmF0ZSBfY2FzZUlkID0gdG9TaWduYWwoXHJcbiAgICBpbmplY3QoQWN0aXZhdGVkUm91dGUpLnBhcmFtTWFwLnBpcGUobWFwKChwYXJhbXMpID0+IHBhcmFtcy5nZXQoXCJjYXNlSWRcIikgPz8gXCJcIikpLFxyXG4gICAgeyBpbml0aWFsVmFsdWU6IFwiXCIgfVxyXG4gICk7XHJcblxyXG4gIHByaXZhdGUgX2Nhc2UgPSBjb21wdXRlZCgoKSA9PiB0aGlzLl9jYXNlcy5maW5kKChjKSA9PiBjLmlkID09PSB0aGlzLl9jYXNlSWQoKSkgPz8gbnVsbCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFLDqXN1bHRhdCBkZSBsYSByw6lzb2x1dGlvbiBwYXJlc3NldXNlLCBtw6ltb3Jpc8OpIGF2ZWMgbCdpZGVudGlmaWFudCBxdWkgbCdhXHJcbiAgICogcHJvZHVpdC4gYGNvbXBvbmVudDogbnVsbGAgc2lnbmFsZSB1biDDqWNoZWMgZMOpZmluaXRpZiBwb3VyIGNlIGNhcy5cclxuICAgKi9cclxuICBwcml2YXRlIF9sYXp5ID0gc2lnbmFsPHsgaWQ6IHN0cmluZzsgY29tcG9uZW50OiBUeXBlPHVua25vd24+IHwgbnVsbCB9IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHJlYWRvbmx5IGNvbXBvbmVudCA9IGNvbXB1dGVkPFR5cGU8dW5rbm93bj4gfCBudWxsPigoKSA9PiB7XHJcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuX2Nhc2UoKTtcclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZm91bmQuY29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBmb3VuZC5jb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXp5ID0gdGhpcy5fbGF6eSgpO1xyXG4gICAgcmV0dXJuIGxhenk/LmlkID09PSBmb3VuZC5pZCA/IGxhenkuY29tcG9uZW50IDogbnVsbDtcclxuICB9KTtcclxuXHJcbiAgcmVhZG9ubHkgbm90Rm91bmQgPSBjb21wdXRlZCgoKSA9PiB0aGlzLl9jYXNlKCkgPT09IG51bGwpO1xyXG5cclxuICAvKipcclxuICAgKiBMZSBjYXMgZXhpc3RlIG1haXMgc29uIGNvbXBvc2FudCBuZSB2aWVuZHJhIGphbWFpcyA6IGBsb2FkKClgIGEgw6ljaG91w6ksIG91IGxlXHJcbiAgICogY2FzIGVzdCBtYWwgZm9ybcOpIChuaSBgY29tcG9uZW50YCBuaSBgbG9hZGApLiBTYW5zIGNldCDDqXRhdCwgbGEgcGFnZSByZXN0ZXJhaXRcclxuICAgKiBmaWfDqWUgc3VyIMKrIENoYXJnZW1lbnTigKYgwrsgaW5kw6lmaW5pbWVudC5cclxuICAgKi9cclxuICByZWFkb25seSBsb2FkRmFpbGVkID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLl9jYXNlKCk7XHJcbiAgICBjb25zdCBsYXp5ID0gdGhpcy5fbGF6eSgpO1xyXG4gICAgcmV0dXJuICEhZm91bmQgJiYgIWZvdW5kLmNvbXBvbmVudCAmJiBsYXp5Py5pZCA9PT0gZm91bmQuaWQgJiYgbGF6eS5jb21wb25lbnQgPT09IG51bGw7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgZWZmZWN0KFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm91bmQgPSB0aGlzLl9jYXNlKCk7XHJcbiAgICAgICAgaWYgKCFmb3VuZCB8fCBmb3VuZC5jb21wb25lbnQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSBmb3VuZC5pZDtcclxuXHJcbiAgICAgICAgaWYgKCFmb3VuZC5sb2FkKSB7XHJcbiAgICAgICAgICAvLyBDYXMgbWFsIGZvcm3DqSA6IG5pIGNvbXBvc2FudCBkaXJlY3QsIG5pIGNoYXJnZXVyLlxyXG4gICAgICAgICAgdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50OiBudWxsIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBmb3VuZFxyXG4gICAgICAgICAgLmxvYWQoKVxyXG4gICAgICAgICAgLnRoZW4oKGNvbXBvbmVudCkgPT4gdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50IH0pKVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbdGEtaGFybmVzc10gw6ljaGVjIGR1IGNoYXJnZW1lbnQgZHUgY2FzIFwiJHtpZH1cImAsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50OiBudWxsIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgYWxsb3dTaWduYWxXcml0ZXM6IHRydWUgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19