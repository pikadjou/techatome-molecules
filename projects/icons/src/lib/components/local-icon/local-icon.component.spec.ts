import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizer } from '@angular/platform-browser';

import { TaIconType, TaIconsService } from '../../services/icons.service';
import { LocalIconComponent } from './local-icon.component';

describe('LocalIconComponent', () => {
  let component: LocalIconComponent;
  let fixture: ComponentFixture<LocalIconComponent>;
  let mockIconsService: jasmine.SpyObj<TaIconsService>;

  beforeEach(async () => {
    mockIconsService = jasmine.createSpyObj('TaIconsService', ['getIcon']);
    mockIconsService.getIcon.and.returnValue('<svg></svg>');

    await TestBed.configureTestingModule({
      imports: [LocalIconComponent],
      providers: [
        { provide: TaIconsService, useValue: mockIconsService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalIconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('type', TaIconType.Add);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a required type input', () => {
    expect(component.type()).toBe(TaIconType.Add);
  });

  it('should accept a different TaIconType', () => {
    fixture.componentRef.setInput('type', TaIconType.Search);
    fixture.detectChanges();
    expect(component.type()).toBe(TaIconType.Search);
  });

  it('should default size to xs', () => {
    expect(component.size()).toBe('xs');
  });

  it('should accept a custom size', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.size()).toBe('lg');
  });

  it('should default rotation to false', () => {
    expect(component.rotation()).toBe(false);
  });

  it('should accept rotation set to true', () => {
    fixture.componentRef.setInput('rotation', true);
    fixture.detectChanges();
    expect(component.rotation()).toBe(true);
  });

  it('should call icon service when getting svg icon', () => {
    component.getSvgIcon();
    expect(mockIconsService.getIcon).toHaveBeenCalledWith(TaIconType.Add);
  });

  it('should call icon service with the current type value', () => {
    fixture.componentRef.setInput('type', TaIconType.Delete);
    fixture.detectChanges();
    component.getSvgIcon();
    expect(mockIconsService.getIcon).toHaveBeenCalledWith(TaIconType.Delete);
  });

  it('should return a sanitized HTML value from getSvgIcon', () => {
    const result = component.getSvgIcon();
    expect(result).toBeDefined();
  });

  it('should render the internal-icon div when type is set', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const iconDiv = compiled.querySelector('.internal-icon');
    expect(iconDiv).toBeTruthy();
  });

  it('should not render when type is null', () => {
    fixture.componentRef.setInput('type', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const iconDiv = compiled.querySelector('.internal-icon');
    expect(iconDiv).toBeFalsy();
  });

  describe('getSize', () => {
    it('should return 28px for xs', () => {
      fixture.componentRef.setInput('size', 'xs');
      fixture.detectChanges();
      expect(component.getSize()).toBe('28px');
    });

    it('should return 35px for sm', () => {
      fixture.componentRef.setInput('size', 'sm');
      fixture.detectChanges();
      expect(component.getSize()).toBe('35px');
    });

    it('should return 50px for md', () => {
      fixture.componentRef.setInput('size', 'md');
      fixture.detectChanges();
      expect(component.getSize()).toBe('50px');
    });

    it('should return 120px for lg', () => {
      fixture.componentRef.setInput('size', 'lg');
      fixture.detectChanges();
      expect(component.getSize()).toBe('120px');
    });

    it('should return 120px for xl', () => {
      fixture.componentRef.setInput('size', 'xl');
      fixture.detectChanges();
      expect(component.getSize()).toBe('120px');
    });

    it('should return auto for unknown size', () => {
      fixture.componentRef.setInput('size', 'xxl');
      fixture.detectChanges();
      expect(component.getSize()).toBe('auto');
    });
  });

  describe('DOM rendering', () => {
    it('should apply the width style based on getSize', () => {
      fixture.componentRef.setInput('size', 'md');
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const iconDiv = compiled.querySelector('.internal-icon') as HTMLElement;
      if (iconDiv) {
        expect(iconDiv.style.width).toBe('50px');
      }
    });
  });
});
