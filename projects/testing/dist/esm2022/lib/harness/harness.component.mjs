import { NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { TA_HARNESS_CASES } from "./harness-case";
import * as i0 from "@angular/core";
/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 */
export class TaHarnessComponent {
    constructor() {
        this._cases = inject(TA_HARNESS_CASES);
        this._params = toSignal(inject(ActivatedRoute).paramMap);
        this.component = computed(() => {
            const id = this._params()?.get("caseId") ?? "";
            return this._cases.find((c) => c.id === id)?.component ?? null;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaHarnessComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaHarnessComponent, isStandalone: true, selector: "ta-harness", ngImport: i0, template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else {
      <div data-testid="harness-not-found">Case introuvable</div>
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
    } @else {
      <div data-testid="harness-not-found">Case introuvable</div>
    }
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFybmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hhcm5lc3MvaGFybmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWxEOzs7O0dBSUc7QUFnQkgsTUFBTSxPQUFPLGtCQUFrQjtJQWYvQjtRQWdCVSxXQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsWUFBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsY0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0tBQ0o7K0dBUlksa0JBQWtCO21HQUFsQixrQkFBa0Isc0VBWG5COzs7Ozs7OztHQVFULDREQVRTLGlCQUFpQjs7NEZBWWhCLGtCQUFrQjtrQkFmOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDb21wb25lbnRPdXRsZXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBjb21wdXRlZCwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRvU2lnbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVEFfSEFSTkVTU19DQVNFUyB9IGZyb20gXCIuL2hhcm5lc3MtY2FzZVwiO1xuXG4vKipcbiAqIE1vbnRlIGR5bmFtaXF1ZW1lbnQgdW4gY29tcG9zYW50IEB0YS8qIHNlbG9uIGxlIHBhcmFtw6h0cmUgZGUgcm91dGUgYGNhc2VJZGAsXG4gKiBlbiBsZSBjaGVyY2hhbnQgZGFucyBsZXMgY2FzIGZvdXJuaXMgdmlhIGBwcm92aWRlSGFybmVzc0Nhc2VzYC5cbiAqIFLDqXV0aWxpc2FibGUgcGFyIG4naW1wb3J0ZSBxdWVsbGUgYXBwIGNvbnNvbW1hdHJpY2UgZGVzIGxpYnJhaXJpZXMgQHRhLyouXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1oYXJuZXNzXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NvbXBvbmVudE91dGxldF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICh0aGlzLmNvbXBvbmVudCgpOyBhcyBjbXApIHtcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoYXJuZXNzLXJvb3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjbXBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhhcm5lc3Mtbm90LWZvdW5kXCI+Q2FzZSBpbnRyb3V2YWJsZTwvZGl2PlxuICAgIH1cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhSGFybmVzc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX2Nhc2VzID0gaW5qZWN0KFRBX0hBUk5FU1NfQ0FTRVMpO1xuICBwcml2YXRlIF9wYXJhbXMgPSB0b1NpZ25hbChpbmplY3QoQWN0aXZhdGVkUm91dGUpLnBhcmFtTWFwKTtcblxuICBjb21wb25lbnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9wYXJhbXMoKT8uZ2V0KFwiY2FzZUlkXCIpID8/IFwiXCI7XG4gICAgcmV0dXJuIHRoaXMuX2Nhc2VzLmZpbmQoKGMpID0+IGMuaWQgPT09IGlkKT8uY29tcG9uZW50ID8/IG51bGw7XG4gIH0pO1xufVxuIl19