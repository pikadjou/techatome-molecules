import { Apollo_gql, GraphQueryInput, GraphQueryPayload } from "@ta/server";

export function userInfo({ props }: GraphQueryInput): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query UserInfo {
          userInfo {
            ${props}
          }
        }
      `,
    variables: {},
  };
}
