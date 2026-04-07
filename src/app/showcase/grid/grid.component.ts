import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import {
  ColMetaData,
  ParameterType,
  Preset,
  TaGridComponent,
  TaGridContainerComponent,
  TaGridControlComponent,
  TaGridFormComponent,
  TaGridHighlightFiltersComponent,
  TaGridSearchComponent,
  TaGridTagsComponent,
} from "@ta/features";
import { BadgeComponent, TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  available: boolean;
}

const COLS: ColMetaData<Product>[] = [
  {
    name: "id",
    type: ParameterType.Number,
  },
  {
    name: "name",
    type: ParameterType.String,
    isSearchField: true,
    showOnSearch: true,
    highlighted: true,
  },
  {
    name: "category",
    type: ParameterType.Enum,
    enumValues: [
      "Electronics",
      "Clothing",
      "Books",
      "Food",
      "Furniture",
      "Sports",
    ],
    showOnSearch: true,
    highlighted: true,
  },
  {
    name: "price",
    type: ParameterType.Number,
    showOnSearch: true,
  },
  {
    name: "stock",
    type: ParameterType.Number,
  },
  {
    name: "available",
    type: ParameterType.Boolean,
    showOnSearch: true,
  },
];

const PRESETS: Preset[] = [
  {
    name: "In Stock",
    filters: [{ field: "available", type: "=", value: true }],
  },
  {
    name: "Electronics",
    filters: [{ field: "category", type: "=", value: "Electronics" }],
  },
];

const DATA: Product[] = [
  { id: 1, name: "Laptop Pro 16", category: "Electronics", price: 1299, stock: 45, available: true },
  { id: 2, name: "Wireless Headphones", category: "Electronics", price: 89, stock: 120, available: true },
  { id: 3, name: "Cotton T-Shirt", category: "Clothing", price: 25, stock: 300, available: true },
  { id: 4, name: "JavaScript Patterns", category: "Books", price: 42, stock: 0, available: false },
  { id: 5, name: "Organic Coffee", category: "Food", price: 18, stock: 200, available: true },
  { id: 6, name: "Standing Desk", category: "Furniture", price: 599, stock: 15, available: true },
  { id: 7, name: "Running Shoes", category: "Sports", price: 135, stock: 80, available: true },
  { id: 8, name: "Mechanical Keyboard", category: "Electronics", price: 159, stock: 60, available: true },
  { id: 9, name: "Winter Jacket", category: "Clothing", price: 210, stock: 0, available: false },
  { id: 10, name: "Clean Code", category: "Books", price: 38, stock: 55, available: true },
  { id: 11, name: "Protein Bars", category: "Food", price: 32, stock: 150, available: true },
  { id: 12, name: "Office Chair", category: "Furniture", price: 449, stock: 25, available: true },
  { id: 13, name: "Yoga Mat", category: "Sports", price: 45, stock: 90, available: true },
  { id: 14, name: "USB-C Hub", category: "Electronics", price: 65, stock: 200, available: true },
  { id: 15, name: "Denim Jeans", category: "Clothing", price: 78, stock: 110, available: true },
  { id: 16, name: "Refactoring", category: "Books", price: 45, stock: 0, available: false },
  { id: 17, name: "Dark Chocolate", category: "Food", price: 8, stock: 500, available: true },
  { id: 18, name: "Bookshelf", category: "Furniture", price: 189, stock: 10, available: true },
  { id: 19, name: "Tennis Racket", category: "Sports", price: 175, stock: 35, available: true },
  { id: 20, name: "Monitor 27in", category: "Electronics", price: 389, stock: 40, available: true },
];

@Component({
  standalone: true,
  selector: "",
  imports: [
    BadgeComponent,
    PageLayoutComponent,
    TaGridComponent,
    TaGridContainerComponent,
    TaGridControlComponent,
    TaGridFormComponent,
    TaGridHighlightFiltersComponent,
    TaGridSearchComponent,
    TaGridTagsComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./grid.component.html",
  styleUrl: "./grid.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPage {
  public readonly gridId = "productGrid";
  public readonly cols = COLS;
  public readonly presets = PRESETS;
  public readonly data = DATA;

  public selected = signal<Product | null>(null);

  public onRowClick(row: Product) {
    this.selected.set(row);
  }
}
