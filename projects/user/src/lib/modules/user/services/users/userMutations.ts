import { GraphMutationPayload } from '@ta/server';
import { gql } from 'apollo-angular';

import { FunctionCreationPayload, FunctionModifierPayload, functionProps } from './dto/function';
import { ModifyUserPayloadInput } from './dto/modifyUserPayloadInput';
import { UserFunctionPayload, userProps } from './dto/user';
import { UserAddedPayload } from './dto/userAddedPayload';

export function ADD_USER(userAddedPayload: UserAddedPayload): GraphMutationPayload {
  return {
    mutation: gql`
      mutation AddUser($userAddedPayload: UserAddedPayloadInput!) {
        addUser(userAddedPayload: $userAddedPayload) {
          ${userProps.get('id')}
          ${userProps.get('userName')}
          ${userProps.get('firstName')}
          ${userProps.get('lastName')}
          ${userProps.get('phoneNumber')}
          ${userProps.get('culture')}
          ${userProps.get('trigram')}
          ${userProps.get('picture')}
        }
      }
    `,
    variables: {
      userAddedPayload: userAddedPayload,
    },
  };
}

export function DISABLE_USER(userId: string): GraphMutationPayload {
  return {
    mutation: gql`
      mutation DisableUser($userId: String!) {
        disableUser(userId: $userId)
      }
    `,
    variables: {
      userId: userId,
    },
  };
}

export function DISABLE_CURRENT_USER(): GraphMutationPayload {
  return {
    mutation: gql`
      mutation DisableCurrentUser() {
        disableCurrentUser()
      }
    `,
    variables: {},
  };
}

export function UPDATE_CURRENT_USER(user: ModifyUserPayloadInput): GraphMutationPayload {
  return {
    mutation: gql`
        mutation UpdateCurrentUser($user: ModifyUserPayloadInput!) {
          updateCurrentUser(user: $user) {
            ${userProps.get('firstName')}
            ${userProps.get('lastName')}
            ${userProps.get('phoneNumber')}
            ${userProps.get('picture')}
          }
        }
      `,
    variables: {
      user: user,
    },
  };
}

export function ADD_FUNCTION(functionAddedPayload: FunctionCreationPayload): GraphMutationPayload {
  return {
    mutation: gql`
      mutation AddFunction($functionAddedPayload: AddFunctionPayloadInput!) {
        addFunction(payload: $functionAddedPayload) {
          ${functionProps.get('id')}
        }
      }
    `,
    variables: {
      functionAddedPayload: functionAddedPayload,
    },
  };
}

export function UPDATE_FUNCTION(functionModifierPayload: Partial<FunctionModifierPayload>): GraphMutationPayload {
  return {
    mutation: gql`
        mutation UpdateFunction($functionModifierPayload: ModifyFunctionPayloadInput!) {
          updateFunction(payload: $functionModifierPayload) {
            ${functionProps.get('id')}
          }
        }
      `,
    variables: {
      functionModifierPayload: functionModifierPayload,
    },
  };
}

export function ADD_FUNCTION_TO_USER(payload: UserFunctionPayload): GraphMutationPayload {
  return {
    mutation: gql`
      mutation AddFunctionToUser($payload: UserFunctionPayloadInput!) {
        addFunctionToUser(payload: $payload) {
          userId
        }
      }
    `,
    variables: {
      payload,
    },
  };
}

export function REMOVE_FUNCTION_FROM_USER(payload: UserFunctionPayload): GraphMutationPayload {
  return {
    mutation: gql`
      mutation RemoveFunctionFromUser($payload: UserFunctionPayloadInput!) {
        removeFunctionFromUser(payload: $payload)
      }
    `,
    variables: {
      payload,
    },
  };
}
