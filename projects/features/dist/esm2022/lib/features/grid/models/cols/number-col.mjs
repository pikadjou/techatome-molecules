import { InputNumber, InputPanel } from '@ta/form-model';
import { BaseCol } from './base-col';
export class NumberCol extends BaseCol {
    getInputForm() {
        return new InputPanel({
            key: 'number-panel',
            contentClass: 'row g-0',
            children: [
                new InputNumber({
                    key: this.key,
                    label: this.inputLabel,
                    value: this.filterValues[0],
                }),
            ],
        });
    }
    formatInputForm(data) {
        const value = data[this.key];
        if (!value) {
            return null;
        }
        return {
            field: this.key,
            type: '=',
            value: value,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9tb2RlbHMvY29scy9udW1iZXItY29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxNQUFNLE9BQU8sU0FBVSxTQUFRLE9BQWU7SUFDNUIsWUFBWTtRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixJQUFJLFdBQVcsQ0FBQztvQkFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxlQUFlLENBQUMsSUFBUztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDZixJQUFJLEVBQUUsR0FBRztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dFBhbmVsIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBCYXNlQ29sIH0gZnJvbSAnLi9iYXNlLWNvbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29sIGV4dGVuZHMgQmFzZUNvbDxudW1iZXI+IHtcclxuICBwdWJsaWMgb3ZlcnJpZGUgZ2V0SW5wdXRGb3JtKCkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAga2V5OiAnbnVtYmVyLXBhbmVsJyxcclxuICAgICAgY29udGVudENsYXNzOiAncm93IGctMCcsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgbmV3IElucHV0TnVtYmVyKHtcclxuICAgICAgICAgIGtleTogdGhpcy5rZXksXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVzWzBdLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3ZlcnJpZGUgZm9ybWF0SW5wdXRGb3JtKGRhdGE6IGFueSk6IEZpbHRlciB8IG51bGwge1xyXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW3RoaXMua2V5XTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpZWxkOiB0aGlzLmtleSxcclxuICAgICAgdHlwZTogJz0nLFxyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=