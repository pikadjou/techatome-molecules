import { Injectable } from '@angular/core';
import { InputPanel, InputTextBox } from '@ta/form-model';

import { Agreement, EAgreementsType } from './dto/agreement';
import { extractAgreement } from '../documents/helpers';
import { getUniqueArray } from '@ta/utils';
import { Document } from '../documents/dto/document';

const separatorFields = '###';

@Injectable({
  providedIn: 'root',
})
export class FormAgreementsService {
  constructor() {}

  public getFormAgreements(content: string, doc?: Document | null) {
    const agreements = extractAgreement(content);
    const getAgreementValue = (key: string) => doc?.agreements?.find(a => a.key === key);

    return [
      new InputPanel({
        key: 'panel',
        label: 'Mes accords',
        children: agreements.map((agreement) => {
          return new InputPanel({
            key: agreement.key,
            label: agreement.key,
            contentClass: 'grid',
            children: [
              new InputTextBox({
                class: 'g-col-6',
                key: `${agreement.key}${separatorFields}${EAgreementsType.ms}`,
                label: 'Masculin singulier',
                value: getAgreementValue(agreement.key)?.ms
              }),
              new InputTextBox({
                class: 'g-col-6',
                key: `${agreement.key}${separatorFields}${EAgreementsType.fs}`,
                label: 'Féminin singulier',
                value: getAgreementValue(agreement.key)?.fs
              }),
              new InputTextBox({
                class: 'g-col-6',
                key: `${agreement.key}${separatorFields}${EAgreementsType.mp}`,
                label: 'Masculin pluriel',
                value: getAgreementValue(agreement.key)?.mp
              }),
              new InputTextBox({
                class: 'g-col-6',
                key: `${agreement.key}${separatorFields}${EAgreementsType.fp}`,
                label: 'Féminin pluriel',
                value: getAgreementValue(agreement.key)?.fp
              }),
            ],
          });
        }),
      }),
    ];
  }

  public formatFormAgreements(data: any): Agreement[] {
    return getUniqueArray(Object.keys(data).map((keys) => keys.split(separatorFields)[0])).reduce<Agreement[]>(
      (acc, key) => {
        acc.push({
          key,
          ms: data[`${key}${separatorFields}${EAgreementsType.ms}`],
          fs: data[`${key}${separatorFields}${EAgreementsType.fs}`],
          mp: data[`${key}${separatorFields}${EAgreementsType.mp}`],
          fp: data[`${key}${separatorFields}${EAgreementsType.fp}`],
        });
        return acc;
      },
      [],
    );
  }
}
