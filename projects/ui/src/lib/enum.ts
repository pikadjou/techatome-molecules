export enum ENotificationCode {
  none,
  error,
  warning,
  information,
  success,
}

export const getTypeClass = (code: ENotificationCode) => {
  if (code === ENotificationCode.error) {
    return 'danger';
  } else if (code === ENotificationCode.warning) {
    return 'warning';
  } else if (code === ENotificationCode.information) {
    return 'info';
  } else if (code === ENotificationCode.success) {
    return 'success';
  } else {
    return '';
  }
};
