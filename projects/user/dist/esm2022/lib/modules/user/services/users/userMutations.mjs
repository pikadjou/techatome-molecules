import { gql } from 'apollo-angular';
import { functionProps } from './dto/function';
import { userProps } from './dto/user';
export function ADD_USER(userAddedPayload) {
    return {
        mutation: gql `
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
export function DISABLE_USER(userId) {
    return {
        mutation: gql `
      mutation DisableUser($userId: String!) {
        disableUser(userId: $userId)
      }
    `,
        variables: {
            userId: userId,
        },
    };
}
export function DISABLE_CURRENT_USER() {
    return {
        mutation: gql `
      mutation DisableCurrentUser() {
        disableCurrentUser()
      }
    `,
        variables: {},
    };
}
export function UPDATE_CURRENT_USER(user) {
    return {
        mutation: gql `
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
export function ADD_FUNCTION(functionAddedPayload) {
    return {
        mutation: gql `
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
export function UPDATE_FUNCTION(functionModifierPayload) {
    return {
        mutation: gql `
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
export function ADD_FUNCTION_TO_USER(payload) {
    return {
        mutation: gql `
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
export function REMOVE_FUNCTION_FROM_USER(payload) {
    return {
        mutation: gql `
      mutation RemoveFunctionFromUser($payload: UserFunctionPayloadInput!) {
        removeFunctionFromUser(payload: $payload)
      }
    `,
        variables: {
            payload,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck11dGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3VzZXJzL3VzZXJNdXRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBb0QsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakcsT0FBTyxFQUF1QixTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHNUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxnQkFBa0M7SUFDekQsT0FBTztRQUNMLFFBQVEsRUFBRSxHQUFHLENBQUE7OztZQUdMLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ25CLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzFCLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3hCLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3hCLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDOzs7S0FHL0I7UUFDRCxTQUFTLEVBQUU7WUFDVCxnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBYztJQUN6QyxPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQTs7OztLQUlaO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07U0FDZjtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQTs7OztLQUlaO1FBQ0QsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUE0QjtJQUM5RCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQTs7O2NBR0gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Y0FDMUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Y0FDekIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Y0FDNUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7OztPQUcvQjtRQUNILFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxJQUFJO1NBQ1g7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsb0JBQTZDO0lBQ3hFLE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFBOzs7WUFHTCxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzs7O0tBRzlCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLEVBQUUsb0JBQW9CO1NBQzNDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLHVCQUF5RDtJQUN2RixPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQTs7O2NBR0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7OztPQUc5QjtRQUNILFNBQVMsRUFBRTtZQUNULHVCQUF1QixFQUFFLHVCQUF1QjtTQUNqRDtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQTRCO0lBQy9ELE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFBOzs7Ozs7S0FNWjtRQUNELFNBQVMsRUFBRTtZQUNULE9BQU87U0FDUjtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE9BQTRCO0lBQ3BFLE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFBOzs7O0tBSVo7UUFDRCxTQUFTLEVBQUU7WUFDVCxPQUFPO1NBQ1I7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoTXV0YXRpb25QYXlsb2FkIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5cbmltcG9ydCB7IEZ1bmN0aW9uQ3JlYXRpb25QYXlsb2FkLCBGdW5jdGlvbk1vZGlmaWVyUGF5bG9hZCwgZnVuY3Rpb25Qcm9wcyB9IGZyb20gJy4vZHRvL2Z1bmN0aW9uJztcbmltcG9ydCB7IE1vZGlmeVVzZXJQYXlsb2FkSW5wdXQgfSBmcm9tICcuL2R0by9tb2RpZnlVc2VyUGF5bG9hZElucHV0JztcbmltcG9ydCB7IFVzZXJGdW5jdGlvblBheWxvYWQsIHVzZXJQcm9wcyB9IGZyb20gJy4vZHRvL3VzZXInO1xuaW1wb3J0IHsgVXNlckFkZGVkUGF5bG9hZCB9IGZyb20gJy4vZHRvL3VzZXJBZGRlZFBheWxvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gQUREX1VTRVIodXNlckFkZGVkUGF5bG9hZDogVXNlckFkZGVkUGF5bG9hZCk6IEdyYXBoTXV0YXRpb25QYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgbXV0YXRpb24gQWRkVXNlcigkdXNlckFkZGVkUGF5bG9hZDogVXNlckFkZGVkUGF5bG9hZElucHV0ISkge1xuICAgICAgICBhZGRVc2VyKHVzZXJBZGRlZFBheWxvYWQ6ICR1c2VyQWRkZWRQYXlsb2FkKSB7XG4gICAgICAgICAgJHt1c2VyUHJvcHMuZ2V0KCdpZCcpfVxuICAgICAgICAgICR7dXNlclByb3BzLmdldCgndXNlck5hbWUnKX1cbiAgICAgICAgICAke3VzZXJQcm9wcy5nZXQoJ2ZpcnN0TmFtZScpfVxuICAgICAgICAgICR7dXNlclByb3BzLmdldCgnbGFzdE5hbWUnKX1cbiAgICAgICAgICAke3VzZXJQcm9wcy5nZXQoJ3Bob25lTnVtYmVyJyl9XG4gICAgICAgICAgJHt1c2VyUHJvcHMuZ2V0KCdjdWx0dXJlJyl9XG4gICAgICAgICAgJHt1c2VyUHJvcHMuZ2V0KCd0cmlncmFtJyl9XG4gICAgICAgICAgJHt1c2VyUHJvcHMuZ2V0KCdwaWN0dXJlJyl9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgdXNlckFkZGVkUGF5bG9hZDogdXNlckFkZGVkUGF5bG9hZCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRElTQUJMRV9VU0VSKHVzZXJJZDogc3RyaW5nKTogR3JhcGhNdXRhdGlvblBheWxvYWQge1xuICByZXR1cm4ge1xuICAgIG11dGF0aW9uOiBncWxgXG4gICAgICBtdXRhdGlvbiBEaXNhYmxlVXNlcigkdXNlcklkOiBTdHJpbmchKSB7XG4gICAgICAgIGRpc2FibGVVc2VyKHVzZXJJZDogJHVzZXJJZClcbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERJU0FCTEVfQ1VSUkVOVF9VU0VSKCk6IEdyYXBoTXV0YXRpb25QYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgbXV0YXRpb24gRGlzYWJsZUN1cnJlbnRVc2VyKCkge1xuICAgICAgICBkaXNhYmxlQ3VycmVudFVzZXIoKVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVQREFURV9DVVJSRU5UX1VTRVIodXNlcjogTW9kaWZ5VXNlclBheWxvYWRJbnB1dCk6IEdyYXBoTXV0YXRpb25QYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICBtdXRhdGlvbiBVcGRhdGVDdXJyZW50VXNlcigkdXNlcjogTW9kaWZ5VXNlclBheWxvYWRJbnB1dCEpIHtcbiAgICAgICAgICB1cGRhdGVDdXJyZW50VXNlcih1c2VyOiAkdXNlcikge1xuICAgICAgICAgICAgJHt1c2VyUHJvcHMuZ2V0KCdmaXJzdE5hbWUnKX1cbiAgICAgICAgICAgICR7dXNlclByb3BzLmdldCgnbGFzdE5hbWUnKX1cbiAgICAgICAgICAgICR7dXNlclByb3BzLmdldCgncGhvbmVOdW1iZXInKX1cbiAgICAgICAgICAgICR7dXNlclByb3BzLmdldCgncGljdHVyZScpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFERF9GVU5DVElPTihmdW5jdGlvbkFkZGVkUGF5bG9hZDogRnVuY3Rpb25DcmVhdGlvblBheWxvYWQpOiBHcmFwaE11dGF0aW9uUGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgIG11dGF0aW9uIEFkZEZ1bmN0aW9uKCRmdW5jdGlvbkFkZGVkUGF5bG9hZDogQWRkRnVuY3Rpb25QYXlsb2FkSW5wdXQhKSB7XG4gICAgICAgIGFkZEZ1bmN0aW9uKHBheWxvYWQ6ICRmdW5jdGlvbkFkZGVkUGF5bG9hZCkge1xuICAgICAgICAgICR7ZnVuY3Rpb25Qcm9wcy5nZXQoJ2lkJyl9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZnVuY3Rpb25BZGRlZFBheWxvYWQ6IGZ1bmN0aW9uQWRkZWRQYXlsb2FkLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVUERBVEVfRlVOQ1RJT04oZnVuY3Rpb25Nb2RpZmllclBheWxvYWQ6IFBhcnRpYWw8RnVuY3Rpb25Nb2RpZmllclBheWxvYWQ+KTogR3JhcGhNdXRhdGlvblBheWxvYWQge1xuICByZXR1cm4ge1xuICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgIG11dGF0aW9uIFVwZGF0ZUZ1bmN0aW9uKCRmdW5jdGlvbk1vZGlmaWVyUGF5bG9hZDogTW9kaWZ5RnVuY3Rpb25QYXlsb2FkSW5wdXQhKSB7XG4gICAgICAgICAgdXBkYXRlRnVuY3Rpb24ocGF5bG9hZDogJGZ1bmN0aW9uTW9kaWZpZXJQYXlsb2FkKSB7XG4gICAgICAgICAgICAke2Z1bmN0aW9uUHJvcHMuZ2V0KCdpZCcpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZ1bmN0aW9uTW9kaWZpZXJQYXlsb2FkOiBmdW5jdGlvbk1vZGlmaWVyUGF5bG9hZCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQUREX0ZVTkNUSU9OX1RPX1VTRVIocGF5bG9hZDogVXNlckZ1bmN0aW9uUGF5bG9hZCk6IEdyYXBoTXV0YXRpb25QYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgbXV0YXRpb24gQWRkRnVuY3Rpb25Ub1VzZXIoJHBheWxvYWQ6IFVzZXJGdW5jdGlvblBheWxvYWRJbnB1dCEpIHtcbiAgICAgICAgYWRkRnVuY3Rpb25Ub1VzZXIocGF5bG9hZDogJHBheWxvYWQpIHtcbiAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBwYXlsb2FkLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSRU1PVkVfRlVOQ1RJT05fRlJPTV9VU0VSKHBheWxvYWQ6IFVzZXJGdW5jdGlvblBheWxvYWQpOiBHcmFwaE11dGF0aW9uUGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgIG11dGF0aW9uIFJlbW92ZUZ1bmN0aW9uRnJvbVVzZXIoJHBheWxvYWQ6IFVzZXJGdW5jdGlvblBheWxvYWRJbnB1dCEpIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb25Gcm9tVXNlcihwYXlsb2FkOiAkcGF5bG9hZClcbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICB9O1xufVxuIl19