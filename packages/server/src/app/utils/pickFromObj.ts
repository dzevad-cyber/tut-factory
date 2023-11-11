export const pickFromObj = (keys: string[], obj: Record<string, any>) => {
  const result = keys.reduce((acc, currentValue) => {
    if (!obj[currentValue]) return acc;

    return {
      ...acc,
      [currentValue]: obj[currentValue],
    };
  }, {});

  return result;
};
