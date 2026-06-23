import { InputBase } from './base';
export var EAddressValues;
(function (EAddressValues) {
    EAddressValues["city"] = "city";
    EAddressValues["country"] = "country";
    EAddressValues["floor"] = "floor";
    EAddressValues["latitude"] = "latitude";
    EAddressValues["longitude"] = "longitude";
    EAddressValues["number"] = "number";
    EAddressValues["placeId"] = "placeId";
    EAddressValues["street"] = "street";
    EAddressValues["zipCode"] = "zipCode";
})(EAddressValues || (EAddressValues = {}));
export class InputAddress extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'address';
        this.type = 'address';
        this.priorityCountries = options.priorityCountries ?? ['BE', 'FR', 'DE', 'NL'];
    }
    static formatAddressForm(data) {
        if (!data) {
            return null;
        }
        return {
            city: data[EAddressValues.city],
            country: data[EAddressValues.country],
            floor: data[EAddressValues.floor],
            number: data[EAddressValues.number],
            placeId: data[EAddressValues.placeId],
            street: data[EAddressValues.street],
            zipCode: data[EAddressValues.zipCode],
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2lucHV0L2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUvQyxNQUFNLENBQU4sSUFBWSxjQVVYO0FBVkQsV0FBWSxjQUFjO0lBQ3hCLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsdUNBQXFCLENBQUE7SUFDckIseUNBQXVCLENBQUE7SUFDdkIsbUNBQWlCLENBQUE7SUFDakIscUNBQW1CLENBQUE7SUFDbkIsbUNBQWlCLENBQUE7SUFDakIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVZXLGNBQWMsS0FBZCxjQUFjLFFBVXpCO0FBbUJELE1BQU0sT0FBTyxZQUFhLFNBQVEsU0FBaUM7SUFJakUsWUFBWSxVQUF5QixFQUFFO1FBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUpSLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBSy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQVM7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUlucHV0QmFzZSwgSW5wdXRCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGVudW0gRUFkZHJlc3NWYWx1ZXMge1xuICBjaXR5ID0gJ2NpdHknLFxuICBjb3VudHJ5ID0gJ2NvdW50cnknLFxuICBmbG9vciA9ICdmbG9vcicsXG4gIGxhdGl0dWRlID0gJ2xhdGl0dWRlJyxcbiAgbG9uZ2l0dWRlID0gJ2xvbmdpdHVkZScsXG4gIG51bWJlciA9ICdudW1iZXInLFxuICBwbGFjZUlkID0gJ3BsYWNlSWQnLFxuICBzdHJlZXQgPSAnc3RyZWV0JyxcbiAgemlwQ29kZSA9ICd6aXBDb2RlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzc1ZhbHVlIHtcbiAgY2l0eTogc3RyaW5nIHwgbnVsbDtcbiAgY291bnRyeTogc3RyaW5nIHwgbnVsbDtcbiAgZmxvb3I6IHN0cmluZyB8IG51bGw7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIG51bWJlcjogc3RyaW5nIHwgbnVsbDtcbiAgcGxhY2VJZDogc3RyaW5nIHwgbnVsbDtcbiAgc3RyZWV0OiBzdHJpbmcgfCBudWxsO1xuICB6aXBDb2RlOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dEFkZHJlc3MgZXh0ZW5kcyBJSW5wdXRCYXNlPFBhcnRpYWw8SUFkZHJlc3NWYWx1ZT4+IHtcbiAgLyoqIENvZGVzIHBheXMgSVNPIGFscGhhLTIgw6AgbWV0dHJlIGVuIMOpdmlkZW5jZSBlbiB0w6p0ZSBkZSBsaXN0ZSAoZXguIFsnQkUnLCAnRlInXSkuICovXG4gIHByaW9yaXR5Q291bnRyaWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEFkZHJlc3MgZXh0ZW5kcyBJbnB1dEJhc2U8UGFydGlhbDxJQWRkcmVzc1ZhbHVlPj4ge1xuICBvdmVycmlkZSBjb250cm9sVHlwZSA9ICdhZGRyZXNzJztcbiAgcHJpb3JpdHlDb3VudHJpZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElJbnB1dEFkZHJlc3MgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMudHlwZSA9ICdhZGRyZXNzJztcbiAgICB0aGlzLnByaW9yaXR5Q291bnRyaWVzID0gb3B0aW9ucy5wcmlvcml0eUNvdW50cmllcyA/PyBbJ0JFJywgJ0ZSJywgJ0RFJywgJ05MJ107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvcm1hdEFkZHJlc3NGb3JtKGRhdGE6IGFueSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5OiBkYXRhW0VBZGRyZXNzVmFsdWVzLmNpdHldLFxuICAgICAgY291bnRyeTogZGF0YVtFQWRkcmVzc1ZhbHVlcy5jb3VudHJ5XSxcbiAgICAgIGZsb29yOiBkYXRhW0VBZGRyZXNzVmFsdWVzLmZsb29yXSxcbiAgICAgIG51bWJlcjogZGF0YVtFQWRkcmVzc1ZhbHVlcy5udW1iZXJdLFxuICAgICAgcGxhY2VJZDogZGF0YVtFQWRkcmVzc1ZhbHVlcy5wbGFjZUlkXSxcbiAgICAgIHN0cmVldDogZGF0YVtFQWRkcmVzc1ZhbHVlcy5zdHJlZXRdLFxuICAgICAgemlwQ29kZTogZGF0YVtFQWRkcmVzc1ZhbHVlcy56aXBDb2RlXSxcbiAgICB9O1xuICB9XG59XG4iXX0=