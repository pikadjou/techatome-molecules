import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerComponent } from './image-viewer.component';

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    component.file = {
      url: 'https://example.com/image.jpg',
      filename: 'image.jpg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept file input', () => {
    expect(component.file.url).toBe('https://example.com/image.jpg');
  });
});
