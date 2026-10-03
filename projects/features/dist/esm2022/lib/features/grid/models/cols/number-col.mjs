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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9tb2RlbHMvY29scy9udW1iZXItY29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxNQUFNLE9BQU8sU0FBVSxTQUFRLE9BQWU7SUFDNUIsWUFBWTtRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixJQUFJLFdBQVcsQ0FBQztvQkFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlCLENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxlQUFlLENBQUMsSUFBUztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pCLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0UGFuZWwgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5cbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEJhc2VDb2wgfSBmcm9tICcuL2Jhc2UtY29sJztcblxuZXhwb3J0IGNsYXNzIE51bWJlckNvbCBleHRlbmRzIEJhc2VDb2w8bnVtYmVyPiB7XG4gIHB1YmxpYyBvdmVycmlkZSBnZXRJbnB1dEZvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgIGtleTogJ251bWJlci1wYW5lbCcsXG4gICAgICBjb250ZW50Q2xhc3M6ICdyb3cgZy0wJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIG5ldyBJbnB1dE51bWJlcih7XG4gICAgICAgICAga2V5OiB0aGlzLmtleSgpLFxuICAgICAgICAgIGxhYmVsOiB0aGlzLmlucHV0TGFiZWwoKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZXMoKVswXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGZvcm1hdElucHV0Rm9ybShkYXRhOiBhbnkpOiBGaWx0ZXIgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFbdGhpcy5rZXkoKV07XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6IHRoaXMua2V5KCksXG4gICAgICB0eXBlOiAnPScsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgfVxufVxuIl19