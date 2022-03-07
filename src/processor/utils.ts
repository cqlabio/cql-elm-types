export const assertOneOf = (allChoices: string[], keys: string[]) => {
  keys.forEach((key) => {
    if (!allChoices.includes(key)) {
      throw new Error(`Not expecting key: ${key}`);
    }
  });
};

export const ensureList = (item: any) => {
  if (!item) {
    throw new Error("expecting a value");
  }
  return Array.isArray(item) ? item : [item];
};
