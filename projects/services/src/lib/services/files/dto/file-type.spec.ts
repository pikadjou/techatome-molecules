import { FileType } from './file-type';

describe('FileType enum', () => {
  it('should have Unknown as 0', () => {
    expect(FileType.Unknown).toBe(0);
  });

  it('should have PriceOfferVersion as 1', () => {
    expect(FileType.PriceOfferVersion).toBe(1);
  });

  it('should have SingleLineDiagram as 2', () => {
    expect(FileType.SingleLineDiagram).toBe(2);
  });

  it('should have GRDFolder as 3', () => {
    expect(FileType.GRDFolder).toBe(3);
  });

  it('should have ExternalEmail as 4', () => {
    expect(FileType.ExternalEmail).toBe(4);
  });

  it('should have Invoice as 5', () => {
    expect(FileType.Invoice).toBe(5);
  });

  it('should have PurchaseOrder as 6', () => {
    expect(FileType.PurchaseOrder).toBe(6);
  });

  it('should have Checklist as 7', () => {
    expect(FileType.Checklist).toBe(7);
  });

  it('should have SignedPriceOffer as 8', () => {
    expect(FileType.SignedPriceOffer).toBe(8);
  });

  it('should have ExitVoucher as 9', () => {
    expect(FileType.ExitVoucher).toBe(9);
  });

  it('should have Picture as 10', () => {
    expect(FileType.Picture).toBe(10);
  });
});
