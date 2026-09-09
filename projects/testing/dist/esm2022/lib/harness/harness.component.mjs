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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFybmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hhcm5lc3MvaGFybmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbEQ7Ozs7Ozs7R0FPRztBQW9CSCxNQUFNLE9BQU8sa0JBQWtCO0lBeUM3QjtRQXhDUSxXQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFbEMsWUFBTyxHQUFHLFFBQVEsQ0FDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ2pGLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUNyQixDQUFDO1FBRU0sVUFBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMs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TUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbXBvbmVudE91dGxldCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIGNvbXB1dGVkLFxuICBlZmZlY3QsXG4gIGluamVjdCxcbiAgc2lnbmFsLFxuICBUeXBlLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdG9TaWduYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3BcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUQV9IQVJORVNTX0NBU0VTIH0gZnJvbSBcIi4vaGFybmVzcy1jYXNlXCI7XG5cbi8qKlxuICogTW9udGUgZHluYW1pcXVlbWVudCB1biBjb21wb3NhbnQgQHRhLyogc2Vsb24gbGUgcGFyYW3DqHRyZSBkZSByb3V0ZSBgY2FzZUlkYCxcbiAqIGVuIGxlIGNoZXJjaGFudCBkYW5zIGxlcyBjYXMgZm91cm5pcyB2aWEgYHByb3ZpZGVIYXJuZXNzQ2FzZXNgLlxuICogUsOpdXRpbGlzYWJsZSBwYXIgbidpbXBvcnRlIHF1ZWxsZSBhcHAgY29uc29tbWF0cmljZSBkZXMgbGlicmFpcmllcyBAdGEvKi5cbiAqXG4gKiBVbiBjYXMgcG9ydGFudCBgY29tcG9uZW50YCBlc3QgcsOpc29sdSBkZSBmYcOnb24gc3luY2hyb25lLCBjb21tZSBhdXBhcmF2YW50IDtcbiAqIHVuIGNhcyBwb3J0YW50IGBsb2FkYCBlc3QgY2hhcmfDqSDDoCBsYSBkZW1hbmRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtaGFybmVzc1wiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDb21wb25lbnRPdXRsZXRdLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAodGhpcy5jb21wb25lbnQoKTsgYXMgY21wKSB7XG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGFybmVzcy1yb290XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY21wXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICB9IEBlbHNlIGlmICh0aGlzLm5vdEZvdW5kKCkpIHtcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoYXJuZXNzLW5vdC1mb3VuZFwiPkNhc2UgaW50cm91dmFibGU8L2Rpdj5cbiAgICB9IEBlbHNlIGlmICh0aGlzLmxvYWRGYWlsZWQoKSkge1xuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhhcm5lc3MtbG9hZC1lcnJvclwiPsOJY2hlYyBkdSBjaGFyZ2VtZW50IGR1IGNhczwvZGl2PlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhhcm5lc3MtbG9hZGluZ1wiPkNoYXJnZW1lbnTigKY8L2Rpdj5cbiAgICB9XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYUhhcm5lc3NDb21wb25lbnQge1xuICBwcml2YXRlIF9jYXNlcyA9IGluamVjdChUQV9IQVJORVNTX0NBU0VTKTtcblxuICBwcml2YXRlIF9jYXNlSWQgPSB0b1NpZ25hbChcbiAgICBpbmplY3QoQWN0aXZhdGVkUm91dGUpLnBhcmFtTWFwLnBpcGUobWFwKChwYXJhbXMpID0+IHBhcmFtcy5nZXQoXCJjYXNlSWRcIikgPz8gXCJcIikpLFxuICAgIHsgaW5pdGlhbFZhbHVlOiBcIlwiIH1cbiAgKTtcblxuICBwcml2YXRlIF9jYXNlID0gY29tcHV0ZWQoKCkgPT4gdGhpcy5fY2FzZXMuZmluZCgoYykgPT4gYy5pZCA9PT0gdGhpcy5fY2FzZUlkKCkpID8/IG51bGwpO1xuXG4gIC8qKlxuICAgKiBSw6lzdWx0YXQgZGUgbGEgcsOpc29sdXRpb24gcGFyZXNzZXVzZSwgbcOpbW9yaXPDqSBhdmVjIGwnaWRlbnRpZmlhbnQgcXVpIGwnYVxuICAgKiBwcm9kdWl0LiBgY29tcG9uZW50OiBudWxsYCBzaWduYWxlIHVuIMOpY2hlYyBkw6lmaW5pdGlmIHBvdXIgY2UgY2FzLlxuICAgKi9cbiAgcHJpdmF0ZSBfbGF6eSA9IHNpZ25hbDx7IGlkOiBzdHJpbmc7IGNvbXBvbmVudDogVHlwZTx1bmtub3duPiB8IG51bGwgfSB8IG51bGw+KG51bGwpO1xuXG4gIHJlYWRvbmx5IGNvbXBvbmVudCA9IGNvbXB1dGVkPFR5cGU8dW5rbm93bj4gfCBudWxsPigoKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzLl9jYXNlKCk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChmb3VuZC5jb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBmb3VuZC5jb21wb25lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxhenkgPSB0aGlzLl9sYXp5KCk7XG4gICAgcmV0dXJuIGxhenk/LmlkID09PSBmb3VuZC5pZCA/IGxhenkuY29tcG9uZW50IDogbnVsbDtcbiAgfSk7XG5cbiAgcmVhZG9ubHkgbm90Rm91bmQgPSBjb21wdXRlZCgoKSA9PiB0aGlzLl9jYXNlKCkgPT09IG51bGwpO1xuXG4gIC8qKlxuICAgKiBMZSBjYXMgZXhpc3RlIG1haXMgc29uIGNvbXBvc2FudCBuZSB2aWVuZHJhIGphbWFpcyA6IGBsb2FkKClgIGEgw6ljaG91w6ksIG91IGxlXG4gICAqIGNhcyBlc3QgbWFsIGZvcm3DqSAobmkgYGNvbXBvbmVudGAgbmkgYGxvYWRgKS4gU2FucyBjZXQgw6l0YXQsIGxhIHBhZ2UgcmVzdGVyYWl0XG4gICAqIGZpZ8OpZSBzdXIgwqsgQ2hhcmdlbWVudOKApiDCuyBpbmTDqWZpbmltZW50LlxuICAgKi9cbiAgcmVhZG9ubHkgbG9hZEZhaWxlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuX2Nhc2UoKTtcbiAgICBjb25zdCBsYXp5ID0gdGhpcy5fbGF6eSgpO1xuICAgIHJldHVybiAhIWZvdW5kICYmICFmb3VuZC5jb21wb25lbnQgJiYgbGF6eT8uaWQgPT09IGZvdW5kLmlkICYmIGxhenkuY29tcG9uZW50ID09PSBudWxsO1xuICB9KTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBlZmZlY3QoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5fY2FzZSgpO1xuICAgICAgICBpZiAoIWZvdW5kIHx8IGZvdW5kLmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IGZvdW5kLmlkO1xuXG4gICAgICAgIGlmICghZm91bmQubG9hZCkge1xuICAgICAgICAgIC8vIENhcyBtYWwgZm9ybcOpIDogbmkgY29tcG9zYW50IGRpcmVjdCwgbmkgY2hhcmdldXIuXG4gICAgICAgICAgdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50OiBudWxsIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZvaWQgZm91bmRcbiAgICAgICAgICAubG9hZCgpXG4gICAgICAgICAgLnRoZW4oKGNvbXBvbmVudCkgPT4gdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50IH0pKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFt0YS1oYXJuZXNzXSDDqWNoZWMgZHUgY2hhcmdlbWVudCBkdSBjYXMgXCIke2lkfVwiYCwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5fbGF6eS5zZXQoeyBpZCwgY29tcG9uZW50OiBudWxsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgYWxsb3dTaWduYWxXcml0ZXM6IHRydWUgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==