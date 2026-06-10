import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BannerComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('message', 'Test banner message');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the message input set', () => {
    expect(component.message()).toBe('Test banner message');
  });

  it('should default type to warning', () => {
    expect(component.type()).toBe('warning');
  });

  it('should apply banner--warning class by default', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--warning');
  });

  it('should apply banner--success class when type is success', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--success');
  });

  it('should apply banner--alert class when type is alert', () => {
    fixture.componentRef.setInput('type', 'alert');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--alert');
  });

  it('should apply banner--default class when type is default', () => {
    fixture.componentRef.setInput('type', 'default');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--default');
  });

  it('should remove previous type class when type changes', () => {
    fixture.componentRef.setInput('type', 'warning');
    fixture.detectChanges();
    fixture.componentRef.setInput('type', 'success');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).not.toContain('banner--warning');
    expect(el.classList).toContain('banner--success');
  });
});
