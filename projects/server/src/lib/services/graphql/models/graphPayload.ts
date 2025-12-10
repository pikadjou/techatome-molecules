import { TypedDocumentNode } from "apollo-angular";

type WhereType = {
  [index: string]:
    | WhereType
    | WhereType[]
    | { [op: string]: string | number | boolean | null };
};

export interface GraphQueryInput {
  props: string;
  where?: WhereType;
}
export interface GraphQueryPayload {
  query: any;
  variables: any;
}

export interface GraphMutationPayload {
  mutation: TypedDocumentNode<unknown, unknown>;
  variables: any;
}
