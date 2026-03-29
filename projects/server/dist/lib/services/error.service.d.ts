import { ApolloError } from "@apollo/client/errors";
import { GraphQLFormattedError } from "graphql";
import { GraphMutationPayload, GraphQueryPayload } from "./graphql/public-api";
import * as i0 from "@angular/core";
export type ServerError = {
    query: string;
    variables: any;
    error: ApolloError;
    errorsMessage: GraphQLFormattedError[];
};
export declare class TaServerErrorService {
    notifications: import("@angular/core").WritableSignal<ServerError[]>;
    private _notificationHandler;
    constructor();
    addError(query: GraphQueryPayload | GraphMutationPayload, error: ApolloError): void;
    private _extractErrorMessages;
    private _extractUserMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaServerErrorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaServerErrorService>;
}
