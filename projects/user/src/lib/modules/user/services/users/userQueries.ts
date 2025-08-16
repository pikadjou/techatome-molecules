import { Apollo_gql, GraphQueryPayload, graphQlTake } from '@camelot/server';

import { functionProps } from './dto/function';
import { tenantInformationsProps } from './dto/tenantInformation';
import { userProps } from './dto/user';

export function GET_USER_BY_ID(id: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query GetUserById($id: UUID!) {
          userById(id: $id) {
              ${userProps.get('id')}
              ${userProps.get('userName')}
              ${userProps.get('firstName')}
              ${userProps.get('lastName')}
              ${userProps.get('phoneNumber')}
              ${userProps.get('isCompany')}
              ${userProps.get('culture')}
              ${userProps.get('trigram')}
              ${userProps.get('picture')}
              ${userProps.get('functions')} {
                ${functionProps.get('id')}
                ${functionProps.get('name')}
              }
            }
          }
      `,
    variables: {
      id: id,
    },
  };
}

export function GET_CURRENT_USER(): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query GetCurrentUser {
          currentUser {
            ${userProps.get('id')}
            ${userProps.get('userName')}
            ${userProps.get('firstName')}
            ${userProps.get('lastName')}
            ${userProps.get('phoneNumber')}
            ${userProps.get('isCompany')}
            ${userProps.get('culture')}
            ${userProps.get('trigram')}
            ${userProps.get('picture')}
            ${userProps.get('tenantInformations')} {
              ${tenantInformationsProps.get('customerId')}
              ${tenantInformationsProps.get('tenantId')}
              ${tenantInformationsProps.get('tenantName')}
            }
          }
        }
      `,
    variables: {},
  };
}

export function GET_USERS(where: string, props: string, order: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query Users {
        users(${order}, ${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
    variables: {},
  };
}

export function GET_FUNCTIONS(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query Functions {
        functions(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
    variables: {},
  };
}

export function GET_ROLES(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query Roles {
        roles(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
    variables: {},
  };
}

export function GET_USERS_CUSTOMERS(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query UsersCustomers {
        usersCustomers(${where}, ${graphQlTake()}) {
          items {
            ${props}
          }
        }
      }
    `,
    variables: {},
  };
}

export function GET_SEARCH_USERS_CUSTOMERS(filter: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
    query UsersCustomers {
        searchUsersCustomers(filter: "${filter}", ${graphQlTake()}) {
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

export function GET_MY_CONTACTS(): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query MyContacts {
        myContacts
      }
    `,
    variables: {},
  };
}

export function GET_CONTACT_TENANT_ROUTE(contactId: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
        query ContactTenantRoute($contactId: UUID!) {
          contactTenantRoute(contactId: $contactId)
        }
      `,
    variables: {
      contactId: contactId,
    },
  };
}
