import { GraphSchema } from '@ta/server';

import { Address } from './address';
import { ProjectStatus } from './status';
import { Tenant } from './tenant';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  projectAddress: Address;
  tenantInformation: Tenant;
  projectPictureUrl: string;
}

export const projectProps = new GraphSchema<Project>([
  'id',
  'name',
  'status',
  'projectAddress',
  'tenantInformation',
  'projectPictureUrl',
]);
