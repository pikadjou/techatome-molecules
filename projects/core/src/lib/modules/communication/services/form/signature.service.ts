import { Injectable } from '@angular/core';

import { graphQlUpdateFields } from '@camelot/server';

export enum ESignatureFormFields {
  mailSignature = 'mailSignature',
}

@Injectable({
  providedIn: 'root',
})
export class CamSignaturesFormService {
  public formatForm(data: any) {
    return {
      mailSignature: data[ESignatureFormFields.mailSignature]
        ? JSON.stringify(data[ESignatureFormFields.mailSignature])
        : '',
    };
  }

  public formatUpdateForm(data: any) {
    return {
      ...{
        mailSignature: data[ESignatureFormFields.mailSignature]
          ? JSON.stringify(data[ESignatureFormFields.mailSignature])
          : '',
      },
      ...graphQlUpdateFields(data),
    };
  }
}
