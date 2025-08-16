import { Apollo_gql, GraphQueryPayload, graphQlTake } from '@ta/server';

import { documentProps } from './dto/document';

export function GET_DOCUMENTS(filters: { ids?: string[]; take?: number }): GraphQueryPayload {
  const where =
    filters.ids && filters.ids.length > 0
      ? `where: { id: { in: [${filters.ids.map(id => `"${id}"`).join(', ')}] } }`
      : '';
  return {
    query: Apollo_gql`
        query Documents {
          documents(${graphQlTake(filters.take)}, order: { isNew: DESC, uploadedDate: DESC }, ${where}) {
            items {
              ${documentProps.get('id')}
              ${documentProps.get('name')}
              ${documentProps.get('url')}
              ${documentProps.get('projectId')}
              ${documentProps.get('fileType')}
              ${documentProps.get('size')}
              ${documentProps.get('uploadedDate')}
            }
          }
        }
      `,
    variables: {},
  };
}
