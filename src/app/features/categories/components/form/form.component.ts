import { Component, inject, input, OnInit, signal } from "@angular/core";
import { InputBase } from "@ta/form-model";
import { TaFormComponent } from "@ta/form-basic";
import { FormCategoriesService } from "../../../../services/categories/form.service";
import { CategoryFormData } from "../../../../services/shared/types/form-data.types";
import { CategoriesService } from "../../../../services/categories/categories.service";
import { TaBaseComponent } from "@ta/utils";
import { HttpErrorResponse } from "@angular/common/http";
import { ENotificationCode, TaNotificationService } from "@ta/notification";
import { TaRoutes } from "@ta/menu";
import { ECategoriesRoute } from "../../categories.routes";

@Component({
  standalone: true,
  selector: "app-category-form",
  imports: [TaFormComponent],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent extends TaBaseComponent implements OnInit {
  id = input.required<string | null>();

  public form = signal<InputBase<any>[]>([]);

  private readonly _notificationService = inject(TaNotificationService);

  private readonly _formCategoriesService = inject(FormCategoriesService);
  private readonly _categoriesService = inject(CategoriesService);

  ngOnInit() {
    this._fetch();
  }

  public save(data: unknown) {
    const cat = this._formCategoriesService.formatFormCategory(
      data as CategoryFormData & { parent?: string }
    );

    const obs = this.id()
      ? this._categoriesService.updateCategory$(this.id()!, cat)
      : this._categoriesService.addCategory$(cat);
    obs.subscribe({
      next: (cat) => {
        this.requestState.completed();
        this._notificationService.addNotification(
          "notification.common.success",
          ENotificationCode.success
        );
        this._router.navigateByUrl(
          TaRoutes.getAbsoluteUrl(
            [ECategoriesRoute.categories, ECategoriesRoute.list],
            {
              id: cat.documentId ?? "all",
            }
          )
        );
      },
      error: (error: HttpErrorResponse) => {
        this._notificationService.addNotification(
          "notification.common.error",
          ENotificationCode.error
        );
      },
    });
  }
  private _fetch() {
    const parentId = this._getSnapshotQueryParams("parentId");
    if (!this.id()) {
      this.form.set(this._formCategoriesService.getFormCategory(parentId));
      return;
    }
    this._categoriesService.fetchCategory$(this.id()!).subscribe({
      next: (category) => {
        this.form.set(
          this._formCategoriesService.getFormCategory(parentId, category)
        );
      },
    });
  }
}
