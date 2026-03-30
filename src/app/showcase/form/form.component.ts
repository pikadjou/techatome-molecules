import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { FormComponent } from "@ta/form-basic";
import {
  InputBase,
  InputCheckBox,
  InputColorPicker,
  InputDatePicker,
  InputDropdown,
  InputEmail,
  InputNumber,
  InputPanel,
  InputPassword,
  InputPhone,
  InputRadio,
  InputSlider,
  InputTextBox,
  InputTextarea,
  InputTimePicker,
} from "@ta/form-model";
import { TextComponent, TitleComponent } from "@ta/ui";

import { of } from "rxjs";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    FormComponent,
    JsonPipe,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPage {
  public formResult = signal<unknown>(null);

  public inputs: InputBase<unknown>[] = [
    new InputPanel({
      key: "identity",
      label: "Identity",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputTextBox({
          key: "firstName",
          label: "First Name",
          value: "John",
        }),
        new InputTextBox({
          key: "lastName",
          label: "Last Name",
          value: "Doe",
        }),
        new InputEmail({ key: "email", label: "Email" }),
        new InputPassword({ key: "password", label: "Password" }),
        new InputPhone({ key: "phone", label: "Phone" }),
      ],
    }),
    new InputPanel({
      key: "details",
      label: "Details",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputTextarea({ key: "bio", label: "Biography" }),
        new InputNumber({ key: "age", label: "Age", value: 30 }),
        new InputDropdown({
          key: "country",
          label: "Country",
          options$: of([
            { id: "fr", name: "France" },
            { id: "us", name: "United States" },
            { id: "uk", name: "United Kingdom" },
            { id: "de", name: "Germany" },
          ]),
        }),
        new InputDatePicker({ key: "birthDate", label: "Birth Date" }),
        new InputTimePicker({ key: "meetingTime", label: "Meeting Time" }),
      ],
    }),
    new InputPanel({
      key: "preferences",
      label: "Preferences",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputRadio({
          key: "gender",
          label: "Gender",
          options: of([
            { id: "male", name: "Male" },
            { id: "female", name: "Female" },
            { id: "other", name: "Other" },
          ]),
        }),
        new InputCheckBox({
          key: "newsletter",
          label: "Subscribe to newsletter",
        }),
        new InputCheckBox({ key: "darkMode", label: "Dark Mode", toggle: true }),
        new InputSlider({
          key: "volume",
          label: "Volume",
          min: 0,
          max: 100,
          value: 50,
        }),
        new InputColorPicker({
          key: "favoriteColor",
          label: "Favorite Color",
          value: "#1976d2",
        }),
      ],
    }),
  ];

  public onSubmit(data: unknown) {
    this.formResult.set(data);
  }
}
