import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { DepartmentProfessionsComponent } from './professions.component';

describe('DepartmentProfessionsComponent', () => {
  let component: DepartmentProfessionsComponent;
  let fixture: ComponentFixture<DepartmentProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DepartmentProfessionsComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DepartmentProfessionsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('professions', ['Developer', 'Designer', 'Manager']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all professions when maxVisible is not set', () => {
    expect(component.visibleProfessions.length).toBe(3);
  });

  it('should limit visible professions when maxVisible is set', () => {
    fixture.componentRef.setInput('maxVisible', 2);
    fixture.detectChanges();
    expect(component.visibleProfessions.length).toBe(2);
  });

  it('should default fontSize to xs', () => {
    expect(component.fontSize()).toBe('xs');
  });
});
