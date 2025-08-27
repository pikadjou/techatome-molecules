import { Apollo_gql } from '@ta/server';
import { cmsProps } from './dto/cms';
import { saleProps } from './dto/sale';
export function GET_CMS_CONTENT(type, locale, uid) {
    return {
        query: Apollo_gql `
      query CmsContents($type: String!, $locale: I18NLocaleCode!, $uid: String!) {
        contents(locale: $locale, filters: { Type: { eq: $type }, partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${cmsProps.get('Title')}
              ${cmsProps.get('Description')}
              ${cmsProps.get('Type')}
              ${cmsProps.get('createdAt')}
              ${cmsProps.get('updatedAt')}
              ${cmsProps.get('publishedAt')}
            }
          }
        }
      }
    `,
        variables: {
            type: type,
            locale: locale,
            uid: uid,
        },
    };
}
export function GET_SALE_CONTENT(uid, locale) {
    return {
        query: Apollo_gql `
      query Sale($locale: I18NLocaleCode!, $uid: String!) {
        sales(locale: $locale, filters: { partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${saleProps.get('Content')}
            }
          }
        }
      }
    `,
        variables: {
            locale: locale,
            uid: uid,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpUXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvc2VydmljZXMvc3RyYXBpUXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLFlBQVksQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLEdBQVc7SUFDdkUsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7Ozs7OztnQkFNTCxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDckIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDekIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDOzs7OztLQUt0QztRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsR0FBRztTQUNUO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLE1BQWM7SUFDMUQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7Ozs7OztnQkFNTCxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FLbkM7UUFDRCxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHO1NBQ1Q7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb19ncWwsIEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IGNtc1Byb3BzIH0gZnJvbSAnLi9kdG8vY21zJztcbmltcG9ydCB7IHNhbGVQcm9wcyB9IGZyb20gJy4vZHRvL3NhbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX0NNU19DT05URU5UKHR5cGU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcsIHVpZDogc3RyaW5nKTogR3JhcGhRdWVyeVBheWxvYWQge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBBcG9sbG9fZ3FsYFxuICAgICAgcXVlcnkgQ21zQ29udGVudHMoJHR5cGU6IFN0cmluZyEsICRsb2NhbGU6IEkxOE5Mb2NhbGVDb2RlISwgJHVpZDogU3RyaW5nISkge1xuICAgICAgICBjb250ZW50cyhsb2NhbGU6ICRsb2NhbGUsIGZpbHRlcnM6IHsgVHlwZTogeyBlcTogJHR5cGUgfSwgcGFydG5lcjogeyBVSUQ6IHsgZXE6ICR1aWQgfSB9IH0gKSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICR7Y21zUHJvcHMuZ2V0KCdUaXRsZScpfVxuICAgICAgICAgICAgICAke2Ntc1Byb3BzLmdldCgnRGVzY3JpcHRpb24nKX1cbiAgICAgICAgICAgICAgJHtjbXNQcm9wcy5nZXQoJ1R5cGUnKX1cbiAgICAgICAgICAgICAgJHtjbXNQcm9wcy5nZXQoJ2NyZWF0ZWRBdCcpfVxuICAgICAgICAgICAgICAke2Ntc1Byb3BzLmdldCgndXBkYXRlZEF0Jyl9XG4gICAgICAgICAgICAgICR7Y21zUHJvcHMuZ2V0KCdwdWJsaXNoZWRBdCcpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICB1aWQ6IHVpZCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR0VUX1NBTEVfQ09OVEVOVCh1aWQ6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICBxdWVyeSBTYWxlKCRsb2NhbGU6IEkxOE5Mb2NhbGVDb2RlISwgJHVpZDogU3RyaW5nISkge1xuICAgICAgICBzYWxlcyhsb2NhbGU6ICRsb2NhbGUsIGZpbHRlcnM6IHsgcGFydG5lcjogeyBVSUQ6IHsgZXE6ICR1aWQgfSB9IH0gKSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICR7c2FsZVByb3BzLmdldCgnQ29udGVudCcpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHVpZDogdWlkLFxuICAgIH0sXG4gIH07XG59XG4iXX0=