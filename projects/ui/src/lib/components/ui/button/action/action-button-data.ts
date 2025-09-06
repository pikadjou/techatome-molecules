import { TaIconType } from '@ta/icons';

export interface ActionButtonData {
  callback: (data?: any) => void;
  icon: TaIconType | string;
  label?: string;
}
