import { Apollo_gql, graphQlTake } from '@ta/server';
export function GET_CONTACTS(where, props) {
    return {
        query: Apollo_gql `
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
export function GET_CONTACTS_LIGHT(where, props) {
    return {
        query: Apollo_gql `
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
export function GET_SEARCH_CONTACTS(filter, props, order) {
    return {
        query: Apollo_gql `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL2NvbnRhY3RzL3F1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBcUIsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhFLE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDdkQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7O3FCQUVBLEtBQUssS0FBSyxXQUFXLEVBQUU7O2dCQUU1QixLQUFLOzs7O09BSWQ7UUFDSCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQzdELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFBOzswQkFFSyxLQUFLLEtBQUssV0FBVyxFQUFFOztnQkFFakMsS0FBSzs7OztPQUlkO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQWE7SUFDOUUsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7OzhCQUVTLEtBQUssY0FBYyxNQUFNLE1BQU0sV0FBVyxFQUFFOzs7a0JBR3hELEtBQUs7Ozs7S0FJbEI7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvX2dxbCwgR3JhcGhRdWVyeVBheWxvYWQsIGdyYXBoUWxUYWtlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfQ09OVEFDVFMod2hlcmU6IHN0cmluZywgcHJvcHM6IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgQ29udGFjdHMge1xuICAgICAgICAgIGNvbnRhY3RzKCR7d2hlcmV9LCAke2dyYXBoUWxUYWtlKCl9KSB7XG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICR7cHJvcHN9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIHZhcmlhYmxlczoge30sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfQ09OVEFDVFNfTElHSFQod2hlcmU6IHN0cmluZywgcHJvcHM6IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgICAgcXVlcnkgQ29udGFjdHMge1xuICAgICAgICAgIGNvbnRhY3RzTGlnaHQoJHt3aGVyZX0sICR7Z3JhcGhRbFRha2UoKX0pIHtcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgJHtwcm9wc31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdFVF9TRUFSQ0hfQ09OVEFDVFMoZmlsdGVyOiBzdHJpbmcsIHByb3BzOiBzdHJpbmcsIG9yZGVyOiBzdHJpbmcpOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgcXVlcnkgQ29udGFjdHMge1xuICAgICAgICBzZWFyY2hDb250YWN0c0xpZ2h0KCR7b3JkZXJ9LCBmaWx0ZXI6IFwiJHtmaWx0ZXJ9XCIsICR7Z3JhcGhRbFRha2UoKX0pIHtcbiAgICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAke3Byb3BzfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cbiJdfQ==