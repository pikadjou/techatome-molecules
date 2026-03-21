import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { DepartmentsComponent } from './departments.component';
import { Department } from './interface';

describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;

  const mockDepartments: Department[] = [
    { id: 1, name: 'Engineering', iconPath: '/icons/eng.svg' },
    { id: 2, name: 'Design', iconPath: null },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DepartmentsComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('departments', mockDepartments);
    fixture.componentRef.setInput('professions', ['Developer', 'Designer']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have departments input set', () => {
    expect(component.departments().length).toBe(2);
  });

  it('should have professions input set', () => {
    expect(component.professions().length).toBe(2);
  });
});
