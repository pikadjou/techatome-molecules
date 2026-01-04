import * as i0 from '@angular/core';
import { input, Component, EventEmitter, inject, ViewChild, Output, NgModule } from '@angular/core';
import { ENotificationCode, NotificationInlineComponent, TaNotificationModule } from '@ta/notification';
import { TitleComponent, TextComponent, ToastComponent, TaUiModule } from '@ta/ui';
import { TaBaseComponent, SafePipe, isNotEmptyObject, isNonNullable } from '@ta/utils';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { ColorTool } from 'editorjs-color';
import { firstValueFrom } from 'rxjs';
import { TaDocumentsService } from '@ta/services';
import { TaTranslationService } from '@ta/translation';
import edjsHTML from 'editorjs-html';
import { CommonModule } from '@angular/common';

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

var editorjs$3 = {
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
var en = {
	editorjs: editorjs$3
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: en,
    editorjs: editorjs$3
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
var es = {
	editorjs: editorjs$2
};

var es$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: es,
    editorjs: editorjs$2
});

var editorjs$1 = {
	placeholder: "Répondre",
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
var fr = {
	editorjs: editorjs$1
};

var fr$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fr,
    editorjs: editorjs$1
});

var editorjs = {
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
var nl = {
	editorjs: editorjs
};

var nl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: nl,
    editorjs: editorjs
});

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
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        this.translationService = inject(TaTranslationService);
        this.languages = {
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
                        if (typeof blocks === "string") {
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
    }
    ngOnDestroy() {
        this.editorInstance?.destroy();
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
        return new EditorJS({
            holder: this.editorjs.nativeElement,
            minHeight: 100,
            data: { blocks: this.initValue() },
            placeholder: translations["placeholder"],
            tools: {
                header: Header,
                list: List,
                quote: Quote,
                delimiter: Delimiter,
                warning: Warning,
                TextColor: {
                    class: ColorTool,
                    config: {
                        backgroundColorLabel: translations["colortool.backgroundColorLabel"],
                        frontColorLabel: translations["colortool.frontColorLabel"],
                    },
                },
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            uploadByFile: async (file) => {
                                return this.uploadByFile(file);
                            },
                        },
                    },
                },
                mention: {
                    class: TagTool,
                    config: {
                        users: this.users(),
                    },
                },
            },
            onChange: this._onChange,
            ...translations,
        });
    }
    _getTranslation() {
        if (!isNonNullable(this.translationService.getLanguage())) {
            return {};
        }
        return this.languages[this.translationService.getLanguage()].editorjs ?? {};
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
        const updatedBlocks = output.blocks.map((block) => {
            if (block.type !== "paragraph" || !block.data?.text) {
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
        return [...html.matchAll(regex)].map((match) => match[1]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms-editor-input", standalone: true, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ["editorjs", { static: true }]
            }] } });

const convertBlocksToHtml = (blocks) => {
    const edjsParser = edjsHTML();
    return edjsParser.parse({ blocks }).join(" ");
};

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaWysiswygModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { BlockTextComponent, EditorInputComponent } from '@ta/library-name';
 */
class TaWysiswygModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule,
            TaUiModule,
            TaNotificationModule,
            SafePipe,
            BlockTextComponent,
            EditorInputComponent], exports: [BlockTextComponent, EditorInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule,
            TaUiModule,
            TaNotificationModule,
            BlockTextComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaUiModule,
                        TaNotificationModule,
                        SafePipe,
                        BlockTextComponent,
                        EditorInputComponent,
                    ],
                    exports: [BlockTextComponent, EditorInputComponent],
                }]
        }] });

/*
 * Public API Surface of cms
 */

/*
 * Public API Surface of wysiswyg
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BlockTextComponent, EditorInputComponent, TaWysiswygModule, convertBlocksToHtml };
//# sourceMappingURL=ta-wysiswyg.mjs.map
