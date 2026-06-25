import { signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, of, distinctUntilChanged } from 'rxjs';
import { SubscriberHandler, Culture, extractEnum } from '@ta/utils';
import { EDITOR_ALL_TOOLS } from '@ta/wysiswyg';
import { tap } from 'rxjs/operators';
import { Logger } from '@ta/server';

const BCE_REGEX = /^[01]\d{3}[. ]?\d{3}[. ]?\d{3}$/;
function bceValidator() {
    return (control) => {
        const value = control.value;
        if (!value)
            return null;
        return BCE_REGEX.test(value.trim()) ? null : { bce: true };
    };
}

/**
 * Validator that delegates phone number validation to an intl-tel-input instance.
 *
 * - Empty control values are considered valid (use Validators.required to enforce presence).
 * - Returns `null` when the instance is not yet available or its utils script is still loading
 *   (`isValidNumber()` returns `null`), so validation is deferred until the lib is ready.
 * - Returns `{ validatePhoneNumber: true }` when the instance reports the number as invalid.
 */
function phoneValidator(getInstance) {
    return (control) => {
        if (!control.value) {
            return null;
        }
        const valid = getInstance()?.isValidNumber();
        if (valid == null) {
            return null;
        }
        return valid ? null : { validatePhoneNumber: true };
    };
}

function slugValidator() {
    return (control) => {
        const value = control.value;
        // Vérifier si la valeur respecte les caractéristiques d'un slug
        const isValidSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
        return isValidSlug ? null : { invalidSlug: true };
    };
}

class InputBase {
    get value() {
        return this._value();
    }
    set value(value) {
        this._value.set(value);
        this.formControl?.setValue(value);
    }
    constructor(options = {}) {
        this.changeValue$ = new Subject();
        this._value = signal(null);
        this._subscriberHandler = new SubscriberHandler();
        if (options.value$) {
            this._subscriberHandler.registerSubscription(options.value$.subscribe({
                next: (value) => {
                    if (this.value) {
                        return;
                    }
                    this.value = value;
                },
            }));
        }
        this._value.set(options.value === undefined ? null : options.value);
        this.key = options.key || Math.random().toString();
        this.label = options.label || "";
        this.type = options.type || "";
        this.message = options.message || "";
        this.controlType = options.controlType || "";
        this.validators = options.validators || [];
        this.class = options.class || "col-12";
        this.children = [];
        this.disabled = options.disabled === true;
        this.readonly = options.readonly === true;
        this.visible$ = options.visible$ || of(true);
        if (options.bindStatusToVisible !== false) {
            this._subscriberHandler.registerSubscription(this.visible$.subscribe((visible) => {
                this._isVisible = visible;
                if (options.bindStatusToVisible !== false) {
                    if (!visible) {
                        this.disable();
                    }
                    else {
                        this.enable();
                    }
                }
                if (!visible) {
                    this.formControl?.setValue(null);
                }
            }));
        }
    }
    createFormControl(group) {
        if (this.children.length > 0) {
            for (const child of this.children) {
                if (child instanceof InputBase) {
                    child.createFormControl(group);
                }
            }
        }
        else {
            this.formControl = new FormControl(this.value, this.validators);
            if (this.disabled) {
                this.formControl.disable();
            }
            this._subscriberHandler.registerSubscription(this.formControl.valueChanges
                .pipe(distinctUntilChanged())
                .subscribe((value) => {
                this.value = value;
                this.launchChangeValue();
            }));
            if (group) {
                group.addControl(this.key, this.formControl);
            }
        }
    }
    launchChangeValue() {
        this.changeValue$.next(this.value);
        this.children.forEach((child) => child.launchChangeValue());
    }
    disable() {
        this.formControl?.disable();
        this.children.forEach((child) => child.disable());
    }
    setReadonly(value) {
        this.readonly = value;
    }
    enable() {
        if (!this._isVisible)
            return;
        this.formControl?.enable();
        this.children.forEach((child) => child.enable());
    }
    destroy() {
        this.changeValue$.complete();
        this._subscriberHandler.destroy();
    }
}

class InputCheckBox extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "checkbox";
        if (options.toggle === true) {
            this.controlType = "toggle";
        }
        if (!this.value) {
            this.value = false;
        }
    }
}

class InputTextBox extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "textbox";
        this.type = options.type || "text";
        this.icon = options.icon || null;
        this.iconClicked = options.iconClicked;
        this.step = options.step;
    }
}

class InputColorPicker extends InputTextBox {
    constructor(options = {}) {
        super(options);
        this.controlType = "colorPicker";
    }
}

class InputDropdown extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "dropdown";
        this.showNothingOption = false;
        this.withSearch = false;
        this.options$ = options["options$"] || of([]);
        this.multiple = options["multiple"] || false;
        this.showNothingOption = !this.multiple
            ? !!options.showNothingOption
            : false;
        this.width = options.width || "100%";
        this.withSearch = options.withSearch || false;
        this.maxResults = options.maxResults;
    }
}

class InputImages extends InputBase {
    constructor(options = {}) {
        super(options);
        this.update = null;
        if (!this.controlType) {
            this.controlType = "images";
        }
        this.files$ = options.files$ || null;
        if (options.update) {
            this.update = options.update;
        }
        if (options.onFileDeleted) {
            this.fileDeleted = options.onFileDeleted;
        }
        this.removeFile$ = options.removeFile$ || null;
        this.limit = options.limit ?? null;
    }
}

class InputLabel extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "label";
        this.icon = options.icon;
        this.level = options.level;
        this.required = options.required;
    }
    createFormControl(group) { }
}

class InputLogo extends InputBase {
    constructor(options = {}) {
        super(options);
        this.update = null;
        if (!this.controlType) {
            this.controlType = 'logo';
        }
        this.availableFile$ = options.availableFile$ || null;
        if (options.update) {
            this.update = options.update;
        }
        if (options.onFileDeleted)
            this.fileDeleted = options.onFileDeleted;
        this.removeFile$ = options.removeFile$ || null;
    }
}

class InputNumber extends InputTextBox {
    get value() {
        return Number(super.value);
    }
    set value(value) {
        super.value = Number(value);
    }
    constructor(options = {}) {
        super(options);
        this.type = "number";
        this.decimals = options.decimals ?? 0;
        this.step = this.decimals > 0 ? `${Math.pow(10, -this.decimals)}` : "1";
    }
}

class InputPanel extends InputBase {
    constructor(options) {
        super(options);
        this.controlType = "panel";
        this.containerClass = options.containerClass || [];
        this.contentClass = options.contentClass || "";
        this.children = options.children || [];
        this.icon = options.icon;
        this.required = options.required;
        this.level = options.level || 2;
    }
}

class InputRadio extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "radio";
        this.options = options["options"] || of([]);
        this.type = "radioGroup";
    }
}

class InputSchema extends InputBase {
    constructor(options = {}) {
        super(options);
        this.update = null;
        this.controlType = "schema";
        if (options.update) {
            this.update = options.update;
        }
    }
}

class InputTextarea extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "textarea";
    }
}

class InputUpload extends InputBase {
    constructor(options) {
        super(options);
        this.controlType = "upload";
        this.confirmButton = options.confirmButton ?? false;
    }
    confirmValue(ids) {
        this.formControl?.setValue(ids);
    }
}

class InputWysiswyg extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "wysiswyg";
        this.enabledTools = options.enabledTools ?? EDITOR_ALL_TOOLS;
        this.placeholder = options.placeholder ?? '';
        if (options.stringValue) {
            try {
                this.value = JSON.parse(options.stringValue);
            }
            catch (e) { }
        }
    }
}

class InputFactory {
    static getInput(key, options) {
        if (options.templateChildren) {
            options.children = options.templateChildren();
        }
        switch (key) {
            case "InputCheckBox":
                return new InputCheckBox(options);
            case "InputRadio":
                return new InputRadio(options);
            case "InputColorPicker":
                return new InputColorPicker(options);
            case "InputDropdown":
                return new InputDropdown(options);
            case "InputImages":
                return new InputImages(options);
            case "InputLabel":
                return new InputLabel(options);
            case "InputLogo":
                return new InputLogo(options);
            case "InputNumber":
                return new InputNumber(options);
            case "InputPanel":
                return new InputPanel(options);
            case "InputSchema":
                return new InputSchema(options);
            case "InputTextarea":
                return new InputTextarea(options);
            case "InputTextBox":
                return new InputTextBox(options);
            case "InputWysiswyg":
                return new InputWysiswyg(options);
            case "InputUpload":
                return new InputUpload(options);
            default:
                return new InputTextBox(options);
        }
    }
}

class InputChoices extends InputDropdown {
    constructor(options = {}) {
        super(options);
        this.controlType = 'choices';
        this.onlyTemplate = options.onlyTemplate;
        this.advancedSearch$ = options['advancedSearch$'] || null;
        this.choiceTemplate = options.choiceTemplate;
        this.showNullableFields = options.showNullableFields ?? false;
        this.focusSearch = options.focusSearch ?? false;
    }
}

class InputCurrency extends InputNumber {
    constructor(options) {
        super({ decimals: 2, icon: 'euro', ...options });
    }
}

class InputDatePicker extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "datePicker";
        this.minDate = this.parseDate(options.minDate);
        this.maxDate = this.parseDate(options.maxDate);
        this.rangeEnabled = options.rangeEnabled ?? false;
    }
    parseDate(date) {
        if (!date) {
            return null;
        }
        if (date instanceof Date) {
            return date;
        }
        switch (date) {
            case "today":
                return new Date();
            default:
                return new Date(date);
        }
    }
}

class InputDynamic extends InputBase {
    constructor(options = {}) {
        super(options);
        this.listChanged$ = new Subject();
        this.firstRender = true;
        this.composedKeyForGroup = true;
        this.inputsGroup = options.inputsGroup || {};
        this.template = options.template || [];
        this.controlType = "dynamic";
    }
    add(key) {
        const templates = [];
        const value = key && this.value ? this.value[key] : null;
        for (const template of this.template) {
            templates.push(InputFactory.getInput(template.type, {
                ...template.options,
                ...{ value: value ? value[template.options.key ?? ""] : null },
            }));
        }
        this._addControl(templates, key ?? this._inputKey());
        this.listChanged$.next();
    }
    remove(id) {
        if (this.inputsGroup[id]) {
            this.formControl?.removeControl(this.key + "-" + id);
            delete this.inputsGroup[id];
        }
        this.listChanged$.next();
    }
    createFormControl(group) {
        this.formControl = new FormGroup({});
        const inputGroupKeys = Object.keys(this.inputsGroup);
        inputGroupKeys.forEach((key) => {
            this._addControl(this.inputsGroup[key], key);
        });
        if (this.firstRender && this.template && inputGroupKeys.length === 0) {
            this.add();
        }
        group.addControl(this.key, this.formControl);
    }
    _addControl(inputs, key) {
        const childGroup = new FormGroup({});
        inputs.forEach((input) => {
            input.createFormControl(childGroup);
        });
        this.formControl?.addControl(this.composedKeyForGroup ? this.key + "-" + key : key, childGroup);
        this.inputsGroup[key] = inputs;
    }
    _inputKey() {
        return "" + Math.floor(Math.random() * 10000);
    }
}

class InputEmail extends InputTextBox {
    constructor(options = {}) {
        super(options);
        this.type = "email";
        this.validators.push(Validators.email);
    }
}

class InputPassword extends InputTextBox {
    constructor(options = {}) {
        super(options);
        this.type = "password";
        this.validators.push(Validators.required);
    }
}

class InputPhone extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'phone';
        this.type = 'tel';
        this.preferredCountries = ['be', 'fr'];
    }
}

class InputRating extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'rating';
        this.max = options.max ?? 5;
        this.size = options.size ?? 24;
        this.allowHalf = options.allowHalf ?? false;
        this.readonly = options.readonly ?? false;
    }
}

class InputSlider extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "slider";
        this.min = options.min || 0;
        this.max = options.max || 100;
    }
}

class InputSwitch extends InputBase {
    constructor(options) {
        super(options);
        this.matchtype = signal("");
        this.controlType = "switch";
        if (options.match) {
            this._subscriberHandler.registerSubscription(options.match
                .pipe(tap((match) => Object.assign(this, match.prop)), tap((match) => this.matchtype.set(match.type)))
                .subscribe());
        }
    }
}

class InputTimePicker extends InputTextBox {
    constructor(options = {}) {
        super(options);
        this.type = "time";
        this.controlType = "timePicker";
    }
}

var EAddressValues;
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
class InputAddress extends InputBase {
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

class InputTranslation extends InputDynamic {
    constructor(options) {
        super(options);
        this.controlType = "translation";
        this.firstRender = false;
        this.composedKeyForGroup = false;
        this.mainCulture = options.mainCulture ?? null;
    }
    add(culture) {
        super.add(culture);
    }
    createFormControl(group) {
        super.createFormControl(group);
        this._fill();
    }
    _fill() {
        if (this.mainCulture) {
            this.add(Culture[this.mainCulture]);
        }
        if (!this.value) {
            return;
        }
        for (const key of Object.keys(this.value)) {
            this.add(key);
        }
    }
}

class InputCulture extends InputDropdown {
    constructor(options = {}) {
        super({
            ...options,
            options$: of(extractEnum(Culture, true).map((item) => ({
                id: item.value.toString(),
                name: "ui.culture.long." + item.value,
            }))),
        });
        this.controlType = "culture";
    }
}

class InputComponent extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = "component";
        this.selectedValue$ = new Subject();
        this.icon = options.icon || null;
        this.template = options.template;
        if (!this.template) {
            Logger.LogError("No template for InputComponent");
        }
        this._subscriberHandler.registerSubscription(this.selectedValue$.subscribe({
            next: (value) => (this.value = value),
        }));
    }
}

/*
 * Public API Surface of form-model
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EAddressValues, InputAddress, InputBase, InputCheckBox, InputChoices, InputColorPicker, InputComponent, InputCulture, InputCurrency, InputDatePicker, InputDropdown, InputDynamic, InputEmail, InputFactory, InputImages, InputLabel, InputLogo, InputNumber, InputPanel, InputPassword, InputPhone, InputRadio, InputRating, InputSchema, InputSlider, InputSwitch, InputTextBox, InputTextarea, InputTimePicker, InputTranslation, InputUpload, InputWysiswyg, bceValidator, phoneValidator, slugValidator };
//# sourceMappingURL=ta-form-model.mjs.map
