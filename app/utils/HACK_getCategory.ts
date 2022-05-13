export const unsafe___getCategory = (categories: string[] | undefined) => {
  return categories
    ?.filter((c) => c !== "Shaken" && c !== "Stirred")[0]
    .toLowerCase();
};
