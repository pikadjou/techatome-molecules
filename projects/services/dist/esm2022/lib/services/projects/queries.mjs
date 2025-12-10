import { Apollo_gql, graphQlPaginationFields, graphQlTake, } from "@ta/server";
import { addressProps } from "./dto/address";
import { projectProps } from "./dto/project";
import { tenantProps } from "./dto/tenant";
export function GET_MY_PROJECTS(filters) {
    const where = filters?.statusList && filters.statusList.length > 0
        ? `where: { status: { in: [${filters.statusList}] } }`
        : "";
    return {
        query: Apollo_gql `
        query Projects {
          projects(${graphQlTake(filters?.take)}, ${where}) {
            items {
              ${projectProps.get("id")}
              ${projectProps.get("name")}
              ${projectProps.get("status")}
              ${projectProps.get("projectPictureUrl")}
              ${projectProps.get("projectAddress")} {
                ${addressProps.get("city")}
                ${addressProps.get("postCode")}
                ${addressProps.get("street")}
              }
              ${projectProps.get("tenantInformation")} {
                ${tenantProps.get("id")}
                ${tenantProps.get("tenantName")}
                ${tenantProps.get("projectId")}
              }
            }
            ${filters?.take ? graphQlPaginationFields() : ""}
          }
        }
      `,
        variables: {},
    };
}
export function GET_PROJECT_BY_ID(id) {
    return {
        query: Apollo_gql `
        query GetProjectById($id: UUID!) {
          projectById(id: $id) {
            ${projectProps.get("id")}
            ${projectProps.get("name")}
            ${projectProps.get("status")}
            ${projectProps.get("projectPictureUrl")}
            ${projectProps.get("projectAddress")} {
              ${addressProps.get("city")}
              ${addressProps.get("postCode")}
              ${addressProps.get("street")}
            }
            ${projectProps.get("tenantInformation")} {
              ${tenantProps.get("id")}
              ${tenantProps.get("tenantName")}
              ${tenantProps.get("projectId")}
            }
          }
        }
      `,
        variables: {
            id: id,
        },
    };
}
export function GET_LIGHT_PROJECTS(ids) {
    return {
        query: Apollo_gql `
        query Projects($ids: [UUID]!) {
         projects(where: { id: { in: $ids } }, ${graphQlTake()}) {
            items {
              ${projectProps.get("id")}
              ${projectProps.get("name")}
            }
          }
        }
      `,
        variables: {
            ids: ids,
        },
    };
}
export function GET_PROJECTS(where, props) {
    return {
        query: Apollo_gql `
        query Projects {
         projects(${where}, ${graphQlTake()}) {
            items {
              ${props}
            }
          }
        }
      `,
        variables: {},
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcHJvamVjdHMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixXQUFXLEdBQ1osTUFBTSxZQUFZLENBQUM7QUFFcEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0MsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUcvQjtJQUNDLE1BQU0sS0FBSyxHQUNULE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNsRCxDQUFDLENBQUMsMkJBQTJCLE9BQU8sQ0FBQyxVQUFVLE9BQU87UUFDdEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOztxQkFFQSxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUs7O2dCQUV6QyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2dCQUNyQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO2tCQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztrQkFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7a0JBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOztnQkFFNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztrQkFDbkMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7a0JBQ3JCLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2tCQUM3QixXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs7O2NBR2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztPQUdyRDtRQUNILFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztBQUNKLENBQUM7QUFDRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUMxQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQTs7O2NBR1AsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Y0FDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDMUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztjQUNyQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOztjQUU1QixZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDckIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOzs7O09BSXJDO1FBQ0gsU0FBUyxFQUFFO1lBQ1QsRUFBRSxFQUFFLEVBQUU7U0FDUDtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQWE7SUFDOUMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7O2lEQUU0QixXQUFXLEVBQUU7O2dCQUU5QyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Ozs7T0FJakM7UUFDSCxTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUUsR0FBRztTQUNUO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ3ZELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOztvQkFFRCxLQUFLLEtBQUssV0FBVyxFQUFFOztnQkFFM0IsS0FBSzs7OztPQUlkO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwb2xsb19ncWwsXG4gIEdyYXBoUXVlcnlQYXlsb2FkLFxuICBncmFwaFFsUGFnaW5hdGlvbkZpZWxkcyxcbiAgZ3JhcGhRbFRha2UsXG59IGZyb20gXCJAdGEvc2VydmVyXCI7XG5cbmltcG9ydCB7IGFkZHJlc3NQcm9wcyB9IGZyb20gXCIuL2R0by9hZGRyZXNzXCI7XG5pbXBvcnQgeyBwcm9qZWN0UHJvcHMgfSBmcm9tIFwiLi9kdG8vcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuL2R0by9zdGF0dXNcIjtcbmltcG9ydCB7IHRlbmFudFByb3BzIH0gZnJvbSBcIi4vZHRvL3RlbmFudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX01ZX1BST0pFQ1RTKGZpbHRlcnM/OiB7XG4gIHN0YXR1c0xpc3Q/OiBQcm9qZWN0U3RhdHVzW107XG4gIHRha2U/OiBudW1iZXI7XG59KTogR3JhcGhRdWVyeVBheWxvYWQge1xuICBjb25zdCB3aGVyZSA9XG4gICAgZmlsdGVycz8uc3RhdHVzTGlzdCAmJiBmaWx0ZXJzLnN0YXR1c0xpc3QubGVuZ3RoID4gMFxuICAgICAgPyBgd2hlcmU6IHsgc3RhdHVzOiB7IGluOiBbJHtmaWx0ZXJzLnN0YXR1c0xpc3R9XSB9IH1gXG4gICAgICA6IFwiXCI7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICAgIHF1ZXJ5IFByb2plY3RzIHtcbiAgICAgICAgICBwcm9qZWN0cygke2dyYXBoUWxUYWtlKGZpbHRlcnM/LnRha2UpfSwgJHt3aGVyZX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcInN0YXR1c1wiKX1cbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KFwicHJvamVjdFBpY3R1cmVVcmxcIil9XG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcInByb2plY3RBZGRyZXNzXCIpfSB7XG4gICAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KFwiY2l0eVwiKX1cbiAgICAgICAgICAgICAgICAke2FkZHJlc3NQcm9wcy5nZXQoXCJwb3N0Q29kZVwiKX1cbiAgICAgICAgICAgICAgICAke2FkZHJlc3NQcm9wcy5nZXQoXCJzdHJlZXRcIil9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KFwidGVuYW50SW5mb3JtYXRpb25cIil9IHtcbiAgICAgICAgICAgICAgICAke3RlbmFudFByb3BzLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICR7dGVuYW50UHJvcHMuZ2V0KFwidGVuYW50TmFtZVwiKX1cbiAgICAgICAgICAgICAgICAke3RlbmFudFByb3BzLmdldChcInByb2plY3RJZFwiKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHtmaWx0ZXJzPy50YWtlID8gZ3JhcGhRbFBhZ2luYXRpb25GaWVsZHMoKSA6IFwiXCJ9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIHZhcmlhYmxlczoge30sXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gR0VUX1BST0pFQ1RfQllfSUQoaWQ6IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgR2V0UHJvamVjdEJ5SWQoJGlkOiBVVUlEISkge1xuICAgICAgICAgIHByb2plY3RCeUlkKGlkOiAkaWQpIHtcbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcImlkXCIpfVxuICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcInN0YXR1c1wiKX1cbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcInByb2plY3RQaWN0dXJlVXJsXCIpfVxuICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KFwicHJvamVjdEFkZHJlc3NcIil9IHtcbiAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KFwiY2l0eVwiKX1cbiAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KFwicG9zdENvZGVcIil9XG4gICAgICAgICAgICAgICR7YWRkcmVzc1Byb3BzLmdldChcInN0cmVldFwiKX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcInRlbmFudEluZm9ybWF0aW9uXCIpfSB7XG4gICAgICAgICAgICAgICR7dGVuYW50UHJvcHMuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICR7dGVuYW50UHJvcHMuZ2V0KFwidGVuYW50TmFtZVwiKX1cbiAgICAgICAgICAgICAgJHt0ZW5hbnRQcm9wcy5nZXQoXCJwcm9qZWN0SWRcIil9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGlkLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfTElHSFRfUFJPSkVDVFMoaWRzOiBzdHJpbmdbXSk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgUHJvamVjdHMoJGlkczogW1VVSURdISkge1xuICAgICAgICAgcHJvamVjdHMod2hlcmU6IHsgaWQ6IHsgaW46ICRpZHMgfSB9LCAke2dyYXBoUWxUYWtlKCl9KSB7XG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkczogaWRzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfUFJPSkVDVFMod2hlcmU6IHN0cmluZywgcHJvcHM6IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgUHJvamVjdHMge1xuICAgICAgICAgcHJvamVjdHMoJHt3aGVyZX0sICR7Z3JhcGhRbFRha2UoKX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtwcm9wc31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cbiJdfQ==