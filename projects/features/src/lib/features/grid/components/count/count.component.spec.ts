import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridCountComponent } from './count.component';

describe('TaGridCountComponent', () => {
  let component: TaGridCountComponent;
  let fixture: ComponentFixture<TaGridCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaGridCountComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaGridCountComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('gridId', 'test-grid');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count results by default', () => {
    expect(component.label()).toBe('grid.tag.results');
  });

  it('should report zero before any data', () => {
    expect(component.total).toBe(0);
  });
});
