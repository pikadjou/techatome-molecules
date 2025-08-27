export interface BottomSheetData {
    label: string;
    icon?: string;
    subtitle?: string;
    secure?: boolean;
    action: (data?: any) => void;
}
