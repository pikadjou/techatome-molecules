import { AbstractNotificationTemplateComponent } from "../abstract";
import * as i0 from "@angular/core";
export declare class InvoicePaymentStatusChangedComponent extends AbstractNotificationTemplateComponent {
    template: import("@angular/core").TemplateRef<any> | null;
    get paymentStatus(): string | 0;
    goTo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoicePaymentStatusChangedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InvoicePaymentStatusChangedComponent, "ta-invoice-payment-status-changed", never, {}, {}, never, never, true, never>;
}
