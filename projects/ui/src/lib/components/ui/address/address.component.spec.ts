import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Address, AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  const mockAddress: Address = {
    id: '1',
    street: 'Main Street',
    number: '42',
    city: 'Paris',
    zipCode: '75001',
    contry: 'France',
    floor: '3',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('address', mockAddress);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the address input set', () => {
    expect(component.address()).toEqual(mockAddress);
  });
});
