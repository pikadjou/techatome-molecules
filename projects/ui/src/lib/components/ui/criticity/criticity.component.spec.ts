import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CriticityComponent, CriticityStatus, criticityLabel } from './criticity.component';

describe('CriticityComponent', () => {
  let component: CriticityComponent;
  let fixture: ComponentFixture<CriticityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        CriticityComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CriticityComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('criticity', CriticityStatus.P1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return danger type for P1', () => {
    expect(component.type()).toBe('danger');
  });

  it('should return warning type for P2', () => {
    fixture.componentRef.setInput('criticity', CriticityStatus.P2);
    fixture.detectChanges();
    expect(component.type()).toBe('warning');
  });

  it('should return success type for P3', () => {
    fixture.componentRef.setInput('criticity', CriticityStatus.P3);
    fixture.detectChanges();
    expect(component.type()).toBe('success');
  });

  it('should return primary type for Unknown', () => {
    fixture.componentRef.setInput('criticity', CriticityStatus.Unknown);
    fixture.detectChanges();
    expect(component.type()).toBe('primary');
  });

  it('should return correct label', () => {
    expect(component.label()).toBe('ui.criticity.1');
  });
});

describe('criticityLabel', () => {
  it('should return formatted label string', () => {
    expect(criticityLabel(CriticityStatus.P1)).toBe('ui.criticity.1');
    expect(criticityLabel(CriticityStatus.P2)).toBe('ui.criticity.2');
    expect(criticityLabel(CriticityStatus.P3)).toBe('ui.criticity.3');
  });
});
