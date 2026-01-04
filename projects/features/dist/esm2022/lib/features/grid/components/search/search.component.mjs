import { Component, inject, input } from '@angular/core';
import { TextBoxComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';
import { TaGridSessionService } from '../../services/grid-session.services';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridSearchComponent extends TaAbstractGridComponent {
    constructor() {
        super();
        this.outOfBox = input(false);
        this.input = new InputTextBox();
        this._session = inject(TaGridSessionService);
        this.input.createFormControl();
    }
    valueChanged(value) {
        const filters = [
            {
                field: gridSearchFieldsName,
                type: 'like',
                value: value.trim(),
            },
        ];
        if (this.outOfBox()) {
            this._session.setFilter(this.gridId(), filters);
        }
        else {
            this.grid.filters?.apply(filters);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridSearchComponent, isStandalone: true, selector: "ta-grid-search", inputs: { outOfBox: { classPropertyName: "outOfBox", publicName: "outOfBox", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-input-textbox [input]=\"this.input\" (valueChanged)=\"this.valueChanged($event)\"></ta-input-textbox>\r\n", styles: [""], dependencies: [{ kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-search', standalone: true, imports: [TextBoxComponent], template: "<ta-input-textbox [input]=\"this.input\" (valueChanged)=\"this.valueChanged($event)\"></ta-input-textbox>\r\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQTRCO0lBT3JFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFQVixhQUFRLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLGFBQVEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUk5QyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNNLFlBQVksQ0FBQyxLQUFhO1FBQy9CLE1BQU0sT0FBTyxHQUFhO1lBQ3hCO2dCQUNFLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ3BCO1NBQ0YsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQXhCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw4T0NqQmxDLCtHQUNBLDBERFlZLGdCQUFnQjs7NEZBSWYscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBJbnB1dFRleHRCb3ggfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5cbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uLy4uL21vZGVscy90eXBlcyc7XG5pbXBvcnQgeyBUYUdyaWRTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtc2Vzc2lvbi5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBncmlkU2VhcmNoRmllbGRzTmFtZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZ3JpZC1zZWFyY2gnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVGV4dEJveENvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFHcmlkU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8YW55PiB7XG4gIG91dE9mQm94ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHB1YmxpYyBpbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goKTtcblxuICBwcml2YXRlIF9zZXNzaW9uID0gaW5qZWN0KFRhR3JpZFNlc3Npb25TZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5wdXQuY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgfVxuICBwdWJsaWMgdmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IGdyaWRTZWFyY2hGaWVsZHNOYW1lLFxuICAgICAgICB0eXBlOiAnbGlrZScsXG4gICAgICAgIHZhbHVlOiB2YWx1ZS50cmltKCksXG4gICAgICB9LFxuICAgIF07XG4gICAgaWYgKHRoaXMub3V0T2ZCb3goKSkge1xuICAgICAgdGhpcy5fc2Vzc2lvbi5zZXRGaWx0ZXIodGhpcy5ncmlkSWQoKSwgZmlsdGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5maWx0ZXJzPy5hcHBseShmaWx0ZXJzKTtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC10ZXh0Ym94IFtpbnB1dF09XCJ0aGlzLmlucHV0XCIgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLnZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+PC90YS1pbnB1dC10ZXh0Ym94PlxyXG4iXX0=