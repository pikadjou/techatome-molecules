import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { map } from "rxjs";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";
import { DEMO_INDEX } from "../generated/demo-index";
import { entriesOfPackage, RegistryEntry } from "../registry";

interface IndexGroup {
  name: string;
  entries: RegistryEntry[];
}

@Component({
  standalone: true,
  selector: "app-package-index",
  imports: [PageLayoutComponent, RouterLink, TextComponent, TitleComponent],
  templateUrl: "./package-index.component.html",
  styleUrl: "./package-index.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageIndexPage {
  private _short = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get("pkg") ?? "")),
    { initialValue: "" }
  );

  readonly short = computed(() => this._short());

  readonly pkg = computed(() => entriesOfPackage(this._short())[0]?.pkg ?? "");

  readonly groups = computed<IndexGroup[]>(() => {
    const byGroup = new Map<string, RegistryEntry[]>();
    for (const entry of entriesOfPackage(this._short())) {
      const bucket = byGroup.get(entry.group) ?? [];
      bucket.push(entry);
      byGroup.set(entry.group, bucket);
    }
    return [...byGroup.entries()]
      .map(([name, entries]) => ({ name, entries: entries.sort((a, b) => a.id.localeCompare(b.id)) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  summaryOf(id: string): string {
    return DEMO_INDEX[id]?.summary ?? "";
  }
}
