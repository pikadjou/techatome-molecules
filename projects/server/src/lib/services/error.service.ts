import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

import { ApolloError } from "@apollo/client/errors";
import { print } from "graphql";
import { GraphQLFormattedError } from "graphql";

import { GraphMutationPayload, GraphQueryPayload } from "./graphql/public-api";
import {
  NOTIFICATION_HANDLER_TOKEN,
  NotificationHandler,
} from "./server/token";

export type ServerError = {
  query: string;
  variables: any;
  error: ApolloError;
  errorsMessage: GraphQLFormattedError[];
};

// Matches ENotificationCode.error from @ta/notification
const NOTIFICATION_CODE_ERROR = 1;

@Injectable({
  providedIn: "root",
})
export class TaServerErrorService {
  public notifications = signal<ServerError[]>([]);

  private _notificationHandler: NotificationHandler | null = inject(
    NOTIFICATION_HANDLER_TOKEN,
    { optional: true }
  );

  constructor() {}

  public addError(
    query: GraphQueryPayload | GraphMutationPayload,
    error: ApolloError
  ) {
    const errorsMessage = this._extractErrorMessages(error);

    this.notifications().push({
      query: print("query" in query ? query.query : query.mutation),
      variables: query.variables,
      error,
      errorsMessage,
    });

    if (this._notificationHandler) {
      const message = this._extractUserMessage(error, errorsMessage);
      this._notificationHandler(message, NOTIFICATION_CODE_ERROR);
    }
  }

  private _extractErrorMessages(
    error: ApolloError
  ): GraphQLFormattedError[] {
    try {
      return (error.networkError as HttpErrorResponse)?.error?.errors ?? [];
    } catch {
      return [];
    }
  }

  private _extractUserMessage(
    error: ApolloError,
    errorsMessage: GraphQLFormattedError[]
  ): string {
    const firstMessage = errorsMessage?.[0]?.message;
    return firstMessage ?? error.message ?? "notification.inline.label.error";
  }
}
