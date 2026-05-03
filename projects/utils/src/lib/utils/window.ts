export const openExternalUrl = (url: string) => {
  window.open(url);
};
export const loadStylesheet = (id: string, href: string): void => {
  if (document.getElementById(id)) {
    return;
  }
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};
