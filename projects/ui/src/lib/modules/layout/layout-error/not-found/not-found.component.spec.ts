import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LayoutNotFoundComponent } from './not-found.component';

describe('LayoutNotFoundComponent', () => {
  let component: LayoutNotFoundComponent;
  let fixture: ComponentFixture<LayoutNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LayoutNotFoundComponent,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when goToHome is called', () => {
    spyOn((component as any)._router, 'navigateByUrl');
    component.goToHome();
    expect((component as any)._router.navigateByUrl).toHaveBeenCalledWith('/');
  });
});
