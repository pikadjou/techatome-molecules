import { Logger } from "../../logger";
import { Request } from "../request";

export interface IRequestMap {
  type: "POST" | "GET" | "DELETE" | "PUT" | "PATCH" | "FILES" | "UPDATEFILES";
  url: string;
}

export type MappingApiType = { [index: string]: IRequestMap };
class RequestMapCore {
  public mappingApi: MappingApiType = {};

  public register(routes: MappingApiType) {
    for (const key in routes) {
      this.mappingApi[key] = routes[key];
    }
  }
  public getConfigById(id: string): IRequestMap | null {
    return this._getConfigById(id);
  }
  public parseUrl(data: {
    serverUrl: string;
    url: string;
    request: Request;
    apiExt?: string;
  }): string {
    return (
      this._formatUrl(data.serverUrl, data.url, data.request) +
      "" +
      (data.apiExt ?? "")
    );
  }

  private _getConfigById(id: string): IRequestMap | null {
    if (Object.prototype.hasOwnProperty.call(this.mappingApi, id)) {
      return this.mappingApi[id];
    }
    Logger.LogError("No Api Configuration found for: ", id);
    return null;
  }

  private _formatUrl(serverUrl: string, url: string, request: Request): string {
    return url.replace(/{(\w+)}/g, function (match, string) {
      if (request.urlData !== null && Object.prototype.hasOwnProperty.call(request.urlData, string)) {
        return request.urlData[string];
      }
      if (
        request.BrutContent !== null &&
        Object.prototype.hasOwnProperty.call(request.BrutContent, string)
      ) {
        return request.BrutContent[string];
      }
      if (string === "ApiUrl") {
        return serverUrl;
      }
      return match;
    });
  }
}

export const RequestMap = new RequestMapCore();
