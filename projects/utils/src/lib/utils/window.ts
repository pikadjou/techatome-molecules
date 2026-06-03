export const openExternalUrl = (url: string) => {
  window.open(url);
};

const _stylesheetPromises = new Map<string, Promise<void>>();

export const loadStylesheet = (id: string, href: string): Promise<void> => {
  const cached = _stylesheetPromises.get(id);
  if (cached) {
    return cached;
  }
  if (document.getElementById(id)) {
    const resolved = Promise.resolve();
    _stylesheetPromises.set(id, resolved);
    return resolved;
  }
  const promise = new Promise<void>((resolve, reject) => {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
    document.head.appendChild(link);
  });
  _stylesheetPromises.set(id, promise);
  return promise;
};
