import { AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

import { InputChoices, InputDropdown } from '@ta/form-model';
import { CamBaseComponent, extractEnum, fullName, isNonNullable } from '@ta/utils';
import { filter, map, of } from 'rxjs';

import { CommunicationParticipantExtended, CommunicationType } from '../../services/dto/communication';

export type Filter = {
  participants?: string[];
  messageType?: CommunicationType[] | null;
};

@Component({
  selector: 'ta-conversation-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent extends CamBaseComponent implements AfterViewInit {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Output()
  filtersUpdated = new EventEmitter<Filter>();

  @ViewChild('participantTemplate', { read: TemplateRef })
  participantTemplate!: TemplateRef<void>;
  readonly participantToken!: {
    item: {
      firstName: string;
      lastName: string;
      picture?: string;
      trigram: string;
    };
  };
  private _participantsValue: string[] = [];
  public participantsInput: InputChoices | null = null;

  @ViewChild('typeTemplate', { read: TemplateRef })
  typeTemplate!: TemplateRef<void>;
  readonly typeToken!: { item: CommunicationType };
  private _typeValue: CommunicationType[] | null = null;
  public typeInput: InputDropdown<string[]> | null = null;

  public open = false;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const form = new InputChoices({
      key: 'participants',
      label: 'communication.filters.participants',
      multiple: true,
      options: of(this.conversationParticipants).pipe(
        filter(isNonNullable),
        map(list =>
          list.map(item => {
            if (item.user) {
              return {
                id: item.user.id,
                name: fullName({
                  firstName: item.user.firstName,
                  name: item.user.lastName,
                }),
                data: item.user,
              };
            }
            if (item.contact) {
              return {
                id: item.contact.id,
                name: fullName({
                  firstName: item.contact.firstName,
                  name: item.contact.lastName,
                }),
                data: item.contact,
              };
            }
            return {
              id: item.email,
              name: item.email,
              data: {
                firstName: item.email,
                lastName: '',
                trigram: item.email[0],
              },
            };
          })
        )
      ),
      choiceTemplate: { one: this.participantTemplate },
    });
    form.createFormControl();
    this.participantsInput = form;
    this._registerSubscription(
      this.participantsInput.changeValue$.subscribe({
        next: values => {
          this._participantsValue = values;
          this._dispatchFilters();
        },
      })
    );

    let options = extractEnum(CommunicationType, true).map(item => ({
      id: item.value.toString(),
      name: `${item.name.toLowerCase()}`,
    }));
    this.typeInput = new InputDropdown<string[]>({
      key: 'type',
      label: 'communication.filters.type',
      multiple: true,
      options: of(options),
      value: options.map(item => item.id.toString()),
    });
    this.typeInput.createFormControl();
    this._registerSubscription(
      this.typeInput.changeValue$.subscribe({
        next: values => {
          this._typeValue = values.map(value => Number(value));
          this._dispatchFilters();
        },
      })
    );
  }

  ngOnDestoy() {
    this.participantsInput?.destroy();
  }

  private _dispatchFilters() {
    this.filtersUpdated.emit({
      participants: this._participantsValue,
      messageType: this._typeValue,
    });
  }
}
