import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaPermissionsService } from '../../services/permissions.service';
import { GuardComponent } from './guard.component';

describe('GuardComponent', () => {
  let component: GuardComponent;
  let fixture: ComponentFixture<GuardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        GuardComponent,
      ],
      providers: [
        TaPermissionsService,
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canDisplayErrorMessage default to true', () => {
    expect(component.canDisplayErrorMessage()).toBe(true);
  });

  it('should have preview default to false', () => {
    expect(component.preview()).toBe(false);
  });

  it('should expose noAccessIcon', () => {
    expect(component.noAccessIcon).toBeDefined();
  });

  it('should return isGuardValid$ observable', () => {
    expect(component.isGuardValid$()).toBeDefined();
  });

  it('should navigate to login on goToLogin', () => {
    component.goToLogin();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should navigate to register on goToRegister', () => {
    component.goToRegister();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
});
