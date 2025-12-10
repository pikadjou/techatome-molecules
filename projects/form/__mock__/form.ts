import { TemplateRef } from "@angular/core";
import { Validators } from "@angular/forms";

import {
  InputAddress,
  InputBase,
  InputCheckBox,
  InputChoices,
  InputCulture,
  InputDatePicker,
  InputDropdown,
  InputPanel,
  InputPhone,
  InputRadio,
  InputSchema,
  InputSlider,
  InputTextBox,
  InputTextarea,
  InputTimePicker,
  InputTranslation,
  InputUpload,
  InputWysiswyg,
} from "@ta/form-model";
import { of } from "rxjs";

export const __basicForm: InputBase<any>[] = [
  new InputPanel({
    key: "main-panel",
    label: "tasks.form.title",
    class: "p-5",
    children: [
      new InputDropdown({
        key: "InputDropdown",
        label: "tasks.form.add.type",
        class: "pb-2",
        options: of([
          {
            id: "1",
            name: "number 1",
          },
          {
            id: "2",
            name: "number 2",
          },
          {
            id: "3",
            name: "number 3",
          },
        ]),
      }),
      new InputTextBox({
        key: "InputTextBox",
        label: "tasks.form.add.title",
        class: "pb-2",
      }),
      new InputTextarea({
        key: "InputTextarea",
        label: "tasks.form.add.description",
        class: "pb-2",
      }),
      new InputDatePicker({
        key: "InputDatePicker",
        label: "tasks.form.add.deadline",
        minDate: "today",
      }),
    ],
  }),
];

export const __TemplateSingleInputForm = (): InputBase<any> =>
  new InputTextBox({
    key: "coucou",
    value: "blablabal",
  });

export const __TemplateSingleInputDropdownForm = (): InputBase<any> =>
  new InputDropdown({
    key: "InputDropdown",
    label: "tasks.form.add.type",
    class: "pb-2",
    options: of([
      {
        id: "1",
        name: "number 1",
      },
      {
        id: "2",
        name: "number 2",
      },
      {
        id: "3",
        name: "number 3",
      },
    ]),
  });

export const __TemplateSingleInputDateTimeForm = (): InputBase<any> =>
  new InputDatePicker({
    key: "userIds",
    label: "tasks.form.task.dateline",
    minDate: "today",
    rangeEnabled: false,
  });

export const __TemplateSingleInputlabelForm = (): InputBase<any> =>
  new InputPhone({
    key: "phone",
    label: "persons.form.add.phoneNumber",
  });

export const __TemplateSingleComplexInputForm = (): InputBase<any> =>
  new InputChoices({
    key: "InputChoices",
    label: "tasks.form.add.InputChoices",
    class: "pb-2",
    withSearch: true,
    multiple: true,
    options: of([
      {
        id: "1",
        name: "dis 1",
        data: {
          info: "number 1",
        },
      },
      {
        id: "2",
        name: "dis 2",
        data: {
          info: "number 2",
        },
      },
      {
        id: "3",
        name: "dis 3",
        data: {
          info: "number 3",
        },
      },
    ]),
    //choiceTemplate: template,
  });

export const __TemplateForm = (
  template: TemplateRef<any>
): InputBase<any>[] => [
  new InputPanel({
    key: "main-panel",
    label: "tasks.form.title",
    // contentClass: ['flex-row space-around'],
    children: [
      new InputCulture({
        key: "babs",
        label: "bobs",
        disabled: true,
      }),
      new InputTextBox({
        key: "coucou",
        label: "cestmoi",
        disabled: true,
      }),
      new InputTextarea({
        key: "coucou",
        label: "cestmoi",
        value: "coucou",
        validators: [Validators.required],
        disabled: true,
      }),
      new InputCheckBox({
        key: "coucou",
        class: "pt-xxl",
        label: "cestmoi",
        value: true,
        toggle: false,
        validators: [Validators.required],
        disabled: true,
      }),
      new InputCheckBox({
        key: "coucou",
        label: "tasktypes.form.active",
        class: "pt-xxl",
        toggle: true,
      }),
      new InputSlider({
        key: "slider",
        class: "w-100",
        max: 50,
        value: 30,
        disabled: true,
      }),
      new InputChoices({
        key: "userIds",
        label: "teams.form.users.label",
        value: ["coucou", "coucou2"],
        multiple: true,
        withSearch: true,
        options: undefined,
        disabled: true,
      }),
      new InputDatePicker({
        key: "userIds",
        label: "tasks.form.task.dateline",
        minDate: "today",
        rangeEnabled: false,
        disabled: true,
      }),
      new InputCulture({
        key: "babs",
        label: "bobs",
        disabled: true,
      }),
      new InputDropdown({
        key: "reason",
        label: "billings.quotations.version.status.refused.reason",
        options: of([
          { id: "123445", name: "coucou1" },
          { id: "123945", name: "coucou2" },
          { id: "123485", name: "coucou3" },
        ]),
        validators: [Validators.required],
        withSearch: true,
        multiple: true,
      }),
      new InputDropdown({
        key: "reason",
        label: "billings.quotations.version.status.refused.reason",
        options: of([
          { id: "123445", name: "coucou1" },
          { id: "123945", name: "coucou2" },
          { id: "123485", name: "coucou3" },
        ]),
        validators: [Validators.required],
        withSearch: true,
      }),
      new InputAddress({
        key: "address",
        label: "tasks.form.add.address",
      }),
      new InputPhone({
        key: "phone",
        label: "persons.form.add.phoneNumber",
      }),
      new InputRadio({
        key: "is-validated",
        class: "py-3",
        options: of([
          {
            id: true,
            icon: 11,
          },
          {
            id: false,
            icon: 9,
          },
        ]),
        value: true,
        validators: [Validators.required],
      }),
      new InputTextBox({
        key: "EFormProfileField.FirstName",
        label: "form.profile.my-profile.firstname",
        value: "Antoine",
        type: "text",
      }),
      new InputTimePicker({
        key: "EFormCallField.NewPlanTime",
        label: "form.communication-handler.cta.call.plan-visit.timepicker",
      }),
      new InputTranslation({
        key: "translation",
        template: [
          {
            type: "InputTextBox",
            options: {
              key: "InputTextBox",
              label: "tasks.form.add.title",
              class: "pb-2",
            },
          },
          {
            type: "InputTextarea",
            options: {
              key: "InputTextarea",
              label: "tasks.form.add.title",
              class: "pb-2",
            },
          },
        ],
        value: {
          FR_FR: {
            InputTextBox: "InputTextBox FR_FR",
            InputTextarea: "InputTextarea FR_FR",
          },
          FR_BE: {
            InputTextBox: "InputTextBox FR_BE",
            InputTextarea: "InputTextarea FR_BE",
          },
          NL_NL: {
            InputTextBox: "InputTextBox NL_NL",
            InputTextarea: "InputTextarea NL_NL",
          },
          EN_EN: {
            InputTextBox: "InputTextBox EN_EN",
            InputTextarea: "InputTextarea EN_EN",
          },
        },
      }),
      new InputUpload({
        key: "Upload",
        label: "tasks.form.add.InputUpload",
        confirmButton: true,
      }),
      new InputWysiswyg({
        key: "InputWysiswyg",
        label: "tasks.form.add.InputWysiswyg",
      }),
      new InputTextBox({
        key: "firstName",
        label: "persons.form.add.firstName",
        class: "pb-2",
      }),
      new InputTextBox({
        key: "lastName",
        label: "persons.form.add.lastName",
        class: "pb-2",
      }),
      new InputPhone({
        key: "phone",
        label: "tasks.form.add.phone",
      }),
      new InputAddress({
        key: "address",
        label: "tasks.form.add.address",
      }),
      new InputChoices({
        key: "InputChoices",
        label: "tasks.form.add.InputChoices",
        class: "pb-2",
        withSearch: true,
        multiple: true,
        options: of([
          {
            id: "1",
            name: "dis 1",
            data: {
              info: "number 1",
            },
          },
          {
            id: "2",
            name: "dis 2",
            data: {
              info: "number 2",
            },
          },
          {
            id: "3",
            name: "dis 3",
            data: {
              info: "number 3",
            },
          },
        ]),
        //choiceTemplate: template,
      }),
      new InputChoices({
        key: "InputChoices",
        label: "tasks.form.add.InputChoices-No-search",
        class: "pb-2",
        withSearch: false,
        multiple: true,
        options: of([
          {
            id: "1",
            name: "dis 1",
            data: {
              info: "number 1",
            },
          },
          {
            id: "2",
            name: "dis 2",
            data: {
              info: "number 2",
            },
          },
          {
            id: "3",
            name: "dis 3",
            data: {
              info: "number 3",
            },
          },
        ]),
        //choiceTemplate: template,
      }),
      new InputChoices({
        key: "InputChoices",
        label: "tasks.form.add.InputChoices-No-multi",
        class: "pb-2",
        multiple: false,
        options: of([
          {
            id: "1",
            name: "dis 1",
            data: {
              info: "number 1",
            },
          },
          {
            id: "2",
            name: "dis 2",
            data: {
              info: "number 2",
            },
          },
          {
            id: "3",
            name: "dis 3",
            data: {
              info: "number 3",
            },
          },
        ]),
        //choiceTemplate: template,
      }),
      new InputDropdown({
        key: "InputDropdown",
        label: "tasks.form.add.type",
        class: "pb-2",
        options: of([
          {
            id: "1",
            name: "number 1",
          },
          {
            id: "2",
            name: "number 2",
          },
          {
            id: "3",
            name: "number 3",
          },
        ]),
      }),
      new InputTextBox({
        key: "InputTextBox",
        label: "tasks.form.add.title",
        class: "pb-2",
      }),
      new InputTextarea({
        key: "InputTextarea",
        label: "tasks.form.add.description",
        class: "pb-2",
      }),
      new InputDatePicker({
        key: "InputDatePicker",
        label: "tasks.form.add.deadline",
        minDate: "today",
      }),
      new InputSchema({
        key: "InputSchema",
        label: "InputSchema",
      }),
    ],
  }),
];
