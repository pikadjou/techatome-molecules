import { GraphSchema } from '@ta/server';

import { Role } from './role';

export interface Function {
  id: string;
  name: string;
  tenantId: number;
  roles: Role[];
}

export interface FunctionCreationPayload {
  name: string;
  roleIds: string[];
}

export interface FunctionModifierPayload {
  id: string;
  name: string;
  roleIds: string[];
}

export const functionProps = new GraphSchema<Function>(['id', 'name', 'tenantId', 'roles']);
