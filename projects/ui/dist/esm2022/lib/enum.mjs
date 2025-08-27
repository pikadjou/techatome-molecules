export var ENotificationCode;
(function (ENotificationCode) {
    ENotificationCode[ENotificationCode["none"] = 0] = "none";
    ENotificationCode[ENotificationCode["error"] = 1] = "error";
    ENotificationCode[ENotificationCode["warning"] = 2] = "warning";
    ENotificationCode[ENotificationCode["information"] = 3] = "information";
    ENotificationCode[ENotificationCode["success"] = 4] = "success";
})(ENotificationCode || (ENotificationCode = {}));
export const getTypeClass = (code) => {
    if (code === ENotificationCode.error) {
        return 'danger';
    }
    else if (code === ENotificationCode.warning) {
        return 'warning';
    }
    else if (code === ENotificationCode.information) {
        return 'info';
    }
    else if (code === ENotificationCode.success) {
        return 'success';
    }
    else {
        return '';
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxpQkFNWDtBQU5ELFdBQVksaUJBQWlCO0lBQzNCLHlEQUFJLENBQUE7SUFDSiwyREFBSyxDQUFBO0lBQ0wsK0RBQU8sQ0FBQTtJQUNQLHVFQUFXLENBQUE7SUFDWCwrREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLGlCQUFpQixLQUFqQixpQkFBaUIsUUFNNUI7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUF1QixFQUFFLEVBQUU7SUFDdEQsSUFBSSxJQUFJLEtBQUssaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztTQUFNLElBQUksSUFBSSxLQUFLLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7U0FBTSxJQUFJLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO1NBQU0sSUFBSSxJQUFJLEtBQUssaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFTm90aWZpY2F0aW9uQ29kZSB7XG4gIG5vbmUsXG4gIGVycm9yLFxuICB3YXJuaW5nLFxuICBpbmZvcm1hdGlvbixcbiAgc3VjY2Vzcyxcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGVDbGFzcyA9IChjb2RlOiBFTm90aWZpY2F0aW9uQ29kZSkgPT4ge1xuICBpZiAoY29kZSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUuZXJyb3IpIHtcbiAgICByZXR1cm4gJ2Rhbmdlcic7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUud2FybmluZykge1xuICAgIHJldHVybiAnd2FybmluZyc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUuaW5mb3JtYXRpb24pIHtcbiAgICByZXR1cm4gJ2luZm8nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT09IEVOb3RpZmljYXRpb25Db2RlLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcbiJdfQ==