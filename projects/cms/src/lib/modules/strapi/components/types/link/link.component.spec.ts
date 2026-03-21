import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LinkComponent } from './link.component';

describe('CMS LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  const mockLink = {
    children: [
      { bold: false, underline: false, italic: false, text: 'Click here', type: 'text' as const },
    ],
    type: 'link' as const,
    url: 'https://example.com',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LinkComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('link', mockLink);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept link input', () => {
    expect(component.link()).toEqual(mockLink);
  });

  it('should open link URL on goTo', () => {
    spyOn(window, 'open');
    component.goTo();
    expect(window.open).toHaveBeenCalledWith('https://example.com');
  });
});
