const isOpeningBrace = (brace: string) => ["(", "{", "["].includes(brace);
const isClosingBrace = (brace: string) => [")", "}", "]"].includes(brace);

const sortObjectByKey = (objectToSort: Record<string, number>) =>
  Object.keys(objectToSort)
    .sort()
    .reduce((obj: Record<string, number>, key: string) => {
      obj[key] = objectToSort[key];
      return obj;
    }, {});

const compareArrays = (arr1: unknown[], arr2: unknown[]) =>
  arr1.join("") === arr2.join("");

const sortAndCompare = (
  obj1: Record<string, number>,
  obj2: Record<string, number>
) => {
  const sortedObject1 = sortObjectByKey(obj1);
  const sortedObject2 = sortObjectByKey(obj2);

  return compareArrays(
    Object.values(sortedObject1),
    Object.values(sortedObject2)
  );
};

function lexicalBracketParser(bracketsString: string) {
  // If it's empty or the length is not pair, it makes no sense to continue
  if (!bracketsString.length || bracketsString.length % 2 !== 0) {
    return false;
  }

  const stack: string[] = [];

  // Add the items to the stack
  bracketsString.split("").forEach((bracket) => {
    stack.push(bracket);
  });

  let openingBraces: string[] = [];
  let closingBraces: string[] = [];

  // Divide the array in opening and closing braces
  stack.forEach((brace) => {
    if (isOpeningBrace(brace)) {
      openingBraces.push(brace);
    } else if (isClosingBrace(brace)) {
      closingBraces.push(brace);
    }
  });

  // Count how many times a specific brace opened
  let openingCount: Record<string, number> = {};
  openingBraces.forEach((brace) => {
    openingCount[brace] = openingCount[brace] ? openingCount[brace] + 1 : 1;
  });

  // Count how many times a specific brace closed
  let closingCount: Record<string, number> = {};
  closingBraces.forEach((brace) => {
    closingCount[brace] = closingCount[brace] ? closingCount[brace] + 1 : 1;
  });

  console.log(sortAndCompare(openingCount, closingCount));

  return sortAndCompare(openingCount, closingCount);
}

export default lexicalBracketParser;
