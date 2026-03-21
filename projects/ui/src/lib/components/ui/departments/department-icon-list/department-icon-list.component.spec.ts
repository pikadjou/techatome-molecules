import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentIconListComponent } from './department-icon-list.component';
import { Department } from '../interface';

describe('DepartmentIconListComponent', () => {
  let component: DepartmentIconListComponent;
  let fixture: ComponentFixture<DepartmentIconListComponent>;

  const mockDepartments: Department[] = [
    { id: 1, name: 'Engineering', iconPath: '/icons/eng.svg' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentIconListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DepartmentIconListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('departments', mockDepartments);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have departments input set', () => {
    expect(component.departments().length).toBe(1);
  });

  it('should default withName to false', () => {
    expect(component.withName()).toBeFalse();
  });
});
