import { Directive, output } from "@angular/core";

@Directive({
  selector: "[appDnd]",
  standalone: true,
  host: {
    "[class.fileover]": "fileOver",
    "(dragover)": "onDragOver($event)",
    "(dragleave)": "onDragLeave($event)",
    "(drop)": "onDrop($event)",
  },
})
export class DndDirective {
  public fileOver = false;

  fileDropped = output<FileList>();

  public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
