import { Component } from '@angular/core';
import { UserLogoComponent } from '@ta/ui';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export class InputImageComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value?.map(value => value.url);
    }
    get userInfo() {
        return this.selection?.map(selection => ({
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
            args: [{ selector: 'ta-input-image', standalone: true, imports: [UserLogoComponent], template: "@if (this.userInfo) {\n  <ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2ltYWdlL2lucHV0LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZS9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUFxQztJQUM1RSxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzsrR0FYVSxtQkFBbUI7bUdBQW5CLG1CQUFtQixpR0NkaEMsa0dBR0EsMEREU1ksaUJBQWlCOzs0RkFFaEIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0SW1hZ2VzIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgVXNlckxvZ29Db21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1pbnB1dC1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWltYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtVc2VyTG9nb0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRJbWFnZXM+IHtcbiAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZT8ubWFwKHZhbHVlID0+IHZhbHVlLnVybCk7XG4gIH1cblxuICBnZXQgdXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uPy5tYXAoc2VsZWN0aW9uID0+ICh7XG4gICAgICBwaWN0dXJlOiBzZWxlY3Rpb24sXG4gICAgICBmaXJzdG5hbWU6ICcnLFxuICAgICAgbGFzdG5hbWU6ICcnLFxuICAgIH0pKVswXTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnVzZXJJbmZvKSB7XG4gIDx0YS11c2VyLWxvZ28gW3VzZXJdPVwidGhpcy51c2VySW5mb1wiIHNpemU9XCJ4bFwiPjwvdGEtdXNlci1sb2dvPlxufVxuIl19