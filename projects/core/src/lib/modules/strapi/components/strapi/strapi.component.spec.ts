import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiComponent } from './strapi.component';

describe('StrapiComponent', () => {
  let component: StrapiComponent;
  let fixture: ComponentFixture<StrapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrapiComponent],
    })
      .overrideComponent(StrapiComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(StrapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
