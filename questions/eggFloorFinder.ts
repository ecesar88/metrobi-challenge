function eggFloorFinder(buildingFloors: number[]) {
  const dropTheEgg = (floor: number) => {
    // Returns true if the egg got broken
    const FLOOR_THE_EGG_BREAKS = 89; // We don't know that
    let TIMES_THE_EGG_WAS_BROKEN = 0;

    console.log(`Dropping the egg from floor nº ${floor}`);

    if (floor >= FLOOR_THE_EGG_BREAKS) {
      TIMES_THE_EGG_WAS_BROKEN += 1;
      return [true, floor];
    }

    return [false, 0];
  };

  let firstBrokeAt: number = buildingFloors.length;
  let highestDropWithoutBreaking = 0;

  const halfLength = Math.floor(buildingFloors.length / 2);

  // Divide the building in 2, so that it's easier to work with
  const firstHalf = buildingFloors.slice(0, halfLength);
  const secondHalf = buildingFloors.slice(halfLength, buildingFloors.length);

  // Starting with the second half
  const halfOfTheHalf = Math.floor(secondHalf.length / 2);

  for (let index = halfOfTheHalf; index <= secondHalf.length; index++) {
    const [hasTheEggBroken, floorTheEggBroke] = dropTheEgg(
      index + firstHalf.length
    );

    // If it broke here we have found the floor it breaks
    if (hasTheEggBroken) {
      if (index === halfOfTheHalf) {
        console.log(
          `The egg has broken on the first floor of the half of the secondHalf: ${floorTheEggBroke}.\nTrying from the first half`
        );
        break;
      }

      console.log(`The egg has broken on floor nº ${floorTheEggBroke}`);

      highestDropWithoutBreaking = +floorTheEggBroke - 1;

      console.log(
        `The highest floor the egg can be dropped without breaking is floor nº ${highestDropWithoutBreaking}`
      );

      return highestDropWithoutBreaking;
    }
  }

  // Start searching on the start of the array until the position it first broke
  for (let index = 0; index < firstBrokeAt; index++) {
    const [hasTheEggBroken, floorTheEggBroke] = dropTheEgg(index);

    if (hasTheEggBroken) {
      // If it broke here we have now used our 2 available eggs and found the floor. It must be the floor below.
      console.log(`The egg has broken on floor nº ${floorTheEggBroke}`);
      highestDropWithoutBreaking = +floorTheEggBroke - 1;
      break;
    }
  }

  console.log(
    `The highest floor the egg can be dropped without breaking is floor nº ${highestDropWithoutBreaking}`
  );
}

export default eggFloorFinder;
