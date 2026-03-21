import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextBox } from '@ta/form-model';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'search', label: 'Search' });

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SearchFieldComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isOpen to false', () => {
    expect(component.isOpen()).toBeFalse();
  });

  it('should default placeholder to empty string', () => {
    expect(component.placeholder()).toBe('');
  });

  it('should default space to true', () => {
    expect(component.space()).toBeTrue();
  });

  it('should default type to sm', () => {
    expect(component.type()).toBe('sm');
  });

  it('should set isDeployed to false initially when isOpen is false', () => {
    expect(component.isDeployed).toBeFalse();
  });

  it('should deploy when iconClicked is called and not deployed', () => {
    component.isDeployed = false;
    component.iconClicked();
    expect(component.isDeployed).toBeTrue();
  });

  it('should emit valueCompleted when iconClicked and deployed with value', () => {
    component.isDeployed = true;
    inputModel.value = 'test query';
    spyOn(component.valueCompleted, 'emit');
    component.iconClicked();
    expect(component.valueCompleted.emit).toHaveBeenCalledWith('test query');
  });

  it('should collapse when iconClicked, deployed, no value, and not isOpen', () => {
    component.isDeployed = true;
    inputModel.value = null;
    component.iconClicked();
    expect(component.isDeployed).toBeFalse();
  });

  it('should set focusTextBox to true on focus', () => {
    component.focus();
    expect(component.focusTextBox).toBeTrue();
  });

  it('should set focusTextBox to false on focusOut', () => {
    component.focusTextBox = true;
    component.focusOut();
    expect(component.focusTextBox).toBeFalse();
  });

  it('should collapse on focusOut when not isOpen and no value', () => {
    component.isDeployed = true;
    inputModel.value = null;
    component.focusOut();
    expect(component.isDeployed).toBeFalse();
  });

  it('should stay deployed on focusOut when there is a value', () => {
    component.isDeployed = true;
    inputModel.value = 'something';
    component.focusOut();
    expect(component.isDeployed).toBeTrue();
  });

  it('should trigger iconClicked on Enter keypress', () => {
    spyOn(component, 'iconClicked');
    component.keyPress(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(component.iconClicked).toHaveBeenCalled();
  });

  it('should not trigger iconClicked on non-Enter keypress', () => {
    spyOn(component, 'iconClicked');
    component.keyPress(new KeyboardEvent('keyup', { key: 'Escape' }));
    expect(component.iconClicked).not.toHaveBeenCalled();
  });

  it('should destroy input on ngOnDestroy', () => {
    spyOn(inputModel, 'destroy');
    component.ngOnDestroy();
    expect(inputModel.destroy).toHaveBeenCalled();
  });
});
