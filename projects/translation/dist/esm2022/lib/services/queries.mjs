import { Apollo_gql } from '@ta/server';
import { featureProps } from './dto/feature';
import { translationProps } from './dto/translation';
export function GET_TRANSLATIONS(locale, feature, partner) {
    const filters = { feature: { name: { eq: feature } }, partner: { UID: { eq: partner } } };
    return {
        query: Apollo_gql `
      query Translations($locale: I18NLocaleCode!, $filters: TranslationFiltersInput!) {
        translations(locale: $locale, filters: $filters, pagination: { pageSize: 50000 }) {
          data {
            id
            attributes {
              ${translationProps.get('key')}
              ${translationProps.get('value')}
              ${translationProps.get('feature')} {
                data {
                  id
                  attributes {
                    ${featureProps.get('name')}
                  }
                }
              }
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLFlBQVksQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLE9BQWdCO0lBQ2hGLE1BQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUMxRixPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQTs7Ozs7O2dCQU1MLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzNCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Ozs7c0JBSXpCLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOzs7Ozs7OztLQVF6QztRQUNELFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE9BQU87U0FDakI7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb19ncWwsIEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IGZlYXR1cmVQcm9wcyB9IGZyb20gJy4vZHRvL2ZlYXR1cmUnO1xuaW1wb3J0IHsgdHJhbnNsYXRpb25Qcm9wcyB9IGZyb20gJy4vZHRvL3RyYW5zbGF0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIEdFVF9UUkFOU0xBVElPTlMobG9jYWxlOiBzdHJpbmcsIGZlYXR1cmU6IHN0cmluZywgcGFydG5lcj86IHN0cmluZyk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcbiAgY29uc3QgZmlsdGVycyA9IHsgZmVhdHVyZTogeyBuYW1lOiB7IGVxOiBmZWF0dXJlIH0gfSwgcGFydG5lcjogeyBVSUQ6IHsgZXE6IHBhcnRuZXIgfSB9IH07XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICBxdWVyeSBUcmFuc2xhdGlvbnMoJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhLCAkZmlsdGVyczogVHJhbnNsYXRpb25GaWx0ZXJzSW5wdXQhKSB7XG4gICAgICAgIHRyYW5zbGF0aW9ucyhsb2NhbGU6ICRsb2NhbGUsIGZpbHRlcnM6ICRmaWx0ZXJzLCBwYWdpbmF0aW9uOiB7IHBhZ2VTaXplOiA1MDAwMCB9KSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICR7dHJhbnNsYXRpb25Qcm9wcy5nZXQoJ2tleScpfVxuICAgICAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KCd2YWx1ZScpfVxuICAgICAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KCdmZWF0dXJlJyl9IHtcbiAgICAgICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgICAgICAgJHtmZWF0dXJlUHJvcHMuZ2V0KCduYW1lJyl9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgZmlsdGVyczogZmlsdGVycyxcbiAgICB9LFxuICB9O1xufVxuIl19