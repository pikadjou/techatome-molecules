import { EventEmitter, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Document } from "@ta/files-extended";
import { FilterHelper, Menu } from "@ta/menu";
import { FileData, TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class DocumentsComponent extends TaBaseComponent implements OnInit {
    private _bottomSheet;
    private _dialog;
    document$: Observable<Document[]>;
    canAddFile: boolean;
    filesSaved: EventEmitter<any>;
    filesDeleted: EventEmitter<any>;
    menu: Menu;
    filterHelper: FilterHelper;
    constructor(_bottomSheet: MatBottomSheet, _dialog: MatDialog);
    ngOnInit(): void;
    uploadDocuments(files: {
        file: File | null;
        localUrl: string | null;
    }[]): void;
    downloadDocument(fileData: FileData): void;
    openBottomSheet(fileData: FileData): void;
    getDocs$(): Observable<FileData<any>[]>;
    private _filteredDocuments$;
    private _saveDocument;
    private _openUploadWorkflow;
    private _proposeDeleteDocument;
    private _deleteDocument;
    private _updateMenu;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocumentsComponent, "ta-documents", never, { "document$": { "alias": "document$"; "required": false; }; "canAddFile": { "alias": "canAddFile"; "required": false; }; }, { "filesSaved": "filesSaved"; "filesDeleted": "filesDeleted"; }, never, never, true, never>;
}
