export const extractSequelizeErrors = (errors: Record<string, any>[]) => {
  const extractedErrors = errors.reduce(
    (acc: Record<string, string>, val: Record<string, any>) => {
      return {
        ...acc,
        [val.path]: val.message,
      };
    },
    {}
  );

  return extractedErrors;
};
