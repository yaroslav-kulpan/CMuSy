function isObject(item: Record<string, any>) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
export function deepMerge(
  target: Record<string, any>,
  source: Record<string, any>
) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (key in target && isObject(target[key]) && isObject(source[key])) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
}
