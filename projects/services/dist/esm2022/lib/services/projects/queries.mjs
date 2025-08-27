import { Apollo_gql, graphQlPaginationFields, graphQlTake } from '@ta/server';
import { addressProps } from './dto/address';
import { projectProps } from './dto/project';
import { tenantProps } from './dto/tenant';
export function GET_MY_PROJECTS(filters) {
    const where = filters?.statusList && filters.statusList.length > 0 ? `where: { status: { in: [${filters.statusList}] } }` : '';
    return {
        query: Apollo_gql `
        query Projects {
          projects(${graphQlTake(filters?.take)}, ${where}) {
            items {
              ${projectProps.get('id')}
              ${projectProps.get('name')}
              ${projectProps.get('status')}
              ${projectProps.get('projectPictureUrl')}
              ${projectProps.get('projectAddress')} {
                ${addressProps.get('city')}
                ${addressProps.get('postCode')}
                ${addressProps.get('street')}
              }
              ${projectProps.get('tenantInformation')} {
                ${tenantProps.get('id')}
                ${tenantProps.get('tenantName')}
                ${tenantProps.get('projectId')}
              }
            }
            ${filters?.take ? graphQlPaginationFields() : ''}
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
            ${projectProps.get('id')}
            ${projectProps.get('name')}
            ${projectProps.get('status')}
            ${projectProps.get('projectPictureUrl')}
            ${projectProps.get('projectAddress')} {
              ${addressProps.get('city')}
              ${addressProps.get('postCode')}
              ${addressProps.get('street')}
            }
            ${projectProps.get('tenantInformation')} {
              ${tenantProps.get('id')}
              ${tenantProps.get('tenantName')}
              ${tenantProps.get('projectId')}
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
              ${projectProps.get('id')}
              ${projectProps.get('name')}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcHJvamVjdHMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQix1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0MsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUF5RDtJQUN2RixNQUFNLEtBQUssR0FDVCxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLE9BQU8sQ0FBQyxVQUFVLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25ILE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOztxQkFFQSxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUs7O2dCQUV6QyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2dCQUNyQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO2tCQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztrQkFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7a0JBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOztnQkFFNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztrQkFDbkMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7a0JBQ3JCLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2tCQUM3QixXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs7O2NBR2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztPQUdyRDtRQUNILFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztBQUNKLENBQUM7QUFDRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUMxQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQTs7O2NBR1AsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Y0FDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDMUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztjQUNyQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOztjQUU1QixZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDckIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOzs7O09BSXJDO1FBQ0gsU0FBUyxFQUFFO1lBQ1QsRUFBRSxFQUFFLEVBQUU7U0FDUDtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQWE7SUFDOUMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7O2lEQUU0QixXQUFXLEVBQUU7O2dCQUU5QyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Ozs7T0FJakM7UUFDSCxTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUUsR0FBRztTQUNUO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ3ZELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOztvQkFFRCxLQUFLLEtBQUssV0FBVyxFQUFFOztnQkFFM0IsS0FBSzs7OztPQUlkO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb19ncWwsIEdyYXBoUXVlcnlQYXlsb2FkLCBncmFwaFFsUGFnaW5hdGlvbkZpZWxkcywgZ3JhcGhRbFRha2UgfSBmcm9tICdAdGEvc2VydmVyJztcblxuaW1wb3J0IHsgYWRkcmVzc1Byb3BzIH0gZnJvbSAnLi9kdG8vYWRkcmVzcyc7XG5pbXBvcnQgeyBwcm9qZWN0UHJvcHMgfSBmcm9tICcuL2R0by9wcm9qZWN0JztcbmltcG9ydCB7IFByb2plY3RTdGF0dXMgfSBmcm9tICcuL2R0by9zdGF0dXMnO1xuaW1wb3J0IHsgdGVuYW50UHJvcHMgfSBmcm9tICcuL2R0by90ZW5hbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX01ZX1BST0pFQ1RTKGZpbHRlcnM/OiB7IHN0YXR1c0xpc3Q/OiBQcm9qZWN0U3RhdHVzW107IHRha2U/OiBudW1iZXIgfSk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgY29uc3Qgd2hlcmUgPVxuICAgIGZpbHRlcnM/LnN0YXR1c0xpc3QgJiYgZmlsdGVycy5zdGF0dXNMaXN0Lmxlbmd0aCA+IDAgPyBgd2hlcmU6IHsgc3RhdHVzOiB7IGluOiBbJHtmaWx0ZXJzLnN0YXR1c0xpc3R9XSB9IH1gIDogJyc7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICAgIHF1ZXJ5IFByb2plY3RzIHtcbiAgICAgICAgICBwcm9qZWN0cygke2dyYXBoUWxUYWtlKGZpbHRlcnM/LnRha2UpfSwgJHt3aGVyZX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ25hbWUnKX1cbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KCdzdGF0dXMnKX1cbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KCdwcm9qZWN0UGljdHVyZVVybCcpfVxuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ3Byb2plY3RBZGRyZXNzJyl9IHtcbiAgICAgICAgICAgICAgICAke2FkZHJlc3NQcm9wcy5nZXQoJ2NpdHknKX1cbiAgICAgICAgICAgICAgICAke2FkZHJlc3NQcm9wcy5nZXQoJ3Bvc3RDb2RlJyl9XG4gICAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KCdzdHJlZXQnKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ3RlbmFudEluZm9ybWF0aW9uJyl9IHtcbiAgICAgICAgICAgICAgICAke3RlbmFudFByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICAgICAke3RlbmFudFByb3BzLmdldCgndGVuYW50TmFtZScpfVxuICAgICAgICAgICAgICAgICR7dGVuYW50UHJvcHMuZ2V0KCdwcm9qZWN0SWQnKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHtmaWx0ZXJzPy50YWtlID8gZ3JhcGhRbFBhZ2luYXRpb25GaWVsZHMoKSA6ICcnfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHt9LFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdFVF9QUk9KRUNUX0JZX0lEKGlkOiBzdHJpbmcpOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICAgIHF1ZXJ5IEdldFByb2plY3RCeUlkKCRpZDogVVVJRCEpIHtcbiAgICAgICAgICBwcm9qZWN0QnlJZChpZDogJGlkKSB7XG4gICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ2lkJyl9XG4gICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ25hbWUnKX1cbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldCgnc3RhdHVzJyl9XG4gICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ3Byb2plY3RQaWN0dXJlVXJsJyl9XG4gICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ3Byb2plY3RBZGRyZXNzJyl9IHtcbiAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KCdjaXR5Jyl9XG4gICAgICAgICAgICAgICR7YWRkcmVzc1Byb3BzLmdldCgncG9zdENvZGUnKX1cbiAgICAgICAgICAgICAgJHthZGRyZXNzUHJvcHMuZ2V0KCdzdHJlZXQnKX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldCgndGVuYW50SW5mb3JtYXRpb24nKX0ge1xuICAgICAgICAgICAgICAke3RlbmFudFByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICAgJHt0ZW5hbnRQcm9wcy5nZXQoJ3RlbmFudE5hbWUnKX1cbiAgICAgICAgICAgICAgJHt0ZW5hbnRQcm9wcy5nZXQoJ3Byb2plY3RJZCcpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpZCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR0VUX0xJR0hUX1BST0pFQ1RTKGlkczogc3RyaW5nW10pOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICAgIHF1ZXJ5IFByb2plY3RzKCRpZHM6IFtVVUlEXSEpIHtcbiAgICAgICAgIHByb2plY3RzKHdoZXJlOiB7IGlkOiB7IGluOiAkaWRzIH0gfSwgJHtncmFwaFFsVGFrZSgpfSkge1xuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoJ2lkJyl9XG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldCgnbmFtZScpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkczogaWRzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfUFJPSkVDVFMod2hlcmU6IHN0cmluZywgcHJvcHM6IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgUHJvamVjdHMge1xuICAgICAgICAgcHJvamVjdHMoJHt3aGVyZX0sICR7Z3JhcGhRbFRha2UoKX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtwcm9wc31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cbiJdfQ==