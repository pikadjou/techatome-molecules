import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { RichTextComponent } from './rich-text.component';

describe('RichTextComponent', () => {
  let component: RichTextComponent;
  let fixture: ComponentFixture<RichTextComponent>;

  const mockRichText = [
    {
      type: 'paragraph' as const,
      level: 1 as const,
      children: [
        { bold: false, underline: false, italic: false, text: 'Test content', type: 'text' as const },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        RichTextComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RichTextComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('richText', mockRichText);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept richText input', () => {
    expect(component.richText()).toEqual(mockRichText);
  });
});
