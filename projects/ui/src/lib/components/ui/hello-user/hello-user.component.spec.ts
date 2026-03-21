import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HelloUserComponent } from './hello-user.component';

describe('HelloUserComponent', () => {
  let component: HelloUserComponent;
  let fixture: ComponentFixture<HelloUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HelloUserComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HelloUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default title to undefined', () => {
    expect(component.title()).toBeUndefined();
  });

  it('should default userInfo to undefined', () => {
    expect(component.userInfo()).toBeUndefined();
  });

  it('should default bulletSize to lg', () => {
    expect(component.bulletSize()).toBe('lg');
  });

  it('should accept custom title', () => {
    fixture.componentRef.setInput('title', 'Hello, John');
    fixture.detectChanges();
    expect(component.title()).toBe('Hello, John');
  });
});
