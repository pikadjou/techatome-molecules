import { Apollo_gql } from '@ta/server';
import { featureProps } from './dto/feature';
import { translationProps } from './dto/translation';
export function GET_TRANSLATIONS(locale, feature) {
    const filters = { feature: { key: { eq: feature } } };
    return {
        query: Apollo_gql `
      query Translations($locale: I18NLocaleCode!, $filters: TranslationFiltersInput!) {
        translations(locale: $locale, filters: $filters, pagination: { pageSize: 50000 }) {
          ${translationProps.get('key')}
          ${translationProps.get('value')}
          ${translationProps.get('feature')} {
            ${featureProps.get('key')}
          }
        }
      }
    `,
        variables: {
            locale: locale,
            filters: filters,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLFlBQVksQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsT0FBZTtJQUM5RCxNQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdEQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7OztZQUdULGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM3QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2NBQzdCLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOzs7O0tBSWhDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvX2dxbCwgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tICdAdGEvc2VydmVyJztcblxuaW1wb3J0IHsgZmVhdHVyZVByb3BzIH0gZnJvbSAnLi9kdG8vZmVhdHVyZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGlvblByb3BzIH0gZnJvbSAnLi9kdG8vdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX1RSQU5TTEFUSU9OUyhsb2NhbGU6IHN0cmluZywgZmVhdHVyZTogc3RyaW5nKTogR3JhcGhRdWVyeVBheWxvYWQge1xuICBjb25zdCBmaWx0ZXJzID0geyBmZWF0dXJlOiB7IGtleTogeyBlcTogZmVhdHVyZSB9IH0gfTtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgIHF1ZXJ5IFRyYW5zbGF0aW9ucygkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEsICRmaWx0ZXJzOiBUcmFuc2xhdGlvbkZpbHRlcnNJbnB1dCEpIHtcbiAgICAgICAgdHJhbnNsYXRpb25zKGxvY2FsZTogJGxvY2FsZSwgZmlsdGVyczogJGZpbHRlcnMsIHBhZ2luYXRpb246IHsgcGFnZVNpemU6IDUwMDAwIH0pIHtcbiAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KCdrZXknKX1cbiAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KCd2YWx1ZScpfVxuICAgICAgICAgICR7dHJhbnNsYXRpb25Qcm9wcy5nZXQoJ2ZlYXR1cmUnKX0ge1xuICAgICAgICAgICAgJHtmZWF0dXJlUHJvcHMuZ2V0KCdrZXknKX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzLFxuICAgIH0sXG4gIH07XG59XG4iXX0=