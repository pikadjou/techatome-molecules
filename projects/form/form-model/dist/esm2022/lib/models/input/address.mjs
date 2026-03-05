import { InputBase } from './base';
import { InputTextBox } from './textbox';
export var EAddressValues;
(function (EAddressValues) {
    EAddressValues["street"] = "street";
    EAddressValues["number"] = "number";
    EAddressValues["floor"] = "floor";
    EAddressValues["city"] = "city";
    EAddressValues["zipCode"] = "zipCode";
    EAddressValues["country"] = "country";
    EAddressValues["longitude"] = "longitude";
    EAddressValues["latitude"] = "latitude";
})(EAddressValues || (EAddressValues = {}));
export class InputAddress extends InputBase {
    set value(data) {
        super.value = data;
        this.street.value = data?.street ?? null;
        this.number.value = data?.number ?? null;
        this.floor.value = data?.floor ?? null;
        this.country.value = data?.country ?? null;
        this.city.value = data?.city ?? null;
        this.zipCode.value = data?.zipCode ?? null;
    }
    constructor(options = {}) {
        super(options);
        this.controlType = 'address';
        this.street = new InputTextBox({
            key: EAddressValues.street,
            label: 'form.address.street',
        });
        this.number = new InputTextBox({
            key: EAddressValues.number,
            label: 'form.address.number',
        });
        this.floor = new InputTextBox({
            key: EAddressValues.floor,
            label: 'form.address.floor',
        });
        this.city = new InputTextBox({
            key: EAddressValues.city,
            label: 'form.address.city',
        });
        this.country = new InputTextBox({
            key: EAddressValues.country,
            label: 'form.address.country',
        });
        this.zipCode = new InputTextBox({
            key: EAddressValues.zipCode,
            label: 'form.address.zipCode',
        });
        this.type = 'address';
        this.value = this._value();
    }
    updateValue() {
        const data = {
            street: this.street.value,
            number: this.number.value,
            floor: this.floor.value,
            city: this.city.value,
            zipCode: this.zipCode.value,
            country: this.country.value,
            longitude: null,
            latitude: null,
        };
        this.value = data;
    }
    static formatAddressForm(data) {
        return {
            street: data[EAddressValues.street],
            number: data[EAddressValues.number],
            floor: data[EAddressValues.floor],
            city: data[EAddressValues.city],
            zipCode: data[EAddressValues.zipCode],
            country: data[EAddressValues.country],
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2lucHV0L2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDLE1BQU0sQ0FBTixJQUFZLGNBU1g7QUFURCxXQUFZLGNBQWM7SUFDeEIsbUNBQWlCLENBQUE7SUFDakIsbUNBQWlCLENBQUE7SUFDakIsaUNBQWUsQ0FBQTtJQUNmLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQix5Q0FBdUIsQ0FBQTtJQUN2Qix1Q0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBVFcsY0FBYyxLQUFkLGNBQWMsUUFTekI7QUFjRCxNQUFNLE9BQU8sWUFBYSxTQUFRLFNBQWlDO0lBR2pFLElBQWEsS0FBSyxDQUFDLElBQW1DO1FBQ3BELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFnQ0QsWUFBWSxVQUF5QixFQUFFO1FBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQTNDUixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQVkxQixXQUFNLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDL0IsR0FBRyxFQUFFLGNBQWMsQ0FBQyxNQUFNO1lBQzFCLEtBQUssRUFBRSxxQkFBcUI7U0FDN0IsQ0FBQyxDQUFDO1FBRUksV0FBTSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQy9CLEdBQUcsRUFBRSxjQUFjLENBQUMsTUFBTTtZQUMxQixLQUFLLEVBQUUscUJBQXFCO1NBQzdCLENBQUMsQ0FBQztRQUVJLFVBQUssR0FBRyxJQUFJLFlBQVksQ0FBQztZQUM5QixHQUFHLEVBQUUsY0FBYyxDQUFDLEtBQUs7WUFDekIsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QixDQUFDLENBQUM7UUFFSSxTQUFJLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDN0IsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3hCLEtBQUssRUFBRSxtQkFBbUI7U0FDM0IsQ0FBQyxDQUFDO1FBRUksWUFBTyxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2hDLEdBQUcsRUFBRSxjQUFjLENBQUMsT0FBTztZQUMzQixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztRQUVJLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQztZQUNoQyxHQUFHLEVBQUUsY0FBYyxDQUFDLE9BQU87WUFDM0IsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7UUFJRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzNCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFTO1FBQ3ZDLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUlucHV0QmFzZSwgSW5wdXRCYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElucHV0VGV4dEJveCB9IGZyb20gJy4vdGV4dGJveCc7XG5cbmV4cG9ydCBlbnVtIEVBZGRyZXNzVmFsdWVzIHtcbiAgc3RyZWV0ID0gJ3N0cmVldCcsXG4gIG51bWJlciA9ICdudW1iZXInLFxuICBmbG9vciA9ICdmbG9vcicsXG4gIGNpdHkgPSAnY2l0eScsXG4gIHppcENvZGUgPSAnemlwQ29kZScsXG4gIGNvdW50cnkgPSAnY291bnRyeScsXG4gIGxvbmdpdHVkZSA9ICdsb25naXR1ZGUnLFxuICBsYXRpdHVkZSA9ICdsYXRpdHVkZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZHJlc3NWYWx1ZSB7XG4gIHN0cmVldDogc3RyaW5nIHwgbnVsbDtcbiAgbnVtYmVyOiBzdHJpbmcgfCBudWxsO1xuICBmbG9vcjogc3RyaW5nIHwgbnVsbDtcbiAgY2l0eTogc3RyaW5nIHwgbnVsbDtcbiAgemlwQ29kZTogc3RyaW5nIHwgbnVsbDtcbiAgY291bnRyeTogc3RyaW5nIHwgbnVsbDtcbiAgbG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0QWRkcmVzcyBleHRlbmRzIElJbnB1dEJhc2U8UGFydGlhbDxJQWRkcmVzc1ZhbHVlPj4ge31cblxuZXhwb3J0IGNsYXNzIElucHV0QWRkcmVzcyBleHRlbmRzIElucHV0QmFzZTxQYXJ0aWFsPElBZGRyZXNzVmFsdWU+PiB7XG4gIG92ZXJyaWRlIGNvbnRyb2xUeXBlID0gJ2FkZHJlc3MnO1xuXG4gIG92ZXJyaWRlIHNldCB2YWx1ZShkYXRhOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+IHwgbnVsbCkge1xuICAgIHN1cGVyLnZhbHVlID0gZGF0YTtcbiAgICB0aGlzLnN0cmVldC52YWx1ZSA9IGRhdGE/LnN0cmVldCA/PyBudWxsO1xuICAgIHRoaXMubnVtYmVyLnZhbHVlID0gZGF0YT8ubnVtYmVyID8/IG51bGw7XG4gICAgdGhpcy5mbG9vci52YWx1ZSA9IGRhdGE/LmZsb29yID8/IG51bGw7XG4gICAgdGhpcy5jb3VudHJ5LnZhbHVlID0gZGF0YT8uY291bnRyeSA/PyBudWxsO1xuICAgIHRoaXMuY2l0eS52YWx1ZSA9IGRhdGE/LmNpdHkgPz8gbnVsbDtcbiAgICB0aGlzLnppcENvZGUudmFsdWUgPSBkYXRhPy56aXBDb2RlID8/IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RyZWV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiBFQWRkcmVzc1ZhbHVlcy5zdHJlZXQsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3Muc3RyZWV0JyxcbiAgfSk7XG5cbiAgcHVibGljIG51bWJlciA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogRUFkZHJlc3NWYWx1ZXMubnVtYmVyLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLm51bWJlcicsXG4gIH0pO1xuXG4gIHB1YmxpYyBmbG9vciA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogRUFkZHJlc3NWYWx1ZXMuZmxvb3IsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuZmxvb3InLFxuICB9KTtcblxuICBwdWJsaWMgY2l0eSA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogRUFkZHJlc3NWYWx1ZXMuY2l0eSxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jaXR5JyxcbiAgfSk7XG5cbiAgcHVibGljIGNvdW50cnkgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6IEVBZGRyZXNzVmFsdWVzLmNvdW50cnksXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MuY291bnRyeScsXG4gIH0pO1xuXG4gIHB1YmxpYyB6aXBDb2RlID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiBFQWRkcmVzc1ZhbHVlcy56aXBDb2RlLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLnppcENvZGUnLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJSW5wdXRBZGRyZXNzID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnR5cGUgPSAnYWRkcmVzcyc7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RyZWV0OiB0aGlzLnN0cmVldC52YWx1ZSxcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIudmFsdWUsXG4gICAgICBmbG9vcjogdGhpcy5mbG9vci52YWx1ZSxcbiAgICAgIGNpdHk6IHRoaXMuY2l0eS52YWx1ZSxcbiAgICAgIHppcENvZGU6IHRoaXMuemlwQ29kZS52YWx1ZSxcbiAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeS52YWx1ZSxcbiAgICAgIGxvbmdpdHVkZTogbnVsbCxcbiAgICAgIGxhdGl0dWRlOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnZhbHVlID0gZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0QWRkcmVzc0Zvcm0oZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cmVldDogZGF0YVtFQWRkcmVzc1ZhbHVlcy5zdHJlZXRdLFxuICAgICAgbnVtYmVyOiBkYXRhW0VBZGRyZXNzVmFsdWVzLm51bWJlcl0sXG4gICAgICBmbG9vcjogZGF0YVtFQWRkcmVzc1ZhbHVlcy5mbG9vcl0sXG4gICAgICBjaXR5OiBkYXRhW0VBZGRyZXNzVmFsdWVzLmNpdHldLFxuICAgICAgemlwQ29kZTogZGF0YVtFQWRkcmVzc1ZhbHVlcy56aXBDb2RlXSxcbiAgICAgIGNvdW50cnk6IGRhdGFbRUFkZHJlc3NWYWx1ZXMuY291bnRyeV0sXG4gICAgfTtcbiAgfVxufVxuIl19