import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { Observable, combineLatest, of } from 'rxjs';

import { InputChoices, InputChoicesOption } from '@camelot/form-model';
import { Menu, MenuIcon } from '@camelot/menu';
import { CamContactService, CamUsersService, Contact, User } from '@camelot/user';
import { CamBaseComponent, fullName, isValidEmail } from '@camelot/utils';

import {
  Communication,
  CommunicationParticipantExtended,
  CommunicationType,
} from '../../../services/dto/communication';
import { CorrespondentInputDto } from '../../../services/dto/post/communication';

type PersonType = 'participant' | 'user' | 'contact';
export interface CorrespondentInput extends CorrespondentInputDto {
  data?: User | Contact | null;
}

export type OutputCorrespondentInput = {
  tos: CorrespondentInput[];
  ccs: CorrespondentInput[];
};

@Component({
  selector: 'cam-message-box-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends CamBaseComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  activeTab!: CommunicationType;
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];
  @Input()
  replyTo: { communication: Communication; isForward: boolean } | null = null;

  @Output()
  correspondents: EventEmitter<OutputCorrespondentInput> = new EventEmitter();

  @ViewChild('choicesTemplate', { read: TemplateRef })
  choicesTemplate!: TemplateRef<void>;

  readonly CommunicationType = CommunicationType;

  private _contactsService = inject(CamContactService);
  private _usersService = inject(CamUsersService);
  private _listOfUsersAndContacts$: ((search?: string) => Observable<InputChoicesOption[]>) | null = null;

  public customEmailList: InputChoicesOption[] = [];
  public selected: PersonType | null = null;
  public menu = new Menu({
    elements: [
      new MenuIcon({
        key: 'participant',
        label: 'Participants',
        order: 1,
        defaultOpen: true,
        callback: () => this.changeSelection('participant'),
      }),
      new MenuIcon({
        key: 'user',
        label: 'Utilisateur',
        order: 2,
        callback: () => this.changeSelection('user'),
      }),
      new MenuIcon({
        key: 'contact',
        label: 'Contacts',
        order: 3,
        callback: () => this.changeSelection('contact'),
      }),
    ],
    direction: 'horizontal',
  });
  public tos: InputChoices | null = null;
  public ccs: InputChoices | null = null;

  public collapsed: boolean = false;
  public outputCorrespondentInput: CorrespondentInput[] = [];

  ngOnInit() {
    this._listOfUsersAndContacts$ = (search?: string) => {
      return combineLatest([
        of(this.customEmailList),
        of(this.conversationParticipants).pipe(
          map(participants =>
            participants.map<InputChoicesOption>(participant => {
              if (participant.user) {
                return {
                  id: this._formatId(participant.user.id, 'participant') ?? '',
                  name: fullName({
                    firstName: participant.user.firstName,
                    name: participant.user.lastName,
                  }),
                  data: participant.user,
                };
              }
              if (participant.contact) {
                return {
                  id: this._formatId(participant.contact.id, 'participant') ?? '',
                  name: fullName({
                    firstName: participant.contact.firstName,
                    name: participant.contact.lastName,
                  }),
                  data: participant.contact,
                };
              }

              return {
                id: this._formatId(participant.email, 'participant') ?? '',
                name: participant.email,
                data: { firstName: participant.email },
              };
            })
          )
        ),
        this._contactsService.fetchSearchContact$(search).pipe(
          map(contacts =>
            contacts.map(contact => ({
              id: this._formatId(contact.id, 'contact') ?? '',
              name: fullName({
                firstName: contact.firstName,
                name: contact.lastName,
              }),
              data: contact,
            }))
          ),
          map(contacts => contacts.sort((a, b) => (a.name < b.name ? -1 : 1)))
        ),
        this._usersService.fetchUsersCustomers$(search).pipe(
          map(users =>
            users.map(user => ({
              id: this._formatId(user.id, 'user') ?? '',
              name: fullName({
                firstName: user.firstName,
                name: user.lastName,
              }),
              data: user,
            }))
          ),
          map(users => users.sort((a, b) => (a.name < b.name ? -1 : 1)))
        ),
      ]).pipe(map(data => [...(data[0] ?? []), ...(data[1] ?? []), ...(data[2] ?? []), ...(data[3] ?? [])]));
    };
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['replyTo'] && this.replyTo) {
      if (this.replyTo.isForward) {
        if (this.tos) {
          this.tos.value = [];
        }
        if (this.ccs) {
          this.ccs.value = [];
        }
      } else {
        if (this.replyTo.communication.isMine) {
          this.tos?.formControl?.setValue(
            this.replyTo.communication.to.map(
              to =>
                this._formatId(to.userId, 'participant') ??
                this._formatId(to.contactId, 'participant') ??
                this._formatId(to.email, 'participant')
            )
          );
          this.ccs?.formControl?.setValue(
            this.replyTo.communication.cc.map(
              cc =>
                this._formatId(cc.userId, 'participant') ??
                this._formatId(cc.contactId, 'participant') ??
                this._formatId(cc.email, 'participant')
            )
          );
        } else {
          this.tos?.formControl?.setValue([
            this._formatId(this.replyTo.communication.from.userId, 'participant') ??
              this._formatId(this.replyTo.communication.from.contactId, 'participant') ??
              this._formatId(this.replyTo.communication.from.email, 'participant'),
          ]);
          this.ccs?.formControl?.setValue(
            this.replyTo.communication.cc.map(
              cc =>
                this._formatId(cc.userId, 'participant') ??
                this._formatId(cc.contactId, 'participant') ??
                this._formatId(cc.email, 'participant')
            )
          );
        }
      }
    }

    if (changes['conversationParticipants']) {
      const client = this.conversationParticipants.find(p => p.isClient);
      const clientId =
        this._formatId(client?.userId, 'participant') ??
        this._formatId(client?.contactId, 'participant') ??
        this._formatId(client?.email, 'participant');

      this.tos?.formControl?.setValue(clientId ? [clientId] : []);
    }
  }
  ngAfterViewInit() {
    if (!this._listOfUsersAndContacts$) {
      return;
    }
    const client = this.conversationParticipants.find(p => p.isClient);
    const clientId =
      this._formatId(client?.userId, 'participant') ??
      this._formatId(client?.contactId, 'participant') ??
      this._formatId(client?.email, 'participant');

    this.tos = new InputChoices({
      key: 'to',
      multiple: true,
      withSearch: true,
      advancedSearch$: this._listOfUsersAndContacts$,
      choiceTemplate: { list: this.choicesTemplate },
      value: clientId ? [clientId] : [],
    });
    this.tos.createFormControl();
    this._registerSubscription(this.tos.changeValue$.subscribe(() => this.sendCorrespondents()));

    this.ccs = new InputChoices({
      key: 'cc',
      multiple: true,
      withSearch: true,
      advancedSearch$: this._listOfUsersAndContacts$,
      choiceTemplate: { list: this.choicesTemplate },
    });
    this.ccs.createFormControl();
    this._registerSubscription(this.ccs.changeValue$.subscribe(() => this.sendCorrespondents()));

    this.sendCorrespondents();
  }

  public sendCorrespondents() {
    const outputCorrespondentInput = {
      tos: this.tos?.value?.map(value => this._valueToCorrespondentInput(value)) ?? [],
      ccs: this.ccs?.value?.map(value => this._valueToCorrespondentInput(value)) ?? [],
    };

    this.outputCorrespondentInput = [...outputCorrespondentInput.tos, ...outputCorrespondentInput.ccs];
    this.correspondents.emit(outputCorrespondentInput);
  }
  public changeSelection(selected: PersonType) {
    this.selected = selected;
  }
  public filteredItems(data: any[]) {
    if (!this.selected) {
      return data;
    }
    return data.filter(item => item.id.includes(this.selected));
  }

  public isEmail(value: string) {
    return isValidEmail(value);
  }
  public addCustomEmail(email: string, select: (value: InputChoicesOption) => void, refresh: () => void) {
    const item = {
      id: this._formatId(email, 'participant') ?? '',
      name: email,
      data: { firstName: email },
    };
    this.customEmailList.push(item);
    refresh();
    select(item);
  }

  public getCorrespondent(correspondent: CorrespondentInput): {
    picture: string;
    firstName: string;
    lastName: string;
    trigram: string;
  } {
    if (!correspondent.data) {
      return {
        picture: '',
        firstName: correspondent.mail ?? '',
        lastName: '',
        trigram: '',
      };
    }

    if (correspondent.userId) {
      const user = correspondent.data as User;
      return {
        picture: user.picture,
        firstName: user.firstName,
        lastName: user.lastName,
        trigram: user.trigram,
      };
    }
    if (correspondent.contactId) {
      const contact = correspondent.data as Contact;
      return {
        picture: '',
        firstName: contact.firstName,
        lastName: contact.lastName,
        trigram: '',
      };
    }
    return {
      picture: '',
      firstName: correspondent.mail ?? '',
      lastName: '',
      trigram: '',
    };
  }

  private _valueToCorrespondentInput(value: string): CorrespondentInput {
    const id = value.split('#')[0];
    const type: PersonType = <PersonType>value.split('#')[1];

    if (type === 'participant') {
      const user = this.conversationParticipants.find(p => p.userId === id)?.user;
      if (user) {
        return {
          userId: user?.id,
          mail: user?.userName,
          data: user,
        };
      }

      const contact = this.conversationParticipants.find(p => p.contactId === id)?.contact;
      if (contact) {
        return {
          contactId: contact?.id,
          mail: contact?.mail,
          data: contact,
        };
      }

      return {
        mail: id,
        data: null,
      };
    }

    if (type === 'user') {
      const user = this._usersService.userById.get(id);
      return {
        userId: user?.id,
        mail: user?.userName,
        data: user ?? null,
      };
    }
    const contact = this._contactsService.contactById.get(id);
    return {
      contactId: contact?.id,
      mail: contact?.mail,
      data: contact ?? null,
    };
  }

  private _formatId(value: string | null | undefined, type: PersonType): string | null {
    if (!value) {
      return null;
    }
    return `${value}#${type}`;
  }
}
