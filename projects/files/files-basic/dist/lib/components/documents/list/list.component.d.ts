import { EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { InputUploadValue } from "@ta/form-model";
import { DocumentDto, FileType } from "@ta/services";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class DocumentsListComponent extends TaBaseComponent implements OnInit, OnChanges {
    documentsIds: string[];
    emptyMessage: string;
    actions: "delete" | "select" | "";
    defaultSelected: string[];
    readonly: boolean;
    remove: EventEmitter<string>;
    checkedFilesChanged: EventEmitter<InputUploadValue[]>;
    private readonly _documentsService;
    private _checkedFiles;
    FileType: typeof FileType;
    get documents$(): import("rxjs").Observable<DocumentDto[] | undefined>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    openDocument(doc: DocumentDto): void;
    removeDocument(doc: DocumentDto): void;
    isChecked(doc: DocumentDto): InputUploadValue | undefined;
    check(doc: DocumentDto): void;
    private _fetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocumentsListComponent, "ta-documents-list", never, { "documentsIds": { "alias": "documentsIds"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "actions": { "alias": "actions"; "required": false; }; "defaultSelected": { "alias": "defaultSelected"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "remove": "remove"; "checkedFilesChanged": "checkedFilesChanged"; }, never, never, true, never>;
}
