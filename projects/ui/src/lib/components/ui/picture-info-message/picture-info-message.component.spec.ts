import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { PictureInfoMessageComponent } from './picture-info-message.component';

describe('PictureInfoMessageComponent', () => {
  let component: PictureInfoMessageComponent;
  let fixture: ComponentFixture<PictureInfoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        PictureInfoMessageComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PictureInfoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default type to info', () => {
    expect(component.type()).toBe('info');
  });

  it('should return empty string for displayedText when text is undefined', () => {
    expect(component.displayedText).toBe('');
  });

  it('should return text value for displayedText when text is set', () => {
    fixture.componentRef.setInput('text', 'Hello world');
    fixture.detectChanges();
    expect(component.displayedText).toBe('Hello world');
  });

  it('should detect font icon', () => {
    expect(component.isFontIcon('check_circle')).toBeTrue();
  });

  it('should detect non-font icon', () => {
    expect(component.isFontIcon('ta-custom-icon' as any)).toBeFalse();
  });
});
