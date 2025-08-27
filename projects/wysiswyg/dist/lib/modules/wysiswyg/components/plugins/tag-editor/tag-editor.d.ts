import { API, BlockToolConstructorOptions, InlineTool } from '@editorjs/editorjs';
import { MenuConfig } from '@editorjs/editorjs/types/tools';
type User = {
    id: string;
    name: string;
};
export declare class TagTool implements InlineTool {
    static get isInline(): boolean;
    static get shortcut(): string;
    static get sanitize(): {
        span: {
            class: boolean;
            'data-user-id': boolean;
        };
    };
    readonly api: API;
    users: User[];
    dropdown: HTMLDivElement;
    templateTagSpan: HTMLSpanElement;
    private _currentTagSpan;
    constructor({ api, config }: BlockToolConstructorOptions<any, {
        users: User[];
    }>);
    render(): MenuConfig;
    surround(range: Range | null): void;
    checkState(): boolean;
    handleKeydown: (event?: Event) => void;
    handleTyping: () => void;
    handleOutsideClick: (event?: Event) => void;
    private _initDOM;
    private _insertTagAtCursor;
    private _showDropdown;
    private _hideDropdown;
    private _updateDropdown;
    private _selectUser;
    private _cancelTag;
}
export {};
