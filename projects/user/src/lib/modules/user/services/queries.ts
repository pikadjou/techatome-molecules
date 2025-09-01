import { Apollo_gql, GraphQueryPayload } from 'projects/server/dist';

import { UserProfileProps } from './dto/user-profile';

export function userInfo(): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query UserInfo {
          userInfo {
            ${UserProfileProps.get('id')}
            ${UserProfileProps.get('firstname')}
            ${UserProfileProps.get('lastname')}
            ${UserProfileProps.get('email')}
            ${UserProfileProps.get('picture')}
          }
        }
      `,
    variables: {},
  };
}
