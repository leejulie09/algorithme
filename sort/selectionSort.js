const selectionSort = (nums) => {
  let min = Math.min(...nums);
  console.log(min);
  for (let i = 0; i < nums.length; i++) {
    if (min < nums[i]) {
      return nums.splice(0, 1, "min");
    }
  }
};

selectionSort([9, 5, 1, 2, 3, 10]);
//control option n  // code runner 실행

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      // console.log(i, j);
      if (array[j] < array[lowest]) {
        lowest = j;
      }
      //swap
      if (i != lowest) {
        // console.log(array)
        // console.log(i, lowest);
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
        // console.log(array)
      }
    }
    return arr;
  }

  selectionSort([0, 2, 34, 22, 10, 19, 17]);

  //ES6 version

  function selectionSort(array) {
    const swap = (arr, idx1, idx2) =>
      ([array[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < array.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < array.length; j++) {
        // console.log(i, j);
        if (array[j] < array[lowest]) {
          lowest = j;
        }
      }
    }
    if (i != lowest) {
      swap(array, i, lowest);
    }
    return array;
  }
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);