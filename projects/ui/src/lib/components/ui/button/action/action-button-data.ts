import { CamIconType } from '@ta/icons';

export interface ActionButtonData {
  callback: (data?: any) => void;
  icon: CamIconType | string;
  label?: string;
}
