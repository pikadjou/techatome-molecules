export function getModifiedValues<T extends object>(
  current: T,
  initial: Partial<T>
): Partial<T> {
  return Object.keys(current).reduce<Partial<T>>((result, key) => {
    const typedKey = key as keyof T;
    if (current[typedKey] !== initial[typedKey]) {
      result[typedKey] = current[typedKey];
    }
    return result;
  }, {});
}
