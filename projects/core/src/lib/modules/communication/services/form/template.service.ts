import { Injectable, inject } from '@angular/core';

import {
  InputCheckBox,
  InputDropdown,
  InputPanel,
  InputTextBox,
  InputTranslation,
  InputUploadValue,
  slugValidator,
} from '@ta/form-model';
import { Culture, DEFAULT_USER_LANGUAGE, extractEnum } from '@ta/utils';
import { convertBlocksToHtml } from '@ta/wysiswyg';
import { of } from 'rxjs';

import { CommunicationType } from '../dto/communication';
import { CreateTemplatePayloadInput } from '../dto/post/template';
import { CreateTemplateVariantPayloadInput } from '../dto/post/template-variation';
import { Template, TemplateVariant } from '../dto/template';

export enum ECommunicationTemplateFormFields {
  active = 'active',
  type = 'type',
  code = 'code',
}

export enum ECommunicationTemplateVariantFormFields {
  translation = 'translation',
  title = 'title',
  body = 'body',
  documentIds = 'documentIds',
}

@Injectable({
  providedIn: 'root',
})
export class CamCommunicationsTemplateFormService {
  readonly defaultLanguage = inject(DEFAULT_USER_LANGUAGE);

  constructor() {}

  public getTemplateForm(template?: Template) {
    return [
      new InputPanel({
        key: 'panel',
        children: [
          new InputCheckBox({
            key: ECommunicationTemplateFormFields.active,
            label: 'communication.form.template.active',
            toggle: true,
            value: template?.isActive,
          }),
          new InputDropdown({
            key: ECommunicationTemplateFormFields.type,
            label: 'communication.form.template.type',
            multiple: false,
            options: of(
              [CommunicationType.Mail, CommunicationType.Chat, CommunicationType.Intern].map(id => ({
                id: id.toString(),
                name: `${CommunicationType[id]}`,
              }))
            ),
            value: template?.communicationType?.toString(),
          }),
          new InputTextBox({
            key: ECommunicationTemplateFormFields.code,
            label: 'communication.form.template.code',
            validators: [slugValidator()],
            value: template?.code,
          }),
        ],
      }),
    ];
  }
  public formatTemplateForm(data: any): CreateTemplatePayloadInput {
    return {
      isActive: data[ECommunicationTemplateFormFields.active],
      code: data[ECommunicationTemplateFormFields.code],
      communicationType: Number(data[ECommunicationTemplateFormFields.type]),
    };
  }

  public getTemplateVariantForm(variants: TemplateVariant[] = []) {
    return [
      new InputPanel({
        key: 'panel',
        children: [
          new InputTranslation({
            key: 'translation',
            label: 'communication.form.template.variation.culture',
            mainCulture: this.defaultLanguage,
            template: [
              {
                type: 'InputTextBox',
                options: {
                  key: ECommunicationTemplateVariantFormFields.title,
                  label: 'communication.form.template.variation.title',
                },
              },
              {
                type: 'InputWysiswyg',
                options: {
                  key: ECommunicationTemplateVariantFormFields.body,
                  label: 'communication.form.template.variation.body',
                },
              },
              {
                type: 'InputUpload',
                options: {
                  key: ECommunicationTemplateVariantFormFields.documentIds,
                },
              },
            ],
            value: variants.reduce<{ [index: string]: any }>((acc, variant) => {
              acc[Culture[variant.culture]] = {
                [ECommunicationTemplateVariantFormFields.title]: variant.title,
                [ECommunicationTemplateVariantFormFields.body]: variant.jsonBodyParsed,
                [ECommunicationTemplateVariantFormFields.documentIds]: variant.documentIds.map(documentId => ({
                  id: documentId,
                })),
              };
              return acc;
            }, {}),
          }),
        ],
      }),
    ];
  }

  public formatTemplatevariantForm(data: any): CreateTemplateVariantPayloadInput[] {
    const keys = Object.keys(data[ECommunicationTemplateVariantFormFields.translation]);
    return keys.map(key => {
      const translation = data[ECommunicationTemplateVariantFormFields.translation][key];

      return {
        title: translation[ECommunicationTemplateVariantFormFields.title],
        body: translation[ECommunicationTemplateVariantFormFields.body]
          ? convertBlocksToHtml(translation[ECommunicationTemplateVariantFormFields.body])
          : '',
        jsonBody: JSON.stringify(translation[ECommunicationTemplateVariantFormFields.body]),
        culture: extractEnum(Culture).find(cul => cul.name === key)?.value ?? Culture.FR_BE,
        documentIds: (translation[ECommunicationTemplateVariantFormFields.documentIds] ?? []).map(
          (doc: InputUploadValue) => doc.id
        ),
      };
    });
  }
}
