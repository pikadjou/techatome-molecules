import { GraphSchema } from "@ta/server";

export interface Tenant {
  id: string;
  tenantName: string;
  projectId: number;
  tenantId?: number;
  customerId?: number;
}

export const tenantProps = new GraphSchema<Tenant>([
  "id",
  "tenantId",
  "tenantName",
  "customerId",
  "projectId",
]);
