import { BaseStrapi, baseStrapiProps, GraphSchema } from '@ta/server';

export enum EAgreementsType {
  ms = 'ms',
  mp = 'mp',
  fs = 'fs',
  fp = 'fp',
}
export interface Agreement extends BaseStrapi {
  key: string;
  ms: string;
  mp: string;
  fs: string;
  fp: string;
}
const props: (keyof Agreement)[] = ['key', 'ms', 'mp', 'fs', 'fp'];

export const agreementProps = new GraphSchema<Agreement>(props.concat(baseStrapiProps));
