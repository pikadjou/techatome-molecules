import { MenuBase } from "./item/base";
export declare class Menu<T = MenuBase> {
    direction: "horizontal" | "vertical" | "responsive";
    elements: T[];
    constructor(options?: IMenuOption<T>);
}
export interface IMenuOption<T = MenuBase> {
    direction?: "horizontal" | "vertical" | "responsive";
    elements?: T[];
}
