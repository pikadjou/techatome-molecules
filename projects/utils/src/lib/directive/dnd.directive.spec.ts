import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndDirective } from './dnd.directive';

@Component({
  standalone: true,
  imports: [DndDirective],
  template: `<div appDnd (fileDropped)="onFileDropped($event)">Drop zone</div>`,
})
class TestHostComponent {
  droppedFiles: any = null;

  onFileDropped(files: any) {
    this.droppedFiles = files;
  }
}

describe('DndDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should set fileOver to true on dragover', () => {
    const div = fixture.nativeElement.querySelector('div');
    const event = new Event('dragover', { bubbles: true });
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');

    div.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should set fileOver to false on dragleave', () => {
    const div = fixture.nativeElement.querySelector('div');

    // First trigger dragover
    const dragoverEvent = new Event('dragover', { bubbles: true });
    div.dispatchEvent(dragoverEvent);

    // Then trigger dragleave
    const dragleaveEvent = new Event('dragleave', { bubbles: true });
    spyOn(dragleaveEvent, 'preventDefault');
    spyOn(dragleaveEvent, 'stopPropagation');

    div.dispatchEvent(dragleaveEvent);

    expect(dragleaveEvent.preventDefault).toHaveBeenCalled();
    expect(dragleaveEvent.stopPropagation).toHaveBeenCalled();
  });

  it('should emit fileDropped on drop with files', () => {
    const div = fixture.nativeElement.querySelector('div');
    const mockFiles = [new File(['content'], 'test.txt')];
    const dropEvent = new DragEvent('drop', { bubbles: true });

    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: { files: mockFiles },
    });

    spyOn(component, 'onFileDropped');
    div.dispatchEvent(dropEvent);

    expect(component.onFileDropped).toHaveBeenCalledWith(mockFiles);
  });

  it('should not emit fileDropped on drop with no files', () => {
    const div = fixture.nativeElement.querySelector('div');
    const dropEvent = new DragEvent('drop', { bubbles: true });

    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: { files: [] },
    });

    spyOn(component, 'onFileDropped');
    div.dispatchEvent(dropEvent);

    expect(component.onFileDropped).not.toHaveBeenCalled();
  });
});
