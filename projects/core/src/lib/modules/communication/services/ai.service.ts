import { Injectable, LOCALE_ID, inject } from '@angular/core';

import { CamBaseService, GraphEndpoint } from '@camelot/server';

import { Tones } from './dto/tones';
import { aiConversationSummary, aiMessageInConversationResponse, aiMessageReformulation } from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'communicationService',
  endpoint: 'communication',
};

@Injectable({
  providedIn: 'root',
})
export class CamCommunicationsAiService extends CamBaseService {
  public locale = inject(LOCALE_ID);

  constructor() {
    super();

    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public aiConversationSummary$(conversationId: string) {
    return this._graphService.fetchQuery<string>(
      aiConversationSummary(conversationId, this.locale),
      'aiConversationSummary',
      graphEndpoint.clientName
    );
  }
  public aiConversationAnswer$(conversationId: string, communicationId: string) {
    return this._graphService.fetchQuery<string>(
      aiMessageInConversationResponse(conversationId, communicationId, this.locale),
      'aiMessageInConversationResponse',
      graphEndpoint.clientName
    );
  }

  public aiMessageReformulation$(originalMessage: string, tone: Tones) {
    return this._graphService.fetchQuery<string>(
      aiMessageReformulation(originalMessage, tone, this.locale),
      'aiMessageReformulation',
      graphEndpoint.clientName
    );
  }
}
