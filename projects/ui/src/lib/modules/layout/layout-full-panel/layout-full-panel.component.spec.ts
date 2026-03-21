import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LayoutFullPanelComponent } from './layout-full-panel.component';

describe('LayoutFullPanelComponent', () => {
  let component: LayoutFullPanelComponent;
  let fixture: ComponentFixture<LayoutFullPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LayoutFullPanelComponent,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutFullPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default width to 400px', () => {
    expect(component.width()).toBe('400px');
  });

  it('should default title to empty string', () => {
    expect(component.title()).toBe('');
  });

  it('should accept a custom width', () => {
    fixture.componentRef.setInput('width', '600px');
    fixture.detectChanges();
    expect(component.width()).toBe('600px');
  });

  it('should accept a custom title', () => {
    fixture.componentRef.setInput('title', 'Panel Title');
    fixture.detectChanges();
    expect(component.title()).toBe('Panel Title');
  });

  it('should emit closeEvent when askClose is called', () => {
    spyOn(component.closeEvent, 'emit');
    component.askClose();
    expect(component.closeEvent.emit).toHaveBeenCalled();
  });
});
