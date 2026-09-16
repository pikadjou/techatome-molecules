import { InputBase } from "./base";
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
        this.controlType = "address";
        this.type = "address";
        this.priorityCountries = options.priorityCountries ?? [
            "BE",
            "FR",
            "DE",
            "NL",
        ];
    }
    /**
     * Valeur brute du formulaire → adresse normalisée.
     *
     * Les chaînes sont détourées : une recherche Google ou une saisie manuelle
     * laisse volontiers une espace en tête ou en fin, et chaque consommateur
     * refaisait le travail de son côté. Le reste passe tel quel — coordonnées et
     * `placeId` compris, à charge de l'appelant de ne transmettre que ce que son
     * API accepte.
     */
    static formatAddressForm(data) {
        if (!data) {
            return null;
        }
        return {
            city: InputAddress._trim(data[EAddressValues.city]),
            country: InputAddress._trim(data[EAddressValues.country]),
            floor: InputAddress._trim(data[EAddressValues.floor]),
            number: InputAddress._trim(data[EAddressValues.number]),
            placeId: data[EAddressValues.placeId],
            street: InputAddress._trim(data[EAddressValues.street]),
            zipCode: InputAddress._trim(data[EAddressValues.zipCode]),
        };
    }
    /**
     * L'adresse porte-t-elle de quoi écrire une enveloppe ?
     *
     * `Validators.required` posé sur le champ ne garantit que la présence d'une
     * valeur, pas celle de ses parties : une recherche abandonnée en cours de
     * route rend une adresse partielle, qu'une API postale rejettera. `floor`
     * reste facultatif — un immeuble n'en a pas toujours.
     */
    static isComplete(address) {
        if (!address) {
            return false;
        }
        return [
            address.street,
            address.number,
            address.zipCode,
            address.city,
            address.country,
        ].every((value) => !!InputAddress._trim(value));
    }
    static _trim(value) {
        return typeof value === "string" ? value.trim() : value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2lucHV0L2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUvQyxNQUFNLENBQU4sSUFBWSxjQVVYO0FBVkQsV0FBWSxjQUFjO0lBQ3hCLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsdUNBQXFCLENBQUE7SUFDckIseUNBQXVCLENBQUE7SUFDdkIsbUNBQWlCLENBQUE7SUFDakIscUNBQW1CLENBQUE7SUFDbkIsbUNBQWlCLENBQUE7SUFDakIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVZXLGNBQWMsS0FBZCxjQUFjLFFBVXpCO0FBaUNELE1BQU0sT0FBTyxZQUFhLFNBQVEsU0FBaUM7SUFJakUsWUFBWSxVQUF5QixFQUFFO1FBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUpSLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBSy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUk7WUFDcEQsSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtTQUNMLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBUztRQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQ3RCLE9BQWtEO1FBRWxELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELE9BQU87WUFDTCxPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLE9BQU87WUFDZixPQUFPLENBQUMsSUFBSTtZQUNaLE9BQU8sQ0FBQyxPQUFPO1NBQ2hCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxNQUFNLENBQUMsS0FBSyxDQUFJLEtBQVE7UUFDOUIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFFLEtBQUssQ0FBQyxJQUFJLEVBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbnB1dEJhc2UsIElucHV0QmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGVudW0gRUFkZHJlc3NWYWx1ZXMge1xuICBjaXR5ID0gXCJjaXR5XCIsXG4gIGNvdW50cnkgPSBcImNvdW50cnlcIixcbiAgZmxvb3IgPSBcImZsb29yXCIsXG4gIGxhdGl0dWRlID0gXCJsYXRpdHVkZVwiLFxuICBsb25naXR1ZGUgPSBcImxvbmdpdHVkZVwiLFxuICBudW1iZXIgPSBcIm51bWJlclwiLFxuICBwbGFjZUlkID0gXCJwbGFjZUlkXCIsXG4gIHN0cmVldCA9IFwic3RyZWV0XCIsXG4gIHppcENvZGUgPSBcInppcENvZGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzc1ZhbHVlIHtcbiAgY2l0eTogc3RyaW5nIHwgbnVsbDtcbiAgY291bnRyeTogc3RyaW5nIHwgbnVsbDtcbiAgZmxvb3I6IHN0cmluZyB8IG51bGw7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIG51bWJlcjogc3RyaW5nIHwgbnVsbDtcbiAgcGxhY2VJZDogc3RyaW5nIHwgbnVsbDtcbiAgc3RyZWV0OiBzdHJpbmcgfCBudWxsO1xuICB6aXBDb2RlOiBzdHJpbmcgfCBudWxsO1xufVxuXG4vKipcbiAqIEFkcmVzc2UgZG9udCB0b3V0ZXMgbGVzIHBhcnRpZXMgcG9zdGFsZXMgc29udCByZW5zZWlnbsOpZXMuXG4gKlxuICogYGZsb29yYCByZXN0ZSBmYWN1bHRhdGlmIOKAlCB1biBpbW1ldWJsZSBuJ2VuIGEgcGFzIHRvdWpvdXJzIOKAlCBldCBsZXMgcmVww6hyZXNcbiAqIGfDqW9ncmFwaGlxdWVzIG5lIHBhcnRpY2lwZW50IHBhcyDDoCBsJ2FjaGVtaW5lbWVudC5cbiAqL1xuZXhwb3J0IHR5cGUgSVBvc3RhbEFkZHJlc3MgPSBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+ICYge1xuICBjaXR5OiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICB6aXBDb2RlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dEFkZHJlc3MgZXh0ZW5kcyBJSW5wdXRCYXNlPFBhcnRpYWw8SUFkZHJlc3NWYWx1ZT4+IHtcbiAgLyoqIENvZGVzIHBheXMgSVNPIGFscGhhLTIgw6AgbWV0dHJlIGVuIMOpdmlkZW5jZSBlbiB0w6p0ZSBkZSBsaXN0ZSAoZXguIFsnQkUnLCAnRlInXSkuICovXG4gIHByaW9yaXR5Q291bnRyaWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEFkZHJlc3MgZXh0ZW5kcyBJbnB1dEJhc2U8UGFydGlhbDxJQWRkcmVzc1ZhbHVlPj4ge1xuICBvdmVycmlkZSBjb250cm9sVHlwZSA9IFwiYWRkcmVzc1wiO1xuICBwcmlvcml0eUNvdW50cmllczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogSUlucHV0QWRkcmVzcyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy50eXBlID0gXCJhZGRyZXNzXCI7XG4gICAgdGhpcy5wcmlvcml0eUNvdW50cmllcyA9IG9wdGlvbnMucHJpb3JpdHlDb3VudHJpZXMgPz8gW1xuICAgICAgXCJCRVwiLFxuICAgICAgXCJGUlwiLFxuICAgICAgXCJERVwiLFxuICAgICAgXCJOTFwiLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogVmFsZXVyIGJydXRlIGR1IGZvcm11bGFpcmUg4oaSIGFkcmVzc2Ugbm9ybWFsaXPDqWUuXG4gICAqXG4gICAqIExlcyBjaGHDrm5lcyBzb250IGTDqXRvdXLDqWVzIDogdW5lIHJlY2hlcmNoZSBHb29nbGUgb3UgdW5lIHNhaXNpZSBtYW51ZWxsZVxuICAgKiBsYWlzc2Ugdm9sb250aWVycyB1bmUgZXNwYWNlIGVuIHTDqnRlIG91IGVuIGZpbiwgZXQgY2hhcXVlIGNvbnNvbW1hdGV1clxuICAgKiByZWZhaXNhaXQgbGUgdHJhdmFpbCBkZSBzb24gY8O0dMOpLiBMZSByZXN0ZSBwYXNzZSB0ZWwgcXVlbCDigJQgY29vcmRvbm7DqWVzIGV0XG4gICAqIGBwbGFjZUlkYCBjb21wcmlzLCDDoCBjaGFyZ2UgZGUgbCdhcHBlbGFudCBkZSBuZSB0cmFuc21ldHRyZSBxdWUgY2UgcXVlIHNvblxuICAgKiBBUEkgYWNjZXB0ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0QWRkcmVzc0Zvcm0oZGF0YTogYW55KSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IElucHV0QWRkcmVzcy5fdHJpbShkYXRhW0VBZGRyZXNzVmFsdWVzLmNpdHldKSxcbiAgICAgIGNvdW50cnk6IElucHV0QWRkcmVzcy5fdHJpbShkYXRhW0VBZGRyZXNzVmFsdWVzLmNvdW50cnldKSxcbiAgICAgIGZsb29yOiBJbnB1dEFkZHJlc3MuX3RyaW0oZGF0YVtFQWRkcmVzc1ZhbHVlcy5mbG9vcl0pLFxuICAgICAgbnVtYmVyOiBJbnB1dEFkZHJlc3MuX3RyaW0oZGF0YVtFQWRkcmVzc1ZhbHVlcy5udW1iZXJdKSxcbiAgICAgIHBsYWNlSWQ6IGRhdGFbRUFkZHJlc3NWYWx1ZXMucGxhY2VJZF0sXG4gICAgICBzdHJlZXQ6IElucHV0QWRkcmVzcy5fdHJpbShkYXRhW0VBZGRyZXNzVmFsdWVzLnN0cmVldF0pLFxuICAgICAgemlwQ29kZTogSW5wdXRBZGRyZXNzLl90cmltKGRhdGFbRUFkZHJlc3NWYWx1ZXMuemlwQ29kZV0pLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTCdhZHJlc3NlIHBvcnRlLXQtZWxsZSBkZSBxdW9pIMOpY3JpcmUgdW5lIGVudmVsb3BwZSA/XG4gICAqXG4gICAqIGBWYWxpZGF0b3JzLnJlcXVpcmVkYCBwb3PDqSBzdXIgbGUgY2hhbXAgbmUgZ2FyYW50aXQgcXVlIGxhIHByw6lzZW5jZSBkJ3VuZVxuICAgKiB2YWxldXIsIHBhcyBjZWxsZSBkZSBzZXMgcGFydGllcyA6IHVuZSByZWNoZXJjaGUgYWJhbmRvbm7DqWUgZW4gY291cnMgZGVcbiAgICogcm91dGUgcmVuZCB1bmUgYWRyZXNzZSBwYXJ0aWVsbGUsIHF1J3VuZSBBUEkgcG9zdGFsZSByZWpldHRlcmEuIGBmbG9vcmBcbiAgICogcmVzdGUgZmFjdWx0YXRpZiDigJQgdW4gaW1tZXVibGUgbidlbiBhIHBhcyB0b3Vqb3Vycy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNDb21wbGV0ZShcbiAgICBhZGRyZXNzOiBQYXJ0aWFsPElBZGRyZXNzVmFsdWU+IHwgbnVsbCB8IHVuZGVmaW5lZFxuICApOiBhZGRyZXNzIGlzIElQb3N0YWxBZGRyZXNzIHtcbiAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIGFkZHJlc3Muc3RyZWV0LFxuICAgICAgYWRkcmVzcy5udW1iZXIsXG4gICAgICBhZGRyZXNzLnppcENvZGUsXG4gICAgICBhZGRyZXNzLmNpdHksXG4gICAgICBhZGRyZXNzLmNvdW50cnksXG4gICAgXS5ldmVyeSgodmFsdWUpID0+ICEhSW5wdXRBZGRyZXNzLl90cmltKHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBfdHJpbTxUPih2YWx1ZTogVCk6IFQge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyAodmFsdWUudHJpbSgpIGFzIFQpIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==