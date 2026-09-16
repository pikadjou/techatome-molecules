import * as i0 from '@angular/core';
import { input, Component, output, inject, computed, ViewEncapsulation, EventEmitter, signal, ViewChild, Output } from '@angular/core';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TitleComponent, TextComponent, ToastComponent } from '@ta/ui';
import { TaBaseComponent, SafePipe, isNotEmptyObject, isNonNullable } from '@ta/utils';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { ColorTool } from 'editorjs-color';
import { firstValueFrom, merge, fromEvent } from 'rxjs';
import { TaDocumentsService } from '@ta/services';
import { TaTranslationService } from '@ta/translation';
import { DomSanitizer } from '@angular/platform-browser';
import { IconText, IconListBulleted, IconListNumbered, IconQuote, IconWarning, IconDelimiter, IconPicture, IconChevronUp, IconChevronDown, IconTrash } from '@codexteam/icons';
import edjsHTML from 'editorjs-html';

class BlockTextComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.blocks = input.required();
        this.ENotificationCode = ENotificationCode;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BlockTextComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: BlockTextComponent, isStandalone: true, selector: "ta-cms-editor-blocks", inputs: { blocks: { classPropertyName: "blocks", publicName: "blocks", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@for (block of this.blocks(); track block.id) { @switch (block.type) { @case\n('header') {\n<ta-title [level]=\"block.data.level\">\n  {{ block.data.text }}\n</ta-title>\n} @case ('paragraph') {\n<ta-text>\n  <div [innerHTML]=\"block.data.text | safe : 'html'\"></div>\n</ta-text>\n} @case ('list') { @if (block.data.style === 'ordered') {\n<ol>\n  @for (item of block.data.items; track item) {\n  <li>\n    {{ item }}\n  </li>\n  }\n</ol>\n} @else if (block.data.style === 'unordered') {\n<ul>\n  @for (item of block.data.items; track item) {\n  <li>\n    {{ item }}\n  </li>\n  }\n</ul>\n} } @case ('delimiter') {\n<hr />\n} @case ('image') {\n<img [src]=\"block.data.file.url\" style=\"max-width: 100%\" />\n} @case ('quote') {\n<div class=\"flex-start g-space-xs\">\n  @if (block.data.caption) {\n  <div>{{ block.data.caption }}:</div>\n  }\n  <q [innerHTML]=\"block.data.text | safe : 'html'\"></q>\n</div>\n} @case ('warning') {\n<ta-toast>\n  <ta-notification-inline\n    [message]=\"block.data.message\"\n    [code]=\"this.ENotificationCode.warning\"\n    [showClose]=\"false\"\n  ></ta-notification-inline>\n</ta-toast>\n} } }\n", styles: [""], dependencies: [{ kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "pipe", type: SafePipe, name: "safe" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: ToastComponent, selector: "ta-toast", inputs: ["code"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BlockTextComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms-editor-blocks", standalone: true, imports: [
                        NotificationInlineComponent,
                        SafePipe,
                        TitleComponent,
                        TextComponent,
                        ToastComponent,
                    ], template: "@for (block of this.blocks(); track block.id) { @switch (block.type) { @case\n('header') {\n<ta-title [level]=\"block.data.level\">\n  {{ block.data.text }}\n</ta-title>\n} @case ('paragraph') {\n<ta-text>\n  <div [innerHTML]=\"block.data.text | safe : 'html'\"></div>\n</ta-text>\n} @case ('list') { @if (block.data.style === 'ordered') {\n<ol>\n  @for (item of block.data.items; track item) {\n  <li>\n    {{ item }}\n  </li>\n  }\n</ol>\n} @else if (block.data.style === 'unordered') {\n<ul>\n  @for (item of block.data.items; track item) {\n  <li>\n    {{ item }}\n  </li>\n  }\n</ul>\n} } @case ('delimiter') {\n<hr />\n} @case ('image') {\n<img [src]=\"block.data.file.url\" style=\"max-width: 100%\" />\n} @case ('quote') {\n<div class=\"flex-start g-space-xs\">\n  @if (block.data.caption) {\n  <div>{{ block.data.caption }}:</div>\n  }\n  <q [innerHTML]=\"block.data.text | safe : 'html'\"></q>\n</div>\n} @case ('warning') {\n<ta-toast>\n  <ta-notification-inline\n    [message]=\"block.data.message\"\n    [code]=\"this.ENotificationCode.warning\"\n    [showClose]=\"false\"\n  ></ta-notification-inline>\n</ta-toast>\n} } }\n" }]
        }] });

const EDITOR_ALL_TOOLS = [
    'header',
    'list',
    'quote',
    'delimiter',
    'warning',
    'color',
    'image',
    'mention',
];

class TagTool {
    static get isInline() {
        return true;
    }
    static get shortcut() {
        return "CTRL+A";
    }
    static get sanitize() {
        return {
            span: {
                class: true,
                "data-user-id": true,
            },
        };
    }
    constructor({ api, config, }) {
        this.users = [];
        this.dropdown = document.createElement("div");
        this.templateTagSpan = document.createElement("span");
        this._currentTagSpan = null;
        this.handleKeydown = (event) => {
            if (!event || !(event instanceof KeyboardEvent)) {
                return;
            }
            if (event.key === "@") {
                event.preventDefault(); // Empêche l'insertion du @ par défaut
                this._insertTagAtCursor();
                return;
            }
            if (event.key === "Escape") {
                this._cancelTag();
            }
        };
        this.handleTyping = () => {
            if (!this._currentTagSpan) {
                return;
            }
            const text = this._currentTagSpan?.textContent?.trim();
            const query = text?.slice(1).toLowerCase(); // Supprime le @ et met en minuscule
            const filteredUsers = !query || query?.length === 0
                ? this.users
                : this.users.filter((user) => user.name.toLowerCase().includes(query));
            this._updateDropdown(filteredUsers);
        };
        this.handleOutsideClick = (event) => {
            if (!event) {
                return;
            }
            if (this.dropdown.hidden) {
                return;
            }
            // Vérifie si le clic n'est PAS sur la dropdown ni sur la mention en cours
            if (!this.dropdown.contains(event.target) &&
                this._currentTagSpan !== event.target) {
                this._cancelTag();
            }
        };
        this.api = api;
        this.users = config?.users || [];
        this._initDOM();
    }
    render() {
        return {
            icon: "@",
            label: "Tag",
            onActivate: () => {
                this._insertTagAtCursor();
            },
        };
    }
    surround(range) {
        if (!range) {
            return;
        }
        if (!this._currentTagSpan) {
            return;
        }
        this._currentTagSpan = this.templateTagSpan.cloneNode(true);
        range.insertNode(this._currentTagSpan);
        this._showDropdown();
    }
    checkState() {
        return false;
    }
    _initDOM() {
        this.templateTagSpan.classList.add("tag-user", "text-color-text-brand-primary");
        this.templateTagSpan.dataset["userId"] = "";
        this.templateTagSpan.textContent = "@";
        this.dropdown.classList.add("tag-dropdown", "p-space-sm", "bxs-shadow-black-sm");
        this.dropdown.style.position = "absolute";
        this.dropdown.style.background = "white";
        this.dropdown.style.zIndex = "1000";
        this.dropdown.style.maxHeight = "150px";
        this.dropdown.style.overflowY = "auto";
        const editorDiv = document.body.querySelector(".editor-container");
        if (editorDiv) {
            this.api.listeners.on(editorDiv, "keydown", this.handleKeydown);
            this.api.listeners.on(editorDiv, "input", this.handleTyping);
        }
        this.api.listeners.on(document.body, "click", this.handleOutsideClick);
    }
    _insertTagAtCursor() {
        const selection = window.getSelection();
        if (!selection) {
            return;
        }
        const range = selection.getRangeAt(0);
        if (!range) {
            return;
        }
        this._currentTagSpan = this.templateTagSpan.cloneNode(true);
        range.insertNode(this._currentTagSpan);
        range.setStartAfter(this._currentTagSpan);
        range.setEndAfter(this._currentTagSpan);
        selection.removeAllRanges();
        selection.addRange(range);
        this._showDropdown();
    }
    _showDropdown() {
        if (!this._currentTagSpan) {
            return;
        }
        this._updateDropdown(this.users);
        document.body.appendChild(this.dropdown);
        const rect = this._currentTagSpan.getBoundingClientRect();
        this.dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        this.dropdown.style.left = `${rect.left + window.scrollX}px`;
    }
    _hideDropdown() {
        document.body.removeChild(this.dropdown);
    }
    _updateDropdown(users) {
        this.dropdown.innerHTML = "";
        if (users.length === 0) {
            const noResult = document.createElement("div");
            noResult.textContent = "Aucun résultat";
            noResult.style.padding = "5px";
            this.dropdown.appendChild(noResult);
            return;
        }
        users.forEach((user, index) => {
            const option = document.createElement("div");
            option.textContent = user.name;
            option.style.padding = "5px";
            option.style.cursor = "pointer";
            option.dataset["index"] = index.toString();
            option.addEventListener("click", () => this._selectUser(user));
            this.dropdown.appendChild(option);
        });
    }
    _selectUser(user) {
        if (!this._currentTagSpan) {
            return;
        }
        // Remplace le contenu du span avec le nom sélectionné
        this._currentTagSpan.textContent = `@${user.name}`;
        this._currentTagSpan.dataset["userId"] = user.id;
        // Insère un nœud texte après la tag pour éviter de garder le style
        const textNode = document.createTextNode("\u00A0"); // Un espace pour éviter que le curseur colle
        this._currentTagSpan.after(textNode);
        // 🔥 Déplace le curseur après la tag pour continuer à écrire normalement
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStartAfter(textNode);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);
        // Cache la dropdown et réinitialise
        this._currentTagSpan = null;
        this._hideDropdown();
    }
    _cancelTag() {
        if (!this._currentTagSpan) {
            return;
        }
        // Récupère le texte à l'intérieur de la span
        const textContent = this._currentTagSpan.textContent || "";
        // Crée un nœud texte avec le même contenu
        const textNode = document.createTextNode(textContent);
        // Remplace la span par le texte brut
        this._currentTagSpan.replaceWith(textNode);
        // Réinitialise la référence
        this._currentTagSpan = null;
        this._hideDropdown();
    }
}

class EditorToolbarComponent {
    constructor() {
        /** Identifiant du bloc sous le curseur, pour marquer l'outil correspondant. */
        this.activeTool = input(null);
        this.labels = input({});
        /** Outils montés dans l'éditeur ; la barre n'offre que ceux-là. */
        this.enabledTools = input(EDITOR_ALL_TOOLS);
        this.blockCommand = output();
        this.blockTool = output();
        this._sanitizer = inject(DomSanitizer);
        this.blockTools = computed(() => {
            const enabled = new Set(this.enabledTools());
            return this._allBlockTools.filter(entry => !entry.requires || enabled.has(entry.requires));
        });
        this._allBlockTools = [
            { icon: this._trust(IconText), id: 'paragraph', labelKey: 'paragraph' },
            { icon: null, id: 'header-1', labelKey: 'header1', requires: 'header', text: 'H1' },
            { icon: null, id: 'header-2', labelKey: 'header2', requires: 'header', text: 'H2' },
            { icon: null, id: 'header-3', labelKey: 'header3', requires: 'header', text: 'H3' },
            {
                icon: this._trust(IconListBulleted),
                id: 'list-unordered',
                labelKey: 'listUnordered',
                requires: 'list',
            },
            {
                icon: this._trust(IconListNumbered),
                id: 'list-ordered',
                labelKey: 'listOrdered',
                requires: 'list',
            },
            { icon: this._trust(IconQuote), id: 'quote', labelKey: 'quote', requires: 'quote' },
            { icon: this._trust(IconWarning), id: 'warning', labelKey: 'warning', requires: 'warning' },
            {
                icon: this._trust(IconDelimiter),
                id: 'delimiter',
                labelKey: 'delimiter',
                requires: 'delimiter',
            },
            { icon: this._trust(IconPicture), id: 'image', labelKey: 'image', requires: 'image' },
        ];
        this.blockCommands = [
            { icon: this._trust(IconChevronUp), id: 'move-up', labelKey: 'moveUp' },
            { icon: this._trust(IconChevronDown), id: 'move-down', labelKey: 'moveDown' },
        ];
        this.deleteCommand = {
            icon: this._trust(IconTrash),
            id: 'delete',
            labelKey: 'delete',
        };
    }
    getLabel(entry) {
        return this.labels()[entry.labelKey] ?? '';
    }
    isActive(id) {
        return this.activeTool() === id;
    }
    _trust(icon) {
        return this._sanitizer.bypassSecurityTrustHtml(icon);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorToolbarComponent, isStandalone: true, selector: "ta-cms-editor-toolbar", inputs: { activeTool: { classPropertyName: "activeTool", publicName: "activeTool", isSignal: true, isRequired: false, transformFunction: null }, labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { blockCommand: "blockCommand", blockTool: "blockTool" }, ngImport: i0, template: "<div class=\"editor-toolbar\" role=\"toolbar\">\n  <div class=\"editor-toolbar__group\">\n    @for (entry of this.blockTools(); track entry.id) {\n      <button\n        type=\"button\"\n        class=\"editor-toolbar__button\"\n        [class.is-active]=\"this.isActive(entry.id)\"\n        [attr.aria-pressed]=\"this.isActive(entry.id)\"\n        [title]=\"this.getLabel(entry)\"\n        [attr.aria-label]=\"this.getLabel(entry)\"\n        (click)=\"this.blockTool.emit(entry.id)\"\n      >\n        @if (entry.icon) {\n          <span class=\"editor-toolbar__icon\" [innerHTML]=\"entry.icon\"></span>\n        }\n        @if (entry.text) {\n          <span class=\"editor-toolbar__text\">{{ entry.text }}</span>\n        }\n      </button>\n    }\n  </div>\n\n  <div class=\"editor-toolbar__separator\"></div>\n\n  <div class=\"editor-toolbar__group\">\n    @for (entry of this.blockCommands; track entry.id) {\n      <button\n        type=\"button\"\n        class=\"editor-toolbar__button\"\n        [title]=\"this.getLabel(entry)\"\n        [attr.aria-label]=\"this.getLabel(entry)\"\n        (click)=\"this.blockCommand.emit(entry.id)\"\n      >\n        <span class=\"editor-toolbar__icon\" [innerHTML]=\"entry.icon\"></span>\n      </button>\n    }\n  </div>\n\n  <div class=\"editor-toolbar__group editor-toolbar__group--end\">\n    <button\n      type=\"button\"\n      class=\"editor-toolbar__button editor-toolbar__button--danger\"\n      [title]=\"this.getLabel(this.deleteCommand)\"\n      [attr.aria-label]=\"this.getLabel(this.deleteCommand)\"\n      (click)=\"this.blockCommand.emit(this.deleteCommand.id)\"\n    >\n      <span class=\"editor-toolbar__icon\" [innerHTML]=\"this.deleteCommand.icon\"></span>\n    </button>\n  </div>\n</div>\n", styles: ["ta-cms-editor-toolbar{display:block}ta-cms-editor-toolbar .editor-toolbar{display:flex;align-items:center;flex-wrap:wrap;gap:var(--ta-space-xs);padding:var(--ta-space-xs);background-color:var(--ta-surface-secondary);border-radius:var(--ta-radius-rounded)}ta-cms-editor-toolbar .editor-toolbar__group{display:flex;align-items:center;gap:var(--ta-space-xs)}ta-cms-editor-toolbar .editor-toolbar__group--end{margin-left:auto}ta-cms-editor-toolbar .editor-toolbar__separator{width:1px;height:var(--ta-space-md);background-color:var(--ta-border-tertiary);margin:0 var(--ta-space-xs)}ta-cms-editor-toolbar .editor-toolbar__button{align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-space-xs);min-width:32px;height:32px;padding:0 var(--ta-space-xs);border:none;border-radius:var(--ta-radius-minimal);background-color:transparent;color:var(--ta-text-secondary);cursor:pointer;transition:color var(--ta-transition-fast),background-color var(--ta-transition-fast),border-color var(--ta-transition-fast)}ta-cms-editor-toolbar .editor-toolbar__button:hover{background-color:var(--ta-surface-hover-primary);color:var(--ta-text-brand-primary)}ta-cms-editor-toolbar .editor-toolbar__button:focus-visible{outline:none;box-shadow:var(--ta-shadow-focus)}ta-cms-editor-toolbar .editor-toolbar__button.is-active{background-color:var(--ta-surface-brand-secondary);color:var(--ta-text-brand-primary)}ta-cms-editor-toolbar .editor-toolbar__button--danger:hover{color:var(--ta-semantic-red-dark)}ta-cms-editor-toolbar .editor-toolbar__icon{align-items:center;display:flex;justify-content:center;margin:auto}ta-cms-editor-toolbar .editor-toolbar__icon svg{display:block;width:20px;height:20px}ta-cms-editor-toolbar .editor-toolbar__text{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-bold-weight)}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-toolbar', standalone: true, encapsulation: ViewEncapsulation.None, template: "<div class=\"editor-toolbar\" role=\"toolbar\">\n  <div class=\"editor-toolbar__group\">\n    @for (entry of this.blockTools(); track entry.id) {\n      <button\n        type=\"button\"\n        class=\"editor-toolbar__button\"\n        [class.is-active]=\"this.isActive(entry.id)\"\n        [attr.aria-pressed]=\"this.isActive(entry.id)\"\n        [title]=\"this.getLabel(entry)\"\n        [attr.aria-label]=\"this.getLabel(entry)\"\n        (click)=\"this.blockTool.emit(entry.id)\"\n      >\n        @if (entry.icon) {\n          <span class=\"editor-toolbar__icon\" [innerHTML]=\"entry.icon\"></span>\n        }\n        @if (entry.text) {\n          <span class=\"editor-toolbar__text\">{{ entry.text }}</span>\n        }\n      </button>\n    }\n  </div>\n\n  <div class=\"editor-toolbar__separator\"></div>\n\n  <div class=\"editor-toolbar__group\">\n    @for (entry of this.blockCommands; track entry.id) {\n      <button\n        type=\"button\"\n        class=\"editor-toolbar__button\"\n        [title]=\"this.getLabel(entry)\"\n        [attr.aria-label]=\"this.getLabel(entry)\"\n        (click)=\"this.blockCommand.emit(entry.id)\"\n      >\n        <span class=\"editor-toolbar__icon\" [innerHTML]=\"entry.icon\"></span>\n      </button>\n    }\n  </div>\n\n  <div class=\"editor-toolbar__group editor-toolbar__group--end\">\n    <button\n      type=\"button\"\n      class=\"editor-toolbar__button editor-toolbar__button--danger\"\n      [title]=\"this.getLabel(this.deleteCommand)\"\n      [attr.aria-label]=\"this.getLabel(this.deleteCommand)\"\n      (click)=\"this.blockCommand.emit(this.deleteCommand.id)\"\n    >\n      <span class=\"editor-toolbar__icon\" [innerHTML]=\"this.deleteCommand.icon\"></span>\n    </button>\n  </div>\n</div>\n", styles: ["ta-cms-editor-toolbar{display:block}ta-cms-editor-toolbar .editor-toolbar{display:flex;align-items:center;flex-wrap:wrap;gap:var(--ta-space-xs);padding:var(--ta-space-xs);background-color:var(--ta-surface-secondary);border-radius:var(--ta-radius-rounded)}ta-cms-editor-toolbar .editor-toolbar__group{display:flex;align-items:center;gap:var(--ta-space-xs)}ta-cms-editor-toolbar .editor-toolbar__group--end{margin-left:auto}ta-cms-editor-toolbar .editor-toolbar__separator{width:1px;height:var(--ta-space-md);background-color:var(--ta-border-tertiary);margin:0 var(--ta-space-xs)}ta-cms-editor-toolbar .editor-toolbar__button{align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-space-xs);min-width:32px;height:32px;padding:0 var(--ta-space-xs);border:none;border-radius:var(--ta-radius-minimal);background-color:transparent;color:var(--ta-text-secondary);cursor:pointer;transition:color var(--ta-transition-fast),background-color var(--ta-transition-fast),border-color var(--ta-transition-fast)}ta-cms-editor-toolbar .editor-toolbar__button:hover{background-color:var(--ta-surface-hover-primary);color:var(--ta-text-brand-primary)}ta-cms-editor-toolbar .editor-toolbar__button:focus-visible{outline:none;box-shadow:var(--ta-shadow-focus)}ta-cms-editor-toolbar .editor-toolbar__button.is-active{background-color:var(--ta-surface-brand-secondary);color:var(--ta-text-brand-primary)}ta-cms-editor-toolbar .editor-toolbar__button--danger:hover{color:var(--ta-semantic-red-dark)}ta-cms-editor-toolbar .editor-toolbar__icon{align-items:center;display:flex;justify-content:center;margin:auto}ta-cms-editor-toolbar .editor-toolbar__icon svg{display:block;width:20px;height:20px}ta-cms-editor-toolbar .editor-toolbar__text{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-bold-weight)}\n"] }]
        }], ctorParameters: () => [] });

var editorjs$4 = {
	placeholder: "Beginnen Sie zu schreiben...",
	i18n: {
		direction: "ltr",
		messages: {
			ui: {
				blockTunes: {
					toggler: {
						"Click to tune": "Klicken zum Anpassen",
						"or drag to move": "oder ziehen zum Verschieben"
					}
				},
				inlineToolbar: {
					converter: {
						"Convert to": "Umwandeln in"
					}
				},
				popover: {
					Filter: "Filtern",
					"Nothing found": "Nichts gefunden",
					"Convert to": "Umwandeln in"
				},
				toolbar: {
					toolbox: {
						Add: "Hinzufügen"
					}
				}
			},
			toolNames: {
				Text: "Text",
				Heading: "Überschrift",
				List: "Liste",
				Warning: "Warnung",
				Checklist: "Checkliste",
				Quote: "Zitat",
				Code: "Code",
				Delimiter: "Trennlinie",
				"Raw HTML": "Roh-HTML",
				Table: "Tabelle",
				Link: "Link",
				Marker: "Markierung",
				Bold: "Fett",
				Italic: "Kursiv",
				InlineCode: "Inline-Code"
			},
			tools: {
				quote: {
					"Enter a quote": "Zitat",
					"Enter a caption": "Nachricht"
				},
				warning: {
					Title: "Titel",
					Message: "Nachricht"
				},
				link: {
					"Add a link": "Link hinzufügen"
				},
				stub: {
					"The block can not be displayed correctly.": "Der Block kann nicht korrekt angezeigt werden."
				}
			},
			blockTunes: {
				"delete": {
					Delete: "Löschen"
				},
				moveUp: {
					"Move up": "Nach oben"
				},
				moveDown: {
					"Move down": "Nach unten"
				}
			}
		}
	},
	colortool: {
		backgroundColorLabel: "Hervorhebung",
		frontColorLabel: "Farbe"
	}
};
var toolbar$4 = {
	"delete": "Block löschen",
	delimiter: "Trennlinie",
	header1: "Haupttitel",
	header2: "Titel",
	header3: "Untertitel",
	image: "Bild",
	listOrdered: "Nummerierte Liste",
	listUnordered: "Aufzählungsliste",
	moveDown: "Nach unten verschieben",
	moveUp: "Nach oben verschieben",
	paragraph: "Text",
	quote: "Zitat",
	warning: "Warnung"
};
var de = {
	editorjs: editorjs$4,
	toolbar: toolbar$4
};

var de$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: de,
    editorjs: editorjs$4,
    toolbar: toolbar$4
});

var editorjs$3 = {
	placeholder: "Start writing...",
	i18n: {
		messages: {
			ui: {
				blockTunes: {
					toggler: {
						"Click to tune": "Click to tune",
						"or drag to move": "or drag to move"
					}
				},
				inlineToolbar: {
					converter: {
						"Convert to": "Convert to"
					}
				},
				toolbar: {
					toolbox: {
						Add: "Add"
					}
				}
			},
			toolNames: {
				Text: "Text",
				Heading: "Heading",
				List: "List",
				Warning: "Warning",
				Checklist: "Checklist",
				Quote: "Quote",
				Code: "Code",
				Delimiter: "Delimiter",
				"Raw HTML": "Raw HTML",
				Table: "Table",
				Link: "Link",
				Marker: "Marker",
				Bold: "Bold",
				Italic: "Italic",
				InlineCode: "InlineCode"
			},
			tools: {
				warning: {
					Title: "Title",
					Message: "Message"
				},
				link: {
					"Add a link": "Add a link"
				},
				stub: {
					"The block can not be displayed correctly.": "The block can not be displayed correctly."
				}
			},
			blockTunes: {
				"delete": {
					Delete: "Delete"
				},
				moveUp: {
					"Move up": "Move up"
				},
				moveDown: {
					"Move down": "Move down"
				}
			}
		}
	}
};
var toolbar$3 = {
	"delete": "Delete block",
	delimiter: "Separator",
	header1: "Main heading",
	header2: "Heading",
	header3: "Subheading",
	image: "Image",
	listOrdered: "Numbered list",
	listUnordered: "Bulleted list",
	moveDown: "Move down",
	moveUp: "Move up",
	paragraph: "Text",
	quote: "Quote",
	warning: "Warning"
};
var en = {
	editorjs: editorjs$3,
	toolbar: toolbar$3
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: en,
    editorjs: editorjs$3,
    toolbar: toolbar$3
});

var editorjs$2 = {
	i18n: {
		messages: {
			ui: {
				blockTunes: {
					toggler: {
						"Click to tune": "Click to tune",
						"or drag to move": "or drag to move"
					}
				},
				inlineToolbar: {
					converter: {
						"Convert to": "Convert to"
					}
				},
				toolbar: {
					toolbox: {
						Add: "Add"
					}
				}
			},
			toolNames: {
				Text: "Text",
				Heading: "Heading",
				List: "List",
				Warning: "Warning",
				Checklist: "Checklist",
				Quote: "Quote",
				Code: "Code",
				Delimiter: "Delimiter",
				"Raw HTML": "Raw HTML",
				Table: "Table",
				Link: "Link",
				Marker: "Marker",
				Bold: "Bold",
				Italic: "Italic",
				InlineCode: "InlineCode"
			},
			tools: {
				warning: {
					Title: "Title",
					Message: "Message"
				},
				link: {
					"Add a link": "Add a link"
				},
				stub: {
					"The block can not be displayed correctly.": "The block can not be displayed correctly."
				}
			},
			blockTunes: {
				"delete": {
					Delete: "Delete"
				},
				moveUp: {
					"Move up": "Move up"
				},
				moveDown: {
					"Move down": "Move down"
				}
			}
		}
	}
};
var toolbar$2 = {
	"delete": "Eliminar bloque",
	delimiter: "Separador",
	header1: "Título principal",
	header2: "Título",
	header3: "Subtítulo",
	image: "Imagen",
	listOrdered: "Lista numerada",
	listUnordered: "Lista con viñetas",
	moveDown: "Mover hacia abajo",
	moveUp: "Mover hacia arriba",
	paragraph: "Texto",
	quote: "Cita",
	warning: "Advertencia"
};
var es = {
	editorjs: editorjs$2,
	toolbar: toolbar$2
};

var es$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: es,
    editorjs: editorjs$2,
    toolbar: toolbar$2
});

var editorjs$1 = {
	placeholder: "Commencez à écrire...",
	i18n: {
		direction: "ltr",
		messages: {
			ui: {
				blockTunes: {
					toggler: {
						"Click to tune": "Cliquer pour régler",
						"or drag to move": "ou glisser pour déplacer"
					}
				},
				inlineToolbar: {
					converter: {
						"Convert to": "Convertir en"
					}
				},
				popover: {
					Filter: "Filtrer",
					"Nothing found": "Rien trouvé",
					"Convert to": "Convertir en"
				},
				toolbar: {
					toolbox: {
						Add: "Ajouter"
					}
				}
			},
			toolNames: {
				Text: "Texte",
				Heading: "Titre",
				List: "Liste",
				Warning: "Avertissement",
				Checklist: "Liste de contrôle",
				Quote: "Citation",
				Code: "Code",
				Delimiter: "Délimiteur",
				"Raw HTML": "HTML brut",
				Table: "Tableau",
				Link: "Lien",
				Marker: "Marqueur",
				Bold: "Gras",
				Italic: "Italique",
				InlineCode: "Code en ligne"
			},
			tools: {
				quote: {
					"Enter a quote": "Citation",
					"Enter a caption": "Message"
				},
				warning: {
					Title: "Titre",
					Message: "Message"
				},
				link: {
					"Add a link": "Ajouter un lien"
				},
				stub: {
					"The block can not be displayed correctly.": "Le bloc ne peut pas être affiché correctement."
				}
			},
			blockTunes: {
				"delete": {
					Delete: "Supprimer"
				},
				moveUp: {
					"Move up": "Déplacer vers le haut"
				},
				moveDown: {
					"Move down": "Déplacer vers le bas"
				}
			}
		}
	},
	colortool: {
		backgroundColorLabel: "surlignage",
		frontColorLabel: "couleur"
	}
};
var toolbar$1 = {
	"delete": "Supprimer le bloc",
	delimiter: "Séparateur",
	header1: "Titre principal",
	header2: "Titre",
	header3: "Sous-titre",
	image: "Image",
	listOrdered: "Liste numérotée",
	listUnordered: "Liste à puces",
	moveDown: "Déplacer vers le bas",
	moveUp: "Déplacer vers le haut",
	paragraph: "Texte",
	quote: "Citation",
	warning: "Avertissement"
};
var fr = {
	editorjs: editorjs$1,
	toolbar: toolbar$1
};

var fr$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fr,
    editorjs: editorjs$1,
    toolbar: toolbar$1
});

var editorjs = {
	placeholder: "Begin te schrijven...",
	i18n: {
		direction: "ltr",
		messages: {
			ui: {
				blockTunes: {
					toggler: {
						"Click to tune": "Klik om aan te passen",
						"or drag to move": "of sleep om te verplaatsen"
					}
				},
				inlineToolbar: {
					converter: {
						"Convert to": "Converteren naar"
					}
				},
				popover: {
					Filter: "Filteren",
					"Nothing found": "Niets gevonden",
					"Convert to": "Converteren naar"
				},
				toolbar: {
					toolbox: {
						Add: "Toevoegen"
					}
				}
			},
			toolNames: {
				Text: "Tekst",
				Heading: "Kop",
				List: "Lijst",
				Warning: "Waarschuwing",
				Checklist: "Controlelijst",
				Quote: "Citaat",
				Code: "Code",
				Delimiter: "Scheidingslijn",
				"Raw HTML": "Ruwe HTML",
				Table: "Tabel",
				Link: "Link",
				Marker: "Markering",
				Bold: "Vet",
				Italic: "Cursief",
				InlineCode: "Inline code"
			},
			tools: {
				quote: {
					"Enter a quote": "Citaat",
					"Enter a caption": "Bericht"
				},
				warning: {
					Title: "Titel",
					Message: "Bericht"
				},
				link: {
					"Add a link": "Een link toevoegen"
				},
				stub: {
					"The block can not be displayed correctly.": "Het blok kan niet correct worden weergegeven."
				}
			},
			blockTunes: {
				"delete": {
					Delete: "Verwijderen"
				},
				moveUp: {
					"Move up": "Omhoog"
				},
				moveDown: {
					"Move down": "Omlaag"
				}
			}
		}
	},
	colortool: {
		backgroundColorLabel: "markering",
		frontColorLabel: "kleur"
	}
};
var toolbar = {
	"delete": "Blok verwijderen",
	delimiter: "Scheidingslijn",
	header1: "Hoofdtitel",
	header2: "Titel",
	header3: "Subtitel",
	image: "Afbeelding",
	listOrdered: "Genummerde lijst",
	listUnordered: "Lijst met opsommingstekens",
	moveDown: "Omlaag verplaatsen",
	moveUp: "Omhoog verplaatsen",
	paragraph: "Tekst",
	quote: "Citaat",
	warning: "Waarschuwing"
};
var nl = {
	editorjs: editorjs,
	toolbar: toolbar
};

var nl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: nl,
    editorjs: editorjs,
    toolbar: toolbar
});

/** Ce que chaque outil de la barre pose comme bloc EditorJS. */
const TOOLBAR_BLOCK_CONFIG = {
    'delimiter': { type: 'delimiter' },
    'header-1': { data: { level: 1 }, type: 'header' },
    'header-2': { data: { level: 2 }, type: 'header' },
    'header-3': { data: { level: 3 }, type: 'header' },
    'image': { type: 'image' },
    'list-ordered': { data: { style: 'ordered' }, type: 'list' },
    'list-unordered': { data: { style: 'unordered' }, type: 'list' },
    'paragraph': { type: 'paragraph' },
    'quote': { type: 'quote' },
    'warning': { type: 'warning' },
};
class EditorInputComponent extends TaBaseComponent {
    constructor() {
        super();
        this.initValue = input();
        this.setNewValue$ = input();
        this.requestSave$ = input();
        this.clear$ = input();
        this.users = input([]);
        this.saveOnChange = input(false);
        this.maxHeight = input(false);
        this.enabledTools = input(EDITOR_ALL_TOOLS);
        this.placeholder = input();
        /** Affiche la barre d'outils au-dessus de la zone d'édition. */
        this.showToolbar = input(true);
        /** Supprime la réserve d'espace basse d'EditorJS, pour les champs courts. */
        this.isCompact = input(false);
        /** Laisse l'utilisateur régler la hauteur de la zone d'édition. */
        this.resizable = input(true);
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        /** Outil du bloc sous le curseur, que la barre met en évidence. */
        this.activeTool = signal(null);
        this.toolbarLabels = {};
        this._translationService = inject(TaTranslationService);
        this.languages = {
            de: de$1,
            en: en$1,
            es: es$1,
            fr: fr$1,
            nl: nl$1,
        };
        this._documentsService = inject(TaDocumentsService);
        this._saveAfter = false;
        this.editorInstance = null;
        this.uploadByFile = async (file) => {
            const doc = await firstValueFrom(this._documentsService.addDocument$({ file }));
            return {
                success: 1,
                file: {
                    url: doc.url,
                },
            };
        };
        this._onChange = async () => {
            if (isNotEmptyObject(this.editorInstance)) {
                const data = await this._extractWithColorTokenStyles();
                if (!data) {
                    return;
                }
                this.changed.emit({ blocks: data.blocks });
            }
            this._updateActiveTool();
            if (this.saveOnChange()) {
                this.save();
            }
            if (this._saveAfter) {
                this.save();
                this._saveAfter = false;
            }
        };
    }
    ngOnInit() {
        this.toolbarLabels = this._getLanguagePack()?.toolbar ?? {};
        const requestSave = this.requestSave$();
        if (requestSave) {
            this._registerSubscription(requestSave.subscribe({
                next: () => this.save(),
            }));
        }
        const clear = this.clear$();
        if (clear) {
            this._registerSubscription(clear.subscribe({
                next: () => this.editorInstance?.clear(),
            }));
        }
        const setNewValue = this.setNewValue$();
        if (setNewValue) {
            this._registerSubscription(setNewValue.subscribe({
                next: ({ blocks, saveAfter }) => {
                    this._saveAfter = saveAfter ?? false;
                    if (this.editorInstance && blocks) {
                        if (typeof blocks === 'string') {
                            this.editorInstance.blocks.renderFromHTML(blocks);
                        }
                        else {
                            this.editorInstance.render({ blocks: blocks });
                        }
                    }
                },
            }));
        }
    }
    ngAfterViewInit() {
        this.editorInstance = this.init();
        this._trackActiveBlock();
    }
    ngOnDestroy() {
        // `super` coupe les souscriptions posées par `_trackActiveBlock`.
        super.ngOnDestroy();
        this.editorInstance?.destroy();
        this.editorInstance = null;
    }
    async save() {
        if (isNotEmptyObject(this.editorInstance)) {
            const data = await this._extractWithColorTokenStyles();
            if (!data) {
                return;
            }
            this.saved.emit({
                blocks: data.blocks,
                tags: this._extractTags(data.blocks),
            });
        }
    }
    init() {
        const translations = this._getTranslation();
        const tools = this._buildTools(translations);
        return new EditorJS({
            holder: this.editorjs.nativeElement,
            minHeight: 100,
            data: { blocks: this.initValue() },
            placeholder: this.placeholder() ?? translations['placeholder'],
            tools,
            onChange: this._onChange,
            ...translations,
        });
    }
    _buildTools(translations) {
        const enabled = new Set(this.enabledTools());
        const tools = {};
        if (enabled.has('header')) {
            tools['header'] = Header;
        }
        if (enabled.has('list')) {
            tools['list'] = List;
        }
        if (enabled.has('quote')) {
            tools['quote'] = Quote;
        }
        if (enabled.has('delimiter')) {
            tools['delimiter'] = Delimiter;
        }
        if (enabled.has('warning')) {
            tools['warning'] = Warning;
        }
        if (enabled.has('color')) {
            tools['TextColor'] = {
                class: ColorTool,
                config: {
                    backgroundColorLabel: translations['colortool.backgroundColorLabel'],
                    frontColorLabel: translations['colortool.frontColorLabel'],
                },
            };
        }
        if (enabled.has('image')) {
            tools['image'] = {
                class: ImageTool,
                config: {
                    uploader: {
                        uploadByFile: async (file) => {
                            return this.uploadByFile(file);
                        },
                    },
                },
            };
        }
        if (enabled.has('mention')) {
            tools['mention'] = {
                class: TagTool,
                config: {
                    users: this.users(),
                },
            };
        }
        return tools;
    }
    /** Convertit le bloc courant si EditorJS le permet, sinon insère (ou remplace un bloc vide). */
    async applyBlockTool(tool) {
        const editor = this.editorInstance;
        if (!editor) {
            return;
        }
        const { data, type } = TOOLBAR_BLOCK_CONFIG[tool];
        const block = this._getCurrentBlock();
        if (!block) {
            editor.blocks.insert(type, data, undefined, editor.blocks.getBlocksCount(), true);
            this._updateActiveTool();
            return;
        }
        const index = editor.blocks.getCurrentBlockIndex();
        if (block.name === type) {
            if (data) {
                await editor.blocks.update(block.id, data);
                editor.caret.setToBlock(index, 'end');
            }
        }
        else {
            try {
                await editor.blocks.convert(block.id, type, data);
                editor.caret.setToBlock(index, 'end');
            }
            catch {
                editor.blocks.insert(type, data, undefined, block.isEmpty ? index : index + 1, true, block.isEmpty);
            }
        }
        this._updateActiveTool();
    }
    /** Déplace ou supprime le bloc courant. */
    applyBlockCommand(command) {
        const editor = this.editorInstance;
        if (!editor) {
            return;
        }
        const index = editor.blocks.getCurrentBlockIndex();
        if (index < 0) {
            return;
        }
        switch (command) {
            case 'delete': {
                editor.blocks.delete(index);
                break;
            }
            case 'move-down': {
                if (index < editor.blocks.getBlocksCount() - 1) {
                    editor.blocks.move(index + 1);
                    editor.caret.setToBlock(index + 1, 'end');
                }
                break;
            }
            case 'move-up': {
                if (index > 0) {
                    editor.blocks.move(index - 1);
                    editor.caret.setToBlock(index - 1, 'end');
                }
                break;
            }
        }
        this._updateActiveTool();
    }
    /** Relit le bloc courant à chaque clic ou frappe ; `Tab` et `/` sont retenus pour ne pas ouvrir la palette EditorJS. */
    _trackActiveBlock() {
        const holder = this.editorjs.nativeElement;
        this._registerSubscription(merge(fromEvent(holder, 'click'), fromEvent(holder, 'keyup')).subscribe(() => this._updateActiveTool()));
        this._registerSubscription(fromEvent(holder, 'keydown', { capture: true }).subscribe(event => {
            if (event.key === 'Tab' || event.key === '/') {
                event.stopPropagation();
            }
        }));
    }
    _updateActiveTool() {
        const block = this._getCurrentBlock();
        this.activeTool.set(block ? this._resolveToolId(block) : null);
    }
    _getCurrentBlock() {
        // `blocks` n'existe ni avant `isReady` ni après `destroy()`.
        const blocks = this.editorInstance?.blocks;
        if (!blocks) {
            return undefined;
        }
        const index = blocks.getCurrentBlockIndex();
        if (index < 0) {
            return undefined;
        }
        return blocks.getBlockByIndex(index);
    }
    /** Un titre ou une liste ne disent pas leur variante : on lit le DOM rendu. */
    _resolveToolId(block) {
        if (block.name === 'header') {
            const heading = block.holder.querySelector('h1, h2, h3, h4, h5, h6');
            return heading ? `header-${heading.tagName.charAt(1)}` : 'header-2';
        }
        if (block.name === 'list') {
            return block.holder.querySelector('ol') ? 'list-ordered' : 'list-unordered';
        }
        return block.name;
    }
    _getLanguagePack() {
        const language = this._translationService.getLanguage();
        if (!isNonNullable(language)) {
            return null;
        }
        return this.languages[language] ?? null;
    }
    _getTranslation() {
        return this._getLanguagePack()?.editorjs ?? {};
    }
    async _extractWithColorTokenStyles() {
        const output = await this.editorInstance?.save();
        if (!output) {
            return null;
        }
        const styledSpans = Array.from(this.editorjs.nativeElement.innerHTML.matchAll(/<span class="ce-inline-tool--color__token"(.*?)>/gs)).map((match) => ({
            style: match[1].trim(), // `style`
        }));
        if (styledSpans.length === 0) {
            return output;
        }
        let spanIndex = 0;
        const updatedBlocks = output.blocks.map(block => {
            if (block.type !== 'paragraph' || !block.data?.text) {
                return block;
            }
            const newText = block.data.text.replace(/<span class="ce-inline-tool--color__token">/gs, (match) => {
                const styled = styledSpans[spanIndex++];
                if (!styled) {
                    return match;
                }
                return `<span class="ce-inline-tool--color__token" ${styled.style}>`;
            });
            return {
                ...block,
                data: {
                    ...block.data,
                    text: newText,
                },
            };
        });
        return {
            ...output,
            blocks: updatedBlocks,
        };
    }
    _extractTags(blocks) {
        const html = convertBlocksToHtml(blocks);
        const regex = /data-user-id="([^"]+)"/g;
        // Extraction des IDs sous forme de tableau
        return [...html.matchAll(regex)].map(match => match[1]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showToolbar: { classPropertyName: "showToolbar", publicName: "showToolbar", isSignal: true, isRequired: false, transformFunction: null }, isCompact: { classPropertyName: "isCompact", publicName: "isCompact", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "ta-cms-editor-toolbar", inputs: ["activeTool", "labels", "enabledTools"], outputs: ["blockCommand", "blockTool"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-input', standalone: true, imports: [EditorToolbarComponent], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ['editorjs', { static: true }]
            }] } });

const convertBlocksToHtml = (blocks) => {
    const edjsParser = edjsHTML();
    return edjsParser.parse({ blocks }).join(" ");
};

/*
 * Public API Surface of cms
 */

/*
 * Public API Surface of wysiswyg
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BlockTextComponent, EDITOR_ALL_TOOLS, EditorInputComponent, EditorToolbarComponent, convertBlocksToHtml };
//# sourceMappingURL=ta-wysiswyg.mjs.map
