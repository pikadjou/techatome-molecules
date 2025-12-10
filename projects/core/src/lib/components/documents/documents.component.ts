import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";

import { map } from "rxjs/operators";

import { Observable, combineLatest, of } from "rxjs";

import {
  Document,
  FileMetadata,
  FilesDisplayComponent,
} from "@ta/files-extended";
import {
  BottomSheetData,
  BottomSheetTemplateBasicComponent,
  BottomSheetTemplateBasicParams,
  FilterHelper,
  Menu,
} from "@ta/menu";
import { openModal } from "@ta/ui";
import {
  FileData,
  TaBaseComponent,
  downloadFile,
  getFileExtension,
} from "@ta/utils";

import {
  UploadDocumentModal,
  UploadDocumentResult,
} from "./upload/upload-visit-document/upload-document.component";

@Component({
  selector: "ta-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
  standalone: true,
  imports: [FilesDisplayComponent],
})
export class DocumentsComponent extends TaBaseComponent implements OnInit {
  @Input()
  document$!: Observable<Document[]>;

  @Input()
  canAddFile!: boolean;

  @Output()
  filesSaved = new EventEmitter();

  @Output()
  filesDeleted = new EventEmitter();

  public menu: Menu;

  public filterHelper = new FilterHelper([
    { label: "documents.mine", defaultOpen: false },
    { label: "documents.all", defaultOpen: true },
  ]);

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _dialog: MatDialog
  ) {
    super();
    this.menu = this.filterHelper.getMenu();
  }
  ngOnInit(): void {
    this._registerSubscription(
      combineLatest({
        all: this._filteredDocuments$("all"),
        mine: this._filteredDocuments$("mine"),
      }).subscribe((data) => {
        this._updateMenu({ all: data.all.length, mine: data.mine.length });
      })
    );
  }

  public uploadDocuments(
    files: { file: File | null; localUrl: string | null }[]
  ) {
    this._openUploadWorkflow(files[0].file!);
  }
  public downloadDocument(fileData: FileData) {
    downloadFile(fileData.url);
    this._bottomSheet.dismiss(true);
  }

  public openBottomSheet(fileData: FileData): void {
    const bottomSheetData: BottomSheetData[] = [
      {
        label: "documents.download",
        icon: "download",
        action: () => this.downloadDocument(fileData),
      },
      {
        label: "documents.delete",
        icon: "delete",
        action: () => this._proposeDeleteDocument(fileData),
      },
    ];

    this._bottomSheet.open<
      BottomSheetTemplateBasicComponent,
      BottomSheetTemplateBasicParams
    >(BottomSheetTemplateBasicComponent, {
      data: {
        orientation: "horizontal",
        menu$: of(bottomSheetData),
      },
    });
  }

  public getDocs$() {
    return this._filteredDocuments$(this.filterHelper.filter).pipe(
      map((documents) =>
        documents.map<FileData>((document) => {
          return {
            id: document.id,
            url: document.url,
            type: "Document",
            fileMetaData: document.fileMetadata,
            fileExtension: getFileExtension(document.url),
          };
        })
      )
    );
  }

  private _filteredDocuments$(filter: string) {
    return this.document$.pipe(
      map((documents) =>
        documents.filter((document) => {
          if (filter === "all") return true;
          if (filter === "mine" && document.isOwner) return true;
          return false;
        })
      )
    );
  }

  private _saveDocument(file: File, fileMetadata: Partial<FileMetadata>) {
    this.requestState.asked();
    this.filesSaved.emit({ file, fileMetadata });
  }

  private _openUploadWorkflow(file: File) {
    this._registerSubscription(
      this._dialog
        .open(UploadDocumentModal, {
          panelClass: "full-screen-modal",
          data: {
            file,
          },
        })
        .afterClosed()
        .subscribe((result: UploadDocumentResult | null) => {
          if (!result) {
            return;
          }
          this._saveDocument(file, {
            description: result.description,
            fileType: {
              id: result.documentTypeId,
              translatedValue: "",
            },
          });
        })
    );
  }

  private _proposeDeleteDocument(fileData: FileData) {
    this._registerSubscription(
      openModal(this._dialog).subscribe((result: any) => {
        if (result) {
          this._deleteDocument(fileData);
        }
      })
    );

    this._bottomSheet.dismiss(true);
  }

  private _deleteDocument(fileData: FileData) {
    this.filesDeleted.emit(fileData);
  }

  private _updateMenu(data: { all: number; mine: number }) {
    this.filterHelper.updateMenuDatas([
      {
        key: "documents.mine",
        options: {
          notificationBadge: {
            label: data.mine,
          },
        },
      },
      {
        key: "documents.all",
        options: {
          notificationBadge: {
            label: data.all,
          },
        },
      },
    ]);
    this.menu = this.filterHelper.getMenu();
  }
}
