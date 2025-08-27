export type SwitchCasesProjectStatusChanged = {
    type: 'ProjectStatusChanged';
    context: [
        {
            key: 'ProjectStatus';
            value: number;
        },
        {
            key: 'ProjectId';
            value: string;
        }
    ];
    redirectContext: [
        {
            key: 'ProjectId';
            value: string;
        }
    ];
};
export type SwitchCasesNewQuotationVersion = {
    type: 'NewQuotationVersion';
    context: [
        {
            key: 'VersionNumber';
            value: number;
        }
    ];
    redirectContext: [
        {
            key: 'ProjectId';
            value: string;
        },
        {
            key: 'QuotationId';
            value: string;
        },
        {
            key: 'QuotationVersionId';
            value: string;
        }
    ];
};
export type SwitchCasesNewInvoice = {
    type: 'NewInvoice';
    context: [
        {
            key: 'InvoiceRef';
            value: string;
        }
    ];
    redirectContext: [
        {
            key: 'ProjectId';
            value: string;
        },
        {
            key: 'InvoiceId';
            value: string;
        }
    ];
};
export type SwitchCasesInvoicePaymentStatusChanged = {
    type: 'InvoicePaymentStatusChanged';
    context: [
        {
            key: 'InvoiceRef';
            value: string;
        },
        {
            key: 'PaymentStatus';
            value: number;
        }
    ];
    redirectContext: [
        {
            key: 'ProjectId';
            value: string;
        },
        {
            key: 'InvoiceId';
            value: string;
        }
    ];
};
export type SwitchCases = SwitchCasesProjectStatusChanged | SwitchCasesNewQuotationVersion | SwitchCasesNewInvoice | SwitchCasesInvoicePaymentStatusChanged;
