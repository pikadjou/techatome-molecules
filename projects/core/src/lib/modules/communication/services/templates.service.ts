import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import {
  CamBaseService,
  GraphEndpoint,
  HandleComplexRequest,
  HandleSimpleRequest,
  KeyValue,
  graphQlUpdateFields,
} from '@camelot/server';

import { CommunicationType } from './dto/communication';
import {
  CreateTemplatePayloadInput,
  UpdateTemplatePayloadInput,
} from './dto/post/template';
import {
  CreateTemplateVariantPayloadInput,
  UpdateTemplateVariantPayloadInput,
} from './dto/post/template-variation';
import { Template, templateProps, templateVariantProps } from './dto/template';
import {
  CREATE_TEMPLATE,
  CREATE_VARIANT,
  UPDATE_TEMPLATE,
  UPDATE_VARIANT,
} from './mutations';
import {
  GET_TEMPLATES,
  GET_availableTemplateKeys,
  GET_previewTemplate,
} from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'communicationService',
  endpoint: 'communication',
};

@Injectable({
  providedIn: 'root',
})
export class CamCommunicationsTemplatesService extends CamBaseService {
  public communicationTemplates = new HandleSimpleRequest<Template[]>();
  public communicationTemplate = new HandleComplexRequest<Template>();
  public communicationTemplatesByComminucationType = new HandleComplexRequest<
    Template[]
  >();
  public templateKeys = new HandleSimpleRequest<string[]>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchConversationTemplatesByComminucationType$(
    communicationType: CommunicationType
  ) {
    return this.communicationTemplatesByComminucationType.fetch(
      communicationType.toString(),
      this._graphService
        .fetchPagedQueryList<Template>(
          GET_TEMPLATES(
            `where: { communicationType: { eq: ${communicationType} }, isActive: { eq: true } }`,
            `
              ${templateProps.get('id')}
              ${templateProps.get('isActive')}
              ${templateProps.get('code')}
              ${templateProps.get('communicationType')}
              ${templateProps.get('availableCultures')}
              ${templateProps.get('variants')} {
                ${templateVariantProps.get('id')}
                ${templateVariantProps.get('title')}
                ${templateVariantProps.get('body')}
                ${templateVariantProps.get('jsonBody')}
                ${templateVariantProps.get('culture')}
                ${templateVariantProps.get('documentIds')}
              }
            `
          ),
          'templates',
          graphEndpoint.clientName
        )
        .pipe(map((data) => this._convertJsonBody(data.items ?? [])))
    );
  }
  public fetchConversationTemplates$() {
    return this.communicationTemplates.fetch(
      this._graphService
        .fetchPagedQueryList<Template>(
          GET_TEMPLATES(
            ``,
            `
              ${templateProps.get('id')}
              ${templateProps.get('isActive')}
              ${templateProps.get('code')}
              ${templateProps.get('communicationType')}
              ${templateProps.get('availableCultures')}
              ${templateProps.get('variants')} {
                ${templateVariantProps.get('id')}
                ${templateVariantProps.get('title')}
                ${templateVariantProps.get('body')}
                ${templateVariantProps.get('jsonBody')}
                ${templateVariantProps.get('culture')}
              }
            `
          ),
          'templates',
          graphEndpoint.clientName
        )
        .pipe(map((data) => this._convertJsonBody(data.items ?? [])))
    );
  }

  public fetchConversationTemplate$(id: string) {
    return this.communicationTemplate.fetch(
      id,
      this._graphService
        .fetchPagedQueryList<Template>(
          GET_TEMPLATES(
            `where: { id: { eq: "${id}" } }`,
            `
              ${templateProps.get('id')}
              ${templateProps.get('isActive')}
              ${templateProps.get('code')}
              ${templateProps.get('communicationType')}
              ${templateProps.get('availableCultures')}
              ${templateProps.get('variants')} {
                ${templateVariantProps.get('id')}
                ${templateVariantProps.get('title')}
                ${templateVariantProps.get('body')}
                ${templateVariantProps.get('jsonBody')}
                ${templateVariantProps.get('culture')}
                ${templateVariantProps.get('documentIds')}
              }
            `
          ),
          'templates',
          graphEndpoint.clientName
        )
        .pipe(map((data) => this._convertJsonBody(data.items ?? [])[0]))
    );
  }

  public fetchConversationTemplateKeys$() {
    return this.templateKeys.fetch(
      this._graphService.fetchQuery<string[]>(
        GET_availableTemplateKeys(),
        'availableTemplateKeys',
        graphEndpoint.clientName
      )
    );
  }

  public previewConversationTemplate$(
    template: string,
    contextIds: KeyValue[]
  ) {
    return this._graphService.fetchQuery<string>(
      GET_previewTemplate(template, contextIds),
      'previewTemplate',
      graphEndpoint.clientName
    );
  }

  public createTemplate$(template: CreateTemplatePayloadInput) {
    return this._graphService.mutate<Template>(
      CREATE_TEMPLATE(template),
      'createTemplate',
      graphEndpoint.clientName,
      ['templates']
    );
  }

  public updateTemplate$(template: UpdateTemplatePayloadInput) {
    return this._graphService.mutate<Template>(
      UPDATE_TEMPLATE({ ...template, ...graphQlUpdateFields(template) }),
      'updateTemplate',
      graphEndpoint.clientName,
      ['templates']
    );
  }

  public createVariants$(variant: CreateTemplateVariantPayloadInput) {
    return this._graphService.mutate<Template>(
      CREATE_VARIANT(variant),
      'createTemplateVariant',
      graphEndpoint.clientName,
      ['templates']
    );
  }

  public updateVariants$(variant: UpdateTemplateVariantPayloadInput) {
    return this._graphService.mutate<Template>(
      UPDATE_VARIANT({ ...variant, ...graphQlUpdateFields(variant) }),
      'updateTemplateVariant',
      graphEndpoint.clientName,
      ['templates']
    );
  }

  private _convertJsonBody(templates: Template[]) {
    return templates.map((template) => ({
      ...template,
      ...{
        variants: template.variants.map((variant) => ({
          ...variant,
          ...{ jsonBodyParsed: JSON.parse(variant.jsonBody) ?? null },
        })),
      },
    }));
  }
}
