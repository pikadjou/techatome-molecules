import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { of } from 'rxjs';

import { TaPwaService } from '@ta/capacitor';

import { PwaComponent } from './pwa.component';

describe('PwaComponent', () => {
  let component: PwaComponent;
  let fixture: ComponentFixture<PwaComponent>;

  const mockPwaService = {
    isPWaCapability$: of(false),
    launchInstall: jasmine.createSpy('launchInstall'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        PwaComponent,
      ],
      providers: [{ provide: TaPwaService, useValue: mockPwaService }],
    }).compileComponents();
    fixture = TestBed.createComponent(PwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isShowed to false when no PWA capability', () => {
    expect(component.isShowed).toBeFalse();
  });

  it('should hide on no click', () => {
    component.isShowed = true;
    component.onNoClick();
    expect(component.isShowed).toBeFalse();
  });

  it('should hide and launch install on yes click', () => {
    component.isShowed = true;
    component.onYesClick();
    expect(component.isShowed).toBeFalse();
    expect(mockPwaService.launchInstall).toHaveBeenCalled();
  });

  it('should hide on dontAsk', () => {
    component.isShowed = true;
    component.dontAsk();
    expect(component.isShowed).toBeFalse();
  });
});
