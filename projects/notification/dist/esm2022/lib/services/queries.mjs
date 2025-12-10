import { Apollo_gql, graphQlPaginationFields, graphQlTake, keyValueProps, } from "@ta/server";
import { isNonNullable } from "@ta/utils";
import { notificationProps } from "./dto/notification";
export function GET_NOTIFICATIONS(filters) {
    const where = computeFilters(filters);
    return {
        query: Apollo_gql `
    query Notifications {
        notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
            items {
              ${notificationProps.get("id")}
              ${notificationProps.get("date")}
              ${notificationProps.get("level")}
              ${notificationProps.get("isNew")}
              ${notificationProps.get("userId")}
              ${notificationProps.get("tenantId")}
              ${notificationProps.get("tenantName")}
              ${notificationProps.get("type")}
              ${notificationProps.get("context")} {
                ${keyValueProps.get("key")}
                ${keyValueProps.get("value")}
              }
              ${notificationProps.get("redirectContext")} {
                ${keyValueProps.get("key")}
                ${keyValueProps.get("value")}
              }
            }
        }
    }
      `,
        variables: {},
    };
}
export function GET_NOTIFICATIONS_COUNT(filters) {
    const where = computeFilters(filters);
    return {
        query: Apollo_gql `
      query Notifications {
          notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
              ${graphQlPaginationFields()}
          }
      }
    `,
        variables: {},
    };
}
export function READ_NOTIFICATION(id) {
    return {
        mutation: Apollo_gql `
      mutation NotificationRead($id: UUID!) {
        notificationRead(notificationId: $id) {
            ${notificationProps.get("id")}
            ${notificationProps.get("isNew")}
        }
      }
    `,
        variables: {
            id,
        },
    };
}
function computeFilters(filters) {
    const clause = [];
    if (filters) {
        if (filters.projectId) {
            clause.push(`projectId: { eq: ${filters.projectId} }`);
        }
        if (isNonNullable(filters.isNew)) {
            clause.push(`isNew: { eq: ${filters.isNew} }`);
        }
    }
    return `where: { ${clause.join(",")} }`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsYUFBYSxHQUNkLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRdkQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixPQUEyQjtJQUUzQixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7O3dCQUVHLEtBQUsseUNBQXlDLFdBQVcsQ0FDM0UsT0FBTyxFQUFFLElBQUksQ0FDZDs7Z0JBRVcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDM0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDakMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDbkMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztrQkFDOUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7a0JBQ3hCLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztnQkFFNUIsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2tCQUN0QyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztrQkFDeEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Ozs7O09BS3JDO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsT0FBMkI7SUFFM0IsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOzswQkFFSyxLQUFLLHlDQUF5QyxXQUFXLENBQzdFLE9BQU8sRUFBRSxJQUFJLENBQ2Q7Z0JBQ1csdUJBQXVCLEVBQUU7OztLQUdwQztRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUMxQyxPQUFPO1FBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQTs7O2NBR1YsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztjQUMzQixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOzs7S0FHdkM7UUFDRCxTQUFTLEVBQUU7WUFDVCxFQUFFO1NBQ0g7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE9BQTJCO0lBQ2pELE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ1osSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBvbGxvX2dxbCxcbiAgR3JhcGhNdXRhdGlvblBheWxvYWQsXG4gIEdyYXBoUXVlcnlQYXlsb2FkLFxuICBncmFwaFFsUGFnaW5hdGlvbkZpZWxkcyxcbiAgZ3JhcGhRbFRha2UsXG4gIGtleVZhbHVlUHJvcHMsXG59IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBub3RpZmljYXRpb25Qcm9wcyB9IGZyb20gXCIuL2R0by9ub3RpZmljYXRpb25cIjtcblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRmlsdGVyID0ge1xuICBwcm9qZWN0SWQ/OiBzdHJpbmc7XG4gIGlzTmV3PzogYm9vbGVhbiB8IG51bGw7XG4gIHRha2U/OiBudW1iZXIgfCBudWxsO1xufSB8IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfTk9USUZJQ0FUSU9OUyhcbiAgZmlsdGVyczogTm90aWZpY2F0aW9uRmlsdGVyXG4pOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIGNvbnN0IHdoZXJlID0gY29tcHV0ZUZpbHRlcnMoZmlsdGVycyk7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgcXVlcnkgTm90aWZpY2F0aW9ucyB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnMoJHt3aGVyZX0sIG9yZGVyOiB7IGlzTmV3OiBERVNDLCBkYXRlOiBERVNDIH0sICR7Z3JhcGhRbFRha2UoXG4gICAgICBmaWx0ZXJzPy50YWtlXG4gICAgKX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoXCJkYXRlXCIpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldChcImxldmVsXCIpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldChcImlzTmV3XCIpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldChcInVzZXJJZFwiKX1cbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoXCJ0ZW5hbnRJZFwiKX1cbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoXCJ0ZW5hbnROYW1lXCIpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldChcInR5cGVcIil9XG4gICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KFwiY29udGV4dFwiKX0ge1xuICAgICAgICAgICAgICAgICR7a2V5VmFsdWVQcm9wcy5nZXQoXCJrZXlcIil9XG4gICAgICAgICAgICAgICAgJHtrZXlWYWx1ZVByb3BzLmdldChcInZhbHVlXCIpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KFwicmVkaXJlY3RDb250ZXh0XCIpfSB7XG4gICAgICAgICAgICAgICAgJHtrZXlWYWx1ZVByb3BzLmdldChcImtleVwiKX1cbiAgICAgICAgICAgICAgICAke2tleVZhbHVlUHJvcHMuZ2V0KFwidmFsdWVcIil9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdFVF9OT1RJRklDQVRJT05TX0NPVU5UKFxuICBmaWx0ZXJzOiBOb3RpZmljYXRpb25GaWx0ZXJcbik6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgY29uc3Qgd2hlcmUgPSBjb21wdXRlRmlsdGVycyhmaWx0ZXJzKTtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgIHF1ZXJ5IE5vdGlmaWNhdGlvbnMge1xuICAgICAgICAgIG5vdGlmaWNhdGlvbnMoJHt3aGVyZX0sIG9yZGVyOiB7IGlzTmV3OiBERVNDLCBkYXRlOiBERVNDIH0sICR7Z3JhcGhRbFRha2UoXG4gICAgICBmaWx0ZXJzPy50YWtlXG4gICAgKX0pIHtcbiAgICAgICAgICAgICAgJHtncmFwaFFsUGFnaW5hdGlvbkZpZWxkcygpfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge30sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSRUFEX05PVElGSUNBVElPTihpZDogc3RyaW5nKTogR3JhcGhNdXRhdGlvblBheWxvYWQge1xuICByZXR1cm4ge1xuICAgIG11dGF0aW9uOiBBcG9sbG9fZ3FsYFxuICAgICAgbXV0YXRpb24gTm90aWZpY2F0aW9uUmVhZCgkaWQ6IFVVSUQhKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvblJlYWQobm90aWZpY2F0aW9uSWQ6ICRpZCkge1xuICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KFwiaXNOZXdcIil9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUZpbHRlcnMoZmlsdGVyczogTm90aWZpY2F0aW9uRmlsdGVyKTogc3RyaW5nIHtcbiAgY29uc3QgY2xhdXNlOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAoZmlsdGVycykge1xuICAgIGlmIChmaWx0ZXJzLnByb2plY3RJZCkge1xuICAgICAgY2xhdXNlLnB1c2goYHByb2plY3RJZDogeyBlcTogJHtmaWx0ZXJzLnByb2plY3RJZH0gfWApO1xuICAgIH1cbiAgICBpZiAoaXNOb25OdWxsYWJsZShmaWx0ZXJzLmlzTmV3KSkge1xuICAgICAgY2xhdXNlLnB1c2goYGlzTmV3OiB7IGVxOiAke2ZpbHRlcnMuaXNOZXd9IH1gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYHdoZXJlOiB7ICR7Y2xhdXNlLmpvaW4oXCIsXCIpfSB9YDtcbn1cbiJdfQ==