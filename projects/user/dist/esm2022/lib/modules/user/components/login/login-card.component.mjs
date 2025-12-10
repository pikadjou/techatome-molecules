import { Component, inject } from "@angular/core";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, CardComponent, CardContentComponent } from "@ta/ui";
import { TA_AUTH_TOKEN } from "../../services/auth.service";
import * as i0 from "@angular/core";
export class LoginCardComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
    }
    login() {
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoginCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LoginCardComponent, isStandalone: true, selector: "ta-login-card", ngImport: i0, template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{\n      \"user.login\" | translate\n    }}</ta-button>\n  </ta-card-content>\n</ta-card>\n", styles: [""], dependencies: [{ kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoginCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-login-card", standalone: true, imports: [
                        CardComponent,
                        CardContentComponent,
                        ButtonComponent,
                        TranslatePipe,
                    ], template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{\n      \"user.login\" | translate\n    }}</ta-button>\n  </ta-card-content>\n</ta-card>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBYzVELE1BQU0sT0FBTyxrQkFBa0I7SUFHN0I7UUFGUSxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBRVQsS0FBSztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzsrR0FQVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix5RUNuQi9CLGdNQU9BLDBERE1JLGFBQWEsNklBQ2Isb0JBQW9CLDREQUNwQixlQUFlLHlKQUNmLGFBQWE7OzRGQUdKLGtCQUFrQjtrQkFaOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQO3dCQUNQLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7cUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIENhcmRDb21wb25lbnQsIENhcmRDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuXG5pbXBvcnQgeyBUQV9BVVRIX1RPS0VOIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbG9naW4tY2FyZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLWNhcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNhcmQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIENhcmRDb250ZW50Q29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNhcmRDb21wb25lbnQge1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChUQV9BVVRIX1RPS0VOKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKCk7XG4gIH1cbn1cbiIsIjx0YS1jYXJkIChjbGljayk9XCJ0aGlzLmxvZ2luKClcIj5cbiAgPHRhLWNhcmQtY29udGVudD5cbiAgICA8dGEtYnV0dG9uIChhY3Rpb24pPVwidGhpcy5sb2dpbigpXCI+e3tcbiAgICAgIFwidXNlci5sb2dpblwiIHwgdHJhbnNsYXRlXG4gICAgfX08L3RhLWJ1dHRvbj5cbiAgPC90YS1jYXJkLWNvbnRlbnQ+XG48L3RhLWNhcmQ+XG4iXX0=