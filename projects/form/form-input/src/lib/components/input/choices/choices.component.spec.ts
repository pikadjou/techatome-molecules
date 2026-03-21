import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputChoices } from '@ta/form-model';

import { InputChoicesComponent } from './choices.component';

describe('InputChoicesComponent', () => {
  let component: InputChoicesComponent;
  let fixture: ComponentFixture<InputChoicesComponent>;
  let inputModel: InputChoices;

  const mockOptions = [
    { id: '1', name: 'Alpha', data: {} },
    { id: '2', name: 'Beta', data: {} },
    { id: '3', name: 'Gamma', data: {} },
  ];

  beforeEach(async () => {
    inputModel = new InputChoices({
      key: 'tags',
      label: 'Tags',
      options$: of(mockOptions),
      multiple: true,
    });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputChoicesComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputChoicesComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have choices input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('choices');
  });

  it('should load options into bOptions$', () => {
    expect(component.bOptions$.getValue()).toEqual(mockOptions);
  });

  it('should select an option', () => {
    component.select({ id: '1' });
    expect(inputModel.value).toContain('1');
  });

  it('should deselect a selected option', () => {
    inputModel.value = ['1', '2'];
    component.select({ id: '1' });
    expect(inputModel.value).not.toContain('1');
    expect(inputModel.value).toContain('2');
  });

  it('should select single option and close for non-multiple', () => {
    const singleInput = new InputChoices({
      key: 'single',
      label: 'Single',
      options$: of(mockOptions),
      multiple: false,
    });
    singleInput.createFormControl();
    fixture.componentRef.setInput('input', singleInput);
    component.ngOnInit();
    fixture.detectChanges();

    component.overlayPanelRef = { close: jasmine.createSpy('close') } as any;
    component.focusedElement = { nativeElement: { click: jasmine.createSpy('click') } } as any;

    component.select({ id: '2' });
    expect(singleInput.value).toEqual(['2']);
  });

  it('should check if option is selected', () => {
    inputModel.value = ['1', '3'];
    expect(component.isSelected({ id: '1' })).toBeTrue();
    expect(component.isSelected({ id: '2' })).toBeFalse();
    expect(component.isSelected({ id: '3' })).toBeTrue();
  });

  it('should clear selection', () => {
    inputModel.value = ['1', '2'];
    component.overlayPanelRef = { close: jasmine.createSpy('close') } as any;
    component.focusedElement = { nativeElement: { click: jasmine.createSpy('click') } } as any;
    component.clear();
    expect(inputModel.formControl?.value).toEqual([]);
  });

  it('should select nullable with empty string when select is true', () => {
    component.selectNullable(true);
    expect(inputModel.value).toEqual(['']);
  });

  it('should clear value when selectNullable is called with false', () => {
    inputModel.value = ['1'];
    component.selectNullable(false);
    expect(inputModel.value).toEqual([]);
  });

  it('should return name$ observable for a given id', fakeAsync(() => {
    let result: string | null = null;
    component.getName$('1').subscribe(name => (result = name));
    tick();
    expect(result).toBe('Alpha');
  }));

  it('should fallback to id if name not found', fakeAsync(() => {
    let result: string | null = null;
    component.getName$('unknown').subscribe(name => (result = name));
    tick();
    expect(result).toBe('unknown');
  }));
});
