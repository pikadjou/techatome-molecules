import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  signal,
} from "@angular/core";

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
  createdAt: string;
}

const CATEGORIES = ["Electronics", "Clothing", "Books", "Food", "Furniture", "Sports"];

const PRODUCTS: Product[] = [
  { id: 1, name: "Laptop Pro 16", category: "Electronics", price: 1299, stock: 45, available: true, createdAt: "2024-01-15" },
  { id: 2, name: "Wireless Headphones", category: "Electronics", price: 89, stock: 120, available: true, createdAt: "2024-02-20" },
  { id: 3, name: "Cotton T-Shirt", category: "Clothing", price: 25, stock: 300, available: true, createdAt: "2024-03-10" },
  { id: 4, name: "JavaScript Patterns", category: "Books", price: 42, stock: 0, available: false, createdAt: "2023-11-05" },
  { id: 5, name: "Organic Coffee", category: "Food", price: 18, stock: 200, available: true, createdAt: "2024-04-01" },
  { id: 6, name: "Standing Desk", category: "Furniture", price: 599, stock: 15, available: true, createdAt: "2023-09-22" },
  { id: 7, name: "Running Shoes", category: "Sports", price: 135, stock: 80, available: true, createdAt: "2024-05-14" },
  { id: 8, name: "Mechanical Keyboard", category: "Electronics", price: 159, stock: 60, available: true, createdAt: "2024-01-30" },
  { id: 9, name: "Winter Jacket", category: "Clothing", price: 210, stock: 0, available: false, createdAt: "2023-10-15" },
  { id: 10, name: "Clean Code", category: "Books", price: 38, stock: 55, available: true, createdAt: "2024-02-28" },
  { id: 11, name: "Protein Bars", category: "Food", price: 32, stock: 150, available: true, createdAt: "2024-06-01" },
  { id: 12, name: "Office Chair", category: "Furniture", price: 449, stock: 25, available: true, createdAt: "2023-12-10" },
  { id: 13, name: "Yoga Mat", category: "Sports", price: 45, stock: 90, available: true, createdAt: "2024-03-20" },
  { id: 14, name: "USB-C Hub", category: "Electronics", price: 65, stock: 200, available: true, createdAt: "2024-04-15" },
  { id: 15, name: "Denim Jeans", category: "Clothing", price: 78, stock: 110, available: true, createdAt: "2024-05-05" },
  { id: 16, name: "Refactoring", category: "Books", price: 45, stock: 0, available: false, createdAt: "2023-08-20" },
  { id: 17, name: "Dark Chocolate", category: "Food", price: 8, stock: 500, available: true, createdAt: "2024-06-10" },
  { id: 18, name: "Bookshelf", category: "Furniture", price: 189, stock: 10, available: true, createdAt: "2024-01-05" },
  { id: 19, name: "Tennis Racket", category: "Sports", price: 175, stock: 35, available: true, createdAt: "2024-02-15" },
  { id: 20, name: "Monitor 27in", category: "Electronics", price: 389, stock: 40, available: true, createdAt: "2024-03-25" },
];

const PRODUCTS_60: Product[] = [
  ...PRODUCTS,
  ...Array.from({ length: 40 }, (_, i) => ({
    id: 21 + i,
    name: `Produit ${21 + i}`,
    category: CATEGORIES[i % 6],
    price: [12, 35, 78, 149, 249, 399, 599, 89][i % 8],
    stock: [0, 5, 20, 50, 100, 200][i % 6],
    available: i % 4 !== 0,
    createdAt: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
  })),
];

const BASE_COLS: ColMetaData<Product>[] = [
  { name: "id", type: ParameterType.Number },
  { name: "name", type: ParameterType.String, isSearchField: true, showOnSearch: true, highlighted: true },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true, highlighted: true },
  { name: "price", type: ParameterType.Number, showOnSearch: true },
  { name: "stock", type: ParameterType.Number },
  { name: "available", type: ParameterType.Boolean, showOnSearch: true },
];

const TYPE_COLS: ColMetaData<Product>[] = [
  { name: "id", type: ParameterType.Number },
  { name: "name", type: ParameterType.String },
  { name: "available", type: ParameterType.Boolean },
  { name: "createdAt", type: ParameterType.DateTime },
  { name: "price", type: ParameterType.Number },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES },
];

const WIDTH_COLS: ColMetaData<Product>[] = [
  { name: "id", type: ParameterType.Number, notDisplayable: true },
  { name: "name", type: ParameterType.String, width: "40%" },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, width: "20%" },
  { name: "price", type: ParameterType.Number, width: "120px" },
  { name: "stock", type: ParameterType.Number, width: "100px" },
  { name: "available", type: ParameterType.Boolean, width: "120px" },
];

const PRESETS: Preset[] = [
  { name: "In Stock", filters: [{ field: "available", type: "=", value: true }] },
  { name: "Electronics", filters: [{ field: "category", type: "=", value: "Electronics" }] },
  { name: "Books", filters: [{ field: "category", type: "=", value: "Books" }] },
  { name: "Out of Stock", filters: [{ field: "available", type: "=", value: false }] },
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
  // Cell-level TemplateRefs (static: accessible in ngOnInit via templateCols getter)
  @ViewChild("priceTpl", { static: true }) priceTpl!: TemplateRef<{ $implicit: Product; value: number }>;
  @ViewChild("stockTpl", { static: true }) stockTpl!: TemplateRef<{ $implicit: Product; value: number }>;
  @ViewChild("availableTpl", { static: true }) availableTpl!: TemplateRef<{ $implicit: Product; value: boolean }>;

  // Grid IDs — unique per scenario to isolate state
  readonly cardGridId = "sc-card";
  readonly tableGridId = "sc-table";
  readonly typesGridId = "sc-types";
  readonly templateGridId = "sc-template";
  readonly filterGridId = "sc-filters";
  readonly widthGridId = "sc-width";
  readonly emptyGridId = "sc-empty";
  readonly paginationGridId = "sc-pagination";

  // Data
  readonly products = PRODUCTS;
  readonly products60 = PRODUCTS_60;
  readonly baseCols = BASE_COLS;
  readonly typeCols = TYPE_COLS;
  readonly widthCols = WIDTH_COLS;
  readonly presets = PRESETS;

  // Row-click state (shared across demos)
  readonly selected = signal<Product | null>(null);

  // Columns with TemplateRef — resolved after static ViewChild are available
  get templateCols(): ColMetaData<Product>[] {
    return [
      { name: "id", type: ParameterType.Number, width: "80px" },
      { name: "name", type: ParameterType.String, isSearchField: true },
      { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES },
      { name: "price", type: ParameterType.Number, template: this.priceTpl },
      { name: "stock", type: ParameterType.Number, template: this.stockTpl },
      { name: "available", type: ParameterType.Boolean, template: this.availableTpl },
    ];
  }

  onRowClick(row: Product): void {
    this.selected.set(row);
  }
}
