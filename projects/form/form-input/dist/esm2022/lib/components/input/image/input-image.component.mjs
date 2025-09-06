import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserLogoComponent } from '@ta/ui';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export class InputImageComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value;
    }
    get userInfo() {
        return this.selection.map(selection => ({
            picture: selection,
            firstname: '',
            lastname: '',
        }))[0];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImageComponent, isStandalone: true, selector: "ta-input-image", usesInheritance: true, ngImport: i0, template: "@if (this.userInfo) {\n  <ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n", styles: [""], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-image', standalone: true, imports: [NgIf, UserLogoComponent], template: "@if (this.userInfo) {\n  <ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZS9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBU3BFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBcUM7SUFDNUUsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzsrR0FYVSxtQkFBbUI7bUdBQW5CLG1CQUFtQixpR0NmaEMsa0dBR0EsMEREVWtCLGlCQUFpQjs7NEZBRXRCLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxnQkFBZ0IsY0FHZCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEltYWdlcyB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IFVzZXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1pbWFnZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgVXNlckxvZ29Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEltYWdlQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0SW1hZ2VzPiB7XG4gIGdldCBzZWxlY3Rpb24oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgZ2V0IHVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAoc2VsZWN0aW9uID0+ICh7XG4gICAgICBwaWN0dXJlOiBzZWxlY3Rpb24sXG4gICAgICBmaXJzdG5hbWU6ICcnLFxuICAgICAgbGFzdG5hbWU6ICcnLFxuICAgIH0pKVswXTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnVzZXJJbmZvKSB7XG4gIDx0YS11c2VyLWxvZ28gW3VzZXJdPVwidGhpcy51c2VySW5mb1wiIHNpemU9XCJ4bFwiPjwvdGEtdXNlci1sb2dvPlxufVxuIl19