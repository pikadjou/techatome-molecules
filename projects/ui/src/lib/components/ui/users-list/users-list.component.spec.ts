import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { UserLogoData } from '../user-logo/user-logo.component';
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  const mockUsers: UserLogoData[] = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Smith' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('users', of(mockUsers));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
