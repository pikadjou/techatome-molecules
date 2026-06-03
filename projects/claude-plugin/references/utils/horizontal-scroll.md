# `HorizontalScroll` — scroll horizontal au clic-glisser (drag-to-scroll)

**Usage** : Ajouter le comportement drag-to-scroll sur un conteneur HTML scrollable horizontalement.

**Instanciation** (après `ngAfterViewInit`) :
```typescript
@ViewChild('scrollContainer') scrollRef!: ElementRef<HTMLElement>;
private _scroll!: HorizontalScroll;

ngAfterViewInit() {
  this._scroll = new HorizontalScroll(this.scrollRef.nativeElement);
}
```

**Comportement** : Écoute `mousedown`, `mousemove`, `mouseleave`, `mouseup` sur l'élément pour simuler un scroll horizontal au glisser.

**Notes** : Doit être instancié après que l'élément DOM soit disponible (donc dans `ngAfterViewInit`, jamais dans `ngOnInit`). Pas besoin de cleanup manuel — les listeners sont attachés directement sur l'élément.
