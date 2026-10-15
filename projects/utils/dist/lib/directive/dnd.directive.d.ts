import * as i0 from "@angular/core";
export declare class DndDirective {
    fileOver: boolean;
    fileDropped: import("@angular/core").OutputEmitterRef<FileList>;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DndDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DndDirective, "[appDnd]", never, {}, { "fileDropped": "fileDropped"; }, never, never, true, never>;
}
