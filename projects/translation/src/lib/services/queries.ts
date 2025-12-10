import { Apollo_gql, GraphQueryPayload } from "@ta/server";

import { featureProps } from "./dto/feature";
import { translationProps } from "./dto/translation";

export function GET_TRANSLATIONS(
  locale: string,
  feature: string
): GraphQueryPayload {
  const filters = { feature: { key: { eq: feature } } };
  return {
    query: Apollo_gql`
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
