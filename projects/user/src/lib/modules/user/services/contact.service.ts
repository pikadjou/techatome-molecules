import { Injectable } from '@angular/core';

import { CamBaseService, GraphEndpoint, HandleComplexRequest, HandleSimpleRequest } from '@ta/server';
import { isNonNullable } from '@ta/utils';
import { filter, map, of, tap } from 'rxjs';

import { Contact, contactProps } from './contacts/dto/contact';
import { GET_CONTACTS, GET_CONTACTS_LIGHT, GET_SEARCH_CONTACTS } from './contacts/queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'contactService',
  endpoint: 'contact',
};

@Injectable({
  providedIn: 'root',
})
export class CamContactService extends CamBaseService {
  public contactById = new HandleComplexRequest<Contact>();
  public contacts = new HandleSimpleRequest<Contact[]>();

  constructor() {
    super();

    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchContactById$(contactId: string) {
    return this.contactById.fetch(
      contactId,
      this._graphService
        .fetchPagedQueryList<Contact>(
          GET_CONTACTS(
            `where: { id: { eq: "${contactId}" } }`,
            `
            ${contactProps.get('id')}
            ${contactProps.get('firstName')}
            ${contactProps.get('lastName')}
            ${contactProps.get('mail')}
            ${contactProps.get('phoneNumber')}
            ${contactProps.get('tenantPersonId')}
          `
          ),
          'contacts',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => ({
            ...data,
            items: data.items ?? [],
          })),
          filter(data => data.items.length > 0),
          map(data => data.items[0])
        )
    );
  }

  public fetchContact$() {
    return this.contacts.fetch(
      this._graphService
        .fetchPagedQueryList<Contact>(
          GET_CONTACTS_LIGHT(
            '',
            `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
              ${contactProps.get('phoneNumber')}
            `
          ),
          'contactsLight',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public fetchContactsByIds$(ids: string[]) {
    return this.contacts.fetch(
      this._graphService
        .fetchPagedQueryList<Contact>(
          GET_CONTACTS_LIGHT(
            `where: { id: { in: [${ids.map(id => `"${id}"`).join(', ')}] } }`,
            `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
            `
          ),
          'contactsLight',
          graphEndpoint.clientName
        )
        .pipe(
          filter(isNonNullable),
          map(data => data.items ?? [])
        )
    );
  }

  public fetchSearchContact$(search?: string) {
    if (!search || search.length < 3) {
      return of([]);
    }
    return this._graphService
      .fetchPagedQueryList<Contact>(
        GET_SEARCH_CONTACTS(
          search,
          `
              ${contactProps.get('id')}
              ${contactProps.get('firstName')}
              ${contactProps.get('lastName')}
              ${contactProps.get('mail')}
            `,
          `order: { lastName: ASC }`
        ),
        'searchContactsLight',
        graphEndpoint.clientName
      )
      .pipe(
        filter(isNonNullable),
        map(data => data.items ?? []),
        tap(list =>
          list.forEach(element => {
            this.contactById.add(element.id, element);
          })
        )
      );
  }
}
