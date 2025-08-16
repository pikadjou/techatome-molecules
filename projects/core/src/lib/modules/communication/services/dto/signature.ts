import { GraphSchema } from '@camelot/server';
import { WysiswgBlockData } from '@camelot/wysiswyg';

export interface Signature {
  id: string;
  userId: string;
  mailSignature: string;
}

export interface SignatureExtended extends Signature {
  blocks?: WysiswgBlockData[] | null;
}

export interface CreateUserSignaturePayloadInput {
  mailSignature: string;
}

export interface UpdateUserSignaturePayloadInput {
  mailSignature: string;
  updatedFields: string[];
}

export const signatureProps = new GraphSchema<Signature>(['id', 'userId', 'mailSignature']);
