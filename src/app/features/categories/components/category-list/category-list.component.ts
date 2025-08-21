import { Component, inject, Input, output, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../../../services/categories/dto/category';
import { 
  CardComponent, 
  CardContentComponent, 
  CardHeaderComponent, 
  CardTitleComponent,
  TaButtonComponent,
  TaTextComponent 
} from '@ta/ui';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-list',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    TaButtonComponent,
    TaTextComponent,
    MatIcon,
    MatTooltip,
    DatePipe
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
  @Input({ required: true }) categories: Category[] = [];
  
  readonly categorySelected = output<string>();
  readonly categoryEdit = output<Category>();
  readonly categoryAdd = output<Category | null>();
  readonly documentView = output<Category>();
  readonly createCategory = output<void>();

  trackByCategory = (index: number, category: Category) => category.documentId;

  onCategoryClick(category: Category): void {
    this.categorySelected.emit(category.documentId || '');
  }

  onEditCategory(category: Category, event: Event): void {
    event.stopPropagation();
    this.categoryEdit.emit(category);
  }

  onAddSubCategory(category: Category, event: Event): void {
    event.stopPropagation();
    this.categoryAdd.emit(category);
  }

  onViewDocuments(category: Category, event: Event): void {
    event.stopPropagation();
    this.documentView.emit(category);
  }

  onCreateFirstCategory(): void {
    this.createCategory.emit();
  }

  hasSubcategories(category: Category): boolean {
    // Pour l'instant, on retourne false. Cette logique pourrait être améliorée
    // en vérifiant s'il y a des sous-catégories liées à cette catégorie
    return false;
  }

  getDocumentCount(category: Category): number {
    // Pour l'instant, on retourne 0. Cette logique pourrait être améliorée
    // en comptant les documents associés à cette catégorie
    return 0;
  }
}