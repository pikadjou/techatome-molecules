import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TaUsersService } from '../../services/users.service';
import { ContactCardComponent } from './contact-card.component';

describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;
  let mockUsersService: any;

  beforeEach(async () => {
    mockUsersService = {
      user: { get$: jasmine.createSpy('get$').and.returnValue(of(null)) },
      fetchUser$: jasmine.createSpy('fetchUser$').and.returnValue(of(null)),
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ContactCardComponent,
      ],
      providers: [
        { provide: TaUsersService, useValue: mockUsersService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('userId', 'user-123');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user on init', () => {
    expect(mockUsersService.fetchUser$).toHaveBeenCalledWith('user-123');
  });

  it('should get user logo data from user', () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      trigram: 'JDO',
      picture: 'pic.jpg',
    } as any;
    const result = component.getUserLogoData(user);
    expect(result.firstName).toBe('John');
    expect(result.lastName).toBe('Doe');
    expect(result.trigram).toBe('JDO');
    expect(result.picture).toBe('pic.jpg');
  });
});
