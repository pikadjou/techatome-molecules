import {
  API,
  BlockToolConstructorOptions,
  InlineTool,
} from "@editorjs/editorjs";
import { MenuConfig } from "@editorjs/editorjs/types/tools";

type User = { id: string; name: string };

export class TagTool implements InlineTool {
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

  readonly api: API;
  public users: User[] = [];

  public dropdown = document.createElement("div");
  public templateTagSpan = document.createElement("span");

  private _currentTagSpan: null | HTMLSpanElement = null;

  constructor({
    api,
    config,
  }: BlockToolConstructorOptions<any, { users: User[] }>) {
    this.api = api;
    this.users = config?.users || [];

    this._initDOM();
  }

  public render(): MenuConfig {
    return {
      icon: "@",
      label: "Tag",
      onActivate: () => {
        this._insertTagAtCursor();
      },
    };
  }

  public surround(range: Range | null) {
    if (!range) {
      return;
    }

    if (!this._currentTagSpan) {
      return;
    }
    this._currentTagSpan = this.templateTagSpan.cloneNode(
      true
    ) as typeof this.templateTagSpan;
    range.insertNode(this._currentTagSpan);

    this._showDropdown();
  }

  public checkState() {
    return false;
  }

  public handleKeydown = (event?: Event) => {
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
  public handleTyping = () => {
    if (!this._currentTagSpan) {
      return;
    }
    const text = this._currentTagSpan?.textContent?.trim();
    const query = text?.slice(1).toLowerCase(); // Supprime le @ et met en minuscule

    const filteredUsers =
      !query || query?.length === 0
        ? this.users
        : this.users.filter((user) => user.name.toLowerCase().includes(query));

    this._updateDropdown(filteredUsers);
  };
  public handleOutsideClick = (event?: Event) => {
    if (!event) {
      return;
    }
    if (this.dropdown.hidden) {
      return;
    }

    // Vérifie si le clic n'est PAS sur la dropdown ni sur la mention en cours
    if (
      !this.dropdown.contains(event.target as Node) &&
      this._currentTagSpan !== event.target
    ) {
      this._cancelTag();
    }
  };

  private _initDOM() {
    this.templateTagSpan.classList.add(
      "tag-user",
      "text-color-text-brand-primary"
    );
    this.templateTagSpan.dataset["userId"] = "";
    this.templateTagSpan.textContent = "@";

    this.dropdown.classList.add(
      "tag-dropdown",
      "p-space-sm",
      "bxs-shadow-black-sm"
    );
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
  private _insertTagAtCursor() {
    const selection = window.getSelection();
    if (!selection) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (!range) {
      return;
    }

    this._currentTagSpan = this.templateTagSpan.cloneNode(
      true
    ) as typeof this.templateTagSpan;

    range.insertNode(this._currentTagSpan);
    range.setStartAfter(this._currentTagSpan);
    range.setEndAfter(this._currentTagSpan);
    selection.removeAllRanges();
    selection.addRange(range);

    this._showDropdown();
  }
  private _showDropdown() {
    if (!this._currentTagSpan) {
      return;
    }
    this._updateDropdown(this.users);

    document.body.appendChild(this.dropdown);
    const rect = this._currentTagSpan.getBoundingClientRect();
    this.dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    this.dropdown.style.left = `${rect.left + window.scrollX}px`;
  }

  private _hideDropdown() {
    document.body.removeChild(this.dropdown);
  }

  private _updateDropdown(users: User[]) {
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

  private _selectUser(user: User) {
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

  private _cancelTag() {
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
