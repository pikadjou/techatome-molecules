import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
  input,
} from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { InputUploadValue } from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import { DocumentDto, FileType, TaDocumentsService } from "@ta/services";
import {
  ButtonToolComponent,
  EmptyComponent,
  ErrorComponent,
  LinkComponent,
  LoaderComponent,
  MegaoctetComponent,
  TextComponent,
  TimeAgoComponent,
} from "@ta/ui";
import { TaBaseComponent, downloadFile } from "@ta/utils";

@Component({
  selector: "ta-documents-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    ButtonToolComponent,
    EmptyComponent,
    ErrorComponent,
    FontIconComponent,
    LinkComponent,
    LoaderComponent,
    MegaoctetComponent,
    TextComponent,
    TimeAgoComponent,
    TranslateModule,
  ],
})
export class DocumentsListComponent
  extends TaBaseComponent
  implements OnInit, OnChanges
{
  documentsIds = input.required<string[]>();

  emptyMessage = input<string>("");

  actions = input<"delete" | "select" | "">("");

  defaultSelected = input<string[]>([]);

  readonly = input<boolean>(false);

  @Output()
  remove = new EventEmitter<string>();

  @Output()
  checkedFilesChanged = new EventEmitter<InputUploadValue[]>();

  private readonly _documentsService = inject(TaDocumentsService);

  private _checkedFiles: InputUploadValue[] = [];
  public FileType = FileType;

  get documents$() {
    return this._documentsService.getDocuments$(this.documentsIds());
  }

  ngOnInit() {
    this._fetch();
  }

  ngOnChanges(changes: SimpleChanges) {
    // this._fetch();
  }

  public openDocument(doc: DocumentDto) {
    downloadFile(doc.url);
  }

  public removeDocument(doc: DocumentDto) {
    this.remove.emit(doc.id);
  }

  public isChecked(doc: DocumentDto) {
    return this._checkedFiles.find((x) => x.id === doc.id);
  }

  public check(doc: DocumentDto) {
    if (this.isChecked(doc)) {
      this._checkedFiles = this._checkedFiles.filter((x) => x.id !== doc.id);
    } else {
      this._checkedFiles.push({
        id: doc.id,
        name: doc.description,
        url: doc.url,
      });
    }
    this.checkedFilesChanged.emit(this._checkedFiles);
  }

  private _fetch() {
    this.requestState.asked();
    this._documentsService.fetchDocuments$(this.documentsIds()).subscribe({
      next: (documents) => {
        this._checkedFiles = documents.filter((doc) =>
          this.defaultSelected().includes(doc.id)
        );
      },
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
