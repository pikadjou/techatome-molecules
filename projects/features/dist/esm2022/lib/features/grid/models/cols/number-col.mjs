import { InputNumber, InputPanel } from '@ta/form-model';
import { BaseCol } from './base-col';
export class NumberCol extends BaseCol {
    getInputForm() {
        return new InputPanel({
            key: 'number-panel',
            contentClass: 'row g-0',
            children: [
                new InputNumber({
                    key: this.key(),
                    label: this.inputLabel(),
                    value: this.filterValues()[0],
                }),
            ],
        });
    }
    formatInputForm(data) {
        const value = data[this.key()];
        if (!value) {
            return null;
        }
        return {
            field: this.key(),
            type: '=',
            value: value,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9tb2RlbHMvY29scy9udW1iZXItY29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxNQUFNLE9BQU8sU0FBVSxTQUFRLE9BQWU7SUFDNUIsWUFBWTtRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixJQUFJLFdBQVcsQ0FBQztvQkFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlCLENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxlQUFlLENBQUMsSUFBUztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pCLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0UGFuZWwgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEJhc2VDb2wgfSBmcm9tICcuL2Jhc2UtY29sJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb2wgZXh0ZW5kcyBCYXNlQ29sPG51bWJlcj4ge1xyXG4gIHB1YmxpYyBvdmVycmlkZSBnZXRJbnB1dEZvcm0oKSB7XHJcbiAgICByZXR1cm4gbmV3IElucHV0UGFuZWwoe1xyXG4gICAgICBrZXk6ICdudW1iZXItcGFuZWwnLFxyXG4gICAgICBjb250ZW50Q2xhc3M6ICdyb3cgZy0wJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBuZXcgSW5wdXROdW1iZXIoe1xyXG4gICAgICAgICAga2V5OiB0aGlzLmtleSgpLFxyXG4gICAgICAgICAgbGFiZWw6IHRoaXMuaW5wdXRMYWJlbCgpLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVzKClbMF0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvdmVycmlkZSBmb3JtYXRJbnB1dEZvcm0oZGF0YTogYW55KTogRmlsdGVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFbdGhpcy5rZXkoKV07XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWVsZDogdGhpcy5rZXkoKSxcclxuICAgICAgdHlwZTogJz0nLFxyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=