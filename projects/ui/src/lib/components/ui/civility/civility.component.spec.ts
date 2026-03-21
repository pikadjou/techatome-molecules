import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civility } from '@ta/utils';

import { CivilityComponent } from './civility.component';

describe('CivilityComponent', () => {
  let component: CivilityComponent;
  let fixture: ComponentFixture<CivilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilityComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CivilityComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('civility', Civility.Sir);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return man icon for Sir civility', () => {
    expect(component.getIcon()).toBe('man');
  });

  it('should return woman icon for Madame civility', () => {
    fixture.componentRef.setInput('civility', Civility.Madame);
    fixture.detectChanges();
    expect(component.getIcon()).toBe('woman');
  });

  it('should return wc icon for Dear civility', () => {
    fixture.componentRef.setInput('civility', Civility.Dear);
    fixture.detectChanges();
    expect(component.getIcon()).toBe('wc');
  });

  it('should return empty string for Unknown civility', () => {
    fixture.componentRef.setInput('civility', Civility.Unknown);
    fixture.detectChanges();
    expect(component.getIcon()).toBe('');
  });

  it('should return empty string for null civility', () => {
    fixture.componentRef.setInput('civility', null);
    fixture.detectChanges();
    expect(component.getIcon()).toBe('');
  });
});
