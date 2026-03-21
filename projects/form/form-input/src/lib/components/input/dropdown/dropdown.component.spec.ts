import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputDropdown } from '@ta/form-model';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let inputModel: InputDropdown;

  const mockOptions = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  beforeEach(async () => {
    inputModel = new InputDropdown({
      key: 'role',
      label: 'Role',
      options$: of(mockOptions),
    });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DropdownComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load options from input model', () => {
    expect(component.optionsList.length).toBe(3);
    expect(component.filteredOptions.length).toBe(3);
  });

  it('should default space to true', () => {
    expect(component.space()).toBeTrue();
  });

  it('should get option name by id', () => {
    expect(component.getOptionName('1')).toBe('Option 1');
    expect(component.getOptionName('2')).toBe('Option 2');
  });

  it('should return empty string for unknown option id', () => {
    expect(component.getOptionName('unknown')).toBe('');
  });

  it('should select a value for single-select dropdown', () => {
    component.overlayPanelRef = { close: jasmine.createSpy('close') } as any;
    component.onMenuSelect('2');
    expect(inputModel.value).toBe('2');
  });

  it('should toggle values for multi-select dropdown', () => {
    const multiInput = new InputDropdown({
      key: 'tags',
      label: 'Tags',
      options$: of(mockOptions),
      multiple: true,
    });
    multiInput.createFormControl();
    fixture.componentRef.setInput('input', multiInput);
    component.ngOnInit();
    fixture.detectChanges();

    component.onMenuSelect('1');
    expect(multiInput.value).toEqual(['1']);

    component.onMenuSelect('2');
    expect(multiInput.value).toEqual(['1', '2']);

    component.onMenuSelect('1');
    expect(multiInput.value).toEqual(['2']);
  });

  it('should check if option is selected for single select', () => {
    inputModel.value = '2';
    expect(component.isSelected('2')).toBeTrue();
    expect(component.isSelected('1')).toBeFalse();
  });

  it('should reset filtered options on overlay closed', () => {
    component.filteredOptions = [];
    component.onOverlayClosed();
    expect(component.filteredOptions).toEqual(component.optionsList);
  });

  it('should filter options on search change', () => {
    const multiInput = new InputDropdown({
      key: 'tags',
      label: 'Tags',
      options$: of(mockOptions),
      withSearch: true,
    });
    multiInput.createFormControl();
    fixture.componentRef.setInput('input', multiInput);
    component.ngOnInit();
    fixture.detectChanges();

    const event = { target: { value: 'Option 1' } } as any;
    component.onSearchChange(event);
    expect(component.filteredOptions.length).toBe(1);
    expect(component.filteredOptions[0].id).toBe('1');
  });

  it('should not filter if withSearch is false', () => {
    const event = { target: { value: 'Option 1' } } as any;
    component.onSearchChange(event);
    expect(component.filteredOptions.length).toBe(3);
  });
});
