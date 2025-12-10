export const copyTextToClipboard = async (
  text: string,
  success: (message: string) => void,
  error: (message: string) => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    success("ui.clipboard.success");
  } catch (err) {
    error("ui.clipboard.error");
  }
};
