export declare enum ENotificationCode {
    none = 0,
    error = 1,
    warning = 2,
    information = 3,
    success = 4
}
export declare const getTypeClass: (code: ENotificationCode) => "success" | "warning" | "" | "danger" | "info";
