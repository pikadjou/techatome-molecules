import { Apollo_gql } from "@ta/server";
import { featureProps } from "./dto/feature";
import { translationProps } from "./dto/translation";
export function GET_TRANSLATIONS(locale, feature) {
    const filters = { feature: { key: { eq: feature } } };
    return {
        query: Apollo_gql `
      query Translations($locale: I18NLocaleCode!, $filters: TranslationFiltersInput!) {
        translations(locale: $locale, filters: $filters, pagination: { pageSize: 50000 }) {
          ${translationProps.get("key")}
          ${translationProps.get("value")}
          ${translationProps.get("feature")} {
            ${featureProps.get("key")}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLFlBQVksQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsTUFBYyxFQUNkLE9BQWU7SUFFZixNQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdEQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7OztZQUdULGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM3QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2NBQzdCLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOzs7O0tBSWhDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvX2dxbCwgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuXG5pbXBvcnQgeyBmZWF0dXJlUHJvcHMgfSBmcm9tIFwiLi9kdG8vZmVhdHVyZVwiO1xuaW1wb3J0IHsgdHJhbnNsYXRpb25Qcm9wcyB9IGZyb20gXCIuL2R0by90cmFuc2xhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUX1RSQU5TTEFUSU9OUyhcbiAgbG9jYWxlOiBzdHJpbmcsXG4gIGZlYXR1cmU6IHN0cmluZ1xuKTogR3JhcGhRdWVyeVBheWxvYWQge1xuICBjb25zdCBmaWx0ZXJzID0geyBmZWF0dXJlOiB7IGtleTogeyBlcTogZmVhdHVyZSB9IH0gfTtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeTogQXBvbGxvX2dxbGBcbiAgICAgIHF1ZXJ5IFRyYW5zbGF0aW9ucygkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEsICRmaWx0ZXJzOiBUcmFuc2xhdGlvbkZpbHRlcnNJbnB1dCEpIHtcbiAgICAgICAgdHJhbnNsYXRpb25zKGxvY2FsZTogJGxvY2FsZSwgZmlsdGVyczogJGZpbHRlcnMsIHBhZ2luYXRpb246IHsgcGFnZVNpemU6IDUwMDAwIH0pIHtcbiAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KFwia2V5XCIpfVxuICAgICAgICAgICR7dHJhbnNsYXRpb25Qcm9wcy5nZXQoXCJ2YWx1ZVwiKX1cbiAgICAgICAgICAke3RyYW5zbGF0aW9uUHJvcHMuZ2V0KFwiZmVhdHVyZVwiKX0ge1xuICAgICAgICAgICAgJHtmZWF0dXJlUHJvcHMuZ2V0KFwia2V5XCIpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==