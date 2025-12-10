import { Apollo_gql, GraphQueryPayload } from "@ta/server";

import { cmsProps } from "./dto/cms";
import { saleProps } from "./dto/sale";

export function GET_CMS_CONTENT(
  type: string,
  locale: string,
  uid: string
): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query CmsContents($type: String!, $locale: I18NLocaleCode!, $uid: String!) {
        contents(locale: $locale, filters: { Type: { eq: $type }, partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${cmsProps.get("Title")}
              ${cmsProps.get("Description")}
              ${cmsProps.get("Type")}
              ${cmsProps.get("createdAt")}
              ${cmsProps.get("updatedAt")}
              ${cmsProps.get("publishedAt")}
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

export function GET_SALE_CONTENT(
  uid: string,
  locale: string
): GraphQueryPayload {
  return {
    query: Apollo_gql`
      query Sale($locale: I18NLocaleCode!, $uid: String!) {
        sales(locale: $locale, filters: { partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${saleProps.get("Content")}
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
