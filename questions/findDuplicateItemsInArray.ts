// const numbers = [1, 23, 87, 87, 9, 34, 87, 112, 90, 567, 24, 567];

let numbers = Array.from({ length: 1000000 }, (_, idx) => idx + 1);

(function findDuplicateItems(array: number[]) {
  const randomIndex = 1982;
  numbers[randomIndex] = numbers[randomIndex - 1];

  const dict = {};

  array.forEach((item) => {
    dict[item] ? (dict[item] = dict[item] + 1) : (dict[item] = 1);
  });

  const keys = Object.keys(dict);

  const duplicateItems = keys.filter((item) => dict[item] > 1);

  console.log(dict);
  console.log(duplicateItems);

  return duplicateItems;
})(numbers);
