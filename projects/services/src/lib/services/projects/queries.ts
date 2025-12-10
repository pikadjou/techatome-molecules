import {
  Apollo_gql,
  GraphQueryPayload,
  graphQlPaginationFields,
  graphQlTake,
} from "@ta/server";

import { addressProps } from "./dto/address";
import { projectProps } from "./dto/project";
import { ProjectStatus } from "./dto/status";
import { tenantProps } from "./dto/tenant";

export function GET_MY_PROJECTS(filters?: {
  statusList?: ProjectStatus[];
  take?: number;
}): GraphQueryPayload {
  const where =
    filters?.statusList && filters.statusList.length > 0
      ? `where: { status: { in: [${filters.statusList}] } }`
      : "";
  return {
    query: Apollo_gql`
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
export function GET_PROJECT_BY_ID(id: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
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

export function GET_LIGHT_PROJECTS(ids: string[]): GraphQueryPayload {
  return {
    query: Apollo_gql`
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

export function GET_PROJECTS(where: string, props: string): GraphQueryPayload {
  return {
    query: Apollo_gql`
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
