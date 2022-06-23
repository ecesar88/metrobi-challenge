const floors = Array.from({ length: 100 }, (_, idx) => idx + 1);

(function eggFloorFinder(buildingFloors: number[]) {
  const dropTheEgg = (floor: number) => {
    // Returns true if the egg got broken
    const FLOOR_THE_EGG_BREAKS = 24; // We don't know that
    let TIMES_THE_EGG_WAS_BROKEN = 0;

    if (floor > FLOOR_THE_EGG_BREAKS) {
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
  for (let index = secondHalf.length; index >= 0; index--) {
    const [hasTheEggBroken, floorTheEggBroke] = dropTheEgg(
      index + firstHalf.length
    );

    // If it broke here we need to start searching on the start of the array
    if (hasTheEggBroken) {
      firstBrokeAt = floorTheEggBroke as number;
      break;
    }
  }

  // Start searching on the start of the array until the position it first broke
  for (let index = 0; index < firstBrokeAt; index++) {
    const [hasTheEggBroken, floorTheEggBroke] = dropTheEgg(index);

    if (hasTheEggBroken) {
      // If it broke here we have now used our 2 available eggs and found the floor. It must be the floor below.
      highestDropWithoutBreaking = (+floorTheEggBroke - 1) as number;
      break;
    }
  }

  console.log(highestDropWithoutBreaking);
})(floors);
