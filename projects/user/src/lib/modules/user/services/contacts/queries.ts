import { Apollo_gql, GraphQueryPayload, graphQlTake } from '@ta/server';

export function GET_CONTACTS(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query Contacts {
          contacts(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_CONTACTS_LIGHT(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query Contacts {
          contactsLight(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_SEARCH_CONTACTS(filter: string, props: string, order: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
    query Contacts {
        searchContactsLight(${order}, filter: "${filter}", ${graphQlTake()}) {
            totalCount
            items {
                ${props}
            }
        }
    }
    `,
    variables: {},
  };
}
