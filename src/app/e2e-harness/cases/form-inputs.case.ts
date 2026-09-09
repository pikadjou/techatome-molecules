import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import {
  CheckboxComponent,
  ColorPickerComponent,
  CultureComponent,
  DatePickerComponent,
  DropdownComponent,
  InputChoicesComponent,
  InputPhoneComponent,
  LabelComponent,
  RadioComponent,
  RatingComponent,
  SearchFieldComponent,
  SliderComponent,
  SwitchComponent,
  TextareaComponent,
  TextBoxComponent,
  TimePickerComponent,
  ToggleComponent,
} from "@ta/form-input";
import {
  InputCheckBox,
  InputChoices,
  InputCulture,
  InputDatePicker,
  InputDropdown,
  InputLabel,
  InputPhone,
  InputRadio,
  InputRating,
  InputSlider,
  InputSwitch,
  InputTextarea,
  InputTextBox,
  InputTimePicker,
} from "@ta/form-model";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « form-inputs » @ta/form-input — inputs légers montés en mode standalone.
 * Route: /e2e-harness/form-inputs
 */
@Component({
  standalone: true,
  selector: "app-case-form-inputs",
  imports: [
    CheckboxComponent,
    ColorPickerComponent,
    CultureComponent,
    DatePickerComponent,
    DropdownComponent,
    InputChoicesComponent,
    InputPhoneComponent,
    LabelComponent,
    RadioComponent,
    RatingComponent,
    SearchFieldComponent,
    SliderComponent,
    SwitchComponent,
    TextareaComponent,
    TextBoxComponent,
    TimePickerComponent,
    ToggleComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-input-textbox taTestId="ta-input-textbox" [input]="textbox" [standalone]="true"></ta-input-textbox>
    <ta-input-textarea taTestId="ta-input-textarea" [input]="textarea" [standalone]="true"></ta-input-textarea>
    <ta-input-color-picker taTestId="ta-input-color-picker" [input]="color" [standalone]="true"></ta-input-color-picker>
    <ta-input-phone taTestId="ta-input-phone" [input]="phone" [standalone]="true"></ta-input-phone>
    <ta-search-field taTestId="ta-search-field" [input]="search" [standalone]="true"></ta-search-field>
    <ta-input-label taTestId="ta-input-label" [input]="label" [standalone]="true"></ta-input-label>
    <ta-input-dropdown taTestId="ta-input-dropdown" [input]="dropdown" [standalone]="true"></ta-input-dropdown>
    <ta-input-choices taTestId="ta-input-choices" [input]="choices" [standalone]="true"></ta-input-choices>
    <ta-input-radio taTestId="ta-input-radio" [input]="radio" [standalone]="true"></ta-input-radio>
    <ta-input-checkbox taTestId="ta-input-checkbox" [input]="checkbox" [standalone]="true"></ta-input-checkbox>
    <ta-input-toggle taTestId="ta-input-toggle" [input]="toggle" [standalone]="true"></ta-input-toggle>
    <ta-input-switch taTestId="ta-input-switch" [input]="switchModel" [standalone]="true"></ta-input-switch>
    <ta-input-slider taTestId="ta-input-slider" [input]="slider" [standalone]="true"></ta-input-slider>
    <ta-input-rating taTestId="ta-input-rating" [input]="rating" [standalone]="true"></ta-input-rating>
    <ta-input-date-picker taTestId="ta-input-date-picker" [input]="datePicker" [standalone]="true"></ta-input-date-picker>
    <ta-input-time-picker taTestId="ta-input-time-picker" [input]="timePicker" [standalone]="true"></ta-input-time-picker>
    <ta-input-culture taTestId="ta-input-culture" [input]="culture" [standalone]="true"></ta-input-culture>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputsCase {
  readonly textbox = new InputTextBox({ key: "textbox", label: "Textbox", value: "Texte" });
  readonly textarea = new InputTextarea({ key: "textarea", label: "Textarea" });
  readonly color = new InputTextBox({ key: "color", label: "Couleur" });
  readonly phone = new InputPhone({ key: "phone", label: "Téléphone" });
  readonly search = new InputTextBox({ key: "search", label: "Recherche" });
  readonly label = new InputLabel({ key: "label", label: "Label" });
  readonly dropdown = new InputDropdown({
    key: "dropdown",
    label: "Dropdown",
    options$: of([{ id: "1", name: "Un" }]),
  });
  readonly choices = new InputChoices({
    key: "choices",
    label: "Choix",
    options$: of([{ id: "1", name: "Un", data: null }]),
  });
  readonly radio = new InputRadio<string>({ key: "radio", label: "Radio", options: of([{ id: "1", name: "Un" }]) });
  readonly checkbox = new InputCheckBox({ key: "checkbox", label: "Checkbox" });
  readonly toggle = new InputCheckBox({ key: "toggle", label: "Toggle" });
  readonly switchModel = new InputSwitch({ key: "switch", label: "Switch" });
  readonly slider = new InputSlider({ key: "slider", label: "Slider", min: 0, max: 100 });
  readonly rating = new InputRating({ key: "rating", label: "Rating" });
  readonly datePicker = new InputDatePicker({ key: "date", label: "Date" });
  readonly timePicker = new InputTimePicker({ key: "time", label: "Heure" });
  readonly culture = new InputCulture({ key: "culture", label: "Culture" });
}
