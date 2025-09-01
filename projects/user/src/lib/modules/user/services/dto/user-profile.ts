import { GraphSchema } from '@ta/server';

export interface UserProfile {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  picture: string;
}

export const UserProfileProps = new GraphSchema<UserProfile>(['id', 'firstname', 'lastname', 'email', 'picture']);
