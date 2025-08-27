import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserLogoComponent } from '@ta/ui';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export class InputImageComponent extends CamAbstractInputComponent {
    get selection() {
        return this.input.value;
    }
    get userInfo() {
        return this.selection.map(selection => ({
            profilePictureUrl: selection,
            naming: null,
        }))[0];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImageComponent, isStandalone: true, selector: "ta-input-image", usesInheritance: true, ngImport: i0, template: "@if (this.userInfo) {\n  <ta-user-logo [userInfo]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n", styles: [""], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-image', standalone: true, imports: [NgIf, UserLogoComponent], template: "@if (this.userInfo) {\n  <ta-user-logo [userInfo]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZS9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBU3JFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx5QkFBc0M7SUFDN0UsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzsrR0FWVSxtQkFBbUI7bUdBQW5CLG1CQUFtQixpR0NmaEMsc0dBR0EsMEREVWtCLGlCQUFpQjs7NEZBRXRCLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDQSxnQkFBZ0IsY0FHWixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEltYWdlcyB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IFVzZXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcblxuaW1wb3J0IHsgQ2FtQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1pbnB1dC1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWltYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBVc2VyTG9nb0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBDYW1BYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0SW1hZ2VzPiB7XG4gIGdldCBzZWxlY3Rpb24oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgZ2V0IHVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAoc2VsZWN0aW9uID0+ICh7XG4gICAgICBwcm9maWxlUGljdHVyZVVybDogc2VsZWN0aW9uLFxuICAgICAgbmFtaW5nOiBudWxsLFxuICAgIH0pKVswXTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnVzZXJJbmZvKSB7XG4gIDx0YS11c2VyLWxvZ28gW3VzZXJJbmZvXT1cInRoaXMudXNlckluZm9cIiBzaXplPVwieGxcIj48L3RhLXVzZXItbG9nbz5cbn1cbiJdfQ==