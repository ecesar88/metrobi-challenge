function asyncTimer(arr: Array<string>) {
  let timer = 1000;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    timer *= 2;

    setTimeout(() => console.log(element, timer), timer);
  }
}

export default asyncTimer;
