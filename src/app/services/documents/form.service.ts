import { inject, Injectable } from '@angular/core';
import { InputCheckBox, InputDropdown, InputPanel, InputTextBox, InputWysiswyg } from '@ta/form-model';

import { convertBlocksToHtml } from '@ta/wysiswyg';
import { CategoriesService } from '../categories/categories.service';
import { filter, map } from 'rxjs/operators';
import { isNonNullable } from '@ta/utils';
import { Document, PostDocument } from './dto/document';
import { of } from 'rxjs';
import { EAgreementsType } from '../agreements/dto/agreement';
import { Agreement, AgreementType, Replace, Section } from './helpers';
import { Agreement as AgreementDto } from '../agreements/dto/agreement';
import { organiseCategories } from '../categories/helpers';
import { DocumentFormData, FormatFormData } from '../shared/types/form-data.types';

const separatorFields = '###';

enum EFormDocumentFields {
  title = 'title',
  content = 'content',
  category = 'category',
}
@Injectable({
  providedIn: 'root',
})
export class FormDocumentsService {
  private readonly _categoriesService = inject(CategoriesService);

  constructor() {
    this._categoriesService.fetchAllCategories$().subscribe();
  }

  public getFormDocument(defaultCat: string| null ,doc?: Document) {
    return [
      new InputPanel({
        key: 'panel',
        label: 'Mon document',
        children: [
          new InputTextBox({
            key: EFormDocumentFields.title,
            label: 'Titre',
            value: doc?.title,
          }),
          new InputDropdown({
            key: EFormDocumentFields.category,
            label: 'Catégorie',
            options: this._categoriesService.allCategories.get$().pipe(
              filter(isNonNullable),
              map(organiseCategories),
              map((categories) =>
                categories.map((category) => ({ id: category.documentId ?? '', name: category.name })),
              ),
            ),
            showNothingOption: true,
            withSearch: false,
            value: doc?.category?.documentId ?? defaultCat,
          }),
          new InputWysiswyg({
            key: EFormDocumentFields.content,
            label: 'Contenu',
            value: doc?.blockContent,
          }),
        ],
      }),
    ];
  }

  public formatFormDocument(data: DocumentFormData): PostDocument {
    return {
      title: data[EFormDocumentFields.title],
      content: data[EFormDocumentFields.content] ? convertBlocksToHtml(data[EFormDocumentFields.content]).join('') : '',
      blockContent: data[EFormDocumentFields.content],
      category: data[EFormDocumentFields.category] as any,
      agreements: [],
    };
  }

  public getFormFormat(sections: string[], replaces: string[], agreements: string[], agreementValue: AgreementDto[]) {
    return [
      new InputPanel({
        key: 'sections',
        label: 'Activer les sections',
        children: sections.map(
          (section) =>
            new InputCheckBox({
              key: `section${separatorFields}${section}`,
              label: section,
              toggle: true
            }),
        ),
        visible$: of(sections.length > 0),
      }),
      new InputPanel({
        key: 'replaces',
        label: 'Remplacer les variables',
        children: replaces.map(
          (replace) =>
            new InputTextBox({
              key: `replace${separatorFields}${replace}`,
              label: replace,
            }),
        ),
        visible$: of(replaces.length > 0),
      }),
      new InputDropdown({
        key: 'agreementType',
        label: 'Choix des accords',
        options: of([
          { id: 'ms', name: 'Masculin singulier' },
          { id: 'fs', name: 'Féminin singulier' },
          { id: 'mp', name: 'Masculin pluriel' },
          { id: 'fp', name: 'Féminin pluriel' },
        ]),
      }),
      new InputPanel({
        key: 'agreements',
        label: 'Gerer les accords',
        children: agreements.map(
          (agreement) =>
            new InputPanel({
              key: agreement,
              label: agreement,
              contentClass: 'grid',
              children: [
                new InputTextBox({
                  class: 'g-col-6',
                  key: `agreement${separatorFields}${agreement}${separatorFields}${EAgreementsType.ms}`,
                  label: 'Masculin singulier',
                  value: agreementValue.find((ag) => ag.key === agreement)?.ms,
                }),
                new InputTextBox({
                  class: 'g-col-6',
                  key: `agreement${separatorFields}${agreement}${separatorFields}${EAgreementsType.fs}`,
                  label: 'Féminin singulier',
                  value: agreementValue.find((ag) => ag.key === agreement)?.fs,
                }),
                new InputTextBox({
                  class: 'g-col-6',
                  key: `agreement${separatorFields}${agreement}${separatorFields}${EAgreementsType.mp}`,
                  label: 'Masculin pluriel',
                  value: agreementValue.find((ag) => ag.key === agreement)?.mp,
                }),
                new InputTextBox({
                  class: 'g-col-6',
                  key: `agreement${separatorFields}${agreement}${separatorFields}${EAgreementsType.fp}`,
                  label: 'Féminin pluriel',
                  value: agreementValue.find((ag) => ag.key === agreement)?.fp,
                }),
              ],
            }),
        ),
        visible$: of(agreements.length > 0),
      }),
    ];
  }

  public formatFormFormat(data: FormatFormData): {
    sections: Section[];
    replaces: Replace[];
    agreements: Agreement[];
    selectedAgreementType: AgreementType;
  } {
    const extract = (scope: string) =>
      Object.keys(data)
        .map((index) => {
          const [type, key] = index.split(separatorFields);

          return { type, key, index };
        })
        .filter(({ type }) => type === scope);

    return {
      sections: extract('section').map(({ key, index }) => ({
        key,
        show: typeof data[index] === 'boolean' ? data[index] : false,
      })),
      replaces: extract('replace').map(({ key, index }) => ({
        key,
        value: typeof data[index] === 'string' ? data[index] : '',
      })),
      agreements: extract('agreement').reduce<Agreement[]>((acc, { key, type }) => {
        acc.push({
          key,
          value: {
            ms: (typeof data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.ms}`] === 'string' ? data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.ms}`] : null) as string | null,
            fs: (typeof data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.fs}`] === 'string' ? data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.fs}`] : null) as string | null,
            mp: (typeof data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.mp}`] === 'string' ? data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.mp}`] : null) as string | null,
            fp: (typeof data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.fp}`] === 'string' ? data[`${type}${separatorFields}${key}${separatorFields}${EAgreementsType.fp}`] : null) as string | null,
          },
        });
        return acc;
      }, []),
      selectedAgreementType: data['agreementType'],
    };
  }
}
