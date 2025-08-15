export interface DocumentFormData {
  title: string;
  content: any; // EditorJS blocks
  category: string;
}

export interface CategoryFormData {
  name: string;
  description?: string;
}

export interface FormatFormData {
  [key: string]: string | boolean;
  agreementType: 'ms' | 'fs' | 'mp' | 'fp';
}

export interface AgreementFormData {
  [agreementKey: string]: {
    ms: string;
    fs: string;
    mp: string;
    fp: string;
  };
}