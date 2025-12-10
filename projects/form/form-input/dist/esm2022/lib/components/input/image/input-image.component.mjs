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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputImageComponent, isStandalone: true, selector: "ta-input-image", usesInheritance: true, ngImport: i0, template: "@if (this.userInfo) {\n<ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n", styles: [""], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputImageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-image", standalone: true, imports: [UserLogoComponent], template: "@if (this.userInfo) {\n<ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZS9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUFxQztJQUM1RSxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7K0dBWFUsbUJBQW1CO21HQUFuQixtQkFBbUIsaUdDZGhDLGdHQUdBLDBERFNZLGlCQUFpQjs7NEZBRWhCLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxnQkFBZ0IsY0FHZCxJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IElucHV0SW1hZ2VzIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyTG9nb0NvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtaW5wdXQtaW1hZ2VcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5wdXQtaW1hZ2UuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtVc2VyTG9nb0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRJbWFnZXM+IHtcbiAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZT8ubWFwKCh2YWx1ZSkgPT4gdmFsdWUudXJsKTtcbiAgfVxuXG4gIGdldCB1c2VySW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24/Lm1hcCgoc2VsZWN0aW9uKSA9PiAoe1xuICAgICAgcGljdHVyZTogc2VsZWN0aW9uLFxuICAgICAgZmlyc3RuYW1lOiBcIlwiLFxuICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgfSkpWzBdO1xuICB9XG59XG4iLCJAaWYgKHRoaXMudXNlckluZm8pIHtcbjx0YS11c2VyLWxvZ28gW3VzZXJdPVwidGhpcy51c2VySW5mb1wiIHNpemU9XCJ4bFwiPjwvdGEtdXNlci1sb2dvPlxufVxuIl19