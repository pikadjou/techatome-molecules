import { GraphQueryPayload } from '@ta/server';
import { ProjectStatus } from './dto/status';
export declare function GET_MY_PROJECTS(filters?: {
    statusList?: ProjectStatus[];
    take?: number;
}): GraphQueryPayload;
export declare function GET_PROJECT_BY_ID(id: string): GraphQueryPayload;
export declare function GET_LIGHT_PROJECTS(ids: string[]): GraphQueryPayload;
export declare function GET_PROJECTS(where: string, props: string): GraphQueryPayload;
