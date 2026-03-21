import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoComponent, UserLogoData } from './user-logo.component';

describe('UserLogoComponent', () => {
  let component: UserLogoComponent;
  let fixture: ComponentFixture<UserLogoComponent>;

  const mockUser: UserLogoData = {
    firstname: 'Geoffrey',
    lastname: 'Martin',
    picture: undefined,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogoComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(UserLogoComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('user', mockUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default size to lg', () => {
    expect(component.size()).toBe('lg');
  });

  it('should return correct size value for lg', () => {
    expect(component.sizeValue).toBe(48);
  });

  it('should return correct size value for sm', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    expect(component.sizeValue).toBe(16);
  });

  it('should return correct size value for md', () => {
    fixture.componentRef.setInput('size', 'md');
    fixture.detectChanges();
    expect(component.sizeValue).toBe(24);
  });

  it('should return correct size value for xl', () => {
    fixture.componentRef.setInput('size', 'xl');
    fixture.detectChanges();
    expect(component.sizeValue).toBe(70);
  });

  it('should use forced size when set', () => {
    fixture.componentRef.setInput('forcedSize', 100);
    fixture.detectChanges();
    expect(component.sizeValue).toBe(100);
  });

  it('should compute trigram from firstname', () => {
    const trigram = component.getTrigram();
    expect(trigram).toBe('GOF');
  });

  it('should return empty string for null firstname', () => {
    fixture.componentRef.setInput('user', { firstname: null, lastname: 'Martin' });
    fixture.detectChanges();
    expect(component.getTrigram()).toBe('');
  });

  it('should return short name as-is when less than 4 characters', () => {
    fixture.componentRef.setInput('user', { firstname: 'Joe', lastname: 'Doe' });
    fixture.detectChanges();
    expect(component.getTrigram()).toBe('Joe');
  });

  it('should default defaultType to font', () => {
    expect(component.defaultType()).toBe('font');
  });
});
