import { Component } from "@angular/core";
import { UserLogoComponent } from "@ta/ui";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export class InputImageComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value?.map((value) => value.url);
    }
    get userInfo() {
        return this.selection?.map((selection) => ({
            picture: selection,
            firstname: "",
            lastname: "",
        }))[0];
    }
    get isLimitReached() {
        if (this.input.limit == null) {
            return false;
        }
        return (this.input.value?.length ?? 0) >= this.input.limit;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputImageComponent, isStandalone: true, selector: "ta-input-image", usesInheritance: true, ngImport: i0, template: "@if (this.userInfo) {\n<ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n", styles: [""], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputImageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-image", standalone: true, imports: [UserLogoComponent], template: "@if (this.userInfo) {\n<ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZS9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUFxQztJQUM1RSxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM3QixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdELENBQUM7K0dBbEJVLG1CQUFtQjttR0FBbkIsbUJBQW1CLGlHQ2RoQyxnR0FHQSwwRERTWSxpQkFBaUI7OzRGQUVoQixtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLENBQUMsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJbnB1dEltYWdlcyB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVXNlckxvZ29Db21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LWltYWdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5wdXQtaW1hZ2UuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lucHV0LWltYWdlLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVXNlckxvZ29Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEltYWdlQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0SW1hZ2VzPiB7XG4gIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU/Lm1hcCgodmFsdWUpID0+IHZhbHVlLnVybCk7XG4gIH1cblxuICBnZXQgdXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uPy5tYXAoKHNlbGVjdGlvbikgPT4gKHtcbiAgICAgIHBpY3R1cmU6IHNlbGVjdGlvbixcbiAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgIH0pKVswXTtcbiAgfVxuXG4gIGdldCBpc0xpbWl0UmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pbnB1dC5saW1pdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5pbnB1dC52YWx1ZT8ubGVuZ3RoID8/IDApID49IHRoaXMuaW5wdXQubGltaXQ7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy51c2VySW5mbykge1xuPHRhLXVzZXItbG9nbyBbdXNlcl09XCJ0aGlzLnVzZXJJbmZvXCIgc2l6ZT1cInhsXCI+PC90YS11c2VyLWxvZ28+XG59XG4iXX0=