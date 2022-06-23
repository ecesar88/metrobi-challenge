const string = "{([])}";

(function lexicalBracketParser(bracketsString: string) {
  const dict = {
    opening: { "{": "{", "[": "[", "(": "(" },
    closing: { "}": "}", "]": "]", ")": ")" },
  };

  const mapOpeningKeys = {
    "{": {
      open: "{",
      close: "}",
    },
    "[": {
      open: "[",
      close: "]",
    },
    "(": {
      open: "(",
      close: ")",
    },
  };

  // Generate an inverse map
  let mapClosingKeys = {};

  Object.keys(mapOpeningKeys).forEach((item) => {
    mapClosingKeys[mapOpeningKeys[item].close] = {
      ...mapOpeningKeys[item],
    };
  });

  const stringArray = bracketsString.split("");

  const findFirstClosingBrace = () => {
    const closingBraces = Object.keys(dict.closing).join("");
    return stringArray.findIndex((bracket) => closingBraces.includes(bracket));
  };

  const closingStartsAt = findFirstClosingBrace();

  const openingArray = [...stringArray.slice(0, closingStartsAt)];

  const closingArray = [
    ...stringArray.slice(closingStartsAt, stringArray.length),
  ].reverse();

  let isValid = true;

  // Check if every item doesn't open without closing
  openingArray.forEach((openingChar) => {
    if (!closingArray.includes(mapOpeningKeys[openingChar].close)) {
      console.log("Closing bracket mismatch");
      isValid = false;
      return;
    }
  });

  // Check if every item doesn't close wihout opening

  // Do the check
  closingArray.forEach((closingChar) => {
    if (!openingArray.includes(mapClosingKeys[closingChar].open)) {
      console.log("Opening bracket mismatch");
      isValid = false;
      return;
    }
  });

  // Check the order
  const openingHalf = openingArray.map((openingChar, openingIdx) => {
    return { [openingChar]: openingIdx };
  });

  const closingHalf = closingArray.map((closingChar, closingIdx) => {
    return { [mapClosingKeys[closingChar].open]: closingIdx };
  });

  const areTheyEqual =
    JSON.stringify(openingHalf) === JSON.stringify(closingHalf);

  if (!areTheyEqual) isValid = false;
  
  console.log(isValid);
  return isValid;
})(string);
