import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTileComponent } from '@lib/ui/components/ui/stat-tile/stat-tile.component';

describe('StatTileComponent', () => {
  let component: StatTileComponent;
  let fixture: ComponentFixture<StatTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatTileComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StatTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to the brand tone with the value first', () => {
    expect(component.getClasses()).toEqual(['brand', 'value-first']);
  });

  it('should render the value and the label', () => {
    fixture.componentRef.setInput('value', '6');
    fixture.componentRef.setInput('label', 'Total des biens');
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('6');
    expect(text).toContain('Total des biens');
  });
});
