import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ExpandableTextComponent } from './expandable-text.component';

describe('ExpandableTextComponent', () => {
  let component: ExpandableTextComponent;
  let fixture: ComponentFixture<ExpandableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ExpandableTextComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ExpandableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default height to 100', () => {
    expect(component.height()).toBe(100);
  });

  it('should default showFullText to false', () => {
    expect(component.showFullText).toBeFalse();
  });

  it('should toggle showFullText', () => {
    expect(component.showFullText).toBeFalse();
    component.toggleText();
    expect(component.showFullText).toBeTrue();
    component.toggleText();
    expect(component.showFullText).toBeFalse();
  });

  it('should return auto height when showFullText is true', () => {
    component.showFullText = true;
    expect(component.textHeight).toBe('auto');
  });

  it('should return fixed height when showFullText is false and no element ref', () => {
    component.showFullText = false;
    expect(component.textHeight).toBe('100px');
  });

  it('should report hasTooBigText as true when no element ref', () => {
    expect(component.hasTooBigText).toBeTrue();
  });
});
