import { GraphSchema } from "@ta/server";

export interface TenantApplication {
  id: string;
  estateId: string;
  tenantId: string;
  applicationDate: string;
  status: string;
  applicantName?: string;
  applicantEmail?: string;
  applicantPhone?: string;
  documents?: string[];
}

export const tenantApplicationBrutProps: (keyof TenantApplication)[] = [
  "id",
  "estateId",
  "tenantId",
  "applicationDate",
  "status",
  "applicantName",
  "applicantEmail",
  "applicantPhone",
  "documents",
];

export const tenantApplicationProps = new GraphSchema<TenantApplication>(
  tenantApplicationBrutProps
);
