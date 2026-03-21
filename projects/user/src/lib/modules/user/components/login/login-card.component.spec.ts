import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TA_AUTH_TOKEN } from '../../services/auth.service';
import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;
  let mockAuthService: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login'),
      signin: jasmine.createSpy('signin'),
      logout: jasmine.createSpy('logout').and.returnValue(Promise.resolve(null)),
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LoginCardComponent,
      ],
      providers: [
        { provide: TA_AUTH_TOKEN, useValue: mockAuthService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call auth service login', () => {
    component.login();
    expect(mockAuthService.login).toHaveBeenCalled();
  });
});
