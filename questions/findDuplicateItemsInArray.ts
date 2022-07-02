function findDuplicateItems(array: number[]) {
  const dict: Record<string, number> = {};

  array.forEach((item) => {
    dict[item] ? (dict[item] = dict[item] + 1) : (dict[item] = 1);
  });

  const keys = Object.keys(dict);

  const duplicateItems = keys.filter((item) => dict[item] > 1);

  return duplicateItems;
}

export default findDuplicateItems;
