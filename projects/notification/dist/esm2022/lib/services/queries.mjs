import { Apollo_gql, graphQlPaginationFields, graphQlTake, keyValueProps, } from '@ta/server';
import { isNonNullable } from '@ta/utils';
import { notificationProps } from './dto/notification';
export function GET_NOTIFICATIONS(filters) {
    const where = computeFilters(filters);
    return {
        query: Apollo_gql `
    query Notifications {
        notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
            items {
              ${notificationProps.get('id')}
              ${notificationProps.get('date')}
              ${notificationProps.get('level')}
              ${notificationProps.get('isNew')}
              ${notificationProps.get('userId')}
              ${notificationProps.get('tenantId')}
              ${notificationProps.get('tenantName')}
              ${notificationProps.get('type')}
              ${notificationProps.get('context')} {
                ${keyValueProps.get('key')}
                ${keyValueProps.get('value')}
              }
              ${notificationProps.get('redirectContext')} {
                ${keyValueProps.get('key')}
                ${keyValueProps.get('value')}
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
            ${notificationProps.get('id')}
            ${notificationProps.get('isNew')}
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
    return `where: { ${clause.join(',')} }`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsYUFBYSxHQUNkLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRdkQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQTJCO0lBQzNELE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQTs7d0JBRUcsS0FBSyx5Q0FBeUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7O2dCQUVoRixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMzQixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUM3QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUM5QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUM5QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUMvQixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNqQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNuQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUM3QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2tCQUM5QixhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztrQkFDeEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O2dCQUU1QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7a0JBQ3RDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2tCQUN4QixhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7Ozs7T0FLckM7UUFDSCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQTs7MEJBRUssS0FBSyx5Q0FBeUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQ2xGLHVCQUF1QixFQUFFOzs7S0FHcEM7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEVBQVU7SUFDMUMsT0FBTztRQUNMLFFBQVEsRUFBRSxVQUFVLENBQUE7OztjQUdWLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Y0FDM0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7O0tBR3ZDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBRTtTQUNIO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxPQUEyQjtJQUNqRCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNaLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwb2xsb19ncWwsXG4gIEdyYXBoTXV0YXRpb25QYXlsb2FkLFxuICBHcmFwaFF1ZXJ5UGF5bG9hZCxcbiAgZ3JhcGhRbFBhZ2luYXRpb25GaWVsZHMsXG4gIGdyYXBoUWxUYWtlLFxuICBrZXlWYWx1ZVByb3BzLFxufSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBub3RpZmljYXRpb25Qcm9wcyB9IGZyb20gJy4vZHRvL25vdGlmaWNhdGlvbic7XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkZpbHRlciA9IHtcbiAgcHJvamVjdElkPzogc3RyaW5nO1xuICBpc05ldz86IGJvb2xlYW4gfCBudWxsO1xuICB0YWtlPzogbnVtYmVyIHwgbnVsbDtcbn0gfCBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX05PVElGSUNBVElPTlMoZmlsdGVyczogTm90aWZpY2F0aW9uRmlsdGVyKTogR3JhcGhRdWVyeVBheWxvYWQge1xuICBjb25zdCB3aGVyZSA9IGNvbXB1dGVGaWx0ZXJzKGZpbHRlcnMpO1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBBcG9sbG9fZ3FsYFxuICAgIHF1ZXJ5IE5vdGlmaWNhdGlvbnMge1xuICAgICAgICBub3RpZmljYXRpb25zKCR7d2hlcmV9LCBvcmRlcjogeyBpc05ldzogREVTQywgZGF0ZTogREVTQyB9LCAke2dyYXBoUWxUYWtlKGZpbHRlcnM/LnRha2UpfSkge1xuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoJ2RhdGUnKX1cbiAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Qcm9wcy5nZXQoJ2xldmVsJyl9XG4gICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KCdpc05ldycpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgndXNlcklkJyl9XG4gICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KCd0ZW5hbnRJZCcpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgndGVuYW50TmFtZScpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgndHlwZScpfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgnY29udGV4dCcpfSB7XG4gICAgICAgICAgICAgICAgJHtrZXlWYWx1ZVByb3BzLmdldCgna2V5Jyl9XG4gICAgICAgICAgICAgICAgJHtrZXlWYWx1ZVByb3BzLmdldCgndmFsdWUnKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgncmVkaXJlY3RDb250ZXh0Jyl9IHtcbiAgICAgICAgICAgICAgICAke2tleVZhbHVlUHJvcHMuZ2V0KCdrZXknKX1cbiAgICAgICAgICAgICAgICAke2tleVZhbHVlUHJvcHMuZ2V0KCd2YWx1ZScpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICBgLFxuICAgIHZhcmlhYmxlczoge30sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHRVRfTk9USUZJQ0FUSU9OU19DT1VOVChmaWx0ZXJzOiBOb3RpZmljYXRpb25GaWx0ZXIpOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIGNvbnN0IHdoZXJlID0gY29tcHV0ZUZpbHRlcnMoZmlsdGVycyk7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICBxdWVyeSBOb3RpZmljYXRpb25zIHtcbiAgICAgICAgICBub3RpZmljYXRpb25zKCR7d2hlcmV9LCBvcmRlcjogeyBpc05ldzogREVTQywgZGF0ZTogREVTQyB9LCAke2dyYXBoUWxUYWtlKGZpbHRlcnM/LnRha2UpfSkge1xuICAgICAgICAgICAgICAke2dyYXBoUWxQYWdpbmF0aW9uRmllbGRzKCl9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7fSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJFQURfTk9USUZJQ0FUSU9OKGlkOiBzdHJpbmcpOiBHcmFwaE11dGF0aW9uUGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb246IEFwb2xsb19ncWxgXG4gICAgICBtdXRhdGlvbiBOb3RpZmljYXRpb25SZWFkKCRpZDogVVVJRCEpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uUmVhZChub3RpZmljYXRpb25JZDogJGlkKSB7XG4gICAgICAgICAgICAke25vdGlmaWNhdGlvblByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICR7bm90aWZpY2F0aW9uUHJvcHMuZ2V0KCdpc05ldycpfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVGaWx0ZXJzKGZpbHRlcnM6IE5vdGlmaWNhdGlvbkZpbHRlcik6IHN0cmluZyB7XG4gIGNvbnN0IGNsYXVzZTogc3RyaW5nW10gPSBbXTtcbiAgaWYgKGZpbHRlcnMpIHtcbiAgICBpZiAoZmlsdGVycy5wcm9qZWN0SWQpIHtcbiAgICAgIGNsYXVzZS5wdXNoKGBwcm9qZWN0SWQ6IHsgZXE6ICR7ZmlsdGVycy5wcm9qZWN0SWR9IH1gKTtcbiAgICB9XG4gICAgaWYgKGlzTm9uTnVsbGFibGUoZmlsdGVycy5pc05ldykpIHtcbiAgICAgIGNsYXVzZS5wdXNoKGBpc05ldzogeyBlcTogJHtmaWx0ZXJzLmlzTmV3fSB9YCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGB3aGVyZTogeyAke2NsYXVzZS5qb2luKCcsJyl9IH1gO1xufVxuIl19