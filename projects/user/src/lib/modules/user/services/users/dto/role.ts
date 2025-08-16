import { GraphSchema } from '@camelot/server';

export interface Role {
  id: string;
  name: string;
}

export const roleProps = new GraphSchema<Role>(['id', 'name']);
