import { PageInfo } from "./pageInfo";

export type GraphReponsePagedData<T> = {
  [key: string]: {
    pageInfo?: PageInfo;
    totalCount: number;
    items?: T[];
  };
};
