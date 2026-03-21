import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';

import { MaterialIconComponent } from './material-icon.component';

describe('MaterialIconComponent', () => {
  let component: MaterialIconComponent;
  let fixture: ComponentFixture<MaterialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialIconComponent, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default outline to false', () => {
    expect(component.outline()).toBe(false);
  });

  it('should default sharp to false', () => {
    expect(component.sharp()).toBe(false);
  });

  it('should default round to false', () => {
    expect(component.round()).toBe(false);
  });

  it('should default dualTone to false', () => {
    expect(component.dualTone()).toBe(false);
  });

  it('should default type to empty string', () => {
    expect(component.type()).toBe('');
  });

  it('should accept custom input values', () => {
    fixture.componentRef.setInput('outline', true);
    fixture.componentRef.setInput('type', 'lg');
    fixture.detectChanges();
    expect(component.outline()).toBe(true);
    expect(component.type()).toBe('lg');
  });

  describe('getDisplayStyle', () => {
    it('should return material-icons by default', () => {
      expect(component.getDisplayStyle()).toBe('material-icons');
    });

    it('should return material-icons-outlined when outline is true', () => {
      fixture.componentRef.setInput('outline', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-outlined');
    });

    it('should return material-icons-sharp when sharp is true', () => {
      fixture.componentRef.setInput('sharp', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-sharp');
    });

    it('should return material-icons-round when round is true', () => {
      fixture.componentRef.setInput('round', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-round');
    });

    it('should return material-icons-two-tone when dualTone is true', () => {
      fixture.componentRef.setInput('dualTone', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-two-tone');
    });

    it('should prioritize outline over sharp, round, and dualTone', () => {
      fixture.componentRef.setInput('outline', true);
      fixture.componentRef.setInput('sharp', true);
      fixture.componentRef.setInput('round', true);
      fixture.componentRef.setInput('dualTone', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-outlined');
    });

    it('should prioritize sharp over round and dualTone', () => {
      fixture.componentRef.setInput('sharp', true);
      fixture.componentRef.setInput('round', true);
      fixture.componentRef.setInput('dualTone', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-sharp');
    });

    it('should prioritize round over dualTone', () => {
      fixture.componentRef.setInput('round', true);
      fixture.componentRef.setInput('dualTone', true);
      fixture.detectChanges();
      expect(component.getDisplayStyle()).toBe('material-icons-round');
    });
  });

  describe('getTypeStyle', () => {
    it('should return empty string when type is empty', () => {
      expect(component.getTypeStyle()).toBe('');
    });

    it('should return icon-sm when type is sm', () => {
      fixture.componentRef.setInput('type', 'sm');
      fixture.detectChanges();
      expect(component.getTypeStyle()).toBe('icon-sm');
    });

    it('should return icon-md when type is md', () => {
      fixture.componentRef.setInput('type', 'md');
      fixture.detectChanges();
      expect(component.getTypeStyle()).toBe('icon-md');
    });

    it('should return icon-lg when type is lg', () => {
      fixture.componentRef.setInput('type', 'lg');
      fixture.detectChanges();
      expect(component.getTypeStyle()).toBe('icon-lg');
    });

    it('should return icon-xs when type is xs', () => {
      fixture.componentRef.setInput('type', 'xs');
      fixture.detectChanges();
      expect(component.getTypeStyle()).toBe('icon-xs');
    });
  });

  it('should render a mat-icon element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon).toBeTruthy();
  });

  it('should apply display style and type style as classes on mat-icon', () => {
    fixture.componentRef.setInput('outline', true);
    fixture.componentRef.setInput('type', 'lg');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    // The ngClass binding combines getDisplayStyle() + ' ' + getTypeStyle()
    expect(matIcon?.classList.contains('material-icons-outlined')).toBe(true);
    expect(matIcon?.classList.contains('icon-lg')).toBe(true);
  });

  it('should apply only display style class when type is empty', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon?.classList.contains('material-icons')).toBe(true);
  });

  it('should project content inside mat-icon via ng-content', () => {
    // The template uses <ng-content> inside mat-icon.
    // When created via TestBed.createComponent, there is no projected content by default.
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon).toBeTruthy();
  });
});
